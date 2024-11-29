import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Phone, MessageCircle } from 'lucide-react';
import CallbackForm from './CallbackForm';

const Hero = () => {
  const [isCallbackFormOpen, setIsCallbackFormOpen] = useState(false);

  return (
    <div className="relative bg-gradient-to-r from-indigo-600 to-purple-700 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="relative z-10 pb-8 sm:pb-16 md:pb-20 lg:pb-28 xl:pb-32 w-full lg:w-[70%]">
          <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
            <div className="text-center lg:text-left">
              <h1 className="text-4xl tracking-tight font-extrabold text-white sm:text-5xl md:text-6xl">
                <span className="block xl:inline">Crafting Digital</span>{' '}
                <span className="block text-indigo-200 xl:inline">Experiences</span>
              </h1>
              <p className="mt-3 text-base text-indigo-100 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                We build stunning websites and web applications that drive results. Our team of experts combines creativity and technology to deliver exceptional digital solutions.
              </p>
              <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                <div className="rounded-md shadow">
                  <a
                    href="https://wa.me/918597722752" // Updated with your WhatsApp number
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-indigo-700 bg-white hover:bg-indigo-50 md:py-4 md:text-lg md:px-10"
                  >
                    <MessageCircle className="w-5 h-5 mr-2" />
                    WhatsApp Us
                  </a>
                </div>
                <div className="mt-3 sm:mt-0 sm:ml-3">
                  <button
                    onClick={() => setIsCallbackFormOpen(true)}
                    className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-500 hover:bg-indigo-600 md:py-4 md:text-lg md:px-10"
                  >
                    <Phone className="w-5 h-5 mr-2" />
                    Request Callback
                  </button>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
      <CallbackForm
        isOpen={isCallbackFormOpen}
        onClose={() => setIsCallbackFormOpen(false)}
      />
    </div>
  );
};

export default Hero;

