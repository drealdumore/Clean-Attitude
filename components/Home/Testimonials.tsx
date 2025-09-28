"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { TESTIMONIALS } from "@/lib/constants";
import { LeftIcon, RightIcon, StarIcon } from "@/lib/icon";

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  //  Added auto-play functionality with pause on hover
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % TESTIMONIALS.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % TESTIMONIALS.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + TESTIMONIALS.length) % TESTIMONIALS.length
    );
  };

  //  Added keyboard navigation support
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "ArrowLeft") {
        prevTestimonial();
      } else if (event.key === "ArrowRight") {
        nextTestimonial();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const containerVariants = {
    enter: { opacity: 0, x: 100 },
    center: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -100 },
  };

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/*  Added subtle background pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5" />

      <div className="container mx-auto px-4 relative">
        {/*  Improved typography hierarchy and spacing */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-4">
            ⭐ Testimonials
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">
            What Our <span className="text-primary">Customers Say</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Don't just take our word for it. Here's what real customers have to say about their experience with Clean Attitude.
          </p>
        </motion.div>

        {/*  Added responsive grid layout for better content visibility */}
        <div className="max-w-7xl mx-auto">
          {/* Desktop: Show 3 testimonials, Mobile: Show 1 */}
          <div className="hidden lg:grid lg:grid-cols-3 gap-8">
            {TESTIMONIALS.slice(0, 3).map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <TestimonialCard testimonial={testimonial} />
              </motion.div>
            ))}
          </div>

          {/* Mobile/Tablet: Carousel view */}
          <div className="lg:hidden relative">
            <div
              className="overflow-hidden"
              onMouseEnter={() => setIsAutoPlaying(false)}
              onMouseLeave={() => setIsAutoPlaying(true)}
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentIndex}
                  variants={containerVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                >
                  <TestimonialCard testimonial={TESTIMONIALS[currentIndex]} />
                </motion.div>
              </AnimatePresence>
            </div>

            {/*  Modernized navigation controls */}
            <div className="flex justify-between items-center mt-8">
              <Button
                variant="outline"
                size="icon"
                onClick={prevTestimonial}
                className="rounded-full h-12 w-12 border-2 hover:scale-105 transition-transform"
                aria-label="Previous testimonial"
              >
                <LeftIcon className="h-2 w-2" />
              </Button>

              {/*  Enhanced dot indicators with better visual feedback */}
              <div className="flex space-x-3">
                {TESTIMONIALS.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`h-3 w-3 rounded-full transition-all duration-300 ${
                      index === currentIndex
                        ? "bg-primary scale-125"
                        : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
                    }`}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div>

              <Button
                variant="outline"
                size="icon"
                onClick={nextTestimonial}
                className="rounded-full h-12 w-12 border-2 hover:scale-105 transition-transform"
                aria-label="Next testimonial"
              >
                <RightIcon className="h-2 w-2" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

//  Extracted testimonial card into reusable component with modern design
function TestimonialCard({ testimonial }: { testimonial: any }) {
  return (
    <Card className="h-full bg-black backdrop-blur-sm  shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
      <CardContent className="p-8 h-full flex flex-col">
        {/*  Improved star rating display */}
        <div className="flex mb-6">
          {[...Array(testimonial.rating)].map((_, i) => (
            <StarIcon key={i} className="h-5 w-5 text-amber-400 fill-current" />
          ))}
        </div>

        {/*  Better typography for testimonial text */}
        <blockquote className="text-lg text-white/90 leading-relaxed mb-8 flex-grow text-pretty">
          "{testimonial.text}"
        </blockquote>

        {/*  Modernized author section with better visual hierarchy */}
        <div className="flex items-center mt-auto">
          <div className="relative flex shrink-0 overflow-hidden rounded-full h-14 w-14 mr-4 bg-gradient-to-br from-primary/20 to-primary/40 ">
            <span className="flex h-full w-full items-center justify-center text-base font-semibold text-primary">
              {testimonial.name
                .split(" ")
                .map((n: string) => n[0])
                .join("")}
            </span>
          </div>
          <div>
            <h3 className="font-semibold text-white text-base">
              {testimonial.name}
            </h3>
            <p className="text-sm text-gray-400">{testimonial.location}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
