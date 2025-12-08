import { motion } from "framer-motion";
import { Pen, Globe, Inbox, Star, Mic, FileOutput } from "lucide-react";

const features = [
  {
    icon: Pen,
    title: "Writes Job Descriptions",
    description: "Give it the role basics, and it crafts compelling, optimized job posts that attract quality candidates. Every time.",
    color: "bg-sage/20",
    iconColor: "text-sage-dark",
  },
  {
    icon: Globe,
    title: "Posts Everywhere at Once",
    description: "One click, and your job is live on LinkedIn, Indeed, and all major platforms. Your AI handles the busywork.",
    color: "bg-lavender/20",
    iconColor: "text-lavender-dark",
  },
  {
    icon: Inbox,
    title: "Gathers All Applications",
    description: "Every applicant from every platform flows into one place, automatically organized and ready for review.",
    color: "bg-peach/50",
    iconColor: "text-terracotta",
  },
  {
    icon: Star,
    title: "Screens & Ranks CVs",
    description: "Reads every application, analyzes fit against requirements, and presents you with ranked candidates and detailed match scores.",
    color: "bg-sage/20",
    iconColor: "text-sage-dark",
  },
  {
    icon: Mic,
    title: "Pre-Screening Interviews",
    description: "Candidates answer screening questions via WhatsApp audio messages. Your AI evaluates responses and highlights top performers.",
    color: "bg-lavender/20",
    iconColor: "text-lavender-dark",
    badge: "Optional",
  },
  {
    icon: FileOutput,
    title: "Packages Candidate Reports",
    description: "Creates professional, client-ready candidate summaries with one click. Branded, organized, impressive.",
    color: "bg-rose/20",
    iconColor: "text-rose",
  },
];

const SolutionSection = () => {
  return (
    <section id="solution" className="py-24 md:py-32 gradient-hero">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold text-foreground mb-4"
          >
            Your AI Talent Acquisition Specialist
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-muted-foreground text-lg"
          >
            Think of it as hiring an incredibly efficient team member who works 24/7, handles the repetitive tasks, and gets smarter with every interaction.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="group relative p-8 rounded-2xl bg-card border border-border/50 hover:border-sage/30 transition-all duration-300 hover:shadow-soft"
            >
              {feature.badge && (
                <span className="absolute top-4 right-4 text-xs px-2 py-1 rounded-full bg-lavender/30 text-lavender-dark font-medium">
                  {feature.badge}
                </span>
              )}
              <div className={`w-14 h-14 rounded-xl ${feature.color} flex items-center justify-center mb-6 transition-transform duration-300 group-hover:scale-110`}>
                <feature.icon className={`w-7 h-7 ${feature.iconColor}`} />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-3">
                {feature.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;
