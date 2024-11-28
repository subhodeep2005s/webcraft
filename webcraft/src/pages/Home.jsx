import React from 'react';
import Hero from '../components/Hero';
import Services from '../components/Services';
import Portfolio from '../components/Porrtfolio';
import Testimonials from '../components/Testimonials';
import Contact from '../components/Contact';

function Home() {
  return (
    <>
      <Hero />
      <Services />
      <Portfolio />
      <Testimonials />
      <Contact />
    </>
  );
}

export default Home;

