import React from 'react';
import { Github, Linkedin, Mail, ExternalLink, Code } from 'lucide-react';
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
    },
    {
      title: "E-commerce Platform",
      description: "Created a full-stack e-commerce platform with user authentication, product management, and payment integration.",
      technologies: ["React", "Node.js", "MongoDB", "Stripe"]
    },
    {
      title: "AI Image Generation App",
      description: "Developed an AI-powered image generation application using OpenAI's DALL-E API and modern web technologies.",
      technologies: ["Next.js", "OpenAI API", "Tailwind CSS"]
    }
  ];

  const codingProfiles = [
    {
      platform: "GeeksforGeeks",
      username: "omraj741",
      solved: "50+ Problems",
      url: "https://www.geeksforgeeks.org/user/omraj741/"
    },
    {
      platform: "CodeChef",
      username: "klu_2200039004",
      rating: "1★",
      url: "https://www.codechef.com/users/klu_2200039004"
    },
    {
      platform: "Codeforces",
      username: "rajom741",
      rating: "Specialist",
      url: "https://codeforces.com/profile/rajom741"
    },
    {
      platform: "LeetCode",
      username: "klu_2200039004",
      solved: "150+ Problems",
      url: "https://leetcode.com/u/klu_2200039004/"
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
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center bg-gradient-to-r from-black via-gray-900 to-black py-20">
        <div className="container mx-auto px-6 md:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-12">
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ 
                duration: 1,
                type: "spring",
                stiffness: 100,
                damping: 15
              }}
              className="text-white md:w-1/2 text-left"
            >
              <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-[#FF0080] via-[#7928CA] to-[#FF0080] text-transparent bg-clip-text">Om Raj</h1>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.8 }}
                className="text-xl md:text-2xl mb-8 text-gray-300"
              >
                Full Stack Developer
              </motion.p>
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.8 }}
                className="flex space-x-6"
              >
                <a href="https://github.com/omraj741" target="_blank" rel="noopener noreferrer" 
                   className="text-[#FF0080] hover:text-[#7928CA] transition-colors duration-300">
                  <Github size={24} />
                </a>
                <a href="https://www.linkedin.com/in/om-raj-01b63b227" target="_blank" rel="noopener noreferrer" 
                   className="text-[#7928CA] hover:text-[#FF0080] transition-colors duration-300">
                  <Linkedin size={24} />
                </a>
                <a href="mailto:rajom741@gmail.com" 
                   className="text-[#FF0080] hover:text-[#7928CA] transition-colors duration-300">
                  <Mail size={24} />
                </a>
                </motion.div>
            </motion.div>
            <div className="md:w-1/2 flex justify-center">
              <img 
                src="./src/assets/new.jpg"
                alt="Om Raj"
                className="w-[500px] h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </section>
      {/* Coding Profiles Section */}
      <section className="py-24 px-6 md:px-8 border-b border-[#7928CA]/20">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 bg-gradient-to-r from-[#FF0080] via-[#7928CA] to-[#FF0080] text-transparent bg-clip-text">
            Coding Profiles
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {codingProfiles.map((profile, index) => (
              <motion.a
                href={profile.url}
                target="_blank"
                rel="noopener noreferrer"
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ 
                  scale: 1.05,
                  transition: { duration: 0.2 }
                }}
                className="bg-gray-900 p-8 rounded-lg shadow-lg hover:shadow-xl hover:shadow-[#FF0080]/10 transition-all duration-300 border border-[#7928CA]/20"
              >
                <div className="flex items-center mb-4">
                  <Code className="text-[#FF0080] mr-2" size={20} />
                  <h3 className="text-xl font-bold text-[#7928CA]">{profile.platform}</h3>
                </div>
                <p className="text-gray-400">{profile.username}</p>
                <p className="text-[#FF0080]">{profile.rating || profile.solved}</p>
              </motion.a>
            ))}
          </div>
        </motion.div>
      </section>

      {/* About Section */}
      <section className="py-24 px-6 md:px-8 border-b border-[#7928CA]/20">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 bg-gradient-to-r from-[#FF0080] via-[#7928CA] to-[#FF0080] text-transparent bg-clip-text">
            About Me
          </h2>
          <motion.div 
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
            className="bg-gray-900 rounded-lg shadow-xl p-8 hover:shadow-2xl hover:shadow-[#FF0080]/10 transition-all duration-300 border border-[#7928CA]/20"
          >
            <p className="text-gray-300 leading-relaxed mb-8 text-lg">
              I'm a Computer Science Engineering student at K.L University, Vijayawada (2023-26), with a strong foundation from my Diploma in Computer Science Engineering at Galgotias University (2020-23). I'm passionate about full-stack development, data science, and AI.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { title: "Languages", content: "Python, C, JavaScript, SQL, HTML/CSS" },
                { title: "Frameworks", content: "MERN Stack, Spring Boot" },
                { title: "Tools", content: "VS Code, Azure, Git, Figma" }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.2 }}
                  className="p-6 bg-black rounded-lg border border-[#7928CA]/20 hover:border-[#FF0080]/50 transition-all duration-300"
                >
                  <h3 className="font-bold text-xl mb-4 bg-gradient-to-r from-[#FF0080] to-[#7928CA] text-transparent bg-clip-text">
                    {item.title}
                  </h3>
                  <p className="text-gray-300">{item.content}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* Education Section */}
      <section className="py-24 px-6 md:px-8 border-b border-[#7928CA]/20">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 bg-gradient-to-r from-[#FF0080] via-[#7928CA] to-[#FF0080] text-transparent bg-clip-text">
            Education
          </h2>
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
                whileHover={{ scale: 1.02 }}
                className="bg-gray-900 p-8 rounded-lg shadow-lg hover:shadow-xl hover:shadow-[#FF0080]/10 transition-all duration-300 border border-[#7928CA]/20"
              >
                <h3 className="text-2xl font-bold mb-3 bg-gradient-to-r from-[#FF0080] to-[#7928CA] text-transparent bg-clip-text">
                  {edu.title}
                </h3>
                <p className="text-gray-300 text-lg">{edu.institution} ({edu.period})</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Experience Section */}
      <section className="py-24 px-6 md:px-8 border-b border-[#7928CA]/20">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 bg-gradient-to-r from-[#FF0080] via-[#7928CA] to-[#FF0080] text-transparent bg-clip-text">
            Experience
          </h2>
          <Timeline experiences={experiences} />
        </motion.div>
      </section>

      {/* Projects Section */}
      <section className="py-24 px-6 md:px-8 border-b border-[#7928CA]/20">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 bg-gradient-to-r from-[#FF0080] via-[#7928CA] to-[#FF0080] text-transparent bg-clip-text">
            Featured Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
                className="bg-gray-900 rounded-lg shadow-lg overflow-hidden hover:shadow-xl hover:shadow-[#FF0080]/10 transition-all duration-300 border border-[#7928CA]/20"
              >
                <div className="p-8">
                  <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-[#FF0080] to-[#7928CA] text-transparent bg-clip-text">
                    {project.title}
                  </h3>
                  <p className="text-gray-300 mb-6 text-lg">{project.description}</p>
                  <div className="flex flex-wrap gap-3">
                    {project.technologies.map((tech, i) => (
                      <span key={i} className="px-4 py-2 bg-black text-[#FF0080] rounded-lg text-sm border border-[#7928CA]/20">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Certifications Section */}
      <section className="py-24 px-6 md:px-8 border-b border-[#7928CA]/20">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 bg-gradient-to-r from-[#FF0080] via-[#7928CA] to-[#FF0080] text-transparent bg-clip-text">
            Certifications
          </h2>
          <motion.div 
            whileHover={{ scale: 1.02 }}
            className="bg-gray-900 rounded-lg shadow-xl p-8 border border-[#7928CA]/20"
          >
            <ul className="space-y-6">
              {certifications.map((cert, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center"
                >
                  <span className="w-3 h-3 bg-gradient-to-r from-[#FF0080] to-[#7928CA] rounded-full mr-4"></span>
                  <span className="text-gray-300 text-lg">{cert}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </motion.div>
      </section>

      {/* Contact Section */}
      <section className="py-24 px-6 md:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-12 bg-gradient-to-r from-[#FF0080] via-[#7928CA] to-[#FF0080] text-transparent bg-clip-text">
            Get In Touch
          </h2>
          <p className="text-gray-300 mb-8 text-lg">
            I'm always open to discussing new opportunities and collaborations.
          </p>
          <motion.a
            href="mailto:rajom741@gmail.com"
            whileHover={{ scale: 1.05 }}
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-[#FF0080] to-[#7928CA] text-white rounded-lg transition-all duration-300 font-semibold text-lg"
          >
            <Mail size={24} className="mr-3" />
            Send me an email
          </motion.a>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 text-center text-gray-400 border-t border-[#7928CA]/20">
        <p className="text-lg">© 2024 Om Raj. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;