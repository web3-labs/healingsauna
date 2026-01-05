import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const ProductDetailsSection = () => {
  return (
    <section className="section-light py-20 md:py-28">
      <div className="container-section">
        <Tabs defaultValue="shipping" className="w-full">
          {/* Tab Navigation */}
          <TabsList className="w-full max-w-3xl mx-auto bg-transparent h-auto p-0 mb-12 flex justify-center gap-2 md:gap-4">
            <TabsTrigger 
              value="description" 
              className="text-base md:text-lg font-normal data-[state=active]:font-semibold data-[state=active]:text-foreground text-muted-foreground bg-transparent data-[state=active]:bg-transparent data-[state=active]:shadow-none px-3 md:px-4 py-2 border-b-2 border-transparent data-[state=active]:border-primary rounded-none transition-all"
            >
              <span className="font-semibold">Product</span>&nbsp;description
              <span className="text-muted-foreground/50 ml-2 md:ml-4 hidden md:inline">/</span>
            </TabsTrigger>
            <TabsTrigger 
              value="info" 
              className="text-base md:text-lg font-normal data-[state=active]:font-semibold data-[state=active]:text-foreground text-muted-foreground bg-transparent data-[state=active]:bg-transparent data-[state=active]:shadow-none px-3 md:px-4 py-2 border-b-2 border-transparent data-[state=active]:border-primary rounded-none transition-all"
            >
              <span className="font-semibold">Additional</span>&nbsp;info
              <span className="text-muted-foreground/50 ml-2 md:ml-4 hidden md:inline">/</span>
            </TabsTrigger>
            <TabsTrigger 
              value="shipping" 
              className="text-base md:text-lg font-normal data-[state=active]:font-semibold data-[state=active]:text-foreground text-muted-foreground bg-transparent data-[state=active]:bg-transparent data-[state=active]:shadow-none px-3 md:px-4 py-2 border-b-2 border-transparent data-[state=active]:border-primary rounded-none transition-all"
            >
              Shipping
            </TabsTrigger>
          </TabsList>

          {/* Tab Content */}
          <div className="max-w-4xl mx-auto">
            {/* Product Description Tab */}
            <TabsContent value="description" className="mt-0">
              <div className="bg-card border border-border rounded-2xl p-6 md:p-10">
                <div className="prose prose-lg max-w-none text-foreground">
                  <h2 className="text-2xl md:text-3xl font-bold mb-6">Product Description</h2>
                  <p className="text-muted-foreground">
                    <strong className="text-foreground">The "Black" Healing Sauna is attractive and appeals to those who want something that looks more high-tech.</strong> It's made out of a thicker nylon and the silver inside the tent acts as a mirror and reflects better than the Silver Sauna. It's also a bit stronger than the silver model.
                  </p>
                  <p className="text-muted-foreground mt-4">
                    <strong className="text-foreground">A 20 minute session in the Silver Healing Sauna can be done in about 17 in the black.</strong> Most who have experienced both find that the black sauna is a tad stronger. The embroidered Logo on the right of the sauna is impressive. It is a smart-looking sauna.
                  </p>
                  <p className="text-muted-foreground mt-4">
                    <strong className="text-foreground">All sit-up saunas come with chair and carry bag.</strong> Chair is currently rated by the manufacturer for about 220lbs. Over that, use your own weight-rated metal chair or stool and cover with a towel. (Some owners over 220 lbs up to 345lbs tell us they use the chair.)
                  </p>
                  <p className="text-muted-foreground mt-4">
                    <strong className="text-foreground">The dimensions of both the Silver and Black Saunas are 32" x 32" x 46".</strong> The carry bag weighs 18 lbs., chair separate. For airline travel, everything can fit into an oversize hard suitcase. Or a smaller suitcase, and borrow a metal chair or stool.
                  </p>
                </div>
              </div>
            </TabsContent>

            {/* Additional Info Tab */}
            <TabsContent value="info" className="mt-0">
              <div className="bg-card border border-border rounded-2xl p-6 md:p-10">
                <div className="prose prose-lg max-w-none text-foreground">
                  <h2 className="text-2xl md:text-3xl font-bold mb-6">Guarantee</h2>
                  <p className="text-muted-foreground">
                    <strong className="text-foreground">Try for 1 month risk-free.</strong> Satisfaction guaranteed. We have satisfied customers who have had their sauna for 15+ years and it still runs like the day they got it.
                  </p>
                  <p className="text-muted-foreground/70 text-sm mt-2">
                    *Minus return shipping and $150 restock fee.
                  </p>
                  
                  <h2 className="text-2xl md:text-3xl font-bold mt-10 mb-6">Warranty</h2>
                  <p className="text-muted-foreground">
                    All Relax Far Infrared Products come with a
                  </p>
                  <p className="text-foreground font-semibold text-xl mt-2">
                    One Year Purchase Warranty
                  </p>
                </div>
              </div>
            </TabsContent>

            {/* Shipping Tab */}
            <TabsContent value="shipping" className="mt-0">
              <div className="bg-card border border-border rounded-2xl p-6 md:p-10">
                <div className="prose prose-lg max-w-none text-foreground">
                  <h2 className="text-2xl md:text-3xl font-bold mb-6">Product Shipping</h2>
                  <p className="text-muted-foreground">
                    <strong className="text-foreground">We process orders as we receive them and usually ship them within 48 hours.</strong>
                  </p>
                  <p className="text-muted-foreground mt-4">
                    Our shipping and handling fee for saunas are $50. We ship orders until 4:00 pm EST M-F, except U.S. holidays. The Silver & Black sauna box weighs 33lbs and the BOX dimensions are 28x21x12. If you have any questions please contact us.
                  </p>
                  
                  <h3 className="text-xl font-bold mt-8 mb-4">Shipping Within the Continental U.S.</h3>
                  <p className="text-muted-foreground">
                    We mostly ship with FedEx. Orders are shipped without delivery signature requirements unless otherwise requested (additional fees apply). We are not responsible for lost or stolen packages if the carrier claims delivery. If you do not receive a package, in which delivery is confirmed by the carrier, we will help you to contact the carrier to try and resolve the issue. For additional protection against loss or damage, we recommend you purchase a signature service at the time your order is placed (for an additional fee).
                  </p>
                  
                  <h3 className="text-xl font-bold mt-8 mb-4">Shipping Outside the Continental U.S.</h3>
                  <p className="text-muted-foreground">
                    Including Alaska, Hawaii, Foreign U.S. Military Addresses & U.S. Territories (i.e. Puerto Rico) — The cost is $200.00.
                  </p>
                  
                  <h3 className="text-xl font-bold mt-8 mb-4">International Shipping Rates</h3>
                  <p className="text-muted-foreground">
                    We ship internationally by using DHL or UPS. International items are considered custom order and the shipping/conversion cost is non refundable. International shipping time varies depending on your location, on average you will most likely receive your sauna in 2-3 weeks.
                  </p>
                  
                  <h3 className="text-xl font-bold mt-8 mb-4">International Customs</h3>
                  <p className="text-muted-foreground">
                    The recipient of the international shipment is wholly responsible for resolving ALL customs charges and fees. If you refuse to resolve any customs issue that is either out of our control or out of the parcel carriers' control and results in the package being held at customs, then you forfeit any possible reimbursement of the product cost and/or shipping cost. International items are considered custom order and the shipping conversion cost is non refundable.
                  </p>
                </div>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </section>
  );
};

export default ProductDetailsSection;
