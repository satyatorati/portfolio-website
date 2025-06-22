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
            I’m Satyanarayana Torati, a Software Development Engineer with 4+ years of experience in building high-performance, scalable full-stack web applications. My expertise lies in modern technologies like JavaScript, React, Node.js, and AWS, with a passion for creating seamless user experiences and efficient backend systems.
          </p>
          
          <p className="text-light-textSecondary dark:text-dark-textSecondary text-lg mb-6">
            Completed Master’s in Computer Science at SUNY Buffalo, focusing on advanced topics like data structures, algorithms, and system design. At Accenture and the University at Buffalo, I’ve contributed to large-scale eCommerce platforms, cloud-native systems, and real-time reservation solutions using the MERN stack, Docker, Kubernetes, and CI/CD pipelines.
          </p>
          
          <p className="text-light-textSecondary dark:text-dark-textSecondary text-lg mb-6">
            I enjoy solving engineering problems that demand scalability, performance, and reliability—from API optimization and microservices to AI integrations with AWS Bedrock and OpenAI. I’m driven by impact, clean code, and the pursuit of continual learning through real-world projects.
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