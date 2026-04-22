"use client";

import { useState } from "react";
import { notFound, useParams } from "next/navigation";
import Link from "next/link";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Bed, Bath, Maximize2, MapPin, Phone, MessageCircle, ArrowLeft, Check } from "lucide-react";
import Header from "@/components/sections/header";
import Footer from "@/components/sections/footer";
import { LISTINGS_DATA } from "@/components/sections/investment-listings";

export default function ListingPage() {
  const params = useParams();
  const slug = params?.slug as string;
  const listing = LISTINGS_DATA.find((l) => l.slug === slug);

  if (!listing) return notFound();

  return <ListingDetail listing={listing} />;
}

function ListingDetail({ listing }: { listing: typeof LISTINGS_DATA[0] }) {
  const [activeImg, setActiveImg] = useState(0);
  const pageBg = "#FFFFFF";

  const prev = () => setActiveImg((c) => (c === 0 ? listing.images.length - 1 : c - 1));
  const next = () => setActiveImg((c) => (c === listing.images.length - 1 ? 0 : c + 1));

  const features = [
    listing.furnishedKey ? "Fully Furnished" : null,
    "Air Conditioning",
    "Built-in Wardrobes",
    "Central A/C & Heating",
    "Gym",
    "Swimming Pool",
    "Covered Parking",
    "24/7 Security",
    "High-speed Internet",
    "Concierge Service",
  ].filter(Boolean) as string[];

  return (
    <div className="min-h-screen" style={{ backgroundColor: pageBg }}>
      <Header bgColor={pageBg} />
      <main className="pt-24 pb-20">
        <div className="container mx-auto px-5 md:px-10 lg:px-16 max-w-[1200px]">

          {/* Back link */}
          <motion.div
            initial={{ opacity: 0, x: -16 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-8"
          >
            <Link href="/services" className="inline-flex items-center gap-2 text-[#C5A059] font-body text-sm hover:gap-3 transition-all duration-200">
              <ArrowLeft size={16} />
              Back to Listings
            </Link>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-[1fr_360px] gap-10 lg:gap-14">

            {/* LEFT — Gallery + Details */}
            <div>
              {/* Main gallery */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                className="relative overflow-hidden rounded-2xl mb-4"
                style={{ aspectRatio: "16/9" }}
              >
                <img
                  src={listing.images[activeImg]}
                  alt={`${listing.project} – ${activeImg + 1}`}
                  className="w-full h-full object-cover"
                />
                {listing.images.length > 1 && (
                  <>
                    <button onClick={prev} aria-label="Previous"
                      className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/40 hover:bg-black/65 text-white flex items-center justify-center backdrop-blur-sm transition-all">
                      <ChevronLeft size={20} />
                    </button>
                    <button onClick={next} aria-label="Next"
                      className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/40 hover:bg-black/65 text-white flex items-center justify-center backdrop-blur-sm transition-all">
                      <ChevronRight size={20} />
                    </button>
                    <span className="absolute bottom-4 right-4 font-body text-[12px] text-white bg-black/40 backdrop-blur-sm px-3 py-1 rounded-full">
                      {activeImg + 1} / {listing.images.length}
                    </span>
                  </>
                )}
              </motion.div>

              {/* Thumbnails */}
              {listing.images.length > 1 && (
                <div className="flex gap-2 overflow-x-auto pb-1 mb-8">
                  {listing.images.map((img, idx) => (
                    <button
                      key={idx}
                      onClick={() => setActiveImg(idx)}
                      className="flex-shrink-0 w-20 h-14 rounded-lg overflow-hidden transition-all duration-200"
                      style={{
                        outline: idx === activeImg ? "2px solid #C5A059" : "2px solid transparent",
                        outlineOffset: "2px",
                        opacity: idx === activeImg ? 1 : 0.6,
                      }}
                    >
                      <img src={img} alt={`Thumbnail ${idx + 1}`} className="w-full h-full object-cover" />
                    </button>
                  ))}
                </div>
              )}

              {/* Title + location */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
                className="mb-6"
              >
                <span className="font-body text-[11px] tracking-[0.2em] uppercase text-[#C5A059] mb-2 block">
                  {listing.category}
                </span>
                <h1 className="font-display text-3xl md:text-4xl text-[#1A1A1A] leading-tight mb-3">
                  {listing.project}
                </h1>
                <div className="flex items-center gap-2">
                  <MapPin size={14} className="text-[#C5A059]" />
                  <span className="font-body text-[14px] text-[#7A7A7A]">{listing.location}</span>
                </div>
              </motion.div>

              {/* Stats */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.15 }}
                className="flex gap-6 mb-8 pb-8 border-b border-[#F0EBE1]"
              >
                <div className="flex flex-col items-center gap-1.5 bg-[#FAFAF8] border border-[#EDE6D8] rounded-xl px-5 py-3">
                  <Bed size={18} className="text-[#C5A059]" />
                  <span className="font-body text-[13px] text-[#5A5A5A]">
                    {listing.beds === 0 ? "Studio" : `${listing.beds} Bed`}
                  </span>
                </div>
                <div className="flex flex-col items-center gap-1.5 bg-[#FAFAF8] border border-[#EDE6D8] rounded-xl px-5 py-3">
                  <Bath size={18} className="text-[#C5A059]" />
                  <span className="font-body text-[13px] text-[#5A5A5A]">{listing.baths} Bath</span>
                </div>
                <div className="flex flex-col items-center gap-1.5 bg-[#FAFAF8] border border-[#EDE6D8] rounded-xl px-5 py-3">
                  <Maximize2 size={18} className="text-[#C5A059]" />
                  <span className="font-body text-[13px] text-[#5A5A5A]">{listing.sqft} Sq.Ft</span>
                </div>
              </motion.div>

              {/* Description */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="mb-8"
              >
                <h2 className="font-display text-xl text-[#1A1A1A] mb-4">About This Property</h2>
                <p className="font-body text-[#5A5A5A] text-[15px] leading-[1.85] font-light">
                  {listing.description}
                </p>
              </motion.div>

              {/* Features */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.25 }}
              >
                <h2 className="font-display text-xl text-[#1A1A1A] mb-4">Amenities & Features</h2>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {features.map((f) => (
                    <div key={f} className="flex items-center gap-2.5">
                      <span className="w-5 h-5 rounded-full bg-[#C5A059]/10 border border-[#C5A059]/30 flex items-center justify-center flex-shrink-0">
                        <Check size={11} className="text-[#C5A059]" />
                      </span>
                      <span className="font-body text-[13px] text-[#4A4A4A]">{f}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* RIGHT — Sticky contact card */}
            <div>
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, delay: 0.2 }}
                className="sticky top-28"
              >
                {/* Price card */}
                <div className="bg-white border border-[#EDE6D8] rounded-2xl p-6 mb-4"
                  style={{ boxShadow: "0 4px 24px rgba(197,160,89,0.10)" }}>
                  <p className="font-body text-[11px] text-[#9A9A9A] tracking-[0.18em] uppercase mb-1">Price</p>
                  <p className="font-display text-[32px] text-[#1A1A1A] leading-none mb-1">
                    {/* Inline price from translation key */}
                    {listing.priceKey === "listings.phoenix.price" && "80,000 AED"}
                    {listing.priceKey === "listings.tulip.price" && "7,000 AED"}
                    {listing.priceKey === "listings.phantom.price" && "110,000 AED"}
                  </p>
                  <p className="font-body text-[13px] text-[#9A9A9A]">per {listing.pricePeriod.toLowerCase()}</p>

                  <div className="w-8 h-px bg-[#C5A059] my-4" />

                  {listing.furnishedKey && (
                    <div className="flex items-center gap-2 mb-2">
                      <Check size={13} className="text-[#C5A059]" />
                      <span className="font-body text-[13px] text-[#4A4A4A]">Fully Furnished</span>
                    </div>
                  )}
                  <div className="flex items-center gap-2 mb-2">
                    <Check size={13} className="text-[#C5A059]" />
                    <span className="font-body text-[13px] text-[#4A4A4A]">{listing.category}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check size={13} className="text-[#C5A059]" />
                    <span className="font-body text-[13px] text-[#4A4A4A]">{listing.location}</span>
                  </div>
                </div>

                {/* Agent card */}
                <div className="bg-white border border-[#EDE6D8] rounded-2xl p-6"
                  style={{ boxShadow: "0 4px 24px rgba(197,160,89,0.10)" }}>
                  <div className="flex items-center gap-4 mb-5">
                    <img src="/dulce-portrait.png" alt="Dulce Escobar"
                      className="w-14 h-14 rounded-full object-cover border-2 border-[#EDE6D8]" />
                    <div>
                      <p className="font-body text-[11px] text-[#9A9A9A] tracking-[0.12em] uppercase mb-0.5">Listed By</p>
                      <p className="font-display text-[18px] text-[#1A1A1A] leading-tight">Dulce Escobar</p>
                      <p className="font-body text-[12px] text-[#7A7A7A]">Luxury Real Estate Specialist</p>
                    </div>
                  </div>

                  <div className="flex flex-col gap-3">
                    <a
                      href="https://wa.me/971509092424"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2.5 w-full py-3.5 rounded-full bg-[#C5A059] text-white font-body text-[13px] tracking-[0.14em] uppercase hover:bg-[#b08c45] transition-colors duration-200"
                    >
                      <MessageCircle size={15} />
                      WhatsApp
                    </a>
                    <a
                      href="tel:+971509092424"
                      className="flex items-center justify-center gap-2.5 w-full py-3.5 rounded-full border border-[#C5A059] text-[#C5A059] font-body text-[13px] tracking-[0.14em] uppercase hover:bg-[#C5A059] hover:text-white transition-colors duration-200"
                    >
                      <Phone size={15} />
                      Call Now
                    </a>
                    <Link
                      href="/contact-us"
                      className="flex items-center justify-center gap-2.5 w-full py-3.5 rounded-full border border-[#EDE6D8] text-[#4A4A4A] font-body text-[13px] tracking-[0.14em] uppercase hover:border-[#C5A059] hover:text-[#C5A059] transition-colors duration-200"
                    >
                      Book a Viewing
                    </Link>
                  </div>
                </div>
              </motion.div>
            </div>

          </div>
        </div>
      </main>
      <Footer bgColor={pageBg} />
    </div>
  );
}
