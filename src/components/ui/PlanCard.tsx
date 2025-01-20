interface PlanCardProps {
name: string;
description: string;
btnText: string;
price?: string;
features: string[];
color: string;


}

import { Link } from 'react-router-dom';
export default function PlanCard({name,description,price,features,color}: PlanCardProps) {

    return <div style={{backgroundColor: color}} className="flex min-h-[428px] w-[320px] flex-col rounded-3xl p-8">


<h2 className="mb-5 text-xl font-medium "> {name}</h2>
<div className="mb-5 flex items-end text-5xl font-black "> {price ? (<><div> {price}₺</div></>) : ( "Ücretsiz")}  </div>


<p className=" mb-5 " >{description}</p>

<ul className="mb-10 flex flex-col gap-y-2">
  {features.map((feature, index) => (
    <li key={index} className="flex items-center">
    <img src="correct.png" alt="Correct İmage" className="mr-3 h-5 w-5" />
      <span>{feature}</span>
    </li>
  ))}
</ul>

<button  className="mt-auto rounded-3xl bg-white py-3 px-6 text-lg font-medium text-black transform transition-all duration-300 hover:scale-105 hover:shadow-lg" >
<Link to="/iletisim" className="block w-full h-full text-center"><b>Satın Al</b></Link>
</button>

    </div>;
}
