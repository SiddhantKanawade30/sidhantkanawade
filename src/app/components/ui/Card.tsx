export const Card = ({title, subtitle, description}: {title: string, subtitle: string, description: string}) => {
    return (
        <div className="mb-4 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] rounded-md p-2 min-w-0">
            <div className="text-base md:text-lg font-bold text-primary px-2 leading-tight">{title}</div>
            <div className="text-xs md:text-sm text-secondary p-2">{subtitle}</div>
            <div className="text-xs md:text-sm text-secondary px-2 leading-relaxed">{description}</div>
        </div>
    )
}