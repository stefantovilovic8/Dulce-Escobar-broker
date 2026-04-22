"use client";

import { useState } from "react";
import { notFound, useParams } from "next/navigation";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ChevronLeft, ChevronRight, Bed, Bath, Maximize2, MapPin,
  Phone, MessageCircle, ArrowLeft, Building2, Layers,
  Eye, Car, CircleDot, CreditCard,
} from "lucide-react";
import Header from "@/components/sections/header";
import Footer from "@/components/sections/footer";
import { LISTINGS_DATA } from "@/components/sections/investment-listings";

// Extended specs per slug
const EXTENDED_SPECS: Record<string, {
  unitTitle?: string;
  floor?: string;
  view?: string;
  parking?: string;
  status?: string;
  paymentTerms?: string;
  amenities?: { category: string; items: string[] }[];
}> = {
  "binghatti-phantom": {
    unitTitle: "Unit 409",
    floor: "4th Floor",
    view: "Community View",
    parking: "P4-29",
    status: "Vacant",
    paymentTerms: "4–6 Cheques",
    amenities: [
      {
        category: "Interior",
        items: [
          "Fully Furnished",
          "Fully Fitted Kitchen",
          "Kitchen Appliances",
          "Built-in Wardrobes",
          "Carpets",
          "Central A/C",
          "Study",
          "Upgraded Interior",
        ],
      },
      {
        category: "Leisure & Wellness",
        items: [
          "Private Swimming Pool",
          "Shared Swimming Pool",
          "Jacuzzi",
          "Gymnasium",
          "Sauna",
          "Steam Room",
          "BBQ Area",
          "Entertaining Area",
        ],
      },
      {
        category: "Building & Outdoor",
        items: [
          "Balcony",
          "Covered Parking",
          "Communal Gardens",
          "Children's Play Area",
          "Children's Nursery",
        ],
      },
      {
        category: "Connectivity & Lifestyle",
        items: [
          "Broadband Ready",
          "Pets Allowed",
          "Public Park",
          "Public Transport",
          "Restaurants",
          "Shops",
          "Tennis Courts",
        ],
      },
    ],
  },
};

export default function ListingPage() {
  const params = useParams();
  const slug = params?.slug as string;
  const listing = LISTINGS_DATA.find((l) => l.slug === slug);
  if (!listing) return notFound();
  return <ListingDetail listing={listing} extended={EXTENDED_SPECS[slug] ?? {}} />;
}

