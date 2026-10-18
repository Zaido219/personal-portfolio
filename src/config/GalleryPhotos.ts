import {type GalleryPhotoItemProps} from "../interface/types";


const placeholder = (seed: string) =>
  `https://picsum.photos/seed/${seed}/800/1000`;


export const defaultGalleryPhotos: GalleryPhotoItemProps[] = [
  {
  id: "g1",
  photoTitle: "Succesfull capstone defense",
  photoCategory: "Event",
  photoUrl: "/images/gallery/thesis-defense.jpg",
  photoAlt: "Capstone defense",
  photoCaption: "Months of grinding and revisions ultimately leads to a succesfull defense of our capstone thesis",
  photoLocation: "BASC, Bulacan",
  photoDate: "",
  photoYear: "2026",
  },
  {
    id: "g2",
    photoTitle: "Client Acceptance",
    photoCategory: "Capstone Project",
    photoUrl: "/images/gallery/client-acceptance.jpg",
    photoAlt: "client system acceptance with capstone adviser",
    photoCaption: "Presenting work to the people who would actually use it.",
    photoLocation: "BASC, Bulacan PH",
    photoDate: "",
    photoYear: "2026",
  },
  {
    id: "g3",
    photoTitle: "Thesis Bookbind",
    photoCategory: "Event",
    photoUrl: "/images/gallery/thesis-bookbind.jpg",
    photoAlt: "",
    photoCaption:"One of the most satisfying moment of our academic journey. We were the first of our class to hardbound our capstone thesis.",
    photoDate: "",
    photoYear: "2026",
  },
  {
    id: "g4",
    photoTitle: "Women's Month Kickoff",
    photoCategory: "Event",
    photoUrl: "/images/gallery/womensmonth-kickoff.jpg",
    photoAlt: "Me with the GAD office attending the women's month kickoff",
    photoCaption: "I was fortunate enough to be deployed to an office dedicated for social justice and the recognition of women's rights. The experience changed me for the good",
    photoDate: "Jan 15",
    photoYear: "2026",
  },
];