import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom'; // React Router Link importu

// 🔽 Resimleri import ediyoruz
import IkasLogo from '@/assets/Ikas_Logo.png';
import IconSite from '@/assets/icon_site.png';
import meta from '@/assets/hesap_kurulum.png';
import DijitalPazarlama from '@/assets/dijital_pazarlama.png';
import mavi from '@/assets/mavi.png';
import ai from '@/assets/ai.png';

const services = [
  {
    id: "1",
    name: "İkas ile E-ticaret",
    description: "Gelişmiş İkas alt yapısıyla e-ticaret serüveninizde yanınızda olalım.",
    imageUrl: IkasLogo,
    link: "/ikas" // Bağlantı ekledik
  },
  {
    id: "2",
    name: "Kurumsal Web Sitesi",
    description: "Deneyimli ekibimizle işinize en uygun web sitesini yapalım.",
    imageUrl: IconSite,
    link: "/terra-web-sitesi" // Bağlantı ekledik
  },
  {
    id: "4",
    name: "Dijital Pazarlama",
    description: "Markanızın dijital medya'da var olmasını sağlayalım!",
    imageUrl: DijitalPazarlama,
    link: "/dijital-pazarlama" // Bağlantı ekledik
  },
  {
    id: "3",
    name: "Facebook ADS Manager Kurulumu",
    description: "En iyi reklam optimizasyonu için FaceBook ADS Manager hesabınızın kurulumunu yaparız.",
    imageUrl: meta,
    link: "/facebook-ads-manager" // Bağlantı ekledik
  },
  {
    id: "5",
    name: "Sosyal Medya Yönetimi",
    description: "Markanızın tüm sosyal medya süreçlerini profesyonelce yönetelim; post,hikaye,hesap yönetimi... Dijital dünyada daha güçlü ve etkili bir varlık kazanın.",
    imageUrl: mavi,
    link: "/sosyal-medya-yonetimi" // Bağlantı ekledik
  },
  {
    id: "6",
    name: "Özel Çözümler",
    description: "İhtiyaçlarınıza özel çözümler.",
    imageUrl: ai,
    link: "/ozel-cozumler" // Bağlantı ekledik
  },
];

const Hizmetlerimiz = () => {
  return (
    <div className="bg-background text-foreground min-h-screen py-12 px-6">
      <h1 className="text-3xl lg:text-4xl font-light text-center mb-10 text-foreground">Hizmetlerimiz</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto px-4">
        {services.map((service) => (
          <Link
            to={service.link} // Link ile yönlendirme ekledik
            key={service.id}
            className="border-2 border-gray-300 text-foreground rounded-xl p-10 hover:border-primary transition-all duration-300 ease-in-out transform hover:scale-105"
          >
            <div className="w-36 mb-6 flex justify-center items-center">
              <img
                src={service.imageUrl}
                alt={service.name}
                className="max-h-36 max-w-full object-contain"
              />
            </div>
            <h2 className="text-2xl font-semibold mb-4">{service.name}</h2>
            <p className="text-gray-600">{service.description}</p>
          </Link>
        ))}
      </div>

      <div className="mt-12 flex justify-center">
        <div className="mb-20 text-left border-2 border-gray-300 w-5/6 lg:w-4/6 xl:w-3/6 h-[190px] md:h-[150px] rounded-xl bg-card p-12 flex flex-col justify-center">
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

