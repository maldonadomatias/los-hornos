import React, { useEffect, useState, useContext } from "react";
import Swal from "sweetalert2";

import classes from "./Orders.module.css";
import CartContext from "../../../store/cart-context";
const Orders = (props) => {
  const [order, setOrder] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const cartCtx = useContext(CartContext);

  const addClearHandler = () => {
    cartCtx.clearCart();
  };

  useEffect(() => {
    const fetchOrders = async () => {
      const response = await fetch(
        "https://menu-app-d307a-default-rtdb.firebaseio.com/orders.json"
      );

      if (!response.ok) {
        throw new Error("Something went wrong!");
      }

      const responseData = await response.json();
      
      const loadedOrders = [];
      

      for (const key in responseData) {
        // console.log(responseData[key].orderedItems)
        loadedOrders.push({
          id: key,
          orderedItems: responseData[key].orderedItems,
          total: responseData[key].total,
          user: responseData[key].user,
        });
      }
      setOrder(loadedOrders);
      setIsLoading(false);
      console.log(loadedOrders);


    };
    
    setInterval(() => {
      fetchOrders()
    }, 10000);

    fetchOrders().catch((error) => {
      setIsLoading(false);
      setError(error.message);
    });
  }, []);

  if (isLoading) {
    return (
      <section className={classes.mealsLoading}>
        <p>Loading...</p>
      </section>
    );
  }

  if (error) {
    return (
      <section className={classes.mealsLoading}>
        <p>
          {Swal.fire({
            icon: "error",
            title: "Oops...",
            text: error,
          })}
        </p>
      </section>
    );
  }

  const mealsList = order.reverse().map((orders) => (
    <li className={classes.order}>
      <div className={classes.card}>
        <h3>{orders.user.name}</h3>
        <div>
          {orders.orderedItems.map((item) => (
            <div className={classes.description}>
              <div>
                <p>{item.name}</p>
                <p>{item.amount * item.price}</p>
              </div>
              <div>
                <p className={classes.amount}> x {item.amount}</p>
              </div>
            </div>
          ))}
        </div>
        <div className={classes.price}>
          <p>Total: {orders.total.toFixed(2)}</p>
          <button onClick={addClearHandler}>Eliminar</button>
        </div>
      </div>
    </li>
  ));

  return (
    <section className={classes.orderContainer}>
      <div>{mealsList}</div>
    </section>
  );
};

export default Orders;
