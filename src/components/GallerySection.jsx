import BaseCard from "./Ui/Card";
import BaseSection from "./Ui/BaseSection";
import SectionHeader from "./Ui/SectionHeaderText";
import GalleryPhotos from "./Ui/GalleryPhoto";
import { galleryImages } from "../config/constants";

const Gallery = () => {
    return(
        <BaseSection>
            <SectionHeader
                title="Gallery"
            />
            <div className="bg-yellow-300">
                {
                    galleryImages.map((item, index) => {
                        return (
                            <div>
                                <GalleryPhotos src={item.url} alt={item.title}></GalleryPhotos>
                            </div>
                        )
                    })
                }
            </div>
            <BaseCard>
            </BaseCard>
        </BaseSection>
    );
};


export default Gallery;