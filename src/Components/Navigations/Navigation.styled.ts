
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

	@media(max-width: 700px){
		flex-direction: column;
		gap: 10px;
		align-items: flex-start;
		
		}
`