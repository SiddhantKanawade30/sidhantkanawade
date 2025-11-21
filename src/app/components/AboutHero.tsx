import { Container } from "./Container"
import { Title } from "./ui/Title"
import { Subtitle } from "./ui/Subtitle"


export const AboutHero = () => {
    return (
        <Container className="p-4 pt-14 md:pt-20 md:pb-10 px-4 md:px-7 overflow-x-auto">
        <div className="max-w-6xl mx-auto min-w-0">
          <Title>About Me</Title>
          <Subtitle>
            I am a 20 year old software engineer from India, fixing bugs I created.   
            <br />
            Open to freelance offers. Reach out to me to enquire more about my work and services.
          </Subtitle>
          
          
          
        </div>
      </Container>  
    )
}