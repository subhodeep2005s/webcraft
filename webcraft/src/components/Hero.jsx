// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import { Phone, MessageCircle } from 'lucide-react';
// import CallbackForm from './CallbackForm';

// const Hero = () => {
//   const [isCallbackFormOpen, setIsCallbackFormOpen] = useState(false);

//   return (
//     <div className="relative bg-gradient-to-r from-indigo-600 to-purple-700 overflow-hidden">
//       <div className="max-w-7xl mx-auto">
//         <div className="relative z-10 pb-8 sm:pb-16 md:pb-20 lg:pb-28 xl:pb-32 w-full lg:w-[70%]">
//           <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
//             <div className="text-center lg:text-left">
//               <h1 className="text-4xl tracking-tight font-extrabold text-white sm:text-5xl md:text-6xl">
//                 <span className="block xl:inline">Crafting Digital</span>{' '}
//                 <span className="block text-indigo-200 xl:inline">Experiences</span>
//               </h1>
//               <p className="mt-3 text-base text-indigo-100 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
//                 We build stunning websites and web applications that drive results. Our team of experts combines creativity and technology to deliver exceptional digital solutions.
//               </p>
//               <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
//                 <div className="rounded-md shadow">
//                   <a
//                     href="https://wa.me/918597722752" // Updated with your WhatsApp number
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-indigo-700 bg-white hover:bg-indigo-50 md:py-4 md:text-lg md:px-10"
//                   >
//                     <MessageCircle className="w-5 h-5 mr-2" />
//                     WhatsApp Us
//                   </a>
//                 </div>
//                 <div className="mt-3 sm:mt-0 sm:ml-3">
//                   <button
//                     onClick={() => setIsCallbackFormOpen(true)}
//                     className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-500 hover:bg-indigo-600 md:py-4 md:text-lg md:px-10"
//                   >
//                     <Phone className="w-5 h-5 mr-2" />
//                     Request Callback
//                   </button>
//                 </div>
//               </div>
//             </div>
//           </main>
//         </div>
//       </div>
//       <CallbackForm
//         isOpen={isCallbackFormOpen}
//         onClose={() => setIsCallbackFormOpen(false)}
//       />
//     </div>
//   );
// };

// export default Hero;


import React, { useState } from 'react';
import { ArrowRight, MessageCircle, Phone, Briefcase } from 'lucide-react';
import CallbackForm from './CallbackForm';

const Hero = () => {
  const [isCallbackFormOpen, setIsCallbackFormOpen] = useState(false);

  // Function to handle scroll on "Know More" button click
  const handleScrollDown = () => {
    const targetSection = document.getElementById('services'); // Target the section by its ID
    if (targetSection) {
      targetSection.scrollIntoView({ behavior: 'smooth' }); // Scroll with smooth animation
    }
  };

  return (
    <div className="bg-white">
      {/* You can adjust the top padding here to increase/decrease the space above the hero section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-12">
        <div className="relative">
          {/* Background decorative elements */}
          <div className="absolute top-0 left-0 w-48 h-48 bg-[#90A99C] rounded-full opacity-20 -translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute top-20 right-20 w-32 h-32 bg-[#F7B733] rounded-full opacity-20"></div>
          <div className="absolute bottom-0 left-1/4 w-24 h-24 bg-[#E8C4B8] rounded-full opacity-20"></div>
          
          {/* Main content */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-6">
                <h1 className="text-5xl sm:text-6xl font-bold tracking-tight text-gray-900">
                  CREATIVE <span className="text-[#6366f1]">DIGITAL</span>
                </h1>
                <h2 className="text-4xl sm:text-5xl font-bold text-gray-800 mb-8">
                  BRANDING AGENCY
                </h2>
                <h3 className="text-2xl font-bold">Our story</h3>
                <p className="text-gray-600 max-w-lg">
                  A specialized agency that helps businesses establish and maintain a strong online presence.
                  This type of agency offers a range of services.
                </p>
                <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                  <a
                    href="https://wa.me/918597722752"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-[#25D366] hover:bg-[#128C7E]"
                  >
                    <MessageCircle className="w-5 h-5 mr-2" />
                    WhatsApp Us
                  </a>
                  <button
                    onClick={() => setIsCallbackFormOpen(true)}
                    className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-[#6366f1] hover:bg-[#4f46e5]"
                  >
                    <Phone className="w-5 h-5 mr-2" />
                    Request Callback
                  </button>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-4 sm:gap-8">
                <div>
                  <h4 className="text-3xl sm:text-4xl font-bold text-[#6366f1]">12<span className="text-xl sm:text-2xl">+</span></h4>
                  <p className="text-sm sm:text-base text-gray-600">Years Experience</p>
                </div>
                <div>
                  <h4 className="text-3xl sm:text-4xl font-bold text-[#6366f1]">800<span className="text-xl sm:text-2xl">+</span></h4>
                  <p className="text-sm sm:text-base text-gray-600">Projects Done</p>
                </div>
                <div>
                  <h4 className="text-3xl sm:text-4xl font-bold text-[#6366f1]">500<span className="text-xl sm:text-2xl">+</span></h4>
                  <p className="text-sm sm:text-base text-gray-600">Happy Clients</p>
                </div>
              </div>
            </div>

            <div className="relative h-[400px] lg:h-full mt-8 lg:mt-0">
              <div className="absolute inset-0 bg-gradient-to-b from-gray-100 to-white rounded-lg overflow-hidden">
                <img
                  src="https://designhub.digital/wp-content/uploads/2023/08/designhub-hero-product1.png"
                  alt="Responsive web design showcase across multiple devices"
                  className="w-full h-full object-cover object-center"
                />
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between bg-white/90 backdrop-blur-sm rounded-lg p-4 shadow-lg">
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-[#6366f1] rounded-full flex items-center justify-center mr-3">
                      <Briefcase className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="text-xs text-gray-600">Explore what we offer</p>
                    </div>
                  </div>
                  <button 
                    onClick={handleScrollDown} // Add the scroll function here
                    className="inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-[#6366f1] hover:bg-[#4f46e5]"
                  >
                    Know More
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </button>
                </div>
              </div>
            </div>
          </div>
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
