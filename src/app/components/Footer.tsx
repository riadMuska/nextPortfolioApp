import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white py-4">
      <div className="container mx-auto text-center">
        <p>Follow me on:</p>
        <div className="flex justify-center space-x-4 mt-2">
          <a href="https://github.com/riadMuska" className="text-blue-500 hover:underline">GitHub</a>
          <a href="https://it.linkedin.com/in/riad-muska-a0a70024a" className="text-blue-500 hover:underline">LinkedIn</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;