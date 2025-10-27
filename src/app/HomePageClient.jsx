'use client';
import React, { useRef } from 'react';

import HeroSection from '../components/HeroSection';
import Slider from '../components/Slider';
import ServicesSection from '../components/ServicesSectionHome';
import AboutUsSection from '../components/AboutUsSection';
import Portfoliopage from './works/page';

export default function HomePageClient() {
  const servicesRef = useRef(null);

  const scrollToServices = () => {
    if (servicesRef.current) {
      servicesRef.current.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };

  return (
    <div className="w-screen mt-0 md:mt-18 bg-white text-gray-900">
      <HeroSection scrollToServices={scrollToServices} />
      <Slider />
      <AboutUsSection />
      <ServicesSection ref={servicesRef} />
      <Portfoliopage />
    </div>
  );
}
