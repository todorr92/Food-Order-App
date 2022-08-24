import Header from "./components/Layout/Header";
import React, { useState } from "react";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";

function App() {
  const [cartIsShown, setCartIsShown] = useState(false);

  const showCartHandler = () => {
    setCartIsShown(true);
  };

  const hideCartHandler = () => {
    setCartIsShown(false);
  };

  return (
    <React.Fragment>
      {/* onClose will close cart modal and will have to go couple of levels same as show cart below, so this would be level 1, level 2 is Cart.js component */}
      {cartIsShown && <Cart onClose={hideCartHandler} />}
      {/* showing cart modal on click of the cart located in Header.js component */}
      {/* have to go inside couple of levels, this level 1, level 2 is Header component */}
      {/* another option would be to use Context */}
      <Header onShowCart={showCartHandler} />
      <main>
        <Meals />
      </main>
    </React.Fragment>
  );
}

export default App;
