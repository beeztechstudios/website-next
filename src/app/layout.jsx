// import Navbar from "@/components/Navbar";
// import "./globals.css"; // global styles
// import Footer from "@/components/Footer";
// import { Roboto, Epilogue, Fira_Sans } from "next/font/google";

// // Optimized font loading with next/font
// const roboto = Roboto({
//   weight: ['400', '500', '700'],
//   subsets: ['latin'],
//   variable: '--font-roboto',
//   display: 'swap',
// });

// const epilogue = Epilogue({
//   weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
//   subsets: ['latin'],
//   variable: '--font-epilogue',
//   display: 'swap',
// });

// const firaSans = Fira_Sans({
//   weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
//   subsets: ['latin'],
//   variable: '--font-fira-sans',
//   display: 'swap',
// });

// // Global Metadata for SEO
// export const metadata = {
//   metadataBase: new URL('https://www.beeztech.studio'),
//   title: {
//     default: 'BeezTech Studio - Creative Digital Agency in Udaipur',
//     template: '%s | BeezTech Studio'
//   },
//   description: 'BeezTech Studio is a top creative digital agency in Udaipur, Rajasthan. We specialize in web development, branding, digital marketing, media production, and SaaS development to help businesses grow online.',
//   keywords: [
//     'digital agency udaipur',
//     'web development udaipur',
//     'branding agency udaipur',
//     'digital marketing udaipur',
//     'creative agency rajasthan',
//     'website design udaipur',
//     'UI/UX design',
//     'SaaS development',
//     'mobile app development',
//     'BeezTech Studio'
//   ],
//   authors: [{ name: 'BeezTech Studio', url: 'https://www.beeztech.studio' }],
//   creator: 'BeezTech Studio',
//   publisher: 'BeezTech Studio',
//   formatDetection: {
//     email: false,
//     address: false,
//     telephone: false,
//   },
//   openGraph: {
//     type: 'website',
//     locale: 'en_US',
//     url: 'https://www.beeztech.studio',
//     siteName: 'BeezTech Studio',
//     title: 'BeezTech Studio - Creative Digital Agency in Udaipur',
//     description: 'Full-service digital agency in Udaipur: Web Development, Branding, Digital Marketing, Media Production & SaaS Development. Transform your business with BeezTech.',
//     images: [
//       {
//         url: '/images/og-home.png',
//         width: 1200,
//         height: 630,
//         alt: 'BeezTech Studio - Creative Digital Agency',
//       }
//     ],
//   },
//   twitter: {
//     card: 'summary_large_image',
//     title: 'BeezTech Studio - Creative Digital Agency in Udaipur',
//     description: 'Full-service digital agency specializing in web development, branding, and digital marketing in Udaipur, Rajasthan.',
//     images: ['/images/og-home.png'],
//   },
//   robots: {
//     index: true,
//     follow: true,
//     googleBot: {
//       index: true,
//       follow: true,
//       'max-video-preview': -1,
//       'max-image-preview': 'large',
//       'max-snippet': -1,
//     },
//   },
//   icons: {
//     icon: '/favicon.ico',
//     shortcut: '/favicon.ico',
//     apple: '/apple-touch-icon.png',
//   },
//   manifest: '/site.webmanifest',
//   verification: {
//     // Add your verification codes here
//     // google: 'your-google-verification-code',
//     // yandex: 'your-yandex-verification-code',
//   },
// };

// // JSON-LD structured data for organization
// const organizationSchema = {
//   "@context": "https://schema.org",
//   "@type": "Organization",
//   "name": "BeezTech Studio",
//   "url": "https://www.beeztech.studio",
//   "logo": "https://www.beeztech.studio/Logo_Black.png",
//   "description": "BeezTech Studio is a creative digital agency specializing in web development, branding, digital marketing, and media production based in Udaipur, Rajasthan, India.",
//   "address": {
//     "@type": "PostalAddress",
//     "addressLocality": "Udaipur",
//     "addressRegion": "Rajasthan",
//     "addressCountry": "IN"
//   },
//   "sameAs": [
//     "https://www.linkedin.com/company/beeztech-studio",
//     "https://www.instagram.com/beeztech.studio"
//   ],
//   "contactPoint": {
//     "@type": "ContactPoint",
//     "contactType": "Customer Service",
//     "email": "contact@beeztech.studio"
//   }
// };

