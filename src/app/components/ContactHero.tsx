import { Container } from "./Container"
import { Title } from "./ui/Title"
import { Subtitle } from "./ui/Subtitle"


export const ContactHero = () => {
    return (
        <Container className=" p-4 md:pt-20 md:pb-10 px-7">
        <div className="max-w-6xl mx-auto">
          <Title>Contact Me</Title>
          <Subtitle>
            I am open to freelancing offers. Reach out to me to enquire more about my work and services.   
          </Subtitle>
          
          {/* Add more content sections here as needed */}
          <div className="prose prose-lg max-w-none">
            <p className="text-secondary text-md leading-relaxed">
            I specialize in <span className="text-primary">Frontend Development</span>, creating modern and responsive web applications using React, Next.js, Tailwind CSS, and other cutting-edge technologies. I help businesses and individuals build high-performance digital solutions tailored to their goals, ensuring clean code, seamless user experiences, and optimal performance.
            </p>
          </div>
        </div>
      </Container>  
    )
}