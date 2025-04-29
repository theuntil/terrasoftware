/**
 * @copyright 2025 @thehref
 * @license Apache-2.0
 */

import { motion } from "motion/react";
import { brands } from "@/assets";
import * as variants from "@/lib/motionVariants";

const Brand = () => {
  return (
    <section className="section w-full">
      <div className="w-full max-w-screen-2xl mx-auto px-4">
        <motion.p
          variants={variants.fadeInUp}
          initial="start"
          whileInView="end"
          viewport={{ once: true }}
          className="text-center mb-4 md:mb-6"
        >
          Çözüm Ortaklarımız
        </motion.p>

        {/* Kaydırma Alanı */}
        <div className="relative overflow-hidden w-full">
          <motion.div
            className="flex gap-24 animate-marquee whitespace-nowrap w-full"
            initial={{ x: 0 }}
            animate={{ x: "-100%" }}
            transition={{
              repeat: Infinity,
              duration: 60, // Yavaş geçiş
              ease: "linear",
            }}
          >
            {[...brands, ...brands].map((brand, index) => (
              <img
                key={index}
                src={brand}
                alt={`Brand ${index + 1}`}
                className="w-24 h-16 object-contain filter brightness-0 flex-shrink-0"
              />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Brand;
