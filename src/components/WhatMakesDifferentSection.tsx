import { useState } from "react";
import { Circle } from "lucide-react";
import { cn } from "@/lib/utils";

const tabs = [
  {
    id: "emitters",
    label: "Most Power Emitters",
    title: "Most Powerful Emitters",
    description: "Our sauna features the most advanced and powerful far-infrared emitters available. These emitters are designed to provide the highest level of therapeutic heat, ensuring maximum benefits for your health and wellness. The emitters work efficiently to penetrate deeper into your body, delivering heat precisely where it's needed most.",
    features: ["Deep Penetration", "Enhanced Heat Distribution", "Optimal Wavelength"]
  },
  {
    id: "quality",
    label: "Quality Advantage",
    title: "Our Quality Advantage",
    description: "We pride ourselves on the quality of our saunas, which are built using premium materials and the latest technology. Our commitment to quality ensures that every sauna provides a consistent and reliable experience for users, enhancing the overall effectiveness of the infrared therapy.",
    features: ["Premium Materials", "Cutting-Edge Technology", "Rigorous Testing"]
  },
  {
    id: "doctor",
    label: "Doctor Trusted",
    title: "Doctors choose the Healing Sauna",
    description: "Healing Sauna is trusted by doctors and health practitioners worldwide. Our technology has been clinically tested and validated for its effectiveness in promoting health and wellness. We collaborate with leading experts to continuously improve and optimize our saunas for the best user experience.",
    features: ["Clinically Proven Benefits", "Endorsed by Health Professionals", "Ongoing Innovation"]
  },
  {
    id: "pure",
    label: "Pure Far Infrared",
    title: "Pure Far-Infrared",
    description: "Our saunas deliver pure far-infrared energy that resonates with your body's water cells, providing a powerful and effective therapy experience. By filtering out other infrared bands, our saunas ensure you receive the most beneficial far-infrared energy, optimizing health outcomes.",
    features: ["Resonates with Water Cells", "Deep Detox", "Stimulates Healing"]
  },
  {
    id: "recommended",
    label: "Recommended",
    title: "Recommended",
    description: "Recommended by health professionals and satisfied users alike, our sauna has earned a reputation for excellence. The proven benefits and superior performance make it a top choice for those seeking effective and safe infrared therapy.",
    features: ["User-Approved", "Backed by Research", "Top Choice for Professionals"]
  }
];

const WhatMakesDifferentSection = () => {
  const [activeTab, setActiveTab] = useState("doctor");

  const activeContent = tabs.find(tab => tab.id === activeTab);

  return (
    <section className="bg-foreground py-20 md:py-28">
      <div className="container-section">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-background">
            What makes our sauna different?
          </h2>
        </div>

        {/* Tabs Layout */}
        <div className="grid lg:grid-cols-[280px_1fr] gap-8 lg:gap-12 max-w-5xl mx-auto">
          {/* Tab Menu - Vertical on desktop, horizontal scroll on mobile */}
          <div className="flex lg:flex-col gap-2 overflow-x-auto lg:overflow-visible pb-4 lg:pb-0 -mx-4 px-4 lg:mx-0 lg:px-0">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={cn(
                  "flex items-center gap-3 px-4 py-3 rounded-lg transition-all whitespace-nowrap lg:whitespace-normal text-left min-w-max lg:min-w-0",
                  activeTab === tab.id
                    ? "bg-background/10 text-background"
                    : "text-background/60 hover:text-background/80 hover:bg-background/5"
                )}
              >
                <Circle 
                  className={cn(
                    "w-3 h-3 flex-shrink-0 transition-all",
                    activeTab === tab.id ? "fill-primary text-primary" : "text-background/40"
                  )} 
                />
                <span className="text-sm md:text-base font-medium">{tab.label}</span>
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <div className="bg-background/5 rounded-2xl p-6 md:p-8 lg:p-10 border border-background/10">
            {activeContent && (
              <div className="space-y-6">
                <h3 className="text-2xl md:text-3xl font-bold text-background">
                  {activeContent.title}
                </h3>
                <p className="text-background/70 text-base md:text-lg leading-relaxed">
                  {activeContent.description}
                </p>
                <div className="flex flex-wrap gap-4 pt-2">
                  {activeContent.features.map((feature, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <Circle className="w-2.5 h-2.5 fill-primary text-primary flex-shrink-0" />
                      <span className="text-background/80 text-sm md:text-base">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatMakesDifferentSection;
