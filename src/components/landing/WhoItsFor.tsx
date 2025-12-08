import { motion } from "framer-motion";
import { Building2, Users, Target } from "lucide-react";

const audiences = [
  {
    icon: Building2,
    title: "Recruitment Agencies",
    description: "Managing multiple clients and hundreds of roles? Your AI specialist handles the volume while you focus on relationships and placements.",
    color: "bg-sage/20",
    iconColor: "text-sage-dark",
  },
  {
    icon: Users,
    title: "In-House HR Teams",
    description: "Building your company's team? Let AI handle sourcing and screening while you spend time with the candidates who matter.",
    color: "bg-lavender/20",
    iconColor: "text-lavender-dark",
  },
  {
    icon: Target,
    title: "Talent Acquisition Leaders",
    description: "Leading a recruitment team? Give them an AI teammate that multiplies their capacity and improves quality across the board.",
    color: "bg-rose/20",
    iconColor: "text-rose",
  },
];

const WhoItsFor = () => {
  return (
    <section className="py-24 md:py-32 gradient-hero">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold text-foreground mb-4"
          >
            For Teams Who Want to Work Smarter, Not Harder
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {audiences.map((audience, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="text-center p-8 rounded-2xl bg-card border border-border/50 hover:border-sage/30 transition-all duration-300 hover:shadow-soft"
            >
              <div className={`w-16 h-16 rounded-xl ${audience.color} flex items-center justify-center mx-auto mb-6`}>
                <audience.icon className={`w-8 h-8 ${audience.iconColor}`} />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-4">
                {audience.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {audience.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhoItsFor;
