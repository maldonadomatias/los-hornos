import React, { useState, useRef } from "react";
import CartProvider from "../../store/CartProvider";
import Orders from "./components/Orders";
import classes from "./Admin.module.css";

const Admin = () => {
  const [admission, setAdmission] = useState(false);

  // 2.
  const [isLogin, setIsLogin] = useState(true);

  const switchAuthModeHandler = () => {
    setIsLogin((prevState) => !prevState);
  };

  const usernameInputRef = useRef();
  const passwordInputRef = useRef();

  const submitHandler = (event) => {
    event.preventDefault();
    const enteredUsername = usernameInputRef.current.value;
    const enteredPassword = passwordInputRef.current.value;

    // 1.
    // if (enteredUsername === "admin" && enteredPassword === "topsecret") {
    //   setAdmission(true);
    //   return;
    // } else {
    //   Swal.fire({
    //     icon: "error",
    //     title: "Oops...",
    //     text: "Wrong username or password",
    //   });
    // }

    // 2.
    if (isLogin) {
      fetch(
        "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCE-NN0_hCxEZoa3F45IjZOL5m_SVG64tQ",
        {
          method: "POST",
          body: JSON.stringify({
            email: enteredUsername,
            password: enteredPassword,
            retureSecureToken: true,
          }),
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
        .then((res) => {
          if (res.ok) {
            setAdmission(true)
            return res.json();
          } else {
            return res.json().then((data) => {
              let errorMessage = "Auth Failed!";
              //
              console.log(data);
              throw new Error(errorMessage);
            });
          }
        })
        .then((data) => {
          console.log(data);
        })
        .catch((err) => {
          alert(err.message);
        });
    }
  };

  const orderPassword = (
    <div className={classes.container}>
      <form className={classes.form} onSubmit={submitHandler}>
        <label htmlFor="username"></label>
        <input
          ref={usernameInputRef}
          placeholder="Username"
          type="text"
          name="username"
        />
        <label htmlFor="password"></label>
        <input
          ref={passwordInputRef}
          placeholder="Password"
          type="password"
          name="password"
        />
        <button type="submit">Enviar</button>
      </form>
    </div>
  );

  return (
    <main>
      <CartProvider>
        {admission === true ? <Orders /> : orderPassword}
      </CartProvider>
    </main>
  );
};

export default Admin;
