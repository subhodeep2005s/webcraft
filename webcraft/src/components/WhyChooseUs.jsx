import React from 'react';
import { CheckCircle, Users, Target, Shield, Headphones } from 'lucide-react';

const FeatureCard = ({ icon: Icon, title, description }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6 transition-all duration-300 hover:shadow-xl animate-fade-in-up">
      <Icon className="w-12 h-12 text-indigo-600 mb-4" />
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

const WhyChooseUs = () => {
  const features = [
    {
      icon: CheckCircle,
      title: 'Tailored Solutions',
      description: 'We create bespoke designs that align with your unique business goals.',
    },
    {
      icon: Users,
      title: 'Expert Team',
      description: 'Our designers, developers, and strategists are experts in their fields.',
    },
    {
      icon: Target,
      title: 'Customer Focused',
      description: 'We work closely with you to bring your vision to life exactly as you imagined it.',
    },
    {
      icon: Shield,
      title: 'Quality Assurance',
      description: 'Rigorous testing ensures your website is error-free, fast, and secure.',
    },
    {
      icon: Headphones,
      title: 'Ongoing Support',
      description: 'We provide continuous support and maintenance after your website goes live.',
    },
  ];

  return (
    <section className="bg-gray-100 py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in-up">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Why Choose Us?</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            We're committed to delivering exceptional web solutions that drive your business forward.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;

