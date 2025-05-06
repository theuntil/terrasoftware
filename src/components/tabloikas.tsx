import { useState } from "react";
import logo from "@/assets/favicon.png";

const PricingTable = () => {
  // State'i string formatında key'lerle saklamak
  const [showAll, setShowAll] = useState<Record<string, boolean>>({});

  const toggleShowAll = (index: number) => {
    setShowAll((prev) => ({
      ...prev,
      [index]: !prev[index], // index değerini string formatında kullanmak
    }));
  };

  const plans = [
    {
      name: "Temel",
      price: "₺58.000",
      period: "12 ay Taksit / 4.850,00 TL (yaklaşık olarak)",
      features: [
        "Sınırsız ürün",
        "0₺ komisyon",
        "Hediye paketi özelliği",
        "Domain bağlama",
        "30'dan fazla tema",
      ],
      mostPreferred: false, // Change this to true for the most preferred plan
      secondFeatures: [
        "İlk Satışınızı yapana kadar yanınızdayız",
        "Dijital Pazarlama Danışmanlığı",
        "Sosyal Medya Danışmanlığı",
      ],
    },
    {
      name: "Rand Plus",
      price: "₺128.000",
      period: "12 ay Taksit / 9.850,00 TL (yaklaşık olarak)",
      features: [
        "Gelişmiş kampanya altyapısı",
        "Özel müşteri temsilcisi",
        "Gelişmiş entegrasyonlar",
        "59.90 TL'den başlayan anlaşmalı kargo fiyatları (Ücretsiz)",
        "%0'dan başlayan sanal POS oranı",
        "Birebir panel eğitimi",
        "Öncelikli destek hattı (7/24)",
        "Trendyol, Hepsiburada, Amazon, ETSY entegrasyonu (Ücretsiz)",
        "WhatsApp ile sepet hatırlatma (Ücretsiz)",
        "Özelleştirilmiş arama sonuçları",
        "Gelişmiş SEO",
        "Masterpass",
        "Mobil uygulama (Ücretsiz)",
      ],
      mostPreferred: true, // Set this to true for the preferred plan
      secondFeatures: [
        "FaceBook ADS Hesap Açılışı",
        "Ödeme altyapısı danışmanlığı",
        "Arama Motoru Kaydı",
        "Profesyonel Logo Çalışması",
        "Sonraki her hizmette %10 indirim",
      ],
    },
  ];

  const maxVisible = 7;

  return (
    <div className="overflow-x-auto">
      <div className="mx-auto max-w-screen-xl w-full flex space-x-2 lg:space-x-4 bg-white"> {/* space-x-4 yerine space-x-2 yaptım */}
        {plans.map((plan, index) => {
          const key = String(index);
          const visibleFeatures = showAll[key]
            ? plan.features
            : plan.features.slice(0, maxVisible);
          const showToggle = plan.features.length > maxVisible;

          // Diğer paketi almak için
          const otherPlan = plans.find((_, idx) => idx !== index);

          return (
            <div
              key={plan.name}
              className="p-6 border-y border-gray-200 flex flex-col justify-between w-full lg:w-2/3 relative" // Değişiklik burada
            >
              {plan.mostPreferred && (
                <div className="absolute top-2 right-2 text-black bg-ikas px-3 py-1 rounded-xl text-xs sm:text-sm lg:text-xs xl:text-xs z-10">
                  En Çok Tercih Edilen
                </div>
              )}
              <div>
                <h2 className="text-xl font-semibold mb-2">{plan.name}</h2>
                <p className="text-3xl font-bold mb-1">{plan.price}</p>
                <p className="text-gray-500 mb-4 text-sm">{plan.period}</p>
                <ul className="space-y-2 mb-4">
                  {visibleFeatures.map((feature, i) => (
                    <li key={i} className="text-sm text-gray-700">• {feature}</li>
                  ))}
                </ul>
                {showToggle && (
                  <button
                    onClick={() => toggleShowAll(index)}
                    className="text-sm text-indigo-600 hover:underline"
                  >
                    {showAll[key] ? "Daha az göster" : `+${plan.features.length - maxVisible} daha fazla`}
                  </button>
                )}
              </div>

              {/* İkinci Özellikler Bölümü */}
              <div className="mt-6">
                {/* Firmanızın logosu */}
                <div className="flex justify-start mb-4">
                  <img
                    src={logo} // Burada firmanızın logosunu ekleyebilirsiniz
                    alt="Firma Logosu"
                    className="w-6 h-6 mr-2" // Logoyu küçük ve uygun boyutta ayarlıyoruz
                  />
                  <h3 className="text-xl font-semibold mb-2">Bizimle Çalışmanın Faydaları</h3>
                </div>
                {plan.mostPreferred && otherPlan && (
                  <p className="text-sm text-black font-semibold  mb-4">
                    + {otherPlan.name} paketine ek olarak
                  </p>
                )}
                <ul className="space-y-2">
                  {plan.secondFeatures.map((feature, i) => (
                    <li key={i} className="text-sm text-gray-700">• {feature}</li>
                  ))}
                </ul>
              </div>

              <button className="w-2/3 md:w-1/3 text-black rounded-lg bg-white border py-2 mt-6 hover:bg-ikas hover:text-black transition mx-auto">
                Satın al
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default PricingTable;
