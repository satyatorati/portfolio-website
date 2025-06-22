import { motion } from 'framer-motion'
import { FiGithub, FiLinkedin, FiMail, FiMapPin } from 'react-icons/fi'
import { useTheme } from './ThemeProvider'

const Hero = () => {
  const { isDark } = useTheme();

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-mesh dark:opacity-20 opacity-40" />
      <div className="absolute w-[500px] h-[500px] bg-highlight/30 dark:bg-highlight/10 rounded-full blur-3xl top-1/4 -right-48 animate-float" />
      <div className="absolute w-[400px] h-[400px] bg-dark-accent/20 dark:bg-light-accent/10 rounded-full blur-3xl bottom-1/4 -left-24 animate-float" style={{ animationDelay: '2s' }} />

      {/* Grid Pattern */}
      <div className="absolute inset-0" style={{
        backgroundImage: isDark 
          ? 'radial-gradient(circle at 1px 1px, rgba(203, 213, 225, 0.1) 1px, transparent 0)' 
          : 'radial-gradient(circle at 1px 1px, rgba(15, 23, 42, 0.1) 1px, transparent 0)',
        backgroundSize: '40px 40px'
      }} />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Location Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-8"
          >
            <div className="inline-flex items-center space-x-2 bg-light-card/80 dark:bg-dark-card/80 backdrop-blur-sm px-4 py-2 rounded-full mb-6 border border-light-border dark:border-dark-border">
              <FiMapPin className="text-light-accent dark:text-dark-accent" />
              <span className="text-light-text dark:text-dark-text font-mono">Buffalo, NY</span>
            </div>
          </motion.div>

          {/* Name */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-5xl sm:text-6xl md:text-7xl font-display font-bold text-center mb-6"
          >
            <span className="bg-gradient-to-r from-light-text via-light-accent to-highlight dark:from-dark-text dark:via-dark-accent dark:to-highlight bg-clip-text text-transparent">
              Satyanarayana Torati
            </span>
          </motion.h1>

          {/* Title */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-center mb-8"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-display text-light-text dark:text-dark-text">
              Software Engineer 
            </h2>
          </motion.div>

          {/* Summary */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-lg sm:text-xl text-center text-light-textSecondary dark:text-dark-textSecondary mb-12 max-w-2xl mx-auto font-medium"
          >
            Software Engineer with 4+ years of experience building scalable web applications using React, Node.js, and AWS. Completed M.S in Computer Science at SUNY Buffalo. Skilled in MERN stack, microservices, Docker, Kubernetes, and CI/CD automation. Passionate about delivering robust, cloud-native, AI-integrated solutions.
          </motion.p>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-wrap justify-center gap-4 mb-12"
          >
            <a
              href="#projects"
              className="px-8 py-3 bg-gradient-to-r from-light-accent to-highlight dark:from-dark-accent dark:to-highlight text-white rounded-lg font-semibold hover:shadow-glow transition-all duration-300 transform hover:-translate-y-1"
            >
              View My Work
            </a>
            <a
              href="#contact"
              className="px-8 py-3 bg-light-card/80 dark:bg-dark-card/80 backdrop-blur-sm text-light-text dark:text-dark-text rounded-lg font-semibold hover:bg-light-accent/10 dark:hover:bg-dark-accent/10 border border-light-border dark:border-dark-border transition-all duration-300 transform hover:-translate-y-1"
            >
              Get in Touch
            </a>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="flex justify-center space-x-6"
          >
            {[
              { icon: FiGithub, href: 'https://github.com/satyatorati', label: 'GitHub' },
              { icon: FiLinkedin, href: 'https://www.linkedin.com/in/satya-torati/', label: 'LinkedIn' },
              { icon: FiMail, href: 'mailto:satyatorati9@gmail.com', label: 'Email' }
            ].map((social, index) => (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-light-card/80 dark:bg-dark-card/80 backdrop-blur-sm rounded-full text-light-text dark:text-dark-text hover:text-light-accent dark:hover:text-dark-accent hover:shadow-glow transition-all duration-300"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.6 + index * 0.1 }}
              >
                <social.icon size={24} />
              </motion.a>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.5,
          delay: 1,
          repeat: Infinity,
          repeatType: "reverse",
          repeatDelay: 0.5
        }}
      >
        <div className="w-6 h-10 rounded-full border-2 border-light-text/20 dark:border-dark-text/20 flex justify-center">
          <motion.div
            className="w-1 h-2 bg-light-text/50 dark:bg-dark-text/50 rounded-full mt-2"
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>
      </motion.div>
    </section>
  )
}

export default Hero