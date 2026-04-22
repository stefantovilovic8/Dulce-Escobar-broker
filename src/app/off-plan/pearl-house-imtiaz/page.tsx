"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  MapPin, Building2, Layers, CalendarCheck, Bed,
  ChevronLeft, ChevronRight, ArrowLeft,
  Phone, MessageCircle, Dumbbell, Trees, Sofa, Users, Baby, Zap, BriefcaseBusiness, Waves,
} from "lucide-react";
import Header from "@/components/sections/header";
import Footer from "@/components/sections/footer";

const IMAGES = [
  "/pearl-3.jpg",
  "/pearl-2.jpg",
  "/pearl-1.jpg",
  "/pearl-4.jpg",
  "/pearl-5.jpg",
  "/pearl-6.jpg",
  "/pearl-7.jpg",
  "/pearl-8.jpg",
  "/pearl-9.jpg",
  "/pearl-10.jpg",
];

const AMENITIES = [
  {
    category: "Wellness",
    icon: <Dumbbell size={18} />,
    items: ["Club-style Gymnasium", "Rooftop Swimming Pool", "Courtyard & Leisure Deck"],
  },
  {
    category: "Community",
    icon: <Users size={18} />,
    items: ["Resident Lounge", "Kids Play Area", "Lush Green Surroundings"],
  },
  {
    category: "Convenience",
    icon: <Zap size={18} />,
    items: ["Fully Furnished Units", "Smart Home Features", "Built-in Office Spaces"],
  },
];

const LOCATION_HIGHLIGHTS = [
  { time: "5 min", place: "Circle Mall" },
  { time: "10 min", place: "Dubai Sports City" },
  { time: "15 min", place: "Dubai Marina" },
  { time: "20 min", place: "Downtown Dubai" },
  { time: "25 min", place: "Dubai International Airport" },
];

