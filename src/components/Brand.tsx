/**
 * @copyright 2025 @thehref
 * @license Apache-2.0
 */


//Node modeles
import { motion } from "motion/react";


import { brands } from "@/assets";
import * as variants from '@/lib/motionVariants';

const Brand = () => {
  return (
<section className="section">
<div className="container max-w-screen-lg"> 
    
<motion.p  variants={variants.fadeInUp} 
initial="start"
whileInView="end"
viewport={{  once:true    }}
className="text-center mb-4 md:mb-6">
    
    
Çözüm Ortaklarımız</motion.p>

<motion.div  

variants={variants.staggerContainer} 
initial="start"
whileInView="end"
viewport={{  once:true    }}
className="flex justify-center flex-wrap gap-5 md:gap-10 ">


{brands.map((brand,index) =>(

<motion.figure key={index} variants={variants.fadeInUp}> 
  <img 
    src={brand} 
    alt="brands"
    className="w-[100px] h-[100px] object-contain filter brightness-0"  
  />
</motion.figure>



))}

</motion.div>
    


</div>

</section>

  );
};

export default Brand
