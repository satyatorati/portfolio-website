import { useState } from 'react'
import { motion } from 'framer-motion'
import { FiGithub, FiExternalLink, FiAward } from 'react-icons/fi'

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all')
  
  const projects = [
    {
      title: "Real-Time Chat Application",
      description: "A real-time messaging app supporting 500+ daily active users, enabling instant messaging, typing indicators, and online status tracking. Features JWT-based authentication with refresh token rotation and role-based access control.",
      image: "/assets/chatapp.png",
      tags: ["React", "Node.js", "Socket.io", "MongoDB", "Zustand", "JWT", "AWS EC2", "Docker"],
      github: "https://github.com/satyatorati/chat-app",
      demo: "https://chat-app-6nvc.onrender.com/",
      highlights: [
        "Reduced latency by 30% using Socket.io",
        "Streamlined state management with Zustand",
        "Containerized with Docker for AWS deployment"
      ],
      category: "web"
    },
    {
      title: "E-Commerce Bookstore",
      description: "A bookstore platform with 1,000+ products and 200+ monthly transactions, featuring cart management and COD checkout. Includes an admin dashboard enabling CRUD operations, cutting admin task time by 40%.",
      image: "/assets/bookstore.png",
      tags: ["React", "Redux Toolkit", "RTK Query", "Node.js", "Express", "MongoDB", "JWT"],
      github: "https://github.com/satyatorati/book-store-frontend",
      demo: "https://book-store-flax.vercel.app/",
      highlights: [
        "Reduced API calls by 25% with RTK Query caching",
        "40% reduction in admin tasks",
        "Mobile-friendly UI with Tailwind CSS"
      ],
      category: "web"
    },
    {
      title: "Telecom Churn Prediction System",
      description: "A predictive model achieving 87% accuracy to identify high-risk churn customers using SVM and Random Forest algorithms. Includes a Flask REST API capable of handling 50+ requests/sec with asynchronous workers.",
      image: "/assets/churn.png",
      tags: ["Python", "Flask", "Scikit-learn", "TensorFlow", "Docker", "MongoDB"],
      github: "https://github.com/satyatorati/Telecom-churn-prediction",
      demo: "https://github.com/satyatorati/Telecom-churn-prediction",
      highlights: [
        "87% prediction accuracy",
        "50+ requests/sec handling capacity",
        "Asynchronous processing for real-time predictions"
      ],
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
          {/* Real-Time Chat Application */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-light-card/80 dark:bg-dark-card/80 backdrop-blur-sm rounded-xl overflow-hidden border border-light-border dark:border-dark-border hover:shadow-glow transition-all duration-300"
          >
            <div className="p-6">
              <h3 className="text-2xl font-bold text-light-text dark:text-dark-text mb-2">Real-Time Chat Application | AI-Powered Multilingual Messaging</h3>
              <p className="text-light-textSecondary dark:text-dark-textSecondary mb-4">
                A real-time messaging platform serving over 500 active daily users, providing instant messaging and online status tracking.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-3 py-1 bg-light-accent/10 dark:bg-dark-accent/10 text-light-accent dark:text-dark-accent rounded-full text-sm">React</span>
                <span className="px-3 py-1 bg-light-accent/10 dark:bg-dark-accent/10 text-light-accent dark:text-dark-accent rounded-full text-sm">Node.js</span>
                <span className="px-3 py-1 bg-light-accent/10 dark:bg-dark-accent/10 text-light-accent dark:text-dark-accent rounded-full text-sm">Socket.io</span>
                <span className="px-3 py-1 bg-light-accent/10 dark:bg-dark-accent/10 text-light-accent dark:text-dark-accent rounded-full text-sm">MongoDB</span>
                <span className="px-3 py-1 bg-light-accent/10 dark:bg-dark-accent/10 text-light-accent dark:text-dark-accent rounded-full text-sm">JWT</span>
                <span className="px-3 py-1 bg-light-accent/10 dark:bg-dark-accent/10 text-light-accent dark:text-dark-accent rounded-full text-sm">Google Translate API</span>
              </div>
              <ul className="list-disc list-inside text-sm text-light-textSecondary/80 dark:text-dark-textSecondary/80 space-y-1 mb-4">
                <li>Built a real-time messaging platform with instant messaging and online status tracking</li>
                <li>Integrated secure user authentication with JWT, including refresh token rotation and role-based access control</li>
                <li>Optimized real-time communication using Socket.io, reducing latency by 30%</li>
                <li>Leveraged Google Translate API to enable automatic message translation</li>
              </ul>
              <div className="flex justify-between items-center">
                <a
                  href={projects[0].demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-light-accent dark:text-dark-accent hover:text-highlight dark:hover:text-highlight transition-colors duration-300"
                >
                  View Project →
                </a>
                <div className="flex space-x-4">
                  <a 
                    href={projects[0].github} 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-light-textSecondary dark:text-dark-textSecondary hover:text-light-accent dark:hover:text-dark-accent"
                  >
                    <FiGithub size={20} />
                  </a>
                  <a 
                    href={projects[0].demo} 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-light-textSecondary dark:text-dark-textSecondary hover:text-light-accent dark:hover:text-dark-accent"
                  >
                    <FiExternalLink size={20} />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* E-Commerce Bookstore */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-light-card/80 dark:bg-dark-card/80 backdrop-blur-sm rounded-xl overflow-hidden border border-light-border dark:border-dark-border hover:shadow-glow transition-all duration-300"
          >
            <div className="p-6">
              <h3 className="text-2xl font-bold text-light-text dark:text-dark-text mb-2">E-Commerce Bookstore | AI Chatbot for Customer Support & Smart Recommendations</h3>
              <p className="text-light-textSecondary dark:text-dark-textSecondary mb-4">
                A full-featured eCommerce platform with over 1,000 products and more than 200 monthly transactions.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-3 py-1 bg-light-accent/10 dark:bg-dark-accent/10 text-light-accent dark:text-dark-accent rounded-full text-sm">React</span>
                <span className="px-3 py-1 bg-light-accent/10 dark:bg-dark-accent/10 text-light-accent dark:text-dark-accent rounded-full text-sm">Redux Toolkit</span>
                <span className="px-3 py-1 bg-light-accent/10 dark:bg-dark-accent/10 text-light-accent dark:text-dark-accent rounded-full text-sm">Node.js</span>
                <span className="px-3 py-1 bg-light-accent/10 dark:bg-dark-accent/10 text-light-accent dark:text-dark-accent rounded-full text-sm">MongoDB</span>
                <span className="px-3 py-1 bg-light-accent/10 dark:bg-dark-accent/10 text-light-accent dark:text-dark-accent rounded-full text-sm">OpenAI</span>
              </div>
              <ul className="list-disc list-inside text-sm text-light-textSecondary/80 dark:text-dark-textSecondary/80 space-y-1 mb-4">
                <li>Developed an eCommerce platform with over 1,000 products and 200+ monthly transactions</li>
                <li>Built an admin dashboard that automated CRUD operations, reducing administrative task time by 40%</li>
                <li>Deployed an OpenAI-powered chatbot for customer support, boosting response times</li>
                <li>Implemented efficient cart management and checkout processes</li>
              </ul>
              <div className="flex justify-between items-center">
                <a
                  href={projects[1].demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-light-accent dark:text-dark-accent hover:text-highlight dark:hover:text-highlight transition-colors duration-300"
                >
                  View Project →
                </a>
                <div className="flex space-x-4">
                  <a 
                    href={projects[1].github} 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-light-textSecondary dark:text-dark-textSecondary hover:text-light-accent dark:hover:text-dark-accent"
                  >
                    <FiGithub size={20} />
                  </a>
                  <a 
                    href={projects[1].demo} 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-light-textSecondary dark:text-dark-textSecondary hover:text-light-accent dark:hover:text-dark-accent"
                  >
                    <FiExternalLink size={20} />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Telecom Churn Project */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-light-card/80 dark:bg-dark-card/80 backdrop-blur-sm rounded-xl overflow-hidden border border-light-border dark:border-dark-border hover:shadow-glow transition-all duration-300"
          >
            <div className="p-6">
              <h3 className="text-2xl font-bold text-light-text dark:text-dark-text mb-2">Telecom Churn Prediction</h3>
              <p className="text-light-textSecondary dark:text-dark-textSecondary mb-4">
                A predictive model achieving 87% accuracy to identify high-risk churn customers.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-3 py-1 bg-light-accent/10 dark:bg-dark-accent/10 text-light-accent dark:text-dark-accent rounded-full text-sm">Python</span>
                <span className="px-3 py-1 bg-light-accent/10 dark:bg-dark-accent/10 text-light-accent dark:text-dark-accent rounded-full text-sm">Scikit-learn</span>
                <span className="px-3 py-1 bg-light-accent/10 dark:bg-dark-accent/10 text-light-accent dark:text-dark-accent rounded-full text-sm">TensorFlow</span>
                <span className="px-3 py-1 bg-light-accent/10 dark:bg-dark-accent/10 text-light-accent dark:text-dark-accent rounded-full text-sm">Flask</span>
                <span className="px-3 py-1 bg-light-accent/10 dark:bg-dark-accent/10 text-light-accent dark:text-dark-accent rounded-full text-sm">Docker</span>
              </div>
              <ul className="list-disc list-inside text-sm text-light-textSecondary/80 dark:text-dark-textSecondary/80 space-y-1 mb-4">
                <li>Achieved 87% prediction accuracy using SVM and Random Forest algorithms</li>
                <li>Built a Flask REST API handling 50+ requests/sec with asynchronous workers</li>
                <li>Containerized the application using Docker for easy deployment</li>
                <li>Implemented real-time predictions with asynchronous processing</li>
              </ul>
              <div className="flex justify-between items-center">
                <a
                  href={projects[2].demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-light-accent dark:text-dark-accent hover:text-highlight dark:hover:text-highlight transition-colors duration-300"
                >
                  View Project →
                </a>
                <div className="flex space-x-4">
                  <a 
                    href={projects[2].github} 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-light-textSecondary dark:text-dark-textSecondary hover:text-light-accent dark:hover:text-dark-accent"
                  >
                    <FiGithub size={20} />
                  </a>
                  <a 
                    href={projects[2].demo} 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-light-textSecondary dark:text-dark-textSecondary hover:text-light-accent dark:hover:text-dark-accent"
                  >
                    <FiExternalLink size={20} />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Projects