import React from "react";
import classes from "./Header.module.css";
import mealsImage from "../../assests/meals.jpg";
import HeaderCartButton from "./HeaderCartButton";

const Header = (props) => {
  return (
    <React.Fragment>
      <header className={classes.header}>
        <h1>ReactMeals</h1>
        {/* Level 2, level 1 is in App.js and level 3 is HeaderCartButton component*/}
        <HeaderCartButton onClick={props.onShowCart} />
      </header>
      {/* class name is in square brackets because of - in class name */}
      <div className={classes["main-image"]}>
        <img src={mealsImage} alt="Foooooood!" />
      </div>
    </React.Fragment>
  );
};

export default Header;
