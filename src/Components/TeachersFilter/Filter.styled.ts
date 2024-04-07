import styled from 'styled-components';
import Select from 'react-select';


export const FilterForm = styled.form`
display: flex;
gap: 18px;
flex-wrap: wrap;
margin-top: 20px;

@media screen and (max-width: 900px){
justify-content: center;
}

label{
display: flex;
flex-direction: column;
height: 74px;
color: rgb(138, 138, 137);
font-size: 14px;
font-weight: 500;
line-height: 18px;
text-align: left;
}

input{
	box-sizing: border-box;
	border: none;
	border-right: 1px solid rgba(138, 138, 137, 0.2);
	border-radius: 14px 0px 0px 14px;
	background: rgb(247, 247, 251);
	padding: 14px 24px 14px 75px;
	max-width: 160px;

	color: rgb(18, 20, 23);
	font-size: 18px;
	font-weight: 500;
	line-height: 20px;
	outline:none;


}
input.two{
	border-radius: 0px 14px 14px 0px;
	padding: 14px 24px 14px 53px;
}

	input::placeholder{
		color: #121417;
	}

	input::-webkit-outer-spin-button,
	input::-webkit-inner-spin-button {
    -webkit-appearance: none;
}
`


export const SelectFilter = styled(Select)`
width: 125px;
`

export const FilterFormButton = styled.button`
/* _ Main button */
width: 136px;
height: 48px;
/* Auto layout */
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
margin-top: auto;

border-radius: 12px;
background: var(--button-color);


color: rgb(255, 255, 255);
font-size: 14px;
font-weight: 600;
line-height: 20px;


&:hover{
	background: var(--button-color-hover);
}
`