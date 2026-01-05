import { Droplets, Dumbbell, Heart, Moon } from "lucide-react";

const benefits = [
  { icon: Droplets, label: "Detoxification", description: "Deep cleansing sweat" },
  { icon: Dumbbell, label: "Muscle Recovery", description: "Faster healing" },
  { icon: Heart, label: "Stress Relief", description: "Deep relaxation" },
  { icon: Moon, label: "Better Sleep", description: "Improved rest quality" }
];

const BenefitsStrip = () => {
  return (
    <section className="section-dark py-16 md:py-20">
      <div className="container-section">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {benefits.map((benefit, index) => (
            <div key={index} className="text-center">
              <div className="w-16 h-16 mx-auto rounded-full bg-gradient-primary flex items-center justify-center mb-4">
                <benefit.icon size={28} className="text-white" />
              </div>
              <h3 className="text-white font-semibold text-lg mb-1">{benefit.label}</h3>
              <p className="text-white/60 text-sm">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsStrip;
