"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Pencil,
  BarChart2,
  Megaphone,
  RefreshCcw,
  Monitor,
  Zap,
  ChevronDown,
  Star,
  Phone,
} from "lucide-react";
import Link from "next/link";
import ContactSection from "../../../components/ContactSection";

const BrandingPageClient = () => {
  const [scrollCol1, setScrollCol1] = useState(0);
  const [scrollCol2, setScrollCol2] = useState(0);
  const [openFaq, setOpenFaq] = useState(-1);

  // Auto-scroll animation for image grids
  const rightImagesCol1 = [
    "https://img.freepik.com/premium-vector/elegant-luxury-logo-design-featuring-golden-elements-premium-branding-highend-businesses_1184980-10363.jpg",
    "https://cdn.dribbble.com/userupload/16279500/file/original-05fd4e6eae00bed6e978a728f4921800.png?format=webp&resize=400x300&vertical=center",
    "https://www.logopeople.in/wp-content/uploads/2023/05/Less-is-more-always-1.png",
    "https://img.freepik.com/premium-photo/x-k-x-letter-logo-design-luxury-gold-monogram-emblem_1308175-168995.jpg?semt=ais_hybrid&w=740&q=80",
  ];

  const rightImagesCol2 = [
    "https://i.pinimg.com/236x/81/e6/ce/81e6ce9935e6aff43903bedc35d64754.jpg",
    "https://static.vecteezy.com/system/resources/previews/008/561/289/non_2x/beauty-woman-fashion-logo-boutique-abstract-design-icon-illustration-vector.jpg",
    "https://i.pinimg.com/236x/81/e6/ce/81e6ce9935e6aff43903bedc35d64754.jpg",
    "https://marketplace.canva.com/EAFv_yqJeek/2/0/1600w/canva-black-%26-white-minimalist-signature-personal-brand-logo-XA8Ge8-5GII.jpgg",
  ];

  useEffect(() => {
    let animationFrame;
    const animate = () => {
      setScrollCol1((prev) => (prev + 0.1) % 100);
      setScrollCol2((prev) => (prev - 0.1 + 100) % 100);
      animationFrame = requestAnimationFrame(animate);
    };
    animate();
    return () => cancelAnimationFrame(animationFrame);
  }, []);

  // Services
  const services = [
    {
      icon: "https://res.cloudinary.com/dwz07ormq/image/upload/v1760180491/Brand-Design-icon-new-001_ohgnzj.png",
      title: "Visual Identity",
      description:
        "Guidelines, icons, typography, illustrations, patterns, and other visual elements that help attract your audience and engage them.",
    },
    {
      icon: "https://res.cloudinary.com/dwz07ormq/image/upload/v1760180491/Brand-Strategy-icon-001_z6ncpn.png",
      title: "Brand Strategy & Communication",
      description:
        "360° strategic plan to provide your brand with a unique identity to build customer trust using name, tagline & multiple brand touchpoints.",
    },
    {
      icon: "https://res.cloudinary.com/dwz07ormq/image/upload/v1760180491/Brand-Messaging-icon-new-001_f15d5k.png",
      title: "Logo Design & Branding Services",
      description:
        "Click-worthy, compelling, and consistent brand messaging that effectively communicates your brand story & product offering.",
    },
    {
      icon: "https://res.cloudinary.com/dwz07ormq/image/upload/v1760180491/Rebranding-icon-001_i9umrn.png",
      title: "Rebranding Services",
      description:
        "Refreshed brand image to offer new perspectives and visual transformation that aligns with your core values & audience.",
    },
    {
      icon: "https://res.cloudinary.com/dwz07ormq/image/upload/v1760180491/Brand-Strategy-icon-001_z6ncpn.png",
      title: "Website Design & Development",
      description:
        "Stunning and user-friendly web identities that strengthen your brand’s credibility and accelerate web presence.",
    },
  ];

  // FAQs
  const faqs = [
    {
      q: "How does BeezTech ensure my website is scalable?",
      a: "We focus on clean architecture using modern stacks like Next.js/React and Node.js. This modular design ensures that as your user base grows or new features are needed, the application can scale horizontally without costly refactoring.",
    },
    {
      q: "Do you offer post-launch maintenance and support?",
      a: "Absolutely. We offer comprehensive plans for security updates, performance optimization, bug fixes, and feature additions, acting as your long-term tech partner.",
    },
    {
      q: "What is your typical timeline for an MVP or Custom Web App?",
      a: "MVP typically takes 4-8 weeks. Custom web apps or full SaaS products range from 8-16 weeks depending on scope.",
    },
    {
      q: "What is the difference between a Web App and a Business Website?",
      a: "A Business Website is primarily for branding & lead generation. A Web App includes complex logic, user accounts, custom dashboards, and dynamic data processing. We build both based on your business goals.",
    },
  ];

  // Framer motion variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.3 },
    },
  };
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };
  const itemSlide = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100 } },
  };
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.3 },
    },
  };

  return (
    <>
      

      <div className="bg-white min-h-screen mt-4">
        {/* --- Hero Section --- */}
        <section className="px-4 sm:px-6 text-gray-900 min-h-screen flex items-center py-16 sm:py-28">
          <div className="max-w-7xl mx-auto w-full">
            <motion.div
              className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 lg:gap-24 items-center relative z-10"
              variants={container}
              initial="hidden"
              animate="show"
            >
              {/* Left */}
              <div className="space-y-4 lg:space-y-6">
                <motion.div
                  variants={itemSlide}
                  className="inline-flex items-center gap-2 bg-black text-white px-4 py-2 rounded-full text-xs sm:text-sm font-medium"
                >
                  <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
                  BRANDING SERVICES
                </motion.div>
                <motion.h1
                  variants={itemSlide}
                  className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-4 leading-tight sm:leading-tight lg:leading-tight"
                >
                  Transform Your Idea{" "}
                  <span className="text-black">Into Iconic Brand</span>
                </motion.h1>
                <motion.p
                  variants={itemSlide}
                  className="text-base sm:text-xl text-gray-600 max-w-xl"
                >
                  Our goal is simple: create web solutions that not only look
                  stunning but also drive measurable results for your business.
                </motion.p>
                <motion.div
                  variants={itemSlide}
                  className="flex flex-wrap gap-4 pt-4 sm:pt-6"
                >
                  <Link
                    href="/book-call"
                    className="bg-orange-500 hover:bg-black text-white px-6 py-3 sm:px-8 sm:py-4 rounded-full font-semibold flex items-center gap-2 transition-all shadow-lg hover:shadow-xl text-sm sm:text-base"
                  >
                    Book Free Call <Phone className="w-4 h-4 sm:w-5 sm:h-5" />
                  </Link>
                </motion.div>
              </div>

              {/* Right - Scrolling Images */}
              <div className="flex gap-4 overflow-hidden h-[400px] md:h-[600px] relative">
                <div
                  className="flex flex-col gap-4 flex-shrink-0 w-1/2"
                  style={{
                    transform: `translateY(-${scrollCol1}%)`,
                    transition: "transform 0.05s linear",
                  }}
                >
                  {[...rightImagesCol1, ...rightImagesCol1].map((img, idx) => (
                    <div
                      key={idx}
                      className="w-full h-38 md:h-72 rounded-3xl overflow-hidden flex-shrink-0 aspect-square"
                    >
                      <img
                        src={img}
                        alt={`brand-img-col1-${idx}`}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ))}
                </div>
                <div
                  className="flex flex-col gap-4 flex-shrink-0 w-1/2"
                  style={{
                    transform: `translateY(-${scrollCol2}%)`,
                    transition: "transform 0.05s linear",
                  }}
                >
                  {[...rightImagesCol2, ...rightImagesCol2].map((img, idx) => (
                    <div
                      key={idx}
                      className="w-full h-38 md:h-72 rounded-3xl overflow-hidden flex-shrink-0 aspect-square"
                    >
                      <img
                        src={img}
                        alt={`brand-img-col2-${idx}`}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* --- Services Section --- */}
        <section className="bg-black text-white py-20 px-4 md:px-20 overflow-hidden">
          <div className="container max-w-7xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold mb-12 leading-tight">
              360° Suite of Digital Branding Services
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 lg:gap-12 place-items-center">
              {services.map((service, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="flex flex-col items-center text-center bg-[#111] rounded-2xl p-6 sm:p-8 hover:scale-105 transition-all duration-300 w-full max-w-xs sm:max-w-sm"
                >
                  <img
                    src={service.icon}
                    alt={service.title}
                    className="mb-4 w-20 h-20 sm:w-24 sm:h-24 object-contain"
                  />
                  <h3 className="text-lg sm:text-xl font-semibold mb-2">
                    {service.title}
                  </h3>
                  <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                    {service.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* --- Rebranding Section --- */}
        <section className="bg-black text-white py-20 px-4 md:px-20 border-t border-gray-800">
          <div className="container max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center gap-10">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="w-full md:w-1/2"
            >
              <h2 className="text-3xl md:text-5xl font-bold mb-6">
                Launch your New Brand or Transform your existing Branding – With
                Us...
              </h2>
              <p className="text-gray-300 text-base md:text-xl mb-4">
                Whether you’re introducing your product or service into a
                competitive market or planning a complete branding revamp, our
                digital branding services are the perfect solution to your
                worries.
              </p>
              <p className="text-gray-300 text-base md:text-xl mb-4">
                The key idea is to present a memorable visual identity and for
                that, we thoroughly analyze your brand requirements and
                objectives – combined into a robust brand strategy.
              </p>
              <p className="text-gray-300 text-base md:text-xl">
                While working on the strategy, we collaborate with you to
                conceptualize your brand launch campaign and launch/optimize
                your existing brand activations.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="md:w-1/2 flex justify-center items-center"
            >
              <img
                src="https://res.cloudinary.com/dwz07ormq/image/upload/v1760181564/From-Brand-Launch-to-Rebranding_wxswtn.png"
                alt="Rebrand Illustration"
                className="w-full"
              />
            </motion.div>
          </div>
        </section>

        {/* --- FAQ Section --- */}
        <motion.section
          className="py-20 bg-white px-4 md:px-20"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
        >
          <div className="max-w-7xl mx-auto">
            <motion.div className="grid lg:grid-cols-2 gap-12">
              {/* Left Column */}
              <motion.div variants={itemVariants}>
                <span className="text-orange-500 font-semibold text-sm md:text-lg uppercase tracking-wider">
                  FAQs
                </span>
                <h2 className="text-4xl lg:text-5xl font-extrabold text-gray-900 mb-6 leading-tight">
                  Questions <span className="text-gray-400">& answers.</span>
                </h2>
                <p className="text-xl text-gray-600 mb-8">
                  Everything you need to know about our web development and
                  recurring support service.
                </p>

                <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100">
                  <div className="flex items-center gap-4 mb-5">
                    <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center flex-shrink-0">
                      <Zap className="w-6 h-6 text-gray-900" />
                    </div>
                    <div>
                      <p className="font-bold text-gray-900">
                        Have more questions?
                      </p>
                      <p className="text-sm text-gray-600">
                        Book a free discovery call with a founder
                      </p>
                    </div>
                  </div>
                  <Link
                    href="/book-call"
                    className="w-full bg-black text-white py-3 rounded-xl font-semibold hover:bg-orange-500 transition-colors flex items-center justify-center gap-2"
                  >
                    Book Free Call <Phone className="w-4 h-4" />
                  </Link>
                </div>
              </motion.div>

              {/* Right Column */}
              <motion.div className="space-y-4" variants={containerVariants}>
                {faqs.map((faq, idx) => (
                  <motion.div
                    key={idx}
                    className="bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-100"
                    variants={itemVariants}
                  >
                    <button
                      onClick={() => setOpenFaq(openFaq === idx ? -1 : idx)}
                      className="w-full p-6 text-left flex items-center justify-between hover:bg-yellow-50 transition-colors"
                    >
                      <span className="font-bold text-gray-900">{faq.q}</span>
                      <ChevronDown
                        className={`w-5 h-5 transition-transform text-orange-500 ${
                          openFaq === idx ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                    {openFaq === idx && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="px-6 pb-6 text-gray-600 leading-relaxed border-t border-gray-100 pt-4"
                      >
                        {faq.a}
                      </motion.div>
                    )}
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </motion.section>

        {/* Contact Section */}
        <ContactSection />
      </div>
    </>
  );
};

export default BrandingPageClient;
