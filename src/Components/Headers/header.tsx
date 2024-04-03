import React from 'react'


import { HeaderSection, LogoConteiner, Navigation, NavigationButton } from './header.styled'
import { Navigator } from '../Navigations/Navigation';
import LoginForm from '../Forms/LoginForm';
import RegistrationForm from '../Forms/RegistrationForm';



const Header = () => {
	return (
        <HeaderSection>
            <LogoConteiner><p>Rental<span>Cars</span></p></LogoConteiner>
			<Navigation>
				<Navigator></Navigator>
			</Navigation>
			<NavigationButton>
					<LoginForm/>
					<RegistrationForm/>
				</NavigationButton>
		</HeaderSection>
	)
}

export default Header