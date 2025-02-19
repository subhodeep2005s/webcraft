

// import React, { useState, useEffect } from 'react';
// import { ArrowRight, MessageCircle, Phone, Briefcase } from 'lucide-react';
// import CallbackForm from './CallbackForm';

// const Hero = () => {
//   const [isCallbackFormOpen, setIsCallbackFormOpen] = useState(false);
//   const [heroData, setHeroData] = useState({
//     mainTitle: 'CREATIVE DIGITAL',
//     subTitle: 'BRANDING AGENCY',
//     ourStory: 'A specialized agency that helps businesses establish and maintain a strong online presence. This type of agency offers a range of services.',
//     experience: '12+',
//     projects: '800+',
//     happyClients: '500+',
//     imageUrl: 'https://designhub.digital/wp-content/uploads/2023/08/designhub-hero-product1.png'
//   });

//   useEffect(() => {
//     const fetchHeroData = async () => {
//       try {
//         const response = await fetch('https://backend-agency.onrender.com/api/hero');
//         if (response.ok) {
//           const data = await response.json();
//           setHeroData({
//             mainTitle: data.mainTitle || heroData.mainTitle,
//             subTitle: data.subTitle || heroData.subTitle,
//             ourStory: data.ourStory || heroData.ourStory,
//             experience: data.experience || heroData.experience,
//             projects: data.projects || heroData.projects,
//             happyClients: data.happyClients || heroData.happyClients,
//             imageUrl: data.imageUrl || heroData.imageUrl
//           });
//         }
//       } catch (error) {
//         console.error('Error fetching hero data:', error);
//       }
//     };

//     fetchHeroData();
//   }, []);

//   // Function to handle scroll on "Know More" button click
//   const handleScrollDown = () => {
//     const targetSection = document.getElementById('services');
//     if (targetSection) {
//       targetSection.scrollIntoView({ behavior: 'smooth' });
//     }
//   };

//   return (
//     <div className="bg-white">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-12">
//         <div className="relative">
//           {/* Background decorative elements */}
//           <div className="absolute top-0 left-0 w-48 h-48 bg-[#90A99C] rounded-full opacity-20 -translate-x-1/2 -translate-y-1/2"></div>
//           <div className="absolute top-20 right-20 w-32 h-32 bg-[#F7B733] rounded-full opacity-20"></div>
//           <div className="absolute bottom-0 left-1/4 w-24 h-24 bg-[#E8C4B8] rounded-full opacity-20"></div>
          
