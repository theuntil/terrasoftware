/**
 * Types
 */
import { MenuItem } from '@/types/index';

/**
 * Assets
 */
import {
  
  Github,
  Linkedin,
  Instagram,
} from 'lucide-react';


// Header
export const navMenu: MenuItem[] = [
  {
    href: '/urunlerimiz',
    label: 'Ürünlerimiz',
  },
  {
    href: 'hakkimizda',
    label: 'Hakkımızda',
  },
];


// Ücretler
export const Ucretler = [
  {
    name: "Başlangıç",
    description: "İşinizi tanıtmak için uygun bir paket",
    btnText: 'Şimdi Satın al',
    price: 4800,
    features: [
      "50GB Hosting",
      "Google SEO Optimizasyonu",
      "Sosyal medya Yönetimi",
      "Günlük Raporlama"
    ],
    color: "#78e3fc"
  },
  {
    name: "Profesyonel",
    description: "Daha fazla özellik ve destek sunan premium paket",
    btnText: 'Hemen Başla',
    price: 9500,
    features: [
      "100GB Hosting",
      "SEO Danışmanlık",
      "Reklam Kampanyaları Yönetimi",
      "Sosyal Medya Raporlama",
      "Özel Destek Hattı"
    ],
    color: "#f7a1a1"
  },
  {
    name: "Kurumsal",
    description: "Büyük işletmeler için güçlü özellikler ve optimize çözümler",
    btnText: 'Teklif Al',
    price: 18500,
    features: [
      "500GB Hosting",
      "Kurumsal SEO Çözümü",
      "Sosyal Medya ve Blog Yönetimi",
      "Özel Eğitim ve Danışmanlık",
      "Gelişmiş Raporlama ve Analiz"
    ],
    color: "#a8d08d"
  },
  {
    name: "Girişimci",
    description: "Yeni başlayanlar için uygun fiyatlı temel paket",
    btnText: 'Başla',
    price: 2500,
    features: [
      "20GB Hosting",
      "Temel SEO Hizmetleri",
      "Sosyal Medya Takibi",
      "Aylık E-posta Bülteni",
    ],
    color: "#f2e1c1"
  }
];


// Hero
export const heroData = {
  sectionSubtitle: 'YENİDEN BAŞLAYIN',
  sectionTitle: "Dijital dünyada işinizi birlikte",
  decoTitle: "büyütelim🚀",
  sectionText:
    'Siz büyümenin keyfini çıkarırken, biz de sizi nasıl daha ileriye taşıyabileceğimizi düşünelim. Sizin değil, bizim işimiz!',
};



// Footer
export const footerData = {
  links: [
    {
      title: 'Hızlı Linkler',
      items: [
        {
          href: '/urunlerimiz',
          label: 'Ürünlerimiz',
        },
        {
          href: '/web-sitesi',
          label: 'Web Sitesi kur',
        },
        {
          href: '/ikas',
          label: 'İkas ile E-Ticaret',
        }
      
      ],
    },
  
    {
      title: 'Şirketimiz',
      items: [
        {
          href: '/hakkimizda',
          label: 'Hakkımızda',
        },
        {
          href: '#',
          label: 'Ekibimize katılın',
        },
    
        {
          href: '/iletisim',
          label: 'İletişim',
        },
      ],
    },
    
  ],
  copyright: '©2025 Powered by AdnanÖzen',
  socialLinks: [

    {
      href: 'https://github.com/theuntil',
      icon: <Github size={18} />,
    },
    {
      href: 'https://www.linkedin.com/in/terradijital/',
      icon: <Linkedin size={18} />,
    },
    {
      href: 'https://www.instagram.com/terradijital/',
      icon: <Instagram size={18} />,
    },
    
  ],
};