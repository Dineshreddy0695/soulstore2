import { create } from "zustand";

const useCartStore = create((set) => ({
  cart: [],

  addToCart: (product) =>
    set((state) => ({
      cart: [...state.cart, product],
    })),

  removeFromCart: (id) =>
    set((state) => ({
      cart: state.cart.filter((item) => item.id !== id),
    })),
    cartitems: (item) =>
    set((state) => ({
      cartitems: [...state.cartitems, item],
    })),

    cartTotal: (state) =>
    state.cart.reduce((total, item) => total + item.price, 0),
}));

export default useCartStore;
