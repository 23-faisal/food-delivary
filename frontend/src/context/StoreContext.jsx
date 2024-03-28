import { createContext, useEffect, useState } from "react";
import { food_list } from "../assets/assets";
import PropTypes from "prop-types";

export const StoreContext = createContext(null);

const StoreContextProvider = (props) => {
  const [cartItem, setCartItem] = useState({});

  const addToCart = (id) => {
    if (!cartItem[id]) {
      setCartItem((prev) => ({ ...prev, [id]: 1 }));
    } else {
      setCartItem((prev) => ({ ...prev, [id]: prev[id] + 1 }));
    }
  };

  const removeFromCart = (id) => {
    setCartItem((prev) => ({ ...prev, [id]: prev[id] - 1 }));
  };

  const contextValue = {
    food_list,
    cartItem,
    setCartItem,
    addToCart,
    removeFromCart,
  };

  return (
    <StoreContext.Provider value={contextValue}>
      {props.children}
    </StoreContext.Provider>
  );
};

StoreContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default StoreContextProvider;
