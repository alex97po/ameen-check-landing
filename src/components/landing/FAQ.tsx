import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Is the platform ready to use now?",
    answer: "Not yet. We're building this in partnership with pilot teams. You'll get access to features as they're developed, and your feedback will shape what we build next.",
  },
  {
    question: "What happens after the pilot?",
    answer: "Pilot partners will transition to paid plans with preferred pricing and terms. We're building this as a sustainable product, and early partners get the best rates.",
  },
  {
    question: "Can I use this alongside my current ATS?",
    answer: "Yes. In fact, we're designing it to sit on top of your existing tools. You can start by simply uploading roles and CV batches, and later connect it to your ATS if you wish — no need to rebuild your whole stack.",
  },
  {
    question: "How accurate is the AI screening?",
    answer: "Our AI analyzes CVs against your job requirements, evaluating qualifications, experience, skills, and signals of risk. You can customize criteria and thresholds. During the pilot, we're focusing on two things: high-quality ranking of candidates by fit, and reliably highlighting profiles that look inconsistent or potentially fake.",
  },
  {
    question: "Is candidate data secure?",
    answer: "Absolutely. We follow enterprise-grade security standards and comply fully with GDPR and data protection regulations.",
  },
  {
    question: "What's the time commitment as a pilot partner?",
    answer: "We ask for 2-3 feedback sessions monthly (30-60 minutes each) during development, plus using the platform in your real recruitment workflows.",
  },
  {
    question: "Will this replace human recruiters?",
    answer: "No. Think of this as an AI team member that handles repetitive tasks—screening, posting, organizing—so human recruiters can focus on relationship-building, interviewing, and strategic decisions.",
  },
];

const FAQ = () => {
  return (
    <section id="faq" className="py-24 md:py-32 bg-card">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold text-foreground mb-4"
          >
            Questions You Might Have
          </motion.h2>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="max-w-2xl mx-auto"
        >
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-background border border-border/50 rounded-xl px-6 data-[state=open]:border-sage/30"
              >
                <AccordionTrigger className="text-left hover:no-underline py-5 text-foreground font-medium">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-5 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ;
