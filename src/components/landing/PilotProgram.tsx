import { motion } from "framer-motion";
import { Check, Users, Headphones, Rocket, MessageSquare, Award, Percent } from "lucide-react";
import { Button } from "@/components/ui/button";

const benefits = [
  { icon: MessageSquare, text: "Direct influence on features and workflow design" },
  { icon: Headphones, text: "Priority support and direct access to our product team" },
  { icon: Rocket, text: "Early access to all capabilities as they're developed" },
  { icon: Users, text: "Regular co-creation sessions to shape the platform" },
  { icon: Award, text: "Founding partner recognition in our community" },
  { icon: Percent, text: "Exclusive pilot pricing that transitions to preferred rates" },
];

const requirements = [
  "Handle 50+ placements monthly",
  "Ready to embrace AI in their workflow",
  "Want a voice in how this AI employee thinks and works",
  "Can dedicate time to feedback and testing",
];

const timeline = [
  { phase: "Now", text: "Join the waitlist" },
  { phase: "Q1 2026", text: "Pilot partner selection & onboarding" },
  { phase: "Q2 2026", text: "Collaborative development & real-world testing" },
  { phase: "Q3 2026", text: "Launch & transition to full platform" },
];

const PilotProgram = () => {
  return (
    <section id="pilot" className="py-24 md:py-32 bg-card">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold text-foreground mb-4"
          >
            Build It With Us. Shape Your Perfect AI Teammate.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-muted-foreground text-lg"
          >
            We're not just launching software—we're creating an AI employee that works exactly how you need it to work.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* What Partners Get */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-xl font-semibold text-foreground mb-6">
              What Pilot Partners Get
            </h3>
            <div className="space-y-4">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  className="flex items-start gap-3"
                >
                  <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-sage/20 flex items-center justify-center">
                    <benefit.icon className="w-4 h-4 text-sage-dark" />
                  </div>
                  <p className="text-foreground/80 pt-1">{benefit.text}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* What We're Looking For */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-xl font-semibold text-foreground mb-6">
              What We're Looking For
            </h3>
            <p className="text-muted-foreground mb-6">
              We're selecting 10-15 recruitment agencies and HR teams who:
            </p>
            <div className="space-y-3 mb-8">
              {requirements.map((req, index) => (
                <div key={index} className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-sage-dark flex-shrink-0" />
                  <p className="text-foreground/80">{req}</p>
                </div>
              ))}
            </div>

            <div className="p-6 rounded-xl bg-lavender/10 border border-lavender/20">
              <h4 className="font-medium text-foreground mb-4">The Journey</h4>
              <div className="space-y-3">
                {timeline.map((item, index) => (
                  <div key={index} className="flex items-baseline gap-4">
                    <span className="text-sm font-semibold text-sage-dark min-w-[70px]">
                      {item.phase}
                    </span>
                    <span className="text-sm text-muted-foreground">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center mt-16"
        >
          <Button variant="hero" size="xl" asChild>
            <a href="#waitlist">Apply to Be a Design Partner</a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default PilotProgram;
