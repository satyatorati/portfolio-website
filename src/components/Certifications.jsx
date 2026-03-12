import { motion } from 'framer-motion'
import { FiCloud, FiCode } from 'react-icons/fi'

const certifications = [
  {
    icon: FiCloud,
    title: "AWS Solutions Architect – Associate",
    issuer: "Amazon Web Services",
    status: "In Progress · Expected Q2 2026",
    statusColor: "amber"
  },
  {
    icon: FiCode,
    title: "Oracle Certified Professional: Java SE 17 Developer",
    issuer: "Oracle",
    status: "In Progress · Expected Q3 2026",
    statusColor: "amber"
  }
]

const Certifications = () => {
  return (
    <section id="certifications" className="py-20">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.05 }}
        transition={{ duration: 0.5 }}
        className="text-5xl font-bold text-center mb-12 bg-gradient-to-r from-light-text via-light-accent to-highlight dark:from-dark-text dark:via-dark-accent dark:to-highlight bg-clip-text text-transparent"
      >
        Certifications
      </motion.h2>

      <div className="max-w-4xl mx-auto">
        <div className="space-y-6">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.05 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex items-start space-x-5 bg-light-card/80 dark:bg-dark-card/80 backdrop-blur-sm rounded-xl p-6 border border-light-border dark:border-dark-border hover:shadow-glow transition-all duration-300"
            >
              <div className="flex-shrink-0 w-14 h-14 rounded-lg bg-amber-100 dark:bg-amber-900/30 flex items-center justify-center border border-amber-200 dark:border-amber-700">
                <cert.icon className="w-7 h-7 text-amber-600 dark:text-amber-400" />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-light-text dark:text-dark-text mb-1">
                  {cert.title}
                </h3>
                <p className="text-base text-light-textSecondary dark:text-dark-textSecondary mb-3">
                  {cert.issuer}
                </p>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 text-sm font-semibold rounded-full bg-amber-100 dark:bg-amber-900/40 text-amber-700 dark:text-amber-400 border border-amber-300 dark:border-amber-700">
                  <span className="w-2 h-2 rounded-full bg-amber-500 dark:bg-amber-400 animate-pulse" />
                  {cert.status}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Certifications
