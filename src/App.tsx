/**
 * @copyright 2025 @thehref
 * @license Apache-2.0
 */


// Routes 
import { Routes,Route } from 'react-router-dom';

// Components
import Header from '@/components/Header';
import Footer from '@/components/Footer';

// Pages
import İletisim from "@/pages/iletisim";
import Home from '@/pages/home';
import Cozum from '@/pages/cozum';
import Hakkimizda from '@/pages/hakkimizda';
import Referans from '@/pages/referans';
import Ucret from '@/pages/ucretler';




const App = () => {
  return (
    <div className='relative isolate overflow-hidden'> 
    <Header/>


  <Routes>
    <Route path='/' element={<Home/>} />
    <Route path='/ucretler' element={<Ucret/>} />
    <Route path='/iletisim' element={<İletisim/>} />
    <Route path='/referans' element={<Referans/>} />
    <Route path='/cozumlerimiz' element={<Cozum/>} />
    <Route path='/hakkimizda' element={<Hakkimizda/>} />

  </Routes>
  <Footer/>
    </div>
  )
}

export default App
