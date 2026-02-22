import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const ProductPage = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetch(`https://dummyjson.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, [id]);

  if (!product) return <p className="p-6">Loading...</p>;

  return (
    <div className="p-6 max-w-4xl mx-auto grid grid-cols-2 gap-8">
      <img
        src={product.thumbnail}
        alt={product.title}
        className="w-full object-cover rounded-xl"
      />
      <div>
        <h1 className="text-3xl font-semibold">{product.title}</h1>
        <p className="text-gray-500 mt-2">{product.brand}</p>
        <p className="mt-4">{product.description}</p>
        <p className="text-xl font-bold mt-4">₹ {product.price}</p>
      </div>
    </div>
  );
};

export default ProductPage;