export default function PearlHousePage() {
  const [activeImg, setActiveImg] = useState(0);

  const prev = () => setActiveImg((c) => (c === 0 ? IMAGES.length - 1 : c - 1));
  const next = () => setActiveImg((c) => (c === IMAGES.length - 1 ? 0 : c + 1));

  return (
    <div className="min-h-screen bg-white">
      <Header bgColor="#FFFFFF" />

      <main>
        {/* ── Hero Gallery ── */}
        <div className="w-full bg-[#0A0A0A]" style={{ paddingTop: "72px" }}>
          <div className="flex gap-1 h-[420px] md:h-[540px]">

            {/* Main large image */}
            <div className="relative overflow-hidden flex-[62]">
              <img
                src={IMAGES[activeImg]}
                alt="Pearl House by Imtiaz"
                className="w-full h-full object-cover transition-all duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

              <button onClick={prev} aria-label="Previous"
                className="absolute left-4 top-1/2 -translate-y-1/2 z-10 w-9 h-9 rounded-full bg-black/45 hover:bg-black/70 text-white flex items-center justify-center backdrop-blur-sm transition-all">
                <ChevronLeft size={18} />
              </button>
              <button onClick={next} aria-label="Next"
                className="absolute right-4 top-1/2 -translate-y-1/2 z-10 w-9 h-9 rounded-full bg-black/45 hover:bg-black/70 text-white flex items-center justify-center backdrop-blur-sm transition-all">
                <ChevronRight size={18} />
              </button>

              <div className="absolute bottom-5 left-5 z-10">
                <span className="font-body text-[11px] tracking-[0.18em] uppercase text-[#C5A059] block mb-1">
                  Apartment · Off-Plan
                </span>
                <p className="font-display text-white text-[22px] leading-none">
                  Studios & 1-Bedroom
                </p>
              </div>
            </div>

            {/* 2×2 grid */}
            <div className="flex-[38] grid grid-cols-2 grid-rows-2 gap-1">
              {IMAGES.slice(1, 5).map((img, idx) => {
                const realIdx = idx + 1;
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
                      style={{ opacity: activeImg === realIdx ? 1 : 0.82 }}
                    />
                    {activeImg === realIdx && (
                      <div className="absolute inset-0 ring-2 ring-[#C5A059] pointer-events-none" />
                    )}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Title bar */}
          <div className="px-6 md:px-14 py-5 bg-[#0A0A0A]">
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2"
            >
              <div>
                <h1 className="font-display text-white text-2xl md:text-3xl leading-tight">
                  Pearl House by Imtiaz
                </h1>
                <div className="flex items-center gap-2 mt-1.5">
                  <MapPin size={13} className="text-[#C5A059]" />
                  <span className="font-body text-white/70 text-[13px]">JVC, Jumeirah Village Circle, Dubai</span>
                </div>
              </div>
              <span className="font-body text-[11px] tracking-[0.2em] uppercase text-[#C5A059] bg-white/5 border border-[#C5A059]/30 px-4 py-2 rounded-full self-start sm:self-auto">
                Off-Plan · Under Construction
              </span>
            </motion.div>
          </div>
        </div>

        {/* ── Specs Bar ── */}
        <div className="bg-[#1A1A1A] px-6 md:px-14 py-3">
          <div className="max-w-[1200px] mx-auto flex flex-wrap gap-x-6 gap-y-2 justify-between">
            {[
              { icon: <MapPin size={16} />, label: "Location", value: "JVC, Dubai" },
              { icon: <Building2 size={16} />, label: "Structure", value: "G + 4 Podiums + 11 Floors + Rooftop" },
              { icon: <Bed size={16} />, label: "Unit Types", value: "Studios & 1-Bedroom" },
              { icon: <Layers size={16} />, label: "Furnished", value: "Fully Furnished" },
              { icon: <CalendarCheck size={16} />, label: "Completion", value: "Q4 2025" },
            ].map((s) => (
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

        {/* ── Main Content ── */}
        <div className="container mx-auto px-5 md:px-10 lg:px-14 max-w-[1200px] py-16">

          <Link href="/off-plan-properties" className="inline-flex items-center gap-2 text-[#C5A059] font-body text-sm hover:gap-3 transition-all duration-200 mb-12 block">
            <ArrowLeft size={15} />
            Back to Off-Plan Properties
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-[1fr_340px] gap-12 lg:gap-16">

            {/* LEFT */}
            <div>

              {/* Project Vision */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="mb-14"
              >
                <span className="text-[#C5A059] font-body text-xs tracking-[0.22em] uppercase mb-3 block">Project Vision</span>
                <h2 className="font-display text-2xl md:text-3xl text-[#1A1A1A] mb-6">Pearls of Wisdom</h2>
                <div className="w-10 h-px bg-[#C5A059] mb-6" />
                <p className="font-body text-[#5A5A5A] text-[15px] md:text-[16px] leading-[1.9] font-light">
                  Pearl House by Imtiaz is a thoughtfully curated residential development in the heart of Jumeirah Village Circle — a community that balances urban connectivity with a serene, village-inspired lifestyle. Drawing inspiration from the timeless concept of "Pearls of Wisdom," each residence is designed to be a sanctuary: blending refined modern aesthetics with practical elegance. Premium finishes, intelligent layouts, and resort-calibre building amenities come together to deliver a living experience that transcends the ordinary.
                </p>
              </motion.div>

              {/* Amenities */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.1 }}
                className="mb-14"
              >
                <span className="text-[#C5A059] font-body text-xs tracking-[0.22em] uppercase mb-3 block">Lifestyle & Amenities</span>
                <h2 className="font-display text-2xl md:text-3xl text-[#1A1A1A] mb-6">Premium Features</h2>
                <div className="w-10 h-px bg-[#C5A059] mb-10" />

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
                  {AMENITIES.map((group) => (
                    <div key={group.category} className="bg-[#FAFAF8] border border-[#EDE6D8] rounded-2xl p-6">
                      <div className="w-10 h-10 rounded-full bg-[#C5A059]/10 border border-[#C5A059]/20 flex items-center justify-center text-[#C5A059] mb-4">
                        {group.icon}
                      </div>
                      <h3 className="font-body text-[11px] tracking-[0.22em] uppercase text-[#C5A059] mb-4">
                        {group.category}
                      </h3>
                      <div className="flex flex-col gap-2.5">
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

              {/* Location Highlights */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.15 }}
                className="mb-14"
              >
                <span className="text-[#C5A059] font-body text-xs tracking-[0.22em] uppercase mb-3 block">Connectivity</span>
                <h2 className="font-display text-2xl md:text-3xl text-[#1A1A1A] mb-6">Location Highlights</h2>
                <div className="w-10 h-px bg-[#C5A059] mb-10" />

                <div className="flex flex-col gap-3">
                  {LOCATION_HIGHLIGHTS.map(({ time, place }) => (
                    <div key={place} className="flex items-center gap-4 py-4 border-b border-[#F0EBE1] last:border-0">
                      <div className="w-16 flex-shrink-0">
                        <span className="font-display text-[22px] text-[#C5A059] leading-none">{time}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin size={13} className="text-[#C5A059] flex-shrink-0" />
                        <span className="font-body text-[14px] text-[#4A4A4A]">{place}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* QR Code */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.15 }}
                className="mt-16 pt-12 border-t border-[#F0EBE1]"
              >
                <div className="flex flex-col items-center text-center">
                  <span className="text-[#C5A059] font-body text-xs tracking-[0.28em] uppercase mb-4">
                    View Project Brochure & Plans
                  </span>
                  <div className="w-8 h-px bg-[#C5A059] mb-8" />
                  <div
                    className="p-4 bg-white rounded-2xl border border-[#EDE6D8]"
                    style={{ boxShadow: "0 4px 24px rgba(197,160,89,0.10)" }}
                  >
                    {/* QR placeholder — replace src with actual QR image once provided */}
                    <div className="w-48 h-48 bg-[#F5F0E8] rounded-xl flex items-center justify-center">
                      <span className="font-body text-[11px] text-[#9A9A9A] tracking-wider text-center px-4">
                        QR Code<br />Coming Soon
                      </span>
                    </div>
                  </div>
                  <p className="font-body text-[13px] text-[#7A7A7A] mt-5 max-w-[300px] leading-relaxed font-light">
                    Scan this code to instantly access the full project brochure, floor plans and booking details.
                  </p>
                </div>
              </motion.div>

            </div>

            {/* RIGHT — sticky sidebar */}
            <div>
              <div className="sticky top-24 flex flex-col gap-5">

                {/* Price card */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="bg-white border border-[#EDE6D8] rounded-2xl p-6"
                  style={{ boxShadow: "0 4px 24px rgba(0,0,0,0.06)" }}
                >
                  <p className="font-body text-[11px] text-[#9A9A9A] tracking-[0.18em] uppercase mb-1">Starting From</p>
                  <p className="font-display text-[36px] text-[#1A1A1A] leading-none mb-1">On Request</p>
                  <p className="font-body text-[12px] text-[#9A9A9A] mt-2">Flexible payment plans available</p>

                  <div className="w-full h-px bg-[#F0EBE1] my-5" />

                  <div className="flex flex-col gap-3 mb-6">
                    {[
                      { label: "Developer", value: "Imtiaz Developments" },
                      { label: "Location", value: "JVC, Dubai" },
                      { label: "Status", value: "Off-Plan / Under Construction" },
                      { label: "Completion", value: "Q4 2025" },
                    ].map(({ label, value }) => (
                      <div key={label} className="flex justify-between items-start gap-2">
                        <span className="font-body text-[12px] text-[#9A9A9A]">{label}</span>
                        <span className="font-body text-[12px] text-[#1A1A1A] font-medium text-right">{value}</span>
                      </div>
                    ))}
                  </div>

                  <a
                    href="tel:+971509092424"
                    className="w-full flex items-center justify-center gap-2 bg-[#C5A059] hover:bg-[#b8904a] text-white font-body text-[13px] tracking-[0.12em] uppercase py-3.5 rounded-xl transition-colors duration-200"
                  >
                    <Phone size={14} />
                    Enquire Now
                  </a>
                  <a
                    href="https://wa.me/971509092424"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-center gap-2 mt-3 border border-[#EDE6D8] hover:border-[#C5A059] text-[#1A1A1A] hover:text-[#C5A059] font-body text-[13px] tracking-[0.12em] uppercase py-3.5 rounded-xl transition-all duration-200"
                  >
                    <MessageCircle size={14} />
                    WhatsApp
                  </a>
                </motion.div>

                {/* Agent card */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.35 }}
                  className="bg-white border border-[#EDE6D8] rounded-2xl p-6"
                  style={{ boxShadow: "0 4px 24px rgba(0,0,0,0.06)" }}
                >
                  <div className="flex items-center gap-4 mb-4">
                    <img
                      src="/dulce-portrait.png"
                      alt="Dulce Escobar"
                      className="w-14 h-14 rounded-full object-cover border-2 border-[#EDE6D8]"
                    />
                    <div>
                      <p className="font-display text-[16px] text-[#1A1A1A]">Dulce Escobar</p>
                      <p className="font-body text-[12px] text-[#9A9A9A]">Luxury Property Specialist</p>
                    </div>
                  </div>
                  <div className="w-full h-px bg-[#F0EBE1] mb-4" />
                  <p className="font-body text-[13px] text-[#5A5A5A] leading-relaxed font-light">
                    Specialist in off-plan and luxury residential properties across Dubai. Reach out for personalised guidance on Pearl House and other premium developments.
                  </p>
                </motion.div>

              </div>
            </div>

          </div>
        </div>
      </main>

      {/* Floating CTA buttons */}
      <div className="fixed bottom-6 right-6 flex flex-col gap-3 z-50">
        <a
          href="https://wa.me/971509092424"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="WhatsApp"
          className="w-12 h-12 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-200"
        >
          <MessageCircle size={20} />
        </a>
        <a
          href="tel:+971509092424"
          aria-label="Call"
          className="w-12 h-12 rounded-full bg-[#C5A059] text-white flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-200"
        >
          <Phone size={20} />
        </a>
      </div>

      <Footer bgColor="#FFFFFF" />
    </div>
  );
}
