import React from 'react';
import BeezTechBlogPageClient from './BeezTechBlogPageClient';

export const metadata = {
  // ---- Primary SEO ----
  title: 'BeezTech Studio Blog | Web Design, Branding & Digital Marketing Insights in Udaipur',
  description:
    'Discover expert insights from BeezTech Studio — Udaipur’s leading creative digital agency. Explore blogs on IT solutions, branding, product design, web development, SaaS, and digital marketing for startups and enterprises across India and overseas.',
  keywords:
    'BeezTech Studio Blog, Branding blogs India, Digital agency blog Udaipur, IT blogs Rajasthan, Web development blogs Udaipur, SaaS design blogs, UI UX blogs, Product design insights, Digital marketing blogs India, BeezTech branding insights',
  authors: [{ name: 'BeezTech Studio' }],
  robots: {
    index: true,
    follow: true,
  },

  // ---- Open Graph (Facebook, LinkedIn, etc.) ----
  openGraph: {
    title: 'BeezTech Studio Blog | Creative, Branding & IT Insights from Udaipur',
    description:
      'Read BeezTech Studio’s latest insights on branding, SaaS design, web development, and digital marketing — crafted for modern businesses in India and abroad.',
    type: 'website',
    url: 'https://www.beeztech.studio/blogs',
    siteName: 'BeezTech Studio',
    locale: 'en_US',
    images: [
      {
        url: 'https://www.beeztech.studio/images/og-blogs.png',
        width: 1200,
        height: 630,
        alt: 'BeezTech Studio Blog - Creative Branding & Web Insights',
      },
    ],
  },

  // ---- Twitter Card ----
  twitter: {
    card: 'summary_large_image',
    title: 'BeezTech Studio Blog | Creative, Branding & IT Insights',
    description:
      'Explore BeezTech Studio’s blogs on IT, branding, SaaS, and digital marketing — insights for startups, agencies, and global businesses.',
    images: ['https://www.beeztech.studio/images/og-blogs.png'],
  },

  // ---- Canonical URL ----
  alternates: {
    canonical: 'https://www.beeztech.studio/blogs',
  },

  // ---- Geo & Location ----
  other: {
    'geo.region': 'IN-RJ',
    'geo.placename': 'Udaipur',
    'geo.position': '24.5854;73.7125',
    ICBM: '24.5854, 73.7125',
  },

  // ---- Optional Schema (JSON-LD) ----
  metadataBase: new URL('https://www.beeztech.studio'),
};




 

export default function BeezTechBlogPage() {
  return <BeezTechBlogPageClient />;
}
