import { SectionHeading } from "@/components/ui/SectionHeading";
import { FadeInOnScroll } from "@/components/motion/FadeInOnScroll";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { projects } from "@/data/projects";

export function ProjectsSection() {
  return (
    <section id="projects" className="bg-slate-50 px-6 py-24 dark:bg-gray-900">
      <div className="mx-auto max-w-6xl">
        <FadeInOnScroll>
          <SectionHeading
            title="Projects"
            subtitle="A selection of things I've built"
          />
        </FadeInOnScroll>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <FadeInOnScroll key={project.title} delay={index * 0.1}>
              <ProjectCard project={project} />
            </FadeInOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
