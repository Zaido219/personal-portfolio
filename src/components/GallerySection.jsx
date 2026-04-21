import BaseCard from "./Ui/Card";
import { BaseSection } from "./Ui/Sections";
import SectionHeader from "./Ui/SectionHeaderText";
import GalleryPhotos from "./Ui/GalleryPhoto";
import { galleryImages } from "../config/constants";
import { GalleryBaseSection } from "./Ui/Sections";
import { GalleryNav } from "./Ui/Navigations";
import { Marquee } from "./Ui/Motions";

const Gallery = () => {
  return (
    <GalleryBaseSection>
      <div className="p-5 w-3xl overflow-hidden">
        <div className="flex flex-col items-center overflow-hidden p-2 w-full">
          <SectionHeader title="Gallery" />
          <div className="relative w-full group">
            <GalleryNav direction="left" />
            <GalleryNav direction="right" />
            <div className="flex gap-4 p-1 w-4xl  overflow-x-auto">
              <Marquee>
                 {galleryImages.map((item, index) => {
                return (
                  <div>
                    <GalleryPhotos
                      src={item.url}
                      alt={item.title}
                    ></GalleryPhotos>
                  </div>
                );
              })}
              </Marquee>
            </div>
          </div>
        </div>
      </div>
    </GalleryBaseSection>
  );
};

export default Gallery;
