import React, { useState, useEffect } from 'react';
import { Code, Palette, Rocket } from 'lucide-react';

const Services = () => {
  const [services, setServices] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // START: Fetching services data from backend
    const fetchServices = async () => {
      try {
        const response = await fetch('https://backend-agency.onrender.com/api/services');
        if (!response.ok) {
          throw new Error('Failed to fetch services');
        }
        const data = await response.json();
        setServices(data);
        setIsLoading(false);
      } catch (error) {
        console.error('Error fetching services:', error);
        setIsLoading(false);
      }
    };

    fetchServices();
    // END: Fetching services data from backend
  }, []);

  const getIconComponent = (iconName) => {
    switch (iconName) {
      case 'Code':
        return Code;
      case 'Palette':
        return Palette;
      case 'Rocket':
        return Rocket;
      default:
        return Code;
    }
  };

  if (isLoading) {
    return (
      <section id="services" className="bg-gray-50 py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-12">Our Services</h2>
          <p className="text-center">Loading services...</p>
        </div>
      </section>
    );
  }

  return (
    <section id="services" className="bg-gray-50 py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-12">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = getIconComponent(service.icon);
            return (
              <div key={index} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition duration-300">
                <IconComponent className="h-12 w-12 text-indigo-600 mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;

