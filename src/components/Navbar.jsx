import React, { useEffect } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { FiShoppingCart } from "react-icons/fi";
import { BsChatLeft } from "react-icons/bs";
import { RiNotification3Line } from "react-icons/ri";
import { MdKeyboardArrowDown } from "react-icons/md";

import { TooltipComponent } from "@syncfusion/ej2-react-popups";

import avatar from "../data/avatar.jpg";
import { Chat, Cart, Notification, UserProfile } from ".";
import { useStateContext } from "../contexts/ContextProvider";

// NavButton Function
const NavButton = ( { title , customFunc , icon , color , dotColor } ) => (
  <TooltipComponent content={title} position="BottomCenter">
    <button type="button" onClick={ customFunc } style={{ color }} className="relative text-xl rounded-full p-3 hover:bg-light-gray">
      <span style={ {background: dotColor} } className="absolute inline-flex rounded-full h-2 w-2 right-2 top-2" ></span>
      { icon }
    </button>
  </TooltipComponent>
)

const Navbar = () => {

  // Global States and their Sets We Have in this Component
  const { activeMenu, setActiveMenu , isClicked, setIsClicked , handleClick , screenSize, setScreenSize } = useStateContext();

  // setScreenSize = Sceen Width 
  useEffect( () => {

    const handleResize = () => setScreenSize( window.innerWidth );

    window.addEventListener( 'resize' , handleResize );

    handleResize();

    return () => window.removeEventListener( 'resize' , handleResize );

  } , [] )

  // Make Sidebar Change Automatically by SceenWidth
  useEffect( () => {

    if ( screenSize <= 900 ) {
      setActiveMenu(false);
    }
    else {
      setActiveMenu(true);
    }

  } , [screenSize] );


  return (
    <div className="flex justify-between p-2 md:mx-6 relative">
      
      {/* Toggle Sidebar Button */}
      <NavButton title='Menu' customFunc={ () => setActiveMenu( prevActionMenu => ! prevActionMenu ) } color='blue' icon={ <AiOutlineMenu/> } />

      {/* Start Navbar Buttons */}
      <div className="flex">
        
        <NavButton title='Cart' customFunc={ () => handleClick('cart') } color='blue' icon={ <FiShoppingCart/> } />
        <NavButton title='Chat' customFunc={ () => handleClick('chat') } color='blue' icon={ <BsChatLeft/> } dotColor='#03C9D7' />
        <NavButton title='Notifications' customFunc={ () => handleClick('notification') } color='blue' icon={ <RiNotification3Line/> } dotColor='#03C9D7' />

        {/* User Profile Button */}
        <TooltipComponent content='Profile' position="BottomCenter">
          <div className="flex items-center gap-2 cursor-pointer p-1 hover:bg-light-gray rounded-lglg" onClick={ () => handleClick('userProfile') }>
            <img src={avatar} alt="" className="rounded-full w-8 h-8" />
            <p>
              <span className="text-gray-400 text-14">Hi, </span>
              {' '}
              <span className="text-gray-400 text-14 font-bold ml-1 ">Michael</span>
            </p>
            <MdKeyboardArrowDown className="text-gray-400 text-14"/>
          </div>
        </TooltipComponent>

        {/* Conditional Rendering */}
        { isClicked.cart && <Cart/> }
        { isClicked.chat && <Chat/> }
        { isClicked.notification && <Notification/> }
        { isClicked.userProfile && <UserProfile/> }

      </div>
      {/* End Navbar Buttons */}

    </div>
  );
};

export default Navbar;
