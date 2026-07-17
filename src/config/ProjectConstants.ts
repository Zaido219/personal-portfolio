import type { ProjectItemProps } from "../interface/types";
// showcased projects 1/2
export const Projects : ProjectItemProps[] = [
    {
        projectName:"Static Web Server",
        projectStatus: "Done",
        projectDescription:"A lightweight, multi-threaded static file server built entirely from scratch in C# using raw TCP sockets. Instead of relying on high-level HTTP abstractions (like ASP.NET Core or HttpListener), this project implements the fundamental networking and protocol parsing layers manually to understand how web servers actually communicate with modern browsers under the hood.",
        projectLink: "https://github.com/Zaido219/static-html-server"
    },
    {
        projectName:"Notepad",
        projectStatus:"Done",
        projectDescription:"A notepad clone built with c#, and WPF that follows the MVVM architecture",
        projectLink:"https://github.com/Zaido219/Notepad.git"
    },
    {
        projectName:"Gadinsight",
        projectStatus:"Actively Maintained",
        projectDescription:"A data analytics and trend forecasting platform for the gender and development office at BASC",
        projectLink:"https://www.gadinsight.com/"
    },
    {
        projectName:"DigitalClockApp",
        projectStatus:"Done",
        projectDescription:"A simple digital clock using winforms",
        projectLink:"https://github.com/Zaido219/DigitalClockApp.git"
    },
    {
        projectName:"ATM Simulator",
        projectStatus:"Done",
        projectDescription:"A console based atm simulator. i started this to learn command pattern, domain driven design and a refresher for OOP design.",
        projectLink:"https://github.com/Zaido219/atmSimulator.git"
    },
    {
        projectName:"GAD Office Website",
        projectStatus:"Done - To be turned over to next maintainer",
        projectDescription:"This is an updated website for the gender and development office at the Bulacan Agricultural State University.",
        projectLink:"https://bascgad.gadinsight.com/"
    },
    {
        projectName:"Custom Chess Engine",
        projectStatus:"Abandoned",
        projectDescription:"A web-based chess application featuring a custom-built game engine written from scratch. Focuses on pure logic implementation, complex state management, and algorithmic move validation without external chess libraries.",
        projectLink:"https://github.com/Zaido219/custom-chess-engine.git"
    },
    {
        projectName:"Photo Booth App",
        projectStatus:"Done - needs maintaining",
        projectDescription:"A simple web based photo booth app.",
        projectLink:"https://photobooth-app-three.vercel.app/"
    },
    {
        projectName:"ASCII Video Player",
        projectStatus:"Done",
        projectDescription:"A console based video player that plays videos in ascii",
        projectLink:"https://github.com/Zaido219/ascii-videoplayer.git"
    },
    {
        projectName:"Web based file sharing app",
        projectStatus:"Abandoned",
        projectDescription:"A simple web based file sharing app. This allows users to send files over Local Area Network without the need for a internet connection.",
        projectLink:"https://github.com/Zaido219/web-based-file-sharing-app.git"
    },
]