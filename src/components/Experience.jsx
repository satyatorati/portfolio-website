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
          {/* MetLife */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex items-start space-x-6"
          >
            <div className="flex-shrink-0">
              <div className="w-16 h-16 bg-light-accent/10 dark:bg-dark-accent/10 rounded-lg flex items-center justify-center">
                <span className="text-2xl font-bold text-light-accent dark:text-dark-accent">M</span>
              </div>
            </div>
            <div>
              <h3 className="text-3xl font-bold text-light-text dark:text-dark-text mb-2">MetLife</h3>
              <p className="text-xl text-light-textSecondary dark:text-dark-textSecondary">Software Engineer</p>
              <p className="text-lg text-light-textSecondary/80 dark:text-dark-textSecondary/80">Jul 2025 – Present</p>
              <ul className="list-disc list-inside text-lg text-light-textSecondary/80 dark:text-dark-textSecondary/80 space-y-3 mt-4">
                <li>💡 Developed backend microservices using Java 17 and Spring Boot to support financial reporting and asset process flows; integrated with DB2 tables for accurate data processing and compliance</li>
                <li>⚡ Collaborated with valuation and technical teams to automate XML file generation and data loading using Java (Spring Boot) and JAXB, reducing manual synchronization errors by 25%</li>
                <li>🚀 Developed and enhanced dynamic, responsive front-end modules using React.js, TypeScript, HTML5, and CSS3, providing an intuitive, user-friendly interface for 500+ daily active users</li>
                <li>🔐 Implemented secure authentication and authorization using OAuth2 and JWT with Spring Security; designed and integrated role-based access control into backend services to protect application endpoints and user sessions in financial systems</li>
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
              <p className="text-lg text-light-textSecondary/80 dark:text-dark-textSecondary/80">Jul 2021 – Dec 2023</p>
              <ul className="list-disc list-inside text-lg text-light-textSecondary/80 dark:text-dark-textSecondary/80 space-y-3 mt-4">
                <li>💡 Built full-stack features using Java Spring Boot backend and React.js frontend; developed and optimized RESTful APIs for secure data exchange in enterprise applications</li>
                <li>⚡ Designed and delivered scalable application solutions by translating business requirements into technical implementations for a high-traffic eCommerce platform</li>
                <li>🚀 Resolved 250+ production issues across frontend & backend systems, maintaining 99.9% uptime & stable order processing</li>
                <li>🔐 Implemented authentication and authorization using Spring Security, OAuth2, and JWT, ensuring enterprise-grade security for client data</li>
                <li>🔄 Automated deployment pipelines with Docker and Jenkins, supporting faster releases and reducing manual deployment errors</li>
                <li>🧪 Performed unit and integration testing with JUnit and Postman, helping maintain code reliability and high test coverage</li>
                <li>🤝 Participated in Agile sprints and code reviews using JIRA, contributing to faster feature delivery and improved code quality</li>
              </ul>
            </div>
          </motion.div>

          {/* Mphasis */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="flex items-start space-x-6"
          >
            <div className="flex-shrink-0">
              <div className="w-16 h-16 bg-light-accent/10 dark:bg-dark-accent/10 rounded-lg flex items-center justify-center">
                <span className="text-2xl font-bold text-light-accent dark:text-dark-accent">M</span>
              </div>
            </div>
            <div>
              <h3 className="text-3xl font-bold text-light-text dark:text-dark-text mb-2">Mphasis</h3>
              <p className="text-xl text-light-textSecondary dark:text-dark-textSecondary">Jr Software Engineer</p>
              <p className="text-lg text-light-textSecondary/80 dark:text-dark-textSecondary/80">Jan 2021 – Jun 2021</p>
              <ul className="list-disc list-inside text-lg text-light-textSecondary/80 dark:text-dark-textSecondary/80 space-y-3 mt-4">
                <li>💡 Contributed to backend development using Python (Flask and FastAPI) for financial reporting modules; assisted in creating lightweight REST APIs and integrating them with databases to support core application functionality</li>
                <li>⚡ Developed basic Python utilities and automation scripts to streamline internal application workflows and backend processing tasks, improving overall system efficiency and reliability</li>
                <li>🚀 Supported frontend enhancements using JavaScript (ES6+) and React.js for user-facing dashboards, contributing to better UI responsiveness and user experience</li>
                <li>🔄 Assisted in setting up simple CI/CD processes with Jenkins and Docker, supporting automated builds and deployments for Python-based components</li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Experience