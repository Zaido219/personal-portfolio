import BaseCard from "./Ui/Card";
import { BaseSection } from "./Ui/Sections";
import SectionHeader from "./Ui/SectionHeaderText";
import GalleryPhotos from "./Ui/GalleryPhoto";
import { galleryImages } from "../config/constants";
import { GalleryBaseSection } from "./Ui/Sections";

const Gallery = () => {
  return (
    <GalleryBaseSection>
     <div className="p-5 w-3xl overflow-hidden">
      <div className="flex flex-col items-center bg-blue-300 overflow-hidden p-2 w-full">
        <SectionHeader title="Gallery" />
        <div className="flex gap-10 p-1 w-4xl  overflow-x-auto">
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
    </GalleryBaseSection>
  );
};

export default Gallery;
