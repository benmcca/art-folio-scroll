import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';

interface ProjectSectionProps {
  id: string;
  title: string;
  description?: string;
  carousel: boolean;
  images: string[];
}

const ProjectSection = ({ id, title, description, carousel, images }: ProjectSectionProps) => {
  return (
    <section id={id} className="min-h-screen flex items-center justify-center py-20">
      <div className="w-full max-w-4xl">
        <h2 className="text-4xl font-light mb-6">{title}</h2>
        {description && (
          <p className="text-muted-foreground text-lg mb-12">{description}</p>
        )}
        
        {/* Artwork/Images */}
        {images.length === 0 ? (
          <div className="aspect-video bg-muted/20 rounded-sm flex items-center justify-center">
            <span className="text-muted-foreground text-sm">Add your artwork here</span>
          </div>
        ) : carousel ? (
          <Carousel className="w-full">
            <CarouselContent>
              {images.map((image, index) => (
                <CarouselItem key={index}>
                  <div className="aspect-video bg-muted/20 rounded-sm overflow-hidden">
                    <img 
                      src={image} 
                      alt={`${title} - Image ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-4" />
            <CarouselNext className="right-4" />
          </Carousel>
        ) : (
          <div className="space-y-8">
            {images.map((image, index) => (
              <div key={index} className="aspect-video bg-muted/20 rounded-sm overflow-hidden">
                <img 
                  src={image} 
                  alt={`${title} - Image ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default ProjectSection;
