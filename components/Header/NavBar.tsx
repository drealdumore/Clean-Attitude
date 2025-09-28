

"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { _siteDetails } from "@/lib/config";

const menuIcons = {
  "Our Services": (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
    </svg>
  ),
  "About Us": (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
    </svg>
  ),
  "Book Now": (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
    </svg>
  ),
};

export const Navbar = () => {
  const containerVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3,
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.3 },
    },
  };

  return (
    <motion.div 
      className="absolute top-16 left-0 right-0 bg-white/95 backdrop-blur-md border border-gray-200/50 shadow-2xl z-30 md:hidden rounded-b-2xl mx-4"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="p-2">
        <nav className="space-y-1">
          {_siteDetails.menuLinks.map((item, index) => (
            <motion.div key={item.link} variants={itemVariants}>
              <Link
                href={item.link}
                className={`flex items-center gap-3 text-base font-medium transition-all duration-300 py-3 px-4 rounded-xl group ${
                  item.extra 
                    ? 'bg-primary text-white hover:bg-primary/90 shadow-lg mt-3' 
                    : 'text-gray-700 hover:text-primary hover:bg-primary/5'
                }`}
              >
                <span className={`transition-transform duration-300 group-hover:scale-110 ${
                  item.extra ? 'text-white' : 'text-primary'
                }`}>
                  {menuIcons[item.label as keyof typeof menuIcons]}
                </span>
                {item.label}
                {!item.extra && (
                  <svg className="w-4 h-4 ml-auto opacity-0 group-hover:opacity-100 transition-opacity duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                )}
              </Link>
            </motion.div>
          ))}
        </nav>
        
        {/* Contact Info */}
        <motion.div 
          className="mt-4 pt-4 border-t border-gray-200/50"
          variants={itemVariants}
        >
          <div className="flex items-center gap-2 text-sm text-gray-500 px-4">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            +234 803 779 3629
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};
