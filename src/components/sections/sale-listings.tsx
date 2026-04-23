"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ChevronLeft, ChevronRight, Bed, Bath, Maximize2, MapPin, Phone, MessageCircle } from "lucide-react";

const SALE_LISTINGS = [
  {
    id: 1,
    slug: "binghatti-azure-sale",
    project: "Binghatti Azure",
    category: "Studio",
    location: "JVC, Dubai",
    beds: 0,
    baths: 1,
    sqft: 430,
    price: "720,000 AED",
    pricePeriod: "Sale Price",
    contract: "Rented until 28.8.2028",
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
  },
  {
    id: 2,
    slug: "binghatti-aurora-sale",
    project: "Binghatti Aurora",
    category: "Studio",
    location: "JVC, Dubai",
    beds: 0,
    baths: 1,
    sqft: 452,
    price: "750,000 AED",
    pricePeriod: "Sale Price",
    contract: "Rented until 30.11.2028",
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
  },
];

export default function SaleListings() {
  return (
    <section id="listings" className="bg-[#FAFAF8] py-20 lg:py-28">
      <div className="container mx-auto px-5 md:px-10 lg:px-16 max-w-[1300px]">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col items-center text-center mb-14"
        >
          <span className="text-[#C5A059] font-body text-xs tracking-[0.22em] uppercase mb-4">
            Featured Listings
          </span>
          <h2 className="font-display text-3xl md:text-4xl xl:text-[48px] text-[#1A1A1A] leading-tight">
            Properties For Sale
          </h2>
          <div className="w-10 h-px bg-[#C5A059] mt-5" />
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-[700px] mx-auto">
          {SALE_LISTINGS.map((listing, i) => (
            <SaleCard key={listing.id} listing={listing} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function SaleCard({
  listing,
  index,
}: {
  listing: (typeof SALE_LISTINGS)[number];
  index: number;
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
        {/* Clickable overlay for card navigation */}
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

          {/* Category badge */}
          <span className="absolute top-3 left-3 z-10 font-body text-[11px] tracking-[0.14em] uppercase px-3 py-1 rounded-md bg-white text-[#1A1A1A] font-medium shadow-sm">
            {listing.category}
          </span>

          {/* For Sale badge */}
          <span className="absolute top-3 right-3 z-10 font-body text-[11px] tracking-[0.14em] uppercase px-3 py-1 rounded-md bg-[#C5A059] text-white font-medium shadow-sm">
            For Sale
          </span>

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
            <p className="font-body text-[10px] text-[#9A9A9A] tracking-[0.16em] uppercase mb-0.5">{listing.pricePeriod}</p>
            <p className="font-display text-[20px] text-[#1A1A1A] leading-none">{listing.price}</p>
            {listing.contract && (
              <p className="font-body text-[11px] text-[#9A9A9A] mt-1">{listing.contract}</p>
            )}
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
                href="tel:+971588473125"
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
