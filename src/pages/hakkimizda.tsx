

import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const AboutPage = () => {
  

  return (
    <div className="bg-background text-foreground min-h-screen flex flex-col items-center py-10">
      <div className="text-center max-w-3xl px-4">
        <div className='px-6 lg:px-0'>
          <h1 className="text-5xl lg:text-8xl font-gotik mb-6 mt-10">Hakkımızda👋🏻</h1>
          <p className="text-sm lg:text-base font-thin leading-7 mt-4">
            Genç girişimciler tarafından kurulan Terra sınırları aşmayı ve alışılmışın dışında projeler geliştirmeyi hedefleyen bir oluşumdur. Yolculuğumuz, teknolojinin yaratıcılıkla buluştuğu noktada devrim yaratma fikriyle başladı. Bugün, beklentileri aşan yenilikçi Aİ çözümleri sunmak için yanınızdayız.
          </p>
          <p className="text-sm lg:text-base font-thin font-space leading-7 mt-20">
            "Eğer hayal edebiliyorsanız, yapabilirsiniz."
          </p>
          <b className='font-space'>Walt Disney</b>
        </div>
      </div>

      

      <div className="mb-10 mt-20 text-left border border-gray-400 w-5/6 lg:w-4/6 xl:w-3/6 h-[180px] lg:h-[170px] rounded-xl flex flex-col items-start p-10 justify-center">
        <h1 className="mb-4 text-sm lg:text-xl font-normal text-foreground">
          İşinize özel yazılım çözümleri ve ihtiyacınıza uygun paketler hakkında daha detaylı bilgi almak için bizimle iletişime geçin.
        </h1>
        <Link to="/iletisim">
          <Button variant="outline">İletişime geç!</Button>
        </Link>
      </div>
    </div>
  );
};

export default AboutPage;
