import { motion } from 'framer-motion'
import profilePic from '../assets/pic.jpg'

const About = () => {
  return (
    <section id="about" className="py-20">
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-light-text via-light-accent to-highlight dark:from-dark-text dark:via-dark-accent dark:to-highlight bg-clip-text text-transparent"
      >
        About Me
      </motion.h2>
      
      <div className="grid grid-cols-1 md:grid-cols-5 gap-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="md:col-span-3"
        >
          <p className="text-light-textSecondary dark:text-dark-textSecondary text-lg mb-6">
            Software Engineer with 3+ years of experience designing, developing, and deploying scalable backend and full-stack applications using Java (Spring Boot), Python (Flask/FastAPI), JavaScript/TypeScript, and AWS. Strong background in microservices architecture, REST/GraphQL APIs, distributed systems, and cloud-native deployments.
          </p>
          
          <p className="text-light-textSecondary dark:text-dark-textSecondary text-lg mb-6">
            Proven ability to deliver secure, high-performance systems with OAuth2/JWT, CI/CD automation, Docker, Kubernetes, and modern engineering practices. Experienced in Agile collaboration across product, QA, and DevOps teams within financial and insurance domains.
          </p>
          
          <p className="text-light-textSecondary dark:text-dark-textSecondary text-lg mb-6">
            At MetLife, I develop backend microservices using Java 17 and Spring Boot for financial reporting and asset process flows, while building dynamic React.js front-end modules for 500+ daily active users. At Accenture, I built full-stack features for enterprise applications and resolved 250+ production issues, maintaining 99.9% uptime. My work spans from microservices architecture to secure authentication systems, always focused on delivering robust, scalable solutions.
          </p>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="md:col-span-2 relative"
        >
          <div className="relative w-full max-w-sm mx-auto">
            <div className="aspect-square rounded-lg overflow-hidden relative z-10 shadow-xl">
              <img 
                src={profilePic} 
                alt="Satyanarayana Torati" 
                className="w-full h-full object-cover" 
              />
            </div>
            <div className="absolute -top-4 -left-4 w-full h-full border-2 border-light-accent dark:border-dark-accent rounded-lg z-0"></div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default About