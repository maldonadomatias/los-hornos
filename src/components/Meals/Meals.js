import React, { Fragment, useState } from "react";
import AvailableMeals from "./AvailableMeals";
import CategoriesMeals from "./CategoriesMeals";
import MealsSummary from "./MealsSummary";

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

  // Apis menu

  const empanadaApi = process.env.REACT_APP_FIREBASE_EMPANADAS;
  const parrilladaApi = process.env.REACT_APP_FIREBASE_PARRILLADA
  const ensaladaApi = process.env.REACT_APP_FIREBASE_ENSALADAS
  const bebidaApi = process.env.REACT_APP_FIREBASE_BEBIDAS

  // Make buttons functional into API's
  
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
      {meals === 1 && <AvailableMeals onGoBack={addGoBackHandler} api={empanadaApi} />}
      {meals === 2 && <AvailableMeals onGoBack={addGoBackHandler} api={parrilladaApi}/>}
      {meals === 3 && <AvailableMeals onGoBack={addGoBackHandler} api={ensaladaApi}/>}
      {meals === 4 && <AvailableMeals onGoBack={addGoBackHandler} api={bebidaApi}/>}
    </>
  );

  return (
    <React.Fragment>
      {mealsList}
    </React.Fragment>
  );
};

export default Meals;
