import React from 'react';
import classes from './MealsSummary.module.css';

const MealsSummary = () => {
  return (
    <section className={classes.summary}>
      <h2>32 años compartiendo sabores</h2>
      <p>
      Desde 1989 ofreciendo las mejores empanadas de la provincia, además contamos con distintos cortes de carne hechos a la parrilla con productos de primera calidad.
      </p>
    </section>
  );
};

export default MealsSummary;