function ListingDetail({
  listing,
  extended,
}: {
  listing: typeof LISTINGS_DATA[0];
  extended: typeof EXTENDED_SPECS[string];
}) {
  const [activeImg, setActiveImg] = useState(0);
  const pageBg = "#FFFFFF";

  const prev = () => setActiveImg((c) => (c === 0 ? listing.images.length - 1 : c - 1));
  const next = () => setActiveImg((c) => (c === listing.images.length - 1 ? 0 : c + 1));

  const isPhantom = listing.slug === "binghatti-phantom";

  // Build specs bar
  const specs = [
    { icon: <Building2 size={16} />, label: "Type", value: listing.category },
    { icon: <Bed size={16} />, label: "Bedrooms", value: listing.beds === 0 ? "Studio" : `${listing.beds}` },
    { icon: <Bath size={16} />, label: "Bathrooms", value: `${listing.baths}` },
    { icon: <Maximize2 size={16} />, label: "Size", value: `${listing.sqft} Sq.Ft` },
    ...(extended.floor ? [{ icon: <Layers size={16} />, label: "Floor", value: extended.floor }] : []),
    ...(extended.view ? [{ icon: <Eye size={16} />, label: "View", value: extended.view }] : []),
    ...(extended.parking ? [{ icon: <Car size={16} />, label: "Parking", value: extended.parking }] : []),
    ...(extended.status ? [{ icon: <CircleDot size={16} />, label: "Status", value: extended.status }] : []),
  ];

  // Default amenities for non-phantom listings
  const amenities = extended.amenities ?? [
    {
      category: "Features",
      items: [
        listing.furnishedKey ? "Fully Furnished" : "Unfurnished",
        "Air Conditioning",
        "Built-in Wardrobes",
        "Central A/C & Heating",
        "Gym",
        "Swimming Pool",
        "Covered Parking",
        "24/7 Security",
        "High-speed Internet",
        "Concierge Service",
      ],
    },
  ];

  return (
    <div className="min-h-screen" style={{ backgroundColor: pageBg }}>
      <Header bgColor={pageBg} />

      <main>
        {/* ── Hero Gallery ── */}
        <div className="w-full bg-[#0A0A0A]" style={{ paddingTop: "72px" }}>
          <div className="flex gap-1 h-[420px] md:h-[520px]">

            {/* Main large image — left ~62% */}
            <div className="relative overflow-hidden flex-[62]">
              <img
                src={listing.images[activeImg]}
                alt={listing.project}
                className="w-full h-full object-cover transition-all duration-500"
              />
              {/* gradient for text */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

              {/* Arrow nav */}
              <button onClick={prev} aria-label="Previous"
                className="absolute left-4 top-1/2 -translate-y-1/2 z-10 w-9 h-9 rounded-full bg-black/45 hover:bg-black/70 text-white flex items-center justify-center backdrop-blur-sm transition-all">
                <ChevronLeft size={18} />
              </button>
              <button onClick={next} aria-label="Next"
                className="absolute right-4 top-1/2 -translate-y-1/2 z-10 w-9 h-9 rounded-full bg-black/45 hover:bg-black/70 text-white flex items-center justify-center backdrop-blur-sm transition-all">
                <ChevronRight size={18} />
              </button>

              {/* Price tag bottom-left */}
              <div className="absolute bottom-5 left-5 z-10">
                <span className="font-body text-[11px] tracking-[0.18em] uppercase text-[#C5A059] block mb-1">
                  {listing.category} · For Rent
                </span>
                <p className="font-display text-white text-[22px] leading-none">
                  {isPhantom ? "110,000 AED Yearly" : ""}
                </p>
              </div>
            </div>

            {/* 2×2 grid — right ~38% */}
            {listing.images.length > 1 && (
              <div className="flex-[38] grid grid-cols-2 grid-rows-2 gap-1">
                {listing.images.slice(1, 5).map((img, idx) => {
                  const realIdx = idx + 1;
                  const isLast = idx === 3 && listing.images.length > 5;
                  return (
                    <button
                      key={realIdx}
                      onClick={() => setActiveImg(realIdx)}
                      className="relative overflow-hidden w-full h-full"
                    >
                      <img
                        src={img}
                        alt={`View ${realIdx + 1}`}
                        className="w-full h-full object-cover hover:scale-[1.04] transition-transform duration-500"
                        style={{ opacity: activeImg === realIdx ? 1 : 0.85 }}
                      />
                      {activeImg === realIdx && (
                        <div className="absolute inset-0 ring-2 ring-[#C5A059] pointer-events-none" />
                      )}
                      {isLast && (
                        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                          <span className="font-body text-white text-sm tracking-widest">
                            +{listing.images.length - 5} more
                          </span>
                        </div>
                      )}
                    </button>
                  );
                })}
              </div>
            )}
          </div>

          {/* Title bar below gallery */}
          <div className="px-6 md:px-14 py-5 bg-[#0A0A0A]">
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2"
            >
              <div>
                <h1 className="font-display text-white text-2xl md:text-3xl leading-tight">
                  {listing.project}
                </h1>
                <div className="flex items-center gap-2 mt-1.5">
                  <MapPin size={13} className="text-[#C5A059]" />
                  <span className="font-body text-white/70 text-[13px]">{listing.location}</span>
                </div>
              </div>
              <span className="font-body text-[11px] tracking-[0.2em] uppercase text-[#C5A059] bg-white/5 border border-[#C5A059]/30 px-4 py-2 rounded-full self-start sm:self-auto">
                Available for Rent
              </span>
            </motion.div>
          </div>
        </div>

        {/* ── Specs Bar ── */}
        <div className="bg-[#1A1A1A] px-6 md:px-14 py-3">
          <div className="max-w-[1200px] mx-auto flex flex-wrap gap-x-6 gap-y-2 justify-between">
            {specs.map((s) => (
              <div key={s.label} className="flex items-center gap-2">
                <span className="text-[#C5A059]">{s.icon}</span>
                <div>
                  <p className="font-body text-[9px] text-white/40 tracking-[0.14em] uppercase leading-none mb-0.5">{s.label}</p>
                  <p className="font-body text-[12px] text-white font-medium">{s.value}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ── Main content ── */}
        <div className="container mx-auto px-5 md:px-10 lg:px-14 max-w-[1200px] py-16">

          {/* Back link */}
          <Link href="/services" className="inline-flex items-center gap-2 text-[#C5A059] font-body text-sm hover:gap-3 transition-all duration-200 mb-12 block">
            <ArrowLeft size={15} />
            Back to Listings
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-[1fr_340px] gap-12 lg:gap-16">

            {/* LEFT */}
            <div>
              {/* Description */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="mb-14"
              >
                <span className="text-[#C5A059] font-body text-xs tracking-[0.22em] uppercase mb-3 block">Overview</span>
                <h2 className="font-display text-2xl md:text-3xl text-[#1A1A1A] mb-6">About This Property</h2>
                <div className="w-10 h-px bg-[#C5A059] mb-6" />
                <p className="font-body text-[#5A5A5A] text-[15px] md:text-[16px] leading-[1.9] font-light">
                  {listing.description}
                </p>
              </motion.div>

              {/* Amenities */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.1 }}
              >
                <span className="text-[#C5A059] font-body text-xs tracking-[0.22em] uppercase mb-3 block">Details</span>
                <h2 className="font-display text-2xl md:text-3xl text-[#1A1A1A] mb-6">Property Features</h2>
                <div className="w-10 h-px bg-[#C5A059] mb-10" />

                <div className="flex flex-col gap-10">
                  {amenities.map((group) => (
                    <div key={group.category}>
                      <h3 className="font-body text-[11px] tracking-[0.22em] uppercase text-[#C5A059] mb-4">
                        {group.category}
                      </h3>
                      <div className="grid grid-cols-2 sm:grid-cols-3 gap-x-6 gap-y-3">
                        {group.items.map((item) => (
                          <div key={item} className="flex items-center gap-2.5">
                            <span className="w-4 h-4 rounded-full border border-[#C5A059]/50 bg-[#C5A059]/8 flex items-center justify-center flex-shrink-0">
                              <svg width="8" height="6" viewBox="0 0 8 6" fill="none">
                                <path d="M1 3l2 2 4-4" stroke="#C5A059" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                              </svg>
                            </span>
                            <span className="font-body text-[13px] text-[#4A4A4A]">{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* RIGHT — Sticky card */}
            <div>
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, delay: 0.15 }}
                className="sticky top-28 flex flex-col gap-4"
              >
                {/* Price card */}
                <div className="bg-white border border-[#EDE6D8] rounded-2xl p-6"
                  style={{ boxShadow: "0 4px 32px rgba(197,160,89,0.12)" }}>
                  <p className="font-body text-[11px] text-[#9A9A9A] tracking-[0.18em] uppercase mb-1">Annual Rent</p>
                  <p className="font-display text-[36px] text-[#1A1A1A] leading-none">
                    {isPhantom ? "110,000 AED" : listing.priceKey.includes("tulip") ? "7,000 AED / mo" : "80,000 AED"}
                  </p>
                  {extended.paymentTerms && (
                    <div className="flex items-center gap-2 mt-3">
                      <CreditCard size={13} className="text-[#C5A059]" />
                      <span className="font-body text-[13px] text-[#5A5A5A]">{extended.paymentTerms}</span>
                    </div>
                  )}

                  <div className="w-8 h-px bg-[#C5A059] my-5" />

                  <div className="flex flex-col gap-2.5">
                    {[
                      listing.category,
                      listing.location,
                      ...(extended.status ? [`Status: ${extended.status}`] : []),
                      ...(listing.furnishedKey ? ["Fully Furnished"] : []),
                    ].map((item) => (
                      <div key={item} className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#C5A059] flex-shrink-0" />
                        <span className="font-body text-[13px] text-[#5A5A5A]">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Agent card */}
                <div className="bg-white border border-[#EDE6D8] rounded-2xl p-6"
                  style={{ boxShadow: "0 4px 32px rgba(197,160,89,0.12)" }}>
                  <div className="flex items-center gap-4 mb-6">
                    <img src="/dulce-portrait.png" alt="Dulce Escobar"
                      className="w-14 h-14 rounded-full object-cover border-2 border-[#EDE6D8]" />
                    <div>
                      <p className="font-body text-[10px] text-[#9A9A9A] tracking-[0.12em] uppercase mb-0.5">Listed By</p>
                      <p className="font-display text-[19px] text-[#1A1A1A] leading-tight">Dulce Escobar</p>
                      <p className="font-body text-[12px] text-[#7A7A7A]">Luxury Real Estate</p>
                    </div>
                  </div>

                  <div className="flex flex-col gap-3">
                    <a
                      href="https://wa.me/971509092424"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2.5 w-full py-3.5 rounded-full bg-[#C5A059] text-white font-body text-[12px] tracking-[0.16em] uppercase hover:bg-[#b08c45] transition-colors duration-200"
                    >
                      <MessageCircle size={14} />
                      WhatsApp
                    </a>
                    <a
                      href="tel:+971509092424"
                      className="flex items-center justify-center gap-2.5 w-full py-3.5 rounded-full border border-[#C5A059] text-[#C5A059] font-body text-[12px] tracking-[0.16em] uppercase hover:bg-[#C5A059] hover:text-white transition-colors duration-200"
                    >
                      <Phone size={14} />
                      Call Now
                    </a>
                    <Link
                      href="/contact-us"
                      className="flex items-center justify-center w-full py-3.5 rounded-full border border-[#EDE6D8] text-[#7A7A7A] font-body text-[12px] tracking-[0.16em] uppercase hover:border-[#C5A059] hover:text-[#C5A059] transition-colors duration-200"
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
