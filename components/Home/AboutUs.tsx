"use client";

import Link from "next/link";
import { WHATSAPP_ICON } from "@/lib/icon";
import { BuildingIcon, HappyClient, YearsIcon, TrophyIcon } from "@/lib/icon";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function AboutUsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section
      id="about-us"
      className="py-24 bg-gradient-to-br from-background to-secondary/20 relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-grid-pattern opacity-5" />

      <div className="maxContainer pxm relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -30 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            About <span className="text-primary">Clean Attitude</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Your trusted cleaning partner in Abuja, Nigeria since 2019
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium">
                ✨ Established 2019
              </div>

              <p className="text-lg leading-relaxed text-foreground/90">
                Clean Attitude has quickly established itself as Abuja&apos;s premier
                cleaning service provider. We specialize in transforming spaces
                with comprehensive residential and commercial cleaning
                solutions.
              </p>

              <p className="text-base leading-relaxed text-muted-foreground">
                From Maitama to Wuse, we understand Abuja&apos;s unique
                cleaning challenges. Our eco-conscious team delivers exceptional
                results for post-construction cleanup and regular maintenance.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-primary rounded-full" />
                <span className="text-sm font-medium">
                  Eco-Friendly Products
                </span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-primary rounded-full" />
                <span className="text-sm font-medium">
                  Trained Professionals
                </span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-primary rounded-full" />
                <span className="text-sm font-medium">24/7 Support</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-primary rounded-full" />
                <span className="text-sm font-medium">
                  Satisfaction Guaranteed
                </span>
              </div>
            </div>

            <Link
              href="whatsapp://send?phone=2348037793629&text=Hello%20I%20am%20interested%20in%20your%20cleaning%20services"
              className="inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-white px-8 py-4 rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              Get Started Today <WHATSAPP_ICON />
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid grid-cols-2 gap-6"
          >
            <StatCard
              icon={<BuildingIcon />}
              value="500+"
              label="Projects Completed"
            />
            <StatCard
              icon={<YearsIcon />}
              value="5+"
              label="Years of Excellence"
            />
            <StatCard
              icon={<HappyClient />}
              value="98%"
              label="Client Satisfaction"
            />
            <StatCard
              icon={<TrophyIcon />}
              value="50+"
              label="Expert Cleaners"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function StatCard({
  icon,
  value,
  label,
}: {
  icon: React.ReactNode;
  value: string;
  label: string;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30, scale: 0.9 }}
      animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 30, scale: 0.9 }}
      transition={{ duration: 0.6 }}
      className="bg-white/80 backdrop-blur-sm border border-primary/10 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 text-center group"
    >
      <div className="flex justify-center mb-4 text-primary group-hover:scale-110 transition-transform duration-300">
        {icon}
      </div>
      <p className="text-3xl font-bold mb-2 text-foreground">{value}</p>
      <div className="text-sm font-medium text-muted-foreground">{label}</div>
    </motion.div>
  );
}