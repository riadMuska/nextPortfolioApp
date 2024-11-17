
import React from 'react';

import { FaVuejs, FaJava, FaMicrosoft, FaGithub } from 'react-icons/fa'; // Importa le icone necessarie
import { SiCsharp, SiNextdotjs, SiTailwindcss, SiTypescript } from 'react-icons/si'; // Importa l'icona di TypeScript

const skills = [
  { name: 'Typescript', icon: <SiTypescript /> },
  { name: 'Vue.js', icon: <FaVuejs /> },
  { name: 'C#',  icon: <SiCsharp /> },
  { name: 'Java', icon: <FaJava /> },
  { name: 'Azure', icon: <FaMicrosoft /> },
  { name: 'Tailwind', icon: <SiTailwindcss /> },
  { name: 'GitHub', icon: <FaGithub /> },
  { name: 'Next.js', icon: <SiNextdotjs /> },
];

const Skills: React.FC = () => {
  return (
    <section className="py-20 bg-gray-100 dark:bg-gray-800">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-8">Skills</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {skills.map((skill) => (
            <div key={skill.name} className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-lg flex flex-col items-center">
              <div className="text-4xl mb-4 text-blue-500 dark:text-blue-300">{skill.icon}</div>
              <h3 className="text-2xl font-semibold mb-2">{skill.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;