import React from "react";
import { useState, useContext } from "react";
import Header from "./Components/Layout/Header/Header";

import Products from "./Components/Products/Products";
import Footer from "./Components/Layout/Footer/Footer";
import Cart from "./Components/Cart/Cart";
import CartProvider from "./store/CartProvider";
import { Route, Routes, Navigate } from "react-router-dom";
import About from "./pages/About/About";
import Home from "./pages/Home/Home";
import Store from "./pages/Store/Store";
import Contact from "./pages/Contact/Contact";
import ProductDetails from "./pages/ProductDetails/ProductDetails";
import Auth from "./pages/Auth/Auth";
import AuthContext from "./store/auth-context";

function App() {
  const authCtx = useContext(AuthContext);

  return (
    <CartProvider>
      <Header />

      <Routes>
        <Route path="/shopping_cart" element={<Cart />} />
        <Route exact path="/home" element={<Navigate to="/home" />} />
        <Route exact path="/home" element={<Home />} />

        <Route exact path="/about" element={<About />} />
        <Route exact path="/contact" element={<Contact />} />
      </Routes>

      {authCtx.isLoggedIn && (
        <Routes>
          <Route exact path="/shopping_cart" element={<Cart />} />

          <Route exact path="/store" element={<Store />} />

          <Route exact path="/store/:productID" element={<ProductDetails />} />
        </Routes>
      )}

      <Routes>
        {!authCtx.isLoggedIn && <Route exact path="/auth" element={<Auth />} />}
      </Routes>

      <Footer />
    </CartProvider>
  );
}

export default App;
