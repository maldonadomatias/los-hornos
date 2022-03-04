import { useState } from "react";
import Cart from "./components/Cart/Cart";
import Footer from "./components/Layout/Footer";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import CartProvider from "./store/CartProvider";
import Admin from "./components/admin/Admin";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const [cartIsShown, setCartIsShown] = useState(false);

  const showCartHandler = () => {
    setCartIsShown(true);
  };

  const hideCartHandler = () => {
    setCartIsShown(false);
  };

  const app = (
    <CartProvider>
      {cartIsShown && <Cart onClose={hideCartHandler} />}
      <Header onShowCart={showCartHandler} />
      <main>
        <Meals />
      </main>
      <Footer />
    </CartProvider>
  );

  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={app} />
        <Route exact path="/admin" element={<Admin />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
