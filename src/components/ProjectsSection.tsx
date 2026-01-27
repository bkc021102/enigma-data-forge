import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { 
  Plane, Activity, Shield, ExternalLink, Github, 
  Zap, Database, Server, BarChart3 
} from 'lucide-react';

const projects = [
  {
    id: 'flight',
    title: 'Flight Delay Prediction System',
    subtitle: 'Distributed Analytics & ML Platform',
    icon: Plane,
    color: 'from-cyan-500 to-blue-600',
    problem: 'Airlines lose $25B+ annually due to flight delays. Existing systems lack real-time weather integration and scalable prediction capabilities.',
    solution: 'Built a production-grade distributed analytics system that processes aviation, weather, and turbulence data at scale to predict delays with high accuracy.',
    architecture: [
      'Distributed data ingestion via Apache Spark',
      'Real-time feature engineering pipeline',
      'ML model serving with Spark Pipelines',
      'GraphFrames for airport network analysis',
      'MCP Server for AI-powered natural language queries',
    ],
    tech: ['Apache Spark', 'PySpark', 'MLlib', 'GraphFrames', 'MCP Server', 'Python'],
    achievements: [
      'Processed millions of flight records with sub-second latency',
      'Trained LR, RF, and GBT models achieving 87% prediction accuracy',
      'Built graph analytics revealing critical hub vulnerabilities',
      'Enabled natural language querying of analytics through MCP integration',
    ],
    impact: 'Production-ready system capable of real-time delay risk assessment for airport operations.',
    featured: true,
  },
  {
    id: 'healthcare',
    title: 'Healthcare Admissions Data System',
    subtitle: 'Full-Stack Data Platform',
    icon: Activity,
    color: 'from-emerald-500 to-teal-600',
    problem: 'Healthcare providers struggle with fragmented patient data, making it difficult to identify admission patterns and optimize resource allocation.',
    solution: 'Designed and implemented a complete data warehouse solution with OLTP and OLAP schemas, automated ETL, and interactive dashboards.',
    architecture: [
      '3NF OLTP schema for transactional integrity',
      'Star-schema OLAP for analytical queries',
      'dbt for transformation layer',
      'Streamlit for executive dashboards',
      'Docker for containerized deployment',
    ],
    tech: ['PostgreSQL', 'dbt', 'Python', 'Docker', 'Streamlit', 'SQL'],
    achievements: [
      'Reduced query times by 60% with optimized star schema',
      'Implemented advanced SQL patterns (CTEs, window functions)',
      'Built real-time KPI dashboards for hospital administrators',
      'Achieved 100% test coverage on dbt transformations',
    ],
    impact: 'Enables healthcare providers to identify admission trends and optimize bed allocation.',
    featured: true,
  },
  {
    id: 'cybersecurity',
    title: 'Cybersecurity Data Lakehouse',
    subtitle: 'Enterprise Security Analytics',
    icon: Shield,
    color: 'from-violet-500 to-purple-600',
    problem: 'Security teams are overwhelmed by massive volumes of unstructured vendor risk data, leading to missed vulnerabilities.',
    solution: 'Built a scalable data lakehouse with medallion architecture to process, normalize, and analyze cybersecurity vendor assessments.',
    architecture: [
      'Bronze layer: Raw JSON ingestion',
      'Silver layer: Cleaned and normalized data',
      'Delta Lake for ACID transactions',
      'PySpark for distributed processing',
      'Automated risk scoring pipeline',
    ],
    tech: ['Databricks', 'PySpark', 'Delta Lake', 'Python', 'SQL'],
    achievements: [
      'Processed 40,000+ nested JSON records efficiently',
      'Normalized complex vendor hierarchies into queryable format',
      'Built automated vendor risk scoring algorithms',
      'Reduced security assessment time by 70%',
    ],
    impact: 'Empowers security teams to proactively identify high-risk vendors before incidents occur.',
    featured: false,
  },
];

const ProjectsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [activeProject, setActiveProject] = useState<string | null>(null);

  return (
    <section id="projects" className="py-32 relative" ref={ref}>
      {/* Background accent */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-secondary/20 to-transparent pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-6xl mx-auto"
        >
          {/* Section Header */}
          <div className="text-center mb-16">
            <p className="text-primary font-medium mb-3 uppercase tracking-widest text-sm">Featured Work</p>
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
              Production-Grade <span className="gradient-text">Projects</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              End-to-end data systems built with enterprise-grade architecture and real-world impact.
            </p>
          </div>

          {/* Projects Grid */}
          <div className="space-y-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 + index * 0.15 }}
                className="glass-card rounded-2xl overflow-hidden hover:border-primary/30 transition-all duration-500"
                onMouseEnter={() => setActiveProject(project.id)}
                onMouseLeave={() => setActiveProject(null)}
              >
                <div className="p-8">
                  {/* Project Header */}
                  <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-6">
                    <div className="flex items-start gap-4">
                      <div className={`p-3 rounded-xl bg-gradient-to-br ${project.color} text-white`}>
                        <project.icon size={28} />
                      </div>
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <h3 className="font-display text-2xl font-bold">{project.title}</h3>
                          {project.featured && (
                            <span className="px-2 py-0.5 text-xs rounded-full bg-primary/20 text-primary font-medium">
                              Featured
                            </span>
                          )}
                        </div>
                        <p className="text-muted-foreground">{project.subtitle}</p>
                      </div>
                    </div>
                    <div className="flex gap-3">
                      <a href="#" className="p-2 rounded-lg bg-secondary hover:bg-secondary/80 transition-colors">
                        <Github size={18} />
                      </a>
                      <a href="#" className="p-2 rounded-lg bg-secondary hover:bg-secondary/80 transition-colors">
                        <ExternalLink size={18} />
                      </a>
                    </div>
                  </div>

                  {/* Problem & Solution */}
                  <div className="grid md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <h4 className="font-semibold text-sm text-primary mb-2 flex items-center gap-2">
                        <Zap size={14} />
                        The Problem
                      </h4>
                      <p className="text-sm text-muted-foreground">{project.problem}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-sm text-primary mb-2 flex items-center gap-2">
                        <Server size={14} />
                        The Solution
                      </h4>
                      <p className="text-sm text-muted-foreground">{project.solution}</p>
                    </div>
                  </div>

                  {/* Architecture */}
                  <div className="mb-6">
                    <h4 className="font-semibold text-sm text-primary mb-3 flex items-center gap-2">
                      <Database size={14} />
                      Architecture Highlights
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {project.architecture.map((item) => (
                        <span
                          key={item}
                          className="px-3 py-1.5 text-xs rounded-lg bg-secondary/50 text-secondary-foreground border border-border"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Achievements */}
                  <div className="mb-6">
                    <h4 className="font-semibold text-sm text-primary mb-3 flex items-center gap-2">
                      <BarChart3 size={14} />
                      Key Achievements
                    </h4>
                    <ul className="grid md:grid-cols-2 gap-2">
                      {project.achievements.map((achievement, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <span className="text-primary mt-1">→</span>
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Tech Stack & Impact */}
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pt-4 border-t border-border">
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 text-sm rounded-full bg-primary/10 text-primary font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    <p className="text-sm text-muted-foreground italic">
                      💡 {project.impact}
                    </p>
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

export default ProjectsSection;
