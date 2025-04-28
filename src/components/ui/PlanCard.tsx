import { Link } from 'react-router-dom';
import React from 'react';

interface PlanCardProps {
  name: string;
  description: string;
  btnText: string;
  price?: string;
  features: string[];
  color: string;
  size?: string; // Yeni eklenen prop
}

export default function PlanCard({ name, description, price, features, color, btnText, size }: PlanCardProps) {
  // Eğer btnText "false" ise, opaklık %40 ve tıklanamazlık uygulanacak
  const isDisabled = btnText === "false";

  // Kartın stilini koşullu olarak belirle
  const cardStyle: React.CSSProperties = {
    opacity: isDisabled ? 0.4 : 1,
    pointerEvents: isDisabled ? "none" : "auto",
    backgroundColor: color,
    transform: size === "large" ? "scale(1.1)" : "scale(1)", // Eğer size "large" ise yüzde 10 büyüt
    boxShadow: size === "large" ? "0 10px 15px rgba(0, 0, 0, 0.2)" : "none", // Hafif gölge eklendi
    transition: "transform 0.3s ease, box-shadow 0.3s ease", // Gölge ve büyütme animasyonu
  };

  return (
    <div style={cardStyle} className="flex min-h-[420px] w-[320px] flex-col rounded-2xl p-8 text-black font-space">
      <h2 className="mb-5 text-xl font-medium">{name}</h2>
      <div className="mb-5 flex items-end text-5xl font-black">
        {price ? <div>{price}₺</div> : "Ücretsiz"}
      </div>
      <p className="mb-5">{description}</p>
      <ul className="mb-10 flex flex-col gap-y-2">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center">
            <img src="correct.png" alt="Correct Image" className="mr-3 h-5 w-5" />
            <span>{feature}</span>
          </li>
        ))}
      </ul>

      <button className="mt-auto rounded-3xl bg-gray-200 py-3 px-6 text-lg font-medium text-black transform transition-all duration-300 hover:scale-105 hover:shadow-lg">
        <Link to="/iletisim" className="block w-full h-full text-center"><b>Satın Al</b></Link>
      </button>
    </div>
  );
}
