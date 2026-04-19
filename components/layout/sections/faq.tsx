import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface FAQProps {
  question: string;
  answer: string;
  value: string;
}

const FAQList: FAQProps[] = [
  {
    question: "What kind of projects does Primenet Systems handle?",
    answer:
      "We work on business websites, mobile apps, custom software, interface design, and product improvement projects for organizations that need dependable digital solutions.",
    value: "item-1",
  },
  {
    question: "Can you build software based on our business needs?",
    answer:
      "Yes. We can plan and develop custom solutions around your workflow, user needs, and project goals instead of forcing you into a one-size-fits-all product.",
    value: "item-2",
  },
  {
    question: "Do you offer support after launch?",
    answer:
      "Yes. We can help with updates, bug fixes, design improvements, feature expansion, and general technical support after your product goes live.",
    value: "item-3",
  },
  {
    question: "How do we get started?",
    answer:
      "Use the contact form, share a short summary of your project, and we will continue the conversation with you by phone or WhatsApp.",
    value: "item-4",
  },
  {
    question: "What phone number can we use to reach you?",
    answer:
      "You can contact Primenet Systems directly on +233 54 638 3716 for project enquiries and follow-up conversations.",
    value: "item-5",
  },
];

export const FAQSection = () => {
  return (
    <section id="faq" className="container md:w-[700px] py-24 sm:py-32">
      <div className="text-center mb-8">
        <h2 className="text-lg text-primary text-center mb-2 tracking-wider">
          FAQS
        </h2>

        <h2 className="text-3xl md:text-4xl text-center font-bold">
          Common Questions
        </h2>
      </div>

      <Accordion type="single" collapsible className="AccordionRoot">
        {FAQList.map(({ question, answer, value }) => (
          <AccordionItem key={value} value={value}>
            <AccordionTrigger className="text-left">
              {question}
            </AccordionTrigger>

            <AccordionContent>{answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
};
