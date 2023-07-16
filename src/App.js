import React from "react";
import { useState } from "react";
import Header from "./Components/Layout/Header/Header";
import ProductItem from "./Components/Products/ProductItem";
import Products from "./Components/Products/Products";
import Footer from "./Components/Layout/Footer/Footer";
import Cart from "./Components/Cart/Cart";
import CartProvider from "./store/CartProvider";
import { Route, Routes } from "react-router-dom";
import About from "./pages/About/About";
import Home from "./pages/Home/Home";
import Store from "./pages/Store/Store";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const cartToggleHandler = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <CartProvider>
      <Header onCartToggle={cartToggleHandler} />
      {isOpen && <Cart />}
      {!isOpen && (
        <>
          <Routes>
            <Route path="/shopping_cart" element={<Cart />} />
            <Route path="/home" element={<Home />} />
            <Route path="/store" element={<Store />} />
            <Route path="/about" element={<About />} />{" "}
          </Routes>
        </>
      )}
      <Footer />
    </CartProvider>
  );
}

export default App;
