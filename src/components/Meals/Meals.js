import React, { useState } from "react";
import AvailableMeals from "./AvailableMeals";
import CategoriesMeals from "./CategoriesMeals";
import MealsSummary from "./MealsSummary";
import Parrillada from "./Parrillada";
import Ensalada from "./Ensalada";
import Bebidas from "./Bebidas";



const Meals = () => {
  const [meals, setMeals] = useState(0);

  const addBebidasHandler = () => {
    setMeals(4);
  }

  const addEnsaladaHandler = () => {
    setMeals(3);
  }

  const addParrillaHandler = () => {
    setMeals(2);
  }

  const addMealsHandler = () => {
    setMeals(1);
  }

  const addGoBackHandler = () => {
    setMeals(0);
  }

  return (
    <React.Fragment>
      <MealsSummary />
      {meals === 0 && <CategoriesMeals onAddMeal={addMealsHandler} onAddParrilla={addParrillaHandler} onAddEnsalada={addEnsaladaHandler} onAddBebidas={addBebidasHandler}/>}
      {meals === 1 && <AvailableMeals onGoBack={addGoBackHandler}/>}
      {meals === 2 && <Parrillada onGoBack={addGoBackHandler} />}
      {meals === 3 && <Ensalada onGoBack={addGoBackHandler} />}
      {meals === 4 && <Bebidas onGoBack={addGoBackHandler} />}
    </React.Fragment>
  );
};

export default Meals;
