const benefits = [
  { 
    icon: "https://cdn.prod.website-files.com/66f3459edfb782f94764ae4c/671e1e3b047cb3876e7d3b53_Guarantee%20Image.svg",
    alt: "Guarantee Image",
    title: "30 DAY MONEY BACK GUARANTEE",
    description: "Try for 1 month risk free."
  },
  { 
    icon: "https://cdn.prod.website-files.com/66f3459edfb782f94764ae4c/671e1e3bb80f279d61aa84c6_Award%20Image.svg",
    alt: "Award Image",
    title: "1 YEAR WARRANTY",
    description: "Try for 1 month risk free. Satisfaction guaranteed."
  },
  { 
    icon: "https://cdn.prod.website-files.com/66f3459edfb782f94764ae4c/671e1e3ba808fb65a6a2110f_Delivery%20Icon.svg",
    alt: "Delivery Icon",
    title: "FREE SHIPPING",
    description: "Try for 1 month risk free. Satisfaction guaranteed."
  }
];

const BenefitsStrip = () => {
  return (
    <section className="section-dark py-12 md:py-16">
      <div className="container-section">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {benefits.map((benefit, index) => (
            <div key={index} className="text-center">
              <img 
                src={benefit.icon} 
                alt={benefit.alt} 
                loading="lazy"
                className="w-16 h-16 mx-auto mb-4"
              />
              <h3 className="text-white font-semibold text-lg mb-2">{benefit.title}</h3>
              <p className="text-white/70 text-sm">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsStrip;
