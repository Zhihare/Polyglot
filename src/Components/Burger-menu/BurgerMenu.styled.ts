import styled from "styled-components";

export const BurgerMenuContainer = styled.div`
position: relative;
display: none;

@media(max-width: 700px){
display: block;

    button{
        display: flex;
        align-items: center;
        background-color: transparent;
    }

    svg{
        width: 20px;
        height: 20px;
    }

    button:hover{
        color: var(--button-color-hover);
    }
}
`

export const BurgerMenuModal = styled.div`
position: absolute;
background-color: #ffffff;
top: 40px;
right: 0;
width: 250px;
padding: 20px;
border: 2px solid black;
border-radius: 10px;
z-index: 100;

`