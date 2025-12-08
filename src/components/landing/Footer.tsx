import { motion } from "framer-motion";
import { ArrowRight, Linkedin, Twitter, Mail } from "lucide-react";
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
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Hire smarter. Work lighter. Let AI handle the rest.
          </h2>
          <p className="text-background/60 mb-8">
            Your next team member doesn't need a desk.
          </p>
          <Button 
            variant="outline" 
            size="xl" 
            className="border-background/30 text-background hover:bg-background hover:text-foreground group"
            asChild
          >
            <a href="#waitlist">
              Join the Pilot Program
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </a>
          </Button>
        </motion.div>

        {/* Footer Links */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Logo & Copyright */}
          <div className="flex items-center gap-8">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-sage flex items-center justify-center">
                <span className="text-foreground font-bold text-sm">AI</span>
              </div>
              <span className="font-semibold">RecruitAI</span>
            </div>
            <span className="text-background/40 text-sm">
              © 2024 All rights reserved
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
            <a href="mailto:hello@recruitai.com" className="text-background/60 hover:text-background transition-colors">
              Contact
            </a>
          </div>

          {/* Social */}
          <div className="flex items-center gap-4">
            <a 
              href="#" 
              className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-background/20 transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a 
              href="#" 
              className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-background/20 transition-colors"
              aria-label="Twitter"
            >
              <Twitter className="w-5 h-5" />
            </a>
            <a 
              href="mailto:hello@recruitai.com" 
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
