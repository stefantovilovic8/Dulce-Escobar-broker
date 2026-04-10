"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { useLanguage } from "@/lib/language-context";

export default function InvestmentListings() {
  const { t } = useLanguage();

  const LISTINGS = [
    {
      id: 1,
        project: "Binghatti Azure",
        statusKey: "listings.azure.status",
        badgeKey: "listings.azure.badge" as string | null,
        typeKey: "listings.azure.type",
        priceKey: "listings.azure.price",
        termsKey: "listings.azure.terms" as string | null,
      contractKey: "listings.azure.contract" as string | null,
      ctaKey: "listings.azure.cta",
      ctaHref: "/contact-us",
      status: "rented",
      image:
        "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/project-uploads/15da0035-1594-4842-aa98-6997df829f1d/1017953b-88db-4b32-a0de-2aa467c6e8ef-1773006353346.JPG?width=1600&height=1600&resize=contain",
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
      ctaKey: "listings.phoenix.cta",
      ctaHref: "/contact-us",
      status: "available",
      image:
        "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/project-uploads/15da0035-1594-4842-aa98-6997df829f1d/007aea4c-54d1-406e-bf6e-b272ac2f0e58-1773006354631.JPG?width=1600&height=1600&resize=contain",
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

        {/* Cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10 max-w-[900px] mx-auto">
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
  listing: ReturnType<typeof buildListings>[0];
  index: number;
  t: (key: string) => string;
}) {
  const [hovered, setHovered] = useState(false);

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
      {/* Image */}
      <div
        className="relative overflow-hidden"
        style={{ borderRadius: "50px 50px 0 0", aspectRatio: "4/3" }}
      >
        <img
          src={listing.image}
          alt={listing.project}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
        />

        {/* Status pill + Investment badge */}
        <div className="absolute top-5 left-5 right-5 flex flex-wrap gap-2">
          <span
            className="font-body text-[11px] tracking-[0.16em] uppercase px-4 py-1.5 rounded-full"
            style={{
              background:
                listing.status === "available"
                  ? "rgba(255,255,255,0.92)"
                  : "rgba(30,30,30,0.75)",
              color: listing.status === "available" ? "#C5A059" : "#F5E9CB",
              backdropFilter: "blur(6px)",
              border:
                listing.status === "available"
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
        {(listing.termsKey || listing.contractKey) && (
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

// Helper type — not actually called at runtime
function buildListings() {
  return [
    {
      id: 0,
      project: "",
      statusKey: "",
      badgeKey: null as string | null,
      typeKey: "",
      priceKey: "",
      termsKey: null as string | null,
      contractKey: null as string | null,
      ctaKey: "",
      ctaHref: "",
      status: "",
      image: "",
    },
  ];
}
