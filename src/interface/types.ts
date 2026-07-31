import { Children, type ReactNode } from "react"

export type TechField = 
  | 'frontend' 
  | 'backend' 
  | 'database' 
  | 'testing' 
  | 'devops' 
  | 'tools';

export interface TechStackItem{
    id?:string,
    field: TechField // backend,frontend,database,testing,etc...
    name:string,
    icon?:string,
    color?:string
}

export interface TechStackItemProps {
  item: TechStackItem;
  className?: string;
  onClick?: (item: TechStackItem) => void;
}


export interface EducationItemProps{
    id?:string,
    institutionName:string,
    degree?:string,
    fieldOfStudy?:string,
    location:string,
    startDate:Date,
    endDate?:Date,
    isCurrent:boolean,
    achievements: string[],
}
export interface CertificateModalProps {
    title:string,
    src:string,
    isOpen:boolean,
    onClose:any
}


export interface MarqueeProps {
  children: ReactNode;
  speed?: number;
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
    className?: string;
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