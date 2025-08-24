import Image from "next/image"

export const Hero = () => {
    return(
        <div className="flex mb-10">
        <Image src="/Avatar.jpg" alt="Avatar" className="w-40 p-2 rounded-2xl" width={150} height={150} />
        <div className="md:ml-3 md:mt-10">
        <h1 className="text-2xl md:text-4xl font-bold tracking-tight text-primary ">Siddhant Kanawade</h1>
        <p className="text-sm text-secondary md:text-base pt-4">
          
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.
        </p>
        <p className="text-sm text-secondary md:text-sm mt-1">
          jjdbjfjshll
        </p>
        </div>
        </div>
    )
}