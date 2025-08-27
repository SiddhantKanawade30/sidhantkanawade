import { Title } from "./ui/Title"
import { Card } from "./ui/Card"
import { Container } from "./Container"


export const Qualification = () => {
    return (
        <Container className="p-4 md:pt-10 md:pb-10 px-7">
                <div className="max-w-6xl mx-auto">
                    <Title>Qualification & Achievements</Title>
                    <Card title="Bachelor of Engineering" subtitle="University of Mumbai • 2024-2028" description="I am currently pursuing a Bachelor of Engineering in Computer Engineering at the University of Mumbai. I am in my 2nd year of study and will graduate in 2028."  />
                    <Card title="BV Hacks 1.0 Winner (2025)" subtitle="Bharati Vidyapeeth College of Engineering , Navi Mumbai" description="Won BV Hacks , built a complaint management system for the college that seamlessly manages the complaints of the students and faculty." />
                </div>


            </Container>
    )
}