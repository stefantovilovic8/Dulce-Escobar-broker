"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ChevronLeft, ChevronRight, Bed, Bath, Maximize2, MapPin, Phone, MessageCircle } from "lucide-react";
import { useLanguage } from "@/lib/language-context";

export const LISTINGS_DATA = [
  {
    id: 2,
    slug: "binghatti-aurora",
    project: "Binghatti Aurora",
    category: "Studio",
    location: "JVC, Dubai",
    beds: 0,
    baths: 1,
    sqft: 452,
    statusKey: "listings.phoenix.status",
    typeKey: "listings.phoenix.type",
    priceKey: "listings.phoenix.price",
    pricePeriod: "Yearly",
    furnishedKey: null as string | null,
    status: "available",
    images: [
      "/aurora-4.jpg",
      "/aurora-2.jpg",
      "/aurora-3.jpg",
      "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/project-uploads/15da0035-1594-4842-aa98-6997df829f1d/1017953b-88db-4b32-a0de-2aa467c6e8ef-1773006353346.JPG?width=1600&height=1600&resize=contain",
      "/aurora-5.jpg",
      "/aurora-6.jpg",
      "/aurora-7.jpg",
      "/aurora-8.jpg",
      "/aurora-9.jpg",
      "/aurora-10.jpg",
      "/aurora-11.jpg",
    ],
    description: "Elegant studio apartment in the prestigious Binghatti Aurora tower, located in the heart of Business Bay. This thoughtfully designed unit offers breathtaking views, premium finishes, and access to world-class amenities.",
  },
  {
    id: 4,
    slug: "binghatti-tulip-3007",
    project: "Binghatti Tulip",
    category: "Apartment",
    location: "JVC, Dubai",
    beds: 1,
    baths: 1,
    sqft: 493,
    statusKey: "listings.tulip.status",
    typeKey: "listings.tulip.type",
    priceKey: "listings.tulip.price",
    pricePeriod: "Yearly",
    furnishedKey: "listings.tulip.furnished" as string | null,
    status: "available",
    images: [
      "/tulip-1.jpg",
      "/tulip-2.jpg",
      "/tulip-3.jpg",
      "/tulip-4.jpg",
      "/tulip-5.jpg",
      "/tulip-6.jpg",
      "/tulip-7.jpg",
    ],
    description: "Stunning fully furnished 1-bedroom apartment on the 30th floor of Binghatti Tulip — Unit 3007. Enjoy breathtaking marina views, premium modern interiors, a fully fitted kitchen, and resort-style building amenities. A high-floor gem in one of JVC's most iconic towers.",
  },
  {
    id: 5,
    slug: "binghatti-tulip-2806",
    project: "Binghatti Tulip",
    category: "Apartment",
    location: "JVC, Dubai",
    beds: 1,
    baths: 1,
    sqft: 513,
    statusKey: "listings.tulip.status",
    typeKey: "listings.tulip.type",
    priceKey: "listings.tulip.price",
    pricePeriod: "Yearly",
    furnishedKey: "listings.tulip.furnished" as string | null,
    status: "available",
    images: [
      "/tulip2-1.jpg",
      "/tulip2-2.jpg",
      "/tulip2-3.jpg",
      "/tulip2-4.jpg",
      "/tulip2-5.jpg",
      "/tulip2-6.jpg",
      "/tulip2-7.jpg",
      "/tulip2-8.jpg",
    ],
    description: "Beautifully furnished 1-bedroom apartment on the 28th floor of Binghatti Tulip — Unit 2806. Featuring premium finishes, a fully fitted kitchen with appliances, built-in wardrobes, and a private balcony with stunning community views. High-floor living at its finest in the heart of JVC.",
  },
  {
    id: 6,
    slug: "binghatti-azure-sale",
    project: "Binghatti Azure",
    category: "Studio",
    location: "JVC, Dubai",
    beds: 0,
    baths: 1,
    sqft: 430,
    statusKey: "listings.phoenix.status",
    typeKey: "listings.phoenix.type",
    priceKey: "listings.azure.price",
    pricePeriod: "Sale Price",
    furnishedKey: null as string | null,
    status: "for-sale",
    images: [
      "/azure-7.jpg",
      "/azure-1.jpg",
      "/azure-2.jpg",
      "/azure-3.jpg",
      "/azure-4.jpg",
      "/azure-5.jpg",
      "/azure-6.jpg",
      "/azure-8.jpg",
      "/azure-9.jpg",
      "/azure-10.jpg",
    ],
    description: "Elegant studio apartment in the prestigious Binghatti Azure tower, perfectly positioned in Business Bay — Dubai's most vibrant mixed-use district. This income-generating unit is currently tenanted until August 2028, making it a prime turnkey investment with immediate rental returns and strong capital appreciation potential.",
    salePrice: "720,000 AED",
    saleContract: "Rented until 28.8.2028",
  },
  {
    id: 7,
    slug: "binghatti-aurora-sale",
    project: "Binghatti Aurora",
    category: "Studio",
    location: "JVC, Dubai",
    beds: 0,
    baths: 1,
    sqft: 452,
    statusKey: "listings.phoenix.status",
    typeKey: "listings.phoenix.type",
    priceKey: "listings.aurora.price",
    pricePeriod: "Sale Price",
    furnishedKey: null as string | null,
    status: "for-sale",
    images: [
      "/aurora-4.jpg",
      "/aurora-2.jpg",
      "/aurora-3.jpg",
      "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/project-uploads/15da0035-1594-4842-aa98-6997df829f1d/1017953b-88db-4b32-a0de-2aa467c6e8ef-1773006353346.JPG?width=1600&height=1600&resize=contain",
      "/aurora-5.jpg",
      "/aurora-6.jpg",
      "/aurora-7.jpg",
      "/aurora-8.jpg",
      "/aurora-9.jpg",
      "/aurora-10.jpg",
      "/aurora-11.jpg",
    ],
    description: "Sophisticated studio apartment in the iconic Binghatti Aurora tower, located in the heart of Business Bay. Currently tenanted until November 2028, this investment-ready unit offers immediate rental income with long-term capital growth prospects in one of Dubai's most sought-after addresses.",
    salePrice: "750,000 AED",
    saleContract: "Rented until 30.11.2028",
  },
  {
    id: 3,
    slug: "binghatti-phantom",
    project: "Binghatti Phantom",
    category: "Apartment",
    location: "JVC, Dubai",
    beds: 1,
    baths: 2,
    sqft: 794,
    statusKey: "listings.phantom.status",
    typeKey: "listings.phantom.type",
    priceKey: "listings.phantom.price",
    pricePeriod: "Yearly",
    furnishedKey: "listings.phantom.furnished" as string | null,
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
    description: "Exquisite fully furnished 1-bedroom apartment in the iconic Binghatti Phantom — Unit 409. Featuring upgraded designer interiors, a spacious open-plan living area, fully fitted gourmet kitchen, and serene community views. A rare vacancy in one of Dubai's most sought-after residential addresses.",
  },
];

