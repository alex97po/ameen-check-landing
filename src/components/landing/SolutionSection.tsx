import { motion, AnimatePresence } from "framer-motion";
import { Pen, Globe, Inbox, Star, Mic, FileOutput } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

const features = [
  {
    id: "job-descriptions",
    icon: Pen,
    title: "Writes Job Descriptions",
    description: "Give it the role basics, and it crafts compelling, optimized job posts that attract quality candidates. Every time.",
    details: [
      "AI-powered job description generation",
      "Optimized for search and engagement",
      "Customizable templates and tone",
    ],
    color: "bg-sage/20",
    iconColor: "text-sage-dark",
    visualPlaceholder: "job-description.gif",
  },
  {
    id: "multi-post",
    icon: Globe,
    title: "Posts Everywhere at Once",
    description: "One click, and your job is live on LinkedIn, Indeed, and all major platforms. Your AI handles the busywork.",
    details: [
      "One-click multi-platform posting",
      "LinkedIn, Indeed, and more",
      "Automatic platform optimization",
    ],
    color: "bg-lavender/20",
    iconColor: "text-lavender-dark",
    visualPlaceholder: "multi-post.gif",
  },
  {
    id: "applications",
    icon: Inbox,
    title: "Gathers All Applications",
    description: "Every applicant from every platform flows into one place, automatically organized and ready for review.",
    details: [
      "Centralized application inbox",
      "Automatic organization",
      "Real-time syncing across platforms",
    ],
    color: "bg-peach/50",
    iconColor: "text-terracotta",
    visualPlaceholder: "applications.gif",
  },
  {
    id: "screening",
    icon: Star,
    title: "Screens & Ranks CVs",
    description: "Reads every application, analyzes fit against requirements, and presents you with ranked candidates and detailed match scores.",
    details: [
      "AI-powered CV analysis",
      "Smart ranking algorithm",
      "Detailed match scoring",
    ],
    color: "bg-sage/20",
    iconColor: "text-sage-dark",
    visualPlaceholder: "screening.gif",
  },
  {
    id: "interviews",
    icon: Mic,
    title: "Pre-Screening Interviews",
    description: "Candidates answer screening questions via WhatsApp audio messages. Your AI evaluates responses and highlights top performers.",
    details: [
      "WhatsApp audio screening",
      "AI response evaluation",
      "Automated candidate highlights",
    ],
    color: "bg-lavender/20",
    iconColor: "text-lavender-dark",
    badge: "Optional",
    visualPlaceholder: "interviews.gif",
  },
  {
    id: "reports",
    icon: FileOutput,
    title: "Packages Candidate Reports",
    description: "Creates professional, client-ready candidate summaries with one click. Branded, organized, impressive.",
    details: [
      "One-click report generation",
      "Professional branded templates",
      "Client-ready formatting",
    ],
    color: "bg-rose/20",
    iconColor: "text-rose",
    visualPlaceholder: "reports.gif",
  },
];

const SolutionSection = () => {
  const [activeFeature, setActiveFeature] = useState(0);
  const currentFeature = features[activeFeature];

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
            Everything You Need — and a Few Things You Didn't Know You Could Have
          </motion.p>
        </div>

        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-[300px_1fr] gap-8 lg:gap-12">
            {/* Feature Tabs - Left Side */}
            <div className="flex lg:flex-col gap-2 overflow-x-auto lg:overflow-x-visible pb-4 lg:pb-0">
              {features.map((feature, index) => (
                <button
                  key={feature.id}
                  onClick={() => setActiveFeature(index)}
                  className={cn(
                    "flex items-center gap-3 px-4 py-3 rounded-lg text-left transition-all duration-300 whitespace-nowrap lg:whitespace-normal relative group",
                    activeFeature === index
                      ? "bg-card border-2 border-sage shadow-md"
                      : "bg-card/50 border-2 border-transparent hover:border-sage/30 hover:bg-card"
                  )}
                >
                  <div
                    className={cn(
                      "w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 transition-all duration-300",
                      feature.color,
                      activeFeature === index && "scale-110"
                    )}
                  >
                    <feature.icon className={cn("w-5 h-5", feature.iconColor)} />
                  </div>
                  <span
                    className={cn(
                      "font-medium text-sm transition-colors",
                      activeFeature === index ? "text-foreground" : "text-muted-foreground"
                    )}
                  >
                    {feature.title}
                  </span>
                  {feature.badge && activeFeature === index && (
                    <span className="absolute top-2 right-2 text-[10px] px-1.5 py-0.5 rounded-full bg-lavender/30 text-lavender-dark font-medium">
                      {feature.badge}
                    </span>
                  )}
                  {activeFeature === index && (
                    <motion.div
                      layoutId="activeFeature"
                      className="absolute inset-0 bg-sage/5 rounded-lg -z-10"
                      transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                    />
                  )}
                </button>
              ))}
            </div>

            {/* Feature Content - Right Side */}
            <div className="relative bg-card rounded-2xl border border-border/50 overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeFeature}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                  className="p-8 md:p-12"
                >
                  {/* Feature Header */}
                  <div className="mb-8">
                    <div className="flex items-start justify-between mb-4">
                      <div className={cn("w-16 h-16 rounded-xl flex items-center justify-center", currentFeature.color)}>
                        <currentFeature.icon className={cn("w-8 h-8", currentFeature.iconColor)} />
                      </div>
                      {currentFeature.badge && (
                        <span className="text-xs px-3 py-1.5 rounded-full bg-lavender/30 text-lavender-dark font-medium">
                          {currentFeature.badge}
                        </span>
                      )}
                    </div>
                    <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-3">
                      {currentFeature.title}
                    </h3>
                    <p className="text-muted-foreground text-base md:text-lg leading-relaxed mb-6">
                      {currentFeature.description}
                    </p>
                    
                    {/* Feature Details */}
                    <ul className="space-y-3">
                      {currentFeature.details.map((detail, idx) => (
                        <motion.li
                          key={idx}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: idx * 0.1 + 0.2 }}
                          className="flex items-center gap-3 text-sm text-muted-foreground"
                        >
                          <div className="w-1.5 h-1.5 rounded-full bg-sage" />
                          {detail}
                        </motion.li>
                      ))}
                    </ul>
                  </div>

                  {/* Visual Placeholder */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.2, duration: 0.4 }}
                    className="relative rounded-xl overflow-hidden bg-gradient-to-br from-sage/10 via-lavender/10 to-peach/10 aspect-video flex items-center justify-center border border-border/30"
                  >
                    {/* Placeholder for GIF/Illustration */}
                    <div className="text-center p-8">
                      <div className={cn("w-20 h-20 mx-auto mb-4 rounded-2xl flex items-center justify-center", currentFeature.color)}>
                        <currentFeature.icon className={cn("w-10 h-10", currentFeature.iconColor)} />
                      </div>
                      <p className="text-sm text-muted-foreground font-medium">
                        Feature visualization coming soon
                      </p>
                      <p className="text-xs text-muted-foreground/60 mt-1">
                        {currentFeature.visualPlaceholder}
                      </p>
                    </div>
                    
                    {/* Decorative gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent pointer-events-none" />
                  </motion.div>
                </motion.div>
              </AnimatePresence>

              {/* Progress Indicator */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                {features.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveFeature(index)}
                    className={cn(
                      "h-1.5 rounded-full transition-all duration-300",
                      activeFeature === index ? "w-8 bg-sage" : "w-1.5 bg-border hover:bg-sage/50"
                    )}
                    aria-label={`Go to feature ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;
