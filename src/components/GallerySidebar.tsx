interface Project {
  id: string;
  title: string;
}

interface GallerySidebarProps {
  projects: Project[];
  activeProject: string;
}

const GallerySidebar = ({ projects, activeProject }: GallerySidebarProps) => {
  const scrollToProject = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <aside className="fixed left-0 top-0 h-screen w-64 bg-sidebar border-r border-sidebar-border overflow-y-auto">
      <div className="p-8">
        <h1 className="text-2xl font-light mb-12 text-sidebar-foreground">Gallery</h1>
        
        <nav>
          <ul className="space-y-4">
            {projects.map((project) => (
              <li key={project.id}>
                <button
                  onClick={() => scrollToProject(project.id)}
                  className={`text-left w-full text-sm transition-colors duration-200 ${
                    activeProject === project.id
                      ? 'text-sidebar-primary font-medium'
                      : 'text-muted-foreground hover:text-sidebar-foreground'
                  }`}
                >
                  {project.title}
                </button>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </aside>
  );
};

export default GallerySidebar;
