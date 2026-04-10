"use client";

import React, { useRef } from 'react';
import NextImage from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useLanguage } from "@/lib/language-context";

/**
 * JetSkiRentals Section
 * Updated to match the home page style.
 */
const JetSkiRentals: React.FC = () => {
  const { t } = useLanguage();
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.3, 1, 1, 0.3]);

  const jetSkiImage = "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/6363938c-1a0a-4fd7-80ff-6f78f509f220-we-concierge-com/assets/images/WhatsApp-Image-2025-03-02-at-11_05_31-PM-768x1024-7.jpeg";

  return (
    <section 
      ref={containerRef}
      id="jet-ski-rentals"
      className="bg-background py-24 md:py-40 relative overflow-hidden"
    >
      <div className="container mx-auto px-6 md:px-12 lg:px-20 max-w-[1400px] relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 items-center gap-12 lg:gap-24">
          
          <motion.div 
            style={{ y, opacity }}
            className="lg:col-span-6 relative aspect-[4/5] md:aspect-video lg:aspect-[4/5] rounded-2xl overflow-hidden group shadow-2xl lg:order-2"
          >
            <NextImage
              src={jetSkiImage}
              alt={t("services.jetski.title")}
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-6 space-y-8 lg:order-1"
          >
            <div className="inline-block px-4 py-1 border border-primary/30 rounded-full">
              <span className="text-primary text-[10px] uppercase tracking-widest font-bold">
                {t("services.jetski.label")}
              </span>
            </div>
            <h2 className="text-4xl md:text-6xl font-display text-white leading-tight capitalize text-start">
              {t("services.jetski.title")}
            </h2>
            <div className="space-y-6 max-w-xl">
              <p className="text-muted-foreground font-body text-base md:text-lg leading-relaxed text-start">
                {t("services.jetski.desc")}
              </p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default JetSkiRentals;
