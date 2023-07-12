import React from "react";
import { useState } from "react";
import Header from "./Components/Layout/Header/Header";
import ProductItem from "./Components/Products/ProductItem";
import Products from "./Components/Products/Products";
import Footer from "./Components/Layout/Footer/Footer";
import Cart from "./Components/Cart/Cart";
import CartProvider from "./store/CartProvider";

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const cartToggleHandler = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <CartProvider>
      <Header onCartToggle={cartToggleHandler} />
      {isOpen && <Cart />}
      {!isOpen && <Products />}
      <Footer />
    </CartProvider>
  );
}

export default App;
