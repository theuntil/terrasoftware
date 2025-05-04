import { useRef } from 'react';
import { motion, Variants, useScroll, useSpring, useTransform } from "motion/react";
import heroBanner from "@/assets/shopify/sipariş.webp"; // Shopify için uygun bir görsel
import shopifyLogo from "@/assets/Shopify/shopify logo.png"; // Shopify logosu

const heroData = {
  sectionSubtitle: "Milyonların tercihi",
  sectionTitle: " ile Dünyaya Açılın!",
  sectionText:
    "Shopify ile modern, mobil uyumlu ve kullanıcı dostu mağazanızı kurun. Sadece birkaç adımda küresel pazarlarda satışa başlayın!",
};

const heroChildVariant: Variants = {
  start: { y: 30, opacity: 0 },
  end: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

const heroVariant: Variants = {
  start: {},
  end: { transition: { staggerChildren: 0.4 } },
};

const ShopifyHero = () => {
  const heroBannerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroBannerRef,
    offset: ['start 1080px', '50% start'],
  });

  const scrollYTransform = useTransform(scrollYProgress, [0, 1], [0.95, 1.05]);
  const scale = useSpring(scrollYTransform, {
    stiffness: 300,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <section className="py-10 ">
      <motion.div
        variants={heroVariant}
        initial="start"
        animate="end"
        className="container text-center md:text-left flex flex-col md:flex-row items-center justify-between md:gap-20"
      >
        {/* Sol içerik */}
        <div className="max-w-screen-md mx-auto md:mx-0 md:w-1/2">
          <motion.p
            variants={heroChildVariant}
            className="text-xs uppercase tracking-wider bg-[#dff4eb] text-green-900 max-w-max mx-auto px-3 py-1 rounded-full border border-green-200 mb-4 md:mb-7"
          >
            {heroData.sectionSubtitle}
          </motion.p>

          <motion.h2
            variants={heroChildVariant}
            className="text-3xl font-semibold leading-tight mb-4 md:text-4xl md:mb-5 l"
          >
            <span className="relative inline-block">
  <img
    src={shopifyLogo}
    alt="Shopify Logo"
    className="relative z-10 h-8 md:h-10 inline-block"
    loading="lazy"
  />
  <span
    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 rounded-full h-[115%] w-[110%]"
    style={{ backgroundColor: "#1F2937" }}
  />
</span>
            {heroData.sectionTitle}
          </motion.h2>

          <motion.p
            variants={heroChildVariant}
            className="text-muted-foreground text-sm md:text-base mb-4 md:mb-6"
          >
            {heroData.sectionText}
          </motion.p>

          
        </div>

        {/* Sağ görsel */}
        <div className="relative mt-2 mx-auto md:mt-0 md:w-1/2">
          <motion.figure
            className="rounded-2xl overflow-hidden"
            initial={{ y: 80, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1.2, ease: 'easeOut' }}
            ref={heroBannerRef}
            style={{ scale }}
          >
            <img
              src={heroBanner}
              alt="Shopify Hero Banner"
              className="w-full h-auto object-cover rounded-2xl"
              loading="lazy"
            />
          </motion.figure>
        </div>
      </motion.div>
    </section>
  );
};

export default ShopifyHero;
