"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/lib/language-context";

const TESTIMONIALS = [
  {
    name: "Marco P.",
    location: "Milan → Dubai",
    avatar: "https://i.pravatar.cc/96?img=11",
    text: "Dulce made our relocation to Dubai completely seamless. Within days she had shortlisted apartments that matched our lifestyle perfectly — something we had struggled to find on our own for months. Her attention to detail and honest advice set her apart from every other agent we dealt with.",
  },
  {
    name: "Valentina C.",
    location: "Bogotá → Dubai",
    avatar: "https://i.pravatar.cc/96?img=47",
    text: "Desde el primer mensaje, Dulce entendió exactamente lo que buscaba. Como hispanohablante en Dubai, fue un alivio enorme poder comunicarme con fluidez y sentir que alguien realmente entendía mis prioridades. Encontró mi apartamento ideal en menos de una semana. La recomiendo sin dudarlo.",
  },
  {
    name: "James O.",
    location: "London → Dubai",
    avatar: "https://i.pravatar.cc/96?img=53",
    text: "I've worked with several brokers in Dubai and Dulce is genuinely different. She doesn't push listings — she listens. Her knowledge of the JVC and Al Barsha markets is exceptional, and her negotiation on my behalf saved me considerably on the final price. A true professional.",
  },
  {
    name: "Isabella V.",
    location: "Madrid → Dubai",
    avatar: "https://i.pravatar.cc/96?img=45",
    text: "Llevaba meses buscando un piso en Dubái sin éxito hasta que contacté con Dulce. Su ojo para el diseño y su conocimiento del mercado son una combinación única. Me presentó opciones que ningún otro agente había considerado, y el proceso de firma fue impecable. ¡Totalmente recomendada!",
  },
  {
    name: "Luca F.",
    location: "Zurich → Dubai",
    avatar: "https://i.pravatar.cc/96?img=15",
    text: "Dulce handled the sale of my investment apartment with complete discretion and efficiency. She priced it correctly from day one, found a qualified buyer within two weeks, and managed every detail of the process. The result exceeded my expectations. I will not use anyone else for my Dubai portfolio.",
  },
  {
    name: "Sophie A.",
    location: "Athens → Dubai",
    avatar: "https://i.pravatar.cc/96?img=32",
    text: "What impressed me most was how Dulce balanced professionalism with genuine warmth. She guided me through my first property purchase in Dubai with patience, clarity, and zero pressure. Every question I had was answered promptly and honestly. I felt like I had a trusted friend in the industry.",
  },
];

export default function Testimonials() {
  const { t } = useLanguage();

  return (
    <section className="bg-[#FAFAF8] py-20 lg:py-28 overflow-hidden">
      <div className="container mx-auto px-5 md:px-10 lg:px-16 max-w-[1300px]">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col items-center text-center mb-14"
        >
          <span className="text-[#C5A059] font-body text-xs tracking-[0.22em] uppercase mb-4">
            Client Stories
          </span>
          <h2 className="font-display text-3xl md:text-4xl xl:text-[48px] text-[#1A1A1A] leading-tight">
            What Clients Say
          </h2>
          <div className="w-10 h-px bg-[#C5A059] mt-5" />
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {TESTIMONIALS.map((item, i) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 36 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1], delay: i * 0.08 }}
              className="bg-white rounded-2xl p-7 flex flex-col gap-5 relative"
              style={{ boxShadow: "0 2px 20px rgba(0,0,0,0.06)" }}
            >
              {/* Text */}
              <p className="font-body text-[14.5px] text-[#4A4A4A] leading-[1.8] font-light">
                "{item.text}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-3 mt-auto pt-4 border-t border-[#F0EBE1]">
                <img
                  src={item.avatar}
                  alt={item.name}
                  width={44}
                  height={44}
                  className="rounded-full object-cover w-11 h-11 ring-2 ring-[#F0EBE1]"
                />
                <div>
                  <p className="font-body text-[13.5px] font-semibold text-[#1A1A1A]">{item.name}</p>
                  <p className="font-body text-[12px] text-[#9A9A9A]">{item.location}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
