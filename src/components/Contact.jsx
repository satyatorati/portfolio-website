import { motion } from 'framer-motion'
import { FiMail, FiPhone, FiMapPin, FiLinkedin } from 'react-icons/fi'

const Contact = () => {
  return (
    <section id="contact" className="py-20">
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="section-heading"
      >
        Get In Touch
      </motion.h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <p className="text-textSecondary mb-8">
            I'm currently looking for new opportunities. Whether you have a question or just want to say hi, 
            I'll do my best to get back to you!
          </p>
          
          <div className="space-y-4">
            <div className="flex items-center">
              <div className="text-secondary mr-4">
                <FiMail size={20} />
              </div>
              <div>
                <h4 className="text-textPrimary font-medium">Email</h4>
                <p className="text-textSecondary">satyatorati9@gmail.com</p>
              </div>
            </div>
            
            <div className="flex items-center">
              <div className="text-secondary mr-4">
                <FiPhone size={20} />
              </div>
              <div>
                <h4 className="text-textPrimary font-medium">Phone</h4>
                <p className="text-textSecondary">+1 (716) 228-1396</p>
              </div>
            </div>
            
            <div className="flex items-center">
              <div className="text-secondary mr-4">
                <FiMapPin size={20} />
              </div>
              <div>
                <h4 className="text-textPrimary font-medium">Location</h4>
                <p className="text-textSecondary">Buffalo, NY</p>
              </div>
            </div>

            {/* Added LinkedIn Section */}
            <div className="flex items-center">
              <div className="text-secondary mr-4">
                <FiLinkedin size={20} />
              </div>
              <div>
                <h4 className="text-textPrimary font-medium">LinkedIn</h4>
                <p className="text-textSecondary">
                  <a 
                    href="https://www.linkedin.com/in/satya-torati/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-secondary"
                  >
                    https://www.linkedin.com/in/satya-torati/
                  </a>
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Contact