import { Container } from "./Container"
import { Title } from "./ui/Title"


export const ProjectsHero = () => {
    return (
        <Container className=" p-4 md:pt-20 md:pb-10 px-7">
        <div className="max-w-6xl mx-auto">
          <Title>Projects</Title>
          <p className="text-lg md:text-xl text-secondary max-w-3xl leading-relaxed mb-8">    
            I am a software engineer with a passion for building innovative products that help people live better lives and give me motivation to keep learning and growing.   
          </p>
          
          
        </div>
      </Container>  
    )
}