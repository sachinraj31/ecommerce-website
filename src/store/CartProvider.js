import { useReducer } from "react";
import CartReducer from "./CartReducer";
import CartContext from "./cart-context";

const CartProvider = (props) => {
  console.log("Provider");

  const [cart, dispatchCart] = useReducer(CartReducer, {
    items: [],
    cartTotalAmount: 0,
  });

  const addCartHandler = (item) => {
    dispatchCart({ type: "ADD_PRODUCTS", item: item });
  };
  return (
    <CartContext.Provider
      value={{
        items: cart.items,
        onAddToCart: addCartHandler,
      }}
    >
      {props.children}
    </CartContext.Provider>
  );
};
export default CartProvider;
