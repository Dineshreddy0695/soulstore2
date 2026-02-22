import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import useCartStore from "./useCartStore";

const ProductPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);
  const [similar, setSimilar] = useState([]);
  const [qty, setQty] = useState(1);

  const addToCart = useCartStore((state) => state.addToCart);

  // 🔥 Fetch product
  useEffect(() => {
    fetch(`https://dummyjson.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setProduct(data);

        // fetch similar products from same category
        return fetch(
          `https://dummyjson.com/products/category/${data.category}`
        );
      })
      .then((res) => res.json())
      .then((data) => {
        setSimilar(data.products.slice(0, 4));
      });
  }, [id]);

  if (!product) {
    return <p className="text-center mt-10">Loading product...</p>;
  }

  const handleAddToCart = () => {
    addToCart({ ...product, qty });
    alert("Added to cart 🛒");
  };

  const handleBuyNow = () => {
    addToCart({ ...product, qty });
    navigate("/checkout");
  };

  return (
    <div className="max-w-7xl mx-auto mt-20 px-6 space-y-16">

      {/* MAIN SECTION */}
      <div className="grid md:grid-cols-2 gap-12">

        {/* Image */}
        <div className="bg-gray-100 rounded-2xl p-6">
          <img
            src={product.thumbnail}
            alt={product.title}
            className="w-full max-h-125 object-contain rounded-xl"
          />
        </div>

        {/* Details */}
        <div className="space-y-6">

          <h1 className="text-3xl font-bold">{product.title}</h1>

          <div className="flex items-center gap-4">
            <span className="text-2xl font-semibold">
              ₹ {product.price}
            </span>

            <span className="text-sm text-green-600 font-medium">
              {product.discountPercentage}% OFF
            </span>
          </div>

          <p className="text-gray-600 leading-relaxed">
            {product.description}
          </p>

          {/* Quantity */}
          <div className="flex items-center gap-4">
            <span className="font-medium">Quantity:</span>

            <div className="flex items-center border rounded-lg overflow-hidden">
              <button
                onClick={() => setQty(qty > 1 ? qty - 1 : 1)}
                className="px-4 py-2 bg-gray-200 hover:bg-gray-300"
              >
                -
              </button>

              <span className="px-6 py-2">{qty}</span>

              <button
                onClick={() => setQty(qty + 1)}
                className="px-4 py-2 bg-gray-200 hover:bg-gray-300"
              >
                +
              </button>
            </div>
          </div>

          {/* Buttons */}
          <div className="flex gap-4 pt-4">
            <button
              onClick={handleAddToCart}
              className="flex-1 bg-black text-white py-4 rounded-xl hover:bg-gray-800 transition"
            >
              Add to Cart
            </button>

            <button
              onClick={handleBuyNow}
              className="flex-1 border border-black py-4 rounded-xl hover:bg-black hover:text-white transition"
            >
              Buy Now
            </button>
          </div>

          {/* Extra Info */}
          <div className="space-y-2 text-sm text-gray-600 pt-6 border-t">
            <p>🚚 Free delivery on orders above ₹2000</p>
            <p>🔁 7-day easy return</p>
            <p>🔒 Secure payments</p>
            <p>⭐ Rating: {product.rating}</p>
            <p>📦 Stock Available: {product.stock}</p>
          </div>
        </div>
      </div>

      {/* SIMILAR PRODUCTS */}
      <div>
        <h2 className="text-2xl font-bold mb-6">
          Similar Products
        </h2>

        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
          {similar.map((item) => (
            <div
              key={item.id}
              className="border rounded-xl overflow-hidden hover:shadow-lg transition cursor-pointer"
              onClick={() => navigate(`/product/${item.id}`)}
            >
              <img
                src={item.thumbnail}
                alt={item.title}
                className="h-56 w-full object-cover"
              />
              <div className="p-4">
                <h3 className="font-medium line-clamp-1">
                  {item.title}
                </h3>
                <p className="text-gray-700 font-semibold mt-2">
                  ₹ {item.price}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
};

export default ProductPage;
