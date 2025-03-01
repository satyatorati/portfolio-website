import { motion } from 'framer-motion'

const Education = () => {
  const educationDetails = [
    {
      degree: "Master of Science in Computer Science",
      university: "The State University of New York (SUNY), Buffalo, NY",
      logo: "src/assets/ublogo.jpg", 
      duration: "Jan 2024 – May 2025",
      gpa: "GPA: 3.48/4.0",
      coursework: [
        "Operating Systems",
        "Computer Security",
        "Computer Vision",
        "Data Structures & Algorithms"
      ]
    },
    {
      degree: "Bachelor of Engineering in Computer Science",
      university: "Anil Neerukonda Institute of Technology and Sciences (ANITS), India",
      logo: "src/assets/anitslogo.jpg", 
      duration: "Jun 2018 – May 2021",
      gpa: "GPA: 8.0/10.0",
      coursework: [
        "Database Management Systems",
        "Software Engineering",
        "Object-Oriented Programming",
        "Web Technologies"
      ]
    }
  ]

  return (
    <section id="education" className="py-20">
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="section-heading"
      >
        Education
      </motion.h2>

      <div className="space-y-10">
        {educationDetails.map((edu, index) => (
          <motion.div 
            key={index} 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className="bg-primary/10 rounded-lg p-6 shadow-md hover:shadow-lg transition-all duration-300"
          >
            {/* University Details with Logo */}
            <div className="flex justify-between items-center mb-4">
              <div className="flex items-center">
                {/* University Logo */}
                <img 
                  src={edu.logo} 
                  alt={edu.university} 
                  className="w-12 h-12 mr-4 object-contain" 
                />
                <div>
                  <h3 className="text-xl font-semibold">{edu.degree}</h3>
                  <p className="text-secondary">{edu.university}</p>
                </div>
              </div>
              {/* Dates & GPA on the Right */}
              <p className="text-textSecondary text-right">
                {edu.duration} <br /> {edu.gpa}
              </p>
            </div>

            {/* Courses displayed in a single line */}
            <p className="text-secondary font-medium">Relevant Coursework:</p>
            <p className="text-textSecondary">
              {edu.coursework.join(", ")}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

export default Education