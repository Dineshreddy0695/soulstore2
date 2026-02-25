import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useProductStore from "./store/useProductStore";
import useCartStore from "./useCartStore";

const ProductList = ({ search = "" }) => {
  const { products, fetchProducts, loading } = useProductStore();
  const cart = useCartStore((state) => state.cart);
  const addToCart = useCartStore((state) => state.addToCart);
  const [showAll, setShowAll] = useState(false);

 useEffect(() => {
  fetchProducts();
}, [fetchProducts]);

  if (loading) {
    return (
      <div className="text-center mt-20 text-lg">
        Loading products...
      </div>
    );
  }


  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(search.toLowerCase())
  );


  const visibleProducts = showAll
    ? filteredProducts
    : filteredProducts.slice(0, 4);

  return (
    <section className="max-w-7xl mx-auto px-6 py-16">
      <div className="flex items-center justify-between mb-10">
        <h1 className="text-4xl font-bold">
          New Arrivals
        </h1>

        <button
          onClick={() => setShowAll(!showAll)}
          className="px-5 py-2 border border-black rounded-full hover:bg-black hover:text-white transition"
        >
          {showAll ? "See Less" : "See All"}
        </button>
      </div>

      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
        {visibleProducts.length > 0 ? (
          visibleProducts.map((product) => {
            const isAdded = cart.some(
              (item) => item.id === product.id
            );

            return (
              <div
                key={product.id}
                className="group bg-white rounded-2xl shadow hover:shadow-lg transition"
              >
                <Link to={`/product/${product.id}`}>
                  <img
                    src={product.thumbnail}
                    alt={product.title}
                    className="h-64 w-full object-cover rounded-t-2xl"
                  />
                </Link>

                <div className="p-5">
                  <h2 className="font-semibold text-lg">
                    {product.title}
                  </h2>

                  <div className="flex justify-between items-center mt-3">
                    <span className="font-bold">
                      ₹ {product.price}
                    </span>

                    <button
                      onClick={() => {
                        if (!isAdded) addToCart(product);
                      }}
                      disabled={isAdded}
                      className={`px-4 py-2 text-sm rounded-full ${
                        isAdded
                          ? "bg-gray-200 cursor-not-allowed"
                          : "bg-black text-white"
                      }`}
                    >
                      {isAdded ? "Added" : "Add"}
                    </button>
                  </div>
                </div>
              </div>
            );
          })
        ) : (
          <div className="col-span-4 text-center text-gray-500">
            No products found
          </div>
        )}
      </div>
    </section>
  );
};

export default ProductList;
