import { ReactNode } from "react"

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
    certificateProvider : string
}

export type  ProjectItemProps = {   
    projectName : string
    projectDescription : string
    projectLink?:string
}