import type { Metadata, Viewport } from "next";
import "./globals.css";
import { VisualEditsMessenger } from "orchids-visual-edits";
import { LanguageProvider } from "@/lib/language-context";
import { Toaster } from "sonner";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Dulce Escobar - Dubai Real Estate broker",
  description: "🏠 Residential Sales & Off-Plan\n🌴 Leasing I Short-Term Rentals I Management\n🌍 Global Investments\n✍🏽 30+ years in the industry",
    icons: {
      icon: "/favicon.png",
      apple: "/favicon.png",
    },
    openGraph: {
    title: "Dulce Escobar - Dubai Real Estate broker",
    description: "🏠 Residential Sales & Off-Plan\n🌴 Leasing I Short-Term Rentals I Management\n🌍 Global Investments\n✍🏽 30+ years in the industry",
    images: [
      {
        url: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/VIDALS-logic-1768335205150.png?width=8000&height=8000&resize=contain",
        width: 1200,
        height: 630,
        alt: "Dulce Escobar - Dubai Real Estate broker",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Dulce Escobar - Dubai Real Estate broker",
    description: "🏠 Residential Sales & Off-Plan\n🌴 Leasing I Short-Term Rentals I Management\n🌍 Global Investments\n✍🏽 30+ years in the industry",
    images: ["https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/VIDALS-logic-1768335205150.png?width=8000&height=8000&resize=contain"],
  },
};

export const viewport: Viewport = {
  themeColor: "#ffffff",
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
