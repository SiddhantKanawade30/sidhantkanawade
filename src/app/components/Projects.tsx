"use client"
import { motion } from "motion/react"
import Image from "next/image"
import Link from "next/link"



export const Projects = () => {

    const projects = [
        {
            title: "Secure Vault",
            src: "https://media.licdn.com/dms/image/v2/D4D22AQFIglhMSdhQpQ/feedshare-shrink_2048_1536/B4DZfKBBQNGkAo-/0/1751440956500?e=1758758400&v=beta&t=qyyaKGKAxfD2u5TFxN2fuhvpEeUb_3n7VV4dq045Piw",
            description: "A secure password manager ",
            href: "https://secure-vault-delta.vercel.app/"
        },
        {
            title: "Secure Vault2",
            src: "https://media.licdn.com/dms/image/v2/D4D22AQFIglhMSdhQpQ/feedshare-shrink_2048_1536/B4DZfKBBQNGkAo-/0/1751440956500?e=1758758400&v=beta&t=qyyaKGKAxfD2u5TFxN2fuhvpEeUb_3n7VV4dq045Piw",
            description: "A secure password manager ",
            href: "https://secure-vault-delta.vercel.app/"
        },
        {
            title: "Secure Vault22",
            src: "https://media.licdn.com/dms/image/v2/D4D22AQFIglhMSdhQpQ/feedshare-shrink_2048_1536/B4DZfKBBQNGkAo-/0/1751440956500?e=1758758400&v=beta&t=qyyaKGKAxfD2u5TFxN2fuhvpEeUb_3n7VV4dq045Piw",
            description: "A secure password manager ",
            href: "https://secure-vault-delta.vercel.app/"
        },
        {
            title: "Secure Vault221",
            src: "https://media.licdn.com/dms/image/v2/D4D22AQFIglhMSdhQpQ/feedshare-shrink_2048_1536/B4DZfKBBQNGkAo-/0/1751440956500?e=1758758400&v=beta&t=qyyaKGKAxfD2u5TFxN2fuhvpEeUb_3n7VV4dq045Piw",
            description: "A secure password manager ",
            href: "https://secure-vault-delta.vercel.app/"
        }
    ]


    return (
        <div className="py-10">
            <p className="text-secondary text-sm max-w-lg pt-4 text-sm md:text-base pl-2">Love building products that impact people's lives</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-2 mt-3"> 
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
                                width={300}
                                height={300}
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
    )
}