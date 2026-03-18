import { motion } from 'framer-motion'
import { FiCode, FiDatabase, FiServer, FiTool, FiCpu } from 'react-icons/fi'

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
      title: "AI & Machine Learning",
      icon: FiCpu,
      skills: ["LangChain", "OpenAI API (GPT-4)", "AWS Bedrock", "RAG (Retrieval-Augmented Generation)", "Vector Databases (Pinecone)", "Prompt Engineering", "Hugging Face"]
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
        viewport={{ once: true, amount: 0 }}
        transition={{ duration: 0.5 }}
        className="text-5xl font-bold text-center mb-12 bg-gradient-to-r from-light-text via-light-accent to-highlight dark:from-dark-text dark:via-dark-accent dark:to-highlight bg-clip-text text-transparent"
      >
        Skills &amp; Technologies
      </motion.h2>

      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0 }}
              transition={{ duration: 0.4, delay: Math.min(index * 0.05, 0.05) }}
              className="bg-light-card/80 dark:bg-dark-card/80 backdrop-blur-sm rounded-xl p-6 border border-light-border dark:border-dark-border hover:shadow-glow transition-all duration-300"
            >
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 rounded-lg bg-light-accent/10 dark:bg-dark-accent/10 flex items-center justify-center">
                  <category.icon className="w-6 h-6 text-light-accent dark:text-dark-accent" />
                </div>
                <h3 className="text-2xl font-bold text-light-text dark:text-dark-text">{category.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="inline-block px-2.5 py-1 text-sm font-medium rounded-md
                      bg-[#F3F4F6] dark:bg-[#374151]
                      text-light-textSecondary dark:text-dark-textSecondary
                      border border-transparent
                      hover:bg-light-accent/10 dark:hover:bg-dark-accent/10
                      hover:text-light-accent dark:hover:text-dark-accent
                      hover:shadow-sm
                      transition-all duration-200 cursor-default"
                  >
                    {skill}
                  </span>
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
