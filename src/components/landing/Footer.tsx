import { motion } from "framer-motion";
import { ArrowRight, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-16">
      <div className="container mx-auto px-6">
        {/* Final CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16 pb-16 border-b border-background/10"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Ready to Revolutionize Recruitment?
          </h2>
          <p className="text-background/60 mb-8 max-w-2xl mx-auto text-lg">
            Join the future of hiring today. Automated, accurate, and effortless.
          </p>
          <Button
            className="h-14 px-10 rounded-xl text-lg bg-white text-black hover:bg-white/90 group"
            asChild
          >
            <a href="#pricing">
              Start Your Free Trial
              <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
            </a>
          </Button>
        </motion.div>

        {/* Footer Links */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Logo & Copyright */}
          <div className="flex items-center gap-8">
            <div className="flex items-center gap-2">
              <img src="/ameen-logo.svg" alt="AmeenCheck" className="w-8 h-8" />
              <span className="font-semibold">AmeenCheck</span>
            </div>
            <span className="text-background/40 text-sm">
              © 2025 All rights reserved
            </span>
          </div>

          {/* Links */}
          <div className="flex items-center gap-6 text-sm">
            <a href="#" className="text-background/60 hover:text-background transition-colors">
              About
            </a>
            <a href="#" className="text-background/60 hover:text-background transition-colors">
              Privacy
            </a>
            <a href="#" className="text-background/60 hover:text-background transition-colors">
              Terms
            </a>
            <a href="mailto:ksenia@ameen-check.com" className="text-background/60 hover:text-background transition-colors">
              Contact
            </a>
          </div>

          {/* Social */}
          <div className="flex items-center gap-4">
            <a
              href="https://www.linkedin.com/in/alex-pohorelov/"
              className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-background/20 transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="mailto:ksenia@ameen-check.com"
              className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-background/20 transition-colors"
              aria-label="Email"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
