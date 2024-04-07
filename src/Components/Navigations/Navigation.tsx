import React from 'react';
import { NavigationNav } from './Navigation.styled';
import { NavLink } from 'react-router-dom';
import { useAuth } from '../../hooks/auth';

interface NavigatorProps {
    toggleMenu?: () => void;
}


export const Navigator = ({ toggleMenu }: NavigatorProps) => {

  const { isAuth } = useAuth();


   const handleButtonClick = () => {
     if (toggleMenu) {
            toggleMenu();
        }
  };

  return (
    <NavigationNav>
		  <NavLink onClick={handleButtonClick} className={({isActive}) =>
			  [
				isActive ? "active" : "",
			  ].join(" ")} to="/">
        Home
      </NavLink>
      <NavLink  onClick={handleButtonClick} className={({isActive}) =>
			  [
				isActive ? "active" : "",
			  ].join(" ")}  to="/teachers">
        Teachers
      </NavLink>
      {isAuth && (
        <NavLink onClick={handleButtonClick} className={({ isActive }) =>
          [
            isActive ? "active" : "",
          ].join(" ")} to="/favorites">
          Favorites
        </NavLink>)
        }
    </NavigationNav>
  );
};
