"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ChevronLeft, ChevronRight, Bed, Bath, Maximize2, MapPin, Phone, MessageCircle } from "lucide-react";
import { useLanguage } from "@/lib/language-context";

export const LISTINGS_DATA = [
  {
    id: 2,
    slug: "binghatti-aurora",
    project: "Binghatti Aurora",
    category: "Studio",
    location: "JVC, Dubai",
    beds: 0,
    baths: 1,
    sqft: 452,
    statusKey: "listings.phoenix.status",
    typeKey: "listings.phoenix.type",
    priceKey: "listings.phoenix.price",
    pricePeriod: "Yearly",
    furnishedKey: null as string | null,
    status: "available",
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
    description: "Elegant studio apartment in the prestigious Binghatti Aurora tower, located in the heart of Business Bay. This thoughtfully designed unit offers breathtaking views, premium finishes, and access to world-class amenities.",
    descriptionEs: "Elegante estudio en la prestigiosa torre Binghatti Aurora, situada en el corazón de Business Bay. Esta unidad cuidadosamente diseñada ofrece impresionantes vistas, acabados premium y acceso a comodidades de clase mundial.",
    descriptionAr: "شقة استوديو أنيقة في برج بينغاتي أورورا المرموق، في قلب بيزنس باي. توفر هذه الوحدة المصممة بعناية إطلالات خلابة وتشطيبات فاخرة وإمكانية الوصول إلى مرافق عالمية المستوى.",
  },
  {
    id: 4,
    slug: "binghatti-tulip-1",
    project: "Binghatti Tulip",
    category: "Apartment",
    location: "JVC, Dubai",
    beds: 1,
    baths: 1,
    sqft: 493,
    statusKey: "listings.tulip.status",
    typeKey: "listings.tulip.type",
    priceKey: "listings.tulip.price",
    pricePeriod: "Yearly",
    furnishedKey: "listings.tulip.furnished" as string | null,
    status: "available",
    images: [
      "/tulip-1.jpg",
      "/tulip-2.jpg",
      "/tulip-3.jpg",
      "/tulip-4.jpg",
      "/tulip-5.jpg",
      "/tulip-6.jpg",
      "/tulip-7.jpg",
    ],
    description: "Stunning fully furnished 1-bedroom apartment in Binghatti Tulip. Enjoy breathtaking marina views, premium modern interiors, a fully fitted kitchen, and resort-style building amenities. A high-floor gem in one of JVC's most iconic towers.",
    descriptionEs: "Impresionante apartamento de 1 dormitorio totalmente amueblado en Binghatti Tulip. Disfrute de impresionantes vistas al puerto deportivo, interiores modernos premium, cocina totalmente equipada y comodidades de estilo resort. Una joya en planta alta en una de las torres más icónicas de JVC.",
    descriptionAr: "شقة مذهلة مفروشة بالكامل بغرفة نوم واحدة في بينغاتي تيوليب. استمتع بإطلالات خلابة على المرسى وتصميمات داخلية حديثة فاخرة ومطبخ مجهز بالكامل ومرافق البناء بأسلوب المنتجع. جوهرة في طابق مرتفع في إحدى أكثر الأبراج المميزة في JVC.",
  },
  {
    id: 5,
    slug: "binghatti-tulip-2",
    project: "Binghatti Tulip",
    category: "Apartment",
    location: "JVC, Dubai",
    beds: 1,
    baths: 1,
    sqft: 513,
    statusKey: "listings.tulip.status",
    typeKey: "listings.tulip.type",
    priceKey: "listings.tulip.price",
    pricePeriod: "Yearly",
    furnishedKey: "listings.tulip.furnished" as string | null,
    status: "available",
    images: [
      "/tulip2-1.jpg",
      "/tulip2-2.jpg",
      "/tulip2-3.jpg",
      "/tulip2-4.jpg",
      "/tulip2-5.jpg",
      "/tulip2-6.jpg",
      "/tulip2-7.jpg",
      "/tulip2-8.jpg",
    ],
    description: "Beautifully furnished 1-bedroom apartment in Binghatti Tulip. Featuring premium finishes, a fully fitted kitchen with appliances, built-in wardrobes, and a private balcony with stunning community views. A refined residence in the heart of JVC.",
    descriptionEs: "Hermoso apartamento de 1 dormitorio amueblado en Binghatti Tulip. Con acabados premium, cocina totalmente equipada con electrodomésticos, armarios empotrados y balcón privado con impresionantes vistas a la comunidad. Una residencia refinada en el corazón de JVC.",
    descriptionAr: "شقة مفروشة بجمال بغرفة نوم واحدة في بينغاتي تيوليب. تتميز بتشطيبات فاخرة ومطبخ مجهز بالكامل مع الأجهزة وخزائن مدمجة وشرفة خاصة مع إطلالات رائعة على المجتمع. مسكن راقٍ في قلب JVC.",
  },
  {
    id: 10,
    slug: "neva-residences",
    project: "NEVA Residences",
    category: "Apartment",
    location: "JVC, Dubai",
    beds: 1,
    baths: 2,
    sqft: 838,
    statusKey: "listings.neva.status",
    typeKey: "listings.neva.type",
    priceKey: "listings.neva.price",
    pricePeriod: "Yearly",
    furnishedKey: "listings.neva.furnished" as string | null,
    status: "available",
    images: [
      "/bt2806-1.jpg",
      "/bt2806-2.jpg",
      "/bt2806-3.jpg",
      "/bt2806-4.jpg",
      "/bt2806-5.jpg",
      "/bt2806-6.jpg",
      "/bt2806-7.jpg",
    ],
    description: "A refined 1-bedroom residence in NEVA Residences, JVC — offering 77.84 Sqm of thoughtfully designed living space with premium modern finishes. This elegant unit features an open-plan layout, fully fitted kitchen with appliances, built-in wardrobes, central A/C, and a private balcony overlooking the vibrant community. Nestled in the heart of Jumeirah Village Circle, NEVA Residences combines contemporary architecture with resort-style amenities — an exceptional opportunity for discerning residents and investors alike.",
    descriptionEs: "Una refinada residencia de 1 dormitorio en NEVA Residences, JVC — con 77,84 m² de espacio vital cuidadosamente diseñado con acabados modernos premium. Esta elegante unidad cuenta con distribución abierta, cocina totalmente equipada, armarios empotrados, A/C central y balcón privado con vistas a la vibrante comunidad. Situada en el corazón de Jumeirah Village Circle, NEVA Residences combina arquitectura contemporánea con comodidades de estilo resort — una oportunidad excepcional para residentes e inversores exigentes.",
    descriptionAr: "مسكن راقٍ بغرفة نوم واحدة في NEVA Residences، JVC — يوفر 77.84 م² من مساحة المعيشة المصممة بعناية بتشطيبات حديثة فاخرة. تتميز هذه الوحدة الأنيقة بتصميم مفتوح ومطبخ مجهز بالكامل وخزائن مدمجة وتكييف مركزي وشرفة خاصة تطل على المجتمع النابض بالحياة. تجمع NEVA Residences في قلب JVC بين العمارة المعاصرة ومرافق المنتجع — فرصة استثنائية للسكان والمستثمرين المميزين.",
  },
  {
    id: 6,
    slug: "binghatti-azure-sale",
    project: "Binghatti Azure",
    category: "Studio",
    location: "JVC, Dubai",
    beds: 0,
    baths: 1,
    sqft: 430,
    statusKey: "listings.phoenix.status",
    typeKey: "listings.phoenix.type",
    priceKey: "listings.azure.price",
    pricePeriod: "Sale Price",
    furnishedKey: null as string | null,
    status: "for-sale",
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
    description: "Elegant studio apartment in the prestigious Binghatti Azure tower, perfectly positioned in Business Bay — Dubai's most vibrant mixed-use district. This income-generating unit is currently tenanted until August 2028, making it a prime turnkey investment with immediate rental returns and strong capital appreciation potential.",
    descriptionEs: "Elegante estudio en la prestigiosa torre Binghatti Azure, perfectamente ubicada en Business Bay — el distrito de uso mixto más vibrante de Dubái. Esta unidad generadora de ingresos está actualmente alquilada hasta agosto de 2028, lo que la convierte en una inversión llave en mano de primera calidad con rendimientos inmediatos y un fuerte potencial de revalorización del capital.",
    descriptionAr: "شقة استوديو أنيقة في برج بينغاتي أزور المرموق، الواقع في قلب بيزنس باي — أكثر أحياء دبي المتعددة الاستخدامات حيوية. هذه الوحدة المدرة للدخل مؤجرة حالياً حتى أغسطس 2028، مما يجعلها استثماراً جاهزاً من الدرجة الأولى مع عوائد إيجارية فورية وإمكانية تقدير رأس المال القوي.",
    salePrice: "720,000 AED",
    saleContract: "Rented until 28.8.2028",
  },
  {
    id: 7,
    slug: "binghatti-aurora-sale",
    project: "Binghatti Aurora",
    category: "Studio",
    location: "JVC, Dubai",
    beds: 0,
    baths: 1,
    sqft: 452,
    statusKey: "listings.phoenix.status",
    typeKey: "listings.phoenix.type",
    priceKey: "listings.aurora.price",
    pricePeriod: "Sale Price",
    furnishedKey: null as string | null,
    status: "for-sale",
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
    description: "Sophisticated studio apartment in the iconic Binghatti Aurora tower, located in the heart of Business Bay. Currently tenanted until November 2028, this investment-ready unit offers immediate rental income with long-term capital growth prospects in one of Dubai's most sought-after addresses.",
    descriptionEs: "Sofisticado estudio en la icónica torre Binghatti Aurora, en el corazón de Business Bay. Actualmente alquilado hasta noviembre de 2028, esta unidad lista para invertir ofrece ingresos de alquiler inmediatos con perspectivas de crecimiento del capital a largo plazo en una de las direcciones más buscadas de Dubái.",
    descriptionAr: "شقة استوديو راقية في برج بينغاتي أورورا الأيقوني، في قلب بيزنس باي. مؤجرة حالياً حتى نوفمبر 2028، توفر هذه الوحدة الجاهزة للاستثمار دخلاً إيجارياً فورياً مع آفاق نمو رأس المال على المدى الطويل في أحد أكثر العناوين المرغوبة في دبي.",
    salePrice: "750,000 AED",
    saleContract: "Rented until 30.11.2028",
  },
  {
    id: 3,
    slug: "binghatti-phantom",
    project: "Binghatti Phantom",
    category: "Apartment",
    location: "JVC, Dubai",
    beds: 1,
    baths: 2,
    sqft: 794,
    statusKey: "listings.phantom.status",
    typeKey: "listings.phantom.type",
    priceKey: "listings.phantom.price",
    pricePeriod: "Yearly",
    furnishedKey: "listings.phantom.furnished" as string | null,
    status: "available",
    images: [
      "/phantom-3.jpg",
      "/phantom-1.jpg",
      "/phantom-2.jpg",
      "/phantom-4.jpg",
      "/phantom-5.jpg",
      "/phantom-6.jpg",
      "/phantom-7.jpg",
      "/phantom-8.jpg",
      "/phantom-9.jpg",
      "/phantom-10.jpg",
    ],
    description: "Exquisite fully furnished 1-bedroom apartment in the iconic Binghatti Phantom. Featuring upgraded designer interiors, a spacious open-plan living area, fully fitted gourmet kitchen, and serene community views. A rare vacancy in one of Dubai's most sought-after residential addresses.",
    descriptionEs: "Exquisito apartamento de 1 dormitorio totalmente amueblado en el icónico Binghatti Phantom. Con interiores de diseño renovados, amplia sala de estar de planta abierta, cocina gourmet totalmente equipada y serenas vistas a la comunidad. Una vacante excepcional en una de las direcciones residenciales más buscadas de Dubái.",
    descriptionAr: "شقة رائعة مفروشة بالكامل بغرفة نوم واحدة في بينغاتي فانتوم الأيقوني. تتميز بتصميمات داخلية مطورة من تصميم المصمم ومنطقة معيشة مفتوحة المخطط ومطبخ ذواق مجهز بالكامل وإطلالات هادئة على المجتمع. شاغر نادر في أحد أكثر العناوين السكنية المرغوبة في دبي.",
  },
  {
    id: 11,
    slug: "binghatti-orchid",
    project: "Binghatti Orchid",
    category: "Apartment",
    location: "Al Barsha South Fourth, Dubai",
    beds: 1,
    baths: 1,
    sqft: 748,
    statusKey: "listings.tulip.status",
    typeKey: "listings.tulip.type",
    priceKey: "listings.tulip.price",
    pricePeriod: "Sale Price",
    furnishedKey: null,
    status: "for-sale",
    images: [
      "/orchid-1.jpg",
      "/orchid-2.jpg",
      "/orchid-3.jpg",
      "/orchid-4.jpg",
      "/orchid-5.jpg",
      "/orchid-6.jpg",
      "/orchid-7.jpg",
      "/orchid-8.jpg",
      "/orchid-9.jpg",
      "/orchid-10.jpg",
    ],
    description: "A rare opportunity to own a signature 1-bedroom residence in Binghatti Orchid, Al Barsha South Fourth — one of Dubai's most strategically positioned communities. Spanning a generous 69.54 Sqm, this thoughtfully designed apartment features Binghatti's hallmark architectural elegance, premium-quality finishes, an open-plan living and dining area, a fully fitted kitchen, and a private balcony. With strong rental demand and excellent connectivity to Sheikh Zayed Road, Mall of the Emirates, and key business districts, Binghatti Orchid offers exceptional ROI potential. A refined lifestyle asset in a high-growth Dubai location.",
    descriptionEs: "Una oportunidad excepcional para adquirir una residencia de firma de 1 dormitorio en Binghatti Orchid, Al Barsha South Fourth — una de las comunidades mejor ubicadas de Dubái. Con 69,54 m², este apartamento presenta la elegancia arquitectónica característica de Binghatti, acabados de primera calidad, zona de estar y comedor de planta abierta, cocina totalmente equipada y balcón privado. Con sólida demanda de alquiler y excelente conectividad con Sheikh Zayed Road, Mall of the Emirates y los principales distritos de negocios, Binghatti Orchid ofrece un potencial de rentabilidad excepcional.",
    descriptionAr: "فرصة نادرة لامتلاك مسكن راقٍ بغرفة نوم واحدة في بينغاتي أوركيد، الجزء الرابع من البرشاء الجنوبية — أحد أكثر المجتمعات موقعاً استراتيجياً في دبي. بمساحة 69.54 م²، يتميز هذا الشقة بالأناقة المعمارية المميزة لبينغاتي وتشطيبات عالية الجودة ومنطقة معيشة وطعام مفتوحة ومطبخ مجهز بالكامل وشرفة خاصة. مع طلب إيجاري قوي واتصال ممتاز بشيخ زايد رود وموال الإمارات والمناطق التجارية الرئيسية، يوفر بينغاتي أوركيد إمكانات عائد استثماري استثنائية.",
  },
  {
    id: 12,
    slug: "binghatti-lavender",
    project: "Binghatti Lavender",
    category: "Studio",
    location: "JVC, Dubai",
    beds: 0,
    baths: 1,
    sqft: 383,
    statusKey: "listings.lavender.status",
    typeKey: "listings.lavender.type",
    priceKey: "listings.lavender.price",
    pricePeriod: "Yearly",
    furnishedKey: null,
    status: "available",
    images: [
      "/lavender-1.jpg",
      "/lavender-2.jpg",
      "/lavender-3.jpg",
      "/lavender-4.jpg",
      "/lavender-5.jpg",
      "/lavender-6.jpg",
      "/lavender-7.jpg",
      "/lavender-8.jpg",
      "/lavender-9.jpg",
    ],
    description: "A chic and intelligently designed studio for rent in the iconic Binghatti Lavender, JVC. Spanning 35.55 Sqm, this modern studio showcases Binghatti's signature architectural flair with premium-quality finishes, an open-plan living space, a fully fitted kitchen, and ample built-in storage. Ready for immediate move-in, the unit is nestled in the heart of Jumeirah Village Circle — a vibrant, well-connected community offering seamless access to major Dubai highways, retail, and leisure destinations. An exceptional rental opportunity combining style, comfort, and prime location.",
    descriptionEs: "Un elegante estudio inteligentemente diseñado en alquiler en el icónico Binghatti Lavender, JVC. Con 35,55 m², este estudio moderno muestra el estilo arquitectónico de Binghatti con acabados de primera calidad, espacio de estar de planta abierta, cocina totalmente equipada y amplio almacenamiento empotrado. Listo para mudarse de inmediato en el corazón de Jumeirah Village Circle — una comunidad vibrante con acceso fluido a las principales autopistas de Dubái, comercios y destinos de ocio.",
    descriptionAr: "استوديو أنيق ومصمم بذكاء للإيجار في بينغاتي لافندر الأيقوني، JVC. بمساحة 35.55 م²، يُظهر هذا الاستوديو الحديث أسلوب بينغاتي المعماري المميز بتشطيبات عالية الجودة ومساحة معيشة مفتوحة ومطبخ مجهز بالكامل وتخزين مدمج واسع. جاهز للانتقال الفوري في قلب JVC — مجتمع نابض بالحياة يوفر وصولاً سلساً إلى الطرق السريعة الرئيسية في دبي.",
  },
  {
    id: 14,
    slug: "binghatti-tulip-3",
    project: "Binghatti Tulip",
    category: "Studio",
    location: "JVC, Dubai",
    beds: 0,
    baths: 1,
    sqft: 359,
    statusKey: "listings.tulipexclusive.status",
    typeKey: "listings.tulipexclusive.type",
    priceKey: "listings.tulipexclusive.price",
    pricePeriod: "Yearly",
    furnishedKey: null,
    status: "available",
    images: [
      "/tulip-exclusive-1.jpg",
      "/tulip-exclusive-2.jpg",
      "/tulip-exclusive-3.jpg",
      "/tulip-exclusive-4.jpg",
      "/tulip-exclusive-5.jpg",
      "/tulip-exclusive-6.jpg",
      "/tulip-exclusive-7.jpg",
      "/tulip-exclusive-8.jpg",
      "/tulip-exclusive-9.jpg",
    ],
    description: "A premium and meticulously crafted studio available for rent in the iconic Binghatti Tulip, nestled within the vibrant community of Jumeirah Village Circle. Spanning a highly functional 33.38 Sqm, this exclusive studio showcases Binghatti's signature contemporary architecture alongside refined modern finishes throughout. The intelligently designed open-plan layout maximises every square metre, delivering a sophisticated yet comfortable living experience at an exceptional price point. Residents enjoy access to world-class building facilities including a pool, gymnasium, covered parking, and round-the-clock security — making this an outstanding lifestyle opportunity in one of Dubai's most well-connected neighbourhoods.",
    descriptionEs: "Un estudio premium y meticulosamente elaborado disponible para alquiler en el icónico Binghatti Tulip, en la vibrante comunidad de JVC. Con 33,38 m² altamente funcionales, este estudio exclusivo presenta la arquitectura contemporánea de Binghatti con acabados modernos refinados. La distribución de planta abierta maximiza cada metro cuadrado. Los residentes disfrutan de instalaciones de clase mundial: piscina, gimnasio, aparcamiento cubierto y seguridad las 24 horas.",
    descriptionAr: "استوديو فاخر ومصنوع بعناية متاح للإيجار في بينغاتي تيوليب الأيقوني، في مجتمع JVC النابض بالحياة. بمساحة 33.38 م² عالية الوظيفية، يُبرز هذا الاستوديو الحصري العمارة المعاصرة المميزة لبينغاتي مع تشطيبات حديثة راقية. يستمتع السكان بمرافق عالمية تشمل مسبح وصالة رياضية وموقف مسقوف وأمن على مدار الساعة.",
  },
  {
    id: 13,
    slug: "binghatti-tulip-4",
    project: "Binghatti Tulip",
    category: "Studio",
    location: "JVC, Dubai",
    beds: 0,
    baths: 1,
    sqft: 360,
    statusKey: "listings.tulipstudio.status",
    typeKey: "listings.tulipstudio.type",
    priceKey: "listings.tulipstudio.price",
    pricePeriod: "Yearly",
    furnishedKey: null,
    status: "available",
    images: [
      "/tulip-studio-7.jpg",
      "/tulip-studio-1.jpg",
      "/tulip-studio-2.jpg",
      "/tulip-studio-3.jpg",
      "/tulip-studio-4.jpg",
      "/tulip-studio-5.jpg",
      "/tulip-studio-6.jpg",
      "/tulip-studio-8.jpg",
      "/tulip-studio-9.jpg",
    ],
    description: "An elegant and efficiently designed studio for rent in the iconic Binghatti Tulip, JVC. Spanning a smart 33.43 Sqm, this modern studio features Binghatti's signature contemporary architecture, premium-quality finishes, an open-plan living area with a fully fitted kitchen, and ample built-in storage. Conveniently payable in 6 cheques, this is an ideal opportunity for professionals and savvy renters seeking a stylish, low-maintenance lifestyle in the heart of Jumeirah Village Circle. Enjoy world-class building amenities including a pool, gymnasium, and 24/7 security in one of JVC's most sought-after towers.",
    descriptionEs: "Un elegante estudio eficientemente diseñado en alquiler en el icónico Binghatti Tulip, JVC. Con 33,43 m², este estudio moderno presenta la arquitectura contemporánea de Binghatti, acabados premium y zona de estar de planta abierta con cocina totalmente equipada. Pagadero cómodamente en 6 cheques — ideal para profesionales que buscan un estilo de vida elegante en el corazón de JVC. Disfrute de piscina, gimnasio y seguridad las 24 horas.",
    descriptionAr: "استوديو أنيق ومصمم بكفاءة للإيجار في بينغاتي تيوليب الأيقوني، JVC. بمساحة 33.43 م²، يتميز هذا الاستوديو الحديث بالعمارة المعاصرة لبينغاتي وتشطيبات فاخرة ومنطقة معيشة مفتوحة مع مطبخ مجهز بالكامل. يُدفع بسهولة في 6 شيكات — فرصة مثالية للمحترفين الباحثين عن أسلوب حياة أنيق في قلب JVC.",
  },
  {
    id: 15,
    slug: "reef-residence",
    project: "Reef Residence",
    category: "1 Bedroom",
    location: "Al Barsha South Fourth, Dubai",
    beds: 1,
    baths: 1,
    sqft: 503,
    statusKey: "listings.reefresidence2206.status",
    typeKey: "listings.reefresidence2206.type",
    priceKey: "listings.reefresidence2206.price",
    pricePeriod: "Yearly",
    furnishedKey: null,
    status: "available",
    images: [
      "/reef-2206-1.jpg",
      "/reef-2206-2.jpg",
      "/reef-2206-3.jpg",
      "/reef-2206-4.jpg",
      "/reef-2206-5.jpg",
      "/reef-2206-6.jpg",
      "/reef-2206-7.jpg",
      "/reef-2206-8.jpg",
      "/reef-2206-9.jpg",
    ],
    description: "An exceptional high-floor residence on the 22nd floor of Reef Residence, Al Barsha South Fourth, Dubai. Spanning 502.57 Sq. Ft. (46.69 Sqm), this well-proportioned 1-bedroom apartment commands open elevated views and benefits from a smart, efficient layout that maximises natural light and space. The unit features quality finishes throughout and comes with 1 dedicated basement parking space (Bay B2-26), offering convenience and security. Rent is conveniently payable in just 2 cheques at 45,000 AED per year, making this an attractive and accessible opportunity for professionals seeking a premium lifestyle address in one of Dubai's well-connected residential communities.",
    descriptionEs: "Una residencia excepcional en planta alta en el piso 22 de Reef Residence, Al Barsha South Fourth, Dubái. Con 502,57 pies² (46,69 m²), este apartamento de 1 dormitorio bien proporcionado ofrece vistas elevadas abiertas y una distribución inteligente que maximiza la luz natural. La unidad incluye 1 plaza de aparcamiento en sótano dedicada (Bay B2-26). El alquiler se paga cómodamente en solo 2 cheques a 45.000 AED por año.",
    descriptionAr: "مسكن استثنائي في طابق مرتفع في الطابق 22 من Reef Residence، الجزء الرابع من البرشاء الجنوبية، دبي. بمساحة 46.69 م²، يوفر هذا الشقة ذات الغرفة الواحدة المتناسبة إطلالات مرتفعة مفتوحة ومخطط ذكي يزيد من الضوء الطبيعي. تشمل الوحدة موقف سيارات في الطابق السفلي. يُدفع الإيجار بسهولة في شيكين فقط بـ 45,000 درهم سنوياً.",
  },
  {
    id: 16,
    slug: "binghatti-emerald",
    project: "Binghatti Emerald",
    category: "1 Bedroom",
    location: "JVC, Dubai",
    beds: 1,
    baths: 1,
    sqft: 646,
    statusKey: "listings.emerald1br.status",
    typeKey: "listings.emerald1br.type",
    priceKey: "listings.emerald1br.price",
    pricePeriod: "Yearly",
    furnishedKey: null,
    status: "available",
    images: [
      "/emerald-1br-1.jpg",
      "/emerald-1br-2.jpg",
      "/emerald-1br-3.jpg",
      "/emerald-1br-4.jpg",
      "/emerald-1br-5.jpg",
      "/emerald-1br-6.jpg",
      "/emerald-1br-7.jpg",
      "/emerald-1br-8.jpg",
      "/emerald-1br-9.jpg",
    ],
    description: "A distinguished 1-bedroom apartment for rent in the iconic Binghatti Emerald, nestled within the vibrant community of Jumeirah Village Circle. Spanning a generous 59.99 Sqm, this residence exemplifies Binghatti's signature avant-garde architecture paired with high-end interior finishes and a thoughtfully optimised layout that maximises natural light and living comfort. The open-plan design creates a seamless flow between spaces, delivering a refined lifestyle experience for discerning tenants. Flexible payment options are available: 62,000 AED payable in 2 cheques, or 65,000 AED payable in 4 cheques — offering genuine convenience for modern professionals. Residents enjoy access to a grand entrance lobby, resort-style swimming pool, state-of-the-art gymnasium, covered parking, and 24/7 security.",
    descriptionEs: "Un distinguido apartamento de 1 dormitorio en alquiler en el icónico Binghatti Emerald, JVC. Con 59,99 m², esta residencia ejemplifica la arquitectura vanguardista de Binghatti con acabados interiores de alta gama y distribución optimizada. Opciones de pago flexibles: 62.000 AED en 2 cheques o 65.000 AED en 4 cheques. Los residentes disfrutan de gran recibidor, piscina de estilo resort, gimnasio de última generación, aparcamiento cubierto y seguridad las 24 horas.",
    descriptionAr: "شقة متميزة بغرفة نوم واحدة للإيجار في بينغاتي إيميرالد الأيقوني، JVC. بمساحة 59.99 م²، تجسد هذه الشقة العمارة الطليعية المميزة لبينغاتي مع تشطيبات داخلية فاخرة. خيارات دفع مرنة: 62,000 درهم في شيكين أو 65,000 درهم في 4 شيكات. يستمتع السكان بلوبي فاخر ومسبح ومركز لياقة متطور وأمن على مدار الساعة.",
  },
  {
    id: 17,
    slug: "damac-courestia-villa",
    project: "Courestia Cluster – DAMAC Hills 2",
    category: "Villa",
    location: "DAMAC HILLS 2, Dubai",
    beds: 5,
    baths: 6,
    sqft: 1882,
    statusKey: "listings.courestia.status",
    typeKey: "listings.courestia.type",
    priceKey: "listings.courestia.price",
    pricePeriod: "Yearly",
    furnishedKey: null as string | null,
    status: "available",
    images: [
      "/courestia-villa-4.jpg",
      "/courestia-villa-1.jpg",
      "/courestia-villa-2.jpg",
      "/courestia-villa-3.jpg",
      "/courestia-villa-5.jpg",
      "/courestia-villa-6.jpg",
      "/courestia-villa-7.jpg",
      "/courestia-villa-8.jpg",
      "/courestia-villa-9.jpg",
      "/courestia-villa-10.jpg",
      "/courestia-villa-11.jpg",
      "/courestia-villa-12.jpg",
      "/courestia-villa-13.jpg",
      "/courestia-villa-14.jpg",
      "/courestia-villa-15.jpg",
      "/courestia-villa-16.jpg",
      "/courestia-villa-17.jpg",
      "/courestia-villa-18.jpg",
      "/courestia-villa-19.jpg",
    ],
    description: "An exceptional premium 5-bedroom villa nestled within the prestigious Courestia Cluster in DAMAC Hills 2 — one of Dubai's most vibrant and sought-after family communities. Spanning a generous 1,881.53 Sq. Ft., this residence offers an unparalleled blend of indoor luxury and extraordinary outdoor living designed for the most discerning families. The villa features elegant marble floors, a fully fitted premium kitchen equipped with top-tier appliances, built-in wardrobes, and central A/C throughout — complemented by a maid's room and six beautifully appointed bathrooms. Step outside to a private garden, private swimming pool, covered private garage, and a dedicated BBQ area perfect for entertaining. Pets are welcome, and the villa is part-furnished, ready for personalisation. Within the vibrant DAMAC Hills 2 community, residents enjoy access to a shared swimming pool, children's play area, communal gardens, public parks, shopping mall, retail shops, public parking, and a state-of-the-art gymnasium. Ready and vacant with keys immediately available — this is the ultimate family lifestyle opportunity in one of Dubai's most dynamic residential destinations.",
    descriptionEs: "Una excepcional villa premium de 5 dormitorios en el prestigioso Courestia Cluster de DAMAC Hills 2 — una de las comunidades familiares más buscadas de Dubái. Con 1.881,53 pies², esta residencia ofrece una combinación incomparable de lujo interior y vida al aire libre extraordinaria. La villa cuenta con suelos de mármol, cocina premium totalmente equipada, armarios empotrados y A/C central — complementados con habitación de servicio y seis baños. Al exterior: jardín privado, piscina privada, garaje privado cubierto y zona de barbacoa. Se admiten mascotas. Lista y libre con llaves disponibles de inmediato.",
    descriptionAr: "فيلا فاخرة استثنائية بـ 5 غرف نوم في كتلة Courestia المرموقة في DAMAC Hills 2 — أحد أكثر المجتمعات العائلية النابضة بالحياة في دبي. بمساحة 1,881.53 قدم²، تقدم هذه الشقة مزيجاً لا مثيل له من الفخامة الداخلية والحياة الخارجية الاستثنائية. تتميز الفيلا بأرضيات رخامية أنيقة ومطبخ فاخر مجهز بالكامل وخزائن مدمجة. في الخارج: حديقة خاصة ومسبح خاص وكراج خاص مسقوف. جاهزة وشاغرة مع المفاتيح متوفرة فوراً.",
  },
  {
    id: 18,
    slug: "nakheel-villa-152-jvc",
    project: "Nakheel Villa 152",
    category: "Villa",
    location: "JVC, Dubai",
    beds: 3,
    baths: 4,
    sqft: 3412,
    statusKey: "listings.nakheel152.status",
    typeKey: "listings.nakheel152.type",
    priceKey: "listings.nakheel152.price",
    pricePeriod: "Yearly",
    furnishedKey: null as string | null,
    status: "available",
    images: [
      "/nakheel-villa-1.jpg",
      "/nakheel-villa-2.jpg",
      "/nakheel-villa-3.jpg",
      "/nakheel-villa-4.jpg",
      "/nakheel-villa-5.jpg",
      "/nakheel-villa-6.jpg",
      "/nakheel-villa-7.jpg",
      "/nakheel-villa-8.jpg",
      "/nakheel-villa-9.jpg",
      "/nakheel-villa-10.jpg",
    ],
    description: "A rare opportunity to lease a grand, move-in-ready 3-bedroom villa in the prestigious Nakheel Villas community, Jumeirah Village Circle. Spanning a generous 3,412.81 Sq. Ft. across a thoughtfully designed layout, this Unit 152 residence offers the ultimate indoor-outdoor family lifestyle in one of Dubai's most established neighbourhoods. Step inside to discover stunning marble floors, three spacious bedrooms with built-in wardrobes, a separate maid's room, four beautifully appointed bathrooms with marble vanity counters, central A/C throughout, and an elegant open-plan living and dining area. The part-furnished kitchen is fully fitted with premium modern appliances, ready to inspire. Outside, the villa delivers true resort-style living: a private landscaped garden, a dedicated private swimming pool, a generous BBQ and entertaining area, and a covered private garage plus a second dedicated parking plot. Community amenities include a shared pool, gymnasium, children's play area, communal gardens, public park, and convenient public parking. Pets are welcome. Currently vacant and ready for immediate occupation — this is a supremely refined family sanctuary waiting to be called home.",
    descriptionEs: "Una oportunidad única de arrendar una gran villa de 3 dormitorios lista para mudarse en la prestigiosa comunidad Nakheel Villas, Jumeirah Village Circle. Con 3.412,81 pies² cuidadosamente diseñados, la Unidad 152 ofrece el estilo de vida familiar interior-exterior definitivo. En el interior: impresionantes suelos de mármol, tres amplios dormitorios con armarios empotrados, habitación de servicio independiente, cuatro baños con encimeras de mármol, A/C central y zona de estar de planta abierta. La cocina semimueblada está totalmente equipada con electrodomésticos modernos premium. En el exterior: jardín privado ajardinado, piscina privada, zona de barbacoa y entretenimiento, garaje privado cubierto y plaza de aparcamiento adicional. La comunidad ofrece piscina compartida, gimnasio, área infantil, jardines comunitarios, parque público y aparcamiento público. Se admiten mascotas. Actualmente vacía y lista para ocupación inmediata.",
    descriptionAr: "فرصة نادرة لاستئجار فيلا عائلية كبيرة من 3 غرف نوم جاهزة للانتقال الفوري في مجتمع نخيل فيلاز المرموق، جميرة فيليدج سيركل. بمساحة 3,412.81 قدم² من التصميم المدروس، توفر الوحدة 152 أسلوب الحياة الأسري الداخلي والخارجي الأمثل. في الداخل: أرضيات رخامية مذهلة وثلاث غرف نوم فسيحة مع خزائن مدمجة وغرفة خادمة منفصلة وأربعة حمامات مع رخام أنيق ومكيف مركزي. المطبخ المجهز بالكامل مع أجهزة حديثة فاخرة. في الخارج: حديقة خاصة مشجرة ومسبح خاص ومنطقة شواء وترفيه وكراج خاص مسقوف. مرافق المجتمع تشمل مسبح مشترك وصالة رياضية وملعب أطفال وحدائق مشتركة. تسمح بالحيوانات الأليفة. شاغرة وجاهزة للاستحواذ الفوري.",
  },
];

