
import React from 'react';
import PortfolioPage from './Work_client';

export const metadata = {
  title: 'About Beeztech – Best Branding & Website Development Agency in Udaipur',
  description:
    'BeezTech is a branding, website development, UI/UX design, and SaaS/MVP development agency based in Udaipur. Learn our mission, process, and why 50+ brands trust us for digital growth.',
  keywords:
    'About Beeztech, Branding agency Udaipur, Website development Udaipur, UI UX design Udaipur, App development Udaipur, SaaS development Udaipur, Creative agency Udaipur',
  
  authors: [{ name: 'Beeztech' }],

  openGraph: {
    title: 'About Beeztech – Best Branding & Website Development Agency in Udaipur',
    description:
      'Discover Beeztech — Udaipur’s leading agency for branding, web development, UI/UX design, SaaS & MVP creation, and digital marketing.',
    url: 'https://www.beeztech.studio/about',
    siteName: 'Beeztech',
    type: 'website',
    images: [
      {
        url: 'https://res.cloudinary.com/dwz07ormq/image/upload/v1760026418/workspace_fzoeje.jpg',
        width: 1200,
        height: 630,
        alt: 'About Beeztech Branding and Web Development Agency',
      },
    ],
  },

  twitter: {
    card: 'summary_large_image',
    title: 'About Beeztech – Branding & Web Development Agency in Udaipur',
    description:
      'Learn about Beeztech’s journey, mission, and expertise in branding, website development, UI/UX, SaaS development, and digital marketing.',
    images: ['https://res.cloudinary.com/dwz07ormq/image/upload/v1760026418/workspace_fzoeje.jpg'],
  },

  alternates: {
    canonical: 'https://www.beeztech.studio/about',
  },
};

export default function WorkPage() {
  return <PortfolioPage />;
}

