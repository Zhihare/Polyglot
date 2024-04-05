import React from 'react'


import { HeaderSection, HeaderWrapper, LogoConteiner, Navigation} from './header.styled'
import { Navigator } from '../Navigations/Navigation';
import { Link } from 'react-router-dom';


import BurgerMenu from '../Burger-menu/BurgerMenu';
import HeaderButton from './headerButton';





const Header = () => {
	

	return (
        <HeaderSection>
			
				 <Link to="/">
				<LogoConteiner>
				<img src={require('../Img/image.png')} alt="ukrain" />
				<p>LearnLingo</p>
				</LogoConteiner>
			</Link>
			<BurgerMenu/>
		
			<Navigation>
				<Navigator></Navigator>
			</Navigation>
			<HeaderWrapper>
			<HeaderButton/>
			</HeaderWrapper>
		</HeaderSection>
	
	)
}

export default Header