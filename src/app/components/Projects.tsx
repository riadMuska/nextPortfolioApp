import React from 'react';

const projects = [
  {
    title: 'Lessons booking',
    description: 'Simple vue.js/flutter project for booking lessons',
    image: '/img/p1.jpg',
    link: 'https://github.com/riadMuska/LessonBookingProject',
  },
  {
    title: 'Blockchain',
    description: 'BlockChain simulations in c',
    image: '/img/p2.jpg',
    link: 'https://github.com/riadMuska/BlockChainSimulation',
  },
  // Aggiungi altri progetti qui
];

const Projects: React.FC = () => {
  return (
    <section className="py-20 bg-gray-100 dark:bg-gray-800">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-8">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div key={project.title} className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-lg">
              <img src={project.image} alt={project.title} className="w-full h-48 object-cover rounded mb-4" />
              <h3 className="text-2xl font-semibold mb-2">{project.title}</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
              <a href={project.link} className="text-blue-500 hover:underline">View Project</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;