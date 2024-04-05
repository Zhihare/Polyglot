import styled from "styled-components";

export const BottomSideContainer = styled.div`
box-sizing: border-box;
border: 2px dashed var(--button-color);
border-radius: 30px;
width: 100%;
padding: 40px 122px;

 @media(max-width: 900px){
            padding: 40px;
        }

    ul{
        display: grid;
        grid-template-columns: 1fr 1fr 1fr 1fr;
        justify-items: center;
        gap: 100px;
        @media(max-width: 1300px){
             grid-template-columns: 1fr 1fr;
             gap: 50px;
        }

         @media(max-width: 600px){
         grid-template-columns: 1fr;
        }
    }

    li{
        display: flex;
        gap: 16px;

        @media(max-width: 1300px){
        }

            p:first-child{
             font-weight: 500;
             font-size: 28px;
             letter-spacing: -0.02em;
            }

            p:last-child{
             font-weight: 400;
             font-size: 14px;
             width: 90px;
             letter-spacing: -0.02em;
             color: var(--text-color-grey);
            }
        
    }
`