"use client";

import NextImage from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { cn } from "@/lib/utils";
import { useLanguage } from "@/lib/language-context";

export default function InvestmentSection() {
  const { t } = useLanguage();
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

    const y1 = useTransform(scrollYProgress, [0, 1], [100, -100]);
    const y2 = useTransform(scrollYProgress, [0, 1], [100, -100]);
    const opacity1 = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.3, 1, 1, 0.3]);
    const opacity2 = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.3, 1, 1, 0.3]);


    return (
      <section 
        ref={containerRef}
        id="investment"
        className="bg-[#FFFFFF] pt-24 md:pt-40 pb-6 md:pb-10 relative overflow-hidden"
      >
      {/* Background Decorative Element */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full flex items-start justify-center pointer-events-none overflow-hidden opacity-[0.03] select-none pt-10">
          <span className="text-[13.2vw] font-display font-light whitespace-nowrap leading-none tracking-[0.1em] uppercase">
            {t("heritage.bgText")}
          </span>
        </div>

        <div className="container mx-auto px-6 md:px-12 lg:px-20 max-w-[1400px] relative z-10">
          <div className="flex flex-col items-center text-center mb-12 md:mb-20">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-primary text-xs font-bold uppercase tracking-[0.4em] mb-4"
          >
            {t("heritage.essence")}
          </motion.span>
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-4xl md:text-6xl lg:text-7xl font-display text-[#1A1A1A]"
                >
                {t("heritage.investment")}
              </motion.h2>
            <motion.div 
              initial={{ width: 0 }}
              whileInView={{ width: 100 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="h-px bg-primary mt-8"
            />
          </div>

          <div className="space-y-16 md:space-y-24 lg:space-y-32">
            {/* Vision Section */}
            <div className="grid grid-cols-1 lg:grid-cols-12 items-center gap-12 lg:gap-24">
              <motion.div 
                style={{ y: y1, opacity: opacity1 }}
                className="lg:col-span-6 relative aspect-[4/5] md:aspect-video lg:aspect-[4/5] rounded-2xl overflow-hidden group shadow-2xl"
              >
                <NextImage
                  src="https://images.unsplash.com/photo-1613490493576-7fde63acd811?q=80&w=2070&auto=format&fit=crop"
                  alt="Our Vision"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="lg:col-span-6 space-y-8"
              >
                <div className="inline-block px-4 py-1 border border-primary/30 rounded-full">
                  <span className="text-primary text-[10px] uppercase tracking-widest font-bold">
                    {t("heritage.vision")}
                  </span>
                </div>
                <h3 className="text-3xl md:text-5xl font-display text-[#1A1A1A] leading-tight">
                  {t("heritage.subtitle")}
                </h3>
                    <div className="space-y-6 max-w-xl">
                        <p className="text-[#4A4A4A] font-body text-base md:text-lg leading-relaxed text-start">
                          {t("heritage.visionText")}
                        </p>
                    </div>
              </motion.div>
            </div>

            {/* Story Section */}
            <div className="grid grid-cols-1 lg:grid-cols-12 items-center gap-12 lg:gap-24">
              <motion.div 
                style={{ y: y2, opacity: opacity2 }}
                className="lg:col-span-6 lg:order-2 relative aspect-[4/5] md:aspect-video lg:aspect-[4/5] rounded-2xl overflow-hidden group shadow-2xl"
              >
                <NextImage
                    src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/Vidals-Prime-Crafting-1767390025885.png?width=8000&height=8000&resize=contain"
                    alt="Dubai Business Bay"
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
                className="lg:col-span-6 lg:order-1 space-y-8 lg:pe-12"
              >
                <div className="inline-block px-4 py-1 border border-primary/30 rounded-full">
                  <span className="text-primary text-[10px] uppercase tracking-widest font-bold">
                    {t("heritage.story")}
                  </span>
                </div>
                <h3 className="text-3xl md:text-5xl font-display text-[#1A1A1A] leading-tight">
                  {t("heritage.storyTitle")}
                </h3>
                    <div className="space-y-6 max-w-xl">
                          <p className="text-[#4A4A4A] font-body text-base md:text-lg leading-relaxed text-start">
                            {t("heritage.storyText")}
                          </p>
                    </div>
              </motion.div>
            </div>

        </div>
      </div>
    </section>
  );
}
