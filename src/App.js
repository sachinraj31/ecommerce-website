import React from "react";
import { useState } from "react";
import Header from "./Components/Layout/Header/Header";

import Products from "./Components/Products/Products";
import Footer from "./Components/Layout/Footer/Footer";
import Cart from "./Components/Cart/Cart";
import CartProvider from "./store/CartProvider";
import { Route, Routes } from "react-router-dom";
import About from "./pages/About/About";
import Home from "./pages/Home/Home";
import Store from "./pages/Store/Store";
import Contact from "./pages/Contact/Contact";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <CartProvider>
      <Header />

      <Routes>
        <Route path="/shopping_cart" element={<Cart />} />
        <Route path="/home" element={<Home />} />
        <Route path="/store" element={<Store />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      <Footer />
    </CartProvider>
  );
}

export default App;
