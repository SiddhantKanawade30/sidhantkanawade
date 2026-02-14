"use client"
import { motion } from "motion/react"
import Image from "next/image"
import Link from "next/link"
import { Container } from "./Container"
import { Badge } from "./ui/Badge"
import Blogito from "@public/Blogito.png"
import TestimonialsLo from "@public/testimonialslo.png"
import SecureVault from "@public/securevault.jpg"
import GithubIcon from "@public/github-icon.svg"


export const Projects = () => {

    const projects = [
        {
            title: "Blogito",
            src: Blogito,
            description: "A blog website to share experiences and learnings. Built with React, Tailwind CSS and javascript.",
            href: "https://blogito.vercel.app/",
            github: "https://github.com/SiddhantKanawade30/blogito-backend"
        },
        {
            title: "Secure Vault",
            src: SecureVault,
            description: "A secure password manager using cryptography, helping users store and manage their passwords securely.",
            href: "https://secure-vault-delta.vercel.app/",
            github: "https://github.com/SiddhantKanawade30/SecureVault"
        },
        {
            title: "TestimonialsLo",
            src: TestimonialsLo,
            description: "A platform that helps businesses, freelancers, startups gather and manage customer video, text testimonials efficiently.",
            href: "https://testimonialslo.siddhantkanawade.in",
            github: "https://github.com/SiddhantKanawade30/testimonialslo-backend"
        }
    ]


    return (
        <Container>
        <div className="pt-5 -mx-4 px-4 border-2 border-neutral-100 pb-10 overflow-x-auto">

            <Badge>I&apos;m fond of building things</Badge>

            <div className="pl-5 md:pl-2 grid grid-cols-1 items-center md:grid-cols-3 gap-5 p-2 mt-3 min-w-0"> 
                {
                    projects.map((project, idx) => (
                        <motion.div
                            initial={{ opacity: 0, filter: "blur(10px)" , y:10 }}
                            whileInView={{ opacity: 1, filter: "blur(0px)" , y:0 }}
                            transition={{ duration: 0.3, delay: idx * 0.1 , ease : "easeInOut" }}
                            key={project.title}>
                                <motion.div className=" w-80 min-h-75 md:w-67 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] rounded-2xl md:transition-shadow md:duration-[500ms] min-w-0"
                                transition={{ duration: 0.3, ease : "easeInOut" }}
                                >
                                    <div className="md:h-38 border-1 border-neutral-200 rounded-xl overflow-hidden">
                                        {project.href ? (
                                            <Link href={project.href} target="_blank" rel="noopener noreferrer">
                                                <Image
                                                    src={project.src}
                                                    alt={project.title}
                                                    className="rounded-xl object-cover hover:scale-[1.01] transition duration-200 w-full h-full cursor-pointer"
                                                    width={400}
                                                    height={400}
                                                    priority
                                                />
                                            </Link>
                                        ) : (
                                            <Image
                                                src={project.src}
                                                alt={project.title}
                                                className="rounded-xl object-cover w-full h-full opacity-75"
                                                width={400}
                                                height={400}
                                                priority
                                            />
                                        )}
                                    </div>

                                    <div className="flex items-center justify-between pr-2">
                                        <h2 className="text-tertiary text-lg font-bold mt-2 pl-2 tracking-tight">
                                            {project.title}
                                        </h2>
                                        {project.github && (
                                            <Link href={project.github} target="_blank" rel="noopener noreferrer" className="text-secondary hover:text-primary transition-colors">
                                                <Image src={GithubIcon} alt="GitHub" width={20} height={20} className="w-5 h-5" />
                                            </Link>
                                        )}
                                    </div>
                                    <p className="text-secondary text-sm pt-2 pb-5 pl-2 tracking-tight leading-relaxed">
                                        {project.description}
                                    </p>
                                </motion.div>
                        </motion.div> 
                    ))
                }

            </div>
        </div>
        </Container>
    )
}