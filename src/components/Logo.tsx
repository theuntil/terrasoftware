/**
 * @copyright 2025 @thehref
 * @license Apache-2.0
 */

// Assets 
import logo from '@/assets/logo.png';

const Logo = () => {
  return (
    
    <div className="flex items-center "><img src={logo} alt="TerraYazılım Logo " className="w-7 h-7 mr-2 lg:w-8 lg:h-8" />
    <a href="/" className="flex items-center     text-2xl md:text-3xl lg:text-3xl">
      
      <span ><b>Terra</b>Yazılım</span>
    </a>
    
    </div>
  );
}

export default Logo;