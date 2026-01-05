import saunaLifestyleValue from "@/assets/sauna-lifestyle-value.png";

const ValueSection = () => {
  return (
    <section className="section-light py-20 md:py-28">
      <div className="container-section">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left - Content */}
          <div>
            <span className="inline-block text-primary text-sm font-semibold tracking-wide uppercase mb-4">
              Accessible Luxury
            </span>
            
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 leading-tight">
              The First Affordable At-Home Far-Infrared Sauna
            </h2>
            
            <p className="text-muted-foreground text-lg mb-6">
              Premium wellness shouldn't require a second mortgage. We built the Healing Sauna GO 
              to deliver the same recovery benefits as $5,000–$10,000 saunas—at a fraction of the cost.
            </p>

            <p className="text-muted-foreground mb-8">
              Same far-infrared technology. Same therapeutic results. Same quality materials. 
              Just smarter engineering and direct-to-consumer pricing.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <div id="value-shopify-button" className="w-full min-h-[56px]" />
            </div>
          </div>

          {/* Right - Image with accessories */}
          <div className="relative">
            <div className="bg-muted rounded-2xl p-8 md:p-12">
              <img
                src={saunaLifestyleValue}
                alt="Healing Sauna GO with accessories"
                className="w-full h-auto rounded-xl"
              />
              
              {/* Included Items */}
              <div className="mt-6 grid grid-cols-2 gap-4">
                <div className="bg-background rounded-lg p-4 text-center">
                  <div className="text-sm font-semibold text-foreground">Folding Chair</div>
                  <div className="text-xs text-muted-foreground">Included</div>
                </div>
                <div className="bg-background rounded-lg p-4 text-center">
                  <div className="text-sm font-semibold text-foreground">Carry Bag</div>
                  <div className="text-xs text-muted-foreground">Included</div>
                </div>
                <div className="bg-background rounded-lg p-4 text-center">
                  <div className="text-sm font-semibold text-foreground">Foot Pad</div>
                  <div className="text-xs text-muted-foreground">Included</div>
                </div>
                <div className="bg-background rounded-lg p-4 text-center">
                  <div className="text-sm font-semibold text-foreground">Remote Control</div>
                  <div className="text-xs text-muted-foreground">Included</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ValueSection;
