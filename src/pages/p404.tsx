import { Link } from 'react-router-dom';
import sidImg from "@/assets/fındık.png";

const NotFound = () => {
  return (
    <div className="relative min-h-screen flex flex-col justify-start items-center px-6 py-12 overflow-hidden">
      {/* Sid görseli sol alt köşeye sabit */}
      <img
        src={sidImg}
        alt="Sid confused"
        className="absolute bottom-0 left-0 w-[300px] md:w-[400px] lg:w-[500px] object-contain pointer-events-none select-none"
      />

      {/* İçerik */}
      <div className="z-10 max-w-xl text-center mt-24 md:mt-32">
        <h1 className="text-5xl md:text-6xl font-extrabold text-blue-700 mb-4">404</h1>
        <h2 className="text-xl md:text-2xl font-semibold text-gray-800 mb-3">
          Sanırım kayboldum...
        </h2>
        <p className="text-gray-600 mb-6 text-base md:text-lg">
          <span className="italic">Ama fındığımı buldummm hehehe</span>
        </p>
        <Link to="/">
          <button className="bg-ikas hover:bg-black hover:text-white text-black font-semibold px-6 py-3 rounded-2xl transition-all">
            Doğru Ana sayfaya!
          </button>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
