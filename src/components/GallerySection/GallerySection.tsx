import React, { useCallback, useEffect, useRef, useState } from "react";
import { type GalleryPhotoItemProps } from "../../interface/types";
import { type GallerySectionProps } from "../../interface/types";
import { defaultGalleryPhotos } from "../../config/GalleryPhotos";
import { SectionHeader } from "../Shared/SectionHeader";

// --- Icons (inline so there are no extra dependencies) ---
const iconProps = {
  width: 20,
  height: 20,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  "aria-hidden": true,
};

const ChevronLeft = () => (
  <svg {...iconProps}>
    <path d="m15 18-6-6 6-6" />
  </svg>
);
const ChevronRight = () => (
  <svg {...iconProps}>
    <path d="m9 18 6-6-6-6" />
  </svg>
);
const ArrowUpRight = () => (
  <svg {...iconProps} width={18} height={18}>
    <path d="M7 17 17 7" />
    <path d="M8 7h9v9" />
  </svg>
);
const CloseIcon = () => (
  <svg {...iconProps}>
    <path d="M18 6 6 18" />
    <path d="m6 6 12 12" />
  </svg>
);

// --- Shared glass round button ---
type RoundButtonProps = {
  label: string;
  onClick: () => void;
  disabled?: boolean;
  children: React.ReactNode;
  buttonRef?: React.Ref<HTMLButtonElement>;
};

const RoundButton: React.FC<RoundButtonProps> = ({
  label,
  onClick,
  disabled,
  children,
  buttonRef,
}) => (
  <button
    ref={buttonRef}
    type="button"
    aria-label={label}
    onClick={onClick}
    disabled={disabled}
    className="flex h-12 w-12 items-center justify-center rounded-full
               border border-black/10 dark:border-white/15
               bg-white/60 dark:bg-white/5 backdrop-blur-md
               text-zinc-900 dark:text-neutral-100
               transition-all duration-200 motion-reduce:transition-none
               hover:bg-sunset-bright hover:border-sunset-bright hover:text-white
               active:scale-95
               disabled:opacity-30 disabled:pointer-events-none
               focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sunset-bright"
  >
    {children}
  </button>
);

// --- Lightbox ---
type LightboxProps = {
  photo: GalleryPhotoItemProps;
  index: number;
  total: number;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
};

