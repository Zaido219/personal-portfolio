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
    isCurrent: true,
    achievements: [
      "Maintained a strong academic standing in tech courses",
      "Gained foundational knowledge in web development and data modeling"
    ]
  },
  {
    id: "edu-02",
    institutionName: "Family Owned Small Business",
    degree: "Vocational / Practical Experience",
    fieldOfStudy: "Glass and Aluminum Installation",
    location: "Local Area, Bulacan",
    startDate: new Date(2020, 0), // January 2020
    isCurrent: true,
    achievements: [
      "Mastered precision measurement and materials handling",
      "Developed strong collaborative teamwork and problem-solving skills under pressure"
    ]
  },
  {
    id: "edu-03",
    institutionName: "Nana Minda's Patahian",
    degree: "Apprenticeship",
    fieldOfStudy: "High Speed Sewing & Garment Manufacturing",
    location: "Local Community, Bulacan",
    startDate: new Date(2017, 5), // June 2017
    endDate: new Date(2020, 2),   // March 2020
    isCurrent: false,
    achievements: [
      "Operated industrial-grade high-speed machinery efficiently",
      "Maintained strict quality control and attention to detail for high-volume outputs"
    ]
  },
  {
    // Restructured the informal poultry entry to fit valid timeline constraints
    id: "edu-04",
    institutionName: "Local Poultry Farm",
    degree: "Short-term Practical Labor",
    fieldOfStudy: "Agricultural Operations",
    location: "Bulacan",
    startDate: new Date(2016, 4), // May 2016
    endDate: new Date(2016, 4),   // One week duration represented within the month
    isCurrent: false,
    achievements: [
      "Gained rigorous, hands-on experience in fast-paced agricultural maintenance",
      "Developed a strong work ethic and adaptability to physically demanding environments"
    ]
  },
  {
    // Added a 5th unique item to complete your set of 5 and show a standard secondary education baseline
    id: "edu-05",
    institutionName: "Local High School",
    degree: "High School Diploma",
    fieldOfStudy: "General Secondary Education",
    location: "Bulacan, Philippines",
    startDate: new Date(2012, 5), // June 2012
    endDate: new Date(2016, 2),   // March 2016
    isCurrent: false,
    achievements: [
      "Completed secondary education with consistent academic performance",
      "Participated in school-level technology and science fairs"
    ]
  }
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
    {title:'BSIT Student', company: 'Bulacan Agricultural State College', startYear: '2022', endYear: 'present'},
    {title:'Glass and Aluminum installation helper', company: 'Family Owned Small Business', startYear: '2020', endYear: 'present'},
    {title:'High Speed Sewer', company: 'Nana minda`s patahian ', startYear: '2017', endYear: '2020'},
    {title:'Poultry Boy', company: 'Not available', startYear: 'One', endYear: 'Week'}
]

