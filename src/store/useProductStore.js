import { create } from "zustand";

const useProductStore = create((set) => ({
  products: [],
  loading: false,

  fetchProducts: async () => {
    set({ loading: true });
    try {
      const res = await fetch("https://dummyjson.com/products?limit=100");
      const data = await res.json();
      set({ products: data.products, loading: false });
    } catch (err) {
      console.error(err);
      set({ loading: false });
    }
  },
}));

export default useProductStore;
