
import styled from "styled-components";

export const NavigationNav = styled.nav`
	display: flex;
    justify-content: space-around;
	align-items: center;
	gap: 20px;

		a{
			color: black;
			padding: 6px;
			border-bottom: 2px solid transparent;
	}
	.active{
		color: blue;
		border-color: blue;		
	}
`