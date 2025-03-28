import React from 'react';
import { Calendar, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface Experience {
  title: string;
  company: string;
  period: string;
  description: string;
}

interface TimelineProps {
  experiences: Experience[];
}

const Timeline: React.FC<TimelineProps> = ({ experiences }) => {
  return (
    <div className="relative">
      {/* Vertical Line */}
      <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-[#FF0080] via-[#7928CA] to-[#FF0080] glow"></div>

      {experiences.map((experience, index) => {
        const [ref, inView] = useInView({
          triggerOnce: true,
          threshold: 0.1,
        });

        return (
          <motion.div
            ref={ref}
            key={index}
            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50, y: 50 }}
            animate={inView ? { opacity: 1, x: 0, y: 0 } : {}}
            transition={{ 
              duration: 0.8,
              delay: index * 0.2,
              type: "spring",
              stiffness: 100,
              damping: 12
            }}
            className={`relative flex items-center mb-12 ${
              index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
            }`}
          >
            {/* Timeline Point */}
            <motion.div 
              initial={{ scale: 0 }}
              animate={inView ? { scale: 1 } : {}}
              transition={{ duration: 0.5, delay: index * 0.2 + 0.3 }}
              className="absolute left-4 md:left-1/2 transform -translate-y-1/2 md:-translate-x-1/2 w-4 h-4 bg-[#FF0080] rounded-full glow animate-ping-slow"
            />

            {/* Content */}
            <div className={`ml-12 md:ml-0 md:w-1/2 ${
              index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'
            }`}>
              <motion.div 
                whileHover={{ scale: 1.02 }}
                className="glass p-6 rounded-lg shadow-neon hover:shadow-neon-xl hover-glow transition-all duration-500"
              >
                <div className="flex items-center mb-2 text-[#FF0080]">
                  <Calendar size={16} className="mr-2 animate-pulse-slow" />
                  <span className="glow-text">{experience.period}</span>
                </div>
                <h3 className="text-xl font-bold mb-1 text-[#FF0080] glow-text animated-underline">
                  {experience.title}
                </h3>
                <h4 className="text-gray-300 mb-3 flex items-center">
                  <ChevronRight className="w-4 h-4 text-[#FF0080] mr-1" />
                  {experience.company}
                </h4>
                <p className="text-gray-400 hover:text-gray-300 transition-colors duration-300">
                  {experience.description}
                </p>
              </motion.div>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
};

export default Timeline;