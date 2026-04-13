"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useLanguage } from "@/lib/language-context";

export default function SaleIntro() {
  const { t } = useLanguage();
  const saleRef = useRef<HTMLDivElement>(null);
  const sale2Ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress: saleScroll } = useScroll({
    target: saleRef,
    offset: ["start end", "end start"],
  });
  const { scrollYProgress: sale2Scroll } = useScroll({
    target: sale2Ref,
    offset: ["start end", "end start"],
  });

  const saleParallax = useTransform(saleScroll, [0, 1], ["-8%", "8%"]);
  const sale2Parallax = useTransform(sale2Scroll, [0, 1], ["-8%", "8%"]);

  return (
    <>
      {/* Section 1: For Sale */}
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
                  alt="Luxury interior"
                  loading="lazy" className="w-full h-full object-cover"
                />
              </motion.div>
              <div className="absolute top-6 right-6 w-12 h-12 border-t border-r border-[#C5A059]/60 pointer-events-none" />
              <div className="absolute bottom-6 left-6 w-12 h-12 border-b border-l border-[#C5A059]/60 pointer-events-none" />
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: For Sale (replaces For Rent) */}
      <section className="bg-[#F5F3EE] py-[100px] lg:py-[120px] overflow-hidden">
        <div className="container mx-auto px-5 md:px-10 lg:px-16 max-w-[1400px]">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div
              ref={sale2Ref}
              className="relative overflow-hidden aspect-[4/5] lg:aspect-auto lg:h-[620px]"
            >
              <motion.div
                style={{ y: sale2Parallax }}
                className="absolute inset-0 w-full h-[116%] -top-[8%]"
              >
                <img
                  src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1200&q=85&fit=crop"
                  alt="Luxury property"
                  loading="lazy" className="w-full h-full object-cover"
                />
              </motion.div>
              <div className="absolute top-6 left-6 w-12 h-12 border-t border-l border-[#C5A059]/60 pointer-events-none" />
              <div className="absolute bottom-6 right-6 w-12 h-12 border-b border-r border-[#C5A059]/60 pointer-events-none" />
            </div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-col gap-6"
            >
              <span className="text-[#C5A059] font-body text-xs tracking-[0.22em] uppercase">
                For Sale
              </span>
              <h2 className="font-display text-3xl md:text-4xl xl:text-[46px] leading-tight text-[#1A1A1A]">
                Strategic Acquisitions & Luxury Estates
              </h2>
              <p className="font-body text-[#7A7A7A] text-base md:text-[17px] leading-relaxed italic">
                Finding your forever home or your next high-yield investment.
              </p>
              <div className="w-10 h-px bg-[#C5A059]" />
              <p className="font-body text-[#4A4A4A] text-[15px] md:text-[16px] leading-[1.85] font-light">
                Buying property in the current market requires more than just a search; it requires a strategy. I specialize in identifying homes that offer both lifestyle excellence and long-term value. From modern architectural masterpieces to timeless family estates, I provide the market intelligence and negotiation power needed to secure your piece of the city.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