// const websiteSchema = {
//   "@context": "https://schema.org",
//   "@type": "WebSite",
//   "name": "BeezTech Studio",
//   "url": "https://www.beeztech.studio",
//   "potentialAction": {
//     "@type": "SearchAction",
//     "target": "https://www.beeztech.studio/blogs?search={search_term_string}",
//     "query-input": "required name=search_term_string"
//   }
// };

// export default function RootLayout({ children }) {
//   return (
//     <html lang="en" className={`${roboto.variable} ${epilogue.variable} ${firaSans.variable}`}>
//       <head>
//         {/* Global meta tags that are safe for all pages */}
//         <meta charSet="UTF-8" />
//         <meta name="viewport" content="width=device-width, initial-scale=1.0" />
//         <meta name="author" content="BeezTech Studio" />
//         <meta name="robots" content="index, follow" />

//         {/* JSON-LD Structured Data */}
//         <script
//           type="application/ld+json"
//           dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
//         />
//         <script
//           type="application/ld+json"
//           dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
//         />
//       </head>

//       <body className={roboto.className}>
//         {/* Global Navbar */}
//         <Navbar />

//         {/* Page content */}
//         <main>{children}</main>

//         {/* Global Footer */}
//         <Footer />
//       </body>
//     </html>
//   );
// }
import Navbar from "@/components/Navbar";
import "./globals.css"; // global styles
import Footer from "@/components/Footer";
// import { Roboto, Epilogue, Fira_Sans } from "next/font/google";

// // Optimized font loading with next/font
// const roboto = Roboto({
//   weight: ['400', '500', '700'],
//   subsets: ['latin'],
//   variable: '--font-roboto',
//   display: 'swap',
// });

// const epilogue = Epilogue({
//   weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
//   subsets: ['latin'],
//   variable: '--font-epilogue',
//   display: 'swap',
// });

// const firaSans = Fira_Sans({
//   weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
//   subsets: ['latin'],
//   variable: '--font-fira-sans',
//   display: 'swap',
// });

// Global Metadata for SEO
export const metadata = {
  metadataBase: new URL('https://www.beeztech.studio'),
  title: {
    default: 'BeezTech Studio - Creative Digital Agency in Udaipur',
    template: '%s | BeezTech Studio'
  },
  description: 'BeezTech Studio is a top creative digital agency in Udaipur, Rajasthan. We specialize in web development, branding, digital marketing, media production, and SaaS development to help businesses grow online.',
  keywords: [
    'digital agency udaipur',
    'web development udaipur',
    'branding agency udaipur',
    'digital marketing udaipur',
    'creative agency rajasthan',
    'website design udaipur',
    'UI/UX design',
    'SaaS development',
    'mobile app development',
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
    title: 'BeezTech Studio - Creative Digital Agency in Udaipur',
    description: 'Full-service digital agency in Udaipur: Web Development, Branding, Digital Marketing, Media Production & SaaS Development. Transform your business with BeezTech.',
    images: [
      {
        url: '/images/og-home.png',
        width: 1200,
        height: 630,
        alt: 'BeezTech Studio - Creative Digital Agency',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'BeezTech Studio - Creative Digital Agency in Udaipur',
    description: 'Full-service digital agency specializing in web development, branding, and digital marketing in Udaipur, Rajasthan.',
    images: ['/images/og-home.png'],
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
    apple: '/apple-touch-icon.png',
  },
  manifest: '/site.webmanifest',
  verification: {
    // Add your verification codes here
    // google: 'your-google-verification-code',
    // yandex: 'your-yandex-verification-code',
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
    "https://www.linkedin.com/company/beeztech-studio",
    "https://www.instagram.com/beeztech.studio"
  ],
  "contactPoint": {
    "@type": "ContactPoint",
    "contactType": "Customer Service",
    "email": "contact@beeztech.studio"
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
