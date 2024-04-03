import React from 'react';
import { NavigationNav } from './Navigation.styled';
import { NavLink } from 'react-router-dom';

export const Navigator = () => {
  return (
    <NavigationNav>
		  <NavLink className={({isActive}) =>
			  [
				isActive ? "active" : "",
			  ].join(" ")} to="/">
        Home
      </NavLink>
      <NavLink className={({isActive}) =>
			  [
				isActive ? "active" : "",
			  ].join(" ")}  to="/teachers">
        Teachers
      </NavLink>
      <NavLink className={({isActive}) =>
			  [
				isActive ? "active" : "",
			  ].join(" ")} to="/favorites">
        Favorites
      </NavLink>
    </NavigationNav>
  );
};
