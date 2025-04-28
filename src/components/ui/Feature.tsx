
// @copyright thehref - AdnanÖZEN

//İmport 
import { motion } from "motion/react";



//import { ArrowRight } from "lucide-react";


//FCompanentler
import FeatureCard from "@/components/ui/FeatureCard";

import { Button } from "@/components/ui/button";
 
//Constans

import { featureData } from "@/constants";


const Feature = () => {
  return (
   
<section className="section">

<div className="container">

<div className="section-head">

    <motion.p className="section-subtitle">
{featureData.sectionSubtitle}  </motion.p>

<motion.h2 className="section-title" > {featureData.sectionTitle} </motion.h2>

<motion.p className="section-text"> {featureData.sectionText} </motion.p>



</div>


<div className=""> {featureData.features.map(({icon, iconBoxColor,title,desc,imgSrc},index)  =>(

<FeatureCard key={index} >
<>

<div className="">

<motion.div className={`${iconBoxColor} `}> {icon} </motion.div>

<motion.h3 className=""> {title} </motion.h3>

<motion.p className=""> {desc}  </motion.p>

<motion.div className="">

<Button variant="link" 
className="">  </Button>
</motion.div>
</div>



{imgSrc && (

<motion.figure className="">

<img src={imgSrc} alt={title} />
</motion.figure>

)} 





</>    
    
</FeatureCard>

) )} </div>



</div>
</section>




  );
};

export default Feature;
