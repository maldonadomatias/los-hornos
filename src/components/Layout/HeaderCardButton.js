import React, { useContext, useEffect, useState } from "react";
import classes from "./HeaderCardButton.module.css";

import CartIcon from "../Cart/CartIcon";
import CartContext from "../../store/cart-context";

const HeaderCardButton = (props) => {
  const [btnIsAnimated, setBtnIsAnimated] = useState(true);
  const cartCtx = useContext(CartContext);
  const {items} = cartCtx;

  const numberOfCartItems = items.reduce((curNumber, item) => {
    return curNumber + item.amount;
  }, 0);


  const btnClasses = `${classes.button} ${btnIsAnimated ? classes.bump : ''}`;

  useEffect(() => {
    if(items.length === 0){
      return;
    }
    setBtnIsAnimated(true)

    const timer = setTimeout(() => {
      setBtnIsAnimated(false)
    }, 300);

    return () => {
      clearTimeout(timer);
    };
  }, [items]);
  
  return (
    <button onClick={props.onClick} className={btnClasses}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Tu Pedido</span>
      <span className={classes.badge}>{numberOfCartItems}</span>
    </button>
  );
};

export default HeaderCardButton;
