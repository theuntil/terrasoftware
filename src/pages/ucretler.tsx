
import PlanCard from "@/components/ui/PlanCard"


const ucretler = () => {
  return (
    <div>
      


    <div className=" flex flex-col items-center bg-background p-4 ">
      <div className="mb-2 mt-12 text-center ">
<h1 className="mb-4 text-5xl font-black text-white">Ücretler</h1>
<p className="text-lg text-white">Siz'e ve işinize uygun olan paketi seçin 🚀</p>



      </div>



<div className="flex flex-col gap-8 p-10 xl:flex-row" >

<PlanCard  color="#A8C6E1" name="Basic 🌱" price="4.500" description="Get strarted with the basic plan" features={["1 User", "2 Projects","5GB Storage"]} btnText="Start Free Plan"/>

<PlanCard  color="#7DA7D6" name="Normal 🌟"  price="14.500" description="Get strarted with the basic plan" features={["1 User", "2 Projects","5GB Storage"]} btnText="Start Free Plan"/>

<PlanCard  color="#4B5F64 " name="Business 🏢"  price="39.500" description="Get strarted with the basic plan" features={["1 User", "2 Projects","5GB Storage"]} btnText="Start Free Plan"/>

<PlanCard  color="#9E2A2F" name="E-commerce 📦"  price="59.500"description="Get strarted with the basic plan" features={["1 User", "2 Projects","5GB Storage"]} btnText="Start Free Plan"/>


</div>

    </div>
    
    
    
    
    
    
    
    
    </div>
  )
}

export default ucretler
