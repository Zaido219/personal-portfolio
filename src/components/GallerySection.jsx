import BaseCard from "./Ui/Card";
import BaseSection from "./Ui/BaseSection";
import SectionHeader from "./Ui/SectionHeaderText";
import GalleryPhotos from "./Ui/GalleryPhoto";
import { galleryImages } from "../config/constants";

const Gallery = () => {
  return (
    <div className="bg-green-300 flex justify-center">
      <BaseSection>
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
        <BaseCard></BaseCard>
      </BaseSection>
    </div>
  );
};

export default Gallery;
