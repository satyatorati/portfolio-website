import { motion } from 'framer-motion'
import { FiCode, FiDatabase, FiServer, FiTool } from 'react-icons/fi'

const Skills = () => {
  const skillCategories = [
    {
      title: "Languages",
      icon: FiCode,
      skills: ["Java 17", "TypeScript", "JavaScript (ES6+)", "SQL", "Python"]
    },
    {
      title: "Frontend",
      icon: FiCode,
      skills: ["React.js", "Angular", "Redux", "HTML5", "CSS3", "Tailwind CSS", "Responsive UI Development"]
    },
    {
      title: "Backend & Frameworks",
      icon: FiServer,
      skills: ["Spring Boot", "Spring Security", "REST & GraphQL APIs", "Flask", "FastAPI", "Microservices Architecture", "Event-Driven Systems", "Redis", "Kafka"]
    },
    {
      title: "Cloud & DevOps",
      icon: FiDatabase,
      skills: ["AWS (EC2, S3, Lambda, API Gateway)", "Docker", "Kubernetes", "Jenkins", "GitHub Actions", "CI/CD Pipelines"]
    },
    {
      title: "Databases",
      icon: FiDatabase,
      skills: ["PostgreSQL", "MySQL", "MongoDB", "Database Design", "Query Optimization", "Transactions"]
    },
    {
      title: "Security",
      icon: FiTool,
      skills: ["OAuth2", "JWT Authentication", "Spring Security", "Secure API Design"]
    },
    {
      title: "Testing",
      icon: FiTool,
      skills: ["JUnit", "Mockito", "Postman", "Unit & Integration Testing"]
    },
    {
      title: "Tools & Practices",
      icon: FiTool,
      skills: ["Git", "Jira", "Confluence", "Agile/Scrum", "SOLID Principles", "Clean Code"]
    },
    {
      title: "Core Concepts",
      icon: FiCode,
      skills: ["Data Structures & Algorithms", "Object-Oriented Design", "System Design & Scalability"]
    }
  ]

  return (
    <section id="skills" className="py-20">
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-5xl font-bold text-center mb-12 bg-gradient-to-r from-light-text via-light-accent to-highlight dark:from-dark-text dark:via-dark-accent dark:to-highlight bg-clip-text text-transparent"
      >
        Skills & Technologies
      </motion.h2>

      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-light-card/80 dark:bg-dark-card/80 backdrop-blur-sm rounded-xl p-6 border border-light-border dark:border-dark-border hover:shadow-glow transition-all duration-300"
            >
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 rounded-lg bg-light-accent/10 dark:bg-dark-accent/10 flex items-center justify-center">
                  <category.icon className="w-6 h-6 text-light-accent dark:text-dark-accent" />
                </div>
                <h3 className="text-2xl font-bold text-light-text dark:text-dark-text">{category.title}</h3>
              </div>
              <div className="space-y-2">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: skillIndex * 0.05 }}
                    className="group"
                  >
                    <div className="flex items-center px-4 py-2.5 rounded-lg hover:bg-light-accent/5 dark:hover:bg-dark-accent/5 transition-all duration-300">
                      <span className="text-lg text-light-accent/70 dark:text-dark-accent/70 mr-2 group-hover:text-light-accent dark:group-hover:text-dark-accent transition-colors duration-300">›</span>
                      <span className="text-base font-medium text-light-textSecondary dark:text-dark-textSecondary group-hover:text-light-accent dark:group-hover:text-dark-accent transition-colors duration-300">
                        {skill}
                      </span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills