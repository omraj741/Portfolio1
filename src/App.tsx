import React from 'react';
import { Github, Linkedin, Mail, ExternalLink } from 'lucide-react';
import Timeline from './components/Timeline';
import { motion } from 'framer-motion';

function App() {
  const experiences = [
    {
      title: "Creative Head",
      company: "Startup Society",
      period: "Jan 2024 - Present",
      description: "Leading branding initiatives, developing business strategies, and managing video & poster editing for the organization."
    },
    {
      title: "Data Science Virtual Intern",
      company: "British Airways (Forage)",
      period: "2023",
      description: "Worked on data science projects focusing on data cleaning and visualization using Python."
    },
    {
      title: "Android Developer Intern",
      company: "AICTE Google",
      period: "2023",
      description: "Participated in Android development projects and gained hands-on experience with mobile app development."
    }
  ];

  const projects = [
    {
      title: "Student Course Management System",
      description: "Developed a comprehensive system using Python Tkinter & SQLite for efficient course management and student tracking.",
      technologies: ["Python", "Tkinter", "SQLite"]
    },
    {
      title: "Internship Management System",
      description: "Built a robust platform using Maven & Spring Boot to streamline internship processes and management.",
      technologies: ["Maven", "Spring Boot", "Java"]
    }
  ];

  const certifications = [
    "Data Science (Forage) – Python, data cleaning, visualization",
    "Meta Foundations of AR – Augmented Reality design & development",
    "Java (HackerRank Basic Certification)",
    "Python Programming (AppWars Technologies)",
    "AI Associate (Salesforce)"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center bg-gradient-to-r from-purple-900 via-purple-800 to-indigo-900">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="text-white md:w-1/2 text-left mb-8 md:mb-0"
            >
              <h1 className="text-5xl md:text-7xl font-bold mb-6">Om Raj</h1>
              <p className="text-xl md:text-2xl mb-8 text-purple-200">Full Stack Developer</p>
              <div className="flex space-x-6">
                <a href="https://github.com/" target="_blank" rel="noopener noreferrer" className="hover:text-purple-300 transition-colors">
                  <Github size={24} />
                </a>
                <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer" className="hover:text-purple-300 transition-colors">
                  <Linkedin size={24} />
                </a>
                <a href="mailto:contact@example.com" className="hover:text-purple-300 transition-colors">
                  <Mail size={24} />
                </a>
              </div>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="md:w-1/2 flex justify-center"
            >
              <img 
                src="https://raw.githubusercontent.com/Human/portfolio/main/profile.jpg" 
                alt="Om Raj"
                className="rounded-full w-64 h-64 object-cover border-4 border-purple-400 shadow-2xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-4 md:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-purple-900">About Me</h2>
          <div className="bg-white rounded-lg shadow-xl p-8 hover:shadow-2xl transition-shadow duration-300">
            <p className="text-gray-700 leading-relaxed mb-6">
              I'm a Computer Science Engineering student at K.L University, Vijayawada (2023-26), with a strong foundation from my Diploma in Computer Science Engineering at Galgotias University (2020-23). I'm passionate about full-stack development, data science, and AI.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div className="p-4 bg-purple-50 rounded-lg hover:bg-purple-100 transition-colors duration-300">
                <h3 className="font-bold text-lg mb-2 text-purple-900">Languages</h3>
                <p className="text-purple-700">Python, C, JavaScript, SQL, HTML/CSS</p>
              </div>
              <div className="p-4 bg-purple-50 rounded-lg hover:bg-purple-100 transition-colors duration-300">
                <h3 className="font-bold text-lg mb-2 text-purple-900">Frameworks</h3>
                <p className="text-purple-700">MERN Stack, Spring Boot</p>
              </div>
              <div className="p-4 bg-purple-50 rounded-lg hover:bg-purple-100 transition-colors duration-300">
                <h3 className="font-bold text-lg mb-2 text-purple-900">Tools</h3>
                <p className="text-purple-700">VS Code, Azure, Git, Figma</p>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Education Section */}
      <section className="py-20 px-4 md:px-8 bg-purple-50">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-purple-900">Education</h2>
          <div className="space-y-8">
            {[
              {
                title: "B-Tech in Computer Science Engineering",
                institution: "K.L University, Vijayawada",
                period: "2023-26"
              },
              {
                title: "Diploma in Computer Science Engineering",
                institution: "Galgotias University",
                period: "2020-23"
              },
              {
                title: "Class 10 (CBSE)",
                institution: "Delhi Public School, Darbhanga",
                period: "2010-20"
              }
            ].map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <h3 className="text-xl font-bold text-purple-900">{edu.title}</h3>
                <p className="text-purple-600">{edu.institution} ({edu.period})</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Experience Section */}
      <section className="py-20 px-4 md:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-purple-900">Experience</h2>
          <Timeline experiences={experiences} />
        </motion.div>
      </section>

      {/* Projects Section */}
      <section className="py-20 px-4 md:px-8 bg-purple-50">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-purple-900">Featured Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-purple-900">{project.title}</h3>
                  <p className="text-purple-700 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, i) => (
                      <span key={i} className="px-2 py-1 bg-purple-100 text-purple-700 rounded text-sm">{tech}</span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Certifications Section */}
      <section className="py-20 px-4 md:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-purple-900">Certifications</h2>
          <div className="bg-white rounded-lg shadow-xl p-8">
            <ul className="space-y-4">
              {certifications.map((cert, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center"
                >
                  <span className="w-2 h-2 bg-purple-600 rounded-full mr-4"></span>
                  <span className="text-purple-700">{cert}</span>
                </motion.li>
              ))}
            </ul>
          </div>
        </motion.div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4 md:px-8 bg-purple-50">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-purple-900">Get In Touch</h2>
          <p className="text-purple-700 mb-8">
            I'm always open to discussing new opportunities and collaborations.
          </p>
          <a
            href="mailto:contact@example.com"
            className="inline-flex items-center px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
          >
            <Mail size={20} className="mr-2" />
            Send me an email
          </a>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="py-8 text-center text-purple-600 border-t border-purple-100">
        <p>© 2024 Om Raj. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;