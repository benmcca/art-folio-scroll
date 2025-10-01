import { useState, useEffect } from "react";
import GallerySidebar from "@/components/GallerySidebar";
import ProjectSection from "@/components/ProjectSection";

const projects = [
  {
    id: "project-1",
    title: "Project One",
    description: "A brief description of your first project",
    carousel: true,
    images: [],
  },
  {
    id: "project-2",
    title: "Project Two",
    description: "A brief description of your second project",
    carousel: false,
    images: [],
  },
  {
    id: "project-3",
    title: "Project Three",
    description: "A brief description of your third project",
    carousel: true,
    images: [],
  },
  {
    id: "project-4",
    title: "Project Four",
    description: "A brief description of your fourth project",
    carousel: false,
    images: [],
  },
];

const Index = () => {
  const [activeProject, setActiveProject] = useState("project-1");

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 2;

      for (const project of projects) {
        const element = document.getElementById(project.id);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveProject(project.id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen">
      <GallerySidebar projects={projects} activeProject={activeProject} />

      {/* Main content - centered across full screen, ignoring sidebar */}
      <main className="flex justify-center px-8">
        <div className="w-full max-w-6xl">
          {projects.map((project) => (
            <ProjectSection
              key={project.id}
              id={project.id}
              title={project.title}
              description={project.description}
              carousel={project.carousel}
              images={project.images}
            />
          ))}
        </div>
      </main>
    </div>
  );
};

export default Index;
