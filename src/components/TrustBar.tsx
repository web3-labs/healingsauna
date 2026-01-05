import { Shield, Truck, RotateCcw, Users, Award } from "lucide-react";

const trustItems = [
  { icon: Shield, label: "Secure Checkout" },
  { icon: Truck, label: "Fast Shipping" },
  { icon: RotateCcw, label: "30-Day Guarantee" },
  { icon: Users, label: "10,000+ Customers" },
  { icon: Award, label: "Top Rated" },
];

const TrustBar = () => {
  return (
    <section className="bg-gradient-primary py-4">
      <div className="container-section">
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
          {trustItems.map((item, index) => (
            <div
              key={index}
              className="flex items-center gap-2 text-white/90"
            >
              <item.icon size={20} className="text-white" />
              <span className="text-sm font-medium whitespace-nowrap">{item.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustBar;
