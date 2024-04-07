import styled from "styled-components";
import { ErrorMessage } from 'formik';

export const RadiobuttonContainer = styled.ul`
display: flex;
flex-direction: column;
margin-top: 21px;
margin-bottom: 41px;
gap: 18px;

    li{
        display: flex;
        gap: 8px
    }
`





export const InformContainer = styled.div`
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        width: 100%;
        gap: 18px;
        transition: all 0.3s ease-in-out;

       div{
            width: 100%;
            position: relative;
            
       }

       input{
        width: 100%;
        height: 54px;
        padding: 16px 18px;
        box-sizing: border-box;
        border: 1px solid rgba(18, 20, 23, 0.1);
        border-radius: 12px;
       }

       label{
        position: absolute;
        top: 35%;
        left: 5%;
       }
 `   

 export const ButtonBook = styled.button`
        
        margin-top: 30px;
        width: 100%;
        border-radius: 12px;
        padding: 16px;

        background: var(--button-color);

        &:hover{
            background: var(--button-color-hover);
        }
        `

export const ErrorMessages = styled(ErrorMessage)`
    color: red;
`