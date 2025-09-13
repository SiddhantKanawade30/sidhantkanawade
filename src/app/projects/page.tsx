import { ProjectsHero } from "../components/ProjectsHero";
import { Projects } from "../components/projects/Projects";



export default function ProjectsPage() {
    return (
      <div className="overflow-x-auto">
        <ProjectsHero />
        <Projects />
      </div>
    );
  }