import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";

import classes from "./Orders.module.css";

const Orders = (props) => {
  const [order, setOrder] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);


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
    };

    setInterval(() => {
      fetchOrders();
    }, 10000);

    fetchOrders().catch((error) => {
      setIsLoading(false);
      setError(error.message);
    });
  }, [order]);

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

  function deleteOrderHandler(id) {
    fetch(
      `https://menu-app-d307a-default-rtdb.firebaseio.com/orders/${id}.json`,
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
  }

  const mealsList = order.reverse().map((orders) => ( 
    <li key={orders.id} className={classes.order}>
      <div className={classes.card}>
        <div className={classes.title}>
          <h3>Cliente: {orders.user.name}</h3>
          <h2 className={classes.table}>Mesa: {orders.user.table}</h2>
        </div>
        <div>
          {orders.orderedItems.map((item) => (
            <div className={classes.description}>
              <div className={classes.comida}>
                <p>{item.name}</p>
                <p>${item.amount * item.price}</p>
              </div>
              <div>
                <p className={classes.amount}> x {item.amount}</p>
              </div>
            </div>
          ))}
        </div>
        <div className={classes.price}>
          <p>Total: {orders.total.toFixed(2)}</p>
          <button 
            value={orders.id}
            onClick={(e) => deleteOrderHandler(e.target.value)}
          >
            Finalizado
          </button>
        </div>
      </div>
    </li>
  ));

  if (mealsList.length === 0) {
    return (
      <section className={classes.orderContainer}>
        <div>
          <p className={classes.noOrders}>Lo lamento, no tienes pedidos por el momento.</p>
        </div>
      </section>
    );
  } else {
    return (
      <section className={classes.orderContainer}>
        <div>{mealsList}</div>
      </section>
    );
  }
};

export default Orders;
