'use client';
import React, { useRef } from 'react';
import Head from 'next/head';

import HeroSection from '../components/HeroSection';
import Slider from '../components/Slider';
import ServicesSection from '../components/ServicesSectionHome';
import AboutUsSection from '../components/AboutUsSection';
import Portfoliopage from './works/page'; // optional portfolio component
// import Head from "next/head";
const HomePage = () => {
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
    <>
      <Head>
        <title>Branding & Web/App Development Agency in Udaipur – BeezTech</title>
        <meta
          name="description"
          content="BeezTech is a top branding and website development agency in Udaipur. We provide innovative branding, UI/UX design, SaaS development, and digital marketing services to help startups and businesses grow."
        />
        <meta property="og:title" content="BeezTech – Branding & Web/App Development Agency in Udaipur" />
        <meta
          property="og:description"
          content="Full-service agency in Udaipur: Branding, website Development, UI/UX Design, SaaS & MVP creation, and Digital Marketing. Grow your business online with BeezTech."
        />
        <meta property="og:image" content="/images/og-home.png" />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://www.beeztech.studio/" />
      </Head>

      <div className="w-screen mt-4 bg-white text-gray-900">
        <HeroSection scrollToServices={scrollToServices} />
        <Slider />
        <AboutUsSection />
        <ServicesSection ref={servicesRef} />
        <Portfoliopage />
      </div>
    </>
  );
};

export default HomePage;
