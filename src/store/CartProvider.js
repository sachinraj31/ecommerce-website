import { useReducer } from "react";
import CartReducer from "./CartReducer";
import CartContext from "./cart-context";

const CartProvider = (props) => {
  const [cart, dispatchCart] = useReducer(CartReducer, {
    items: [],
    cartTotalAmount: 0,
  });

  const addCartHandler = (item) => {
    dispatchCart({ type: "ADD_PRODUCT", item: item });
  };

  const removeCartHandler = (id) => {
    dispatchCart({ type: "REMOVE_PRODUCT", id: id });
  };

  return (
    <CartContext.Provider
      value={{
        items: cart.items,
        cartTotalAmount: cart.cartTotalAmount,
        onAddToCart: addCartHandler,
        onRemoveFromCart: removeCartHandler,
      }}
    >
      {props.children}
    </CartContext.Provider>
  );
};
export default CartProvider;
