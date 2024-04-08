
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

	a:hover,
	a:focus{
		color: var(--button-color);
	}

	.active{
		color: var(--button-color);
		border-color: var(--button-color);		
	}

	@media(max-width: 700px){
		flex-direction: column;
		gap: 10px;
		align-items: flex-start;
		
		}
`