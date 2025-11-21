import { AboutHero } from "../components/AboutHero";
import { Experience } from "../components/Experience";
import { Qualification } from "../components/Qualification";
import { TechStack } from "../components/TechStack";

export default function About() {
  return (
    <div className="overflow-x-auto">
      <AboutHero />
      {/* <TechStack /> */}
      <Experience />
      <Qualification /> 
    </div>
  );
}