import React, { useState, useRef } from "react";
import CartProvider from "../../store/CartProvider";
import Orders from "./components/Orders";
import Swal from "sweetalert2";
import classes from "./Admin.module.css";

const Admin = () => {
  const [admission, setAdmission] = useState(false);

  const usernameInputRef = useRef();
  const passwordInputRef = useRef();

  const submitHandler = (event) => {
    event.preventDefault();
    console.log(admission);

    const enteredUsername = usernameInputRef.current.value;
    const enteredPassword = passwordInputRef.current.value;

    if (enteredUsername === "admin" && enteredPassword === "topsecret") {
      setAdmission(true);
      return;
    } else {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Wrong username or password",
      });
    }
  };

  const orderPassword = (
    <div className={classes.container}>
      <form className={classes.form} onSubmit={submitHandler}>
        <label htmlFor="username"></label>
        <input ref={usernameInputRef} placeholder="Username" type="text" name="username" />
        <label htmlFor="password"></label>
        <input ref={passwordInputRef} placeholder="Password" type="password" name="password" />
        <button type="submit">Enviar</button>
      </form>
    </div>
  );

  return (
    <CartProvider>
      {admission === true ? <Orders /> : orderPassword}

    </CartProvider>
  );
};

export default Admin;
