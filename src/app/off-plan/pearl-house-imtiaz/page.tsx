import type { Metadata } from "next";
import PearlHouseClient from "./PearlHouseClient";

export const metadata: Metadata = {
  title: "Pearl House by Imtiaz – Off-Plan 1 Bed in JVC Dubai | Dulce Escobar",
  description:
    "Buy off-plan in Pearl House by Imtiaz, JVC Dubai. Luxury 1-bedroom residences with flexible payment plans and strong capital appreciation potential. Contact Dulce Escobar for pricing and availability.",
  openGraph: {
    title: "Pearl House by Imtiaz – Off-Plan 1 Bed in JVC Dubai | Dulce Escobar",
    description:
      "Buy off-plan in Pearl House by Imtiaz, JVC Dubai. Luxury 1-bedroom residences with flexible payment plans and strong capital appreciation potential.",
    images: [{ url: "/pearl-3.jpg" }],
  },
};

export default function PearlHousePage() {
  return <PearlHouseClient />;
}
