import Image from "next/image"

export const WorkCard = ({title, date, description, image, techStack}: {title: string, date: string, description: string, image: string, techStack?: string[]}) => {
    return (
        <div className="shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] rounded-md p-2 min-w-0">
            <div className="flex gap-3 p-1 min-w-0">
                <div className="rounded-md shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] flex-shrink-0">
                    <Image src={image} alt="Work Card" width={60} height={60} className="rounded-md w-15 h-15 md:w-20 md:h-20 object-cover"/>
                </div>
                <div className="min-w-0 flex-1">
                    <div className="text-lg md:text-xl font-bold md:py-1 leading-tight">{title}</div>
                    <div className="text-xs md:text-sm text-secondary">{date}</div>
                </div>
            </div>
            <div className="px-1 py-2">
                <span className="text-tertiary px-1 text-sm md:text-base leading-relaxed" dangerouslySetInnerHTML={{ __html: description }}></span>
            </div>
            {techStack && techStack.length > 0 && (
                <div className="px-1 py-2 flex flex-wrap gap-2">
                    {techStack.map((tech, index) => (
                        <div key={index} className="flex items-center gap-1 bg-neutral-50 rounded-md px-2 py-1 border border-neutral-200">
                            <Image src={tech} alt={tech.split('/').pop()?.replace('.svg', '') || 'tech'} width={16} height={16} className="w-4 h-4" />
                            <span className="text-xs text-secondary capitalize">{tech.split('/').pop()?.replace('.svg', '')}</span>
                        </div>
                    ))}
                </div>
            )}
        </div>
    )
}