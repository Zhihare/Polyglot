	import styled from "styled-components";


export const HeaderSection = styled.header`
display: flex;
justify-content: space-between;
align-items: center;
flex-wrap: wrap;

@media(min-width: 700px){
	max-width: 1184px;
	margin-right: auto;
    margin-left: auto;
	color: var(----button-color-hover);
}
`

export const LogoConteiner = styled.div`
display: flex;
align-items: center;
gap: 5px;


p{
    font-weight: 500;
	color: var(--text-color);
	font-size: 20px;
  	box-sizing: border-box;
}

img{
	width: 28px;
	height: 28px;
}


`

export const HeaderWrapper = styled.div`
@media(max-width: 700px){
	display: none;
}
`

export const Navigation = styled.div`
display: flex;
justify-content: center;
align-items: center;


@media(max-width: 700px){
display: none;
}

`

export const NavigationButton = styled.div`
display: flex;
align-items: center;
gap: 16px;

p{	
	position: relative;
	border-radius: 2px;
	font-weight: 500;
	font-style: italic;
}

p::before{
	content: "";
	position: absolute;
	bottom: 0;
    width: 100%;
	transform: translate(5%, -55%);
    height: 10px;
    background: var(--button-color-hover);
	z-index: -1;
	border-radius: 3px;
}

@media(max-width: 700px){
	flex-direction: column;
	gap: 10px;
	padding-top: 10px;
	margin-top: 20px;
	border-top: 1px solid var(--text-color-grey);
}
`