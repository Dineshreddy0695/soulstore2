import useCartStore from "./useCartStore";
import useProductStore from "./store/useProductStore";
import CartItems from "./CartItems";
import { FiUser } from "react-icons/fi";
import { FaShoppingCart } from "react-icons/fa";
import { SearchIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { MdAdminPanelSettings } from "react-icons/md";
import { Input } from "@/components/ui/input";

import { useEffect, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Navbar({ search, setSearch }) {
  const navigate = useNavigate();
  const cart = useCartStore((state) => state.cart);
  const { products } = useProductStore();

  const [showCart, setShowCart] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);

  const cartRef = useRef(null);
  const searchRef = useRef(null);

  //  Filter products for dropdown
  const filteredProducts = products.filter((product) =>
    product.title
      ?.toLowerCase()
      .includes(search.toLowerCase())
  ).slice(0, 5); 

  useEffect(() => {
    function handleClickOutside(e) {
      if (
        cartRef.current &&
        !cartRef.current.contains(e.target)
      ) {
        setShowCart(false);
      }

      if (
        searchRef.current &&
        !searchRef.current.contains(e.target)
      ) {
        setShowDropdown(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const closeCart = () => setShowCart(false);

  return (
    <div className="flex items-center justify-between p-10 h-16 bg-white text-black shadow relative">


      <Link to={"/"} onClick={closeCart}>
        <div className="flex items-center">
          <img
            src="https://cdn.dribbble.com/userupload/32177507/file/original-b981c274b20841742f9cd2f61ac5f8af.jpg?resize=1504x1128&vertical=center"
            alt="S"
            className="h-20 w-auto -mr-8"
          />
          <span className="text-2xl font-mono tracking-tight">
            Soulstore
          </span>
        </div>
      </Link>


      <div className="relative w-110" ref={searchRef}>
        <div className="flex">
          <Input
            placeholder="What are you looking for ?"
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
              setShowDropdown(true);
            }}
            onFocus={() => setShowDropdown(true)}
            className="font-extralight"
          />
          <Button variant="outline">
            <SearchIcon />
          </Button>
        </div>


        {showDropdown && search && (
          <div className="absolute w-full bg-white border shadow-lg mt-1 rounded-md z-50 max-h-60 overflow-y-auto">
            {filteredProducts.length > 0 ? (
              filteredProducts.map((product) => (
                <div
                  key={product.id}
                  onClick={() => {
                    navigate(`/product/${product.id}`);
                    setSearch("");
                    setShowDropdown(false);
                  }}
                  className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                >
                  {product.title}
                </div>
              ))
            ) : (
              <div className="px-4 py-2 text-gray-500">
                No products found
              </div>
            )}
          </div>
        )}
      </div>


      <Link to="/admin" onClick={closeCart}>
        <MdAdminPanelSettings size={40} />
      </Link>


      <Link to="/login">
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
            <h2 className="text-lg font-semibold p-4">
              Cart Items
            </h2>
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
