import { Children, type ReactNode } from "react"


export interface EducationItemProps{
    id?:string,
    institutionName:string,
    degree?:string,
    fieldOfStudy?:string,
    location:string,
    startDate:Date,
    endDate?:Date,
    // track if still enrolled
    isCurrent:boolean,
    // track notable achievements on this education during the time spent
    achievements: string[],
}
export interface CertificateModalProps {
    title:string,
    // certificates will be stored as pdf, jpeg or in some other formats
    src:string,
    isOpen:boolean,
    onClose:any
}


export interface MarqueeProps {
  children: ReactNode;
  speed?: number; // Speed in seconds
  className?: string;
}


export type ShineProps = {
    children:ReactNode;
    className?:string;
}

export type NavProps = {
    direction: "left" | "right"
}

export type BaseSectionProps = {
    children: ReactNode
}

export type GalleryPhotoProps = {
    src:string,
    alt:string
}

export type TestimonialProps = {
    quote:string
    author:string
    title:string
    affiliation?:string
}

export type HoverCardProps = {
    children : ReactNode;
    className?: string; // this allows extra styling mas better if wala na e
}

export type  WorkExperienceItemProps = {
    workTitle : string
    workCompany : string,
    startDate : string,
    endDate? : string,
}

export type CertificateItemProps = {
    certificateTitle : string,
    certificateProvider : string,
    onClick?: () => void
}

export type  ProjectItemProps = {   
    projectName : string
    projectStatus:string
    projectDescription : string
    projectLink?:string
}