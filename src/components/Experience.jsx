import { motion } from 'framer-motion'
import { useState } from 'react'

const Experience = () => {
  const [activeTab, setActiveTab] = useState(0)

  const experiences = [
    {
      company: "Accenture",
      logo: "/assets/accenture.png",  
      position: "Application Developer",
      location: "Hyderabad, India",
      duration: "Jul 2021 – Dec 2023",
      responsibilities: [
        "Resolved 150+ critical bugs in a high-traffic eCommerce platform, ensuring 99.9% uptime by optimizing React frontend and Java backend services.",
        "Reduced database response times by 30% and checkout latency by 20% through query optimization and indexing in PostgreSQL.",
        "Automated log analysis using Python scripts, cutting incident resolution time by 25% during peak traffic events (e.g., Black Friday).",
        "Revamped React-based checkout workflows, decreasing user errors by 25% and improving customer satisfaction scores by 15%.",
        "Architected CI/CD pipelines (Jenkins, Docker) to streamline deployments, reducing deployment failures by 20%.",
        "Mentored 10+ team members, reducing onboarding time by 30% through detailed documentation in Confluence."
      ]
    }
  ]

  return (
    <section id="experience" className="py-20">
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="section-heading"
      >
        Work Experience
      </motion.h2>
      
      <div className="flex flex-col md:flex-row gap-6">
        {/* Unified experience card */}
        {experiences.map((exp, index) => (
          <motion.div 
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-primary/10 rounded-lg p-6 shadow-md hover:shadow-lg transition-all duration-300"
          >
            <div className="flex justify-between items-center mb-4">
              {/* Logo, company name, role, and work period */}
              <div className="flex items-center">
                <img 
                  src={exp.logo} 
                  alt={exp.company} 
                  className="w-12 h-12 mr-4 object-contain" 
                  style={{ width: "100px", height: "70px" }} 
                />
                <div>
                  <h3 className="text-xl font-semibold">{exp.position}</h3>
                  <p className="text-secondary">{exp.company}</p>
                </div>
              </div>
              <p className="text-textSecondary">{exp.duration}</p>
            </div>
            {/* Responsibilities list with custom bullet style */}
            <ul className="space-y-3 pl-5">
  {exp.responsibilities.map((responsibility, idx) => {
    const icons = ["💡", "🚀", "⚡", "🔍", "🔧", "📘"]; // Different icons for each point

    return (
      <li key={idx} className={`flex items-start ${idx === 0 ? "mt-4" : "mt-2"}`}>
        <span className="text-secondary mr-3 text-lg">{icons[idx % icons.length]}</span>
        <span className="text-textSecondary">{responsibility}</span>
      </li>
    );
  })}
</ul>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

export default Experience