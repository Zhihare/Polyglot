import styled from "styled-components";


export const HeaderSection = styled.header`

@media(max-width: 600px){
	background-color: white;
	border-top: 1px solid grey;
	position: fixed;
    z-index: 10;
    bottom: 0;
    left: 0;
	height: 60px;
width:100%;
display: flex;
justify-content:center;
align-items: center;
color: black;

	a{
			text-decoration: none;
	 		transition-duration: .8s;
			color:black;
		}
}
	


@media(min-width: 600px){
	display: flex;
    justify-content: space-between;
	max-width: 1200px;
	margin-right: auto;
    margin-left: auto;
	color: var(----button-color-hover);
	padding: 15px 0; 
}
`

export const LogoConteiner = styled.div`
@media(max-width: 600px){
	display: none;
}
margin-left: 20px;

p{
	font-family: "Poppins", sans-serif;
    font-weight: 200;
	color: black;
	font-size: 28px;
	padding: 5px; 
	border: 1px solid #1a1a1a;
  border-radius: 8px;
  box-sizing: border-box;
}

span{
	color: var(--button-color);
	border-radius: 8px;

	
}

`

export const Navigation = styled.div`
display: flex;
justify-content: center;
align-items: center;


@media(max-width: 600px){
	margin: auto;
	
}

`

export const NavigationButton = styled.div`
display: flex;
align-items: center;
gap: 20px;
`