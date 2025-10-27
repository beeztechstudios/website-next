
import Navbar from "@/components/Navbar";
import "./globals.css"; // global styles
import Footer from "@/components/Footer";


// Global Metadata for SEO
// ✅ Improved Global Metadata for BeezTech Studio
export const metadata = {
  metadataBase: new URL('https://www.beeztech.studio'),
  title: {
    default: 'BeezTech Studio – Creative Digital Agency in Udaipur',
    template: '%s | BeezTech Studio'
  },
  description:
    'BeezTech Studio is a creative digital agency based in Udaipur, Rajasthan helping startups, law firms, and growing businesses with web development, branding, product design, and digital marketing. We serve clients across India, including Indore and Gandhinagar, and overseas.',
  keywords: [
    'digital agency Udaipur',
    'branding agency Rajasthan',
    'UI UX design for SaaS startups',
    'custom web development Udaipur',
    'creative agency Indore',
    'brand identity design Gandhinagar',
    'product design for law firms',
    'web app development India',
    'affordable digital agency Udaipur',
    'BeezTech Studio'
  ],
  authors: [{ name: 'BeezTech Studio', url: 'https://www.beeztech.studio' }],
  creator: 'BeezTech Studio',
  publisher: 'BeezTech Studio',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://www.beeztech.studio',
    siteName: 'BeezTech Studio',
    title: 'BeezTech Studio – Creative Digital Agency in Udaipur',
    description:
      'Full-service creative studio offering Branding, Web Development, UI/UX, Digital Marketing, and Media Production. Serving Udaipur, Indore, Gandhinagar, and overseas clients across SaaS, LegalTech, and business industries.',
    
  },
  twitter: {
    card: 'summary_large_image',
    title: 'BeezTech Studio – Creative Digital Agency in Udaipur',
    description:
      'BeezTech Studio is a full-service digital agency for startups and businesses. We offer web development, branding, digital marketing, and product design globally.',
   
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
   
  },
  manifest: '/site.webmanifest',
  alternates: {
    canonical: 'https://www.beeztech.studio',
  },
  verification: {
    google: 'h8AVtcYpu9JM7KWRC5j7tL6dVHEFS7p8wD_Y1fArAgY',
  },
};


// JSON-LD structured data for organization
const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "BeezTech Studio",
  "url": "https://www.beeztech.studio",
  "logo": "https://www.beeztech.studio/Logo_Black.png",
  "description": "BeezTech Studio is a creative digital agency specializing in web development, branding, digital marketing, and media production based in Udaipur, Rajasthan, India.",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Udaipur",
    "addressRegion": "Rajasthan",
    "addressCountry": "IN"
  },
  "sameAs": [
    "https://www.linkedin.com/company/beeztech",
    "https://www.instagram.com/beeztech?igsh=MXJxamlwMnZ2a3N4ZA%3D%3D"
  ],
  "contactPoint": {
    "@type": "ContactPoint",
    "contactType": "Customer Service",
    "email": "hello@beeztech.studio"
  }
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "BeezTech Studio",
  "url": "https://www.beeztech.studio",
  "potentialAction": {
    "@type": "SearchAction",
    "target": "https://www.beeztech.studio/blogs?search={search_term_string}",
    "query-input": "required name=search_term_string"
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" >
      <head>
        {/* Global meta tags that are safe for all pages */}
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="author" content="BeezTech Studio" />
        <meta name="robots" content="index, follow" />

        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />

         <link
      href="https://fonts.googleapis.com/css2?family=Epilogue:ital,wght@0,100..900;1,100..900&family=Libre+Franklin:ital,wght@0,100..900;1,100..900&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Roboto:ital,wght@0,100..900;1,100..900&family=Volkhov:ital,wght@0,400;0,700;1,400;1,700&display=swap"
      rel="stylesheet"
    />
        <meta name="google-site-verification" content="h8AVtcYpu9JM7KWRC5j7tL6dVHEFS7p8wD_Y1fArAgY" />
      </head>

      <body >
        {/* Global Navbar */}
        <Navbar />

        {/* Page content */}
        <main>{children}</main>

        {/* Global Footer */}
        <Footer />
      </body>
    </html>
  );
}