//           {/* Main content */}
//           <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
//             <div className="space-y-8">
//               <div className="space-y-6">
//                 <h1 className="text-5xl sm:text-6xl font-bold tracking-tight text-gray-900">
//                   {heroData.mainTitle.split(' ').map((word, index) => 
//                     index === 1 ? <span key={index} className="text-[#6366f1]">{word} </span> : word + ' '
//                   )}
//                 </h1>
//                 <h2 className="text-4xl sm:text-5xl font-bold text-gray-800 mb-8">
//                   {heroData.subTitle}
//                 </h2>
//                 <h3 className="text-2xl font-bold">Our story</h3>
//                 <p className="text-gray-600 max-w-lg">
//                   {heroData.ourStory}
//                 </p>
//                 <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
//                   <a
//                     href="https://wa.me/918597722752"
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-[#25D366] hover:bg-[#128C7E]"
//                   >
//                     <MessageCircle className="w-5 h-5 mr-2" />
//                     WhatsApp Us
//                   </a>
//                   <button
//                     onClick={() => setIsCallbackFormOpen(true)}
//                     className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-[#6366f1] hover:bg-[#4f46e5]"
//                   >
//                     <Phone className="w-5 h-5 mr-2" />
//                     Request Callback
//                   </button>
//                 </div>
//               </div>

//               <div className="grid grid-cols-3 gap-4 sm:gap-8">
//                 <div>
//                   <h4 className="text-3xl sm:text-4xl font-bold text-[#6366f1]">{heroData.experience}<span className="text-xl sm:text-2xl">+</span></h4>
//                   <p className="text-sm sm:text-base text-gray-600">Years Experience</p>
//                 </div>
//                 <div>
//                   <h4 className="text-3xl sm:text-4xl font-bold text-[#6366f1]">{heroData.projects}<span className="text-xl sm:text-2xl">+</span></h4>
//                   <p className="text-sm sm:text-base text-gray-600">Projects Done</p>
//                 </div>
//                 <div>
//                   <h4 className="text-3xl sm:text-4xl font-bold text-[#6366f1]">{heroData.happyClients}<span className="text-xl sm:text-2xl">+</span></h4>
//                   <p className="text-sm sm:text-base text-gray-600">Happy Clients</p>
//                 </div>
//               </div>
//             </div>

//             <div className="relative h-[400px] lg:h-full mt-8 lg:mt-0">
//               <div className="absolute inset-0 bg-gradient-to-b from-gray-100 to-white rounded-lg overflow-hidden">
//                 <img
//                   src={heroData.imageUrl}
//                   alt="Responsive web design showcase across multiple devices"
//                   className="w-full h-full object-cover object-center"
//                 />
//                 <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between bg-white/90 backdrop-blur-sm rounded-lg p-4 shadow-lg">
//                   <div className="flex items-center">
//                     <div className="w-12 h-12 bg-[#6366f1] rounded-full flex items-center justify-center mr-3">
//                       <Briefcase className="w-6 h-6 text-white" />
//                     </div>
//                     <div>
//                       <p className="text-xs text-gray-600">Explore what we offer</p>
//                     </div>
//                   </div>
//                   <button 
//                     onClick={handleScrollDown}
//                     className="inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-[#6366f1] hover:bg-[#4f46e5]"
//                   >
//                     Know More
//                     <ArrowRight className="w-4 h-4 ml-2" />
//                   </button>
//                 </div>
//               </div>
//             </div>
//           </div>
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

import React, { useState, useEffect } from 'react';
import { ArrowRight, MessageCircle, Phone, Briefcase } from 'lucide-react';
import CallbackForm from './CallbackForm';

const Hero = () => {
  const [isCallbackFormOpen, setIsCallbackFormOpen] = useState(false);
  const [heroData, setHeroData] = useState({
    mainTitle: 'CREATIVE DIGITAL',
    subTitle: 'BRANDING AGENCY',
    ourStory: 'A specialized agency that helps businesses establish and maintain a strong online presence. This type of agency offers a range of services.',
    experience: '12+',
    projects: '800+',
    happyClients: '500+',
    imageUrl: 'https://designhub.digital/wp-content/uploads/2023/08/designhub-hero-product1.png'
  });
  const [slogan, setSlogan] = useState("Empowering Your Digital Presence");

  useEffect(() => {
    const fetchHeroData = async () => {
      try {
        const response = await fetch('https://backend-agency.onrender.com/api/hero');
        if (response.ok) {
          const data = await response.json();
          setHeroData({
            mainTitle: data.mainTitle || heroData.mainTitle,
            subTitle: data.subTitle || heroData.subTitle,
            ourStory: data.ourStory || heroData.ourStory, 
            experience: data.experience || heroData.experience,
            projects: data.projects || heroData.projects,
            happyClients: data.happyClients || heroData.happyClients,
            imageUrl: data.imageUrl || heroData.imageUrl
          });
        }
      } catch (error) {
        console.error('Error fetching hero data:', error);
      }
    };

    fetchHeroData();
  }, []);

  // Function to handle scroll on "Know More" button click
  const handleScrollDown = () => {
    const targetSection = document.getElementById('services');
    if (targetSection) {
      targetSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="relative">
          {/* Main content */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 text-gray-900">
              <div className="space-y-6">
                <h1 className="text-5xl sm:text-6xl font-bold tracking-tight">
                  {heroData.mainTitle.split(' ').map((word, index) => 
                    index === 1 ? <span key={index} className="text-[#6366f1]">{word} </span> : word + ' '
                  )}
                </h1>
                <h2 className="text-3xl text-ye sm:text-5xl font-bold mb-8">
                  {heroData.subTitle}
                </h2>
                <p className="text-2xl font-bold text-[#9facd2]">{heroData.ourStory}</p>
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
                  <h4 className="text-3xl sm:text-4xl font-bold text-[#6366f1]">{heroData.experience}<span className="text-xl sm:text-2xl">+</span></h4>
                  <p className="text-sm sm:text-base">Years Experience</p>
                </div>
                <div>
                  <h4 className="text-3xl sm:text-4xl font-bold text-[#6366f1]">{heroData.projects}<span className="text-xl sm:text-2xl">+</span></h4>
                  <p className="text-sm sm:text-base">Projects Done</p>
                </div>
                <div>
                  <h4 className="text-3xl sm:text-4xl font-bold text-[#6366f1]">{heroData.happyClients}<span className="text-xl sm:text-2xl">+</span></h4>
                  <p className="text-sm sm:text-base">Happy Clients</p>
                </div>
              </div>
            </div>

            <div className="relative h-[400px] lg:h-full mt-8 lg:mt-0">
              <div className="absolute inset-0 bg-white rounded-lg overflow-hidden shadow-xl">
                <img
                  src={heroData.imageUrl}
                  alt="Responsive web design showcase"
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
                    onClick={handleScrollDown}
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

