import { Button } from '@/components/ui/button';

const services = [
  { id: "1", name: "Web Sitesi", description: "Modern ve hızlı web siteleri.", icon: "🌐" },
  { id: "2", name: "Mobil Uygulama", description: "Kullanıcı dostu mobil çözümler.", icon: "📱" },
  { id: "3", name: "Okul Yazılımları", description: "Eğitim için özel yazılımlar.", icon: "🎓" },
  { id: "4", name: "Otel Yazılımları", description: "Oteller için entegre sistemler.", icon: "🏢" },
  { id: "5", name: "Güvenlik Yazılımları", description: "Güvenli ve sağlam çözümler.", icon: "🔒" },
  { id: "6", name: "Özel Çözümler", description: "İhtiyaçlarınıza özel çözümler.", icon: "⚙️" },
];

const Hizmetlerimiz = () => {
  return (
    <div className=" min-h-screen py-10">
      <h1 className="text-white text-3xl font-gotik text-center mb-10">Hizmetlerimiz</h1>
      <div className="grid grid-cols-2 m sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto px-12">
        {services.map((service) => (
          <div
            key={service.id}
            className="border text-white rounded-xl p-4 shadow-lg hover:shadow-xl transition-shadow text-center"
          >
            <div className="text-4xl mb-4">{service.icon}</div>
            <h2 className="text-xl font-medium mb-2">{service.name}</h2>
            <p className="text-gray-400">{service.description}</p>
          </div>
        ))}
      </div>
      
      
      <div className=' mt-12 flex w-full justify-center align-center'><div className="mb-20 mt-12 text-left  border border-gray-400 w-5/6 lg:w-4/6 xl:w-3/6 h-[190px] md:h-[150px] rounded-xl  flex flex-col items-start  p-10 justify-center">
  <h1 className="mb-4 text-xl sm:text-xl font-normal text-white">İşinize uygun çözümler için ve daha fazla bilgi almak için bize ulaşın.</h1>
 <a href="/iletisim"> <Button 
 variant='outline'
 >İletişime geç!</Button> </a>
</div></div>

    </div>
  );
};

export default Hizmetlerimiz;
