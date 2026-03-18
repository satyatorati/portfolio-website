import { motion } from 'framer-motion'

const CurrentlyBuilding = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0 }}
      transition={{ duration: 0.5 }}
      className="mb-16"
    >
      <div className="relative overflow-hidden rounded-xl border border-light-border dark:border-dark-border bg-gradient-to-r from-light-card/90 via-light-card/80 to-light-card/90 dark:from-dark-card/90 dark:via-dark-secondary/80 dark:to-dark-card/90 backdrop-blur-sm px-6 py-5 flex flex-col sm:flex-row items-start sm:items-center gap-4 shadow-sm hover:shadow-glow transition-all duration-300">
        {/* Subtle gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-light-accent/5 via-highlight/5 to-transparent dark:from-dark-accent/10 dark:via-highlight/5 dark:to-transparent pointer-events-none" />

        {/* Live indicator */}
        <div className="flex-shrink-0 flex items-center gap-2 relative z-10">
          <span className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500" />
          </span>
          <span className="text-green-600 dark:text-green-400 text-sm font-semibold uppercase tracking-wider whitespace-nowrap">
            Live Build
          </span>
        </div>

        <div className="relative z-10 flex-1">
          <p className="text-light-text dark:text-dark-text text-base font-medium leading-relaxed">
            <span className="mr-1">🔨</span>
            <span className="font-bold">Currently Building:</span>
            {' '}DocuMind — A RAG-based document Q&amp;A system using LangChain + AWS Bedrock + Spring Boot. Ask questions against large document collections in natural language.
          </p>
        </div>
      </div>
    </motion.div>
  )
}

export default CurrentlyBuilding
