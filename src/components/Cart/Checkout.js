import { useRef, useState } from "react";
import classes from "./Checkout.module.css";

const isEmpty = (value) => value.trim().length === 0;

const Checkout = (props) => {
  const [formInputsValidity, setFormInputValidity] = useState({
    name: true,
    table: true
  });
  const nameInputRef = useRef();
  const tableInputRef = useRef();

  const confirmHandler = (event) => {
    event.preventDefault();

    const enteredName = nameInputRef.current.value;
    const enteredTable = tableInputRef.current.value;


    const enteredNameIsValid = !isEmpty(enteredName);
    const enteredTableIsValid = !isEmpty(enteredTable);


    setFormInputValidity({
      name: enteredNameIsValid,
      table: enteredTableIsValid
    });

    const formIsValid = enteredNameIsValid && enteredTableIsValid

    if (!formIsValid) {
      return;
    }

    props.onConfirm({
        name: enteredName,
        table: enteredTable
    });
  };

  return (
    <form className={classes.form} onSubmit={confirmHandler}>
      <div className={`${classes.control} ${formInputsValidity.name ? '' : classes.invalid}`}>
        <label htmlFor="name">Nombre:</label>
        <input type="text" id="name" ref={nameInputRef} />
        {!formInputsValidity.name && <p>Please enter a valid name!</p>}
      </div>
      <div className={`${classes.control} ${formInputsValidity.name ? '' : classes.invalid}`}>
        <label>Número de mesa:</label>
        <input type='number' id="table" ref={tableInputRef}/>
      </div>
      <div className={classes.actions}>
        <button type="button" onClick={props.onCancel}>
          Cancel
        </button>
        <button className={classes.submit}>Confirm</button>
      </div>
    </form>
  );
};

export default Checkout;
