import Hero from '@/components/heroikas';
import SSS from '@/components/sssikas';  // SSS bileşenini import ettik


import kargo from '@/assets/ikas/download (2).png';
import Popup from '@/assets/ikas/download (1).png';
import smsm13 from '@/assets/ikas/13.webp';
import urun from '@/assets/ikas/download (4).png';
import must from '@/assets/ikas/download (8).png';

const services = [
  {
    id: "1",
    name: "Sınırsız Ürün Yükleme",
    description: "Ürün yükleme sınırı olmadan, dilediğiniz kadar ürün ile satış yapmaya başlayın!",
    imageUrl: urun,
  }, 
  {
    id: "1",
    name: "Sınırsız Trafik",
    description: "Ağ genişliği sınırlandırması olmadan, özel günlerde dahi sitenize dilediğiniz kadar trafik çekebilirsiniz.",
    imageUrl: must,
  },  
  
  {
    id: "1",
    name: "SMS ve E-Posta",
    description: "Yüksek geri dönüş sağlayan SMS ve E-posta otomasyonları ile satın alım oranlarınızı artırın.",
    imageUrl: smsm13,
  },
  {
    id: "4",
    name: "Kargo İşini Dert Etmeyin!",
    description: "59,90 TL'den başlayan fiyatlarla ürünlerinizi gönderin. Üstelik kargo anlaşmalarınızı tamamlamak için bayilere gitmeyin!",
    imageUrl: kargo,
  },
  {
    id: "2",
    name: "Popup",
    description: "Etkili pop-up'lar oluşturarak dönüşüm oranlarınızı yüksek oranda artırın.",
    imageUrl: Popup,
  },
  
];

const HomePage = () => {
  return (
    <>
      <Hero />

      <section className="bg-background text-foreground py-12 pb-20 px-4">
        {/* Hizmet Kartları */}
        <div className="overflow-x-auto flex space-x-6 justify-start max-w-full scrollbar-hidden">
          {services.map((service) => (
            <div
              key={service.id}
              className="min-w-[280px] max-w-[300px] flex-shrink-0 flex flex-col items-center space-y-4"
            >
              <div className="w-full flex justify-center items-center mb-4 h-48">
                <img
                  src={service.imageUrl}
                  alt={service.name}
                  className="object-contain max-h-full max-w-full rounded-lg"
                />
              </div>
              <h2 className="text-xl font-semibold mb-2 text-center">{service.name}</h2>
              <p className="text-gray-600 text-sm text-center">{service.description}</p>
            </div>
          ))}
        </div>
      </section>

   
      <div className="bg-ikas w-full h-[200px] flex flex-col justify-center items-center text-center p-8 md:p-20">
        <h1 className="text-5xl md:text-7xl font-bold text-slate-950 mb-4">
          İkas'ta Beklenmedik Ücretler Yok!
        </h1>

      </div>

     

      <SSS />


    </>
  );
};

export default HomePage;
