import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Mail, Linkedin, Github, MapPin, Send } from 'lucide-react';

const ContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="contact" className="py-32 relative" ref={ref}>
      {/* Background gradient */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-to-t from-primary/10 to-transparent rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center"
        >
          {/* Section Header */}
          <div className="mb-12">
            <p className="text-primary font-medium mb-3 uppercase tracking-widest text-sm">Get in Touch</p>
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
              Let's Build Something <span className="gradient-text">Amazing</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Ready to discuss how I can contribute to your data team? I'm actively seeking opportunities 
              and would love to hear about your challenges.
            </p>
          </div>

          {/* Contact Cards */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <motion.a
              href="mailto:contact@krishnachaitanya.dev"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 }}
              className="glass-card rounded-xl p-6 hover:border-primary/50 transition-all duration-300 group"
            >
              <div className="p-3 rounded-lg bg-primary/10 text-primary w-fit mx-auto mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                <Mail size={24} />
              </div>
              <h3 className="font-semibold mb-1">Email</h3>
              <p className="text-sm text-muted-foreground">contact@krishnachaitanya.dev</p>
            </motion.a>

            <motion.a
              href="https://linkedin.com/in/krishnachaitanya"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 }}
              className="glass-card rounded-xl p-6 hover:border-primary/50 transition-all duration-300 group"
            >
              <div className="p-3 rounded-lg bg-primary/10 text-primary w-fit mx-auto mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                <Linkedin size={24} />
              </div>
              <h3 className="font-semibold mb-1">LinkedIn</h3>
              <p className="text-sm text-muted-foreground">Connect with me</p>
            </motion.a>

            <motion.a
              href="https://github.com/krishnachaitanya"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4 }}
              className="glass-card rounded-xl p-6 hover:border-primary/50 transition-all duration-300 group"
            >
              <div className="p-3 rounded-lg bg-primary/10 text-primary w-fit mx-auto mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                <Github size={24} />
              </div>
              <h3 className="font-semibold mb-1">GitHub</h3>
              <p className="text-sm text-muted-foreground">View my code</p>
            </motion.a>
          </div>

          {/* Location Badge */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card mb-12"
          >
            <MapPin size={16} className="text-primary" />
            <span className="text-sm text-muted-foreground">Based in Buffalo, NY • Open to Remote</span>
          </motion.div>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.6 }}
          >
            <a
              href="mailto:contact@krishnachaitanya.dev"
              className="inline-flex items-center gap-3 px-8 py-4 rounded-xl bg-primary text-primary-foreground font-medium text-lg hover:opacity-90 transition-all duration-300 glow-effect"
            >
              <Send size={20} />
              Send Me a Message
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
