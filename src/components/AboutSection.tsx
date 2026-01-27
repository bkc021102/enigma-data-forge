import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Sparkles, Target, Rocket } from 'lucide-react';

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const highlights = [
    {
      icon: Sparkles,
      title: 'AI + Data Engineering',
      description: 'Bridging the gap between raw data and intelligent systems',
    },
    {
      icon: Target,
      title: 'Production-Grade ML',
      description: 'Building scalable pipelines that handle millions of records',
    },
    {
      icon: Rocket,
      title: 'End-to-End Solutions',
      description: 'From data ingestion to deployment-ready applications',
    },
  ];

  return (
    <section id="about" className="py-32 relative" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-6xl mx-auto"
        >
          {/* Section Header */}
          <div className="mb-16">
            <p className="text-primary font-medium mb-3 uppercase tracking-widest text-sm">About Me</p>
            <h2 className="font-display text-4xl md:text-5xl font-bold">
              From Mathematics to{' '}
              <span className="gradient-text">Machine Intelligence</span>
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-16">
            {/* Story */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-6"
            >
              <p className="text-lg text-muted-foreground leading-relaxed">
                My journey began at the intersection of computation and mathematics, where I discovered 
                the power of using data to solve complex real-world problems. This foundation led me to 
                pursue a Master's in Data Science at the University at Buffalo, where I've been building 
                the skills to create intelligent systems at scale.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                What drives me is the challenge of transforming massive, messy datasets into actionable 
                insights and production-ready AI systems. From designing distributed data pipelines with 
                Apache Spark to deploying ML models that serve real-time predictions, I thrive on building 
                the complete data stack.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                At <span className="text-foreground font-medium">Infobos Technologies</span>, I contributed to 
                Google's Project Nimbus initiative, building AI-driven enterprise response systems. This 
                experience cemented my passion for creating data solutions that have real business impact.
              </p>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-6 pt-6">
                <div>
                  <p className="font-display text-3xl font-bold gradient-text">3.5</p>
                  <p className="text-sm text-muted-foreground">GPA at UB</p>
                </div>
                <div>
                  <p className="font-display text-3xl font-bold gradient-text">40K+</p>
                  <p className="text-sm text-muted-foreground">Records Processed</p>
                </div>
                <div>
                  <p className="font-display text-3xl font-bold gradient-text">5+</p>
                  <p className="text-sm text-muted-foreground">ML Projects</p>
                </div>
              </div>
            </motion.div>

            {/* Highlights Cards */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="space-y-4"
            >
              {highlights.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                  className="glass-card rounded-xl p-6 group hover:border-primary/50 transition-all duration-300"
                >
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                      <item.icon size={24} />
                    </div>
                    <div>
                      <h3 className="font-display text-lg font-semibold mb-1">{item.title}</h3>
                      <p className="text-muted-foreground">{item.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
