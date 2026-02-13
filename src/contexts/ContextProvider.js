import React, { createContext, useContext, useState } from "react";

const StateContext = createContext();

const initialState = {
  chat: false,
  cart: false,
  userProfile: false,
  notification: false,
};

export const ContextProvider = ({ children }) => {
  const [activeMenu, setActiveMenu] = useState(true);

  return (
    <StateContext.Provider
      // Share activeMenu, setActiveMenu State To all Components
      value={{ activeMenu, setActiveMenu }}>
      {children}
    </StateContext.Provider>
  );
};

// Custom Hook To Use StateContext Easly
// Use it Like this      const { activeMenu } = useStateContext();
// Not like this         const context = useContext(StateContext);
export const useStateContext = () => useContext(StateContext);
