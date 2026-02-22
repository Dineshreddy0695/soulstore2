import { useState } from "react";
import useProductStore from "./store/SsProduct";

const AdminProducts = () => {
  const { products, addProduct, deleteProduct } = useProductStore();

  const [form, setForm] = useState({
    name: "",
    price: "",
    image: "",
    description: "",
  });

  const handleAdd = () => {
    addProduct({
      id: Date.now(),
      ...form,
    });

    setForm({ name: "", price: "", image: "", description: "" });
  };

  return (
    <div className="p-6 grid grid-cols-2 gap-10">


      <div>
        <h2 className="text-2xl font-semibold mb-4">Add Product</h2>

        <input
          placeholder="Name"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          className="border p-2 mb-2 w-full"
        />

        <input
          placeholder="Price"
          value={form.price}
          onChange={(e) => setForm({ ...form, price: e.target.value })}
          className="border p-2 mb-2 w-full"
        />

        <input
          placeholder="Image URL"
          value={form.image}
          onChange={(e) => setForm({ ...form, image: e.target.value })}
          className="border p-2 mb-2 w-full"
        />

        <textarea
          placeholder="Description"
          value={form.description}
          onChange={(e) => setForm({ ...form, description: e.target.value })}
          className="border p-2 mb-2 w-full"
        />

        <button
          onClick={handleAdd}
          className="bg-black text-white px-4 py-2 rounded"
        >
          Add Product
        </button>
      </div>


      <div>
        <h2 className="text-2xl font-semibold mb-4">Products</h2>

        {products.map((p) => (
          <div
            key={p.id}
            className="border p-3 rounded mb-3 flex justify-between"
          >
            <div>
              <p className="font-semibold">{p.name}</p>
              <p>₹ {p.price}</p>
              <p className="text-sm text-gray-500">{p.description}</p>
            </div>

            <button
              onClick={() => deleteProduct(p.id)}
              className="text-red-500"
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminProducts;
