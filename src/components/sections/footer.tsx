"use client";

import Image from "next/image";
import Link from "next/link";
import { Instagram, Mail, MessageCircle } from "lucide-react";
import { useLanguage } from "@/lib/language-context";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const flags = {
  en: (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 30" width="20" height="10">
      <clipPath id="s">
        <path d="M0,0 v30 h60 v-30 z" />
      </clipPath>
      <path d="M0,0 v30 h60 v-30 z" fill="#012169" />
      <path d="M0,0 L60,30 M60,0 L0,30" stroke="#fff" strokeWidth="6" />
      <path d="M0,0 L60,30 M60,0 L0,30" stroke="#C8102E" strokeWidth="4" />
      <path d="M30,0 v30 M0,15 h60" stroke="#fff" strokeWidth="10" />
      <path d="M30,0 v30 M0,15 h60" stroke="#C8102E" strokeWidth="6" />
    </svg>
  ),
  ar: (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 300" width="20" height="10">
      <path fill="#00732f" d="M0 0h600v300H0z"/>
      <path fill="#fff" d="M0 100h600v100H0z"/>
      <path d="M0 200h600v100H0z"/>
      <path fill="red" d="M0 0h150v300H0z"/>
    </svg>
  ),
};

export default function Footer({ bgColor }: { bgColor?: string }) {
  const { language, setLanguage, t } = useLanguage();

  const languageNames = {
    en: t("common.english"),
    ar: t("common.arabic"),
  };

  return (
    <footer
      className="text-[#4A4A4A] pt-16 pb-12 px-4 md:px-12 font-body border-t border-[#efe7d8]"
      style={{ backgroundColor: bgColor || "#FFFFFF" }}
    >
      <div className="container mx-auto max-w-[1400px]">

        {/* Main row: Left (language + social) — spacer — Right (quick links + contact) */}
        <div className="flex flex-col md:flex-row justify-between items-start gap-10 mb-10">

          {/* LEFT: Language selector + Social icons */}
          <div className="flex flex-col items-start gap-8">
            {/* Language Selector */}
            <div className="relative inline-block text-left">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <div className="flex items-center gap-2 bg-primary text-white px-3 py-2 rounded text-xs font-medium cursor-pointer hover:bg-primary/90 transition-colors w-fit">
                    <span className="leading-none">{flags[language as keyof typeof flags]}</span>
                    <span>{languageNames[language as keyof typeof languageNames]}</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-1">
                      <path d="m6 9 6 6 6-6"/>
                    </svg>
                  </div>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="start" className="bg-white border-[#efe7d8] text-[#1A1A1A]">
                  {(Object.keys(languageNames) as Array<keyof typeof languageNames>).map((lang) => (
                    <DropdownMenuItem
                      key={lang}
                      onClick={() => setLanguage(lang)}
                      className="flex items-center gap-2 cursor-pointer hover:bg-primary/20 focus:bg-primary/20"
                    >
                      <span className="leading-none">{flags[lang]}</span>
                      <span>{languageNames[lang]}</span>
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-3">
              <a
                href="https://www.instagram.com/vidalsprimerealestate/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-[#C5A059] bg-white flex items-center justify-center text-[#C5A059] hover:bg-[#C5A059] hover:text-white transition-all duration-300"
                aria-label={t("social.instagram")}
              >
                <Instagram className="h-[18px] w-[18px]" />
              </a>
              <a
                href="mailto:Rescobardulce@gmail.com"
                className="w-10 h-10 rounded-full border border-[#C5A059] bg-white flex items-center justify-center text-[#C5A059] hover:bg-[#C5A059] hover:text-white transition-all duration-300"
                aria-label={t("social.email")}
              >
                <Mail className="h-[18px] w-[18px]" />
              </a>
              <a
                href={`https://wa.me/${t("footer.phone").replace(/\s/g, "")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-[#C5A059] bg-white flex items-center justify-center text-[#C5A059] hover:bg-[#C5A059] hover:text-white transition-all duration-300"
                aria-label={t("social.whatsapp")}
              >
                <MessageCircle className="h-[18px] w-[18px]" />
              </a>
            </div>
          </div>

          {/* RIGHT: Get In Touch */}
          <div className="flex flex-row gap-16">
            {/* Get In Touch */}
            <div className="space-y-6">
              <h3 className="text-[#1A1A1A] text-sm font-semibold tracking-wider uppercase">{t("footer.getInTouch")}</h3>
              <div className="space-y-4 text-sm text-[#4A4A4A]">
                <p>
                  <a href="mailto:Rescobardulce@gmail.com" className="text-[#4A4A4A] transition-transform duration-300 hover:scale-105 hover:text-[#C5A059] inline-block">
                    {t("footer.email")}
                  </a>
                </p>
                <p>
                  <a href={`https://wa.me/${t("footer.phone").replace(/\s/g, "")}`} target="_blank" rel="noopener noreferrer" className="text-[#4A4A4A] transition-transform duration-300 hover:scale-105 hover:text-[#C5A059] inline-block">
                    {t("footer.phone")}
                  </a>
                </p>
              </div>
            </div>
          </div>

        </div>

        {/* Copyright */}
        <div className="text-center pt-6 mt-6 border-t border-[#efe7d8]">
          <p className="text-sm text-[#4A4A4A]">{t("footer.copyright")}</p>
        </div>

      </div>
    </footer>
  );
}
