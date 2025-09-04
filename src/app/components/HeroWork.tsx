"use client"
import { motion } from "motion/react"
import Image from "next/image"
import Link from "next/link"
import { Container } from "./Container"
import { Badge } from "./ui/Badge"
import { HeroWorkCard } from "./ui/HeroWorkCard"




export const HeroWork = () => {


    const work = [
        {
            title: "Codence Studio",
            Role: "Frontend Developer",
            date: "August 2025 - Present",
            description: "Worked on multiple freelance projects and gained hands-on experience",
            image: "/codence_studio.webp"
        },
        {
            title: "Wecodecrunchers",
            Role: "Technical Team Member",
            date: "February 2025 - Present",
            description: "Worked as a technical team member and gained hands-on experience",
            image: "/wecodecrunchers.webp"
        }
    ]


    return (
        <Container>
        <div className="pt-5 -mx-4 px-4  border-2 border-neutral-100 pb-15  ">
        <div className="py-5">
            <Badge>My Experience</Badge>
            </div>
           
            <div className="">
               {work.map((work, index) => (
                <HeroWorkCard key={index} title={work.title} Role={work.Role} date={work.date} description={work.description} image={work.image} />
               ))} 
            </div>
        
           
        </div>
        </Container>
    )
}