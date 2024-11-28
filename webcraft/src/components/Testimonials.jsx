import React from 'react';

const testimonials = [
  {
    name: 'John Doe',
    role: 'CEO, TechCorp',
    content: 'WebCraft Agency delivered an outstanding website that exceeded our expectations. Their team was professional, creative, and responsive throughout the entire process.',
  },
  {
    name: 'Jane Smith',
    role: 'Marketing Director, GrowthCo',
    content: 'We saw a significant increase in our online conversions after working with WebCraft. Their expertise in both design and development is truly impressive.',
  },
  {
    name: 'Mike Johnson',
    role: 'Founder, StartupX',
    content: 'The team at WebCraft Agency brought our vision to life. Their attention to detail and commitment to quality is unmatched. Highly recommended!',
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="bg-gray-50 py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-12">What Our Clients Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-6">
              <p className="text-gray-600 mb-4">&quot;{testimonial.content}&quot;</p>
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <span className="inline-block h-10 w-10 rounded-full bg-indigo-600 text-white text-center leading-10">
                    {testimonial.name[0]}
                  </span>
                </div>
                <div className="ml-3">
                  <p className="text-sm font-medium text-gray-900">{testimonial.name}</p>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

