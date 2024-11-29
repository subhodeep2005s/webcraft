import React from 'react';

const services = [
  {
    title: 'Web Development',
    description: 'We create responsive, fast, and user-friendly websites tailored to your needs.',
    icon: 'M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4',
  },
  {
    title: 'UI/UX Design',
    description: 'Our designs are intuitive, visually appealing, and focused on user experience.',
    icon: 'M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01',
  },
  {
    title: 'Digital Marketing',
    description: 'We help you reach your target audience and grow your online presence.',
    icon: 'M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z',
  },
  {
    title: 'SEO Optimization',
    description: 'We improve your website’s visibility in search engines to attract more traffic.',
    icon: 'M3 10h11M9 21V3m8 18l-3-3m0 0l3-3m-3 3H3',
  },
  {
    title: 'E-Commerce Solutions',
    description: 'We build scalable and secure online stores to enhance your e-commerce business.',
    icon: 'M4 6h16M4 10h16M4 14h16M4 18h16',
  },
];


const Services = () => {
  return (
    <section id="services" className="bg-gray-50 py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <center>
        <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-12">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition duration-300">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-indigo-600 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={service.icon} />
              </svg>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
        </center>
      </div>
      
    </section>
  );
};

export default Services;

