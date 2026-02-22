import { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import useProductStore from "../store/useProductStore";

const BrandPage = () => {
  const { brand } = useParams();
  const { products, fetchProducts, loading } = useProductStore();

  useEffect(() => {
    if (products.length === 0) {
      fetchProducts();
    }
  }, [fetchProducts, products.length]);

  const filteredProducts = products.filter(
    (p) =>
      p.brand &&
      p.brand.toLowerCase() === brand.toLowerCase()
  );

  if (loading) return <p className="p-6">Loading...</p>;

  return (
    <div className="p-6">
      <h1 className="text-3xl font-semibold mb-6">
        {brand.toUpperCase()}
      </h1>

      {filteredProducts.length === 0 ? (
        <p>No products found for this brand.</p>
      ) : (
        <div className="grid grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <Link
              key={product.id}
              to={`/product/${product.id}`}
              className="border p-4 rounded-xl hover:shadow-md transition block"
            >
              <img
                src={product.thumbnail}
                alt={product.title}
                className="h-40 mx-auto object-cover"
              />
              <h2 className="mt-2 font-medium">{product.title}</h2>
              <p className="text-sm text-gray-500">{product.brand}</p>
              <p className="font-semibold mt-1">₹ {product.price}</p>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default BrandPage;
