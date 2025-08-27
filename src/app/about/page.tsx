import { Container } from "../components/Container";
import { AboutHero } from "../components/AboutHero";
import { Experience } from "../components/Experience";
import { Qualification } from "../components/Qualification";

export default function About() {
  return (
    <div >
      <AboutHero />
      <Experience />
      <Qualification />
    </div>
  );
}