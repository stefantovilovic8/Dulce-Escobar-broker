"use client";

import Header from "@/components/sections/header";
import ShortRentals from "@/components/sections/short-rentals";
import Footer from "@/components/sections/footer";

export default function HolidayHomesPage() {
  const pageBg = "#FFFFFF";

  return (
    <div className="min-h-screen" style={{ backgroundColor: pageBg }}>
      <Header bgColor={pageBg} />
      <main>
        <ShortRentals />
      </main>
      <Footer bgColor={pageBg} />
    </div>
  );
}