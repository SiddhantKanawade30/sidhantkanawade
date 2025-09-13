import { Container } from "./Container"
import { Title } from "./ui/Title"
import { Subtitle } from "./ui/Subtitle"


export const AboutHero = () => {
    return (
        <Container className="p-4 md:pt-20 md:pb-10 px-4 md:px-7 overflow-x-auto">
        <div className="max-w-6xl mx-auto min-w-0">
          <Title>About Me</Title>
          <Subtitle>
            I am a software engineer with a passion for building innovative products that help people live better lives and give me motivation to keep learning and growing.   
          </Subtitle>
          
          {/* Add more content sections here as needed */}
          <div className="prose prose-lg max-w-none">
            <p className="text-secondary text-sm md:text-md leading-relaxed">
            I specialize in <span className="text-primary">Frontend Development</span>, creating modern and responsive web applications using React, Next.js, Tailwind CSS, and other cutting-edge technologies. I help businesses and individuals build high-performance digital solutions tailored to their goals, ensuring clean code, seamless user experiences, and optimal performance.
            </p>
          </div>
        </div>
      </Container>  
    )
}