import { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Experience from './components/Experience'
import Education from './components/Education'
import { motion, AnimatePresence } from 'framer-motion'
import { ThemeProvider } from './components/ThemeProvider'

function App() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 1000)
    
    return () => clearTimeout(timer)
  }, [])

  if (isLoading) {
    return (
      <div className="h-screen flex items-center justify-center bg-light-primary dark:bg-dark-primary">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="relative"
        >
          <div className="w-16 h-16 border-4 border-light-accent dark:border-dark-accent rounded-full border-t-transparent animate-spin" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-8 h-8 bg-light-accent dark:bg-dark-accent rounded-full animate-pulse" />
          </div>
        </motion.div>
      </div>
    )
  }

  return (
    <ThemeProvider>
      <AnimatePresence>
        <div className="min-h-screen bg-light-primary dark:bg-dark-primary text-light-text dark:text-dark-text">
          <Navbar />
          <main className="relative">
            <Hero />
            <div className="section-container">
              <About />
              <Education />
              <Skills />
              <Experience />
              <Projects />
              <Contact />
            </div>
          </main>
          <Footer />
        </div>
      </AnimatePresence>
    </ThemeProvider>
  )
}

export default App