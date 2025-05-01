import { Button } from '@/components/ui/button';

const services = [
  { id: "1", name: "İkas ile E-ticaret", description: "Gelişmiş İkas alt yapısıyla e-ticaret serüveninizde yanınızda olalım.", imageUrl: "@src/assets/Ikas_Logo.png" },
  { id: "2", name: "Kurumsal Web Sitesi", description: "Deneyimli ekibimizle işinize en uygun web sitesini yapalım.", imageUrl: "assets/icon_site.png" },
  { id: "3", name: "Facebook ADS Manager Kurulumu", description: "En iyi reklam optimizasyonu için FaceBook ADS Manager hesabınızın kurulumunu yaparız.", imageUrl: "/src/assets/Meta_urun.png" },
  { id: "4", name: "Dijital Pazarlama", description: "Markanızın dijital medya'da var olmasını sağlayalım!", imageUrl: "src/assets/dijital_pazarlama.png" },
  { id: "5", name: "Sosyal Medya Yönetimi", description: "Markanızın tüm sosyal medya süreçlerini profesyonelce yönetelim, dijital dünyada daha güçlü ve etkili bir varlık kazanın.", imageUrl: "/src/assets/logo.png" },
  { id: "6", name: "Özel Çözümler", description: "İhtiyaçlarınıza özel çözümler.", imageUrl: "/src/assets/logo.png" },
];

const Hizmetlerimiz = () => {
  return (
    <div className="bg-background text-foreground min-h-screen py-12 px-6">
      <h1 className="text-3xl lg:text-4xl font-light text-center mb-10 text-foreground">Hizmetlerimiz</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto px-4">
        {services.map((service) => (
          <div
            key={service.id}
            className="border-2 border-gray-300 text-foreground rounded-xl p-10 hover:border-primary transition-all duration-300 ease-in-out transform hover:scale-105"
          >
            {/* Resim kısmı */}
            <div className="w-36 mb-6 flex justify-center items-center">
              <img
                src={service.imageUrl} // Yolu /src/assets/logo.png olarak güncelledik
                alt={service.name}
                className="max-h-36 max-w-full object-contain" // Resmin taşmaması için max-h ve max-w özellikleri ekledik.
              />
            </div>
            <h2 className="text-2xl font-semibold mb-4">{service.name}</h2>
            <p className="text-gray-600">{service.description}</p>
          </div>
        ))}
      </div>

      <div className="mt-12 flex justify-center">
        <div className="mb-20 text-left border-2 border-gray-300 w-5/6 lg:w-4/6 xl:w-3/6 h-[190px] md:h-[150px] rounded-xl bg-card p-12 flex flex-col justify-center"> {/* Daha fazla iç boşluk */}
          <h1 className="mb-6 text-xl font-medium text-foreground">İşinize uygun çözümler için ve daha fazla bilgi almak için bize ulaşın.</h1>
          <a href="/iletisim">
            <Button variant="outline" className="w-full bg-primary text-white border-primary hover:bg-white hover:text-primary">
              İletişime Geç!
            </Button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hizmetlerimiz;
