import type { TestimonialProps,EducationItemProps } from "../interface/types"

const images = import.meta.glob('../images/gallery/*.{png,jpg,jpeg,svg}', { eager: true });

export const educationExperiences: EducationItemProps[] = [
  {
    id: "edu-01",
    institutionName: "Bulacan Agricultural State College",
    degree: "Bachelor of Science",
    fieldOfStudy: "Information Technology",
    location: "San Ildefonso, Bulacan",
    startDate: new Date(2022, 7), // August 2022
    endDate: new Date(2026, 6),
    isCurrent: false,
    achievements: [
      "Maintained a strong academic standing in tech courses",
      "Gained foundational knowledge in web development and data modeling"
    ]
  },
  {
    id: "edu-02",
    institutionName: "San Ildefonso National High School",
    degree: "High School(Old curiculum)",
    fieldOfStudy: "Secondary Education",
    location: "Pinaod, San Ildefonso, Bulacan",
    startDate: new Date(2014, 6), // January 2020
    endDate:new Date(2015, 6),
    isCurrent: false,
    achievements : []
  },
  {
    id: "edu-03",
    institutionName: "Maypajo Integrated School",
    degree: "High School (Old curiculum)",
    fieldOfStudy: "Secondary Education",
    location: "Local Community, Bulacan",
    startDate: new Date(2009, 5), // June 2017
    endDate: new Date(2010, 2),   // March 2020
    isCurrent: false,
    achievements: []
  },
  {
    // Restructured the informal poultry entry to fit valid timeline constraints
    id: "edu-04",
    institutionName: "Bung-aw National High School",
    degree: "High School (Old curiculum)",
    fieldOfStudy: "Secondary Education",
    location: "Brgy.Bung-aw, Hilongos, Southern Leyte",
    startDate: new Date(2005, 4), // May 2016
    endDate: new Date(2004, 4),   // One week duration represented within the month
    isCurrent: false,
    achievements: []
  },
];


export const galleryImages = Object.entries(images).map(([path, module], index) => ({
  id: index + 1,
  // When importing from assets, the 'module' contains the final optimized URL
  url: (module as any).default, 
  title: `Gallery Image ${index + 1}`
}));



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
    {title:'Full Stack Web Developer Intern', company: 'Gender And Development Office at BASC', startYear: '2026', endYear: '2026'},
    {title:'BSIT Student', company: 'Bulacan Agricultural State College', startYear: '2022', endYear: '2026'},
    {title:'Glass and Aluminum installation helper', company: 'Family Owned Small Business', startYear: '2020', endYear: 'present'},
    {title:'High Speed Sewer', company: 'Nana minda`s patahian ', startYear: '2017', endYear: '2020'},
    {title:'Poultry Boy', company: 'Not available', startYear: 'One', endYear: 'Week'}
]

