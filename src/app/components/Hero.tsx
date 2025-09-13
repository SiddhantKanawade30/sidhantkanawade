import Image from "next/image"

export const Hero = () => {
    return(
        <div className="flex md:pb-7  md:pt-0 p-4">
        <Image src="/profile.png" alt="Avatar" className="w-40 p-2 rounded-2xl" width={150} height={150} />
        <div className="md:pl-3 md:pt-10">
        <h1 className="text-2xl md:text-4xl font-bold tracking-tight text-primary ">Siddhant Kanawade</h1>
        <p className="text-sm text-secondary md:text-base pt-4 pb-2  ">
          
        Full-stack web developer specialized in JavaScript, working with React, Node.js, MongoDB, Tailwind, and TypeScript. I love solving problems and learning new technologies.
        </p>
        <span className="text-sm text-secondary md:text-sm mt-1 bg-neutral-100 py-1 px-2 rounded-lg">
          software Engineer
        </span>
        </div>
        </div>
    )
}