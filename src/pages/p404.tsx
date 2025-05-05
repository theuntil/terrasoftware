import { Link } from 'react-router-dom';
import sidImg from "@/assets/fındık.png";

const NotFound = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center px-6 py-12 overflow-hidden bg-white">
      
      {/* Sabit içerik merkezi */}
      <div className="z-10 max-w-xl text-center">
        <h1 className="text-5xl md:text-6xl font-extrabold text-blue-700 mb-4">404</h1>
        <h2 className="text-xl md:text-2xl font-semibold text-gray-800 mb-3">
          Sanırım kayboldum...
        </h2>
        <p className="text-gray-600 mb-6 text-base md:text-lg">
          <span className="italic">Ama fındığımı buldummm hehehe</span>
        </p>
        <Link to="/">
          <button className="bg-ikas hover:bg-black hover:text-white text-black font-semibold px-6 py-3 rounded-2xl transition-all relative z-10">
            Doğru Ana sayfaya!
          </button>
        </Link>
      </div>

      {/* Sid görseli */}
      <img
        src={sidImg}
        alt="Sid"
        className="
          absolute z-0 
          w-[200px] md:w-[260px] lg:w-[300px]
          bottom-[140px] md:bottom-[80px] lg:bottom-[50px]
          left-[calc(50%-100px)] md:left-[calc(50%-130px)] lg:left-[calc(50%-150px)]
        "
      />
    </div>
  );
};

export default NotFound;
