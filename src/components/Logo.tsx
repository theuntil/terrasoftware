/**
 * @copyright 2025 @thehref
 * @license Apache-2.0
 */

// Assets 
import logo from '@/assets/logo.png';

const Logo = () => {
  return (
    
    <div className="flex items-center">
  <a href="/">
  <img
  src={logo}
  alt="TerraYazılım Logo"
  className="w-24 sm:w-31 h-auto"
/>

  </a>
</div>

  );
}

export default Logo;