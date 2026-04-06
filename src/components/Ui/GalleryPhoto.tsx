import { GalleryPhotoProps } from "../../interface/types";

const GalleryPhotos = ({src, alt}:GalleryPhotoProps) => {
    return (
        <div className="h-45 w-45">
            <img className="h-full w-full object-cover transition duration-200 ease-in-out hover:scale-108" src={src} alt={alt} />
        </div>
    );
};

export default GalleryPhotos;