import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

const WaitlistForm = () => {
  return (
    <section id="waitlist" className="py-24 md:py-32 gradient-hero relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute -top-20 -left-20 w-96 h-96 rounded-full bg-sage/10 blur-3xl"
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 10, repeat: Infinity }}
        />
        <motion.div
          className="absolute -bottom-20 -right-20 w-96 h-96 rounded-full bg-lavender/10 blur-3xl"
          animate={{ scale: [1.1, 1, 1.1] }}
          transition={{ duration: 10, repeat: Infinity }}
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-2xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-card border border-border mb-8"
          >
            <Sparkles className="w-4 h-4 text-sage-dark" />
            <span className="text-sm text-muted-foreground">Limited spots available</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl md:text-4xl font-bold text-foreground mb-4"
          >
            Ready for Your AI Teammate?
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg text-muted-foreground mb-8"
          >
            Tell us about your recruitment process. Let's build something perfect together.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-sm text-muted-foreground mb-10"
          >
            We're reviewing applications on a rolling basis. The sooner you apply, the better your chances of joining as a design partner.
          </motion.p>

          {/* Airtable Form Embed */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="bg-card rounded-2xl border border-border overflow-hidden"
          >
            <iframe 
              className="airtable-embed" 
              src="https://airtable.com/embed/appBOK2KjEss14wHq/pags6o3n68KUp0ztY/form" 
              width="100%" 
              height="533" 
              style={{ background: 'transparent', border: 'none' }}
              title="AmeenCheck Pilot Application Form"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WaitlistForm;
