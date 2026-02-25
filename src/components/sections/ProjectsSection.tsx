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
            title="What I've Built"
            subtitle="Real problems I spotted, and the tools I built to solve them"
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
