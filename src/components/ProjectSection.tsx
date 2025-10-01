import { useState, useEffect } from 'react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious, type CarouselApi } from '@/components/ui/carousel';

interface ProjectSectionProps {
  id: string;
  title: string;
  description?: string;
  carousel: boolean;
  images: string[];
}

const ProjectSection = ({ id, title, description, carousel, images }: ProjectSectionProps) => {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!api) return;

    setCurrent(api.selectedScrollSnap());

    api.on('select', () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

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
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <CarouselPrevious className="static translate-y-0" aria-label="Previous image" />
              
              <Carousel className="w-full" opts={{ loop: true }} setApi={setApi}>
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
              </Carousel>
              
              <CarouselNext className="static translate-y-0" aria-label="Next image" />
            </div>
            
            {/* Dots indicator */}
            <div className="flex justify-center gap-2">
              {images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => api?.scrollTo(index)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    index === current ? 'bg-foreground w-6' : 'bg-muted-foreground/30'
                  }`}
                  aria-label={`Go to image ${index + 1}`}
                />
              ))}
            </div>
          </div>
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
