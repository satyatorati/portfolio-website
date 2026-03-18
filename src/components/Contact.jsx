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

              {/* Calendly — featured card */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                style={{
                  background: 'linear-gradient(135deg, rgba(0,180,216,0.08), rgba(0,119,182,0.08))',
                  border: '1px solid rgba(0,180,216,0.4)',
                  borderRadius: '12px',
                  padding: '20px',
                  boxShadow: '0 0 20px rgba(0,180,216,0.12)',
                }}
              >
                <div className="flex items-start space-x-4">
                  <div className="relative w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0"
                    style={{ background: 'rgba(0,180,216,0.15)' }}>
                    <FiCalendar className="w-6 h-6" style={{ color: '#00b4d8' }} />
                    <span className="pulse-dot absolute -top-1 -right-1" style={{ width: '8px', height: '8px', margin: 0 }} />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-xl font-semibold text-light-text dark:text-dark-text mb-1">
                      📅 Book a 30-min Intro Call
                    </h4>
                    <p className="text-sm text-light-textSecondary dark:text-dark-textSecondary mb-3">
                      Let&apos;s talk about your engineering needs
                    </p>
                    <a
                      href="https://calendly.com/satyatorati5"
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        display: 'inline-block',
                        padding: '8px 20px',
                        background: 'linear-gradient(135deg, #00b4d8, #0077b6)',
                        color: '#fff',
                        fontWeight: 600,
                        fontSize: '0.875rem',
                        borderRadius: '8px',
                        textDecoration: 'none',
                        transition: 'opacity 200ms',
                      }}
                      onMouseEnter={e => e.currentTarget.style.opacity = '0.85'}
                      onMouseLeave={e => e.currentTarget.style.opacity = '1'}
                    >
                      Book Now →
                    </a>
                  </div>
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
