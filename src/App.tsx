import { Routes, Route } from 'react-router-dom';

import Header from '@/components/Header';
import Footer from '@/components/Footer';

import İletisim from '@/pages/iletisim';
import Home from '@/pages/home';
import Urun from '@/pages/urunlerimiz';
import Hakkimizda from '@/pages/hakkimizda';
import Referans from '@/pages/referans';
import Web from '@/pages/website';
import P404 from '@/pages/p404';
import İkass from '@/pages/ikas';
import Shopify from '@/pages/shopify';

const App = () => {
  return (
    <div className="relative isolate overflow-hidden">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/web-sitesi" element={<Web />} />
        <Route path="/iletisim" element={<İletisim />} />
        <Route path="/referans" element={<Referans />} />
        <Route path="/urunlerimiz" element={<Urun />} />
        <Route path="/hakkimizda" element={<Hakkimizda />} />
        <Route path="/ikas" element={<İkass />} />
        <Route path="/shopify" element={<Shopify />} />
        <Route path="*" element={<P404 />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;