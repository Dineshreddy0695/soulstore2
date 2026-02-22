import { useEffect } from "react";
import useProductStore from "../store/useProductStore";

const Products = () => {
  const { products, fetchProducts, loading, error } = useProductStore();

  useEffect(() => {
    fetchProducts();
  }, []);

  if (loading) return <p>Loading products...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="grid grid-cols-4 gap-6 p-6">
      {products.map((product) => (
        <div
          key={product.id}
          className="border rounded-lg p-4 shadow"
        >
          <img
            src={product.thumbnail}
            alt={product.title}
            className="h-40 mx-auto object-cover"
          />
          <h2 className="font-semibold mt-2">{product.title}</h2>
          <p className="text-gray-600">₹ {product.price}</p>
        </div>
      ))}
    </div>
  );
};

export default Products;
