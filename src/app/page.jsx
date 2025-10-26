import React from 'react';
import HomePageClient from './HomePageClient';

export const metadata = {
  title: 'Branding & Web/App Development Agency in Udaipur – BeezTech Studio',
  description: 'BeezTech Studio is a top branding and website development agency in Udaipur. We provide innovative branding, UI/UX design, SaaS development, and digital marketing services to help startups and businesses grow.',
  keywords: 'web development udaipur, branding agency udaipur, digital marketing udaipur, UI/UX design, SaaS development, MVP development, creative agency rajasthan',
  authors: [{ name: 'BeezTech Studio' }],
  openGraph: {
    title: 'BeezTech Studio – Branding & Web/App Development Agency in Udaipur',
    description: 'Full-service agency in Udaipur: Branding, Website Development, UI/UX Design, SaaS & MVP creation, and Digital Marketing. Grow your business online with BeezTech.',
    url: 'https://www.beeztech.studio/',
    siteName: 'BeezTech Studio',
    images: [
      {
        url: '/images/og-home.png',
        width: 1200,
        height: 630,
        alt: 'BeezTech Studio - Creative Digital Agency'
      }
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'BeezTech Studio – Branding & Web/App Development Agency',
    description: 'Full-service creative agency specializing in branding, development, and digital marketing in Udaipur, Rajasthan.',
  },
  alternates: {
    canonical: 'https://www.beeztech.studio/',
  },
};

export default function HomePage() {
  return <HomePageClient />;
}
