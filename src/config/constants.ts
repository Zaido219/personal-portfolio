import type { TestimonialProps } from "../interface/types"


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
        author: "Mark Russell L. Lim",
        title: "Lead Developer",
        // affiliation is optional, so we can leave it out here
    }
]

export const workExperiences = [
    {title:'BSIT Student', company: 'Bulacan Agricultural State College', startYear: '2002', endYear: '2003'},
    {title:'Glass and Aluminum installation helper', company: 'Family Owned Small Business', startYear: '2002', endYear: '2003'},
    {title:'High Speed Sewer', company: 'Nana minda`s patahian ', startYear: '2002', endYear: '2003'},
    {title:'Poultry Boy', company: 'Not available', startYear: '2002', endYear: '2003'}
]