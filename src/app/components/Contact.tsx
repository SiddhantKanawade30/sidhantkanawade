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
            <br />
            <br />
            Ways to contact me:
            <br />
            -Book a call with me at : <a href="https://calendly.com/kanawadesiddhant30/30min" className="text-primary text-base tracking-tight">Click here to book a call   </a>
            <br />
            -Mail me at <a href="mailto:kanawadesiddhant30@gmail.com" className="text-primary text-base tracking-tight">kanawadesiddhant30@gmail.com</a>
            <br />
            -Else fill the form below and i'll get back to you as soon as possible.
            
          </Subtitle>
          
          
        </div>
      </Container>  
    )
}