export default function InvestmentListings() {
  const { t } = useLanguage();

  return (
    <section id="listings" className="bg-[#FAFAF8] py-20 lg:py-28">
      <div className="container mx-auto px-5 md:px-10 lg:px-16 max-w-[1300px]">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col items-center text-center mb-14"
        >
          <span className="text-[#C5A059] font-body text-xs tracking-[0.22em] uppercase mb-4">
            {t("listings.eyebrow")}
          </span>
          <h2 className="font-display text-3xl md:text-4xl xl:text-[48px] text-[#1A1A1A] leading-tight">
            {t("listings.headline")}
          </h2>
          <div className="w-10 h-px bg-[#C5A059] mt-5" />
        </motion.div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
          {LISTINGS_DATA.filter((l) => l.status !== "for-sale").map((listing, i) => (
            <PropertyCard key={listing.id} listing={listing} index={i} t={t} />
          ))}
        </div>
      </div>
    </section>
  );
}

function PropertyCard({
  listing,
  index,
  t,
}: {
  listing: typeof LISTINGS_DATA[0];
  index: number;
  t: (key: string) => string;
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
        {/* Clickable overlay for card navigation (sits below interactive elements) */}
        <Link
          href={listing.status === "for-sale" ? `/sale/${listing.slug}` : `/rent/${listing.slug}`}
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

          {/* Category badge — top left */}
          <span className="absolute top-3 left-3 z-10 font-body text-[11px] tracking-[0.14em] uppercase px-3 py-1 rounded-md bg-white text-[#1A1A1A] font-medium shadow-sm">
            {listing.category}
          </span>

          {/* Arrow nav */}
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
              <div className="absolute bottom-2 left-0 right-0 flex justify-center gap-1 z-10">
                {listing.images.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={(e) => { e.preventDefault(); e.stopPropagation(); setCurrentImg(idx); }}
                    className="relative z-10 w-1.5 h-1.5 rounded-full transition-all duration-200"
                    style={{ background: idx === currentImg ? "#C5A059" : "rgba(255,255,255,0.65)" }}
                  />
                ))}
              </div>
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
                {listing.beds === 0 ? t("card.studio") : `${listing.beds} ${t("card.bed")}`}
              </span>
            </div>
            <div className="flex items-center gap-1.5">
              <Bath size={13} className="text-[#C5A059]" />
              <span className="font-body text-[12px] text-[#5A5A5A]">{listing.baths} {t("card.bath")}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Maximize2 size={13} className="text-[#C5A059]" />
              <span className="font-body text-[12px] text-[#5A5A5A]">{listing.sqft} {t("card.sqft")}</span>
            </div>
          </div>

          {/* Price box */}
          <div className="bg-[#FAFAF8] border border-[#EDE6D8] rounded-xl px-4 py-3 mb-4">
            <p className="font-body text-[10px] text-[#9A9A9A] tracking-[0.16em] uppercase mb-0.5">{t("card.price")}</p>
            <p className="font-display text-[20px] text-[#1A1A1A] leading-none">
              {t(listing.priceKey)}
            </p>
          </div>

          {/* Agent footer */}
          <div className="relative z-[2] flex items-center gap-3 mt-auto pt-1">
            <img
              src="/dulce-portrait.png"
              alt="Dulce Escobar"
              className="w-9 h-9 rounded-full object-cover flex-shrink-0 border-2 border-[#EDE6D8]"
            />
            <div className="flex-1 min-w-0">
              <p className="font-body text-[10px] text-[#9A9A9A] leading-none mb-0.5">{t("card.listed_by")}</p>
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
