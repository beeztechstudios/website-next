import Navbar from "@/components/Navbar";
import "./globals.css"; // global styles
import Footer from "@/components/Footer";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Global meta tags that are safe for all pages */}
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="author" content="BeezTech" />
        <meta name="robots" content="index, follow" />
      </head>

      <body>
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
