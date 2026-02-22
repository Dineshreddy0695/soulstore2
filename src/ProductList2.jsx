import { useState } from "react";
import useCartStore from "./useCartStore";

const ProductList2 = () => {
  const [showAll, setShowAll] = useState(false);

  const cart = useCartStore((state) => state.cart);
  const addToCart = useCartStore((state) => state.addToCart);

  const products = [
    {
      id: 1,
      title: "Black Hoodie",
      price: 999,
      thumbnail:
        "https://image.hm.com/assets/hm/83/82/8382674e3d631141f9eeb7effd0305733e2e5cc2.jpg",
    },
    {
      id: 2,
      title: "White T-Shirt",
      price: 499,
      thumbnail:
        "https://image.hm.com/assets/hm/3a/34/3a34c07b3dfd3500dfd262be127cc5808b0d1f1b.jpg",
    },
    {
      id: 3,
      title: "Printed Shirt",
      price: 799,
      thumbnail:
        "https://image.hm.com/assets/hm/fa/4e/fa4ef490806006bbcb162842f5bd05aaa412869a.jpg",
    },
    {
      id: 4,
      title: "Slim Jeans",
      price: 1199,
      thumbnail:
        "https://image.hm.com/assets/hm/39/f5/39f50424ff1a64c55510f22f1426d3a3b684c93f.jpg",
    },
    {
      id: 5,
      title: "Casual Sneakers",
      price: 1599,
      thumbnail:
        "https://image.hm.com/assets/hm/55/44/5544e3f1234567890.jpg",
    },
     {
      id: 4,
      title: "Slim Jeans",
      price: 1199,
      thumbnail:
        "https://image.hm.com/assets/hm/39/f5/39f50424ff1a64c55510f22f1426d3a3b684c93f.jpg",
    }, {
      id: 4,
      title: "Slim Jeans",
      price: 1199,
      thumbnail:
        "https://image.hm.com/assets/hm/39/f5/39f50424ff1a64c55510f22f1426d3a3b684c93f.jpg",
    },
  ];

  const visibleProducts = showAll ? products : products.slice(0, 4);

  return (
    <section className="min-w-9xl px-6 py-1">

      {/* Header */}
      <div className="flex items-center justify-between mb-10">
        <h2 className="text-3xl font-bold tracking-tight">
          Featured Collection
        </h2>

        <button
          onClick={() => setShowAll((prev) => !prev)}
          className="px-5 py-2 border border-black rounded-full hover:bg-black hover:text-white transition"
        >
          {showAll ? "See Less" : "See All"}
        </button>
      </div>

      {/* Grid */}
      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">

        {visibleProducts.map((product) => {
          const isAdded = cart.some(
            (item) => Number(item.id) === Number(product.id)
          );

          return (
            <div
              key={product.id}
              className="group bg-white rounded-2xl shadow-sm hover:shadow-xl transition duration-300"
            >
              {/* Image */}
              <div className="overflow-hidden rounded-t-2xl">
                <img
                  src={product.thumbnail}
                  alt={product.title}
                  className="h-64 w-full object-contain group-hover:scale-110 transition duration-300"
                />
              </div>

              {/* Content */}
              <div className="p-5 space-y-3">

                <h3 className="font-semibold text-lg line-clamp-1">
                  {product.title}
                </h3>

                <div className="flex items-center justify-between">

                  <span className="text-xl font-bold">
                    ₹ {product.price}
                  </span>

                  <button
                    onClick={() => {
                      if (!isAdded) addToCart(product);
                    }}
                    disabled={isAdded}
                    className={`px-4 py-2 text-sm rounded-full transition
                      ${
                        isAdded
                          ? "bg-white text-black  border cursor-not-allowed"
                          : "bg-black text-white hover:bg-gray-800"
                      }
                    `}
                  >
                    {isAdded ? "Added ✓" : "Add"}
                  </button>

                </div>

              </div>
            </div>
          );
        })}

      </div>
    </section>
  );
};

export default ProductList2;
