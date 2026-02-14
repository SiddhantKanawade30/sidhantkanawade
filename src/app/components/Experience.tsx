import { Container } from "./Container"
import { Title } from "./ui/Title"
import { WorkCard } from "./ui/WorkCard"

export const Experience = () => {
    return (
        <div className="overflow-x-auto">
            <Container className="p-4 md:pt-10 md:pb-10 px-4 md:px-7 inset border-2 border-neutral-100">
                <div className="max-w-6xl mx-auto min-w-0">
                    <Title>Experience</Title>
                    <WorkCard
                        image="/codence_studio.webp"
                        title="Frontend Developer"
                        date="July 2025 - November 2025"
                        description="Focused on frontend development using Next.js and React with TypeScript, delivering 4+ responsive web applications with clean, maintainable code.<br/><br/>Built reusable components and responsive UIs using Tailwind CSS and shadcn/ui, integrated REST APIs via Postman, and collaborated on backend integration with Node.js and MongoDB.<br/><br/>Gained hands-on experience in performance optimization, UI/UX best practices, and modern development workflows while contributing to real-world projects."
                        techStack={["/nextjs.svg", "/react.svg", "/typescript.svg", "/tailwind.svg", "/shadcn.svg", "/node.svg", "/mongo.svg"]}
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