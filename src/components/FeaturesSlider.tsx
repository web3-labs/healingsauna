import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const features = [
  {
    image: "https://cdn.prod.website-files.com/66f3459edfb782f94764ae4c/6862f045efad15ab297cb906_room.webp",
    title: "Peaceful Sessions",
    description: "Experience up to 30% quieter operation for deeper meditation and uninterrupted relaxation. A space to pause, reset, and realign."
  },
  {
    image: "https://cdn.prod.website-files.com/66f3459edfb782f94764ae4c/671e7fce53744b89371c6a7b_Screenshot%202024-10-27%20at%203.09.50%E2%80%AFAM.avif",
    title: "Rapid Warmth",
    description: "Reach optimal far infrared healing temperatures 30% faster with our advanced heating technology — so you can restore, detox, and energize without delay."
  },
  {
    image: "https://cdn.prod.website-files.com/66f3459edfb782f94764ae4c/671e7ff70115a7ce818d5af2_IMG_0014.webp",
    title: "Pure, Clean Heat",
    description: "Our medical-grade sauna radiators use patented far infrared technology with no EMF, delivering a clean, therapeutic heat that deeply penetrates the body for cellular-level healing."
  },
  {
    image: "https://cdn.prod.website-files.com/66f3459edfb782f94764ae4c/67eb16fb52854a81de909ddb_new.webp",
    title: "Sets up in 5 minutes. Heats in one",
    description: "A patented ceramic semiconductor"
  }
];

const FeaturesSlider = () => {
  return (
    <section className="bg-background py-16 md:py-20 overflow-hidden">
      <div className="container-section">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Sauna Features
          </h2>
        </div>
        
        <Carousel
          opts={{
            align: "center",
            loop: true,
          }}
          className="w-full max-w-4xl mx-auto"
        >
          <CarouselContent>
            {features.map((feature, index) => (
              <CarouselItem key={index}>
                <div className="flex flex-col items-center">
                  <img
                    src={feature.image}
                    alt={feature.title}
                    loading="lazy"
                    className="w-full max-w-[900px] h-auto rounded-lg mb-6"
                  />
                  <div className="text-center max-w-2xl px-4">
                    <h3 className="text-xl md:text-2xl font-bold text-foreground mb-3">
                      {feature.title}
                    </h3>
                    <p className="text-muted-foreground">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="left-0 md:-left-12" />
          <CarouselNext className="right-0 md:-right-12" />
        </Carousel>
      </div>
    </section>
  );
};

export default FeaturesSlider;
