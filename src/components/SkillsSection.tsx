import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { 
  Code2, Database, Brain, BarChart3, Cloud, Wrench 
} from 'lucide-react';

const skillCategories = [
  {
    title: 'Programming',
    icon: Code2,
    skills: ['Python', 'SQL', 'R', 'PySpark'],
    color: 'from-cyan-500 to-blue-500',
  },
  {
    title: 'Data Engineering',
    icon: Database,
    skills: ['Apache Spark', 'Databricks', 'BigQuery', 'Snowflake', 'PostgreSQL', 'dbt', 'ETL Pipelines', 'Delta Lake'],
    color: 'from-emerald-500 to-teal-500',
  },
  {
    title: 'Machine Learning',
    icon: Brain,
    skills: ['Scikit-learn', 'PyTorch', 'MLlib', 'Feature Engineering', 'Model Optimization', 'NLP'],
    color: 'from-violet-500 to-purple-500',
  },
  {
    title: 'Analytics & BI',
    icon: BarChart3,
    skills: ['A/B Testing', 'Statistical Analysis', 'Data Visualization', 'Streamlit', 'Excel', 'EDA'],
    color: 'from-orange-500 to-amber-500',
  },
  {
    title: 'Cloud & DevOps',
    icon: Cloud,
    skills: ['AWS', 'Azure', 'Docker', 'Git', 'CI/CD'],
    color: 'from-pink-500 to-rose-500',
  },
  {
    title: 'Tools & Platforms',
    icon: Wrench,
    skills: ['VS Code', 'Jupyter', 'Teradata', 'GraphFrames', 'MCP Servers'],
    color: 'from-indigo-500 to-blue-500',
  },
];

const SkillsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="skills" className="py-32 relative" ref={ref}>
      {/* Background accent */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-secondary/30 to-transparent pointer-events-none" />
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-6xl mx-auto"
        >
          {/* Section Header */}
          <div className="text-center mb-16">
            <p className="text-primary font-medium mb-3 uppercase tracking-widest text-sm">Technical Expertise</p>
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
              Skills & <span className="gradient-text">Technologies</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              A comprehensive toolkit for building end-to-end data solutions—from infrastructure to intelligence.
            </p>
          </div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillCategories.map((category, index) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="glass-card rounded-xl p-6 group hover:border-primary/30 transition-all duration-300"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className={`p-2.5 rounded-lg bg-gradient-to-br ${category.color} text-white`}>
                    <category.icon size={20} />
                  </div>
                  <h3 className="font-display text-lg font-semibold">{category.title}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1.5 text-sm rounded-full bg-secondary text-secondary-foreground hover:bg-primary/10 hover:text-primary transition-colors duration-200"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;
