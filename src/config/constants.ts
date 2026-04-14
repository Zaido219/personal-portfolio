import type { TestimonialProps } from "../interface/types"

const images = import.meta.glob('/public/images/gallery/*.{png,jpg,jpeg,svg}', { eager: true });

export const galleryImages = [
  {
    id: 1,
    url: "https://picsum.photos/id/1018/800/600",
    title: "Mountain View",
  },
  { id: 2, url: "https://picsum.photos/id/1015/800/600", title: "River Flow" },
  { id: 3, url: "https://picsum.photos/id/1039/800/600", title: "Forest Path" },
  { id: 3, url: "https://picsum.photos/id/1039/800/600", title: "Forest Path" },
  { id: 3, url: "https://picsum.photos/id/1039/800/600", title: "Forest Path" },
  { id: 3, url: "https://picsum.photos/id/1039/800/600", title: "Forest Path" },
  { id: 3, url: "https://picsum.photos/id/1039/800/600", title: "Forest Path" },
  { id: 3, url: "https://picsum.photos/id/1039/800/600", title: "Forest Path" },
  { id: 3, url: "https://picsum.photos/id/1039/800/600", title: "Forest Path" },
  { id: 3, url: "https://picsum.photos/id/1039/800/600", title: "Forest Path" },
  { id: 3, url: "https://picsum.photos/id/1039/800/600", title: "Forest Path" },
  { id: 3, url: "https://picsum.photos/id/1039/800/600", title: "Forest Path" },
];



export const Testimonials : TestimonialProps[] = [
   {
        quote: "Working with the team was an incredible experience...",
        author: "Sponge Bob",
        title: "Cook",
        affiliation: "Bulacan Agricultural State College"
    },
    {
        quote: "Highly recommended for any software engineering role.",
        author: "Squidward",
        title: "Lead Developer",
        // affiliation is optional, so we can leave it out here
    }
]

export const workExperiences = [
    {title:'BSIT Student', company: 'Bulacan Agricultural State College', startYear: '2022', endYear: 'present'},
    {title:'Glass and Aluminum installation helper', company: 'Family Owned Small Business', startYear: '2020', endYear: 'present'},
    {title:'High Speed Sewer', company: 'Nana minda`s patahian ', startYear: '2017', endYear: '2020'},
    {title:'Poultry Boy', company: 'Not available', startYear: 'One', endYear: 'Week'}
]