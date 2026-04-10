"use client";

import React from 'react';
import Image from 'next/image';
import { useLanguage } from '@/lib/language-context';

const WhoWeAre = () => {
  const { t, isRTL } = useLanguage();

    return (
    <>
    <section className="bg-white py-[100px] overflow-hidden">
      <div className="container mx-auto max-w-[1140px] px-6">
        <div className="flex flex-col lg:flex-row gap-[40px] items-start">
          
              {/* Left Column: Label */}
              <div className="lg:w-1/4 pt-4">
                  <div className="flex items-center">
                    <span className="w-2 h-2 bg-[#C5A059] rounded-full me-3"></span>
                    <span className="text-[#C5A059] text-[12px] font-bold uppercase tracking-[0.1em] font-body">
                      {t("who.what_we_do")}
                    </span>
                  </div>
              </div>

            {/* Middle Column: Content */}
                      <div className="lg:w-[45%] text-start">
                          <h2 className="text-[#1A1A1A] text-[40px] font-display leading-[1.2] mb-2">
                            {t("who.title").split(/(Real Estate|العقارية)/g).map((part, i) =>
                              part === "Real Estate" || part === "العقارية" ? (
                                <span key={i} className="text-[0.7em] text-[#1A1A1A]">
                                  {part}
                                </span>
                              ) : part
                            )}
                          </h2>
                          <p className="text-[#4A4A4A] text-[18px] opacity-90 mb-6 font-display italic">
                            {t("who.subtitle")}
                          </p>

                        <div className="space-y-6">
                          {t("who.text2").split('\n\n').map((paragraph, index) => (
                            <p key={index} className="text-[#4A4A4A] text-[16px] font-light font-body leading-[1.6]">
                              {paragraph}
                            </p>
                          ))}
                        </div>
                  </div>

            {/* Right Column: Image */}
            <div className={`lg:w-[30%] w-full animate-in fade-in ${isRTL ? 'slide-in-from-left' : 'slide-in-from-right'} duration-1000 ease-in-out fill-mode-forwards`}>

              <div className="relative w-full aspect-[564/845] rounded-2xl overflow-hidden">
                <Image
                  src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/project-uploads/15da0035-1594-4842-aa98-6997df829f1d/dulcedulce-1772918301826.png?width=8000&height=8000&resize=contain"
                  alt={t("who.alt_penthouse")}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 30vw, 340px"
                  priority
                />
              </div>
            </div>

        </div>
</div>
      </section>
    </>
  );
};

export function PartnerCarousel() {
  const { t } = useLanguage();
    return (
    <section className="bg-[#FFFFFF] py-28 overflow-hidden border-y border-[#ECECEC]">

          <div className="relative px-8 md:px-14" dir="ltr">
          <div className="group flex overflow-hidden">
            <div className="flex animate-scroll group-hover:[animation-play-state:paused]">

            {[...Array(2)].map((_, setIndex) => (
              <div key={setIndex} className="flex shrink-0">
                {[
                    "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/emaar-white-logo-1767374561200.png?width=8000&height=8000&resize=contain",
                    "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/Sobha-white-Logoneww-1767374846637.png?width=8000&height=8000&resize=contain",
                    "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/partners1-1767374964643.png?width=8000&height=8000&resize=contain",
                    "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/partners2-1767375046441.png?width=8000&height=8000&resize=contain",
                    "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/partners3-1767375400641.png?width=8000&height=8000&resize=contain",
                    "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/partners4-1767375510997.png?width=8000&height=8000&resize=contain",
                    "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/partners5-resized-1767375608614.webp?width=8000&height=8000&resize=contain",
                    "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/partners8-1767376314953.png?width=8000&height=8000&resize=contain",
                    "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/partners10-resized-1767376665276.webp?width=8000&height=8000&resize=contain",
                    "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/partners17-1767379385763.png?width=8000&height=8000&resize=contain",
                    "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/partners18-1767381132885.png?width=8000&height=8000&resize=contain",
                    ].map((logo, num) => (
                      <div
                        key={`${setIndex}-${num}`}
                        className="flex items-center justify-center mx-12 md:mx-16"
                      >
                        <div className="flex items-center justify-center w-[190px] md:w-[240px] h-[96px] md:h-[112px] rounded-2xl bg-[#FFFFFF] px-7 py-5 shadow-[0_8px_24px_rgba(0,0,0,0.05)] ring-1 ring-[#EDEDED]">
                        <Image
                          src={logo}
                          alt={t("who.alt_partner")}
                          width={180}
                          height={64}
                          className="object-contain max-h-full w-auto brightness-0 contrast-125 opacity-95 hover:opacity-100 transition-opacity duration-300"
                        />
                      </div>
                    </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default WhoWeAre;
