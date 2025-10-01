interface ProjectSectionProps {
  id: string;
  title: string;
  description?: string;
}

const ProjectSection = ({ id, title, description }: ProjectSectionProps) => {
  return (
    <section id={id} className="min-h-screen flex items-center justify-center py-20">
      <div className="w-full max-w-4xl">
        <h2 className="text-4xl font-light mb-6">{title}</h2>
        {description && (
          <p className="text-muted-foreground text-lg mb-12">{description}</p>
        )}
        
        {/* Placeholder for artwork/images */}
        <div className="aspect-video bg-muted/20 rounded-sm flex items-center justify-center">
          <span className="text-muted-foreground text-sm">Add your artwork here</span>
        </div>
      </div>
    </section>
  );
};

export default ProjectSection;
