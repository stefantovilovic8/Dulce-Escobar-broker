"use client";

import React, { useRef } from 'react';
import NextImage from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useLanguage } from "@/lib/language-context";

/**
 * ChauffeurServices component
 * Updated to match the home page style.
 */
export default function ChauffeurServices() {
  const { t } = useLanguage();
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.3, 1, 1, 0.3]);

  const chauffeurImage = "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/image-1766975199173.png?width=8000&height=8000&resize=contain";

  return (
    <section 
      ref={containerRef}
      id="chauffeur-services"
      className="bg-background py-24 md:py-40 relative overflow-hidden"
    >
      <div className="container mx-auto px-6 md:px-12 lg:px-20 max-w-[1400px] relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 items-center gap-12 lg:gap-24">
          
          <motion.div 
            style={{ y, opacity }}
            className="lg:col-span-6 relative aspect-[4/5] md:aspect-video lg:aspect-[4/5] rounded-2xl overflow-hidden group shadow-2xl lg:order-2"
          >
            <NextImage
              src={chauffeurImage}
              alt={t("services.chauffeur.title")}
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
                {t("services.chauffeur.label")}
              </span>
            </div>
            <h2 className="text-4xl md:text-6xl font-display text-white leading-tight capitalize text-start">
              {t("services.chauffeur.title")}
            </h2>
            <div className="space-y-6 max-w-xl">
              <p className="text-muted-foreground font-body text-base md:text-lg leading-relaxed text-start">
                {t("services.chauffeur.desc1")}
              </p>
              <p className="text-muted-foreground font-body text-base md:text-lg leading-relaxed text-start">
                {t("services.chauffeur.desc2")}
              </p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
