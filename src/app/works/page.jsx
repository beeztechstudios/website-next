"use client";

import React, { useState, useRef } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { ExternalLink, X } from "lucide-react";
import TestimonialsSection from "../../components/Testimonials";
import ContactSection from "../../components/ContactSection";

const HeroSection = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className="max-w-7xl mx-auto pt-32 md:pt-40 lg:pt-48 mb-12 relative overflow-hidden"
    >
      {/* Rotating Logo Circle */}
      <div className="absolute top-64 md:top-52 right-12 w-24 h-24 sm:w-48 sm:h-48 z-10">
        <div className="relative w-full h-full">
          <div className="absolute inset-0 animate-spin-slow">
            <svg viewBox="0 0 100 100" className="w-full h-full">
              <path
                id="circlePath"
                fill="none"
                stroke="none"
                d="
                  M 50, 50
                  m -45, 0
                  a 45,45 0 1,1 90,0
                  a 45,45 0 1,1 -90,0
                "
              />
              <text fill="#ffffff">
                <textPath
                  href="#circlePath"
                  startOffset="0%"
                  className="uppercase text-[6px] tracking-[.3em] font-medium"
                >
                  DIGITAL · CREATIVE · AGENCY ·
                </textPath>
              </text>
            </svg>
          </div>
          <img src="/Icon.png" className="p-5" />
        </div>
      </div>

      <motion.p
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="text-orange-500 font-medium text-xl md:text-[24px] uppercase tracking-wider mb-2 border-b border-white/20 inline-block pb-1"
      >
        Case Studies
      </motion.p>

      <h1 className="text-7xl sm:text-8xl lg:text-[120px] font-bold text-white leading-none mt-4 uppercase">
        <motion.span
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          Amazing
        </motion.span>

        <div className="flex items-center space-x-4 py-6">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "4rem" }}
            transition={{ duration: 1, delay: 0.5 }}
            className="h-px bg-white/50 hidden sm:block"
          />
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex space-x-[-15px] opacity-70"
          >
            <div className="w-8 h-8 rounded-full border border-orange-500/90" />
            <div className="w-8 h-8 rounded-full border border-orange-500/90" />
            <div className="w-8 h-8 rounded-full border border-orange-500/90" />
          </motion.div>
          <motion.span
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            Work
          </motion.span>
        </div>
      </h1>
    </motion.div>
  );
};

