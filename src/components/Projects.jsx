import { useState } from 'react'
import { motion } from 'framer-motion'
import { FiGithub, FiExternalLink } from 'react-icons/fi'

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all')
  
  const projects = [
    {
      title: "Real-Time Chat App",
      description: "A real-time messaging platform serving over 500 active daily users, providing instant messaging, online status tracking, and multilingual support through Google Translate API integration.",
      image: "/assets/chatapp.png",
      tags: ["React", "Node.js", "Express.js", "MongoDB", "Socket.io", "Tailwind CSS", "JWT", "Google Translate API"],
      github: "https://github.com/satyatorati/chat-app",
      demo: "https://chat-app-6nvc.onrender.com/",
      category: "web"
    },
    {
      title: "E-Commerce Bookstore",
      description: "A full-featured eCommerce platform with over 1,000 products and 200+ monthly transactions, featuring an AI-powered chatbot for customer support and smart product recommendations.",
      image: "/assets/bookstore.png",
      tags: ["React", "Redux Toolkit", "RTK Query", "Node.js", "Express.js", "MongoDB", "Mongoose", "JWT", "OpenAI"],
      github: "https://github.com/satyatorati/book-store-frontend",
      demo: "https://book-store-flax.vercel.app/",
      category: "web"
    },
    {
      title: "Telecom Churn Prediction System",
      description: "A predictive model achieving 87% accuracy to identify high-risk churn customers using SVM and Random Forest algorithms. Includes a Flask REST API capable of handling 50+ requests/sec with asynchronous workers.",
      image: "/assets/churn.png",
      tags: ["Python", "Flask", "Scikit-learn", "TensorFlow", "Docker", "MongoDB"],
      github: "https://github.com/satyatorati/Telecom-churn-prediction",
      demo: "https://github.com/satyatorati/Telecom-churn-prediction",
      category: "ml"
    }
  ]
  
  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter)
  
  const filters = [
    { name: 'All Projects', value: 'all' },
    { name: 'Web Development', value: 'web' },
    { name: 'Machine Learning', value: 'ml' }
  ]

  return (
    <section id="projects" className="section-container">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-5xl font-bold text-center mb-12 bg-gradient-to-r from-light-text via-light-accent to-highlight dark:from-dark-text dark:via-dark-accent dark:to-highlight bg-clip-text text-transparent"
        >
          Featured Projects
        </motion.h2>
        
        <motion.div 
          className="flex justify-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="flex flex-wrap justify-center gap-4">
            {filters.map(filter => (
              <button
                key={filter.value}
                onClick={() => setActiveFilter(filter.value)}
                className={`px-6 py-2.5 rounded-full transition-all duration-300 font-medium ${
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
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-light-card/80 dark:bg-dark-card/80 backdrop-blur-sm rounded-xl overflow-hidden border border-light-border dark:border-dark-border hover:shadow-glow transition-all duration-300"
            >
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <h3 className="text-2xl font-bold text-white">{project.title}</h3>
                </div>
              </div>
              <div className="p-6">
                <p className="text-light-textSecondary dark:text-dark-textSecondary text-sm mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map(tag => (
                    <span key={tag} className="px-3 py-1 bg-light-accent/10 dark:bg-dark-accent/10 text-light-accent dark:text-dark-accent rounded-full text-sm">
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex justify-end space-x-4">
                  <a 
                    href={project.github} 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-light-textSecondary dark:text-dark-textSecondary hover:text-light-accent dark:hover:text-dark-accent"
                  >
                    <FiGithub size={20} />
                  </a>
                  <a 
                    href={project.demo} 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-light-textSecondary dark:text-dark-textSecondary hover:text-light-accent dark:hover:text-dark-accent"
                  >
                    <FiExternalLink size={20} />
                  </a>
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