import BaseCard from "./Ui/Card";
import { BaseSection } from "./Ui/Sections";
import SectionHeader from "./Ui/SectionHeaderText";
import GalleryPhotos from "./Ui/GalleryPhoto";
import { galleryImages } from "../config/constants";

const Gallery = () => {
  return (
    <BaseSection>
     <div className="bg-green-300 p-5 w-fit">
      <div className="flex flex-col items-center bg-blue-300 overflow-hidden p-2 w-fit">
        <SectionHeader title="Gallery" />
        <div className="bg-yellow-300 flex gap-10 p-1 w-4xl  overflow-x-auto">
          {galleryImages.map((item, index) => {
            return (
              <div>
                <GalleryPhotos src={item.url} alt={item.title}></GalleryPhotos>
              </div>
            );
          })}
        </div>
      </div>
    </div>
    </BaseSection>
  );
};

export default Gallery;
