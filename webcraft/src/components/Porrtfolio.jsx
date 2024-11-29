import React from 'react';

const projects = [
  {
    title: 'E-commerce Platform',
    description: 'A fully responsive online store with seamless checkout experience.',
    image: 'https://img.youtube.com/vi/C3U1RforbH4/maxresdefault.jpg',
  },
  {
    title: 'Social Media Dashboard',
    description: 'An intuitive dashboard for managing multiple social media accounts.',
    image: 'https://img.youtube.com/vi/9jRTo7ILxQc/maxresdefault.jpg',
  },
  {
    title: 'Fitness Tracking App',
    description: 'A mobile-first web app for tracking workouts and nutrition.',
    image: 'https://img.youtube.com/vi/jbfuzcrfjqQ/maxresdefault.jpg',
  },
  {
    title: 'E-commerce Platform',
    description: 'A fully responsive online store with seamless checkout experience.',
    image: 'https://img.youtube.com/vi/9jRTo7ILxQc/maxresdefault.jpg',
  },
  {
    title: 'Social Media Dashboard',
    description: 'An intuitive dashboard for managing multiple social media accounts.',
    image: 'https://img.youtube.com/vi/amFYvQK4huo/maxresdefault.jpg',
  },
  {
    title: 'Fitness Tracking App',
    description: 'A mobile-first web app for tracking workouts and nutrition.',
    image: 'https://img.youtube.com/vi/yU_JgeAIRko/maxresdefault.jpg',
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio" className="bg-white py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-gray-800 text-center mb-12">Our Portfolio</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-gray-50 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition duration-300">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{project.title}</h3>
                <p className="text-gray-600">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;

