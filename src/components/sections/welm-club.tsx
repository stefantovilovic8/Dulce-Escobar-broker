"use client";

import React, { useState, useRef, useEffect } from "react";
import { Gem } from "lucide-react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useLanguage } from "@/lib/language-context";

export default function WelmClub() {
  const { t } = useLanguage();
  const [isMobile, setIsMobile] = useState(false);
  const cardRef = useRef<HTMLAnchorElement>(null);

  // Mouse tracking motion values
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Smooth springs for rotation
  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  // Transform motion values to rotation degrees
  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["15deg", "-15deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-15deg", "15deg"]);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    if (isMobile || !cardRef.current) return;

    const rect = cardRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    
    // Calculate distance from center of the card
    const cardCenterX = rect.left + width / 2;
    const cardCenterY = rect.top + height / 2;
    
    const mouseX = e.clientX - cardCenterX;
    const mouseY = e.clientY - cardCenterY;

    // Normalize values (-0.5 to 0.5) based on a larger detection radius
    // We want the card to react even when mouse is far away
    const xPct = Math.max(Math.min(mouseX / (width * 1.5), 0.5), -0.5);
    const yPct = Math.max(Math.min(mouseY / (height * 1.5), 0.5), -0.5);

    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

    return (
      <section 
        className="relative w-full pt-20 pb-20 md:pt-32 md:pb-32 bg-[#FFFFFF] overflow-hidden"
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
      <div className="container mx-auto px-4 md:px-8 relative z-10 pointer-events-none">
        
                <div className="max-w-4xl mx-auto text-center mb-16 md:mb-24 space-y-6 pointer-events-auto relative z-20">
                <h2 
                  className="text-4xl md:text-5xl lg:text-[3.5rem] font-[family-name:var(--font-display)] text-[#1A1A1A] leading-[1.2] text-center"
                >
                  {t("welm.title")}
                </h2>
                <p className="text-sm md:text-base font-[family-name:var(--font-body)] text-[#4A4A4A] leading-relaxed max-w-2xl mx-auto text-center">
                  {t("welm.text")}
                </p>
              </div>

          <div className="flex justify-center items-center w-full px-4 perspective-[2000px]">
            <div className="relative w-full max-w-[640px] group pointer-events-auto">
              {/* Animated Burst of Rays */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200%] aspect-square pointer-events-none z-0">
                  {/* Central Glow */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-[#C5A059] rounded-full blur-[60px] opacity-30" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-white/20 rounded-full blur-[20px] opacity-40" />
                  
                  {/* Sharp Rays */}
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 100, repeat: Infinity, ease: "linear" }}
                    className="absolute inset-0 flex items-center justify-center"
                  >
                    {[...Array(24)].map((_, i) => (
                      <div 
                        key={i}
                        className="absolute w-full h-[1px] bg-gradient-to-r from-transparent via-[#C5A059]/45 to-transparent"
                        style={{ 
                          transform: `rotate(${i * 7.5}deg) scaleX(${i % 2 === 0 ? 1 : 0.7})`,
                        }}
                      />
                    ))}
                  </motion.div>
    
                  {/* Major Cross Rays */}
                  <motion.div
                     animate={{ rotate: -360 }}
                     transition={{ duration: 150, repeat: Infinity, ease: "linear" }}
                     className="absolute inset-0 flex items-center justify-center"
                  >
                    <div className="absolute w-[150%] h-[2px] bg-gradient-to-r from-transparent via-[#C5A059]/60 to-transparent" />
                    <div className="absolute w-[150%] h-[2px] bg-gradient-to-r from-transparent via-[#C5A059]/60 to-transparent rotate-90" />
                    <div className="absolute w-[120%] h-[1px] bg-gradient-to-r from-transparent via-[#C5A059]/30 to-transparent rotate-45" />
                    <div className="absolute w-[120%] h-[1px] bg-gradient-to-r from-transparent via-[#C5A059]/30 to-transparent -rotate-45" />
                  </motion.div>
    
                  {/* Shimmering effect */}
                  <motion.div
                    animate={{ 
                      scale: [1, 1.1, 1],
                      opacity: [0.3, 0.5, 0.3]
                    }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute inset-0 bg-[radial-gradient(circle,rgba(197,160,89,0.15)_0%,transparent_70%)]"
                  />
                </div>
    
              <motion.a 
                  href="https://chat.whatsapp.com/E9UoXyeYXZG7fFvn9ZITkk"
                  target="_blank"
                  rel="noopener noreferrer"
                ref={cardRef}
                style={{
                  rotateX: isMobile ? 10 : rotateX,
                  rotateY: isMobile ? -5 : rotateY,
                  rotateZ: isMobile ? 2 : 0,
                  transformStyle: "preserve-3d",
                }}
                className="
                  relative
                  w-full aspect-[1.586/1] 
                  rounded-2xl 
                  bg-[#C5A059]
                  border border-[var(--color-brand-border)]
                  shadow-[0_25px_50px_-12px_rgba(0,0,0,0.7)]
                  transition-all duration-200 ease-out
                  z-10
                  block
                  cursor-pointer
                "
              >
                <div className="absolute inset-0 overflow-hidden rounded-2xl pointer-events-none opacity-20">
                  <svg 
                    className="absolute top-0 right-0 w-full h-full text-[var(--color-brand-border)]" 
                    viewBox="0 0 600 400" 
                    preserveAspectRatio="none"
                  >
                    <path 
                      d="M0,200 C150,300 300,100 600,250" 
                      fill="none" 
                      stroke="currentColor" 
                      strokeWidth="1" 
                      className="opacity-20"
                    />
                    <path 
                      d="M0,250 C180,350 350,150 600,300" 
                      fill="none" 
                      stroke="currentColor" 
                      strokeWidth="1" 
                      className="opacity-20"
                    />
                    <path 
                      d="M0,300 C200,400 400,200 600,350" 
                      fill="none" 
                      stroke="currentColor" 
                      strokeWidth="1" 
                      className="opacity-20"
                    />
                    <path 
                      d="M-50,350 C150,450 350,250 650,400" 
                      fill="none" 
                      stroke="currentColor" 
                      strokeWidth="1" 
                      className="opacity-20"
                    />
                    <path 
                      d="M300,0 C400,100 500,50 600,100" 
                      fill="none" 
                      stroke="currentColor" 
                      strokeWidth="1" 
                      className="opacity-10"
                    />
                  </svg>
                </div>

                <div className="relative h-full flex flex-col justify-between p-6 md:p-10 lg:p-12 z-20">
                  <div className="grid grid-cols-12 gap-4">
                    <div className="col-span-12 md:col-span-9">
                      <h3 className="text-3xl md:text-5xl lg:text-6xl font-[family-name:var(--font-display)] text-white tracking-wide mb-2">
                        {t("welm.card.title")}
                      </h3>
                      <p className="text-[10px] md:text-xs uppercase tracking-[0.2em] text-[#888] font-[family-name:var(--font-body)]">
                        {t("welm.card.subtitle")}
                      </p>
                    </div>
                  
                    <div className="absolute top-8 end-8 md:top-12 md:end-12">
                       <Gem 
                        className="w-10 h-10 md:w-14 md:h-14 text-[var(--color-primary)] opacity-80" 
                        strokeWidth={1}
                       />
                    </div>
                  </div>

                  <div className="flex items-end justify-between mt-auto">
                    <div className="transform translate-y-2 flex items-baseline gap-1.5">
                       <span className="text-[10px] md:text-xs text-[var(--color-text-secondary)] font-[family-name:var(--font-display)] italic tracking-wider opacity-80">
                         {t("welm.card.by")}
                       </span>
                       <span className="text-xs md:text-sm text-white font-[family-name:var(--font-display)] tracking-wide">
                         {t("welm.card.brand")}
                       </span>
                    </div>

                    <div className="transform translate-y-2 flex items-baseline gap-1.5">
                      <span className="text-xs md:text-sm text-white font-[family-name:var(--font-display)] tracking-wide">
                        {t("welm.card.holder")}
                      </span>
                      <span className="text-[10px] md:text-xs text-[var(--color-text-secondary)] font-[family-name:var(--font-display)] italic tracking-wider opacity-80">
                        {t("welm.card.number")}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="absolute inset-0 rounded-[23px] bg-gradient-to-br from-white/5 to-transparent pointer-events-none" />
              </motion.a>
            </div>
          </div>
        </div>
      </section>
  );
}
