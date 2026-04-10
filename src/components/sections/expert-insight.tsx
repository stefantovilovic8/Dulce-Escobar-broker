"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { useLanguage } from "@/lib/language-context";

export default function ExpertInsight() {
  const imgRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const { t } = useLanguage();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.15 }
    );
    if (imgRef.current) observer.observe(imgRef.current);
    return () => observer.disconnect();
  }, []);

  const headlineLines = t("expertInsight.headline").split("\n");

  return (
    <section className="bg-[#F9F8F6] py-[90px]">
      <div className="container mx-auto max-w-[1140px] px-6">
        <div className="flex flex-col md:flex-row items-center gap-14 md:gap-20">

          {/* Left — portrait image */}
          <div
            ref={imgRef}
            className="w-full md:w-1/2 flex-shrink-0"
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? "translateY(0)" : "translateY(24px)",
              transition: "opacity 0.9s ease, transform 0.9s ease",
            }}
          >
            <div
              className="relative mx-auto"
              style={{
                width: "100%",
                maxWidth: "440px",
                aspectRatio: "4/5",
                borderRadius: "4px",
                boxShadow: "0 24px 64px rgba(0,0,0,0.10), 0 4px 16px rgba(0,0,0,0.06)",
                overflow: "hidden",
              }}
            >
              <Image
                src="/dulce-expert.png"
                alt="Dulce Resco — Real Estate Expert"
                fill
                className="object-cover object-center"
                priority
              />
            </div>
          </div>

          {/* Right — text */}
          <div className="w-full md:w-1/2 flex flex-col justify-center">
            <p className="text-[11px] uppercase tracking-[0.25em] text-[#C5A059] font-body mb-4">
              {t("expertInsight.eyebrow")}
            </p>
            <h2 className="font-display text-[28px] md:text-[38px] text-[#1A1A1A] leading-[1.2] mb-6">
              {headlineLines.map((line, i) => (
                <span key={i}>
                  {line}
                  {i < headlineLines.length - 1 && <br />}
                </span>
              ))}
            </h2>
            <div className="w-10 h-px bg-[#C5A059] mb-8" />
            <p className="font-body font-light text-[15px] text-[#5A5A5A] leading-[1.85] mb-6">
              {t("expertInsight.para1")}
            </p>
            <p className="font-body font-light text-[15px] text-[#5A5A5A] leading-[1.85]">
              {t("expertInsight.para2")}
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
