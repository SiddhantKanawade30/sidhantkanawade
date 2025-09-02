"use client"
import { motion } from "motion/react"
import Image from "next/image"
import Link from "next/link"
import { Container } from "./Container"
import { Badge } from "./ui/Badge"




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
            title: "Secure Vault23",
            src: "https://assets.lummi.ai/assets/QmXiSTG18mneYVoyuTo3cs3HepYvhwWEMa5xFJEkra1V6Q?auto=format&w=1500",
            description: "A secure password manager ",
            href: "https://secure-vault-delta.vercel.app/"
        }
    ]


    return (
        <Container>
        <div className="pt-5 -mx-4 px-4  shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] inset pb-10  ">

            <Badge>I love Building things</Badge>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 p-2 mt-3"> 
                {
                    projects.map((project, idx) => (
                        <Link href={project.href} key={project.title}>
                        <motion.div
                            initial={{ opacity: 0, filter: "blur(10px)" , y:10 }}
                            whileInView={{ opacity: 1, filter: "blur(0px)" , y:0 }}
                            transition={{ duration: 0.3, delay: idx * 0.1 , ease : "easeInOut" }}
                            key={project.title}>
                                <motion.div className="hover:shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] rounded-2xl transition-shadow duration-[500ms]"
                                transition={{ duration: 0.3, ease : "easeInOut" }}
                                >
                            <Image
                                src={project.src}
                                alt={project.title}
                                className="rounded-xl  object-cover hover:scale-[1.01] transition duration-200"
                                width={400}
                                height={400}
                            />

                            <h2 className="text-tertiary dark:text-white text-lg font-bold mt-2 pl-2 tracking-tight">
                                {project.title}
                            </h2>
                            <p className="text-secondary text-sm pt-2 pb-5  pl-2 tracking-tight">
                                {project.description}
                            </p>
                            </motion.div>
                        </motion.div> 
                        </Link>
                    ))
                }

            </div>
        </div>
        </Container>
    )
}