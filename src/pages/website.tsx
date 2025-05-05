import PlanCard from "@/components/ui/PlanCard";
import { Button } from '@/components/ui/button';

const ucretler = () => {
  return (
    <div className="bg-background text-foreground">

      <div className="flex flex-col items-center p-4 font-space">

        <div className="mb-3 mt-12 text-left border border-border text-foreground w-5/6 lg:w-2/3 h-[150px] rounded-xl flex flex-col items-start p-8 justify-center">
          <h1 className="mb-3 text-2xl lg:text-3xl xl:text-3xl xxl:text-3xl font-black text-foreground">
            Ücretler
          </h1>
          <p className="text-sm md:text-base text-muted-foreground">
            Siz ve işiniz için en ideal paketi seçin; hedeflerinize bir adım daha yaklaşmanın tam zamanı 🚀
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-0 p-10 justify-items-center">
          <PlanCard
            color="#f7f5ff"
            name="Basic"
            price="4.500"
            description="İşinizi tümüyle tanıtmak için her şeyi içeren paket"
            features={["Alan adı + Sunucu hizmeti", "Güvenlik sertifikası (SSL)", "Tek sayfa", "Logo Çalışması", "Responsive Tasarım"]}
            btnText="true"
            size="medium"
          />
          <PlanCard
            color="#f7f5ff"
            name="Rand✦"
            price="14.500"
            description="İşinizi zirveye taşıyacak, her ayrıntıyı kapsayan kapsamlı ve prestijli tanıtım paketi."
            features={["Alan adı + Sunucu hizmeti", "Güvenlik sertifikası (SSL)", "Çoklu sayfa", "Logo Çalışması", "Responsive Tasarım", "Arama Motoru kaydı", "SEO Optimizasyonu", "İletişim formu", "WhatsApp yönlendirmesi"]}
            btnText="true"
            size="large"
          />
          <PlanCard
            color="#f7f5ff"
            name="E-commerce"
            price="59.500"
            description="Get started with the basic plan"
            features={["1 User", "2 Projects", "5GB Storage"]}
            btnText="false"
            size="medium"
          />
        </div>

        <div className="mb-20 mt-12 text-left border border-border w-5/6 lg:w-4/6 xl:w-3/6 h-[190px] md:h-[150px] rounded-xl flex flex-col items-start p-10 justify-center">
          <h1 className="mb-4 text-xl sm:text-2xl font-normal text-foreground">
            Size en uygun paketi seçmek ve daha fazla bilgi almak için bize ulaşın
          </h1>
          <a href="/iletisim">
            <Button variant="outline" className="text-primary border-primary hover:bg-primary/10">
              İletişime geç!
            </Button>
          </a>
        </div>

      </div>
      
    </div>
  );
}

export default ucretler;
