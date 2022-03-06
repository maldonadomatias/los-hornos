import React, { useEffect, useState } from "react";
import ClipLoader from "react-spinners/ClipLoader";

import classes from "./AvailableMeals.module.css";
import MealItem from "./MealItem";
import Card from "../UI/Card";

const Bebidas = (props) => {
  const [meals, setMeals] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [color, setColor] = useState("#ffffff");

  useEffect(() => {
    const fetchMeals = async () => {
      const response = await fetch(
        "https://menu-app-d307a-default-rtdb.firebaseio.com/Bebidas.json"
      );

      if (!response.ok) {
        throw new Error("Something went wrong!");
      }

      const responseData = await response.json();

      const loadedMeals = [];

      for (const key in responseData) {
        loadedMeals.push({
          id: key,
          name: responseData[key].name,
          description: responseData[key].description,
          price: responseData[key].price,
        });
      }
      setMeals(loadedMeals);
      setIsLoading(false);
    };

    fetchMeals().catch((error) => {
      setIsLoading(false);
      setError(error.message);
    });
  }, []);

  if (isLoading) {
    return (
      <section className={classes.mealsLoading}>
        <ClipLoader color={color} loading={loading} size={150} />
      </section>
    );
  }

  if (error) {
    const buttonBack = (
      <button className={classes.button} onClick={props.onGoBack}>
        Atrás
      </button>
    );
    return (
      <div className={classes.errorContainer}>
        <Card className={classes.mealsLoading}>
          <p>{error}</p>
          {buttonBack}
        </Card>
      </div>
    );
  }
  const mealsList = meals.map((meal) => (
    <MealItem
      id={meal.id}
      key={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));

  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealsList}</ul>
        <button className={classes.button} onClick={props.onGoBack}>
          Atrás
        </button>
      </Card>
    </section>
  );
};

export default Bebidas;
