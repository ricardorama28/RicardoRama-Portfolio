import { HeroSection } from "@/components/sections/HeroSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { ProjectsSection } from "@/components/sections/ProjectsSection";
import { StackSection } from "@/components/sections/StackSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { FilmPerforation } from "@/components/ui/FilmPerforation";

export default function Home() {
  return (
    <>
      <HeroSection />
      <FilmPerforation />
      <AboutSection />
      <FilmPerforation />
      <ProjectsSection />
      <FilmPerforation />
      <StackSection />
      <FilmPerforation />
      <ContactSection />
    </>
  );
}
