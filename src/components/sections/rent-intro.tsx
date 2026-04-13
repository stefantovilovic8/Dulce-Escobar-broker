"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useLanguage } from "@/lib/language-context";

export default function RentIntro() {
  const { t } = useLanguage();
  const rentRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress: rentScroll } = useScroll({
    target: rentRef,
    offset: ["start end", "end start"],
  });

  const rentParallax = useTransform(rentScroll, [0, 1], ["-8%", "8%"]);

  return (
    <section className="bg-[#F5F3EE] py-[100px] lg:py-[120px] overflow-hidden">
      <div className="container mx-auto px-5 md:px-10 lg:px-16 max-w-[1400px]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          <div
            ref={rentRef}
            className="relative overflow-hidden aspect-[4/5] lg:aspect-auto lg:h-[620px]"
          >
            <motion.div
              style={{ y: rentParallax }}
              className="absolute inset-0 w-full h-[116%] -top-[8%]"
            >
              <img
                src="https://images.unsplash.com/photo-1616137466211-f939a420be84?w=1200&q=85&fit=crop"
                alt="Warm sophisticated living room with soft natural light"
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
              {t("rentSection.eyebrow")}
            </span>
            <h2 className="font-display text-3xl md:text-4xl xl:text-[46px] leading-tight text-[#1A1A1A]">
              {t("rentSection.headline")}
            </h2>
            <p className="font-body text-[#7A7A7A] text-base md:text-[17px] leading-relaxed italic">
              {t("rentSection.italic")}
            </p>
            <div className="w-10 h-px bg-[#C5A059]" />
            <p className="font-body text-[#4A4A4A] text-[15px] md:text-[16px] leading-[1.85] font-light">
              {t("rentSection.body")}
            </p>

            <ul className="flex flex-col gap-4 mt-2">
              <li className="flex gap-4 items-start">
                <span className="mt-[6px] w-4 h-px bg-[#C5A059] flex-shrink-0" />
                <div>
                  <span className="font-body text-[#1A1A1A] text-[15px] font-medium">{t("rentSection.monthly.title")}</span>
                  <p className="font-body text-[#6A6A6A] text-[14px] leading-relaxed font-light mt-0.5">
                    {t("rentSection.monthly.body")}
                  </p>
                </div>
              </li>
              <li className="flex gap-4 items-start">
                <span className="mt-[6px] w-4 h-px bg-[#C5A059] flex-shrink-0" />
                <div>
                  <span className="font-body text-[#1A1A1A] text-[15px] font-medium">{t("rentSection.yearly.title")}</span>
                  <p className="font-body text-[#6A6A6A] text-[14px] leading-relaxed font-light mt-0.5">
                    {t("rentSection.yearly.body")}
                  </p>
                </div>
              </li>
            </ul>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
