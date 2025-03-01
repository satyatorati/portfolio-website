import { motion } from 'framer-motion'
import { FiGithub, FiLinkedin, FiTwitter } from 'react-icons/fi'

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex flex-col justify-center pt-16">
      <div className="max-w-4xl">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-secondary mb-4 font-mono"
        >
          Hello, My name is
        </motion.p>
        
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-5xl sm:text-6xl md:text-7xl font-bold text-textPrimary mb-4"
        >
          Satyanarayana Torati
        </motion.h1>
        
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-4xl sm:text-5xl md:text-6xl font-bold text-textSecondary mb-6"
        >
        </motion.h2>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-textSecondary text-lg sm:text-xl max-w-2xl mb-8"
        >
          I'm a software developer specializing in building exceptional digital experiences. 
          Currently pursuing my Master's in Computer Science at SUNY Buffalo, with a focus on creating accessible, 
          efficient, and user-centered applications.
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex space-x-6"
        >
          <a href="#projects" className="btn-primary">
            View My Work
          </a>
          <a href="#contact" className="btn-primary">
            Contact Me
          </a>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="flex space-x-6 mt-12"
        >
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-textSecondary hover:text-secondary transition-colors">
            <FiGithub size={24} />
          </a>
          <a href="https://www.linkedin.com/in/satya-torati-51a19428b" target="_blank" rel="noopener noreferrer" className="text-textSecondary hover:text-secondary transition-colors">
            <FiLinkedin size={24} />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-textSecondary hover:text-secondary transition-colors">
            <FiTwitter size={24} />
          </a>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero