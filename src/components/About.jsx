import { motion } from 'framer-motion'

const About = () => {
  return (
    <section id="about" className="py-20">
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-light-text via-light-accent to-highlight dark:from-dark-text dark:via-dark-accent dark:to-highlight bg-clip-text text-transparent"
      >
        About Me
      </motion.h2>
      
      <div className="grid grid-cols-1 md:grid-cols-5 gap-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="md:col-span-3"
        >
          <p className="text-light-textSecondary dark:text-dark-textSecondary text-lg mb-6">
          Hello! I'm Satyanarayana Torati, a Software Developer with a strong foundation in full-stack development, system design, and scalable software solutions. I'm currently pursuing my Master's in Computer Science at SUNY Buffalo, where I'm expanding my expertise in Data Structures, Algorithms, Databases, and Computer Vision.
          </p>
          
          <p className="text-light-textSecondary dark:text-dark-textSecondary text-lg mb-6">
          With over 3 years of experience at Accenture, I contributed to the optimization of large-scale eCommerce platforms, resolving critical issues, and improving performance. My expertise spans JavaScript, React, Node.js, Python, SQL, AWS, and Cloud Technologies, and I'm passionate about designing efficient, reliable, and scalable systems.
          </p>
          
          <p className="text-light-textSecondary dark:text-dark-textSecondary text-lg mb-6">
          I thrive on solving complex engineering challenges, whether it's developing high-performance applications, optimizing backend services, or implementing intelligent automation. I am always eager to explore new technologies and build solutions that are impactful, efficient, and user-centric.
          </p>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="md:col-span-2 relative"
        >
          <div className="relative w-full max-w-sm mx-auto">
            <div className="aspect-square rounded-lg overflow-hidden relative z-10 shadow-xl">
              <img 
                src="/assets/profilepic.jpeg" 
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