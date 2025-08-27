import { Container } from "./Container"
import { Title } from "./ui/Title"


export const AboutHero = () => {
    return (
        <Container className=" p-4 md:pt-20 md:pb-10 px-7">
        <div className="max-w-6xl mx-auto">
          <Title>About Me</Title>
          <p className="text-lg md:text-xl text-secondary max-w-3xl leading-relaxed mb-8">    
            I am a software engineer with a passion for building innovative products that help people live better lives and give me motivation to keep learning and growing.   
          </p>
          
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