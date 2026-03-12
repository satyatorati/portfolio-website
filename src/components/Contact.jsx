import { motion } from 'framer-motion'
import { FiMail, FiMapPin, FiPhone, FiLinkedin, FiGithub, FiCalendar } from 'react-icons/fi'

const Contact = () => {
  return (
    <section id="contact" className="py-20">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.05 }}
        transition={{ duration: 0.5 }}
        className="text-5xl font-bold text-center mb-12 bg-gradient-to-r from-light-text via-light-accent to-highlight dark:from-dark-text dark:via-dark-accent dark:to-highlight bg-clip-text text-transparent"
      >
        Get in Touch
      </motion.h2>

      <div className="max-w-4xl mx-auto">
        <div className="space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.05 }}
            transition={{ duration: 0.5 }}
            className="bg-light-card/80 dark:bg-dark-card/80 backdrop-blur-sm rounded-xl p-8 border border-light-border dark:border-dark-border"
          >
            <h3 className="text-3xl font-bold text-light-text dark:text-dark-text mb-6">Let&apos;s Connect</h3>
            <div className="space-y-6">

              {/* Calendly — first */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.05 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="flex items-start space-x-4"
              >
                <div className="w-12 h-12 rounded-lg bg-light-accent/10 dark:bg-dark-accent/10 flex items-center justify-center flex-shrink-0">
                  <FiCalendar className="w-6 h-6 text-light-accent dark:text-dark-accent" />
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-light-text dark:text-dark-text mb-1">Schedule a Call</h4>
                  <a
                    href="https://calendly.com/satyatorati5/30min"
                    className="text-lg text-light-textSecondary dark:text-dark-textSecondary hover:text-light-accent dark:hover:text-dark-accent transition-colors duration-300"
                  >
                    Book a 30-min chat →
                  </a>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.05 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="flex items-start space-x-4"
              >
                <div className="w-12 h-12 rounded-lg bg-light-accent/10 dark:bg-dark-accent/10 flex items-center justify-center flex-shrink-0">
                  <FiMail className="w-6 h-6 text-light-accent dark:text-dark-accent" />
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-light-text dark:text-dark-text mb-1">Email</h4>
                  <a
                    href="mailto:satyatorati5@gmail.com"
                    className="text-lg text-light-textSecondary dark:text-dark-textSecondary hover:text-light-accent dark:hover:text-dark-accent transition-colors duration-300"
                  >
                    satyatorati5@gmail.com
                  </a>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.05 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="flex items-start space-x-4"
              >
                <div className="w-12 h-12 rounded-lg bg-light-accent/10 dark:bg-dark-accent/10 flex items-center justify-center flex-shrink-0">
                  <FiMapPin className="w-6 h-6 text-light-accent dark:text-dark-accent" />
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-light-text dark:text-dark-text mb-1">Location</h4>
                  <p className="text-lg text-light-textSecondary dark:text-dark-textSecondary">
                    New York, USA
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.05 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="flex items-start space-x-4"
              >
                <div className="w-12 h-12 rounded-lg bg-light-accent/10 dark:bg-dark-accent/10 flex items-center justify-center flex-shrink-0">
                  <FiPhone className="w-6 h-6 text-light-accent dark:text-dark-accent" />
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-light-text dark:text-dark-text mb-1">Phone</h4>
                  <a
                    href="tel:+17162488486"
                    className="text-lg text-light-textSecondary dark:text-dark-textSecondary hover:text-light-accent dark:hover:text-dark-accent transition-colors duration-300"
                  >
                    (716) 248-8486
                  </a>
                </div>
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.05 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-light-card/80 dark:bg-dark-card/80 backdrop-blur-sm rounded-xl p-8 border border-light-border dark:border-dark-border"
          >
            <h3 className="text-3xl font-bold text-light-text dark:text-dark-text mb-6">Social Links</h3>
            <div className="space-y-6">
              <motion.a
                href="https://www.linkedin.com/in/satya-torati/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-4 group"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.05 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <div className="w-12 h-12 rounded-lg bg-light-accent/10 dark:bg-dark-accent/10 flex items-center justify-center flex-shrink-0 group-hover:bg-light-accent/20 dark:group-hover:bg-dark-accent/20 transition-colors duration-300">
                  <FiLinkedin className="w-6 h-6 text-light-accent dark:text-dark-accent" />
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-light-text dark:text-dark-text mb-1">LinkedIn</h4>
                  <p className="text-lg text-light-textSecondary dark:text-dark-textSecondary group-hover:text-light-accent dark:group-hover:text-dark-accent transition-colors duration-300">
                    Connect with me
                  </p>
                </div>
              </motion.a>

              <motion.a
                href="https://github.com/satyatorati"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-4 group"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.05 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <div className="w-12 h-12 rounded-lg bg-light-accent/10 dark:bg-dark-accent/10 flex items-center justify-center flex-shrink-0 group-hover:bg-light-accent/20 dark:group-hover:bg-dark-accent/20 transition-colors duration-300">
                  <FiGithub className="w-6 h-6 text-light-accent dark:text-dark-accent" />
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-light-text dark:text-dark-text mb-1">GitHub</h4>
                  <p className="text-lg text-light-textSecondary dark:text-dark-textSecondary group-hover:text-light-accent dark:group-hover:text-dark-accent transition-colors duration-300">
                    Check out my projects
                  </p>
                </div>
              </motion.a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Contact
