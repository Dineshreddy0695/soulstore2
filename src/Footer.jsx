import CartItems from "./cartitems"


const Footer=()=>{
    return(
        <div className="h-80 min-w-full  justify-between mb-0 bg-gray-900 text-white">
            
            <div className="w-full min-h-full mt-10  gap-50 p-10 flex flex-row ">
                <div className=" flex flex-col gap-3  mr-5 ml-5 ">
                    <h1 className="text-5xl font-extralight ">My Account</h1>
                  <li className="flex flex-col gap-3 ">
                   <button>  my profile</button>
                    <button>my orders</button> 
                  <button onClick={CartItems}> cart items</button> 
                  </li>
                   
                </div>
                <div className="flex flex-col mr-5  ml-5">
                    <h1 className="text-5xl font-extralight ">Services</h1>
                    <li className="flex flex-col gap-3 mt-4 items-center ">
            
                          <button>privacypolicy</button>              
                          <button>refund policy</button>              
                           <button>terms & conditions</button>       
                    </li>
                            
                    
                </div>

                <div className="flex flex-col  "> 
                    
                    <h1  className="text-5xl mask-radial-from-neutral-100">Stay Connected </h1>
                    <div className="flex flex-row gap-5 mt-5 items-center ">

                                 <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer">
                                <img src="https://cdn.iconscout.com/icon/free/png-512/free-linkedin-icon-svg-download-png-189774.png?f=webp&w=512" alt="LinkedIn logo, blue and white, links to LinkedIn profile" className="w-8 h-8 ml-6" />
                            </a>
                            <a href="https://github.com/" target="_blank" rel="noopener noreferrer">
                                <img src="https://cdn.iconscout.com/icon/free/png-512/free-github-icon-svg-download-png-10919025.png?f=webp&w=512" alt="GitHub logo, black and white, links to GitHub profile" className="w-9 h-9" />
                            </a>
                            <a href="https://facebook.com/" target="_blank" rel="noopener noreferrer">
                                <img src="https://cdn.iconscout.com/icon/free/png-512/free-facebook-logo-icon-svg-download-png-1350125.png?f=webp&w=512" alt="Facebook logo, blue and white, links to Facebook profile" className="w-8 h-8" />
                            </a>
                            <a href="https://instagram.com/" target="_blank" rel="noopener noreferrer">
                                <img src="https://cdn.iconscout.com/icon/free/png-512/free-instagram-logo-icon-svg-download-png-721958.png?f=webp&w=512" alt="Instagram logo, multicolor, links to Instagram profile" className="w-8 h-8" />
                            </a>
                         
                    </div>


                   
                        </div>
                        
            </div>
            
</div>
    )
}
export default Footer