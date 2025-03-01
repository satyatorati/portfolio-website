import { motion } from 'framer-motion'

const About = () => {
  return (
    <section id="about" className="py-20">
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="section-heading"
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
          <p className="text-textSecondary mb-4">
            Hello! I'm Satyanarayana Torati, a passionate software developer with a strong foundation in modern web technologies. 
            I'm currently pursuing my Master's in Computer Science at SUNY Buffalo, expanding my knowledge in Operating Systems, Computer Security, and more.
          </p>
          
          <p className="text-textSecondary mb-4">
            With over 2 years of professional experience at Accenture, I've developed expertise in building robust web applications, 
            optimizing performance, and implementing efficient solutions for complex problems.
          </p>
          
          <p className="text-textSecondary mb-4">
            My goal is to create digital experiences that are not only functional and efficient but also accessible and user-friendly. 
            I'm passionate about learning new technologies and applying them to solve real-world challenges.
          </p>
          
          
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="md:col-span-2 relative"
        >
          <div className="relative w-full max-w-md mx-auto">
          <div className="aspect-square bg-gray-300 rounded overflow-hidden relative z-10">
                {/* Replace with your actual image */}
                <img 
                  src="/assets/profilepic.jpeg" 
                  alt="Your Photo" 
                  className="w-full h-full object-cover" 
                />
              </div>
            <div className="absolute top-4 left-4 w-full h-full border-2 border-secondary rounded z-0"></div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default About