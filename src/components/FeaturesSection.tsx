import { Zap, Package, Thermometer, FolderOpen } from "lucide-react";
import { useState } from "react";
import saunaLuxuryGym from "@/assets/sauna-luxury-gym.png";

const features = [
  {
    icon: Zap,
    title: "Powerful Sauna",
    description: "Premium far-infrared emitters deliver deep, penetrating heat that reaches muscles and joints for maximum therapeutic benefit."
  },
  {
    icon: Package,
    title: "Portable Design",
    description: "Lightweight and foldable, our sauna fits anywhere. Take it with you on trips or store it conveniently when not in use."
  },
  {
    icon: Thermometer,
    title: "Rapid Heat-Up",
    description: "Reach optimal temperature in under 10 minutes. No waiting, no wasted time—just instant relaxation and recovery."
  },
  {
    icon: FolderOpen,
    title: "Easy Storage",
    description: "Folds flat to just 8 inches. Store in a closet, under your bed, or in your car. Perfect for any living space."
  }
];

const FeaturesSection = () => {
  const [activeFeature, setActiveFeature] = useState(0);

  return (
    <section id="features" className="section-light py-20 md:py-28">
      <div className="container-section">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Sauna Features
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Engineered for performance, designed for convenience
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative rounded-2xl overflow-hidden shadow-2xl">
            <img
              src={saunaLuxuryGym}
              alt="Healing Sauna in use"
              className="w-full h-auto"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
          </div>

          {/* Features Tabs */}
          <div className="space-y-4">
            {features.map((feature, index) => (
              <button
                key={index}
                onClick={() => setActiveFeature(index)}
                className={`w-full text-left p-6 rounded-xl transition-all duration-300 ${
                  activeFeature === index
                    ? "bg-gradient-primary text-white shadow-lg"
                    : "bg-muted hover:bg-muted/80 text-foreground"
                }`}
              >
                <div className="flex items-start gap-4">
                  <div className={`w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0 ${
                    activeFeature === index ? "bg-white/20" : "bg-primary/10"
                  }`}>
                    <feature.icon size={24} className={activeFeature === index ? "text-white" : "text-primary"} />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold mb-1">{feature.title}</h3>
                    <p className={`text-sm ${activeFeature === index ? "text-white/80" : "text-muted-foreground"}`}>
                      {feature.description}
                    </p>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
