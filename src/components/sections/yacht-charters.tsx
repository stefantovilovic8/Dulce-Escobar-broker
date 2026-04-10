"use client";

import React, { useRef } from 'react';
import NextImage from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useLanguage, Trans } from "@/lib/language-context";

/**
 * YachtCharterServices Component
 * Updated to match the home page style.
 */
export default function YachtCharterServices() {
  const { t } = useLanguage();
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.3, 1, 1, 0.3]);

  const yachtImageAsset = "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/6363938c-1a0a-4fd7-80ff-6f78f509f220-we-concierge-com/assets/images/WhatsApp-Image-2025-03-03-at-9_19_15-AM-683x1024-18.jpeg";

  return (
    <section 
      ref={containerRef}
      id="yacht-charters"
      className="bg-background py-24 md:py-40 relative overflow-hidden"
    >
      <div className="container mx-auto px-6 md:px-12 lg:px-20 max-w-[1400px] relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 items-center gap-12 lg:gap-24">
          
          <motion.div 
            style={{ y, opacity }}
            className="lg:col-span-6 relative aspect-[4/5] md:aspect-video lg:aspect-[4/5] rounded-2xl overflow-hidden group shadow-2xl lg:order-2"
          >
            <NextImage
              src={yachtImageAsset}
              alt={t("services.yacht.title")}
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
                {t("services.yacht.label")}
              </span>
            </div>
            <h2 className="text-4xl md:text-6xl font-display text-white leading-tight capitalize text-start">
              {t("services.yacht.title")}
            </h2>
            <div className="space-y-6 max-w-xl">
              <p className="text-muted-foreground font-body text-base md:text-lg leading-relaxed text-start">
                {t("services.yacht.desc")}
              </p>
              <ul className="space-y-4">
                <li className="flex gap-4">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2.5 flex-shrink-0" />
                  <p className="text-muted-foreground font-body text-base md:text-lg leading-relaxed text-start">
                    <Trans k="services.yacht.item1">
                      <span className="text-white font-medium">Corporate & Private Events:</span> Host business gatherings, product launches, or special celebrations in a stunning setting.
                    </Trans>
                  </p>
                </li>
                <li className="flex gap-4">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2.5 flex-shrink-0" />
                  <p className="text-muted-foreground font-body text-base md:text-lg leading-relaxed text-start">
                    <Trans k="services.yacht.item2">
                      <span className="text-white font-medium">Day & Weekly Charters:</span> Relax or explore with bespoke itineraries, full crew service, and premium amenities.
                    </Trans>
                  </p>
                </li>
              </ul>
              <p className="text-white font-body text-lg italic mt-6">
                {t("services.yacht.cta")}
              </p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
