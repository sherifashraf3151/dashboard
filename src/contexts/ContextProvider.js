import React, { createContext, useContext, useState } from "react";

const StateContext = createContext();

// The initial State For Navbar Buttons
const initialState = {
  chat: false,
  cart: false,
  userProfile: false,
  notification: false,
};

export const ContextProvider = ({ children }) => {

  // State To Open And Close Sidebar Menu
  const [activeMenu, setActiveMenu] = useState(true);

  // To Choose Opened Navbar Button
  const [isClicked, setIsClicked] = useState(initialState);

  // Reset all states to false by this Copy ...initialState and open the selected one
  const handleClick = ( clicked ) => { setIsClicked( { ...initialState , [ clicked ] : true } ); };
  const closeClicked = (clicked) => {
  setIsClicked({ ...initialState, [clicked]: false });
};

  // Theme Settings Values and Sets Functions
  const [currentColor, setCurrentColor] = useState('#03C9D7');
  const [currentMode, setCurrentMode] = useState('Light');
  const [themeSettings, setThemeSettings] = useState(false);
  const setMode = (e) => {
    setCurrentMode( e.target.value );
    localStorage.setItem('themeMode' , e.target.value );
    setThemeSettings(false);
  }
  const setColor = (color) => {
    setCurrentColor( color );
    localStorage.setItem('themeColor' , color );
    setThemeSettings(false);
  }

  // To Handle Screen Size For Sidebar
  const [screenSize, setScreenSize] = useState(undefined);

  return (
    <StateContext.Provider
      // Share States And Her Sets To all Components
      value={{ activeMenu, setActiveMenu , isClicked, setIsClicked , handleClick , closeClicked, screenSize , setScreenSize , setCurrentColor, setCurrentMode, setMode, setColor, currentColor , currentMode , themeSettings , setThemeSettings }}>
      {children}
    </StateContext.Provider>
  );
};

// Custom Hook To Use StateContext Easly
// Use it Like this      const { activeMenu } = useStateContext();
// Not like this         const context = useContext(StateContext);
export const useStateContext = () => useContext(StateContext);
