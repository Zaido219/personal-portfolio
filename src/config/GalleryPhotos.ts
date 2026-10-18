import {type GalleryPhotoItemProps} from "../interface/types";


const placeholder = (seed: string) =>
  `https://picsum.photos/seed/${seed}/800/1000`;


export const defaultGalleryPhotos: GalleryPhotoItemProps[] = [
  {
    id: "g1",
    photoTitle: "Hackathon night",
    photoCategory: "Event",
    photoUrl: placeholder("jplm-hackathon"),
    photoAlt: "Placeholder photo for hackathon night",
    photoCaption:
      "Replace this caption with a short story about the moment: what you built, who you built it with, what you learned.",
    photoLocation: "Bulacan, PH",
    photoDate: "Mar 12",
    photoYear: "2026",
  },
  {
    id: "g2",
    photoTitle: "Demo day",
    photoCategory: "Project",
    photoUrl: placeholder("jplm-demo-day"),
    photoAlt: "Placeholder photo for demo day",
    photoCaption: "Presenting work to the people who would actually use it.",
    photoLocation: "Bulacan, PH",
    photoDate: "Apr 22",
    photoYear: "2026",
  },
  {
    id: "g3",
    photoTitle: "Workshop session",
    photoCategory: "Learning",
    photoUrl: placeholder("jplm-workshop"),
    photoAlt: "Placeholder photo for a workshop session",
    photoDate: "Feb 03",
    photoYear: "2026",
  },
  {
    id: "g4",
    photoTitle: "Desk setup",
    photoCategory: "Workspace",
    photoUrl: placeholder("jplm-desk"),
    photoAlt: "Placeholder photo of a desk setup",
    photoCaption: "Where most of the code gets written.",
    photoDate: "Jan 15",
    photoYear: "2026",
  },
  {
    id: "g5",
    photoTitle: "Campus tech talk",
    photoCategory: "Event",
    photoUrl: placeholder("jplm-tech-talk"),
    photoAlt: "Placeholder photo for a campus tech talk",
    photoLocation: "Bulacan, PH",
    photoDate: "Nov 28",
    photoYear: "2025",
  },
  {
    id: "g6",
    photoTitle: "Internship week",
    photoCategory: "Work",
    photoUrl: placeholder("jplm-internship"),
    photoAlt: "Placeholder photo for internship week",
    photoDate: "Oct 06",
    photoYear: "2025",
  },
];