import { Flame, Heart, Moon, RefreshCw } from "lucide-react";

const benefits = [
  { icon: Flame, label: "Calorie Burn" },
  { icon: Heart, label: "Alleviate Pain" },
  { icon: Moon, label: "Sleep Optimization" },
  { icon: RefreshCw, label: "Boost Recovery" }
];

const BenefitsStrip = () => {
  return (
    <section className="bg-background py-12 md:py-16 border-y border-border">
      <div className="container-section">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {benefits.map((benefit, index) => (
            <div key={index} className="text-center">
              <div className="w-14 h-14 mx-auto rounded-full bg-primary/10 flex items-center justify-center mb-3">
                <benefit.icon size={24} className="text-primary" />
              </div>
              <h3 className="text-foreground font-semibold text-base">{benefit.label}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsStrip;
