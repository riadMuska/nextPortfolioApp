import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="py-20 flex items-center justify-center min-h-screen bg-gray-800 text-white">
      <div className="container mx-auto text-center animate-fade-in">
        <img
          src="img/pfp.jpg"
          alt="Profile"
          className="w-32 h-32 rounded-full mx-auto mb-4"
        />
        <h1 className="text-5xl font-bold mb-4">Hello, I am Riad Muska</h1>
      <div className="bg-gray-900 p-6 rounded-lg shadow-lg inline-block text-left">
        <pre className="text-sm text-green-400">
            <code className='text-balance'>
            const developer = A developer is a modern-day alchemist, transforming abstract ideas into tangible digital experiences through the art of code.
            </code>
        </pre>
      </div>
      </div>
    </section>
  );
};

export default Hero;