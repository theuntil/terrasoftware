import { Routes, Route } from 'react-router-dom';

import Header from '@/components/Header';
import Footer from '@/components/Footer';

import İletisim from '@/pages/iletisim';
import Home from '@/pages/home';
import Cozum from '@/pages/cozum';
import Hakkimizda from '@/pages/hakkimizda';
import Referans from '@/pages/referans';
import Ucret from '@/pages/ucretler';
import P404 from '@/pages/p404';

const App = () => {
  return (
    <div className="relative isolate overflow-hidden">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ucretler" element={<Ucret />} />
        <Route path="/iletisim" element={<İletisim />} />
        <Route path="/referans" element={<Referans />} />
        <Route path="/cozumlerimiz" element={<Cozum />} />
        <Route path="/hakkimizda" element={<Hakkimizda />} />
        <Route path="*" element={<P404 />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;