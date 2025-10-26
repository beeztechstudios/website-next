'use client'; // Required because of framer-motion (a library that uses browser APIs)

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link'; // 1. Import next/link
import Image from 'next/image'; // 2. Import next/image

const AboutUsSection = () => {
  return (
    <div className="relative py-8 sm:py-12 bg-gradient-to-b from-white via-orange-50/30 to-white z-60 mb-1 md:mb-0 lg:py-20 overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-10 right-10 w-72 h-72 bg-orange-200/20 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-yellow-200/20 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 px-4 sm:px-6 lg:gap-16 items-center">
          
          {/* Left Side - Visual Elements */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative order-2 lg:order-1"
          >
            {/* Enhanced Decorative Background Elements */}
            <motion.div
              animate={{
                rotate: [0, 10, 0],
                scale: [1, 1.05, 1],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="absolute top-0 left-0 w-32 h-32 border-2 border-orange-300 rounded-3xl -z-10"
            />
            <motion.div
              animate={{
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="absolute -top-8 -left-8 w-20 h-20 bg-gradient-to-br from-orange-200 to-yellow-200 rounded-full -z-20"
            />
            
            {/* Main Workspace Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              whileHover={{ scale: 1.02 }}
              className="relative bg-gradient-to-br from-gray-100 to-gray-50 rounded-3xl overflow-hidden shadow-2xl ring-4 ring-orange-100/50"
            >
              <Image
                src="https://res.cloudinary.com/dwz07ormq/image/upload/v1760026418/workspace_fzoeje.jpg"
                alt="BeezTech Studio Modern Creative Workspace"
                width={700}
                height={500}
                className="w-full h-auto object-cover"
                priority={true}
              />

              {/* Enhanced Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-orange-900/10 via-transparent to-transparent pointer-events-none" />

              {/* Enhanced Floating Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.5 }}
                whileHover={{ y: -5, scale: 1.05 }}
                className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-white rounded-2xl shadow-2xl px-6 py-4 flex items-center gap-3 border border-orange-100"
              >
                <div className="flex -space-x-2">
                  <motion.div
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 2, repeat: Infinity, delay: 0 }}
                    className="w-8 h-8 rounded-full bg-gradient-to-br from-orange-400 to-orange-500 ring-2 ring-white"
                  />
                  <motion.div
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 2, repeat: Infinity, delay: 0.3 }}
                    className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-400 to-purple-500 ring-2 ring-white"
                  />
                  <motion.div
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 2, repeat: Infinity, delay: 0.6 }}
                    className="w-8 h-8 rounded-full bg-gradient-to-br from-yellow-400 to-yellow-500 ring-2 ring-white"
                  />
                </div>
                <div className="space-y-1">
                  <motion.div
                    animate={{ width: ["48px", "64px", "48px"] }}
                    transition={{ duration: 3, repeat: Infinity }}
                    className="h-2 bg-gradient-to-r from-orange-200 to-orange-300 rounded-full"
                  />
                  <motion.div
                    animate={{ width: ["64px", "80px", "64px"] }}
                    transition={{ duration: 3, repeat: Infinity, delay: 0.5 }}
                    className="h-2 bg-gradient-to-r from-orange-200 to-orange-300 rounded-full"
                  />
                </div>
              </motion.div>
            </motion.div>

            {/* Team Member Circle - Bottom Left */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              whileHover={{ scale: 1.1, rotate: 5 }}
              className="absolute -bottom-8 -left-8 w-40 h-40 sm:w-48 sm:h-48 rounded-full overflow-hidden border-8 border-white shadow-2xl bg-gradient-to-br from-orange-400 to-orange-500 ring-4 ring-orange-200/50"
            >
              <Image
                src="https://framerusercontent.com/images/EtyhVt5k6VdQGzImZKutvGH8I.png"
                alt="BeezTech Studio Team Member"
                width={192}
                height={192}
                className="w-full h-full object-cover"
              />
            </motion.div>

            {/* Decorative Element - Bottom Right */}
            <motion.div
              initial={{ opacity: 0, rotate: -45 }}
              whileInView={{ opacity: 1, rotate: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.6 }}
              animate={{
                rotate: [0, 360],
              }}
              transition={{
                rotate: {
                  duration: 20,
                  repeat: Infinity,
                  ease: "linear"
                }
              }}
              className="absolute -bottom-4 -right-4 w-24 h-24 border-2 border-orange-300 rounded-full -z-10"
            />
          </motion.div>

          {/* Right Side - Content (Content unchanged) */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-6 order-1 lg:order-2"
          >
            {/* Label */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <span className="text-orange-500 font-semibold text-sm md:text-lg uppercase tracking-wider">
                ABOUT
              </span>
            </motion.div>

            {/* Main Heading (Keyword Integration Reminder: This is the perfect place for relevant SEO keywords.) */}
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight"
            >
              Buzzing Ideas into Digital Reality 🐝
            </motion.h2>

            {/* Subheading */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-lg sm:text-xl text-gray-600 leading-relaxed"
            >
              We're a creative tech agency helping brands design, develop, and grow with innovation and purpose.
            </motion.p>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="text-base text-gray-500 leading-relaxed"
            >
              
              From startups to established businesses, we help transform your ideas into stunning digital experiences — combining creativity, code, and strategy under one roof.
            </motion.p>

            {/* Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="pt-4"
            >
              <Link href="/about">
                <motion.button
                  whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(251, 146, 60, 0.3)" }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-gradient-to-r from-orange-500 to-orange-600 text-white font-bold px-8 py-4 rounded-full flex items-center gap-2 hover:from-orange-600 hover:to-orange-700 transition-all duration-300 group shadow-lg"
                >
                  <span>Know More</span>
                  <motion.div
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </motion.div>
                </motion.button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default AboutUsSection;