import Image from "next/image"

export const WorkCard = ({title, date, description, image}: {title: string, date: string, description: string, image: string}) => {
    return (
        <div className="shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] rounded-md p-2">
            <div className="flex gap-3 p-1 ">
                <div className=" rounded-md shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]"><Image src={image} alt="Work Card" width={80} height={80} className="rounded-md"/></div>
                <div>
                    <div className="text-xl font-bold md:py-1 ">{title}</div>
                    <div className="text-sm text-secondary">{date}</div>
                </div>
            </div>
            <div className="px-1 py-2">
                <span className="text-tertiary px-1" dangerouslySetInnerHTML={{ __html: description }}></span>
            </div>
        </div>
    )
}