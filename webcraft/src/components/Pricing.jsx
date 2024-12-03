// import React, { useState } from 'react';
// import { Check, ChevronDown, ChevronUp } from 'lucide-react';

// const PricingCard = ({ plan, price, features, examples, isPopular, viewMore }) => {
//   const [isExpanded, setIsExpanded] = useState(false);

//   return (
//     <div className={`bg-white rounded-lg shadow-lg p-3 flex flex-col h-full text-sm ${isPopular ? 'border-2 border-indigo-500' : ''}`}>
//       {isPopular && (
//         <span className="bg-indigo-500 text-white px-3 py-1 rounded-full text-sm font-semibold self-start mb-4">
//           Most Popular
//         </span>
//       )}
//       <h3 className="text-base font-bold mb-2">{plan}</h3>
//       <p className="text-xl font-bold mb-3">₹{price}</p>
//       <ul className="mb-3 flex-grow">
//         {features.slice(0, 2).map((feature, index) => (
//           <li key={index} className="flex items-center mb-2">
//             <Check className="h-5 w-5 text-green-500 mr-2" />
//             <span>{feature}</span>
//           </li>
//         ))}
//       </ul>
//       {viewMore && (
//         <button
//           onClick={() => setIsExpanded(!isExpanded)}
//           className="text-indigo-600 font-semibold flex items-center mb-2 text-xs"
//         >
//           {isExpanded ? 'Less' : 'More'}
//           {isExpanded ? <ChevronUp className="ml-1 h-3 w-3" /> : <ChevronDown className="ml-1 h-3 w-3" />}
//         </button>
//       )}
//       {isExpanded && (
//         <ul className="mb-6">
//           {features.slice(2).map((feature, index) => (
//             <li key={index} className="flex items-center mb-2">
//               <Check className="h-5 w-5 text-green-500 mr-2" />
//               <span>{feature}</span>
//             </li>
//           ))}
//         </ul>
//       )}
//       <p className="text-xs text-gray-600 mb-2">Examples: {examples}</p>
//       <button className="bg-indigo-600 text-white py-1 px-2 rounded-lg hover:bg-indigo-700 transition duration-300 text-xs">
//         Choose Plan
//       </button>
//     </div>
//   );
// };

// const Pricing = () => {
//   const plans = [
//     {
//       plan: 'Bronze Plan',
//       price: '1,000',
//       features: [
//         '1-year free hosting & free domain',
//         'SSL Certificate',
//         'A landing page website with up to 2 pages',
//         'Mobile-responsive design',
//         'Basic contact form',
//       ],
//       examples: 'Portfolio websites, Business landing pages, Gym websites',
//     },
//     {
//       plan: 'Silver Plan',
//       price: '5,000',
//       features: [
//         '1-year free hosting & free domain',
//         'SSL Certificate',
//         'Unlimited pages',
//         'Mobile- and tablet-friendly responsive design',
//         'Contact form integration',
//         'Content up to 2,000 words',
//         'Social media integration',
//         'Google Analytics integration',
//       ],
//       examples: 'Club landing pages, Coaching websites, Restaurant websites, Gym websites',
//       viewMore: true,
//     },
//     {
//       plan: 'Gold Plan',
//       price: '10,000',
//       features: [
//         '1-year free hosting & free domain',
//         'SSL Certificate',
//         'Unlimited pages',
//         'Mobile- and tablet-friendly responsive design',
//         'Basic image gallery or portfolio feature',
//         'E-commerce readiness (up to 10 products',
//         'Upto 200 products upload by our team',
//         'Appointment booking system',
//       ],
//       examples: 'School management systems, Small e-commerce sites, Blogs, Gym websites',
//       isPopular: true,
//       viewMore: true,
//     },
    
//     {
//       plan: 'Diamond Plan',
//       price: '50,000',
//       features: [
//         '1-year free hosting & free domain',
//         'SSL Certificate',
//         'Unlimited pages',
//         'Shopify Website Creation and Setup',
//         'Android Hybrid App + iOS Web App',
//         'Google Play Publishing & iOS App Store Support',
//         'Advanced referral system and abandoned checkout recovery',
//         'Full e-commerce functionality (up to 200 products uploaded by our team)',
//       ],
//       examples: 'Large e-commerce platforms, Corporate websites, Custom management systems',
//       viewMore: true,
//     },
//   ];

//   return (
//     <section id="pricing" className="bg-gray-100 py-20">
//       <div className="container mx-auto px-4">
//         <h2 className="text-3xl font-bold text-center mb-12">Website Service Plans</h2>
//         <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
//           {plans.map((plan, index) => (
//             <PricingCard key={index} {...plan} />
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Pricing;
import React, { useState, useEffect } from 'react';
import { Check, ChevronDown, ChevronUp } from 'lucide-react';

const PricingCard = ({ plan, price, features, examples, isPopular }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const viewMore = features.length > 2;

  return (
    <div className={`bg-white rounded-lg shadow-lg p-3 flex flex-col h-full text-sm ${isPopular ? 'border-2 border-indigo-500' : ''}`}>
      {isPopular && (
        <span className="bg-indigo-500 text-white px-3 py-1 rounded-full text-sm font-semibold self-start mb-4">
          Most Popular
        </span>
      )}
      <h3 className="text-base font-bold mb-2">{plan}</h3>
      <p className="text-xl font-bold mb-3">₹{price}</p>
      <ul className="mb-3 flex-grow">
        {features.slice(0, 2).map((feature, index) => (
          <li key={index} className="flex items-center mb-2">
            <Check className="h-5 w-5 text-green-500 mr-2" />
            <span>{feature}</span>
          </li>
        ))}
      </ul>
      {viewMore && (
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="text-indigo-600 font-semibold flex items-center mb-2 text-xs"
        >
          {isExpanded ? 'Less' : 'More'}
          {isExpanded ? <ChevronUp className="ml-1 h-3 w-3" /> : <ChevronDown className="ml-1 h-3 w-3" />}
        </button>
      )}
      {isExpanded && (
        <ul className="mb-6">
          {features.slice(2).map((feature, index) => (
            <li key={index} className="flex items-center mb-2">
              <Check className="h-5 w-5 text-green-500 mr-2" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      )}
      <p className="text-xs text-gray-600 mb-2">Examples: {examples}</p>
      <button className="bg-indigo-600 text-white py-1 px-2 rounded-lg hover:bg-indigo-700 transition duration-300 text-xs">
        Choose Plan
      </button>
    </div>
  );
};

const Pricing = () => {
  const [plans, setPlans] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchPricingPlans = async () => {
      try {
        const response = await fetch('https://backend-agency.onrender.com/api/pricing');
        if (!response.ok) {
          throw new Error('Failed to fetch pricing plans');
        }
        const data = await response.json();
        setPlans(data);
        setIsLoading(false);
      } catch (error) {
        console.error('Error fetching pricing plans:', error);
        setIsLoading(false);
      }
    };

    fetchPricingPlans();
  }, []);

  if (isLoading) {
    return (
      <section id="pricing" className="bg-gray-100 py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Website Service Plans</h2>
          <p className="text-center">Loading pricing plans...</p>
        </div>
      </section>
    );
  }

  return (
    <section id="pricing" className="bg-gray-100 py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Website Service Plans</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {plans.map((plan, index) => (
            <PricingCard
              key={index}
              plan={plan.plan}
              price={plan.price}
              features={plan.features}
              examples={plan.examples}
              isPopular={plan.isPopular}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;