export default function InvestmentListings() {
  const { t } = useLanguage();

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
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
          {LISTINGS_DATA.filter((l) => l.status !== "for-sale").map((listing, i) => (
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
  listing: typeof LISTINGS_DATA[0];
  index: number;
  t: (key: string) => string;
}) {
  const [currentImg, setCurrentImg] = useState(0);
  const hasMultiple = listing.images.length > 1;

  const prev = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setCurrentImg((c) => (c === 0 ? listing.images.length - 1 : c - 1));
  };
  const next = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setCurrentImg((c) => (c === listing.images.length - 1 ? 0 : c + 1));
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: index * 0.1 }}
    >
      <div
        className="group flex flex-col bg-white overflow-hidden rounded-2xl h-full relative"
        style={{
          boxShadow: "0 2px 16px rgba(0,0,0,0.07)",
          transition: "box-shadow 0.3s ease, transform 0.3s ease",
        }}
        onMouseEnter={(e) => {
          (e.currentTarget as HTMLElement).style.boxShadow = "0 12px 40px rgba(197,160,89,0.15), 0 4px 16px rgba(0,0,0,0.08)";
          (e.currentTarget as HTMLElement).style.transform = "translateY(-3px)";
        }}
        onMouseLeave={(e) => {
          (e.currentTarget as HTMLElement).style.boxShadow = "0 2px 16px rgba(0,0,0,0.07)";
          (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
        }}
      >
        {/* Clickable overlay for card navigation (sits below interactive elements) */}
        <Link
          href={`/listing/${listing.slug}`}
          className="absolute inset-0 z-[1]"
          aria-label={`View ${listing.project}`}
        />

        {/* Image */}
        <div className="relative overflow-hidden rounded-t-2xl" style={{ aspectRatio: "4/3" }}>
          <img
            src={listing.images[currentImg]}
            alt={listing.project}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.05]"
          />

          {/* Category badge — top left */}
          <span className="absolute top-3 left-3 z-10 font-body text-[11px] tracking-[0.14em] uppercase px-3 py-1 rounded-md bg-white text-[#1A1A1A] font-medium shadow-sm">
            {listing.category}
          </span>

          {/* Arrow nav */}
          {hasMultiple && (
            <>
              <button onClick={prev} aria-label="Previous image"
                className="relative z-10 absolute left-2 top-1/2 -translate-y-1/2 w-7 h-7 rounded-full bg-black/40 hover:bg-black/65 text-white flex items-center justify-center backdrop-blur-sm transition-all">
                <ChevronLeft size={14} />
              </button>
              <button onClick={next} aria-label="Next image"
                className="relative z-10 absolute right-2 top-1/2 -translate-y-1/2 w-7 h-7 rounded-full bg-black/40 hover:bg-black/65 text-white flex items-center justify-center backdrop-blur-sm transition-all">
                <ChevronRight size={14} />
              </button>
              <div className="absolute bottom-2 left-0 right-0 flex justify-center gap-1 z-10">
                {listing.images.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={(e) => { e.preventDefault(); e.stopPropagation(); setCurrentImg(idx); }}
                    className="relative z-10 w-1.5 h-1.5 rounded-full transition-all duration-200"
                    style={{ background: idx === currentImg ? "#C5A059" : "rgba(255,255,255,0.65)" }}
                  />
                ))}
              </div>
            </>
          )}
        </div>

        {/* Body */}
        <div className="flex flex-col flex-1 p-4">
          {/* Title */}
          <h3 className="font-display text-[17px] text-[#1A1A1A] leading-snug group-hover:text-[#C5A059] transition-colors duration-300 mb-1">
            {listing.project}
          </h3>

          {/* Location */}
          <div className="flex items-center gap-1.5 mb-3">
            <MapPin size={12} className="text-[#C5A059] flex-shrink-0" />
            <span className="font-body text-[12px] text-[#7A7A7A]">{listing.location}</span>
          </div>

          {/* Stats row */}
          <div className="flex items-center gap-3 mb-4 pb-4 border-b border-[#F0EBE1]">
            <div className="flex items-center gap-1.5">
              <Bed size={13} className="text-[#C5A059]" />
              <span className="font-body text-[12px] text-[#5A5A5A]">
                {listing.beds === 0 ? "Studio" : `${listing.beds} Bed`}
              </span>
            </div>
            <div className="flex items-center gap-1.5">
              <Bath size={13} className="text-[#C5A059]" />
              <span className="font-body text-[12px] text-[#5A5A5A]">{listing.baths} Bath</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Maximize2 size={13} className="text-[#C5A059]" />
              <span className="font-body text-[12px] text-[#5A5A5A]">{listing.sqft} Sq.Ft</span>
            </div>
          </div>

          {/* Price box */}
          <div className="bg-[#FAFAF8] border border-[#EDE6D8] rounded-xl px-4 py-3 mb-4">
            <p className="font-body text-[10px] text-[#9A9A9A] tracking-[0.16em] uppercase mb-0.5">Price</p>
            <p className="font-display text-[20px] text-[#1A1A1A] leading-none">
              {t(listing.priceKey)}
            </p>
          </div>

          {/* Agent footer */}
          <div className="relative z-[2] flex items-center gap-3 mt-auto pt-1">
            <img
              src="/dulce-portrait.png"
              alt="Dulce Escobar"
              className="w-9 h-9 rounded-full object-cover flex-shrink-0 border-2 border-[#EDE6D8]"
            />
            <div className="flex-1 min-w-0">
              <p className="font-body text-[10px] text-[#9A9A9A] leading-none mb-0.5">Listed By</p>
              <p className="font-body text-[12px] text-[#1A1A1A] font-medium truncate">Dulce Escobar</p>
            </div>
            <div className="flex items-center gap-2 flex-shrink-0">
              <a
                href="tel:+971509092424"
                aria-label="Call agent"
                className="relative z-[2] w-8 h-8 rounded-full border border-[#EDE6D8] flex items-center justify-center text-[#C5A059] hover:bg-[#C5A059] hover:text-white hover:border-[#C5A059] transition-all duration-200"
              >
                <Phone size={13} />
              </a>
              <a
                href="https://wa.me/971588473125"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp agent"
                className="relative z-[2] w-8 h-8 rounded-full border border-[#EDE6D8] flex items-center justify-center text-[#C5A059] hover:bg-[#C5A059] hover:text-white hover:border-[#C5A059] transition-all duration-200"
              >
                <MessageCircle size={13} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
