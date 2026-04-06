import { GalleryPhotoProps } from "../../interface/types";

const GalleryPhotos = ({src, alt}:GalleryPhotoProps) => {
    return (
        <img src={src} alt={alt} />
    );
};

export default GalleryPhotos;