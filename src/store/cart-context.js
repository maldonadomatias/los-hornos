import React from "react";

// Default data which will not actually be used but it'll give us a better autocompletion 

const CartContext = React.createContext({
  items: [],
  totalAmount: 0,
  addItem: (item) => {},
  removeItem: (id) => {},
  clearCart: () => {}
});

export default CartContext;
