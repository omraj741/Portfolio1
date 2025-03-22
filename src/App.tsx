import React from 'react';
import { Github, Linkedin, Mail, ExternalLink, Calendar } from 'lucide-react';
import Timeline from './components/Timeline';

function App() {
  const experiences = [
    {
      title: "Senior Software Engineer",
      company: "Tech Solutions Inc.",
      period: "2021 - Present",
      description: "Led development of cloud-native applications using React and Node.js. Mentored junior developers and implemented CI/CD pipelines."
    },
    {
      title: "Full Stack Developer",
      company: "Digital Innovations",
      period: "2018 - 2021",
      description: "Developed and maintained multiple web applications. Improved application performance by 40%."
    },
    {
      title: "Junior Developer",
      company: "StartUp Hub",
      period: "2016 - 2018",
      description: "Built responsive web applications and contributed to open-source projects."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center bg-gradient-to-r from-blue-600 to-indigo-800">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">Om Raj</h1>
          <p className="text-xl md:text-2xl mb-8">Full Stack Developer</p>
          <div className="flex justify-center space-x-6">
            <a href="https://github.com/omraj741" className="hover:text-blue-300 transition-colors">
              <Github size={24} />
            </a>
            <a href="https://www.linkedin.com/in/om-raj-01b63b227" className="hover:text-blue-300 transition-colors">
              <Linkedin size={24} />
            </a>
            <a href="rajom741@gmail.com" className="hover:text-blue-300 transition-colors">
              <Mail size={24} />
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-4 md:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">About Me</h2>
          <div className="bg-white rounded-lg shadow-lg p-8">
            <p className="text-gray-700 leading-relaxed mb-6">
              I'm a passionate Full Stack Developer with over 5 years of experience in building web applications.
              I specialize in React, Node.js, and cloud technologies. When I'm not coding, you can find me
              contributing to open-source projects or writing technical blog posts.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div className="p-4 bg-gray-50 rounded-lg">
                <h3 className="font-bold text-lg mb-2">Frontend</h3>
                <p className="text-gray-600">React, TypeScript, Tailwind CSS</p>
              </div>
              <div className="p-4 bg-gray-50 rounded-lg">
                <h3 className="font-bold text-lg mb-2">Backend</h3>
                <p className="text-gray-600">Node.js, Express, PostgreSQL</p>
              </div>
              <div className="p-4 bg-gray-50 rounded-lg">
                <h3 className="font-bold text-lg mb-2">Tools</h3>
                <p className="text-gray-600">Git, Docker, AWS</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-20 px-4 md:px-8 bg-gray-100">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Experience</h2>
          <Timeline experiences={experiences} />
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20 px-4 md:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Featured Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[1, 2].map((project) => (
              <div key={project} className="bg-white rounded-lg shadow-lg overflow-hidden">
                <img
                  src={`https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80`}
                  alt="Project Preview"
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">Project {project}</h3>
                  <p className="text-gray-600 mb-4">
                    A full-stack application built with React and Node.js.
                    Features include real-time updates and cloud integration.
                  </p>
                  <div className="flex justify-between items-center">
                    <div className="flex space-x-2">
                      <span className="px-2 py-1 bg-gray-100 rounded text-sm">React</span>
                      <span className="px-2 py-1 bg-gray-100 rounded text-sm">Node.js</span>
                    </div>
                    <a href="#" className="text-blue-600 hover:text-blue-800 flex items-center">
                      View Project <ExternalLink size={16} className="ml-1" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4 md:px-8 bg-gray-100">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-12">Get In Touch</h2>
          <p className="text-gray-700 mb-8">
            I'm always open to discussing new projects and opportunities.
          </p>
          <a
            href="mailto:contact@example.com"
            className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            <Mail size={20} className="mr-2" />
            Send me an email
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 text-center text-gray-600 border-t">
        <p>© 2024 Om Raj. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;