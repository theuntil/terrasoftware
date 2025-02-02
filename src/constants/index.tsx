/**
 * Types
 */
import { MenuItem } from '@/types/index';

/**
 * Assets
 */
import {
  Blocks,
  ChartPie,
  Files,
  UserRoundPen,
  GitFork,
  LaptopMinimal,
  ArrowBigDownDash,
  CreditCard,
  Github,
  Linkedin,
  Instagram,
} from 'lucide-react';

import {
  feature1,
  feature2,
  blog1,
  blog2,
  blog3,
  avatar1,
  avatar2,
  avatar3,
} from '@/assets';

// Header
export const navMenu: MenuItem[] = [
  {
    href: '/cozumlerimiz',
    label: 'Çözümlerimiz',
  },
  {
    href: 'ucretler',
    label: 'Ücretler',
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

// Feature
export const featureData = {
  sectionSubtitle: 'Features',
  sectionTitle: 'Discover Powerful Features',
  sectionText:
    'Unleash the power of our platform with a multitude of powerful features, empowering you to achieve your goals.',
  features: [
    {
      icon: <ChartPie size={32} />,
      iconBoxColor: 'bg-blue-600',
      title: 'Advance Analytics',
      desc: 'Experience advanced analytics capabilities that enable you to dive deep into data, uncover meaningful patterns, and derive actionable insights',
      imgSrc: feature1,
    },
    {
      icon: <Files size={32} />,
      iconBoxColor: 'bg-cyan-500',
      title: 'Automated Reports',
      desc: 'Save time and effort with automated reporting, generating comprehensive and accurate reports automatically, streamlining your data analysis',
      imgSrc: feature2,
    },
    {
      icon: <UserRoundPen size={32} />,
      iconBoxColor: 'bg-yellow-500',
      title: 'Retention Report',
      desc: 'Enhance retention with our report, maximizing customer engagement and loyalty for business',
    },
    {
      icon: <GitFork size={32} />,
      iconBoxColor: 'bg-red-500',
      title: 'A/B Test Variants',
      desc: 'Efficiently compare A/B test variants to determine the most effective strategies',
    },
    {
      icon: <Blocks size={32} />,
      iconBoxColor: 'bg-purple-500',
      title: 'Integration Directory',
      desc: 'Seamlessly integrate with our directory, maximizing efficiency and unlocking the full potentials',
    },
  ],
};

// Process
export const processData = {
  sectionSubtitle: 'How it works',
  sectionTitle: 'Easy Process to Get Started',
  sectionText:
    'Discover how it works by leveraging advanced algorithms and data analysis techniques.',
  list: [
    {
      icon: <LaptopMinimal size={32} />,
      title: 'Create your account',
      text: 'Join us now and create your account to start exploring our platform and unlocking exciting features.',
    },
    {
      icon: <ArrowBigDownDash size={32} />,
      title: 'Install our tracking app',
      text: 'Install our tracking app to effortlessly monitor and manage your activities, gaining valuable insights and optimizing your performance.',
    },
    {
      icon: <CreditCard size={32} />,
      title: 'Start tracking your website',
      text: 'Start tracking your website effortlessly to gain valuable insights into visitor behavior, performance metrics, and optimization opportunities.',
    },
  ],
};

// Overview
export const overviewData = {
  sectionSubtitle: 'Overview',
  sectionTitle: 'All-In-One Analytics Tool',
  sectionText:
    'Powerful analytics made easy. Make data-driven decisions with our all-in-one tool.',
  listTitle: 'More than 1M+ people around the world are already using',
  list: [
    {
      title: '1M+',
      text: 'Active Downloads',
    },
    {
      title: '4.86',
      text: 'Average Rating',
    },
    {
      title: '60K+',
      text: 'Active Users',
    },
  ],
};

// Review
export const reviewData = {
  sectionSubtitle: 'Reviews',
  sectionTitle: 'What Our Customers Are Says',
  reviewCard: [
    {
      title: 'We’re building a better application now, thanks to AnalytiX.',
      text: 'Our application is undergoing significant improvements with the help of NioLand, resulting in enhanced functionality, improved user experience',
      reviewAuthor: 'Wade Warren',
      date: '3month ago',
    },
    {
      title: 'Great Service from a expert support system of AnalytiX',
      text: 'Experience exceptional service and support from AnalytiX expert team, dedicated to providing knowledgeable assistance and ensuring a seamless',
      reviewAuthor: 'Dianne Russell',
      date: '3month ago',
    },
    {
      title: 'Pricing is amazing for the small businesses around the world',
      text: 'Our pricing is tailored to suit the needs of small businesses worldwide, offering affordable and competitive rates that provide excellent value for',
      reviewAuthor: 'Marvin McKinney',
      date: '3month ago',
    },
  ],
};

// Blog
export const blogData = {
  sectionSubtitle: 'Our Blog',
  sectionTitle: 'Resource Center',
  sectionText:
    'Unlock the potential of our resource center, accessing valuable information and insights for your business growth.',
  blogs: [
    {
      imgSrc: blog1,
      badge: 'Growth',
      title: 'Why customer retention is the ultimate growth strategy?',
      author: {
        avatarSrc: avatar1,
        authorName: 'John Carte',
        publishDate: 'Oct 10, 2024',
        readingTime: '8 min read',
      },
    },
    {
      imgSrc: blog2,
      badge: 'Marketing',
      title: 'Optimizing your advertising campaigns for higher ROAS',
      author: {
        avatarSrc: avatar2,
        authorName: 'Annette Black',
        publishDate: 'Jul 15, 2024',
        readingTime: '5 min read',
      },
    },
    {
      imgSrc: blog3,
      badge: 'Growth',
      title: 'How to build the ultimate tech stack for growth',
      author: {
        avatarSrc: avatar3,
        authorName: 'Ralph Edwards',
        publishDate: 'Mar 24, 2024',
        readingTime: '2 min read',
      },
    },
  ],
};

// Cta
export const ctaData = {
  text: 'Start tracking your user analytics to boost your business',
};

// Footer
export const footerData = {
  links: [
    {
      title: 'Hızlı Linkler',
      items: [
        {
          href: '/cozumlerimiz',
          label: 'Çözümlerimiz',
        },
        {
          href: '/ucretler',
          label: 'Ücretler',
        },
      
      
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
  copyright: '©2025 Powered by AdnanÖZEN',
  socialLinks: [

    {
      href: 'https://github.com/theuntil',
      icon: <Github size={18} />,
    },
    {
      href: 'https://www.linkedin.com/in/terrasoftware/',
      icon: <Linkedin size={18} />,
    },
    {
      href: 'https://www.instagram.com/terrasoftware',
      icon: <Instagram size={18} />,
    },
    
  ],
};