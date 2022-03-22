import React from "react";
import classes from "./Header.module.css";
import HeaderCardButton from "./HeaderCardButton";
import { Link } from "react-router-dom";

const Header = (props) => {
  return (
    <React.Fragment>
      <header className={classes.header}>
          <div>
            <Link to='/'>
              <h1>LOS HORNOS</h1>
            </Link>
          </div>
          <HeaderCardButton onClick={props.onShowCart}/>
      </header>
     
    </React.Fragment>
  );
};

export default Header;
