import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "How long does it take to heat up?",
    answer: "The Healing Sauna GO heats up to optimal temperature (around 150°F) in under 10 minutes. You can start your session while it's warming up for a gentle warm-up, or wait for full heat for maximum intensity."
  },
  {
    question: "Is far-infrared heat safe?",
    answer: "Yes, far-infrared is completely safe. It's the same type of heat your body naturally produces. Our panels are low EMF certified and meet all safety standards. Far-infrared has been used in hospitals and wellness clinics for decades."
  },
  {
    question: "Who is this sauna best for?",
    answer: "The Healing Sauna GO is perfect for athletes seeking faster recovery, busy professionals wanting stress relief, anyone with muscle or joint discomfort, and wellness enthusiasts looking to detox. It's suitable for most adults—check with your doctor if you have specific health conditions."
  },
  {
    question: "What are the electrical requirements?",
    answer: "The sauna runs on a standard 110V household outlet and uses about 1000W at full heat—similar to a hair dryer. No special installation required. Simply plug it in and you're ready to go."
  },
  {
    question: "What's included with my purchase?",
    answer: "Your Healing Sauna GO comes with the sauna tent, folding chair, foot heating pad, carry bag for storage and travel, remote control, and a detailed user guide. Everything you need to get started is included."
  },
  {
    question: "What's your return policy?",
    answer: "We offer a 30-day satisfaction guarantee. If you're not completely satisfied with your Healing Sauna GO, contact us within 30 days for a full refund. We also provide a 1-year warranty on all components."
  },
  {
    question: "How big is it when folded?",
    answer: "When folded, the sauna measures approximately 35\" × 35\" × 8\", making it easy to store in a closet, under a bed, or in your car. It weighs about 25 lbs, so it's easy to move around."
  }
];

const FAQSection = () => {
  return (
    <section id="faq" className="section-light py-20 md:py-28">
      <div className="container-section">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-muted-foreground text-lg">
            Everything you need to know before you buy
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-card border border-border rounded-xl px-6 overflow-hidden"
              >
                <AccordionTrigger className="text-left font-semibold text-foreground hover:no-underline py-5">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-5">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
