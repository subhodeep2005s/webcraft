import React, { useState, useEffect } from 'react';

const CarouselSlide = ({ image, title, description, isActive }) => (
  <div
    className={`absolute top-0 left-0 w-full h-full transition-opacity duration-500 ${
      isActive ? 'opacity-100' : 'opacity-0'
    }`}
  >
    <img
      src={image}
      alt={title}
      className="w-full h-full object-cover brightness-50"
    />
    <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-4 text-center">
      <h2 className="text-4xl font-bold mb-4">{title}</h2>
      <p className="text-xl mb-6 max-w-2xl">{description}</p>
      <a 
        href="https://satpros.in/" 
        target="_blank"
        rel="noopener noreferrer"
        className="bg-white text-black px-6 py-3 rounded-full flex items-center hover:bg-gray-200 transition-colors"
      >
        Learn More 
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
        </svg>
      </a>
    </div>
  </div>
);

const WICDCard = ({ name, price, description, features, softwareUsed, imageUrl }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState('monthly');

  return (
    <div className="bg-white rounded-lg shadow-lg p-4 flex flex-col h-full">
      <div className="relative w-full h-40 mb-4">
        <img 
          src={imageUrl} 
          alt={name} 
          className="w-full h-full object-cover rounded-md"
        />
      </div>
      <h3 className="text-lg font-bold mb-2">{name}</h3>
      <div className="mb-2">
        <select 
          value={selectedPlan} 
          onChange={(e) => setSelectedPlan(e.target.value)}
          className="w-full p-1 text-sm border rounded"
        >
          <option value="monthly">Monthly</option>
          <option value="yearly">Yearly</option>
          <option value="permanent">Permanent</option>
        </select>
      </div>
      <p className="text-xl font-bold text-indigo-600 mb-2">
        ₹{price[selectedPlan].toLocaleString()}
      </p>
      <p className="text-sm text-gray-600 mb-2">{description}</p>
      <div className="mt-auto">
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="text-indigo-600 font-semibold flex items-center mb-2 text-sm"
        >
          {isExpanded ? 'Less Details' : 'More Details'}
          <svg xmlns="http://www.w3.org/2000/svg" className={`h-4 w-4 ml-1 transition-transform ${isExpanded ? 'rotate-180' : ''}`} viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
        </button>
        {isExpanded && (
          <div className="mt-2">
            <h4 className="font-semibold mb-1 text-sm">Features:</h4>
            <ul className="list-disc list-inside mb-2">
              {features.map((feature, index) => (
                <li key={index} className="text-xs text-gray-600">{feature}</li>
              ))}
            </ul>
            <h4 className="font-semibold mb-1 text-sm">Software Used:</h4>
            <ul className="flex flex-wrap gap-1">
              {softwareUsed.map((software, index) => (
                <li key={index} className="bg-gray-100 text-gray-800 text-xs px-1 py-0.5 rounded">
                  {software}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
      <button className="mt-2 bg-indigo-600 text-white py-1 px-2 rounded-lg hover:bg-indigo-700 transition duration-300 flex items-center justify-center text-sm">
        View Demo 
        <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 ml-1" viewBox="0 0 20 20" fill="currentColor">
          <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />
          <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
        </svg>
      </button>
    </div>
  );
};

const WICDShowcase = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [wicds, setWicds] = useState([]);

  const carouselData = [
    {
      image: "https://images.unsplash.com/photo-1478760329108-5c3ed9d495a0",
      title: "Professional Broadcasting Solutions",
      description: "Transform your content with our cutting-edge broadcasting tools"
    },
    {
      image: "https://images.unsplash.com/photo-1492724441997-5dc865305da7",
      title: "Stream Like a Pro",
      description: "Enterprise-grade streaming solutions for every creator"
    },
    {
      image: "https://images.unsplash.com/photo-1524253482453-3fed8d2fe12b",
      title: "Next-Gen Technology",
      description: "Stay ahead with our innovative broadcasting features"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % carouselData.length);
    }, 3000); // 500ms = 0.5 seconds

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const mockData = [
      {
        id: 1,
        name: "Satpros vScheduler 2.0",
        price: { monthly: 999, yearly: 9999, permanent: 19999 },
        description: "Advanced video scheduling software for vMix",
        features: ["Time Filler Playlist", "Advance Playlist", "Daily Loop Schedule"],
        softwareUsed: ["vMix", "Windows 10/11"],
        imageUrl: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32"
      },
      {
        id: 2,
        name: "Sports Broadcasting Suite",
        price: { monthly: 1499, yearly: 14999, permanent: 29999 },
        description: "Complete sports broadcasting solution",
        features: ["Live Score Integration", "Instant Replay", "Multi-camera Support"],
        softwareUsed: ["vMix", "OBS Studio"],
        imageUrl: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211"
      },
      {
        id: 3,
        name: "Live Streaming Pro",
        price: { monthly: 1999, yearly: 19999, permanent: 39999 },
        description: "Professional live streaming package",
        features: ["4K Streaming", "Custom Graphics", "Social Integration"],
        softwareUsed: ["StreamLabs", "XSplit"],
        imageUrl: "https://images.unsplash.com/photo-1533750349088-cd871a92f312"
      },
      {
        id: 4,
        name: "Enterprise Broadcasting",
        price: { monthly: 2999, yearly: 29999, permanent: 59999 },
        description: "Enterprise-grade broadcasting system",
        features: ["Cloud Integration", "Analytics", "Custom Branding"],
        softwareUsed: ["Enterprise Suite", "Analytics Pro"],
        imageUrl: "https://images.unsplash.com/photo-1507919909716-c8262e491cde"
      },
      {
        id: 5,
        name: "Dynamic Graphics Suite",
        price: { monthly: 1299, yearly: 12999, permanent: 25999 },
        description: "Professional broadcast graphics package",
        features: ["Lower Thirds", "Transitions", "Custom Templates"],
        softwareUsed: ["After Effects", "Premiere Pro"],
        imageUrl: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32"
      },
      {
        id: 6,
        name: "Social Media Broadcaster",
        price: { monthly: 899, yearly: 8999, permanent: 17999 },
        description: "Multi-platform social media streaming",
        features: ["Multi-platform Streaming", "Chat Integration", "Analytics"],
        softwareUsed: ["OBS", "Streamlabs"],
        imageUrl: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d"
      },
      {
        id: 7,
        name: "Audio Master Suite",
        price: { monthly: 799, yearly: 7999, permanent: 15999 },
        description: "Professional audio broadcasting tools",
        features: ["Multi-track Mixing", "Effects Processing", "Voice Enhancement"],
        softwareUsed: ["Pro Tools", "Audition"],
        imageUrl: "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04"
      },
      {
        id: 8,
        name: "Virtual Set Designer",
        price: { monthly: 1599, yearly: 15999, permanent: 31999 },
        description: "Create professional virtual sets",
        features: ["3D Environments", "Chroma Key", "Real-time Rendering"],
        softwareUsed: ["Unreal Engine", "Blender"],
        imageUrl: "https://images.unsplash.com/photo-1558655146-9f40138edfeb"
      },
      {
        id: 9,
        name: "Stream Analytics Pro",
        price: { monthly: 699, yearly: 6999, permanent: 13999 },
        description: "Advanced streaming analytics",
        features: ["Viewer Metrics", "Engagement Analysis", "Performance Stats"],
        softwareUsed: ["Analytics Suite", "Dashboard Pro"],
        imageUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f"
      },
      {
        id: 10,
        name: "Content Management Hub",
        price: { monthly: 599, yearly: 5999, permanent: 11999 },
        description: "Centralized content management system",
        features: ["Asset Management", "Scheduling", "Distribution"],
        softwareUsed: ["CMS Pro", "Media Server"],
        imageUrl: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40"
      }
    ];
    setWicds(mockData);
  }, []);

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="relative h-[600px] mb-12">
        {carouselData.map((slide, index) => (
          <CarouselSlide
            key={index}
            {...slide}
            isActive={currentSlide === index}
          />
        ))}
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-8">
          Our Broadcasting Solutions
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {wicds.map((wicd) => (
            <WICDCard key={wicd.id} {...wicd} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default WICDShowcase;

