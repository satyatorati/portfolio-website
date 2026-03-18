import { useState, useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { FiMenu, FiX } from 'react-icons/fi'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('home')
  const observerRef = useRef(null)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Active section tracking via IntersectionObserver
  useEffect(() => {
    const sectionIds = ['home', 'about', 'education', 'experience', 'projects', 'contact']

    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
          }
        })
      },
      { threshold: 0, rootMargin: '0px 0px -60% 0px' }
    )

    sectionIds.forEach((id) => {
      const el = document.getElementById(id)
      if (el) observerRef.current.observe(el)
    })

    return () => observerRef.current?.disconnect()
  }, [])

  const navLinks = [
    { name: 'Home', href: '#home', id: 'home' },
    { name: 'About', href: '#about', id: 'about' },
    { name: 'Education', href: '#education', id: 'education' },
    { name: 'Experience', href: '#experience', id: 'experience' },
    { name: 'Projects', href: '#projects', id: 'projects' },
    { name: 'Contact', href: '#contact', id: 'contact' },
  ]

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-primary/90 backdrop-blur-sm shadow-lg' : 'bg-transparent'}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <a href="#home" className="text-2xl font-bold text-secondary"></a>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden md:block">
            <ul className="flex items-center space-x-8">
              {navLinks.map((link, index) => (
                <motion.li
                  key={link.name}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                >
                  <a
                    href={link.href}
                    className={`nav-link transition-all duration-200 ${
                      activeSection === link.id
                        ? 'text-light-accent dark:text-dark-accent border-b-2 border-light-accent dark:border-dark-accent pb-0.5'
                        : ''
                    }`}
                  >
                    {link.name}
                  </a>
                </motion.li>
              ))}

              {/* Schedule a Call button */}
              <motion.li
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: navLinks.length * 0.1 }}
              >
                <a
                  href="https://calendly.com/satyatorati5"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg border border-highlight text-highlight hover:bg-highlight hover:text-white transition-all duration-200 text-sm font-semibold"
                >
                  <span className="pulse-dot" style={{ width: '7px', height: '7px', marginRight: '4px' }} />
                  <span className="hidden sm:inline">Schedule a Call</span>
                  <span className="sm:hidden">📅</span>
                </a>
              </motion.li>

              {/* Resume button */}
              <motion.li
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: (navLinks.length + 1) * 0.1 }}
              >
                <a
                  href="https://drive.google.com/file/d/1d6PjnwLmP1C7sGzhow6BjXvTzZ-uOr_9/view?usp=drive_link"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary"
                >
                  Resume
                </a>
              </motion.li>
            </ul>
          </nav>

          {/* Mobile Navigation Toggle */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-textPrimary focus:outline-none"
            >
              {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
          className="md:hidden bg-primary/95 backdrop-blur-sm"
        >
          <div className="container mx-auto px-4 py-4">
            <ul className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className={`block py-2 nav-link ${
                      activeSection === link.id
                        ? 'text-light-accent dark:text-dark-accent font-semibold'
                        : ''
                    }`}
                    onClick={() => setIsOpen(false)}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href="https://calendly.com/satyatorati5"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-highlight text-highlight hover:bg-highlight hover:text-white transition-all duration-200 text-sm font-semibold"
                  onClick={() => setIsOpen(false)}
                >
                  📅 Schedule a Call
                </a>
              </li>
              <li>
                <a
                  href="https://drive.google.com/file/d/1YxuNu_QwBktfsJq1nODrt3TNJwtd5veX/view?usp=drive_link"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block btn-primary"
                  onClick={() => setIsOpen(false)}
                >
                  Resume
                </a>
              </li>
            </ul>
          </div>
        </motion.div>
      )}
    </header>
  )
}

export default Navbar
