import React from 'react';
import { Calendar } from 'lucide-react';

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
      <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 h-full w-0.5 bg-gray-300"></div>

      {experiences.map((experience, index) => (
        <div
          key={index}
          className={`relative flex items-center mb-12 ${
            index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
          }`}
        >
          {/* Timeline Point */}
          <div className="absolute left-4 md:left-1/2 transform -translate-y-1/2 md:-translate-x-1/2 w-4 h-4 bg-blue-600 rounded-full"></div>

          {/* Content */}
          <div className={`ml-12 md:ml-0 md:w-1/2 ${
            index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'
          }`}>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="flex items-center mb-2 text-gray-600">
                <Calendar size={16} className="mr-2" />
                <span>{experience.period}</span>
              </div>
              <h3 className="text-xl font-bold mb-1">{experience.title}</h3>
              <h4 className="text-gray-600 mb-3">{experience.company}</h4>
              <p className="text-gray-700">{experience.description}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Timeline;