import { useState } from 'react'
import { motion } from 'framer-motion'
import { FiGithub, FiExternalLink } from 'react-icons/fi'

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all')
  
  const projects = [
    {
      title: "Real-Time Chat Application",
      description: "A real-time messaging app supporting 500+ daily active users, enabling instant messaging, typing indicators, and online status tracking. Features JWT-based authentication with refresh token rotation and role-based access control.",
      image: "/assets/chatapp.png",
      tags: ["React", "Node.js", "Socket.io", "MongoDB", "Zustand"],
      github: "https://github.com/satyatorati/chat-app",
      demo: "https://chat-app-6nvc.onrender.com/",
      category: "web"
    },
    {
      title: "E-Commerce Bookstore",
      description: "A bookstore platform with 1,000+ products and 200+ monthly transactions, featuring cart management and COD checkout. Includes an admin dashboard enabling CRUD operations, cutting admin task time by 40%.",
      image: "/assets/bookstore.png",
      tags: ["React", "Redux Toolkit", "Node.js", "Express", "MongoDB"],
      github: "https://github.com/satyatorati/book-store-frontend",
      demo: "https://book-store-flax.vercel.app/",
      category: "web"
    },
    {
      title: "Telecom Churn Prediction System",
      description: "A predictive model achieving 87% accuracy to identify high-risk churn customers using SVM and Random Forest algorithms. Includes a Flask REST API capable of handling 50+ requests/sec with asynchronous workers.",
      image: "/assets/churn.png",
      tags: ["Python", "Flask", "Machine Learning", "Docker", "MongoDB"],
      github: "https://github.com/satyatorati/Telecom-churn-prediction",
      demo: "https://github.com/satyatorati/Telecom-churn-prediction",
      category: "ml"
    }
  ]
  
  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter)
  
  const filters = [
    { name: 'All', value: 'all' },
    { name: 'Web', value: 'web' },
    { name: 'ML', value: 'ml' }
  ]

  return (
    <section id="projects" className="py-20">
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="section-heading"
      >
        My Projects
      </motion.h2>
      
      <div className="flex justify-center mb-8">
        <div className="flex space-x-4">
          {filters.map(filter => (
            <button
              key={filter.value}
              onClick={() => setActiveFilter(filter.value)}
              className={`px-4 py-2 rounded-md transition-all duration-300 ${
                activeFilter === filter.value 
                  ? 'bg-secondary text-primary font-medium' 
                  : 'text-textSecondary hover:text-secondary'
              }`}
            >
              {filter.name}
            </button>
          ))}
        </div>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {filteredProjects.map((project, index) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-primary/30 rounded-lg overflow-hidden border border-textSecondary/20 hover:border-secondary/50 transition-all duration-300 w-full"
          >
            <div className="relative aspect-video overflow-hidden">
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
              />
              <div className="absolute inset-0 bg-primary/70 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                <div className="flex space-x-4">
                  <a 
                    href={project.github} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-primary p-3 rounded-full text-secondary hover:bg-secondary hover:text-primary transition-colors duration-300"
                  >
                    <FiGithub size={20} />
                  </a>
                  <a 
                    href={project.demo} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-primary p-3 rounded-full text-secondary hover:bg-secondary hover:text-primary transition-colors duration-300"
                  >
                    <FiExternalLink size={20} />
                  </a>
                </div>
              </div>
            </div>
            
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="text-textSecondary mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map(tag => (
                  <span 
                    key={tag} 
                    className="text-xs font-mono px-3 py-1 rounded-full bg-secondary/10 text-secondary"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

export default Projects