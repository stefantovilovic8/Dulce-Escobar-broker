"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { useLanguage } from "@/lib/language-context";

const RentHero = () => {
  const { t } = useLanguage();
  const heroImage = "/rent-hero.png";

  return (
    <section className="relative w-full h-screen min-h-[700px] overflow-hidden">
      <img
        src={heroImage}
        alt=""
        aria-hidden="true"
        fetchPriority="high" className="absolute inset-0 w-full h-full z-0 object-cover object-[center_30%]"
      />
      <div className="absolute inset-0 bg-black/35 z-10" />
      <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-white to-transparent z-20 pointer-events-none" />

      <div className="relative z-20 w-full h-full flex flex-col items-center justify-center px-6 text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-[#C5A059] uppercase tracking-[0.25em] text-xs font-medium mb-6"
        >
          Rent
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="font-display font-normal text-white leading-[1.1] mb-6"
          style={{
            fontSize: "clamp(2.8rem, 7vw, 6rem)",
            textShadow: "0 2px 20px rgba(0,0,0,0.25)",
          }}
        >
          {t("servicesHero.headline")}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.55 }}
          className="text-white/85 font-body text-base md:text-lg leading-[1.8] max-w-[620px] mb-12"
        >
          {t("servicesHero.subtext")}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.75 }}
          className="flex flex-col sm:flex-row items-center gap-4"
        >
          <Link
            href="#listings"
            className="inline-flex items-center justify-center rounded-full px-8 py-3.5 text-sm font-medium bg-[#C5A059] text-white border-2 border-[#C5A059] hover:bg-[#b08c45] hover:border-[#b08c45] transition-all duration-300 hover:scale-105"
          >
            {t("servicesHero.exploreListings")}
          </Link>
          <Link
            href="/contact-us"
            className="inline-flex items-center justify-center rounded-full px-8 py-3.5 text-sm font-medium bg-transparent text-white border-2 border-white hover:border-[#C5A059] hover:text-[#C5A059] transition-all duration-300 hover:scale-105"
          >
            {t("servicesHero.listProperty")}
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default RentHero;
