import { useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import useCartStore from "./useCartStore";

const ProductPage2 = () => {
  const { state } = useLocation();
  const navigate = useNavigate();

  const addToCart = useCartStore((state) => state.addToCart);

  const [qty, setQty] = useState(1);
  const [added, setAdded] = useState(false);

  if (!state || !state.product) {
    return (
      <div className="p-10 text-center">
        <p className="text-xl">Product not found</p>
        <button
          onClick={() => navigate(-1)}
          className="underline mt-4"
        >
          Go Back
        </button>
      </div>
    );
  }

  const { product } = state;

  // 🔥 Reset button state when product changes
  useEffect(() => {
    setAdded(false);
  }, [product]);

  const handleAddToCart = () => {
    addToCart({ ...product, qty });
    setAdded(true);
  };

  const similarProducts = [
    {
      id: 101,
      name: "Grey Hoodie",
      price: 1599,
      image:
        "https://image.hm.com/assets/hm/83/82/8382674e3d631141f9eeb7effd0305733e2e5cc2.jpg",
    },
    {
      id: 102,
      name: "Black Sneakers",
      price: 2299,
      image:
        "https://image.hm.com/assets/hm/17/0d/170d7e31f620a21d459e59fcdb9b33ef99cb614f.jpg",
    },
    {
      id: 103,
      name: "Classic T-Shirt",
      price: 699,
      image:
        "https://image.hm.com/assets/hm/3a/34/3a34c07b3dfd3500dfd262be127cc5808b0d1f1b.jpg",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto mt-20 px-6 space-y-16">

      {/* MAIN PRODUCT SECTION */}
      <div className="grid md:grid-cols-2 gap-14">

        {/* Image */}
        <div className="bg-gray-100 rounded-2xl p-6 flex items-center justify-center">
          <img
            src={product.image}
            alt={product.name}
            className="w-full max-h-[500px] object-cover rounded-xl"
          />
        </div>

        {/* Details */}
        <div className="space-y-6">

          <h1 className="text-4xl font-bold">{product.name}</h1>

          <p className="text-3xl font-semibold text-gray-800">
            ₹{product.price}
          </p>

          <p className="text-gray-500">
            Premium quality product with modern fit and comfortable fabric.
            Perfect for daily wear.
          </p>

          {/* Quantity Selector */}
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

          {/* ADD TO CART BUTTON */}
          <button
            onClick={handleAddToCart}
            disabled={added}
            className={`px-8 py-4 rounded-xl transition w-full md:w-auto
              ${
                added
                  ? "bg-white text-black  border cursor-not-allowed"
                  : "bg-black text-white hover:bg-gray-800"
              }
            `}
          >
            {added ? "Added ✓" : "Add to Cart"}
          </button>

          {/* Extra Info */}
          <div className="space-y-2 text-sm text-gray-600 pt-6 border-t">
            <p>🚚 Free delivery on orders above ₹2000</p>
            <p>🔁 Easy 7-day returns</p>
            <p>🔒 Secure payments</p>
          </div>
        </div>
      </div>

      {/* SIMILAR PRODUCTS */}
      <div>
        <h2 className="text-2xl font-bold mb-6">You may also like</h2>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {similarProducts.map((item) => (
            <div
              key={item.id}
              className="border rounded-xl overflow-hidden hover:shadow-lg transition cursor-pointer"
              onClick={() =>
                navigate("/product", { state: { product: item } })
              }
            >
              <img
                src={item.image}
                alt={item.name}
                className="h-60 w-full object-cover"
              />
              <div className="p-4">
                <h3 className="font-semibold">{item.name}</h3>
                <p className="text-gray-700 font-medium mt-2">
                  ₹{item.price}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
};

export default ProductPage2;
