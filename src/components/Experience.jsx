import { motion } from 'framer-motion'

const Experience = () => {
  return (
    <section id="experience" className="py-20">
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-5xl font-bold text-center mb-12 bg-gradient-to-r from-light-text via-light-accent to-highlight dark:from-dark-text dark:via-dark-accent dark:to-highlight bg-clip-text text-transparent"
      >
        Experience
      </motion.h2>

      <div className="max-w-4xl mx-auto">
        <div className="space-y-12">
          {/* University at Buffalo */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex items-start space-x-6"
          >
            <div className="flex-shrink-0">
              <img 
                src="/assets/ublogo.jpg" 
                alt="University at Buffalo Logo" 
                className="w-16 h-16 object-contain"
              />
            </div>
            <div>
              <h3 className="text-3xl font-bold text-light-text dark:text-dark-text mb-2">University at Buffalo, SUNY</h3>
              <p className="text-xl text-light-textSecondary dark:text-dark-textSecondary">Application Developer</p>
              <p className="text-lg text-light-textSecondary/80 dark:text-dark-textSecondary/80">Mar 2024 – May 2025</p>
              <ul className="list-disc list-inside text-lg text-light-textSecondary/80 dark:text-dark-textSecondary/80 space-y-3 mt-4">
                <li>💡 Developed a scalable MERN-based gym reservation platform supporting 500+ daily bookings, deployed on AWS EC2 with high availability</li>
                <li>⚡ Designed RESTful APIs and optimized PostgreSQL queries, improving booking performance and reducing query latency</li>
                <li>🚀 Implemented real-time updates using WebSockets, reducing booking conflicts and improving user experience</li>
                <li>🔧 Containerized backend services using Docker and orchestrated deployments with Kubernetes for seamless scalability</li>
                <li>🔄 Integrated CI/CD pipelines to automate builds and deployments, improving release reliability and deployment speed</li>
                <li>📊 Implemented application monitoring and logging, enabling proactive issue detection and maintaining system stability</li>
              </ul>
            </div>
          </motion.div>

          {/* Accenture */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex items-start space-x-6"
          >
            <div className="flex-shrink-0">
              <img 
                src="/assets/accenture.png" 
                alt="Accenture Logo" 
                className="w-16 h-16 object-contain"
              />
            </div>
            <div>
              <h3 className="text-3xl font-bold text-light-text dark:text-dark-text mb-2">Accenture</h3>
              <p className="text-xl text-light-textSecondary dark:text-dark-textSecondary">Software Engineer</p>
              <p className="text-lg text-light-textSecondary/80 dark:text-dark-textSecondary/80">Mar 2021 – Dec 2023</p>
              <ul className="list-disc list-inside text-lg text-light-textSecondary/80 dark:text-dark-textSecondary/80 space-y-3 mt-4">
                <li>💡 Developed and maintained scalable eCommerce backend services using JavaScript, Express.js, and SQL, improving throughput and API reliability during peak traffic</li>
                <li>🔐 Designed secure REST APIs with JWT authentication, strengthening platform security and ensuring compliant access control</li>
                <li>⚡ Optimized MySQL database schemas and queries, cutting transaction latency by 50% and improving operational stability</li>
                <li>🚀 Deployed microservices on AWS EC2 using Docker and Kubernetes, supporting CI/CD pipelines and achieving 99.99% application uptime</li>
                <li>📈 Improved API performance and reliability by implementing caching strategies and optimizing backend workflows, reducing response times under high load</li>
                <li>📊 Implemented monitoring and observability solutions using New Relic dashboards and Postman collections, enabling proactive issue detection and faster resolution of production incidents</li>
                <li>🧪 Contributed to unit and integration testing and performing code reviews to ensure high-quality, secure, and stable software delivery across the full Software Development Life Cycle</li>
                <li>🤝 Collaborated with QA, DevOps, and Product teams in Agile sprints, aligning engineering solutions with business and technical requirements</li>
              </ul>
            </div>
          </motion.div>

          {/* Dunzo Digital Private Limited */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="flex items-start space-x-6"
          >
            <div className="flex-shrink-0">
              <div className="w-16 h-16 bg-light-accent/10 dark:bg-dark-accent/10 rounded-lg flex items-center justify-center">
                <span className="text-2xl font-bold text-light-accent dark:text-dark-accent">D</span>
              </div>
            </div>
            <div>
              <h3 className="text-3xl font-bold text-light-text dark:text-dark-text mb-2">Dunzo Digital Private Limited</h3>
              <p className="text-xl text-light-textSecondary dark:text-dark-textSecondary">Software Development Intern</p>
              <p className="text-lg text-light-textSecondary/80 dark:text-dark-textSecondary/80">Mar 2020 – Mar 2021</p>
              <ul className="list-disc list-inside text-lg text-light-textSecondary/80 dark:text-dark-textSecondary/80 space-y-3 mt-4">
                <li>💡 Developed React.js components for real-time order and delivery tracking, improving UI responsiveness and data accuracy</li>
                <li>⚡ Integrated RESTful APIs to support live logistics updates and dynamic data rendering</li>
                <li>🚀 Optimized MongoDB queries, improving data retrieval performance for location-based operations</li>
                <li>🔄 Collaborated with backend and DevOps teams to support CI/CD-driven deployments, improving release efficiency</li>
                <li>🎨 Enhanced UI consistency and responsiveness using Tailwind CSS, improving overall user experience</li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Experience