"use client";

import { buttonVariants } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import { WHATSAPP_ICON } from "@/lib/icon";

export default function HeroSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section
      ref={ref}
      className="relative min-h-screen bg-gradient-to-br from-background via-secondary/10 to-background overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5" />

      <div className="maxContainer pxm min-h-screen flex flex-col items-center justify-center lg:flex-row relative z-10">
        <motion.div
          className="flex flex-col items-center justify-center w-full lg:w-1/2 lg:items-start space-y-8 p-8"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.div variants={itemVariants}>
            <Badge
              variant="default"
              className="bg-primary/10 text-primary border-primary/20 px-4 py-2 text-sm font-medium"
            >
              ✨ Top-Rated Cleaning Services
            </Badge>
          </motion.div>

          <motion.h1
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-center lg:text-left leading-tight bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text text-transparent"
            variants={itemVariants}
          >
            Experience Premium{" "}
            <span className="text-primary">Cleaning Services</span> in Abuja,
            Nigeria
          </motion.h1>

          <motion.p
            className="text-lg md:text-xl text-muted-foreground text-center lg:text-left leading-relaxed max-w-lg"
            variants={itemVariants}
          >
            Transform your space with our expert cleaning solutions. Trusted by
            thousands of satisfied customers across Abuja for exceptional
            service and attention to detail.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 w-full lg:w-auto"
            variants={itemVariants}
          >
            <Link
              href="whatsapp://send?phone=2348037793629&text=Hello%20I%20am%20interested%20in%20your%20cleaning%20services"
              className={`${buttonVariants({
                size: "lg",
              })} flex items-center justify-center gap-x-2 px-8 py-4 text-lg font-semibold bg-primary hover:bg-primary/90 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105`}
            >
              Book a Cleaner <WHATSAPP_ICON />
            </Link>
            <Link
              href="#services"
              className={`${buttonVariants({
                variant: "outline",
                size: "lg",
              })} px-8 py-4 text-lg font-semibold border-2 hover:bg-primary/5 transition-all duration-300`}
            >
              View Services
            </Link>
          </motion.div>

          {/* Trust Indicators */}
          <motion.div
            className="flex items-center gap-6 mt-8"
            variants={itemVariants}
          >
            <div className="text-center">
              <p className="text-2xl font-bold text-primary">500+</p>
              <p className="text-sm text-muted-foreground">Happy Clients</p>
            </div>
            <div className="w-px h-12 bg-border" />
            <div className="text-center">
              <p className="text-2xl font-bold text-primary">5★</p>
              <p className="text-sm text-muted-foreground">Rating</p>
            </div>
            <div className="w-px h-12 bg-border" />
            <div className="text-center">
              <p className="text-2xl font-bold text-primary">24/7</p>
              <p className="text-sm text-muted-foreground">Support</p>
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          className="relative w-full lg:w-1/2 h-[400px] md:h-[500px] lg:h-[600px] mt-12 lg:mt-0"
          initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
          animate={
            isInView
              ? { opacity: 1, scale: 1, rotate: 0 }
              : { opacity: 0, scale: 0.8, rotate: -5 }
          }
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
        >
          <div className="relative h-full w-full">
            <Image
              src="/cleaning-professional-nigeria.jpg"
              alt="Professional cleaner at work"
              fill
              style={{ objectFit: "cover" }}
              className="rounded-3xl shadow-2xl"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/30 via-transparent to-transparent rounded-3xl" />

            {/* Floating Elements */}
            <motion.div
              className="absolute -top-4 -right-4 bg-white rounded-2xl p-4 shadow-xl"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            >
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-green-500 rounded-full" />
                <span className="text-sm font-semibold text-gray-800">
                  Available Now
                </span>
              </div>
            </motion.div>

            <motion.div
              className="absolute -bottom-4 -left-4 bg-primary text-white rounded-2xl p-4 shadow-xl"
              animate={{ y: [0, 10, 0] }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1.5,
              }}
            >
              <div className="text-center">
                <p className="text-lg font-bold">100%</p>
                <p className="text-xs">Satisfaction</p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
