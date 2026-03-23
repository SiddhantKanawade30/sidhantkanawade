"use client"

import prisma from "@public/prisma.svg"
import nextjs from "@public/nextjs.svg"
import tailwind from "@public/tailwind.svg"
import typescript from "@public/typescript.svg"
import react from "@public/react.svg"
import node from "@public/node.svg"
import shadcn from "@public/shadcn.svg"
import express from "@public/express.svg"
import mongo from "@public/mongo.svg"
import C from "@public/C.svg"

import Image from "next/image"
import { useEffect, useRef, useState } from "react"

const techStack = [
  {
    icon: prisma,
    title: "Prisma"
  },
  {
    icon: nextjs,
    title: "Next.js"
  },
  {
    icon: tailwind,
    title: "Tailwind"
  },
  {
    icon: typescript,
    title: "Typescript"
  },
  {
    icon: C,
    title: "C++"
  },
  {
    icon: react,
    title: "React"
  },
  {
    icon: node,
    title: "Node.js"
  },
  {
    icon: express,
    title: "Express"
  },
  {
    icon: mongo,
    title: "MongoDB"
  },
  {
    icon: shadcn,
    title: "Shadcn"
  },
] 


export const TechStack = () => {
  const scrollerRef = useRef<HTMLDivElement>(null)
  const [start, setStart] = useState(false)

  useEffect(() => {
    if (scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children)
      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true)
        if (scrollerRef.current) {
          scrollerRef.current.appendChild(duplicatedItem)
        }
      })
      setStart(true)
    }
  }, [])

  return (
    <div className="relative w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_10%,white_80%,transparent)]">
      <div
        ref={scrollerRef}
        className={`flex w-max shrink-0 gap-3 ${
          start ? "animate-scroll-right" : ""
        }`}
        style={{
          ["--animation-duration" as string]: "50s",
        }}
      >
        {techStack.map((tech, index) => (
          <div
            key={`tech-${index}`}
            className="flex items-center gap-2 border border-gray-200 shadow-[inset_0px_3px_8px_0px_#00000014]  px-3 py-1 rounded-md shrink-0"
          >
            <Image
              src={tech.icon!}
              className="text-neutral-800"
              alt={tech.title!}
              width={17}
              height={17}
            />
            <h1 className="text-md text-neutral-800 whitespace-nowrap">
              {tech.title}
            </h1>
          </div>
        ))}
      </div>
    </div>
  )
}