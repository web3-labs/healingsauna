import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import girlsSaunaImage from "@/assets/girls-sauna.jpg";

const features = [
  {
    image: "https://cdn.prod.website-files.com/66f3459edfb782f94764ae4c/6862f045efad15ab297cb906_room.webp",
    title: "Longer, deeper sleep",
    description: "Sauna releases melatonin, allowing you to get to sleep faster and stay asleep longer."
  },
  {
    image: "https://cdn.prod.website-files.com/66f3459edfb782f94764ae4c/671e7fce53744b89371c6a7b_Screenshot%202024-10-27%20at%203.09.50%E2%80%AFAM.avif",
    title: "Enhanced relaxation and stress reduction",
    description: "Heat therapy relaxes the body and mind, reducing stress and anxiety."
  },
  {
    image: girlsSaunaImage,
    title: "Improved cardiovascular health",
    description: "Regular sauna is proven to improve cardiac function and increase blood circulation in the body."
  },
  {
    image: "https://cdn.prod.website-files.com/66f3459edfb782f94764ae4c/67eb16fb52854a81de909ddb_new.webp",
    title: "Faster muscle recovery",
    description: "Far infrared heat penetrates deep into muscles, speeding up recovery and reducing soreness."
  }
];

const FeaturesSlider = () => {
  return (
    <section className="bg-background py-16 md:py-20 overflow-hidden">
      <div className="container-section">
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
        >
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
              Sauna Benefits
            </h2>
            <div className="flex items-center gap-2">
              <CarouselPrevious className="static translate-y-0 h-10 w-10 rounded-full border border-foreground/20 bg-transparent hover:bg-muted" />
              <CarouselNext className="static translate-y-0 h-10 w-10 rounded-full border border-foreground/20 bg-transparent hover:bg-muted" />
            </div>
          </div>
          
          <CarouselContent className="-ml-4">
            {features.map((feature, index) => (
              <CarouselItem key={index} className="pl-4 basis-full sm:basis-1/2 lg:basis-1/3">
                <div className="flex flex-col">
                  <div className="aspect-[4/3] overflow-hidden rounded-lg mb-4">
                    <img
                      src={feature.image}
                      alt={feature.title}
                      loading="lazy"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-lg md:text-xl font-semibold text-foreground mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground text-sm md:text-base">
                    {feature.description}
                  </p>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </section>
  );
};

export default FeaturesSlider;
