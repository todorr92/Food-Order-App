import React from "react";
import classes from "./Header.module.css";
import mealsImage from "../../assests/meals.jpg";
import HeaderCartButton from "./HeaderCartButton";

const Header = (props) => {
  return (
    <React.Fragment>
      <header className={classes.header}>
        <h1>ReactMeals</h1>
        <HeaderCartButton />
      </header>
      {/* class name is in square brackets because of - in class name */}
      <div className={classes["main-image"]}>
        <img src={mealsImage} alt="Foooooood!" />
      </div>
    </React.Fragment>
  );
};

export default Header;
