import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const FAQSection = () => {
  const faqs = [
    {
      question: "What's included in the ticket price?",
      answer: "Your ticket includes access to all fashion shows, welcome drink, event program, and networking opportunities. VIP tickets include additional benefits such as premium seating and exclusive access to the VIP lounge."
    },
    {
      question: "What is the dress code?",
      answer: "The dress code is formal/black tie. We encourage elegant evening wear to match the romantic and sophisticated atmosphere of the Valentine's Gala."
    },
    {
      question: "Are there parking facilities available?",
      answer: "Yes, complimentary valet parking is available for all guests. There is also self-parking available in the nearby parking structure."
    },
    {
      question: "Can I get a refund if I can't attend?",
      answer: "Tickets are non-refundable but can be transferred to another person up to 48 hours before the event. Please contact our support team for assistance with transfers."
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-black">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-montserrat text-white text-center mb-12">
          Frequently Asked Questions
        </h2>
        
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="border border-white/10 rounded-lg px-4 bg-white/5"
              >
                <AccordionTrigger className="text-lg font-montserrat text-white py-4">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-300 pb-4">
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