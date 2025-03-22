import React from 'react';
import { Calendar } from 'lucide-react';
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
      <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 h-full w-0.5 bg-purple-300"></div>

      {experiences.map((experience, index) => {
        const [ref, inView] = useInView({
          triggerOnce: true,
          threshold: 0.1,
        });

        return (
          <motion.div
            ref={ref}
            key={index}
            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className={`relative flex items-center mb-12 ${
              index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
            }`}
          >
            {/* Timeline Point */}
            <div className="absolute left-4 md:left-1/2 transform -translate-y-1/2 md:-translate-x-1/2 w-4 h-4 bg-purple-600 rounded-full"></div>

            {/* Content */}
            <div className={`ml-12 md:ml-0 md:w-1/2 ${
              index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'
            }`}>
              <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-center mb-2 text-purple-600">
                  <Calendar size={16} className="mr-2" />
                  <span>{experience.period}</span>
                </div>
                <h3 className="text-xl font-bold mb-1 text-gray-800">{experience.title}</h3>
                <h4 className="text-purple-600 mb-3">{experience.company}</h4>
                <p className="text-gray-700">{experience.description}</p>
              </div>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
};

export default Timeline;