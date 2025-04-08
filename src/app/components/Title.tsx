import React from "react";
import { BackgroundBeams } from "./BackgroundBeams";
import { cn } from "@/lib/utils";

export default function Title() {
    return (
        <div className="font-roboto sm:px-6 mx-8 lg:px-8 mt-48 sm:mx-2 text-left">
            <h1 className="z-10 relative mb-6 text-6xl font-extrabold md:text-7xl lg:text-8xl">
                <span
                    className="text-transparent bg-clip-text bg-[length:200%_auto] bg-[linear-gradient(to_right,#006145,#1c303b,#192B6D,#1c303b,#006145)] animate-gradient">
                    Dakota IT Solutions
                </span>
            </h1>
            <div
                className="z-10 relative text-3xl md:text-4xl text-[#192B6D] font-extrabold [text-wrap:balance] bg-clip-text"
            >
                Simplify Your
                <span> </span>
                <span
                    className="mr-2 text-emerald-800 inline-flex flex-col h-[calc(theme(fontSize.3xl)*theme(lineHeight.tight))] md:h-[calc(theme(fontSize.4xl)*theme(lineHeight.tight))] overflow-hidden">
                    <ul className="animate-text-slide block text-left leading-tight [&_li]:block">
                        <li>Tech Consulting</li>
                        <li>Cybersecurity</li>
                        <li>Managed IT</li>
                        <li>Network Solutions</li>
                        <li>Disaster Recovery</li>
                        <li>Cloud Migration</li>
                        <li>Data Backup</li>
                        <li>Hardware Install </li>
                        <li aria-hidden="true">Tech Consulting</li>
                    </ul>
                </span>
            </div>
            <a href="#"
               className="z-10 relative mb-24 mt-4 inline-flex items-center justify-center px-5 py-2.5 text-base font-medium text-center text-[#192B6D] rounded-lg border-green-700 border-2 dark:focus:ring-blue-900 hover:bg-green-700 hover:text-white">
                LET’S SIMPLIFY
                <svg className="w-3.5 h-3.5 ms-2 rtl:rotate-180" aria-hidden="true"
                     xmlns="http://www.w3.org/2000/svg"
                     fill="none" viewBox="0 0 14 10">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                          d="M1 5h12m0 0L9 1m4 4L9 9"/>
                </svg>
            </a>
            <div
                className="-z-2 relative bg-cityOutline w-full block mx-auto px-auto h-[21vw] sm:h-[22vw] bg-contain bg-center-bottom bg-no-repeat">
            </div>
            <div>
                <BackgroundBeams/>
            </div>
        </div>
    )
}