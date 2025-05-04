/**
 * @copyright 2025 @thehref
 * @license Apache-2.0
 */

import { useRef } from 'react';
import { motion, Variants, useScroll, useSpring, useTransform } from "motion/react";
import heroBanner from "@/assets/ikas/Neden-Ikas.webp";
import ikasLogo from "@/assets/Ikas_Logo.png";

// ✅ Sabit içerik burada
const heroData = {
  sectionSubtitle: "Neden İkas?",
  sectionTitle: " ile E-Ticaret yapın!",
  sectionText:
    "İkas ile ürün yükleme sınırı ve trafik sınırı olmadan dilediğiniz gibi satış yapabilir, ödemelerinizi ertesi gün almaya başlayabilirsiniz!",
};

const heroChildVariant: Variants = {
  start: {
    y: 30,
    opacity: 0,
  },
  end: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.7,
      ease: "easeOut",
    },
  },
};

const heroVariant: Variants = {
  start: {},
  end: {
    transition: { staggerChildren: 0.4 },
  },
};

const Hero = () => {
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
    <section className="py-10 md:py-16">
      <motion.div
        variants={heroVariant}
        initial="start"
        animate="end"
        className="container text-center md:text-left flex flex-col md:flex-row items-center md:items-start justify-between md:gap-36"
      >
        {/* Sol İçerik */}
        <div className="max-w-screen-md mx-auto md:mx-0 md:w-1/2">
          <motion.p
            variants={heroChildVariant}
            className="text-xs uppercase tracking-wider bg-secondary/20 lg:text-sm text-secondary-foreground max-w-max mx-auto px-3 py-1 rounded-full border border-blue-500/20 mb-4 md:mb-7"
          >
            {heroData.sectionSubtitle}
          </motion.p>

          <motion.h2
            variants={heroChildVariant}
            className="text-4xl font-semibold leading-tight mb-4 md:text-5xl md:mb-5 lg:text-6xl"
          >
            <span className="relative inline-block">
              <img
                src={ikasLogo}
                alt="İkas Logo"
                className="relative z-10 h-8 md:h-10 inline-block"
                loading="lazy"
              />
              <span
                className="absolute inset-0 -z-10 rounded-full"
                style={{ backgroundColor: "#ffb8c1" }}
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

          <motion.div
            variants={heroChildVariant}
            className="flex items-center justify-center md:flex-row md:justify-start gap-6 mt-5 md:mt-10"
          >
            {/* Butonlar opsiyonel olarak eklenebilir */}
          </motion.div>
        </div>

        {/* Sağ Görsel */}
        <div className="relative mt-12 mx-auto isolate md:mt-16 md:w-1/2">
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
              width={1468}
              height={815}
              alt="Hero Banner"
              className="w-full h-auto object-cover rounded-2xl"
              loading="lazy"
            />
          </motion.figure>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
