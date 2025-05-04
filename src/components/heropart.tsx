/**
 * @copyright 2025 @thehref
 * @license Apache-2.0
 */

import { useRef } from 'react';
import { motion, Variants, useScroll, useSpring, useTransform } from "motion/react";
import heroBanner from "@/assets/logo.png";

// ✅ Sabit içerik
const heroData = {
  sectionSubtitle: "Bizim görevimiz ne?",
  sectionTitle: "Tüm teknik detayları ve süreçleri biz yönetelim!",
  sectionText:
    "İkas yolculuğunuzda en başından itibaren yanınızdayız. Mağazanızın kurulumundan ürünlerinizi satışa sunmaya, tasarımdan ödeme altyapısına kadar her aşamada size rehberlik ediyor, güçlü bir e-ticaret deneyimi yaşamanız için birlikte çalışıyoruz.",
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
        className="container flex flex-col md:flex-row items-center justify-between text-center md:text-left"
      >
        {/* Sol Görsel (Mobilde gizli) */}
        <div className="hidden md:block relative mt-12 md:mt-0 mx-auto md:mx-0 md:w-1/4 w-full">
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

        {/* Sağ İçerik */}
        <div className="mt-12 md:mt-0 md:pl-12 md:w-3/4 w-full">
          <motion.p
            variants={heroChildVariant}
            className="text-xs  tracking-wider bg-secondary/20 lg:text-sm text-secondary-foreground max-w-max mx-auto md:mx-0 px-3 py-1 rounded-full border border-blue-500/20 mb-4 md:mb-7"
          >
            {heroData.sectionSubtitle}
          </motion.p>

          <motion.h2
            variants={heroChildVariant}
            className="text-3xl font-semibold leading-tight mb-4  md:mb-5"
          >
            <span className="relative inline-block">
              <span
                className="absolute inset-0 -z-10 rounded-full"
                style={{ backgroundColor: "#ffb8c1" }}
              />
            </span>
            {heroData.sectionTitle}
          </motion.h2>

          <motion.p
            variants={heroChildVariant}
            className="text-muted-foreground text-sm mb-4 md:mb-6"
          >
            {heroData.sectionText}
          </motion.p>

          <motion.div
            variants={heroChildVariant}
            className="flex items-center justify-center md:justify-start gap-6 mt-5 md:mt-10"
          >
            {/* Butonlar opsiyonel olarak eklenebilir */}
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
