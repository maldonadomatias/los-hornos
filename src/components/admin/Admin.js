import React from "react";
import CartProvider from "../../store/CartProvider";
import Header from "../Layout/Header";
import Orders from "./components/Orders";

const Admin = () => {
  return (
    <CartProvider>
      <Orders/>
    </CartProvider>
  );
};

export default Admin;
