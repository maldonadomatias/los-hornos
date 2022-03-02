import React from "react";
import classes from './CategoriesMeals.module.css'


const CategoriesMeals = (props) => {
  return (
    <div className={classes.container}>
        <div onClick={props.onAddMeal} className={classes.card}>
          <h2>Empanadas</h2>
        </div>
        <div onClick={props.onAddParrilla} className={classes.card}>
          <h2>Parrillada</h2>
        </div>
        <div onClick={props.onAddEnsalada} className={classes.card}>
          <h2>Ensaladas</h2>
        </div>
        <div onClick={props.onAddBebidas} className={classes.card}>
          <h2>Bebidas</h2>
        </div>
    </div>
  );
};

export default CategoriesMeals;
