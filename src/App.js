import { useState } from "react";
import Cart from "./components/Cart/Cart";
import Footer from "./components/Layout/Footer";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import CartProvider from "./store/CartProvider";
import Admin from "./components/admin/Admin";

function App() {

  // Two handler to show or not the Cart when you click on the cart icon
  const [cartIsShown, setCartIsShown] = useState(false);

  const showCartHandler = () => {
    setCartIsShown(true);
  };

  const hideCartHandler = () => {
    setCartIsShown(false);
  };

  // This is client side frontend, to order the food
  return (
    <CartProvider>
      {cartIsShown && <Cart onClose={hideCartHandler} />}
      <Header onShowCart={showCartHandler} />
      <main style={{minHeight: '100vh'}}>
        <Meals />
      </main>
      <Footer />
    </CartProvider>
  );
}

export default App;
