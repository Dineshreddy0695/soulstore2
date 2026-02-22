import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useProductStore from "./store/useProductStore";
import useCartStore from "./useCartStore";

const ProductList = () => {
  const { products, fetchProducts, loading } = useProductStore();
  const cart = useCartStore((state) => state.cart);
  const addToCart = useCartStore((state) => state.addToCart);
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  if (loading) {
    return (
      <div className="text-center mt-20 text-lg animate-pulse">
        Loading products...
      </div>
    );
  }

  const visibleProducts = showAll ? products : products.slice(0, 4);

  return (
    <section className="max-w-7xl mx-auto px-6 py-16">

      {/* Header */}
      <div className="flex items-center justify-between mb-10">
        <h1 className="text-4xl font-bold tracking-tight">
          New Arrivals
        </h1>

        <button
          onClick={() => setShowAll((prev) => !prev)}
          className="px-5 py-2 border border-black rounded-full hover:bg-black hover:text-white transition"
        >
          {showAll ? "See Less" : "See All"}
        </button>
      </div>

      {/* Product Grid */}
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
              <Link to={`/product/${product.id}`}>
                <div className="overflow-hidden rounded-t-2xl">
                  <img
                    src={
                      product.thumbnail ||
                      "https://via.placeholder.com/300"
                    }
                    alt={product.title}
                    className="h-64 w-full object-cover group-hover:scale-110 transition duration-300"
                  />
                </div>
              </Link>

              {/* Content */}
              <div className="p-5 space-y-3">

                <h2 className="font-semibold text-lg line-clamp-1">
                  {product.title}
                </h2>

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
                          ?  "bg-white text-black  border cursor-not-allowed"
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

export default ProductList;
