import { Container } from "./Container"
import { Title } from "./ui/Title"
import { Subtitle } from "./ui/Subtitle"


export const ContactHero = () => {
    return (
        <Container className="p-4 md:pt-20 md:pb-10 px-4 md:px-7 overflow-x-auto">
        <div className="max-w-6xl mx-auto min-w-0">
          <Title>Contact Me</Title>
          <Subtitle>
            I am open to freelancing offers. Reach out to me to enquire more about my work and services.    
            <br />
            <br />
            Ways to contact me:
            <br />
            -Book a call with me at : <a href="https://calendly.com/kanawadesiddhant30/30min" className="text-primary text-sm md:text-base tracking-tight break-words">Click here to book a call   </a>
            <br />
            -Mail me at <a href="mailto:kanawadesiddhant30@gmail.com" className="text-primary text-sm md:text-base tracking-tight break-words">kanawadesiddhant30@gmail.com</a>
            <br />
            -Else fill the form below and i&apos;ll get back to you as soon as possible.
            
          </Subtitle> 
          
          
        </div>
      </Container>  
    )
}