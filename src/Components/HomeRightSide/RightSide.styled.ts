import styled from "styled-components";

export const RightSideContainer = styled.div`
    background-color: var(--button-color-hover);
    border-radius: 30px; 
    max-width: 568px;
    position: relative;
    overflow: hidden;

    img{
        padding: 80px 115px 110px 115px;
    }

    svg{
            position: absolute;
            left: 50%;
            transform: translate(-50%, -55%);
    }
`