import { Star } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const testimonials = [
  {
    image: "https://cdn.prod.website-files.com/66f3459edfb782f94764ae4c/67e27f34f7d1348b7ac6e029_Screenshot%202025-03-25%20at%203.01.20%E2%80%AFAM.webp",
    name: "Peter Diamandis",
    quote: "I use my Healing Sauna GO every day, and am even taking Zoom calls in it."
  },
  {
    image: "https://cdn.prod.website-files.com/66f3459edfb782f94764ae4c/67e27ef837030d2ecf15f7ed_IMG_7022%202.webp",
    name: "Brian Lewis",
    quote: "I've been in the fitness world 15 years, and this is the one tool I now tell every client to invest in. Muscle recovery, fat burn, and total relaxation—in one compact system."
  },
  {
    image: "https://cdn.prod.website-files.com/66f3459edfb782f94764ae4c/6835b160b5648a4b699ce607_Bitmap.webp",
    name: "Kendall kay",
    quote: "After just a few weeks of using the sauna, my skin looked brighter and tighter. It's my new go-to ritual after workouts. Bonus: it fits in my apartment closet."
  },
  {
    image: "https://cdn.prod.website-files.com/66f3459edfb782f94764ae4c/685167c3c98036acebe0f5b4_bizzie.webp",
    name: "Bizzie Gold",
    quote: "I run a holistic wellness clinic, and we now recommend Healing Sauna GO to every client. It's clean, powerful, and the setup takes minutes. Detoxing has never been this efficient—or this convenient."
  },
  {
    image: "https://cdn.prod.website-files.com/66f3459edfb782f94764ae4c/671e7fd0dc757970e5eaebe1_0W7A5532.avif",
    name: "Dan Kavanaugh",
    quote: "I live out of a suitcase, and this sauna has been a wellness lifeline. After long flights and endless Zoom calls, I zip it up, plug it in, and feel like a new person within minutes."
  },
  {
    image: "https://cdn.prod.website-files.com/66f3459edfb782f94764ae4c/67e27ed7522c9fb5a3c3f9f4_IMG_7087.webp",
    name: "Linda Harris",
    quote: "Years of back pain had me desperate for relief. After using the Healing Sauna consistently for a month, I've cut my pain meds in half and actually sleep through the night. It's legit."
  }
];

const ClientTestimonialsSlider = () => {
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
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground uppercase tracking-wide">
              What Our Clients Are Saying
            </h2>
            <div className="flex items-center gap-2">
              <CarouselPrevious className="static translate-y-0 h-10 w-10 md:h-12 md:w-12 rounded-full bg-foreground text-background hover:bg-foreground/90 border-0" />
              <CarouselNext className="static translate-y-0 h-10 w-10 md:h-12 md:w-12 rounded-full bg-foreground text-background hover:bg-foreground/90 border-0" />
            </div>
          </div>
          
          <CarouselContent className="-ml-4">
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={index} className="pl-4 basis-[85%] sm:basis-1/2 lg:basis-1/4">
                <div className="flex flex-col">
                  <div className="aspect-[3/4] overflow-hidden rounded-lg mb-4">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      loading="lazy"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex gap-0.5 mb-2">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={16} className="fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <h3 className="text-base md:text-lg font-semibold text-foreground mb-2">
                    {testimonial.name}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    "{testimonial.quote}"
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

export default ClientTestimonialsSlider;
