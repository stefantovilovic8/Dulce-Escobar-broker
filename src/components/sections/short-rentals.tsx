"use client";

import React from "react";
import { motion } from "framer-motion";
import { useLanguage } from "@/lib/language-context";

export default function ShortRentals() {
  const { t } = useLanguage();

  return (
    <section className="bg-[#FAFAF8] py-24 lg:py-32">
      <div className="container mx-auto px-5 md:px-10 lg:px-16 max-w-[1200px]">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col items-center text-center"
        >
          <span className="text-[#C5A059] font-body text-xs tracking-[0.22em] uppercase mb-4">
            {t("shortRentals.eyebrow")}
          </span>
          <h1 className="font-display text-4xl md:text-5xl xl:text-[56px] leading-tight text-[#1A1A1A] mb-6">
            {t("shortRentals.headline")}
          </h1>
          <p className="font-body text-[#5A5A5A] text-base md:text-lg leading-relaxed max-w-[650px]">
            {t("shortRentals.subtext")}
          </p>
          <div className="w-10 h-px bg-[#C5A059] mt-8" />
        </motion.div>
      </div>
    </section>
  );
}