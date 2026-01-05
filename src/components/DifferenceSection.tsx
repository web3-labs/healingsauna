import { Check } from "lucide-react";

const features = [
  "Far-infrared wavelength (5.6-15 microns)",
  "360° full-body heat coverage",
  "Low EMF certified panels",
  "Medical-grade materials",
  "Dual heating zones",
  "Digital temperature control"
];

const DifferenceSection = () => {
  return (
    <section className="section-dark py-20 md:py-28">
      <div className="container-section">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left - Features */}
          <div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              What Makes Our Sauna{" "}
              <span className="gradient-text">Different?</span>
            </h2>
            
            <p className="text-white/70 text-lg mb-8">
              We engineered the Healing Sauna GO with the same technology used in professional 
              wellness clinics—now accessible for your home.
            </p>

            <ul className="space-y-4">
              {features.map((feature, index) => (
                <li key={index} className="flex items-center gap-4 text-white/90">
                  <div className="w-6 h-6 rounded-full bg-gradient-primary flex items-center justify-center flex-shrink-0">
                    <Check size={14} className="text-white" />
                  </div>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right - Emitter Info */}
          <div className="relative">
            <div className="bg-brand-charcoal rounded-2xl p-8 md:p-10 border border-white/10">
              <div className="inline-block px-4 py-1 rounded-full bg-gradient-primary text-white text-sm font-semibold mb-6">
                Technology Spotlight
              </div>
              
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                Most Powerful Emitters
              </h3>
              
              <p className="text-white/70 mb-6">
                Our carbon fiber emitters produce far-infrared heat at the optimal wavelength 
                (5.6-15 microns) that penetrates up to 1.5 inches into tissue. This delivers 
                therapeutic benefits that traditional saunas simply cannot match.
              </p>

              <div className="grid grid-cols-2 gap-6">
                <div className="text-center p-4 bg-white/5 rounded-xl">
                  <div className="text-3xl font-bold gradient-text mb-1">1.5"</div>
                  <div className="text-white/60 text-sm">Heat Penetration</div>
                </div>
                <div className="text-center p-4 bg-white/5 rounded-xl">
                  <div className="text-3xl font-bold gradient-text mb-1">360°</div>
                  <div className="text-white/60 text-sm">Body Coverage</div>
                </div>
              </div>
            </div>

            {/* Decorative glow */}
            <div className="absolute -inset-4 bg-gradient-primary opacity-10 blur-3xl rounded-3xl -z-10" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default DifferenceSection;
