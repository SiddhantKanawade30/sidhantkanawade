"use client"
import { motion } from "motion/react"
import Image from "next/image"
import Link from "next/link"
import { Container } from "./Container"




export const Projects = () => {

    const projects = [
        {
            title: "Secure Vault",
            src: "https://assets.lummi.ai/assets/QmemEDf3LKdViBqcZ1tpeLNrMZUqkTwPHwwgUaShJDKzwf?auto=format&w=1500",
            description: "A secure password manager ",
            href: "https://secure-vault-delta.vercel.app/"
        },
        {
            title: "Secure Vault2",
            src: "https://assets.lummi.ai/assets/QmXiSTG18mneYVoyuTo3cs3HepYvhwWEMa5xFJEkra1V6Q?auto=format&w=1500",
            description: "A secure password manager ",
            href: "https://secure-vault-delta.vercel.app/"
        },
        {
            title: "Secure Vault22",
            src: "https://assets.lummi.ai/assets/QmXrTsUzdzT22bECy2rAeQtEqY1sqmTjLRZcJGJSKcmXKw?auto=format&w=1500",
            description: "A secure password manager ",
            href: "https://secure-vault-delta.vercel.app/"
        },
        {
            title: "Secure Vault221",
            src: "https://assets.lummi.ai/assets/QmTCrm41UdVHY8vMAkjBGJAYUTEbqvbBvD9fTD2xWkjZts?auto=format&w=1500",
            description: "A secure password manager ",
            href: "https://secure-vault-delta.vercel.app/"
        }
    ]


    return (
        <Container>
        <div className="pt-10 max-w-6xl mx-auto">
            <p className="text-secondary text-sm max-w-lg pt-4 text-sm md:text-base pl-2">Love building products that impact people's lives</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-2 mt-3"> 
                {
                    projects.map((project, idx) => (
                        <Link href={project.href} key={project.title}>
                        <motion.div
                            initial={{ opacity: 0, filter: "blur(10px)" , y:10 }}
                            whileInView={{ opacity: 1, filter: "blur(0px)" , y:0 }}
                            transition={{ duration: 0.3, delay: idx * 0.1 , ease : "easeInOut" }}
                            key={project.title}>
                            <Image
                                src={project.src}
                                alt={project.title}
                                className="rounded-xl  object-cover hover:scale-[1.01] transition duration-200 mt-2"
                                width={400}
                                height={400}
                            />
                            <h2 className="text-tertiary dark:text-white text-lg font-bold mt-1 pl-2 tracking-tight">
                                {project.title}
                            </h2>
                            <p className="text-secondary text-sm  pl-2 tracking-tight">
                                {project.description}
                            </p>
                        </motion.div> 
                        </Link>
                    ))
                }

            </div>
        </div>
        </Container>
    )
}