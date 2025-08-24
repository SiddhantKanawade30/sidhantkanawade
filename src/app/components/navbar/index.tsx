"use client"
import Link from "next/link";
import { Container } from "../Container"
import { motion, number, useMotionValueEvent, useScroll, useTransform } from "framer-motion"
import Image from "next/image";

import { useState } from "react";


export const Navbar = () => {

    const [hovered, setHovered] = useState<number | null>(null)
    const { scrollY } = useScroll();

    const [scrolled , setScrolled] = useState<boolean>(false)

    const y = useTransform(scrollY, [0, 100], [0, 10])
    const width = useTransform(scrollY, [0, 100], ["50%", "40%"])

    useMotionValueEvent(scrollY, "change", (latest) => {
        if(latest > 20){
            setScrolled(true)
        }else{
            setScrolled(false)
        }
    })

    const navItems = [

        {
            label: "About",
            href: "/about"
        },

        {
            label: "Projects",
            href: "/projects"
        },

        {
            label: "Contact",
            href: "/contact"
        }, {
            label: "Blogs",
            href: "/blogs"
        }
    ]   

    return (

        <Container >
            <motion.nav 
            style={{
                boxShadow: scrolled ? "var(--shadow-siddhant)" : "none",
                width,
                y,
            }}
            transition={{
                duration: 0.3,
                ease: "easeInOut",
            }}
            className="flex items-center justify-between px-3 py-2 fixed inset-x-0 mx-auto top-0 max-w-4xl z-50 rounded-full bg-white  ">
                <Link href="/">
                <div className="hover:bg-neutral-100 px-2 py-1 rounded-md">
                Home
                </div></Link>
                <div className="flex items-center ">
                    {
                        navItems.map((item, idx) => (
                            <Link
                                href={item.href}
                                key={idx}
                                className="relative px-2 py-1 text-sm"
                                onMouseEnter={() => setHovered(idx)}
                                onMouseLeave={() => setHovered(null)}
                            >
                                {
                                    hovered === idx && (
                                        <motion.span
                                        layoutId="hovered-span"
                                        className="absolute inset-0 h-full w-full rounded-md bg-neutral-100 dark:bg-neutral-800"
                                        />
                                )}
                                <span className="relative z-10">{item.label}</span>
                            </Link>
                        ))
                    }
                </div>
            </motion.nav>
        </Container>

    );
};
