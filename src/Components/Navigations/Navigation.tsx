import React from 'react';
import { NavigationNav } from './Navigation.styled';
import { NavLink } from 'react-router-dom';
import { useAuth } from '../../hooks/auth';

export const Navigator = () => {

  const { isAuth } = useAuth();

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
      {isAuth && (
        <NavLink className={({ isActive }) =>
          [
            isActive ? "active" : "",
          ].join(" ")} to="/favorites">
          Favorites
        </NavLink>)
        }
    </NavigationNav>
  );
};
