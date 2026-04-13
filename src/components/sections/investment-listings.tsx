"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useLanguage } from "@/lib/language-context";

export default function InvestmentListings() {
  const { t } = useLanguage();

  const LISTINGS = [
    {
      id: 1,
      project: "Binghatti Azure",
      statusKey: "listings.azure.status",
      badgeKey: null,
      typeKey: "listings.azure.type",
      priceKey: "listings.azure.price",
      termsKey: "listings.azure.terms" as string | null,
      contractKey: "listings.azure.contract" as string | null,
      furnishedKey: null as string | null,
      ctaKey: "listings.azure.cta",
      ctaHref: "/contact-us",
      status: "rented",
      images: [
        "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/project-uploads/15da0035-1594-4842-aa98-6997df829f1d/1017953b-88db-4b32-a0de-2aa467c6e8ef-1773006353346.JPG?width=1600&height=1600&resize=contain",
      ],
    },
    {
      id: 2,
      project: "Binghatti Phoenix",
      statusKey: "listings.phoenix.status",
      badgeKey: null,
      typeKey: "listings.phoenix.type",
      priceKey: "listings.phoenix.price",
      termsKey: null,
      contractKey: null,
      furnishedKey: null as string | null,
      ctaKey: "listings.phoenix.cta",
      ctaHref: "/contact-us",
      status: "available",
      images: [
        "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/project-uploads/15da0035-1594-4842-aa98-6997df829f1d/007aea4c-54d1-406e-bf6e-b272ac2f0e58-1773006354631.JPG?width=1600&height=1600&resize=contain",
      ],
    },
    {
      id: 3,
      project: "Binghatti Phantom",
      statusKey: "listings.phantom.status",
      badgeKey: null,
      typeKey: "listings.phantom.type",
      priceKey: "listings.phantom.price",
      termsKey: null,
      contractKey: null,
      furnishedKey: "listings.phantom.furnished" as string | null,
      ctaKey: "listings.phantom.cta",
      ctaHref: "/contact-us",
      status: "available",
      images: [
        "/phantom-3.jpg",
        "/phantom-1.jpg",
        "/phantom-2.jpg",
        "/phantom-4.jpg",
        "/phantom-5.jpg",
        "/phantom-6.jpg",
        "/phantom-7.jpg",
        "/phantom-8.jpg",
        "/phantom-9.jpg",
        "/phantom-10.jpg",
      ],
    },
    {
      id: 4,
      project: "Binghatti Azure",
      statusKey: "listings.status.for_sale",
      badgeKey: null,
      typeKey: "listings.azure.type",
      priceKey: "listings.azure.price",
      termsKey: null,
      contractKey: null,
      furnishedKey: null as string | null,
      ctaKey: "listings.azure.cta",
      ctaHref: "/contact-us",
      status: "for_sale",
      images: [
        "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/project-uploads/15da0035-1594-4842-aa98-6997df829f1d/1017953b-88db-4b32-a0de-2aa467c6e8ef-1773006353346.JPG?width=1600&height=1600&resize=contain",
      ],
    },
    {
      id: 5,
      project: "Binghatti Phoenix",
      statusKey: "listings.status.for_sale",
      badgeKey: null,
      typeKey: "listings.phoenix.type",
      priceKey: "listings.phoenix.price",
      termsKey: null,
      contractKey: null,
      furnishedKey: null as string | null,
      ctaKey: "listings.phoenix.cta",
      ctaHref: "/contact-us",
      status: "for_sale",
      images: [
        "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/project-uploads/15da0035-1594-4842-aa98-6997df829f1d/007aea4c-54d1-406e-bf6e-b272ac2f0e58-1773006354631.JPG?width=1600&height=1600&resize=contain",
      ],
    },
    {
      id: 6,
      project: "Binghatti Phantom",
      statusKey: "listings.status.for_sale",
      badgeKey: null,
      typeKey: "listings.phantom.type",
      priceKey: "listings.phantom.price",
      termsKey: null,
      contractKey: null,
      furnishedKey: "listings.phantom.furnished" as string | null,
      ctaKey: "listings.phantom.cta",
      ctaHref: "/contact-us",
      status: "for_sale",
      images: [
        "/phantom-3.jpg",
        "/phantom-1.jpg",
        "/phantom-2.jpg",
        "/phantom-4.jpg",
        "/phantom-5.jpg",
        "/phantom-6.jpg",
        "/phantom-7.jpg",
        "/phantom-8.jpg",
        "/phantom-9.jpg",
        "/phantom-10.jpg",
      ],
    },
  ];

  return (
    <section id="listings" className="bg-[#FAFAF8] py-20 lg:py-28">
      <div className="container mx-auto px-5 md:px-10 lg:px-16 max-w-[1300px]">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col items-center text-center mb-14"
        >
          <span className="text-[#C5A059] font-body text-xs tracking-[0.22em] uppercase mb-4">
            {t("listings.eyebrow")}
          </span>
          <h2 className="font-display text-3xl md:text-4xl xl:text-[48px] text-[#1A1A1A] leading-tight">
            {t("listings.headline")}
          </h2>
          <div className="w-10 h-px bg-[#C5A059] mt-5" />
        </motion.div>

        {/* Cards grid — 3 columns on large screens, centered */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 lg:gap-10 max-w-[1200px] mx-auto">
          {LISTINGS.map((listing, i) => (
            <PropertyCard key={listing.id} listing={listing} index={i} t={t} />
          ))}
        </div>
      </div>
    </section>
  );
}

function PropertyCard({
  listing,
  index,
  t,
}: {
  listing: {
    id: number;
    project: string;
    statusKey: string;
    badgeKey: string | null;
    typeKey: string;
    priceKey: string;
    termsKey: string | null;
    contractKey: string | null;
    furnishedKey: string | null;
    ctaKey: string;
    ctaHref: string;
    status: string;
    images: string[];
  };
  index: number;
  t: (key: string) => string;
}) {
  const [hovered, setHovered] = useState(false);
  const [currentImg, setCurrentImg] = useState(0);

  const hasMultiple = listing.images.length > 1;

  const prev = (e: React.MouseEvent) => {
    e.preventDefault();
    setCurrentImg((c) => (c === 0 ? listing.images.length - 1 : c - 1));
  };

  const next = (e: React.MouseEvent) => {
    e.preventDefault();
    setCurrentImg((c) => (c === listing.images.length - 1 ? 0 : c + 1));
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{
        duration: 0.9,
        ease: [0.22, 1, 0.36, 1],
        delay: index * 0.15,
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="group flex flex-col bg-white overflow-hidden"
      style={{
        borderRadius: "50px",
        boxShadow: hovered
          ? "0 20px 60px rgba(197,160,89,0.14), 0 4px 20px rgba(0,0,0,0.07)"
          : "0 4px 24px rgba(0,0,0,0.06)",
        transition: "box-shadow 0.4s ease",
      }}
    >
      {/* Image with optional arrow navigation */}
      <div
        className="relative overflow-hidden"
        style={{ borderRadius: "50px 50px 0 0", aspectRatio: "4/3" }}
      >
        <img
          src={listing.images[currentImg]}
          alt={`${listing.project} – ${currentImg + 1}`}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
        />

        {/* Arrow buttons — only shown when multiple images */}
        {hasMultiple && (
          <>
            <button
              onClick={prev}
              aria-label="Previous image"
              className="absolute left-3 top-1/2 -translate-y-1/2 z-10 flex items-center justify-center w-9 h-9 rounded-full bg-black/40 hover:bg-black/60 text-white transition-all duration-200 backdrop-blur-sm"
            >
              <ChevronLeft size={18} />
            </button>
            <button
              onClick={next}
              aria-label="Next image"
              className="absolute right-3 top-1/2 -translate-y-1/2 z-10 flex items-center justify-center w-9 h-9 rounded-full bg-black/40 hover:bg-black/60 text-white transition-all duration-200 backdrop-blur-sm"
            >
              <ChevronRight size={18} />
            </button>

            {/* Dot indicators */}
            <div className="absolute bottom-3 left-0 right-0 flex justify-center gap-1.5 z-10">
              {listing.images.map((_, idx) => (
                <button
                  key={idx}
                  onClick={(e) => { e.preventDefault(); setCurrentImg(idx); }}
                  aria-label={`Go to image ${idx + 1}`}
                  className="w-1.5 h-1.5 rounded-full transition-all duration-200"
                  style={{
                    background: idx === currentImg ? "#C5A059" : "rgba(255,255,255,0.6)",
                    transform: idx === currentImg ? "scale(1.3)" : "scale(1)",
                  }}
                />
              ))}
            </div>
          </>
        )}

        {/* Status pill + Investment badge */}
        <div className="absolute top-5 left-5 right-5 flex flex-wrap gap-2">
          <span
            className="font-body text-[11px] tracking-[0.16em] uppercase px-4 py-1.5 rounded-full"
            style={{
              background:
                listing.status === "for_sale"
                  ? "rgba(197,160,89,0.92)"
                  : listing.status === "available"
                  ? "rgba(255,255,255,0.92)"
                  : "rgba(30,30,30,0.75)",
              color:
                listing.status === "for_sale"
                  ? "#fff"
                  : listing.status === "available"
                  ? "#C5A059"
                  : "#F5E9CB",
              backdropFilter: "blur(6px)",
              border:
                listing.status === "for_sale"
                  ? "1px solid rgba(197,160,89,0.6)"
                  : listing.status === "available"
                  ? "1px solid rgba(197,160,89,0.4)"
                  : "1px solid rgba(245,233,203,0.3)",
            }}
          >
            {t(listing.statusKey)}
          </span>

          {listing.badgeKey && (
            <span
              className="font-body text-[11px] tracking-[0.16em] uppercase px-4 py-1.5 rounded-full"
              style={{
                background: "rgba(197,160,89,0.92)",
                color: "#fff",
                backdropFilter: "blur(6px)",
              }}
            >
              {t(listing.badgeKey)}
            </span>
          )}
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-col gap-4 p-7 lg:p-8 flex-1">
        {/* Project name & type */}
        <div>
          <h3 className="font-display text-[22px] md:text-[24px] text-[#1A1A1A] leading-tight group-hover:text-[#C5A059] transition-colors duration-300">
            {listing.project}
          </h3>
          <p className="font-body text-[#8A8A8A] text-[13px] tracking-[0.12em] uppercase mt-1">
            {t(listing.typeKey)}
          </p>
        </div>

        {/* Divider */}
        <div className="w-8 h-px bg-[#C5A059]" />

        {/* Price */}
        <div>
          <p className="font-body text-[11px] text-[#9A9A9A] tracking-[0.18em] uppercase mb-1">
            {t("listings.annual_rent")}
          </p>
          <p className="font-display text-[26px] md:text-[28px] text-[#1A1A1A] leading-none">
            {t(listing.priceKey)}
          </p>
        </div>

        {/* Details */}
        {(listing.termsKey || listing.contractKey || listing.furnishedKey) && (
          <div className="flex flex-col gap-2 pt-1">
            {listing.termsKey && (
              <div className="flex items-center gap-3">
                <span className="w-3 h-px bg-[#C5A059] flex-shrink-0" />
                <span className="font-body text-[13px] text-[#5A5A5A]">
                  <span className="font-medium text-[#1A1A1A]">{t("listings.payment")}:</span>{" "}
                  {t(listing.termsKey)}
                </span>
              </div>
            )}
            {listing.contractKey && (
              <div className="flex items-center gap-3">
                <span className="w-3 h-px bg-[#C5A059] flex-shrink-0" />
                <span className="font-body text-[13px] text-[#5A5A5A]">
                  <span className="font-medium text-[#1A1A1A]">{t("listings.contract")}:</span>{" "}
                  {t(listing.contractKey)}
                </span>
              </div>
            )}
            {listing.furnishedKey && (
              <div className="flex items-center gap-3">
                <span className="w-3 h-px bg-[#C5A059] flex-shrink-0" />
                <span className="font-body text-[13px] text-[#5A5A5A] font-medium text-[#1A1A1A]">
                  {t(listing.furnishedKey)}
                </span>
              </div>
            )}
          </div>
        )}

        {/* CTA */}
        <div className="pt-2 mt-auto">
          <Link
            href={listing.ctaHref}
            className="inline-block w-full text-center font-body text-[13px] tracking-[0.18em] uppercase py-4 transition-all duration-300"
            style={{
              borderRadius: "50px",
              border: "1px solid #C5A059",
              color: "#C5A059",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.background = "#C5A059";
              (e.currentTarget as HTMLAnchorElement).style.color = "#fff";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.background = "transparent";
              (e.currentTarget as HTMLAnchorElement).style.color = "#C5A059";
            }}
          >
            {t(listing.ctaKey)}
          </Link>
        </div>
      </div>
    </motion.div>
  );
}
