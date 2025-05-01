import { brands } from "@/assets"; // brands: dizi içinde logo görselleri (örn: ['/logo1.svg', '/logo2.svg'])

const Brand = () => {
  return (
    <section className="section w-full">
      <div className="w-full max-w-screen-2xl mx-auto px-4">
        <p className="text-center mb-4 md:mb-6 font-medium text-l">
          Çözüm Ortaklarımız
        </p>

        <div className="relative overflow-hidden w-full">
          <div className="flex w-max animate-marquee">
            {/* 1. Set */}
            {brands.map((brand, index) => (
              <img
                key={index}
                src={brand}
                alt={`Brand ${index + 1}`}
                className="w-24 h-16 mx-12 object-contain filter brightness-0"
              />
            ))}
            {/* 2. Set (Kopya) */}
            {brands.map((brand, index) => (
              <img
                key={`copy-${index}`}
                src={brand}
                alt={`Brand Copy ${index + 1}`}
                className="w-24 h-16 mx-12 object-contain filter brightness-0"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Brand;
