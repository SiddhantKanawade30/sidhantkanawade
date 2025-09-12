import { Container } from "./components/Container";
import { Projects } from "./components/Projects";
import { Hero } from "./components/Hero";
// import { Current } from "./components/Current";
import { LandingBlogs } from "./components/LandingBlogs";
import { HeroWork } from "./components/HeroWork";
import { Testimonials } from "./components/Testimonials";

export default function Home() {
  return (
    <div className="min-h-screen flex items-start justify-start">
      
      <Container className=" px-0 py-4 md:pt-25 md:pb-10">
        <Hero />
       
        <Projects />
        <LandingBlogs />
        <HeroWork />
        <Testimonials />
      </Container>
    </div>
  );
} 