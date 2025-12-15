import { motion, AnimatePresence } from "framer-motion";
import { Star, Shield, FileOutput, Plug } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

const features = [
  {
    id: "screening",
    icon: Star,
    title: "Screens & Ranks CVs",
    description: "Reads every application, analyzes fit against your requirements, and presents you with a ranked shortlist and clear match scores — instead of an endless pile of CVs.",
    details: [
      "AI-powered CV analysis against job requirements",
      "Smart ranking algorithm with match scores",
      "Clean, prioritized shortlist ready for review",
    ],
    color: "bg-sage/20",
    iconColor: "text-sage-dark",
    visualPlaceholder: "screening.gif",
  },
  {
    id: "risk-detection",
    icon: Shield,
    title: "Flags Risky & Inconsistent Profiles",
    description: "Detects overlaps in dates and locations, suspicious job histories, AI-generated or copy-paste CVs, and potentially fake documents. Highlights risks before they ever reach your client.",
    details: [
      "Date and location inconsistency detection",
      "AI-generated CV identification",
      "Suspicious job history patterns",
      "Early risk warning system",
    ],
    color: "bg-rose/20",
    iconColor: "text-rose",
    visualPlaceholder: "risk-detection.gif",
  },
  {
    id: "reports",
    icon: FileOutput,
    title: "Packages Client-Ready Reports",
    description: "Turns your ranked shortlist into clean, client-ready reports — with key facts, match scores, and any risk flags clearly explained.",
    details: [
      "One-click professional report generation",
      "Match scores and key highlights",
      "Risk flags clearly documented",
      "Client-ready formatting",
    ],
    color: "bg-lavender/20",
    iconColor: "text-lavender-dark",
    visualPlaceholder: "reports.gif",
  },
  {
    id: "integration",
    icon: Plug,
    title: "Plugs into Your Existing Workflow",
    description: "Use it right alongside your ATS, spreadsheets, or inbox. Drop in a role and a batch of CVs, and let the AI do the heavy lifting while you keep the tools and process you already know.",
    details: [
      "Works with your current ATS",
      "No system migration required",
      "Simple CV batch upload",
      "White-label ready",
    ],
    color: "bg-peach/50",
    iconColor: "text-terracotta",
    visualPlaceholder: "integration.gif",
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
            Your AI Screening & Trust Engine
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-muted-foreground text-lg"
          >
            Think of it as hiring an extra teammate whose only job is to read every CV, rank candidates by fit, and flag risky or potentially fake profiles — 24/7, without getting tired or missing details.
          </motion.p>
        </div>

        <div className="max-w-7xl mx-auto">
          {/* Simple Carousel */}
          <div className="relative">
            {/* Feature Navigation Cards - Above the main content */}
            <div className="flex justify-center gap-2 overflow-x-auto pb-4 mb-6 scrollbar-hide">
              {features.map((feature, index) => (
                <button
                  key={feature.id}
                  onClick={() => setActiveFeature(index)}
                  className={cn(
                    "flex items-center gap-3 px-4 py-3 rounded-lg text-left transition-all duration-300 whitespace-nowrap relative group flex-shrink-0",
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

            {/* Feature Content - Carousel */}
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
                    <div className="flex items-center gap-4 mb-4">
                      <div className={cn("w-16 h-16 rounded-xl flex items-center justify-center flex-shrink-0", currentFeature.color)}>
                        <currentFeature.icon className={cn("w-8 h-8", currentFeature.iconColor)} />
                      </div>
                      <h3 className="text-2xl md:text-3xl font-bold text-foreground">
                        {currentFeature.title}
                      </h3>
                    </div>
                    <p className="text-muted-foreground text-base md:text-lg leading-relaxed mb-6">
                      {currentFeature.description}
                    </p>
                    
                    {/* Feature Details - COMMENTED OUT */}
                    {/*
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
                    */}
                  </div>

                  {/* Visual Placeholder */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.2, duration: 0.4 }}
                    className="relative rounded-xl overflow-hidden bg-gradient-to-br from-sage/10 via-lavender/10 to-peach/10 aspect-video flex items-center justify-center border border-border/30"
                  >
                    {/* Feature images - SVG */}
                    {currentFeature.id === "screening" && (
                      <img 
                        src="/screening.svg" 
                        alt="CV Screening and Ranking Interface"
                        className="w-full h-full object-contain"
                      />
                    )}
                    {currentFeature.id === "risk-detection" && (
                      <img 
                        src="/risk-detection.svg" 
                        alt="Risk Detection and Profile Analysis"
                        className="w-full h-full object-contain"
                      />
                    )}
                    {currentFeature.id === "reports" && (
                      <img 
                        src="/reports.svg" 
                        alt="Client-Ready Reports Generation"
                        className="w-full h-full object-contain"
                      />
                    )}
                    {currentFeature.id === "integration" && (
                      <img 
                        src="/integration.svg" 
                        alt="Workflow Integration"
                        className="w-full h-full object-contain"
                      />
                    )}
                  </motion.div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;
