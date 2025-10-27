import React from 'react';
import AboutPageClient from './AboutPageClient';
export const metadata = {
  title: 'About BeezTech – Branding & Website Development Agency in Udaipur',
  description:
    'Learn about BeezTech, a leading Branding and Web/App Development agency in Udaipur. We specialize in branding, UI/UX design, SaaS & MVP development, and digital marketing to help businesses grow.',
  keywords:
    'About BeezTech, Branding agency Udaipur, Web development Udaipur, App development Udaipur, UI/UX design Udaipur, SaaS development Udaipur, Digital marketing Udaipur',
  authors: [{ name: 'BeezTech Studio' }],
  openGraph: {
    title: 'About BeezTech – Branding & Website Development Agency in Udaipur',
    description:
      'BeezTech is a full-service agency in Udaipur specializing in branding, website development, UI/UX design, SaaS & MVP creation, and digital marketing.',
    url: 'https://www.beeztech.studio/about',
    siteName: 'BeezTech Studio',
    
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About BeezTech – Branding & Website Development Agency in Udaipur',
    description:
      'BeezTech is a full-service creative agency in Udaipur offering branding, web/app development, and digital marketing solutions.',
    
  },
  alternates: {
    canonical: 'https://www.beeztech.studio/about',
  },
};

export default function AboutUsPage() {
  return <AboutPageClient />;
}
