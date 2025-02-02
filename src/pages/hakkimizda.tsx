import { useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Cozum from "@/assets/cozum.jpg";
import Ekip from "@/assets/ekip.jpg";
import Guvenlik from "@/assets/guvenlik.jpg";
import { Button } from '@/components/ui/button';

const AboutPage = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -300, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 300, behavior: 'smooth' });
    }
  };

  return (
    <div className="text-white min-h-screen flex flex-col items-center py-10">
      <div
        className="text-center max-w-3xl px-4"
      >
        
      <div className=' px-6 lg:px-0 '>
        <h1 className="text-5xl  lg:text-8xl font-gotik  mb-6 mt-10 ">Hakkımızda👋🏻</h1>
        <p className="text-sm lg:text-base font-thin leading-7 mt-4">
        Genç girişimciler tarafından kurulan Terra sınırları aşmayı ve alışılmışın dışında projeler geliştirmeyi hedefleyen bir oluşumdur. Yolculuğumuz, teknolojinin yaratıcılıkla buluştuğu noktada devrim yaratma fikriyle başladı. Bugün, beklentileri aşan yenilikçi Aİ çözümleri sunmak için yanınızdayız.
        </p>
        <p className="text-sm lg:text-base font-thin font-space leading-7 mt-20">
        "Eğer hayal edebiliyorsanız, yapabilirsiniz."
       </p>
       <b className='font-space'>Walt Disney</b>
       </div>
        
      </div>

      <div className="relative mt-20 w-full max-w-full px-4">
        <div className="hidden md:flex justify-center space-x-4">
          <div className=" rounded-2xl overflow-hidden shadow-lg w-64">
            <img src={Cozum} alt="Yenilikçi Projeler" className="h-40 w-full object-cover" />
            <div className="p-4 text-white">
              <h3 className="font-semibold text-lg">Yenilikçi Projeler</h3>
              <p className="text-xs mt-2">Fikirden uygulamaya, sınırları zorlayan ve mümkün olanın ötesine geçen çözümler sunmaya odaklanıyoruz.</p>
            </div>
          </div>
          <div className=" rounded-2xl overflow-hidden shadow-lg w-64">
            <img src={Ekip}  alt="Tutkulu Ekip" className="h-40 w-full object-cover" />
            <div className="p-4 text-white">
              <h3 className="font-semibold text-lg">Tutkulu Ekip</h3>
              <p className="text-xs mt-2">Ekibimiz, yenilikçi fikirleri gerçeğe dönüştüren, tutkulu ve alanında uzman yazılımcılardan oluşan dinamik bir topluluktur.</p>
            </div>
          </div>
          <div className=" rounded-2xl overflow-hidden shadow-lg w-64">
            <img src={Guvenlik} alt="Müşteri Odaklı" className="h-40 w-full object-cover" />
            <div className="p-4 text-white">
              <h3 className="font-semibold text-lg">Güvenlik</h3>
              <p className="text-xs mt-2">Google ve Amazon’un partner hizmetleriyle, hız ve güvenliği en üst seviyede tutarak kullanıcılarımıza kesintisiz bir deneyim sunuyoruz.</p>
            </div>
          </div>
        </div>

        <div className="md:hidden relative">
          <button 
            onClick={scrollLeft} 
            className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 p-2 rounded-full text-white hover:bg-opacity-75"
          >
            <ChevronLeft size={24} />
          </button>
          <div 
          
            className="flex overflow-x-scroll no-scrollbar space-x-4"
          >
            <div className="flex-shrink-0  rounded-2xl overflow-hidden shadow-lg w-64">
              <img src={Cozum} alt="Yenilikçi Projeler" className="h-40 w-full object-cover" />
              <div className="p-4 text-white">
                <h3 className="font-semibold text-lg">Yenilikçi Projeler</h3>
                <p className="text-xs mt-2">Fikirden uygulamaya, sınırları zorlayan ve mümkün olanın ötesine geçen çözümler sunmaya odaklanıyoruz.</p>
              </div>
            </div>
            <div className="flex-shrink-0 rounded-2xl overflow-hidden shadow-lg w-64">
              <img src={Ekip} alt="Tutkulu Ekip" className="h-40 w-full object-cover" />
              <div className="p-4 text-white">
                <h3 className="font-semibold text-lg">Tutkulu Ekip</h3>
                <p className="text-xs mt-2">Ekibimiz, yenilikçi fikirleri gerçeğe dönüştüren, tutkulu ve alanında uzman yazılımcılardan oluşan dinamik bir topluluktur.</p>
              </div>
            </div>
            <div className="flex-shrink-0  rounded-2xl overflow-hidden shadow-lg w-64">
              <img src={Guvenlik} alt="Müşteri Odaklı" className="h-40 w-full object-cover" />
              <div className="p-4 text-white">
                <h3 className="font-semibold text-lg">Güvenlik</h3>
                <p className="text-xs mt-2">Google ve Amazon’un partner hizmetleriyle, hız ve güvenliği en üst seviyede tutarak kullanıcılarımıza kesintisiz bir deneyim sunuyoruz.</p>
              </div>
            </div>
          </div>
          <button 
            onClick={scrollRight} 
            className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 p-2 rounded-full text-white hover:bg-opacity-75"
          >
            <ChevronRight size={24} />
          </button>
        </div>
      </div>
      
      <div className="mb-10 mt-20 text-left  border border-gray-400 w-5/6 lg:w-4/6 xl:w-3/6 h-[180px] lg:h-[170px] rounded-xl  flex flex-col items-start  p-10 justify-center">
  <h1 className="mb-4 text-sm lg:text-xl font-normal text-white">İşinize özel yazılım çözümleri ve ihtiyacınıza uygun paketler hakkında daha detaylı bilgi almak için bizimle iletişime geçin. </h1>
 <a href="/iletisim"> <Button 
 variant='outline'
 >İletişime geç!</Button> </a>
</div>

    </div>
    
  );
};

export default AboutPage;
