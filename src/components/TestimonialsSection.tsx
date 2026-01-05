import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Sarah M.",
    role: "Fitness Coach",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=faces",
    rating: 5,
    text: "After every intense workout, this sauna helps me recover faster. My muscle soreness has decreased dramatically. Best investment I've made for my health."
  },
  {
    name: "Michael R.",
    role: "Tech Executive",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=faces",
    rating: 5,
    text: "The portability sold me. I travel frequently and can take my recovery routine with me. Heats up fast and feels like a professional spa session."
  },
  {
    name: "Jennifer L.",
    role: "Yoga Instructor",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop&crop=faces",
    rating: 5,
    text: "I was skeptical at first, but after 2 weeks I noticed better sleep and less joint pain. My clients are now asking where I got it!"
  },
  {
    name: "David K.",
    role: "Marathon Runner",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=faces",
    rating: 5,
    text: "Training recovery is crucial for performance. This sauna has become an essential part of my daily routine. The heat penetration is noticeably deeper than steam saunas."
  },
  {
    name: "Amanda T.",
    role: "Wellness Blogger",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=faces",
    rating: 5,
    text: "Beautiful design, easy to set up, and the results speak for themselves. My skin has never looked better, and I sleep like a baby after each session."
  },
  {
    name: "Robert J.",
    role: "Physical Therapist",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=faces",
    rating: 5,
    text: "As a PT, I recommend this to my patients. The far-infrared technology provides genuine therapeutic benefits at an accessible price point."
  }
];

const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="section-light py-20 md:py-28">
      <div className="container-section">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            What Our Clients Are Saying
          </h2>
          <p className="text-muted-foreground text-lg">
            Join thousands of satisfied customers transforming their wellness routine
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-card rounded-xl p-6 shadow-md border border-border hover:shadow-lg transition-shadow"
            >
              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} size={18} className="fill-primary text-primary" />
                ))}
              </div>

              {/* Quote */}
              <p className="text-foreground mb-6 leading-relaxed">
                "{testimonial.text}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <div className="font-semibold text-foreground">{testimonial.name}</div>
                  <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
