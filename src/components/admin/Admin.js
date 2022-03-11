import React, { useState, useRef } from "react";
import CartProvider from "../../store/CartProvider";
import Orders from "./components/Orders";
import classes from "./Admin.module.css";


const isEmpty = (value) => value.trim().length === 0;

const Admin = () => {
  const isLogin = true;
  const [admission, setAdmission] = useState(false);
  const [formInputsValidity, setFormInputValidity] = useState({
    name: true,
    password: true,
  });

  const usernameInputRef = useRef();
  const passwordInputRef = useRef();

  const submitHandler = (event) => {
    event.preventDefault();
    const enteredUsername = usernameInputRef.current.value;
    const enteredPassword = passwordInputRef.current.value;

    const enteredUsernameIsValid = !isEmpty(enteredUsername);
    const enteredPasswordIsValid = !isEmpty(enteredPassword);

    setFormInputValidity({
      name: enteredUsernameIsValid,
      password: enteredPasswordIsValid,
    });

    const formIsValid = enteredUsernameIsValid && enteredPasswordIsValid;

    if (!formIsValid) {
      return;
    }

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
            setAdmission(true);
            return res.json();
          } else {
            return res.json().then((data) => {
              let errorMessage = "Auth Failed! Your password or username are incorrect!";
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
        <div
          className={`${classes.control} ${
            formInputsValidity.name ? "" : classes.invalid
          }`}
        >
          <label htmlFor="username">Usuario:</label>
          <input type="text" id="username" ref={usernameInputRef} />
          {!formInputsValidity.name && (
            <p>Porfavor ingrese un usuario correcto!</p>
          )}
        </div>
        <div
          className={`${classes.control} ${
            formInputsValidity.name ? "" : classes.invalid
          }`}
        >
          <label htmlFor="password">Contraseña:</label>
          <input type="password" id="password" ref={passwordInputRef} />
          {!formInputsValidity.password && (
            <p>Porfavor ingrese una contraseña correcta!</p>
          )}
        </div>
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
