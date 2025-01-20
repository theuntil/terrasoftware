import React from 'react';

/**
 * @copyright 2025 @thehref
 * @license Apache-2.0
 */

// Assets (resminizi import edin)
import logoIcon from '@/logo31.png';

const Logo = () => {
  return (
    <a href="/" className="flex items-center text-2xl md:text-3xl lg:text-4xl">
      {/* İkon */}
      <img 
        src={logoIcon} 
        alt="Logo Icon" 
        className="w-auto h-7 md:h-8 lg:h-10 mr-1" // Yükseklik ayarlarını yapın
      />
      {/* Terra Yazısı */}
      <span ><b>Terra</b></span>
    </a>
  );
}

export default Logo;


/**
import { favicon, logo} from '@/assets';



type LogoProps = {
    variant?: 'default' | 'icon';
}





{ variant = 'default' }: LogoProps
{variant === 'default' && (
            <img src={logo} alt="Terra Logo" width={150} height={31} />
        )}

        {variant === 'icon' && (
            <img src={favicon} alt="Terra Logo"   width={64} height={64} />
          
        )}
 */