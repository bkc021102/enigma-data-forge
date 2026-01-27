import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Layers, Bot, Workflow, Rocket } from 'lucide-react';

const differentiators = [
  {
    icon: Layers,
    title: 'AI + Data Engineering Fusion',
    description: 'Rare combination of ML expertise with production-grade data engineering skills. I don\'t just build models—I build the entire infrastructure to deploy them at scale.',
  },
  {
    icon: Bot,
    title: 'AI-Queryable Systems',
    description: 'Pioneering MCP server integration that enables natural language interaction with complex analytics. Making data accessible to non-technical stakeholders.',
  },
  {
    icon: Workflow,
    title: 'Big Data Architecture',
    description: 'Deep expertise in distributed computing with Spark, Databricks, and cloud platforms. Comfortable processing millions of records with sub-second latency.',
  },
  {
    icon: Rocket,
    title: 'End-to-End Delivery',
    description: 'From raw data ingestion to production deployment, I own the complete data lifecycle. Docker, CI/CD, and cloud deployment are second nature.',
  },
];

const DifferentiatorSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section className="py-32 relative" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-6xl mx-auto"
        >
          {/* Section Header */}
          <div className="text-center mb-16">
            <p className="text-primary font-medium mb-3 uppercase tracking-widest text-sm">Competitive Edge</p>
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
              What Sets Me <span className="gradient-text">Apart</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              The unique combination of skills that makes me the ideal candidate for your data team.
            </p>
          </div>

          {/* Differentiators Grid */}
          <div className="grid md:grid-cols-2 gap-6">
            {differentiators.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                className="gradient-border p-8 group"
              >
                <div className="flex items-start gap-5">
                  <div className="p-4 rounded-xl bg-gradient-to-br from-primary/20 to-primary/5 text-primary group-hover:scale-110 transition-transform duration-300">
                    <item.icon size={28} />
                  </div>
                  <div>
                    <h3 className="font-display text-xl font-bold mb-2">{item.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Career Goals */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-16 text-center glass-card rounded-2xl p-10"
          >
            <h3 className="font-display text-2xl font-bold mb-4">Career Aspirations</h3>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              I'm seeking roles as an <span className="text-foreground font-medium">AI Engineer</span>, 
              <span className="text-foreground font-medium"> Data Scientist</span>, or 
              <span className="text-foreground font-medium"> ML Engineer</span> where I can build intelligent 
              systems that solve real business problems. My passion lies in creating predictive analytics 
              platforms and AI-powered applications that make data accessible and actionable.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default DifferentiatorSection;
