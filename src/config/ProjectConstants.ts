import type { ProjectItemProps } from "../interface/types";
// showcased projects 1/2
export const Projects : ProjectItemProps[] = [
    {
        projectName:"RAG Pipeline",
        projectStatus:"Done",
        projectDescription:"A highly modular, domain-driven, and local Retrieval-Augmented Generation (RAG) pipeline designed for legal document analysis. This system allows you to ingest documents locally, perform legally enriched semantic search queries, and engage in continuous chat-based conversations using state-of-the-art Large Language Models (LLMs), with support for voice inputs (Speech-to-Text) and audio responses (Text-to-Speech).",
        projectLink:"https://github.com/Zaido219/local-RAG-pipeline.git",
        techStacks: ["Python","ChromaDb","Redis","Gemini Api", "Streamlit"],
        images: [
            "/images/projects/rag-pipeline/image.png"        ]
    },
    {
        projectName:"Custom Chess Engine",
        projectStatus:"Ongoing",
        projectDescription:"A web-based chess application featuring a custom-built game engine written from scratch. Focuses on pure logic implementation, complex state management, and algorithmic move validation without external chess libraries.",
        projectLink:"https://github.com/Zaido219/custom-chess-engine.git",
        techStacks: ["C#", "Raylib"],
        images: [
            "/images/projects/custom-chess-engine/image.png",
            "/images/projects/custom-chess-engine/Screenshot 2026-07-27 192139.png",
        ]
    },
    {
        projectName:"Gadinsight",
        projectStatus:"Actively Maintained",
        projectDescription:"A data analytics and trend forecasting platform for the gender and development office at BASC",
        projectLink:"https://www.gadinsight.com/",
        techStacks: ["Django", "TailwindCss", "Html", "JavaScript"],
        images:[
            "/images/projects/fallback.jpg"
        ]
    },
    {
        projectName:"Static Web Server",
        projectStatus: "Done",
        projectDescription:"A lightweight, multi-threaded static file server built entirely from scratch in C# using raw TCP sockets. Instead of relying on high-level HTTP abstractions (like ASP.NET Core or HttpListener), this project implements the fundamental networking and protocol parsing layers manually to understand how web servers actually communicate with modern browsers under the hood.",
        projectLink: "https://github.com/Zaido219/static-html-server",
        techStacks: ["C#"],
        images:[
            "/images/projects/fallback.jpg"
        ]
    },
    {
        projectName:"Notepad",
        projectStatus:"Done",
        projectDescription:"A notepad clone built with c#, and WPF that follows the MVVM architecture",
        projectLink:"https://github.com/Zaido219/Notepad.git",
        techStacks: ["C#"],
        images:[
            "/images/projects/fallback.jpg"
        ]
    },
    {
        projectName:"DigitalClockApp",
        projectStatus:"Done",
        projectDescription:"A simple digital clock using winforms",
        projectLink:"https://github.com/Zaido219/DigitalClockApp.git",
        techStacks: ["C#"],
        images:[
            "/images/projects/fallback.jpg"
        ]
    },
    {
        projectName:"ATM Simulator",
        projectStatus:"Done",
        projectDescription:"A console based atm simulator. i started this to learn command pattern, domain driven design and a refresher for OOP design.",
        projectLink:"https://github.com/Zaido219/atmSimulator.git",
        techStacks:["C#"],
        images:[
            "/images/projects/fallback.jpg"
        ]
    },
    {
        projectName:"GAD Office Website",
        projectStatus:"Done - To be turned over to next maintainer",
        projectDescription:"This is an updated website for the gender and development office at the Bulacan Agricultural State University.",
        projectLink:"https://bascgad.gadinsight.com/",
        techStacks:["Typescript", "React.js", "TailwindCss"],
        images:[
            "/images/projects/fallback.jpg"
        ]
    },
    {
        projectName:"Photo Booth App",
        projectStatus:"Done - needs maintaining",
        projectDescription:"A simple web based photo booth app.",
        projectLink:"https://photobooth-app-three.vercel.app/",
        techStacks:["React.js", "TailwindCss"],
        images:[
            "/images/projects/fallback.jpg"
        ]
    },
    {
        projectName:"ASCII Video Player",
        projectStatus:"Done",
        projectDescription:"A console based video player that plays videos in ascii",
        projectLink:"https://github.com/Zaido219/ascii-videoplayer.git",
        techStacks:["Python"],
        images:[
            "/images/projects/fallback.jpg"
        ]
    },
    {
        projectName:"Web based file sharing app",
        projectStatus:"Abandoned",
        projectDescription:"A simple web based file sharing app. This allows users to send files over Local Area Network without the need for a internet connection.",
        projectLink:"https://github.com/Zaido219/web-based-file-sharing-app.git",
        techStacks:[],
        images:[
            "/images/projects/fallback.jpg"
        ]
    },
]