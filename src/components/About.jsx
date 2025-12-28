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
            Results-driven Software Engineer with experience in designing, building, and deploying scalable full-stack web applications using JavaScript, React, Node.js, and AWS. Proven track record of delivering high-performance systems in eCommerce and real-time platforms, with strong expertise in RESTful API development, microservices, and system design.
          </p>
          
          <p className="text-light-textSecondary dark:text-dark-textSecondary text-lg mb-6">
            Adept at Agile development, end-to-end testing, and CI/CD automation using Docker, Kubernetes, and GitHub Actions. Passionate about writing clean, maintainable code and building intuitive user experiences that drive business outcomes. Actively expanding skills through hands-on projects and advanced coursework in computer science.
          </p>
          
          <p className="text-light-textSecondary dark:text-dark-textSecondary text-lg mb-6">
            At Accenture, I engineered scalable eCommerce backend services handling peak traffic, optimized database performance, and achieved 99.99% uptime. At University at Buffalo, I developed a MERN-based gym reservation platform supporting 500+ daily bookings with real-time WebSocket updates. My work spans from microservices architecture to AI integration with LLMs, always focused on delivering robust, cloud-native solutions.
          </p>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="md:col-span-2 relative flex items-center justify-center md:justify-end"
        >
          <div className="relative w-full max-w-sm mx-auto md:mx-0">
            <div className="aspect-square rounded-lg overflow-hidden relative z-10 shadow-xl">
              <img 
                src="/assets/profilepic.png" 
                alt="Satyanarayana Torati" 
                className="w-full h-full object-cover object-center" 
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