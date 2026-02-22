import { Link } from "react-router-dom";
import { useState } from "react";
import Discount from "./discount";

const Deals=()=>{
      const [showDiscount, setShowDiscount] = useState(false);
    return(
        <div className=" m-10 pt-20 ">
       <h1 className="text-4xl font-serif font-light  pl-5"> DEALS for You</h1>

       <div className="flex flex-row pl-40">
           <div className=" -ml-20  mt-10 w-6xl ">
        <img className="h-100 w-5xl rounded-4xl" src="https://i.pinimg.com/1200x/ac/df/d2/acdfd2236192cf8a7fa52ac854c326df.jpg" alt="" />
       </div>
       <div className="  relative mt-10 h-5/12 pr-5 overflow-hidden" >
        <img  className="h-100 w-3xl object-contain rounded-b-full " src="https://i.pinimg.com/1200x/e0/c0/f3/e0c0f3c9623601b097bdc7f1619acb95.jpg" alt="" />
        <button className="absolute bottom-4 left-46 bg-white text-black px-4 py-2 rounded-lg hover:"
           onClick={() => setShowDiscount(true)}>

            Get Discount
        </button>
        {showDiscount && (
        <Discount onClose={() => setShowDiscount(false)} />
      )}
       </div>
       </div>
      


        </div>
    )
} 
export default Deals;