import Popup from "reactjs-popup";
import styled from "styled-components";

export const ButtonFormContainer = styled.div`
    button{
        display: flex;
        align-items: center;
        gap: 5px;

        background-color: transparent;

        font-size: 16px;
        font-weight: 700;
        line-height: 20px;

        svg{
            color: var(--button-color);
            width: 20px;
            height: 20px;
        }
    }

    button:hover{
        color: var(--button-color-hover);   
        svg{
            color: var(--button-color-hover);
        }
    }


    
    button.registration{
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;

        height: 48px;
        padding: 14px 39px;

        border-radius: 12px;
        background: rgb(18, 20, 23);
        color: #ffffff;
    }

    button.registration:hover{
        background: var(--button-color-hover);
        color: #000000
      
    }



`

export const StyledPopup = styled(Popup)`


  &-overlay {
    background-color: rgba(0, 0, 0, 0.5);
    overflow-y: auto;
  }
@media(max-width: 700px){
  &-content {
        max-width: 566px;
        padding: 0;   
        min-width: 100%;
        border-radius: 0;
    }  
     }
  &-content {
        max-width: 566px;
        padding: 0;   
        border-radius: 30px;
       
    }  

`

export const Modal = styled.div`
        padding: 64px;
        position: relative;
        border-radius: 30px;
        background-color: #ffffff;

        button.close{
                position: absolute;
                display: flex;
                text-align: center;
                top: 20px;
                right: 30px;
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

        p.bookTrialDesc{
            font-size: 16px;
            font-weight: 400;
            line-height: 22px;
            color: #121417CC;
            margin-bottom: 20px;
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