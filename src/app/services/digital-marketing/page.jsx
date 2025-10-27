import React from 'react';
import DigitalMarketingPageClient from './DigitalMarketingPageClient';


export const metadata = {
  title:
    "Digital Marketing Agency in Udaipur | SEO, Social Media & Ads – BeezTech Studio",
  description:
    "BeezTech is a top digital marketing agency in Udaipur offering SEO, social media management, paid ads, influencer marketing, and online reputation management. Serving clients in Indore, Gandhinagar, and overseas with proven marketing results.",
  keywords: [
    "digital marketing Udaipur",
    "SEO services Udaipur",
    "social media management Udaipur",
    "paid ads Udaipur",
    "Google Ads Indore",
    "Facebook Ads Gandhinagar",
    "influencer marketing Udaipur",
    "video marketing Udaipur",
    "ORM services Udaipur",
    "digital agency Rajasthan",
    "BeezTech Studio marketing services",
  ],
  authors: [{ name: "BeezTech Studio" }],
  robots: "index, follow",

  openGraph: {
    title:
      "Digital Marketing Agency in Udaipur | SEO, Social Media & Ads – BeezTech Studio",
    description:
      "Professional digital marketing services by BeezTech Studio in Udaipur — including SEO, social media management, Google Ads, influencer marketing, and video campaigns for startups and brands.",
    url: "https://www.beeztech.studio/services/digital-marketing",
    type: "website",
    images: [
      {
        url: "https://www.beeztech.studio/images/og-digital-marketing.png",
        width: 1200,
        height: 630,
        alt: "BeezTech Studio – Digital Marketing Services in Udaipur",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title:
      "Digital Marketing Services in Udaipur – SEO, Social Media, Paid Ads | BeezTech Studio",
    description:
      "Boost your online presence with BeezTech Studio — Udaipur’s expert digital marketing agency offering SEO, SMM, Google Ads, influencer and video marketing.",
    images: ["https://www.beeztech.studio/images/og-digital-marketing.png"],
  },

  alternates: {
    canonical: "https://www.beeztech.studio/services/digital-marketing",
  },
};

 

export default function DigitalMarketingPage() {
  return <DigitalMarketingPageClient />;
}
