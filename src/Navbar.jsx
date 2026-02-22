import useCartStore from "./useCartStore";
import CartItems from "./CartItems";
import { FiUser } from "react-icons/fi";
import { FaShoppingCart } from "react-icons/fa";
import { SearchIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { MdAdminPanelSettings } from "react-icons/md";
import { Input } from "@/components/ui/input";

import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

function Navbar({ search, setSearch }) {
  const cart = useCartStore((state) => state.cart);
  const [showCart, setShowCart] = useState(false);

  const cartRef = useRef(null);


  useEffect(() => {
    function handleClickOutside(e) {
      if (cartRef.current && !cartRef.current.contains(e.target)) {
        setShowCart(false);
      }
    }

    function handleEsc(e) {
      if (e.key === "Escape") {
        setShowCart(false);
      }
    } 

    if (showCart) {
      document.addEventListener("mousedown", handleClickOutside);
      document.addEventListener("keydown", handleEsc);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEsc);
    };
  }, [showCart]);

  const closeCart = () => setShowCart(false);

  return (
    <div className="flex items-center justify-between p-10 h-16 bg-white text-black shadow">

      <Link to={"/"} onClick={closeCart}>
        <div className="flex items-center">
          <img
            src="/logo.png"
            alt="S"
            className="h-20 w-auto -mr-8"
          />
          <span className="text-2xl font-mono tracking-tight">Soulstore</span>
        </div>
      </Link>


      <div className="flex flex-row">
        <Input
          placeholder="What are you looking for ?"
          className="w-110 font-extralight"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <Button variant="outline" aria-label="Search">
          <SearchIcon /> 
        </Button>
      </div>


      <Link to="/admin" onClick={closeCart}>
        <MdAdminPanelSettings size={40} />
      </Link>


      <Link to="/login" >
        <FiUser size={30} />
      </Link>


      <div className="relative cursor-pointer" ref={cartRef}>
        <button
          onClick={() => setShowCart((prev) => !prev)}
          className="ml-4 px-3 py-1 rounded-md"
        >
          <FaShoppingCart size={24} />
        </button>


        <span className="absolute -top-2 -right-3 bg-red-600 text-white text-xs px-2 py-0.5 rounded-full">
          {cart.length}
        </span>

        {showCart && (
          <div className="absolute right-0 mt-2 w-120 bg-white text-black rounded shadow-lg border z-50">
            <h2 className="text-lg font-semibold p-4">Cart Items</h2>

            <div className="max-h-100 text-sm overflow-y-auto">

              <CartItems closeCart={closeCart} />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Navbar;
