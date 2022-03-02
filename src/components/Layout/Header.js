import React from "react";
import classes from "./Header.module.css";
import mealsImage from '../../assets/tuc.jpg'
import HeaderCardButton from "./HeaderCardButton";

const Header = (props) => {
  return (
    <React.Fragment>
      <header className={classes.header}>
          <div>
            <h1>LOS HORNOS</h1>
          </div>
          <HeaderCardButton onClick={props.onShowCart}/>
      </header>
        <div className={classes['main-image']}>
            <img src={mealsImage} alt='Food table'/>
        </div>
    </React.Fragment>
  );
};

export default Header;
