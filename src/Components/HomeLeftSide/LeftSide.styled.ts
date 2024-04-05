import styled from "styled-components";

export const LeftSideContainer = styled.div`
    max-width: 720px;
    padding: 98px 64px;
    background-color: var(--back-grey);
    border-radius: 30px; 

    h1{
        font-size: 48px;
        font-weight: 500;
        line-height: 56px;
        letter-spacing: -0.02em;

        margin-bottom: 32px;
    }

    p{
        width: 80%;
        font-size: 16px;
        font-weight: 400;
        line-height: 22px;
        letter-spacing: -0.02em;

        margin-bottom: 64px;
    }

    span{
        position: relative;
        z-index: 10;
        font-style: italic;
    }

    span::before{
        content: "";
        position: absolute;    
        bottom: 10%;
        left: 0;
        display: block;
        width: 100%;
        height: 35px;

        border-radius: 8px;
        background-color: var(--button-color);
        z-index: -1;
       
    }

    a{  
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        
        max-width: 268px;
        height: 60px;
        padding: 16px 88px;

        border-radius: 12px;
        background: var(--button-color);
        color: var(--text-color);
    }

    a:hover{
        background: var(--button-color-hover);
    }
`