import { type GalleryPhotoProps } from "../../interface/types";

const GalleryPhotos = ({src, alt}:GalleryPhotoProps) => {
    return (
        <div className="w-md md:w-xs aspect-square rounded-xl overflow-hidden">
            <img className="h-full w-full object-cover transition duration-400 ease-in-out hover:scale-110" src={src} alt={alt} />
        </div>
    );
};

export default GalleryPhotos;