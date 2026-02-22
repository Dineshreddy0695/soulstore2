import useCartStore from "./useCartStore";

function ProductCard({ product }) {
  const addToCart = useCartStore((state) => state.addToCart);
  const removeFromCart = useCartStore((state) => state.removeFromCart);
  const Cart = useCartStore((state)=>state.cart );
  const isAdded = Cart.some((item) => item.id === product.id);

  return (
    <div className="p-4  border-b-blue-400 rounded-lg shadow-2xl hover:shadow-lg transition-all">
      <span className="bg-amber-300 px-2 py-1 rounded-2xl font-extralight text-sm  ">%50</span>
      <img
        src={product.image}
        alt={product.name}
        className="h-65 w-full  mt-2 object-cover rounded-md"
      />

      <h2 className="text-xl font-semibold mt-2">{product.name}</h2>
      <p className="text-gray-500">₹{product.price}</p>

      <button
        onClick={() => addToCart(product)}

      className={
          "mt-3 w-full px-4 py-2 rounded text-white " +
          (isAdded ? " bg-blue-300 " : "bg-blue-600 hover:bg-blue-700")
        }
      >
       {isAdded ? "Added ✓" : "Add to Cart"}
      </button>

      
      <button 
        onClick={() => removeFromCart(product.id)}
        className="mt-3 w-full px-1 py-1  text-sm text-red-500 rounded"
      >

      </button>
    </div>
  );
}

export default ProductCard;
