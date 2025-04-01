import { motion } from 'framer-motion'
import { FiBook } from 'react-icons/fi'

const Education = () => {
  return (
    <section id="education" className="py-20">
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-5xl font-bold text-center mb-12 bg-gradient-to-r from-light-text via-light-accent to-highlight dark:from-dark-text dark:via-dark-accent dark:to-highlight bg-clip-text text-transparent"
      >
        Education
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
              <p className="text-xl text-light-textSecondary dark:text-dark-textSecondary">Master of Science in Computer Science</p>
              <p className="text-lg text-light-textSecondary/80 dark:text-dark-textSecondary/80">Jan 2024 - May 2025</p>
              <p className="text-lg text-light-textSecondary/80 dark:text-dark-textSecondary/80">Relevant Coursework: Operating Systems, Computer Security, Data Models & Query Language, Data Structures & Algorithms</p>
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
                src="/assets/anitslogo.jpg" 
                alt="ANITS Logo" 
                className="w-16 h-16 object-contain"
              />
            </div>
            <div>
              <h3 className="text-3xl font-bold text-light-text dark:text-dark-text mb-2">Anil Neerukonda Institute of Technology and Sciences (ANITS)</h3>
              <p className="text-xl text-light-textSecondary dark:text-dark-textSecondary">Bachelor of Engineering in Computer Science</p>
              <p className="text-lg text-light-textSecondary/80 dark:text-dark-textSecondary/80">Jun 2018 - May 2021</p>
              <p className="text-lg text-light-textSecondary/80 dark:text-dark-textSecondary/80">Relevant Coursework: Database Management Systems, Software Engineering, Object-Oriented Programming, Web Technologies</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Education