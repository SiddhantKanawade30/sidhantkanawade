import { Container } from "./Container"
import { Title } from "./ui/Title"
import { Subtitle } from "./ui/Subtitle"


export const ProjectsHero = () => {
    return (
        <Container className=" p-4 md:pt-20 md:pb-10 px-7">
        <div className="max-w-6xl mx-auto">
          <Title>Projects</Title>
          <Subtitle>
            I am a software engineer with a passion for building innovative products that help people live better lives and give me motivation to keep learning and growing.
          </Subtitle>
          
          
        </div>
      </Container>  
    )
}