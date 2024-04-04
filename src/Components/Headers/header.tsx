import React from 'react'


import { HeaderSection, LogoConteiner, Navigation, NavigationButton } from './header.styled'
import { Navigator } from '../Navigations/Navigation';
import LoginForm from '../Forms/LoginForm';
import RegistrationForm from '../Forms/RegistrationForm';
import { useDispatch} from 'react-redux';
import { AppDispatch } from '../../Redax/store';
import { deleteUser} from '../../Redax/Auth/authSlice';
import { useAuth } from '../../hooks/auth';



const Header = () => {
	const dispatch: AppDispatch = useDispatch();
	const { isAuth, name } = useAuth();

	const handleLogOur = () => {
		dispatch(deleteUser());
	}

	return (
        <HeaderSection>
            <LogoConteiner><p>Rental<span>Cars</span></p></LogoConteiner>
			<Navigation>
				<Navigator></Navigator>
			</Navigation>
			<NavigationButton>
				{isAuth ?
					<>
					<p>{name}</p>
						<button type="button" onClick={handleLogOur}>Log Out</button>
						</>:
					<>
					<LoginForm/>
					<RegistrationForm />
					</>
				}
				</NavigationButton>
		</HeaderSection>
	)
}

export default Header