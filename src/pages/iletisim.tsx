import { useRef } from "react";
import emailjs from "@emailjs/browser";

const Iletisim = () => {
  // useRef'yi form elementine referans olarak ayarlıyoruz
  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (form.current) {
      emailjs
        .sendForm('service_dmngi7h', 'template_qd4ea0r', form.current, {
          publicKey: 'PXORtWgEkhNfZ9C6l',
        })
        .then(
          () => {
            console.log('Mesajınız Gönderildi!');
          },
          (error) => {
            console.log('Mesajınız Gönderilemedi...', error.text);
          }
        );
      
      // e.target'ı HTMLFormElement olarak tanımlıyoruz
      (e.target as HTMLFormElement).reset(); // Burada target'ı doğru tür olarak belirtiyoruz
    }
  };

  return (
    <div className="bg-background text-foreground min-h-screen flex items-center justify-center py-12 px-6">
      <div className="w-full max-w-7xl rounded-xl grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Sol Kısım - İletişim Bilgileri */}
        <div className="flex flex-col justify-center p-7">
          <h2 className="text-4xl font-semibold mb-6">İletişim Bilgileri</h2>
          <p className="mb-4">
            <strong>Email :</strong> ozenshopping.com@gmail.com
          </p>
          <p className="mb-4">
            <strong>İnstagram :</strong> @terradijital
          </p>
          <p className="mb-4">
            Çalışma Saatleri : Pazartesi - Cuma, 14:00 - 23:00
          </p>
        </div>

        {/* Sağ Kısım - İletişim Formu */}
        <div className="p-14 border border-gray-300 text-foreground bg-card rounded-3xl mb-15">
          <h2 className="text-4xl font-semibold mb-6">Bize Ulaşın</h2>

          <form ref={form} onSubmit={sendEmail} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-base font-medium mb-2">
                Adınız
              </label>
              <input
                type="text"
                id="name"
                name="user_name"
                required
                className="w-full px-4 py-2  border  rounded-xl text-black focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="Adınızı girin"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-base font-medium mb-2">
                Email Adresiniz
              </label>
              <input
                type="email"
                id="email"
                name="user_email"
                required
                className="w-full px-4 py-2 border rounded-xl text-black focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="Email adresinizi girin"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-base font-medium mb-2">
                Mesajınız
              </label>
              <textarea
                id="message"
                name="message"
                required
                className="w-full h-[100px] px-4 py-3  border  rounded-xl text-black focus:outline-none focus:ring-2 focus:ring-blue-400 resize-none"
                placeholder="Mesajınızı buraya yazın"
              ></textarea>
            </div>

            <div className="flex flex-row justify-center align-center">
              <button
                type="submit"
                className="w-2/3 flex flex-row justify-center align-center py-3 px-6 bg-primary text-white font-semibold rounded-xl hover:focus:ring-blue-400 transition-all duration-300"
              >
                Mesajı Gönder
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Iletisim;
