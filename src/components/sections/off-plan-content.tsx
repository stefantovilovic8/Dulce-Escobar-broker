"use client";

import React, { useRef } from "react";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { useLanguage } from "@/lib/language-context";

const BENEFITS = [
  { titleKey: "offplanPage.benefit1.title", bodyKey: "offplanPage.benefit1.body" },
  { titleKey: "offplanPage.benefit2.title", bodyKey: "offplanPage.benefit2.body" },
  { titleKey: "offplanPage.benefit3.title", bodyKey: "offplanPage.benefit3.body" },
  { titleKey: "offplanPage.benefit4.title", bodyKey: "offplanPage.benefit4.body" },
];

export default function OffPlanContent() {
  const { t } = useLanguage();
  const imgRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: imgRef, offset: ["start end", "end start"] });
  const parallax = useTransform(scrollYProgress, [0, 1], ["-8%", "8%"]);

  return (
    <>
      {/* Why Off-Plan */}
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
                {t("offplanPage.intro.eyebrow")}
              </span>
              <h2 className="font-display text-3xl md:text-4xl xl:text-[46px] leading-tight text-[#1A1A1A]">
                {t("offplanPage.intro.headline")}
              </h2>
              <p className="font-body text-[#7A7A7A] text-base md:text-[17px] leading-relaxed italic">
                {t("offplanPage.intro.italic")}
              </p>
              <div className="w-10 h-px bg-[#C5A059]" />
              <p className="font-body text-[#4A4A4A] text-[15px] md:text-[16px] leading-[1.85] font-light">
                {t("offplanPage.intro.body")}
              </p>
              <Link
                href="/contact-us"
                className="self-start inline-flex items-center justify-center rounded-full px-7 py-3 text-sm font-medium border border-[#C5A059] text-[#C5A059] hover:bg-[#C5A059] hover:text-white transition-all duration-300"
              >
                {t("offplanPage.intro.cta")}
              </Link>
            </motion.div>

            <div
              ref={imgRef}
              className="relative overflow-hidden order-1 lg:order-2 aspect-[4/5] lg:aspect-auto lg:h-[620px]"
            >
              <motion.div
                style={{ y: parallax }}
                className="absolute inset-0 w-full h-[116%] -top-[8%]"
              >
                <img
                  src="/offplan-intro.png"
                  alt="Dubai off-plan construction"
                  loading="lazy" className="w-full h-full object-cover"
                />
              </motion.div>
              <div className="absolute top-6 right-6 w-12 h-12 border-t border-r border-[#C5A059]/60 pointer-events-none" />
              <div className="absolute bottom-6 left-6 w-12 h-12 border-b border-l border-[#C5A059]/60 pointer-events-none" />
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Grid */}
      <section className="bg-[#F5F3EE] py-[100px] lg:py-[120px]">
        <div className="container mx-auto px-5 md:px-10 lg:px-16 max-w-[1200px]">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col items-center text-center mb-16"
          >
            <span className="text-[#C5A059] font-body text-xs tracking-[0.22em] uppercase mb-4">
              {t("offplanPage.benefits.eyebrow")}
            </span>
            <h2 className="font-display text-3xl md:text-4xl xl:text-[46px] leading-tight text-[#1A1A1A]">
              {t("offplanPage.benefits.headline")}
            </h2>
            <div className="w-10 h-px bg-[#C5A059] mt-5" />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
            {BENEFITS.map((b, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: i * 0.1 }}
                className="bg-white p-8 lg:p-10"
                style={{ borderRadius: "32px", boxShadow: "0 4px 24px rgba(0,0,0,0.05)" }}
              >
                <span className="text-[#C5A059] text-2xl mb-4 block">◈</span>
                <h3 className="font-display text-[22px] text-[#1A1A1A] mb-3 leading-tight">
                  {t(b.titleKey)}
                </h3>
                <div className="w-8 h-px bg-[#C5A059] mb-4" />
                <p className="font-body text-[#5A5A5A] text-[15px] leading-[1.8] font-light">
                  {t(b.bodyKey)}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="bg-[#1A1A1A] py-20 lg:py-24">
        <div className="container mx-auto px-5 md:px-10 lg:px-16 max-w-[900px] text-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col items-center gap-6"
          >
            <span className="text-[#C5A059] font-body text-xs tracking-[0.22em] uppercase">
              {t("offplanPage.cta.eyebrow")}
            </span>
            <h2 className="font-display text-3xl md:text-4xl xl:text-[44px] leading-tight text-white">
              {t("offplanPage.cta.headline")}
            </h2>
            <p className="font-body text-white/70 text-base md:text-[17px] leading-[1.8] max-w-[580px]">
              {t("offplanPage.cta.body")}
            </p>
            <Link
              href="/contact-us"
              className="inline-flex items-center justify-center rounded-full px-9 py-4 text-sm font-medium bg-[#C5A059] text-white hover:bg-[#b08c45] transition-all duration-300 hover:scale-105 mt-2"
            >
              {t("offplanPage.cta.button")}
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}
