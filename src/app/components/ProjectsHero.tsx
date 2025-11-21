import { Container } from "./Container"
import { Title } from "./ui/Title"
import { Subtitle } from "./ui/Subtitle"


export const ProjectsHero = () => {
    return (
        <Container className="p-4 pt-14 md:pt-20 md:pb-10 px-4 md:px-7 overflow-x-auto">
        <div className="max-w-6xl mx-auto min-w-0">
          <Title>Projects</Title>
          <Subtitle>
          
          Every project I build is a step forward in my coding journey, helping me explore new tools, frameworks, and creative ways to solve real-world problems.
          
          </Subtitle>
          
          
        </div>
      </Container>  
    )
}