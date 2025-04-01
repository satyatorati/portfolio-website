import { motion } from 'framer-motion'
import { FiBriefcase } from 'react-icons/fi'

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
        <div className="space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex items-start space-x-4"
          >
            <div className="flex-shrink-0">
              <img 
                src="/assets/ublogo.jpg" 
                alt="UB Logo" 
                className="w-16 h-16 object-contain"
              />
            </div>
            <div>
              <h3 className="text-3xl font-bold text-light-text dark:text-dark-text mb-2">University at Buffalo, SUNY</h3>
              <p className="text-xl text-light-textSecondary dark:text-dark-textSecondary">Application Developer - UB Gym Hub</p>
              <p className="text-lg text-light-textSecondary/80 dark:text-dark-textSecondary/80">Aug 2024 - Mar 2025</p>
              <ul className="list-disc list-inside text-lg text-light-textSecondary/80 dark:text-dark-textSecondary/80 space-y-2 mt-4">
                <li>💡 Developed a scalable gym reservation system using MERN stack, handling over 500 daily reservations</li>
                <li>⚡ Engineered real-time WebSocket-based updates, reducing booking conflicts by 35%</li>
                <li>🚀 Migrated backend storage to AWS DynamoDB, optimizing data handling for 1000+ concurrent users</li>
                <li>🔧 Containerized with Docker and deployed on AWS with Kubernetes</li>
                <li>🤖 Enhanced support handling with AWS Bedrock AI, boosting response efficiency by 40%</li>
              </ul>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex items-start space-x-4"
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
              <p className="text-xl text-light-textSecondary dark:text-dark-textSecondary">Application Developer</p>
              <p className="text-lg text-light-textSecondary/80 dark:text-dark-textSecondary/80">Jul 2021 - Dec 2023</p>
              <ul className="list-disc list-inside text-lg text-light-textSecondary/80 dark:text-dark-textSecondary/80 space-y-2 mt-4">
                <li>💡 Resolved 250+ critical issues on high-traffic eCommerce platform, maintaining 99.9% uptime</li>
                <li>⚡ Enhanced database performance by 30% and improved checkout latency by 20%</li>
                <li>🔍 Streamlined log analysis using Python scripts, reducing incident resolution time by 25%</li>
                <li>🚀 Revamped checkout process, reducing user errors by 25% and boosting satisfaction scores</li>
                <li>🔧 Designed CI/CD pipelines with Jenkins and Docker, reducing deployment failures by 20%</li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Experience