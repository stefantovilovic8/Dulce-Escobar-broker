import type { Metadata, Viewport } from "next";
import "./globals.css";
import { VisualEditsMessenger } from "orchids-visual-edits";
import { LanguageProvider } from "@/lib/language-context";
import { Toaster } from "sonner";
import Script from "next/script";

export const metadata: Metadata = {
  title: {
    default: "Dulce Escobar | Dubai Real Estate Agent – Luxury Properties, Off-Plan & Rentals",
    template: "%s",
  },
  description: "Dulce Escobar is a top Dubai real estate broker with 30+ years experience. Luxury property sales, off-plan investments, short-term & long-term rentals in Dubai.",
  metadataBase: new URL("https://dulcescobar.ae"),
  icons: {
    icon: "/favicon.png",
    apple: "/favicon.png",
  },
  openGraph: {
    title: "Dulce Escobar | Dubai Real Estate Agent",
    description: "30+ years experience in Dubai real estate. Luxury sales, off-plan investments & premium rentals.",
    images: [
      {
        url: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/VIDALS-logic-1768335205150.png?width=1200&height=630&resize=cover",
        width: 1200,
        height: 630,
        alt: "Dulce Escobar - Dubai Real Estate",
      },
    ],
    siteName: "Dulce Escobar Real Estate",
    locale: "en_AE",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dulce Escobar | Dubai Real Estate Agent",
    description: "30+ years experience in Dubai real estate. Luxury sales, off-plan investments & premium rentals.",
    images: ["https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/VIDALS-logic-1768335205150.png?width=1200&height=630&resize=cover"],
  },
};

export const viewport: Viewport = {
  themeColor: "#ffffff",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "RealEstateAgent",
  name: "Dulce Escobar Real Estate",
  url: "https://dulcescobar.ae",
  logo: "https://dulcescobar.ae/favicon.png",
  description: "Dubai real estate broker specialising in luxury property sales, off-plan investments, and rentals. 30+ years experience.",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Dubai",
    addressCountry: "AE",
  },
  areaServed: {
    "@type": "City",
    name: "Dubai",
  },
  priceRange: "AED 65,000 – AED 10,000,000+",
  sameAs: [],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" style={{ backgroundColor: "#FFFFFF" }}>
      <body className="antialiased" style={{ backgroundColor: "#FFFFFF" }}>
        <Script
          id="json-ld"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
          strategy="beforeInteractive"
        />
        <Script
          id="orchids-browser-logs"
          src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/scripts/orchids-browser-logs.js"
          strategy="afterInteractive"
          data-orchids-project-id="6363938c-1a0a-4fd7-80ff-6f78f509f220"
        />
        <LanguageProvider>
          {children}
          <Toaster position="top-center" richColors />
        </LanguageProvider>
        <VisualEditsMessenger />
      </body>
    </html>
  );
}