const Lightbox: React.FC<LightboxProps> = ({
  photo,
  index,
  total,
  onClose,
  onPrev,
  onNext,
}) => {
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    closeRef.current?.focus();
  }, []);

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={photo.photoTitle}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-8
               bg-neutral-950/70 backdrop-blur-md"
      onClick={onClose}
    >
      <div
        className="relative flex max-h-[90vh] w-full max-w-5xl flex-col overflow-hidden rounded-3xl
                 border border-white/15 bg-neutral-900/70 shadow-2xl backdrop-blur-2xl md:flex-row"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button (sits in the card's top-right corner) */}
        <div className="absolute right-4 top-4 z-10">
          <RoundButton
            label="Close photo"
            onClick={onClose}
            buttonRef={closeRef}
          >
            <CloseIcon />
          </RoundButton>
        </div>

        {/* Photo area */}
        <div className="relative flex min-h-0 items-center justify-center overflow-hidden bg-black/40 md:w-3/5">
          {/* Blurred copy of the photo fills any empty space */}
          <img
            src={photo.photoUrl}
            alt=""
            aria-hidden="true"
            className="absolute inset-0 h-full w-full scale-125 object-cover opacity-40 blur-2xl"
          />
          <img
            src={photo.photoUrl}
            alt={photo.photoAlt ?? photo.photoTitle}
            className="relative max-h-[55vh] w-full object-contain md:max-h-[90vh]"
          />

          <span className="absolute left-4 top-4 rounded-full border border-white/20 bg-black/40 px-3 py-1 text-xs font-medium text-white backdrop-blur-md">
            {index + 1} / {total}
          </span>

          {total > 1 && (
            <>
              <div className="absolute left-4 top-1/2 -translate-y-1/2">
                <RoundButton label="Previous photo" onClick={onPrev}>
                  <ChevronLeft />
                </RoundButton>
              </div>
              <div className="absolute right-4 top-1/2 -translate-y-1/2">
                <RoundButton label="Next photo" onClick={onNext}>
                  <ChevronRight />
                </RoundButton>
              </div>
            </>
          )}
        </div>

        {/* Caption panel: under the photo on mobile, to the right on desktop */}
        <div className="flex flex-col justify-end overflow-y-auto p-6 sm:p-8 md:w-2/5 md:p-10">
          <span className="inline-block self-start rounded-full border border-sunset-amber/40 bg-sunset-bright/20 px-3 py-0.5 text-xs font-medium text-sunset-peach">
            {photo.photoCategory}
          </span>
          <h3 className="mt-3 text-2xl font-bold tracking-tight text-neutral-100 md:text-3xl">
            {photo.photoTitle}
          </h3>
          <p className="mt-1 text-sm text-neutral-400">
            {photo.photoDate}, {photo.photoYear}
            {photo.photoLocation ? `, ${photo.photoLocation}` : ""}
          </p>
          {photo.photoCaption && (
            <p className="mt-4 text-sm leading-relaxed text-neutral-300 sm:text-base">
              {photo.photoCaption}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

// --- Main section ---
export const GallerySection: React.FC<GallerySectionProps> = ({
  photos = defaultGalleryPhotos,
  heading = "Gallery",
  description = "Events, projects, and the everyday work behind them.",
  id = "gallery",
}) => {
  const trackRef = useRef<HTMLUListElement>(null);
  const triggerRef = useRef<HTMLElement | null>(null);
  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(true);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const isOpen = activeIndex !== null;

  // --- Carousel scroll state ---
  const updateScrollState = useCallback(() => {
    const el = trackRef.current;
    if (!el) return;
    setCanPrev(el.scrollLeft > 4);
    setCanNext(el.scrollLeft + el.clientWidth < el.scrollWidth - 4);
  }, []);

  useEffect(() => {
    updateScrollState();
    const el = trackRef.current;
    if (!el) return;
    const observer = new ResizeObserver(updateScrollState);
    observer.observe(el);
    return () => observer.disconnect();
  }, [updateScrollState, photos.length]);

  const scrollByPage = (direction: 1 | -1) => {
    const el = trackRef.current;
    if (!el) return;
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    el.scrollBy({
      left: direction * el.clientWidth * 0.85,
      behavior: reduceMotion ? "auto" : "smooth",
    });
  };

  // --- Lightbox controls ---
  const openPhoto = (index: number, e: React.MouseEvent<HTMLButtonElement>) => {
    triggerRef.current = e.currentTarget;
    setActiveIndex(index);
  };

  const closePhoto = useCallback(() => {
    setActiveIndex(null);
    triggerRef.current?.focus();
  }, []);

  const stepPhoto = useCallback(
    (direction: 1 | -1) => {
      setActiveIndex((current) =>
        current === null
          ? current
          : (current + direction + photos.length) % photos.length,
      );
    },
    [photos.length],
  );

  useEffect(() => {
    if (!isOpen) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") closePhoto();
      if (e.key === "ArrowRight") stepPhoto(1);
      if (e.key === "ArrowLeft") stepPhoto(-1);
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [isOpen, closePhoto, stepPhoto]);

  if (photos.length === 0) return null;

  const activePhoto = activeIndex !== null ? photos[activeIndex] : null;

  return (
    <section
      id={id}
      className="w-full scroll-mt-24 py-16 text-zinc-900 dark:text-neutral-100 md:py-24"
    >
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeader title={heading} description={description} />

        {/* Glass container */}
        <div
          className="relative overflow-hidden rounded-3xl p-8 sm:p-12
               bg-white/40 dark:bg-white/[0.03]
               backdrop-blur-md backdrop-saturate-150
               border border-white/80 dark:border-white/10
               shadow-[0_8px_32px_0_rgba(0,0,0,0.06)] dark:shadow-2xl
               transition-colors duration-300"
        >
          <div className="relative z-10">
            {/* Carousel controls */}
            <div className="flex justify-end gap-3">
              <RoundButton
                label="Scroll gallery left"
                onClick={() => scrollByPage(-1)}
                disabled={!canPrev}
              >
                <ChevronLeft />
              </RoundButton>
              <RoundButton
                label="Scroll gallery right"
                onClick={() => scrollByPage(1)}
                disabled={!canNext}
              >
                <ChevronRight />
              </RoundButton>
            </div>

            {/* Carousel track */}
            {/* ...your <ul> stays exactly as it is... */}

            {/* Carousel track */}
            <ul
              ref={trackRef}
              onScroll={updateScrollState}
              className="-mx-8 -mb-6 mt-4 flex snap-x snap-mandatory scroll-pl-8 gap-6 overflow-x-auto px-8 pb-14 pt-6
             [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
            >
              {photos.map((photo, index) => (
                <li
                  key={photo.id}
                  className="w-[78%] shrink-0 snap-start sm:w-[calc(50%-0.75rem)] lg:w-[calc(33.333%-1rem)]"
                >
                  <div
                    className="group relative aspect-[3/4] rounded-[2rem] shadow-lg
                   transition-all duration-300 motion-reduce:transition-none
                   hover:-translate-y-1 hover:shadow-[0_12px_32px_rgba(234,97,19,0.25)]
                   has-[:focus-visible]:outline-2 has-[:focus-visible]:outline-offset-4
                   has-[:focus-visible]:outline-sunset-bright"
                  >
                    <button
                      type="button"
                      onClick={(e) => openPhoto(index, e)}
                      aria-label={`Open photo: ${photo.photoTitle}`}
                      className="absolute inset-0 isolate block h-full w-full transform-gpu overflow-hidden
                     rounded-[2rem] text-left outline-none
                     [clip-path:inset(0_round_2rem)]"
                    >
                      <img
                        src={photo.photoUrl}
                        alt={photo.photoAlt ?? photo.photoTitle}
                        loading="lazy"
                        draggable={false}
                        className="absolute inset-0 h-full w-full rounded-[2rem] object-cover transition-transform duration-700
                       motion-reduce:transition-none group-hover:scale-105"
                      />

                      {/* Open indicator */}
                      <span
                        aria-hidden="true"
                        className="absolute right-4 top-4 flex h-12 w-12 items-center justify-center rounded-full
                       border border-white/40 bg-white/20 text-white backdrop-blur-md
                       transition-colors duration-200 group-hover:border-sunset-bright group-hover:bg-sunset-bright"
                      >
                        <ArrowUpRight />
                      </span>

                      {/* Glass caption panel */}
                      <div
                        className="absolute inset-x-0 bottom-0 border-t border-white/25 bg-neutral-950/45 p-5
                       backdrop-blur-xl backdrop-saturate-150 transition-colors duration-300
                       group-hover:bg-sunset-dusk/50"
                      >
                        <span className="inline-block rounded-full border border-sunset-amber/40 bg-sunset-bright/25 px-2.5 py-0.5 text-xs font-medium text-sunset-peach">
                          {photo.photoCategory}
                        </span>
                        <h3 className="mt-2 text-lg font-semibold leading-snug text-white">
                          {photo.photoTitle}
                        </h3>
                        <p className="mt-0.5 text-sm text-white/80">
                          {photo.photoDate}, {photo.photoYear}
                          {photo.photoLocation
                            ? `, ${photo.photoLocation}`
                            : ""}
                        </p>
                      </div>
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {activePhoto && activeIndex !== null && (
        <Lightbox
          photo={activePhoto}
          index={activeIndex}
          total={photos.length}
          onClose={closePhoto}
          onPrev={() => stepPhoto(-1)}
          onNext={() => stepPhoto(1)}
        />
      )}
    </section>
  );
};

export default GallerySection;