import { Container } from "./Container"
import { Title } from "./ui/Title"
import { Subtitle } from "./ui/Subtitle"


export const ProjectsHero = () => {
    return (
        <Container className=" p-4 md:pt-20 md:pb-10 px-7">
        <div className="max-w-6xl mx-auto">
          <Title>Projects</Title>
          <Subtitle>
            
          I enjoy building projects that challenge my problem-solving skills and push me to write cleaner, smarter, and more efficient code every day.
         
          <br />
          
          Every project I build is a step forward in my coding journey, helping me explore new tools, frameworks, and creative ways to solve real-world problems.
          
          </Subtitle>
          
          
        </div>
      </Container>  
    )
}