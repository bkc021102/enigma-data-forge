import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Building2, Calendar, MapPin, ArrowUpRight } from 'lucide-react';

const experiences = [
  {
    title: 'Data Analytics Intern',
    company: 'Infobos Technologies',
    project: 'Google Project Nimbus Initiative',
    location: 'Remote',
    period: '2024',
    achievements: [
      'Architected AI-driven enterprise response systems processing large-scale user interaction data for Fortune 500 clients',
      'Designed and implemented production data pipelines handling complex preprocessing workflows and feature extraction at scale',
      'Built end-to-end ML workflows using Python, Pandas, and Scikit-learn, reducing response time by 40%',
      'Collaborated with Google Cloud engineers to optimize SQL queries and data warehouse performance',
    ],
    tech: ['Python', 'Pandas', 'Scikit-learn', 'SQL', 'Google Cloud'],
  },
  {
    title: 'Product/Data Analyst',
    company: 'Kofuku Idea Labs',
    location: 'India',
    period: '2022 - 2023',
    achievements: [
      'Led comprehensive EDA and built executive dashboards driving data-informed product decisions',
      'Designed and executed A/B testing frameworks for marketing campaigns, improving conversion rates by 25%',
      'Conducted user behavior analysis across 100K+ sessions to identify growth opportunities',
      'Translated complex data insights into actionable recommendations through cross-functional storytelling',
    ],
    tech: ['Python', 'SQL', 'A/B Testing', 'Data Visualization', 'Analytics'],
  },
];

const ExperienceSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="experience" className="py-32 relative" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          {/* Section Header */}
          <div className="mb-16">
            <p className="text-primary font-medium mb-3 uppercase tracking-widest text-sm">Professional Journey</p>
            <h2 className="font-display text-4xl md:text-5xl font-bold">
              Work <span className="gradient-text">Experience</span>
            </h2>
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-1/2" />

            {experiences.map((exp, index) => (
              <motion.div
                key={exp.title + exp.company}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 + index * 0.2 }}
                className={`relative mb-12 ${index % 2 === 0 ? 'md:pr-12 md:text-right md:mr-auto md:ml-0' : 'md:pl-12 md:ml-auto md:mr-0'} md:w-1/2`}
              >
                {/* Timeline dot */}
                <div className="absolute left-0 md:left-auto md:right-0 top-8 w-3 h-3 rounded-full bg-primary border-4 border-background md:-translate-x-1/2 md:translate-x-0 -translate-x-[5px] md:right-[-6px]" 
                  style={{ 
                    [index % 2 === 0 ? 'right' : 'left']: '-6px',
                    transform: index % 2 === 0 ? 'translateX(50%)' : 'translateX(-50%)'
                  }}
                />

                <div className={`glass-card rounded-xl p-6 ml-6 md:ml-0 hover:border-primary/30 transition-all duration-300 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                  <div className={`flex items-center gap-2 text-sm text-muted-foreground mb-2 ${index % 2 === 0 ? 'md:justify-end' : ''}`}>
                    <Calendar size={14} />
                    <span>{exp.period}</span>
                    <span className="mx-2">•</span>
                    <MapPin size={14} />
                    <span>{exp.location}</span>
                  </div>

                  <h3 className="font-display text-xl font-bold mb-1">{exp.title}</h3>
                  <div className={`flex items-center gap-2 mb-1 ${index % 2 === 0 ? 'md:justify-end' : ''}`}>
                    <Building2 size={16} className="text-primary" />
                    <span className="text-primary font-medium">{exp.company}</span>
                  </div>
                  
                  {exp.project && (
                    <p className="text-sm text-muted-foreground mb-4 italic">{exp.project}</p>
                  )}

                  <ul className={`space-y-2 mb-4 ${index % 2 === 0 ? 'md:text-right' : 'text-left'}`}>
                    {exp.achievements.map((achievement, i) => (
                      <li key={i} className={`text-sm text-muted-foreground flex gap-2 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                        <ArrowUpRight size={14} className="text-primary flex-shrink-0 mt-1" />
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>

                  <div className={`flex flex-wrap gap-2 ${index % 2 === 0 ? 'md:justify-end' : ''}`}>
                    {exp.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 text-xs rounded-md bg-primary/10 text-primary"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ExperienceSection;
