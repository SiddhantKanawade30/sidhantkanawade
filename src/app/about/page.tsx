import { AboutHero } from "../components/AboutHero";
import { Experience } from "../components/Experience";
import { Qualification } from "../components/Qualification";

export default function About() {
  return (
    <div className="overflow-x-auto">
      <AboutHero />
      <Experience />
      <Qualification /> 
    </div>
  );
}