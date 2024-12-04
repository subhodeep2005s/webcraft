import React from 'react';
import { ArrowRight } from 'lucide-react';

const OurPromise = () => {
  return (
    <section className="bg-indigo-100 py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center animate-fade-in-up">
          <h2 className="text-4xl font-bold text-gray-800 mb-6">Our Promise</h2>
          <p className="text-xl text-gray-700 mb-8 leading-relaxed">
            We believe in creating websites that not only meet but exceed expectations. With a keen eye for detail and a dedication to perfection, we promise to deliver results that you'll love. From initial consultation to post-launch support, we are committed to ensuring your website's success.
          </p>
          <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
            <h3 className="text-2xl font-semibold text-indigo-600 mb-4">What We Promise</h3>
            <ul className="text-left text-gray-700 space-y-4">
              <li className="flex items-start">
                <ArrowRight className="w-6 h-6 text-indigo-500 mr-2 flex-shrink-0" />
                <span>Exceptional Quality: We deliver websites that are visually stunning and functionally robust.</span>
              </li>
              <li className="flex items-start">
                <ArrowRight className="w-6 h-6 text-indigo-500 mr-2 flex-shrink-0" />
                <span>Timely Delivery: We respect your time and adhere to agreed-upon deadlines.</span>
              </li>
              <li className="flex items-start">
                <ArrowRight className="w-6 h-6 text-indigo-500 mr-2 flex-shrink-0" />
                <span>Ongoing Support: Our commitment doesn't end at launch; we provide continuous support.</span>
              </li>
            </ul>
          </div>
          <div className="bg-indigo-600 text-white rounded-lg shadow-lg p-8">
            <h3 className="text-2xl font-semibold mb-4">Our story</h3>
            <p className="mb-6">
            Welcome to Our Web Design Service
            At Creative Web Solutions, we are more than just a web design company — we are your partner in building an online presence that stands out. With a passion for design, user experience, and cutting-edge technology, we offer tailor-made web design services that meet the unique needs of your business.
            <br/>
             <p className='text-black'> Let's turn your vision into reality. Whether you're launching your first website or looking to redesign your current site, our team is here to help you every step of the way.</p>
            </p>
            <a
              href="#contact"
              className="inline-block bg-white text-indigo-600 font-semibold py-3 px-6 rounded-full hover:bg-indigo-100 transition duration-300"
            >
              Contact Us Today
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurPromise;

