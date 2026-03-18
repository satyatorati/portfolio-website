import { motion } from 'framer-motion'

const cards = [
  {
    icon: '🏗️',
    title: 'Scalable Backend Systems',
    description:
      '5+ production microservices at MetLife serving financial data for thousands of users. Expertise in Java, Spring Boot, and distributed architecture.',
  },
  {
    icon: '⚡',
    title: 'Performance-Driven Engineering',
    description:
      'Reduced manual errors by 25% at MetLife. Maintained 99.9% uptime at Accenture across 250+ resolved production incidents.',
  },
  {
    icon: '🤖',
    title: 'AI-Integrated Development',
    description:
      'Building LLM-powered tools with LangChain, AWS Bedrock, and OpenAI. From RAG pipelines to AI-enhanced user experiences.',
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
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-light-card/80 dark:bg-dark-card/80 backdrop-blur-sm rounded-xl p-6 border border-light-border dark:border-dark-border hover:shadow-glow transition-all duration-300"
          >
            <div className="text-4xl mb-4">{card.icon}</div>
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
