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