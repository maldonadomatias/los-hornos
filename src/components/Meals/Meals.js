import React, { Fragment, useState } from "react";
import Empanadas from "./Empanadas";
import CategoriesMeals from "./CategoriesMeals";
import MealsSummary from "./MealsSummary";
import Parrillada from "./Parrillada";
import Ensalada from "./Ensalada";
import Bebidas from "./Bebidas";

const Meals = () => {
  const [meals, setMeals] = useState(0);

  const addBebidasHandler = () => {
    setMeals(4);
  };

  const addEnsaladaHandler = () => {
    setMeals(3);
  };

  const addParrillaHandler = () => {
    setMeals(2);
  };

  const addMealsHandler = () => {
    setMeals(1);
  };

  const addGoBackHandler = () => {
    setMeals(0);
  };

  const mealsList = (
    <>
      {meals === 0 && (
        <Fragment>
          <MealsSummary />
          <CategoriesMeals
            onAddMeal={addMealsHandler}
            onAddParrilla={addParrillaHandler}
            onAddEnsalada={addEnsaladaHandler}
            onAddBebidas={addBebidasHandler}
          />
        </Fragment>
      )}
      {meals === 1 && <Empanadas onGoBack={addGoBackHandler} />}
      {meals === 2 && <Parrillada onGoBack={addGoBackHandler} />}
      {meals === 3 && <Ensalada onGoBack={addGoBackHandler} />}
      {meals === 4 && <Bebidas onGoBack={addGoBackHandler} />}
    </>
  );

  return (
    <React.Fragment>
      {mealsList}
    </React.Fragment>
  );
};

export default Meals;
