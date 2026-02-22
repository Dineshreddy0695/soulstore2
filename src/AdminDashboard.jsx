import useProductStore from "./store/SsProduct";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const AdminDashboard = () => {
  const { products, addProduct, deleteProduct } = useProductStore();
  const [activeTab, setActiveTab] = useState("dashboard");
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    price: "",
    brand: "",
    category: "",
    image: "",
    description: "",
  });

  const handleAdd = () => {
    if (!form.name || !form.price) return;

    addProduct({
      id: Date.now(),
      ...form,
    });

    setForm({
      name: "",
      price: "",
      brand: "",
      category: "",
      image: "",
      description: "",
    });
  };

  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate("/login");
  };

  // 📊 Analytics
  const totalProducts = products.length;
  const totalBrands = [...new Set(products.map(p => p.brand))].length;
  const totalCategories = [...new Set(products.map(p => p.category))].length;
  const totalValue = products.reduce((acc, p) => acc + Number(p.price || 0), 0);

  return (
    <div className="flex min-h-screen bg-black text-white">

      {/* Sidebar */}
      <aside className="w-64 bg-gray-900 p-6 border-r border-gray-700 flex flex-col justify-between">
        <div>
          <h1 className="text-2xl font-bold mb-10">SoulStore Admin</h1>

          <nav className="flex flex-col gap-4">
            <button
              onClick={() => setActiveTab("dashboard")}
              className={`text-left transition ${
                activeTab === "dashboard"
                  ? "text-white font-bold"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              Dashboard
            </button>

            <button
              onClick={() => setActiveTab("products")}
              className={`text-left transition ${
                activeTab === "products"
                  ? "text-white font-bold"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              Products
            </button>
          </nav>
        </div>

        {/* Logout */}
        <button
          onClick={handleLogout}
          className="text-red-400 hover:text-red-600 transition"
        >
          Logout
        </button>
      </aside>

      {/* Main */}
      <main className="flex-1 p-8 space-y-12 overflow-y-auto">

        {/* ================= DASHBOARD ================= */}
        {activeTab === "dashboard" && (
          <>
            {/* 🔥 Analytics Cards */}
            <div>
              <h2 className="text-2xl font-bold mb-6">Overview</h2>

              <div className="grid grid-cols-4 gap-6">
                <StatCard title="Total Products" value={totalProducts} />
                <StatCard title="Brands" value={totalBrands} />
                <StatCard title="Categories" value={totalCategories} />
                <StatCard title="Inventory Value" value={`₹ ${totalValue}`} />
              </div>
            </div>

            {/* ➕ Add Product Form */}
            <div className="bg-gray-900 p-6 rounded-xl border border-gray-700">
              <h2 className="text-xl font-semibold mb-6">Add Product</h2>

              <div className="grid grid-cols-2 gap-4">
                <input
                  className="bg-black border border-gray-700 p-2 rounded"
                  placeholder="Product Name"
                  value={form.name}
                  onChange={(e) =>
                    setForm({ ...form, name: e.target.value })
                  }
                />

                <input
                  className="bg-black border border-gray-700 p-2 rounded"
                  placeholder="Brand"
                  value={form.brand}
                  onChange={(e) =>
                    setForm({ ...form, brand: e.target.value })
                  }
                />

                <select
                  className="bg-black border border-gray-700 p-2 rounded"
                  value={form.category}
                  onChange={(e) =>
                    setForm({ ...form, category: e.target.value })
                  }
                >
                  <option value="">Select Category</option>
                  <option value="Shirts">Shirts</option>
                  <option value="Hoodies">Hoodies</option>
                  <option value="Trousers">Trousers</option>
                  <option value="Sneakers">Sneakers</option>
                </select>

                <input
                  className="bg-black border border-gray-700 p-2 rounded"
                  placeholder="Price"
                  value={form.price}
                  onChange={(e) =>
                    setForm({ ...form, price: e.target.value })
                  }
                />

                <input
                  className="bg-black border border-gray-700 p-2 rounded col-span-2"
                  placeholder="Image URL"
                  value={form.image}
                  onChange={(e) =>
                    setForm({ ...form, image: e.target.value })
                  }
                />

                <textarea
                  placeholder="Description"
                  value={form.description}
                  onChange={(e) =>
                    setForm({ ...form, description: e.target.value })
                  }
                  className="bg-black border border-gray-700 p-2 rounded col-span-2"
                />
              </div>

              <button
                onClick={handleAdd}
                className="mt-6 bg-white text-black px-6 py-2 rounded hover:bg-gray-200 transition"
              >
                Add Product
              </button>
            </div>

            {/* 📦 Product List (also visible on dashboard) */}
            <ProductList products={products} deleteProduct={deleteProduct} />
          </>
        )}

        {/* ================= PRODUCTS TAB ================= */}
        {activeTab === "products" && (
          <ProductList products={products} deleteProduct={deleteProduct} />
        )}

      </main>
    </div>
  );
};

export default AdminDashboard;


/* ---------- Reusable Product List ---------- */
const ProductList = ({ products, deleteProduct }) => (
  <div>
    <h2 className="text-xl font-semibold mb-6">Products</h2>

    {products.length === 0 && (
      <p className="text-gray-400">No products added yet.</p>
    )}

    <div className="space-y-4">
      {products.map((p) => (
        <div
          key={p.id}
          className="flex items-center justify-between bg-gray-900 p-4 rounded-xl border border-gray-700 hover:bg-gray-800 transition"
        >
          <div className="flex items-center gap-4">
            <img
              src={p.image}
              alt={p.name}
              className="h-16 w-16 object-cover rounded"
            />
            <div>
              <h3 className="font-semibold">{p.name}</h3>
              <p className="text-gray-400 text-sm">
                {p.brand} • {p.category}
              </p>
              <p className="text-white font-bold">₹ {p.price}</p>
            </div>
          </div>

          <button
            onClick={() => deleteProduct(p.id)}
            className="text-red-400 hover:text-red-600"
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  </div>
);


/* ---------- Reusable Stat Card ---------- */
const StatCard = ({ title, value }) => (
  <div className="bg-gray-900 p-6 rounded-xl border border-gray-700 hover:scale-105 transition">
    <p className="text-gray-400">{title}</p>
    <h2 className="text-3xl font-bold mt-2">{value}</h2>
  </div>
);
