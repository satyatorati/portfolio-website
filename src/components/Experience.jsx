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
                <li>💡 Developed a scalable gym reservation system using MERN stack, supporting 500+ daily bookings with 99.9% uptime</li>
                <li>⚡ Engineered real-time WebSocket communication to reduce booking conflicts by 35%</li>
                <li>🚀 Migrated backend storage to AWS DynamoDB, improving concurrent user handling for 1000+ users</li>
                <li>🔧 Containerized microservices using Docker and orchestrated with Kubernetes for seamless scalability</li>
                <li>🤖 Integrated AWS Bedrock-powered AI chatbot, enhancing user support efficiency by 40%</li>
                <li>🛠️ Automated infrastructure provisioning using Terraform, reducing setup time by 30%</li>
                <li>🔄 Implemented CI/CD pipelines with GitHub Actions for reliable deployments and version control</li>
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
              <p className="text-xl text-light-textSecondary dark:text-dark-textSecondary">Software Development Engineer</p>
              <p className="text-lg text-light-textSecondary/80 dark:text-dark-textSecondary/80">Mar 2021 – Dec 2023</p>
              <ul className="list-disc list-inside text-lg text-light-textSecondary/80 dark:text-dark-textSecondary/80 space-y-3 mt-4">
                <li>💡 Engineered high-performance eCommerce applications used by millions during peak loads</li>
                <li>⚡ Reduced latency by 40% with asynchronous request handling and Redis caching</li>
                <li>🔐  Designed secure REST APIs using Node.js and Express.js forcustomer workflows.</li>
                <li>🚀 Optimized MySQL schemas and queries, decreasing order processing time by 50%</li>
                <li>🔧 Developed Dockerized microservices and automated deployment pipelines on AWS EC2 using Jenkins</li>
                <li>📊 Monitored system performance with Postman and New Relic, maintaining 99.99% uptime</li>
                <li>🤝 Collaborated in Agile teams for sprint planning, reviews, and aligning development with business goals</li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Experience