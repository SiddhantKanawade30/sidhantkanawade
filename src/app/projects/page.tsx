import { ProjectsHero } from "../components/ProjectsHero";
import { Projects } from "../components/projects/Projects";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects - Siddhant Kanawade",
  description: "Thoughts, experiences, and insights on technology and development",
}; 


export default function ProjectsPage() {
    return (
      <div className="overflow-x-auto">
        <ProjectsHero />
        <Projects />
      </div>
    );
  }