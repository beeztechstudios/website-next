// components/layout/Footer.tsx
'use client';
import React from 'react';
// 💡 Use Link from next/link for internal routing in Next.js
import Link from 'next/link'; 
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin, Youtube, LucideIcon } from 'lucide-react';

// --- TypeScript Interface Definitions ---

// Type for navigation/service links
interface NavLink {
    name: string;
    href: string;
}

// Type for social media links
interface SocialLink {
    name: string;
    href: string;
    // 💡 LucideIcon is the correct type for icons imported from lucide-react
    icon: LucideIcon; 
}

// --- Data ---

const quickLinks: NavLink[] = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about' },
    // Incorporating a primary keyword 'pet services in Udaipur' (as an example)
    { name: 'Services', href: '/services' }, 
    { name: 'Portfolio', href: '/works' },
    // Incorporating a long-tail keyword 'book pet service appointment' (as an example)
    { name: 'Contact / Book a Call', href: '/book-call' } 
];

const services: NavLink[] = [
    { name: 'Graphic & Media Production', href: '/services/media-production' },
    { name: 'Web & App Development', href: '/services/web-development' },
    { name: 'Branding & Identity', href: '/services/branding' },
    { name: 'Digital Marketing', href: '/services/digital-marketing' },
    { name: 'SaaS Development', href: '/services/saas-development' }, // Changed path for clarity
];

const socialLinks: SocialLink[] = [
    // { name: 'Facebook', icon: Facebook, href: 'https://facebook.com' },
    { name: 'Twitter', icon: Twitter, href: 'https://twitter.com' },
    { name: 'Instagram', icon: Instagram, href: 'https://instagram.com' },
    { name: 'LinkedIn', icon: Linkedin, href: 'https://linkedin.com' },
    // { name: 'YouTube', icon: Youtube, href: 'https://youtube.com' }
];

// --- Component ---

// 💡 Explicitly type the functional component as React.FC
const Footer: React.FC = () => {
    
    // --- SEO Integration Reminder ---
    // The address below already includes the Geographical Keyword: "Udaipur, Rajasthan, India"
    // The mail link uses the company name: "hello@beeztech.studio"

    return (
        <footer className="bg-black relative text-white">
            {/* Main Footer Content */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-16 py-12 sm:py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
                    
                    {/* Company Info */}
                    <div className="space-y-6">
                        {/* Logo Space - Consider wrapping with Link to home */}
                        <div className="mb-6">
                            {/* In Next.js, use the Image component for optimized images */}
                            <img className='w-58' src="/Logo_White.png" alt="BeezTech Logo" />
                            <div className="w-16 h-1 bg-orange-500 mt-2"></div>
                        </div>
                        
                        <p className="text-gray-400 text-sm leading-relaxed">
                            Buzzing ideas into reality. We design, build, and grow your digital presence with creativity and innovation.
                        </p>
                        
                        {/* Social Media Links */}
                        <div className="flex gap-4">
                            {socialLinks.map((social) => (
                                <a
                                    key={social.name}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-orange-500 transition-colors duration-300"
                                    aria-label={`Visit BeezTech on ${social.name}`}
                                >
                                    {/* 💡 Rendering the LucideIcon component */}
                                    <social.icon className="w-5 h-5" /> 
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-lg font-bold mb-6 text-white">Quick Links</h3>
                        <ul className="space-y-3">
                            {quickLinks.map((link) => (
                                <li key={link.name}>
                                    {/* 💡 Use the Next.js Link component for internal navigation */}
                                    <Link href={link.href} className="text-gray-400 hover:text-orange-500 transition-colors duration-300 text-sm flex items-center gap-2 group" >
                                        
                                            
                                        
                                            <span className="w-0 h-px bg-orange-500 group-hover:w-4 transition-all duration-300"></span>
                                            {link.name}
                                        
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Services */}
                    <div>
                        <h3 className="text-lg font-bold mb-6 text-white">Our Services</h3>
                        <ul className="space-y-3">
                            {services.map((service) => (
                                <li key={service.name}>
                                    {/* 💡 Use the Next.js Link component for internal navigation */}
                                    <Link href={service.href} className="text-gray-400 hover:text-orange-500 transition-colors duration-300 text-sm flex items-center gap-2 group" >
                                        
                                            
                                        
                                            <span className="w-0 h-px bg-orange-500 group-hover:w-4 transition-all duration-300"></span>
                                            {service.name}
                                        
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h3 className="text-lg font-bold mb-6 text-white">Contact Us</h3>
                        <ul className="space-y-4">
                            {/* Address with Geographical Keyword */}
                            <li className="flex items-start gap-3 text-gray-400 text-sm">
                                <MapPin className="w-5 h-5 text-orange-500 flex-shrink-0 mt-0.5" />
                                <span>
                                    3v/1 Prabhat Nagar sec.5, <br />
                                    **Udaipur**, Rajasthan, India
                                </span>
                            </li>
                            {/* Phone Number */}
                            <li className="flex items-center gap-3 text-gray-400 text-sm">
                                <Phone className="w-5 h-5 text-orange-500 flex-shrink-0" />
                                <a href="tel:+917877571101" className="hover:text-orange-500 transition-colors">
                                    +917877571101
                                </a>
                            </li>
                            {/* Email Address */}
                            <li className="flex items-center gap-3 text-gray-400 text-sm">
                                <Mail className="w-5 h-5 text-orange-500 flex-shrink-0" />
                                <a href="mailto:hello@beeztech.studio" className="hover:text-orange-500 transition-colors">
                                    hello@beeztech.studio
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Divider Line */}
            <div className="border-t border-gray-800"></div>

            {/* Bottom Footer */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-16 py-6">
                <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-gray-400">
                    <p>
                        © {new Date().getFullYear()} BeezTech. All rights reserved.
                    </p>
                    <div className="flex gap-6">
                        {/* 💡 Use Link for Policy pages */}
                        <Link href="/privacy-policy" className="hover:text-orange-500 transition-colors" >
                             
                                Privacy Policy
                            
                        </Link>
                        <span className="text-gray-600">|</span>
                        <Link href="/terms-of-service" className="hover:text-orange-500 transition-colors" >
                             
                                Terms of Service
                            
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;