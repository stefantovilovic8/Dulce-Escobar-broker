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

      {/* Featured Off-Plan Projects */}
      <section className="bg-[#FAFAF8] py-[100px] lg:py-[120px]">
        <div className="container mx-auto px-5 md:px-10 lg:px-16 max-w-[1200px]">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col items-center text-center mb-14"
          >
            <span className="text-[#C5A059] font-body text-xs tracking-[0.22em] uppercase mb-4">
              Featured Projects
            </span>
            <h2 className="font-display text-3xl md:text-4xl xl:text-[46px] leading-tight text-[#1A1A1A]">
              Off-Plan Opportunities
            </h2>
            <div className="w-10 h-px bg-[#C5A059] mt-5" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-[420px] mx-auto"
          >
            <Link
              href="/off-plan/pearl-house-imtiaz"
              className="group flex flex-col bg-white overflow-hidden rounded-2xl"
              style={{ boxShadow: "0 2px 16px rgba(0,0,0,0.07)", transition: "box-shadow 0.3s ease, transform 0.3s ease" }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.boxShadow = "0 12px 40px rgba(197,160,89,0.15), 0 4px 16px rgba(0,0,0,0.08)";
                (e.currentTarget as HTMLElement).style.transform = "translateY(-3px)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.boxShadow = "0 2px 16px rgba(0,0,0,0.07)";
                (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
              }}
            >
              <div className="relative overflow-hidden rounded-t-2xl" style={{ aspectRatio: "4/3" }}>
                <img
                  src="/pearl-3.jpg"
                  alt="Pearl House by Imtiaz"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.05]"
                />
                <span className="absolute top-3 left-3 z-10 font-body text-[11px] tracking-[0.14em] uppercase px-3 py-1 rounded-md bg-white text-[#1A1A1A] font-medium shadow-sm">
                  Studio / 1-Bed
                </span>
                <span className="absolute top-3 right-3 z-10 font-body text-[11px] tracking-[0.14em] uppercase px-3 py-1 rounded-md bg-[#C5A059] text-white font-medium shadow-sm">
                  Off-Plan
                </span>
              </div>
              <div className="p-5">
                <h3 className="font-display text-[18px] text-[#1A1A1A] group-hover:text-[#C5A059] transition-colors duration-300 mb-1">
                  Pearl House by Imtiaz
                </h3>
                <div className="flex items-center gap-1.5 mb-4">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#C5A059" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
                  <span className="font-body text-[12px] text-[#7A7A7A]">JVC, Jumeirah Village Circle</span>
                </div>
                <div className="bg-[#FAFAF8] border border-[#EDE6D8] rounded-xl px-4 py-3">
                  <p className="font-body text-[10px] text-[#9A9A9A] tracking-[0.16em] uppercase mb-0.5">Status</p>
                  <p className="font-display text-[16px] text-[#1A1A1A] leading-none">Off-Plan · Completion Q4 2025</p>
                </div>
              </div>
            </Link>
          </motion.div>
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
