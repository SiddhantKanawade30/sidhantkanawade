import Image from "next/image"

export const HeroWorkCard = ({ title, description, Role, date, tech, image }: { title: string, description: string, Role: string, date: string, tech?: string, image?: string }) => {
    return (
        <div className="flex flex-row items-start gap-3 md:gap-5 p-2 min-w-0">
            {/* Content - full width on mobile, left side on desktop */}
            <div className="flex-1 min-w-0">
                <h2 className="text-sm md:text-md text-neutral-900 py-1 font-semibold leading-tight">{title}</h2>
                <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2">
                    <span className="text-xs md:text-sm text-neutral-800 py-1">{Role}</span>
                    <span className="text-xs md:text-sm text-secondary">{date}</span>
                </div>
                <div className="text-xs md:text-sm text-secondary py-1 leading-relaxed">{description}</div>
                <div className="text-xs md:text-sm">{tech}</div>
            </div>
            {/* Image - hidden on mobile, visible on desktop right side */}
            <div className="hidden md:block flex-shrink-0">
                <Image 
                    src={image || ""} 
                    alt={title} 
                    width={60} 
                    height={60} 
                    className="rounded-lg border border-neutral-200 object-cover w-15 h-15" 
                />
            </div>
        </div>
    )
}   