import { motion } from "framer-motion";
import { ArrowRight, Bot, Database, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden pt-20">
      {/* Dynamic Background */}
      <div className="absolute inset-0 bg-background">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[50vh] bg-primary/10 blur-[120px] rounded-full pointer-events-none" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary/50 border border-white/10 mb-8 backdrop-blur-sm"
          >
            <span className="flex h-2 w-2 rounded-full bg-green-500 animate-pulse" />
            <span className="text-xs font-medium text-white/80 tracking-wide uppercase">AI-Powered Recruitment 2.0</span>
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl md:text-7xl font-bold tracking-tight text-white mb-6"
          >
            Hire Smarter with <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-purple-400 to-cyan-400 animate-pulse">
              Autonomous AI
            </span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10"
          >
            Automate CV parsing, conduct WhatsApp audio interviews, and enhance candidate profiles instantly. The recruitment engine for modern teams.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 relative z-20"
          >
            <Button size="xl" className="h-12 px-8 text-base bg-white text-black hover:bg-white/90 hover:scale-105 transition-all duration-300" asChild>
              <a href="#pricing" className="group flex items-center gap-2">
                Start Free Trial
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>
            </Button>
            <Button size="xl" className="h-12 px-8 text-base bg-secondary hover:bg-secondary/80 text-secondary-foreground border border-white/5" asChild>
              <a href="#demo">Watch Demo</a>
            </Button>
          </motion.div>

          {/* Fancy Animated Visuals */}
          <div className="relative mt-24 h-64 w-full max-w-4xl mx-auto perspective-1000">
            {/* Central Dashboard Mockup - Floating */}
            <motion.div
              initial={{ opacity: 0, rotateX: 20, y: 100 }}
              animate={{ opacity: 1, rotateX: 0, y: 0 }}
              transition={{ duration: 1, delay: 0.6, type: "spring" }}
              className="relative z-10 bg-card/ border border-white/10 rounded-xl shadow-2xl overflow-hidden backdrop-blur-xl bg-black/40"
            >
              <div className="flex items-center gap-2 px-4 py-3 border-b border-white/5 bg-white/5">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-500/50" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                  <div className="w-3 h-3 rounded-full bg-green-500/50" />
                </div>
                <div className="h-4 w-64 bg-white/5 rounded-full mx-auto" />
              </div>
              <div className="p-6 grid grid-cols-3 gap-4">
                {/* Mock Data Bars */}
                {[1, 2, 3].map((i) => (
                  <div key={i} className="space-y-3">
                    <div className="h-20 bg-white/5 rounded-lg border border-white/5 animate-pulse" style={{ animationDelay: `${i * 0.2}s` }} />
                    <div className="h-4 w-3/4 bg-white/10 rounded" />
                    <div className="h-3 w-1/2 bg-white/5 rounded" />
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Floating Elements */}
            <motion.div
              className="absolute -right-12 -top-12 z-20 bg-primary/20 backdrop-blur-md border border-primary/30 p-4 rounded-2xl shadow-lg"
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            >
              <Bot className="w-8 h-8 text-primary mb-2" />
              <div className="text-xs font-mono text-primary-foreground/80">Parsing CV...</div>
            </motion.div>

            <motion.div
              className="absolute -left-12 bottom-12 z-20 bg-green-500/10 backdrop-blur-md border border-green-500/30 p-4 rounded-2xl shadow-lg"
              animate={{ y: [0, 20, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            >
              <Database className="w-8 h-8 text-green-400 mb-2" />
              <div className="text-xs font-mono text-green-200/80">data_match: 98%</div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
