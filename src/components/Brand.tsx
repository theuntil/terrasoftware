import Marquee from "react-fast-marquee";
import { brands } from "@/assets"; // Örnek: ['/logo1.svg', '/logo2.svg']

const Brand = () => {
  return (
    <section className="section w-full">
      <div className="w-full max-w-screen-2xl mx-auto px-4">
        <p className="text-center md:mt-2 mb-4 md:mb-7 font-medium text-l">
          Çözüm Ortaklarımız
        </p>

        {/* Marquee container */}
        <div className="relative w-full overflow-hidden">
          <Marquee
            gradient={false}
            speed={60}
            pauseOnHover={true}
            direction="left"
          >
            {[...brands, ...brands].map((brand, index) => (
              <img
                key={index}
                src={brand}
                alt={`Brand ${index + 1}`}
                className="w-24 h-16 mx-12 object-contain filter brightness-0"
              />
            ))}
          </Marquee>

          {/* Sağdan fade-in efekti */}
          <div className="absolute right-0 top-0 h-full w-24 bg-gradient-to-l from-white to-transparent pointer-events-none z-10" />

          {/* (Opsiyonel) Soldan fade-out efekti */}
          <div className="absolute left-0 top-0 h-full w-24 bg-gradient-to-r from-white to-transparent pointer-events-none z-10" />
        </div>
      </div>
    </section>
  );
};

export default Brand;
