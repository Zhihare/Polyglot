import React from 'react'
import { AppDispatch } from '../../Redax/store';
import { useDispatch } from 'react-redux';
import { useAuth } from '../../hooks/auth';
import { deleteUser } from '../../Redax/Auth/authSlice';
import { NavigationButton } from './header.styled';
import { ButtonFormContainer } from '../Forms/LoginForm.styled';
import LoginForm from '../Forms/LoginForm';
import RegistrationForm from '../Forms/RegistrationForm';

import { CiLogout } from "react-icons/ci";
import { useNavigate } from 'react-router-dom';
import { setFavorites } from '../../Redax/teacherSlice';

interface HeaderButtonProps {
    toggleMenu?: () => void;
}


const HeaderButton = ({ toggleMenu }: HeaderButtonProps) => {
	const dispatch: AppDispatch = useDispatch();
	const { isAuth, name, email } = useAuth();
	const navigate = useNavigate();

	const handleLogOur = () => {
		dispatch(deleteUser());
		navigate('/');
	}

  return (
    <NavigationButton>
				{isAuth ?
					<>
						<p>{name ? name : email}</p>
						<ButtonFormContainer>
							<button type="button" onClick={handleLogOur}><CiLogout />Log Out</button>
						</ButtonFormContainer>

						</>:
					<>
				  	<LoginForm toggleMenu={toggleMenu}/>
					<RegistrationForm/>
					</>
				}
				</NavigationButton>
  )
}

export default HeaderButton