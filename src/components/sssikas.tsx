import { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import { motion } from "framer-motion"; // Framer Motion importu
import ikasLogo from "@/assets/Ikas_Logo.png";

const questionsAndAnswers = [
  {
    question: "İkas E-ticaret altyapısı nedir?",
    answer:
      "İkas, teknik bilgiye sahip olmanıza gerek kalmadan hızlı ve kolay bir şekilde online mağaza kurmanıza olanak tanıyan güçlü bir e-ticaret platformudur.",
  },
  {
    question: "Ürün yükleme ve trafik limitleri var mı?",
    answer:
      "Hayır, İkas'ta ürün yükleme veya trafik limiti yoktur. Dilediğiniz kadar ürün yükleyebilir ve herhangi bir trafik kısıtlaması olmadan satış yapabilirsiniz.",
  },
  {
    question: "İkas'ta satış yapmak için herhangi bir yazılım bilgisi gerekir mi?",
    answer:
      "Hayır, İkas tamamen kullanıcı dostu bir platformdur. Kodlama bilgisine sahip olmasanız da kolayca mağaza oluşturup yönetebilirsiniz.",
  },
  {
    question: "İkas'ın ödeme sistemi nasıl çalışır?",
    answer:
      "İkas, güvenli ödeme altyapısı sağlar. Ödemeleriniz doğrudan banka hesabınıza yapılır ve ertesi gün ödeme alabilirsiniz.",
  },
  {
    question: "Kargo anlaşmalarını nasıl yapabilirim?",
    answer:
      "İkas, kargo anlaşmalarını kolayca yapabilmeniz için çeşitli taşıyıcı firmalarla entegrasyon sunmaktadır. Bayilere gitmeden online olarak kargo anlaşmalarınızı gerçekleştirebilirsiniz.",
  },
  {
    question: "İkas'ta çoklu dil desteği var mı?",
    answer:
      "Evet, İkas'ta birden fazla dilde mağaza yönetebilirsiniz. Dünya çapında satış yaparken dil seçeneklerini rahatça sunabilirsiniz.",
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAnswer = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-white py-20 px-4 md:px-12">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-semibold text-gray-800 mb-12 mx-8 text-left flex items-center">
          <img src={ikasLogo} alt="Ikas Logo" className="mr-10 h-6 md:mr-4" />
          E-ticaret Altyapısı ile İlgili Sıkça Sorulan Sorular
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {questionsAndAnswers.map((item, index) => (
            <div
              key={index}
              className="bg-white p-4 overflow-hidden cursor-pointer border-t border-b border-gray-300 transition-shadow duration-300"
            >
              <div
                className="flex justify-between items-center"
                onClick={() => toggleAnswer(index)}
              >
                <h3 className="text-sm font-light text-gray-800 text-left">
                  {item.question}
                </h3>
                <span className="transform transition-transform duration-300">
                  {openIndex === index ? (
                    <FaChevronUp className="w-6 h-6 text-gray-800" />
                  ) : (
                    <FaChevronDown className="w-6 h-6 text-gray-800" />
                  )}
                </span>
              </div>

              {/* Framer Motion animasyonu ekliyoruz */}
              <motion.div
                initial={{ height: 0 }}
                animate={{
                  height: openIndex === index ? "auto" : 0,
                  opacity: openIndex === index ? 1 : 0,
                }}
                transition={{
                  duration: 0.3,
                  ease: "easeInOut",
                }}
                className="overflow-hidden"
              >
                {openIndex === index && (
                  <div className="p-4 text-gray-600 text-sm bg-white mt-2 text-left">
                    {item.answer}
                  </div>
                )}
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
