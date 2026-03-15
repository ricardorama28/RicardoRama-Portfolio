import { SectionHeading } from "@/components/ui/SectionHeading";
import { FadeInOnScroll } from "@/components/motion/FadeInOnScroll";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { projects } from "@/data/projects";

export function ProjectsSection() {
  return (
    <section
      id="projects"
      className="bg-cream-dark px-6 py-32 dark:bg-warm-dark-alt"
    >
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          title="What I've Built"
          subtitle="Real problems I spotted, and the tools I built to solve them"
          chapter="II"
        />

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <FadeInOnScroll key={project.title} delay={index * 0.1}>
              <ProjectCard project={project} index={index} />
            </FadeInOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
