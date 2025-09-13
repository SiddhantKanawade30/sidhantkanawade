import Image from "next/image"

export const Hero = () => {
    return(
        <div className="flex flex-col md:flex-row md:pb-7 pt-15 md:pt-0 p-4 overflow-x-auto items-center md:items-start">
        <Image src="/profile.png" alt="Avatar" className="w-34 h-40 md:w-40 md:h-47 p-2 rounded-2xl flex-shrink-0 mb-4 md:mb-0" width={150} height={150} />
        <div className="md:pl-3 md:pt-7 min-w-0 text-center md:text-left">
        <h1 className="text-2xl md:text-4xl font-bold tracking-tight text-primary">Siddhant A Kanawade</h1>
        <p className="text-sm text-secondary  md:text-base pt-4 pb-2 leading-relaxed">
        Full-stack web developer specialized in JavaScript, working with React, Node.js, MongoDB, Tailwind, and TypeScript. I love solving problems and learning new technologies.
        </p>
        <span className="text-sm text-secondary md:text-sm mt-1 bg-neutral-100 py-1 px-2 rounded-lg inline-block">
          Software Engineer
        </span>
        </div>
        </div>
    )
}