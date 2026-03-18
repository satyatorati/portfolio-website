import { useState } from 'react'
import { motion } from 'framer-motion'
import { FiGithub, FiExternalLink } from 'react-icons/fi'

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all')

  const projects = [
    {
      title: "Real-Time Chat App with AI Translation",
      description: "A production-grade chat platform built with the MERN stack and Socket.io, supporting 1,000+ concurrent WebSocket connections. Features end-to-end JWT authentication, real-time message delivery under 50ms latency, and GenAI-powered auto-translation via Google Translate API — enabling cross-language conversations between users.",
      metrics: "1,000+ concurrent connections · <50ms latency · 5 languages",
      image: "/assets/chatapp.png",
      tags: ["React", "Node.js", "Express.js", "MongoDB", "Socket.io", "JWT", "Google Translate API"],
      github: "https://github.com/satyatorati/chat-app",
      demo: "https://chat-app-6nvc.onrender.com/",
      category: "web"
    },
    {
      title: "AI-Powered E-Commerce Bookstore",
      description: "Full-stack MERN e-commerce platform with a comprehensive admin dashboard for inventory, order, and user management. Integrated an OpenAI GPT-4 powered customer support chatbot that handles 80% of common inquiries without human intervention. Implemented Redux for state management and a secure payment flow.",
      metrics: "80% chatbot deflection rate · 200+ products · Sub-200ms API",
      image: "/assets/bookstore.png",
      tags: ["React", "Redux", "Node.js", "Express.js", "MongoDB", "OpenAI", "MERN"],
      github: "https://github.com/satyatorati/book-store-frontend",
      demo: "https://book-store-flax.vercel.app/",
      category: "web"
    },
    {
      title: "Real-Time Parking Lot Occupancy Tracker",
      description: "Computer vision system that detects parking spot occupancy in real-time using OpenCV and classical CV techniques on the PKLot dataset (12,000+ images). Achieved 94% detection accuracy using contour-based analysis and adaptive preprocessing. Built a visualization dashboard to display live occupancy status per spot.",
      metrics: "94% accuracy · 12,000+ images · <200ms per frame",
      image: "/assets/churn.png",
      tags: ["Python", "OpenCV", "Computer Vision", "Image Processing", "CVIP"],
      github: "https://github.com/satyatorati/Parkinglot-Occupancy-Tracker",
      demo: null,
      category: "ml"
    },
    {
      title: "Distributed Task Queue & Job Scheduler",
      description: "Built a distributed job scheduling system using Spring Boot and Apache Kafka to process high-volume async tasks at scale. Supports priority queuing, retry-with-backoff, dead letter queues, and real-time job status tracking via a React dashboard. Deployed on AWS ECS with auto-scaling consumer groups.",
      metrics: "10,000+ jobs/hour · 99.9% completion rate · <100ms queue latency",
      image: null,
      tags: ["Java", "Spring Boot", "Apache Kafka", "PostgreSQL", "React", "Docker", "AWS ECS", "Redis"],
      github: "https://github.com/satyatorati/task-queue-system",
      demo: null,
      category: "backend",
      categoryLabel: "Backend / System Design",
      inProgress: true
    },
    {
      title: "DocuMind — RAG-Based Document Q&A API",
      description: "An intelligent document Q&A system built with LangChain and AWS Bedrock. Users upload PDFs which are chunked, embedded, and stored in Pinecone vector database. A Spring Boot REST API serves natural language queries with cited, context-aware answers. Includes conversation memory and multi-document search.",
      metrics: "100-page docs in <10s · 90%+ answer relevance · REST API",
      image: null,
      tags: ["Java", "Spring Boot", "LangChain", "AWS Bedrock", "Pinecone", "React", "Docker"],
      github: "#",
      demo: null,
      category: "ai",
      categoryLabel: "AI / LLM",
      inProgress: true
    }
  ]

  const filteredProjects = activeFilter === 'all'
    ? projects
    : projects.filter(project => project.category === activeFilter)

  const filters = [
    { name: 'All Projects', value: 'all' },
    { name: 'Web Development', value: 'web' },
    { name: 'AI / LLM', value: 'ai' },
    { name: 'Backend / System Design', value: 'backend' },
    { name: 'Computer Vision', value: 'ml' }
  ]

  return (
    <section id="projects" className="section-container">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.05 }}
          transition={{ duration: 0.5 }}
          className="text-5xl font-bold text-center mb-12 bg-gradient-to-r from-light-text via-light-accent to-highlight dark:from-dark-text dark:via-dark-accent dark:to-highlight bg-clip-text text-transparent"
        >
          Featured Projects
        </motion.h2>

        <motion.div
          className="flex justify-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.05 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <div className="flex flex-wrap justify-center gap-3">
            {filters.map(filter => (
              <button
                key={filter.value}
                onClick={() => setActiveFilter(filter.value)}
                className={`px-5 py-2 rounded-full transition-all duration-300 font-medium text-sm ${
                  activeFilter === filter.value
                    ? 'bg-gradient-to-r from-secondary to-highlight text-white shadow-lg shadow-highlight/25'
                    : 'text-textSecondary hover:text-highlight border border-textSecondary/20 hover:border-highlight/50'
                }`}
              >
                {filter.name}
              </button>
            ))}
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.05 }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="relative bg-light-card/80 dark:bg-dark-card/80 backdrop-blur-sm rounded-xl overflow-hidden border border-light-border dark:border-dark-border hover:shadow-glow transition-all duration-300 flex flex-col"
            >
              {/* In Progress badge */}
              {project.inProgress && (
                <div className="absolute top-3 right-3 z-20">
                  <span className="px-2.5 py-1 text-xs font-semibold rounded-full bg-amber-100 dark:bg-amber-900/40 text-amber-700 dark:text-amber-400 border border-amber-300 dark:border-amber-700">
                    🔨 In Progress
                  </span>
                </div>
              )}

              {/* Category label badge */}
              {project.categoryLabel && (
                <div className="absolute top-3 left-3 z-20">
                  <span className="px-2.5 py-1 text-xs font-semibold rounded-full bg-light-accent/10 dark:bg-dark-accent/10 text-light-accent dark:text-dark-accent border border-light-accent/20 dark:border-dark-accent/20">
                    {project.categoryLabel}
                  </span>
                </div>
              )}

              {/* Image or placeholder */}
              {project.image ? (
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <h3 className="text-xl font-bold text-white leading-tight">{project.title}</h3>
                  </div>
                </div>
              ) : (
                <div className="relative h-24 overflow-hidden bg-gradient-to-br from-light-accent/10 to-highlight/10 dark:from-dark-accent/10 dark:to-highlight/10 flex items-end">
                  <div className="p-4 w-full">
                    <h3 className="text-xl font-bold text-light-text dark:text-dark-text leading-tight">{project.title}</h3>
                  </div>
                </div>
              )}

              <div className="p-6 flex flex-col flex-1">
                <p className="text-light-textSecondary dark:text-dark-textSecondary text-sm mb-3 flex-1">
                  {project.description}
                </p>

                {/* Metrics */}
                {project.metrics && (
                  <p className="text-xs font-mono text-light-accent dark:text-dark-accent mb-3 bg-light-accent/5 dark:bg-dark-accent/5 rounded px-2 py-1.5">
                    {project.metrics}
                  </p>
                )}

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map(tag => (
                    <span key={tag} className="px-2.5 py-1 bg-light-accent/10 dark:bg-dark-accent/10 text-light-accent dark:text-dark-accent rounded-full text-xs font-medium">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-4 mt-auto">
                  {project.github && (
                    <a
                      href={project.github}
                      target={project.github === '#' ? '_self' : '_blank'}
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 text-sm text-light-textSecondary dark:text-dark-textSecondary hover:text-light-accent dark:hover:text-dark-accent transition-colors duration-200"
                    >
                      <FiGithub size={16} />
                      <span>GitHub</span>
                    </a>
                  )}
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 text-sm text-light-textSecondary dark:text-dark-textSecondary hover:text-light-accent dark:hover:text-dark-accent transition-colors duration-200"
                    >
                      <FiExternalLink size={16} />
                      <span>Live Demo</span>
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
