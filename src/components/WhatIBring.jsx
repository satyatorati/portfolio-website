import { motion } from 'framer-motion'
import { FiServer, FiZap, FiCpu } from 'react-icons/fi'

const cards = [
  {
    Icon: FiServer,
    title: 'Scalable Backend Systems',
    description:
      'Designed event-driven microservices at MetLife using Java 17 and Spring Boot for financial reporting serving thousands of daily users. Deep expertise in distributed architecture, Kafka, and AWS.',
  },
  {
    Icon: FiZap,
    title: 'Performance & Reliability',
    description:
      'Resolved 250+ production incidents at Accenture maintaining 99.9% uptime. Improved API response times by 35% and reduced order failures by 20% on a 10,000+ orders/day platform.',
  },
  {
    Icon: FiCpu,
    title: 'AI-Integrated Engineering',
    description:
      'Integrated AWS Bedrock and OpenAI APIs into production Spring Boot systems at MetLife — cutting financial data review time by 40% and enabling natural language querying of financial datasets.',
  },
]

const WhatIBring = () => {
  return (
    <section className="py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-10"
      >
        <h2 className="text-4xl font-bold mb-3 bg-gradient-to-r from-light-text via-light-accent to-highlight dark:from-dark-text dark:via-dark-accent dark:to-highlight bg-clip-text text-transparent">
          What I Bring to Your Team
        </h2>
        <p className="text-light-textSecondary dark:text-dark-textSecondary text-base max-w-xl mx-auto">
          Turning complex engineering problems into reliable, scalable solutions
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {cards.map((card, index) => (
          <motion.div
            key={card.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0 }}
            transition={{ duration: 0.4, delay: index * 0.08 }}
            className="bg-light-card/80 dark:bg-dark-card/80 backdrop-blur-sm rounded-xl p-6 border border-light-border dark:border-dark-border hover:border-light-accent/40 dark:hover:border-dark-accent/40 hover:shadow-glow transition-all duration-300"
          >
            <div className="w-10 h-10 rounded-lg bg-light-accent/10 dark:bg-dark-accent/10 flex items-center justify-center mb-4">
              <card.Icon className="w-5 h-5 text-light-accent dark:text-dark-accent" />
            </div>
            <h3 className="text-lg font-bold text-light-text dark:text-dark-text mb-2">
              {card.title}
            </h3>
            <p className="text-sm text-light-textSecondary dark:text-dark-textSecondary leading-relaxed">
              {card.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

export default WhatIBring
