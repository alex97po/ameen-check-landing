import { motion } from "framer-motion";
import { Clock, Mail, FileSearch, Users, AlertCircle, Timer } from "lucide-react";

const painPoints = [
  {
    icon: Clock,
    text: "Hours spent crafting job descriptions for every role",
  },
  {
    icon: Mail,
    text: "Manually posting the same job across multiple platforms",
  },
  {
    icon: FileSearch,
    text: "Drowning in applications with no time to review them all",
  },
  {
    icon: Users,
    text: "Screening hundreds of CVs when you could be interviewing",
  },
  {
    icon: AlertCircle,
    text: "Great candidates slipping through because of volume",
  },
  {
    icon: Timer,
    text: "Clients waiting days for shortlists that should take hours",
  },
];

const ProblemSection = () => {
  return (
    <section id="problem" className="py-24 md:py-32 bg-card">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold text-foreground mb-4"
          >
            Your Team Is Stretched Too Thin
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-muted-foreground"
          >
            The daily reality of modern recruitment
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {painPoints.map((point, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="flex items-start gap-4 p-6 rounded-xl bg-background border border-border/50 hover:border-sage/50 transition-colors duration-300"
            >
              <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-lavender/30 flex items-center justify-center">
                <point.icon className="w-5 h-5 text-lavender-dark" />
              </div>
              <p className="text-foreground/80 text-sm leading-relaxed">
                {point.text}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="text-center mt-16"
        >
          <p className="text-lg md:text-xl text-foreground font-medium">
            What if you had an extra team member who could handle all of this—
            <span className="text-sage-dark">instantly?</span>
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default ProblemSection;
