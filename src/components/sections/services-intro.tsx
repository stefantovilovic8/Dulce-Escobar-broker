"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useLanguage } from "@/lib/language-context";

export default function ServicesIntro() {
  const { t } = useLanguage();
  const saleRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress: saleScroll } = useScroll({
    target: saleRef,
    offset: ["start end", "end start"],
  });

  const saleParallax = useTransform(saleScroll, [0, 1], ["-8%", "8%"]);

  return (
    <section className="bg-[#FAFAF8] py-[100px] lg:py-[120px] overflow-hidden">
      <div className="container mx-auto px-5 md:px-10 lg:px-16 max-w-[1400px]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col gap-6 order-2 lg:order-1"
          >
            <span className="text-[#C5A059] font-body text-xs tracking-[0.22em] uppercase">
              {t("saleSection.eyebrow")}
            </span>
            <h2 className="font-display text-3xl md:text-4xl xl:text-[46px] leading-tight text-[#1A1A1A]">
              {t("saleSection.headline")}
            </h2>
            <p className="font-body text-[#7A7A7A] text-base md:text-[17px] leading-relaxed italic">
              {t("saleSection.italic")}
            </p>
            <div className="w-10 h-px bg-[#C5A059]" />
            <p className="font-body text-[#4A4A4A] text-[15px] md:text-[16px] leading-[1.85] font-light">
              {t("saleSection.body")}
            </p>
          </motion.div>

          <div
            ref={saleRef}
            className="relative overflow-hidden order-1 lg:order-2 aspect-[4/5] lg:aspect-auto lg:h-[620px]"
          >
            <motion.div
              style={{ y: saleParallax }}
              className="absolute inset-0 w-full h-[116%] -top-[8%]"
            >
              <img
                src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200&q=85&fit=crop"
                alt="Luxury interior with floor-to-ceiling windows and city view"
                loading="lazy" className="w-full h-full object-cover"
              />
            </motion.div>
            <div className="absolute top-6 right-6 w-12 h-12 border-t border-r border-[#C5A059]/60 pointer-events-none" />
            <div className="absolute bottom-6 left-6 w-12 h-12 border-b border-l border-[#C5A059]/60 pointer-events-none" />
          </div>

        </div>
      </div>
    </section>
  );
}
