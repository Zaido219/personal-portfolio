import { Children, type ReactNode } from "react"


export interface ReflectedGlowProps{
    children:ReactNode,
    blur? : string,
    opacity?: string,
    hoverOpacity? : string
}

export interface groupCardProps{
    children:ReactNode
}

export type TechField = 
  | 'languages'
  | 'frontend' 
  | 'backend' 
  | 'database' 
  | 'testing' 
  | 'devops' 
  | 'tools'
  | 'frameworks'
  | 'testing'
  | 'deployment'
  | 'hardware&systems';

export interface TechStackItemProps{
    id?:string | undefined,
    field: TechField // backend,frontend,database,testing,etc...
    name:string,
    icon?:React.ReactNode | undefined,
    color?:string | undefined
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
    startYear: string;
    endYear?: string;
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