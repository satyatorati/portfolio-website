import { motion } from 'framer-motion'
import profilePic from '../assets/pic.jpg'

const About = () => {
  return (
    <section id="about" className="py-20">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0 }}
        transition={{ duration: 0.5 }}
        className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-light-text via-light-accent to-highlight dark:from-dark-text dark:via-dark-accent dark:to-highlight bg-clip-text text-transparent"
      >
        About Me
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-5 gap-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="md:col-span-3"
        >
          <p className="text-light-textSecondary dark:text-dark-textSecondary text-lg mb-6">
            I&apos;m Satya — a Software Engineer who gets genuinely excited about building
            systems that scale.
          </p>

          <p className="text-light-textSecondary dark:text-dark-textSecondary text-lg mb-6">
            My path into engineering started in India, where I studied Computer
            Science and quickly realized I loved the challenge of turning complex problems
            into clean, working code. I moved to New York to pursue my Master&apos;s at the
            University at Buffalo, and haven&apos;t looked back.
          </p>

          <p className="text-light-textSecondary dark:text-dark-textSecondary text-lg mb-6">
            At MetLife, I work on the backend infrastructure that powers financial
            reporting for thousands of users daily — using Java 17, Spring Boot, and
            React. Before that, at Accenture, I spent two years resolving 250+ production
            issues and building full-stack enterprise features that kept 99.9% uptime
            across high-traffic platforms.
          </p>

          <p className="text-light-textSecondary dark:text-dark-textSecondary text-lg mb-6">
            What I&apos;m really drawn to is the intersection of clean architecture and
            real-world impact — whether that&apos;s designing a microservice that shaves
            latency, integrating an AI feature that genuinely helps users, or automating
            a workflow that saves an engineer&apos;s afternoon.
          </p>

          <p className="text-light-textSecondary dark:text-dark-textSecondary text-lg mb-6">
            Outside of work, I&apos;m currently experimenting with LLM-powered developer tools
            and contributing to open-source Java projects.
          </p>

          <p className="text-light-textSecondary dark:text-dark-textSecondary text-lg">
            I&apos;m open to full-time Software Engineering roles in the US — backend,
            full-stack, or platform engineering.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
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
