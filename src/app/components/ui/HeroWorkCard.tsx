import Image from "next/image"

export const HeroWorkCard = ({ title, description, Role, date, tech, image }: { title: string, description: string, Role: string, date: string, tech?: string, image?: string }) => {
    return (
        <div className="flex items-center justify-between gap-5 p-2">
            <div className="flex-1">
                <h2 className="text-md text-neutral-900 py-1 font-semibold">{title}</h2>
                <span className="text-sm text-neutral-800 py-1">{Role}</span> <span className="text-sm text-secondary">{date}</span> <br />
                <div className="text-sm text-secondary py-1">{description}</div> <br />
                <div>{tech}</div>
            </div>
            <div className="flex-shrink-0 ml-4">
                <Image 
                    src={image || ""} 
                    alt={title} 
                    width={60} 
                    height={60} 
                    className="rounded-lg border border-neutral-200 object-cover" 
                />
            </div>
        </div>
    )
}   