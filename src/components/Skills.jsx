import { motion } from 'framer-motion'
import { 
  FiCode, 
  FiDatabase, 
  FiLayout, 
  FiServer, 
  FiTool, 
  FiGlobe 
} from 'react-icons/fi'

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend",
      icon: <FiLayout size={24} />,
      skills: ["JavaScript (ES6+)", "TypeScript", "React", "Redux Toolkit", "HTML5", "CSS3", "Tailwind CSS", "Zustand"]
    },
    {
      title: "Backend",
      icon: <FiServer size={24} />,
      skills: ["Node.js", "Express.js", "RESTful APIs", "Flask", "Microservices", "JWT", "Socket.io"]
    },
    {
      title: "Database",
      icon: <FiDatabase size={24} />,
      skills: ["MongoDB", "PostgreSQL", "MySQL"]
    },
    {
      title: "Programming",
      icon: <FiCode size={24} />,
      skills: ["JavaScript", "TypeScript", "Python", "Java", "SQL"]
    },
    {
      title: "DevOps",
      icon: <FiTool size={24} />,
      skills: ["AWS EC2", "Docker", "CI/CD Pipelines", "Kubernetes", "Git", "Jenkins"]
    },
    {
      title: "Concepts",
      icon: <FiGlobe size={24} />,
      skills: ["OOP", "Data Structures", "Agile", "SDLC", "Computer Security", "Operating Systems"]
    }
  ]

  return (
    <section id="skills" className="py-20">
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="section-heading"
      >
        Skills & Technologies
      </motion.h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {skillCategories.map((category, index) => (
          <motion.div
            key={category.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-primary/30 border border-textSecondary/20 rounded-lg p-6 hover:border-secondary/50 transition-all duration-300"
          >
            <div className="flex items-center mb-4">
              <div className="text-secondary mr-3">{category.icon}</div>
              <h3 className="text-xl font-semibold">{category.title}</h3>
            </div>
            <ul className="space-y-2">
              {category.skills.map((skill) => (
                <li key={skill} className="text-textSecondary flex items-center">
                  <span className="text-secondary mr-2">▹</span> {skill}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

export default Skills