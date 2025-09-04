import { div } from "motion/react-client"
import { Container } from "./Container"
import { Title } from "./ui/Title"
import { WorkCard } from "./ui/WorkCard"

export const Experience = () => {
    return (
        <div>
            <Container className="p-4 md:pt-10 md:pb-10 px-7 inset   border-2 border-neutral-100">
                <div className="max-w-6xl mx-auto">
                    <Title>Experience</Title>
                    <WorkCard
                        image="/codence_studio.webp"
                        title="Frontend Developer"
                        date="August 2025 - Present"
                        description="Over the past two months, I've gained hands-on experience working on 4+ real-world projects, building responsive and user-friendly web applications using modern frontend technologies.<br/><br/>Throughout this journey, I've learned to write clean, efficient, and maintainable code while improving my skills in React, Next.js, Tailwind CSS, and other tools.<br/><br/>Making mistakes, iterating, and learning from them has helped me grow as a developer and develop a deeper understanding of UI/UX, performance optimization, and scalability."
                    />
                    <br />
                    <WorkCard
                        image="/wecodecrunchers.webp"
                        title="Technical Team Member"
                        date="February 2025 - Present"
                        description="As an active member of the WCC Coding Club, I collaborated with peers to enhance my problem-solving skills, participate in coding challenges, and stay updated with the latest technologies and industry practices.<br /><br /> Being part of the club helped me improve my programming fundamentals, work on team-based projects, and explore new tools and frameworks while growing as a developer."
                    />



                </div>


            </Container>
        </div>
    )
}