import React from 'react';
import Hero from '../components/Hero';
import Services from '../components/Services';
import Portfolio from '../components/Porrtfolio';
import Testimonials from '../components/Testimonials';
import Contact from '../components/Contact';
import Pricing from '../components/Pricing';
import WhyChooseUs from '../components/WhyChooseUs';
import OurPromise from '../components/OurPromise';

function Home() {
  return (
    <>
      <Hero />
      <Services />
      <Pricing />
      <Portfolio />
      <WhyChooseUs />
      <OurPromise />
      <Testimonials />
      <Contact />
    </>
  );
}

export default Home;

// pricing added