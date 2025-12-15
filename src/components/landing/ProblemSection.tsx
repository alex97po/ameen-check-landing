import { motion } from "framer-motion";
import { Clock, Mail, FileSearch, Users, AlertCircle, Timer } from "lucide-react";

const painPoints = [
  {
    icon: Mail,
    text: "Drowning in applications with no time to really review them",
  },
  {
    icon: FileSearch,
    text: "Manually screening hundreds of CVs just to build a shortlist",
  },
  {
    icon: AlertCircle,
    text: "Great candidates slipping through – while risky profiles slip in",
  },
  {
    icon: Users,
    text: "Growing number of polished, AI-generated or fake CVs that are hard to spot",
  },
];

const ProblemSection = () => {
  return (
    <section id="problem" className="hidden">
      {/* COMMENTED OUT: "Your Team Is Stretched Too Thin" section - Section is hidden */}
      {/*
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 max-w-4xl mx-auto">
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
            What if you had an extra team member whose only job was to read every CV, spot risks, <br className="hidden md:block"/>and hand you a{" "}
            <span className="text-sage-dark">clean, ranked shortlist — every single time?</span>
          </p>
        </motion.div>
      </div>
      */}
    </section>
  );
};

export default ProblemSection;
