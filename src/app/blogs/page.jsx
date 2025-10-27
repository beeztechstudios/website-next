import React from 'react';
import BeezTechBlogPageClient from './BeezTechBlogPageClient';

<Head>
  {/* ---- Primary SEO ---- */}
  <title>BeezTech Studio Blog | Web Design, Branding & Digital Marketing Insights in Udaipur & Beyond</title>

  <meta
    name="description"
    content="Discover expert insights from BeezTech Studio — Udaipur’s leading creative digital agency. Explore blogs on IT solutions, branding, product design, web development, SaaS, and digital marketing for startups and enterprises across India and overseas."
  />

  <meta
    name="keywords"
    content="BeezTech Studio Blog, Branding blogs India, Digital agency blog Udaipur, IT blogs Rajasthan, Web development blogs Udaipur, SaaS design blogs, UI UX blogs, Product design insights, Digital marketing blogs India, BeezTech branding insights"
  />

  <meta name="author" content="BeezTech Studio" />
  <meta name="robots" content="index, follow" />

  {/* ---- Open Graph (Facebook, LinkedIn, etc.) ---- */}
  <meta property="og:title" content="BeezTech Studio Blog | Creative, Branding & IT Insights from Udaipur" />
  <meta property="og:description" content="Read BeezTech Studio’s latest insights on branding, SaaS design, web development, and digital marketing — crafted for modern businesses in India and abroad." />
  <meta property="og:type" content="website" />
  <meta property="og:url" content="https://www.beeztech.studio/blogs" />
  <meta property="og:site_name" content="BeezTech Studio" />
  <meta property="og:locale" content="en_US" />
  {/* <meta property="og:image" content="https://www.beeztech.studio/images/og-blogs.png" /> */}
  <meta property="og:image:alt" content="BeezTech Studio Blog - Creative Branding & Web Insights" />

  {/* ---- Twitter Card ---- */}
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="BeezTech Studio Blog | Creative, Branding & IT Insights" />
  <meta name="twitter:description" content="Explore BeezTech Studio’s blogs on IT, branding, SaaS, and digital marketing — insights for startups, agencies, and global businesses." />
  {/* <meta name="twitter:image" content="https://www.beeztech.studio/images/og-blogs.png" /> */}
  <meta name="twitter:image:alt" content="BeezTech Studio Blog - Creative Insights" />

  {/* ---- Canonical ---- */}
  <link rel="canonical" href="https://www.beeztech.studio/blogs" />

  {/* ---- Additional Enhancements ---- */}
  <meta name="geo.region" content="IN-RJ" />
  <meta name="geo.placename" content="Udaipur" />
  <meta name="geo.position" content="24.5854;73.7125" />
  <meta name="ICBM" content="24.5854, 73.7125" />

  {/* ---- Optional Schema for better indexing ---- */}
  <script
    type="application/ld+json"
    dangerouslySetInnerHTML={{
      __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Blog",
        "url": "https://www.beeztech.studio/blogs",
        "name": "BeezTech Studio Blog",
        "description":
          "Expert insights on branding, product design, SaaS, web development, and digital marketing from BeezTech Studio in Udaipur.",
        "publisher": {
          "@type": "Organization",
          "name": "BeezTech Studio",
          "url": "https://www.beeztech.studio",
          "logo": "https://www.beeztech.studio/Logo_Black.png",
        },
        "inLanguage": "en-US",
      }),
    }}
  />
</Head>

 

export default function BeezTechBlogPage() {
  return <BeezTechBlogPageClient />;
}
