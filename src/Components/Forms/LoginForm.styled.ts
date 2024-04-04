import Popup from "reactjs-popup";
import styled from "styled-components";

export const ButtonFormContainer = styled.div`

`

export const StyledPopup = styled(Popup)`
 
  &-overlay {
  
  }

  &-content {
        max-width: 566px;
        border-radius: 30px;
        padding: 0;
  }
`

export const Modal = styled.div`
        padding: 64px;
        position: relative;

        button.close{
                position: absolute;
                display: flex;
                text-align: center;
                top: 0;
                right: 0;
                transform: translate(-50%, 0);
                padding: 8px;
                width: 32px;
                height: 32px;
                font-size: 35px;
                font-weight: 700;
                background-color: transparent;
                align-items: center;
            
        }

        button.close:hover{
            color: var(--button-color-hover);
        }

        h2{
            font-size: 40px;
            font-weight: 500;
            line-height: 48px;
            letter-spacing: -2%;
            margin-bottom: 20px;
        }

        p{
            font-size: 16px;
            font-weight: 400;
            line-height: 22px;
            letter-spacing: -2%;
            margin-bottom: 40px;
        }
       
`

export const LoginRegistrationForm = styled.form`
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
       input#name{
        padding-left: 60px;
          }

        input#email{
        padding-left: 62px;
          }

        input#password{
        padding-left: 82px;
          }

       label{
        position: absolute;
        top: 35%;
        left: 5%;
       }
    

`

export const ButtonModalContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 18px;
    margin-top: 40px;

    button{
    border-radius: 12px;
    height: 60px;
    background-color: var(--button-color);
    }

    button:hover{
        background-color: var(--button-color-hover);
    }
`