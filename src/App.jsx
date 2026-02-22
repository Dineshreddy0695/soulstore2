import { useState } from "react";
import Navbar from "./Navbar";
import ProductList from "./ProductList";
import Banner from "./Banner"
import Catogory from "./Catogory"
import Createaccount from "./CreateAccount";
import Footer from "./Footer";
import {  Routes, Route } from "react-router-dom";
import { HashRouter } from "react-router-dom";

import Hoodie from "./Shirts";
import MensTrousers from "./Catogory(products)/MensTrousers";
import Login from "./login";
import ProductPage from "./ProductPage";
import ProductList2 from "./ProductList2";
import Banner2 from "./Banner2";
import Deals from "./Deals";
import ShopByBrands from "./ShopByBrands";
import Help from "./Help";
import ProductPage2 from "./ProductPage2";
import BrandPage from "./pages/BrandPage";
import AdminDashboard from "./AdminDashboard";
import Hoodies from "./Catogory(products)/Hoodie1";
import Sneakers from "./Catogory(products)/Sneakers";

import TShirts from "./Catogory(products)/TShirt";
import Perfumes from "./Catogory(products)/Perfumes";
import Checkout from "./Checkout";
import AuthCheck from "./Auth-check";
import Register from "./Register";

function App() {
  const [search, setSearch] = useState("");

  // 🔥 REAL AUTH SYSTEM
  const storedUser = JSON.parse(localStorage.getItem("user"));
  const isauthenticated = !!storedUser;

  return (
    <HashRouter>
      <div className="min-h-screen flex flex-col">
        <Navbar search={search} setSearch={setSearch} />

        <Routes>

          <Route
            path="/"
            element={
              <>
                <Banner />
                <Catogory />
                <ProductList />
                <Banner2 />
                <ProductList2 />
                <Deals />
                <ShopByBrands />
              </>
            }
          />

          <Route path="/mens/shirts" element={<Hoodie />} />
          <Route path="/mens/hoodie" element={<Hoodies />} />
          <Route path="/mens/Tshirts" element={<TShirts />} />
          <Route path="/mens/perfumes" element={<Perfumes />} />
          <Route path="/mens/sneakers" element={<Sneakers />} />
          <Route path="/mens/trousers" element={<MensTrousers />} />

          {/* LOGIN & REGISTER */}
          <Route path="/login" element={<Login />} />
          <Route path="/registerr" element={<Register />} />

          {/* CHECKOUT (Only Logged In Users) */}
          <Route
            path="/checkout"
            element={
              <AuthCheck isauthenticated={isauthenticated} user={storedUser}>
                <Checkout />
              </AuthCheck>
            }
          />

          {/* ADMIN ROUTE */}
          <Route
            path="/admin"
            element={
              <AuthCheck isauthenticated={isauthenticated} user={storedUser}>
                <AdminDashboard />
              </AuthCheck>
            }
          />

          <Route path="/brand/:brand" element={<BrandPage />} />
          <Route path="/product/:id" element={<ProductPage />} />
          <Route path="/product" element={<ProductPage2 />} />

        </Routes>
      </div>

      <Help />
      <Footer />
    </HashRouter>
  );
}

export default App;
