import { Container } from "../components/Container";

export default function About() {
  return (
    <div className="min-h-screen flex items-start justify-start">
      <Container className="min-h-screen p-4 md:pt-20 md:pb-10">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-primary mb-8">
            About Me
          </h1>
          <p className="text-lg md:text-xl text-secondary max-w-3xl leading-relaxed mb-8">    
            I am a software engineer with a passion for building products that help people live better lives.   
          </p>
          
          {/* Add more content sections here as needed */}
          <div className="prose prose-lg max-w-none">
            <p className="text-secondary leading-relaxed">
              I love creating innovative solutions and learning new technologies. My journey in software development 
              has been driven by curiosity and a desire to make a positive impact through technology.
            </p>
          </div>
        </div>
      </Container>
    </div>
  );
}