const PortfolioPage = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start end", "end start"] });
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -70]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 70]);

  const portfolioItems = [
    {
      id: 1,
      title: "TARAKSH",
      category: "Brand Identity",
      image: "https://i.imgur.com/HhNZPOo.jpeg",
      challenge:
        "TARAKSH, an international law firm operating in Dubai and India, wanted to establish a timeless brand identity that reflected both their professional excellence and deep-rooted spiritual values. They needed a cohesive system that could translate their ethos into every brand touchpoint—from logo to stationery and digital presence.",
      solution:
        "We crafted a powerful and balanced brand identity inspired by the client’s devotion to ‘Tara Mata Devi’. The logo embodies divine guidance and fairness, integrating the star symbol for purity, the letter ‘T’ for TARAKSH, the letter ‘A’ for Aksh and Lord Shiva (balance and wisdom), and the scales of justice for equality. The visual system extended to elegant business cards, letterheads, and a modern website design—combining sophistication with spirituality.",
      results: [
        "A distinct and meaningful brand identity aligned with the firm’s values",
        "Consistent visual presence across print and digital platforms",
        "Positive feedback from clients and partners on the new professional image"
      ],
      techStack: ["Adobe Illustrator", "Photoshop", "Figma"],
    },

    {
      id: 2,
      title: "HiLe",
      category: "Brand Identity & Development",
      image: "https://i.imgur.com/eKWRRfS.png",
      challenge:
        "HiLe, a tech-driven HR platform for the legal industry, needed a complete brand and digital presence to establish trust and communicate innovation. The goal was to create a distinct identity and seamless digital experience that would connect law firms with the right talent efficiently.",
      solution:
        "We partnered with HiLe to build their brand from the ground up starting with strategy, naming, and visual identity, followed by a modern website and product interface design. The brand identity centers on simplicity, clarity, and connection. The green dot in the logo represents growth and human focus, while the clean typography conveys professionalism. The website was designed and developed to deliver a smooth, intuitive user experience with strong performance and scalability.",
      results: [
        "A unified brand and digital ecosystem built from concept to launch",
        "Increased credibility and engagement within the legal tech sector",
        "Seamless user experience across desktop and mobile platforms"
      ],
      techStack: ["Adobe Illustrator", "Figma", "React", "Next.js", "Tailwind CSS"],
    },
    {
      id: 3,
      title: "Merchant Xporters",
      category: "Brand Identity & Web Development",
      image: "https://i.imgur.com/sToaOF2.jpeg",
      challenge:
        "Merchant Xporters, a global export company, needed a strong brand identity and an impactful digital presence to represent their international operations. The challenge was to create a visual language and website that communicates reliability, growth, and global connectivity.",
      solution:
        "We developed a complete brand identity system that conveys trust and movement through bold typography, a dynamic logo, and a clean blue color palette. The symbol reflects global connections and forward momentum, aligning with the brand’s tagline ‘Beyond Exporting’. Alongside the visual identity, we designed and developed a responsive website that highlights the company’s services and global reach with a professional, modern interface.",
      results: [
        "A cohesive brand identity aligned with the company’s global vision",
        "A modern and responsive website enhancing digital credibility",
        "Improved client engagement and stronger online presence"
      ],
      techStack: ["Adobe Illustrator", "Figma", "React", "Next.js", "Tailwind CSS"],
    },
    {
      id: 4,
      title: "Alliedge Healthcare",
      category: "Brand Identity & Web Design",
      image: "https://i.imgur.com/FEvEqr3.png",
      challenge:
        "Alliedge Healthcare, India’s leading SaaS-based medical software provider, needed a modern and trustworthy brand identity that would reflect innovation, care, and reliability in the healthcare technology space. The challenge was to balance a professional tech-driven aesthetic with a human, approachable feel.",
      solution:
        "We crafted a clean and impactful brand identity that visually communicates growth, connection, and precision in healthcare technology. The logo design combines a medical cross with forward-moving elements, symbolizing progress and digital transformation. Alongside the branding, we designed a user-focused website showcasing their SaaS solutions with clarity and credibility, ensuring an engaging and seamless user experience.",
      results: [
        "A strong, modern brand identity that conveys trust and innovation",
        "Enhanced digital presence through a user-centric website",
        "Strengthened brand positioning as India’s #1 SaaS-based medical software company"
      ],
      techStack: ["Adobe Illustrator", "Figma", "React", "Next.js", "Tailwind CSS"],
    },
  ];

  const PortfolioCard = ({ item, index, style }) => (
    <motion.div
      onClick={() => setSelectedProject(item)}
      key={item.id}
      style={style}
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px 0px" }}
      transition={{ duration: 1, delay: index * 0.15, ease: [0.22, 1, 0.36, 1] }}
      className="group bg-white/5 backdrop-blur-2xl  rounded-2xl hover:scale-105 transition-transform duration-700 ease-out cursor-pointer overflow-hidden"
    >
      <div className="relative aspect-[5/4] overflow-hidden">
        <motion.img
          src={item.image}
          alt={item.title}
          className="w-full h-full object-cover"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.8 }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
        <motion.div className="absolute bottom-6 right-6 w-12 h-12 bg-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500">
          <ExternalLink className="w-6 h-6 text-gray-900" />
        </motion.div>
      </div>

      <div className="p-6">
        <p className="text-sm text-orange-500 uppercase tracking-wider mb-2">
          {item.category}
        </p>
        <h3 className="text-2xl font-semibold text-white">{item.title}</h3>
      </div>
    </motion.div>
  );

  return (
    <div className="bg-black text-white overflow-hidden">
      <div ref={containerRef} className="relative px-6 sm:px-8 lg:px-16">
        <HeroSection />

        {/* ✅ Fixed grid: now properly two-column on large screens */}
        <div className="grid grid-cols-1 md:p-24 lg:grid-cols-2 gap-24 mt-16 pb-32">
          <div className="space-y-12">
            {portfolioItems.slice(0, 2).map((item, i) => (
              <PortfolioCard key={item.id} item={item} index={i} style={{ y: y1 }} />
            ))}
          </div>
          <div className="space-y-12 mt-0 lg:mt-20">
            {portfolioItems.slice(2).map((item, i) => (
              <PortfolioCard key={item.id} item={item} index={i} style={{ y: y2 }} />
            ))}
          </div>
        </div>
      </div>

      <TestimonialsSection />
      <ContactSection />

      {/* Modal */}
      (
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-90 flex items-center justify-center bg-black/70 backdrop-blur-sm p-4 sm:p-6 overflow-y-auto"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="relative w-full max-w-6xl bg-white rounded-3xl shadow-2xl overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header */}
              <div className="sticky top-0 flex items-center justify-between bg-white/90 backdrop-blur-sm border-b border-gray-200 px-5 sm:px-8 py-4 sm:py-5 z-10">
                <h3 className="text-xl sm:text-2xl font-semibold text-gray-900">
                  {selectedProject.title}
                </h3>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="w-10 h-10 bg-gray-100 hover:bg-gray-200 transition rounded-full flex items-center justify-center"
                >
                  <X className="w-6 h-6 text-gray-700" />
                </button>
              </div>

              {/* Content */}
              <div className="p-5 sm:p-8 space-y-8 overflow-y-auto max-h-[85vh]">
                {/* Image */}
                {selectedProject.image && (
                  <img
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    className="w-full sm:w-1/2 mx-auto rounded-2xl shadow-md object-cover"
                  />
                )}

                {/* Challenge */}
                <section>
                  <h4 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">
                    Challenge
                  </h4>
                  <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
                    {selectedProject.challenge}
                  </p>
                </section>

                {/* Solution */}
                <section>
                  <h4 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">
                    Solution
                  </h4>
                  <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
                    {selectedProject.solution}
                  </p>
                </section>

                {/* Results */}
                {selectedProject.results?.length > 0 && (
                  <section>
                    <h4 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">
                      Results
                    </h4>
                    <ul className="list-disc list-inside text-gray-700 text-sm sm:text-base space-y-1">
                      {selectedProject.results.map((r, i) => (
                        <li key={i}>{r}</li>
                      ))}
                    </ul>
                  </section>
                )}

                {/* Tech Stack */}
                {selectedProject.techStack?.length > 0 && (
                  <section>
                    <h4 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3">
                      Tech Stack
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.techStack.map((tech, i) => (
                        <span
                          key={i}
                          className="px-3 py-1.5 bg-gray-100 text-gray-800 rounded-lg text-xs sm:text-sm font-medium border border-gray-200"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </section>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default PortfolioPage;
