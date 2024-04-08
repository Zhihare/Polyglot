import styled from "styled-components";

export const CardWrapper = styled.li`
position: relative;
display: flex;
gap: 48px;

width: 100%;
padding: 24px;
border-radius: 24px;
background: rgb(255, 255, 255);


 @media(max-width: 800px){
    flex-direction: column;
 }
`



export const ImgWrapper = styled.div`
width: 120px;

`



export const CardPhoto = styled.img`

min-width: 120px;
min-height: 120px;
padding: 12px;

border: 2px solid var(--button-color-hover);

border-radius: 50%;
`


export const InformSections = styled.div`
    width: 100%;


p.head{
    font-size: 16px;
    font-weight: 500;
    line-height: 24px;
    color: var(--text-color-grey);

    margin-bottom: 8px;
}

h3{
    font-size: 24px;
    font-weight: 500;
}

p.readMore{
    font-size: 16px;
    font-weight: 500;
    line-height: 24px;
    width: fit-content;

    text-decoration: underline;
    cursor: pointer;
}

p.readMore:hover{
    color: var(--button-color-hover);
}
`


export const HeadSection = styled.div`
display: flex;
flex-wrap: wrap;
align-items: flex-start;
justify-content: space-between;
`



export const CardInfo = styled.ul`
margin-top: 32px;
margin-bottom: 16px;

li{
    margin-bottom: 8px;
    font-size: 16px;
    font-weight: 500;
    line-height: 24px;
    color: var(--text-color-grey);
}

span{
    color: var(--text-color);
}

li:first-child span{
    text-decoration: underline;
}

`


export const LevelWrapper = styled.ul`
display: flex;
flex-wrap: wrap;
gap: 8px;
margin-top: 32px;


li{
margin: 0;
padding: 8px 12px 8px 12px;
border-radius: 35px;
background: #ffffff;
border: 1px solid rgba(18, 20, 23, 0.2);
}

li.active{
    margin: 0;
    background: var(--button-color);
}

`


export const Rating = styled.ul`
display: flex;
flex-wrap: wrap;
margin-right: 90px;

 @media(max-width: 1000px){
margin-right: 0 ;
}

li{
    display: flex;
    align-items: center;
    gap: 8px;
    margin: 0;


    svg{
        width: 16px;
        height: 16px;
    }

    span{
        color: #38CD3E;
    }
}

p{
    font-size: 16px;
    font-weight: 500;
    line-height: 24px;
}

li::after{
    content: "";
    display: block;
    width: 1px;
    height: 16px;
    margin: 0 16px;
    background: var(--text-color-grey);

}

 @media(max-width: 1000px){
    li::after{
    width: 0;
    height: 0;
    margin: 0%, 8px;
}
 }


li:last-child::after{
    display: none;
}

li.star{
    svg{
        fill: #FFC531;
    }
}


 @media(max-width: 1000px){
    font-size: 14px;

 }
`

export const ReviewsList = styled.ul`
display: flex;
flex-direction: column;
gap: 32px;
margin-top: 32px;

 p{
        font-size: 16px;
        font-weight: 500;
        line-height: 24px;
    }

`



export const ReviewsContainer = styled.div `
    display: flex;
    align-items: center;
    gap: 12px;
    margin-bottom: 16px;

    img{
        width: 44px;
        height: 44px;
        border-radius: 50%;
    }

    p.reviewsName{
        font-size: 16px;
        font-weight: 500;
        line-height: 24px;
        color: var(--text-color-grey);
    }
    svg{
        fill: #FFC531;
        width: 16px;
        height: 16px;
    }

`


export const FavoriteButton = styled.button`
position: absolute;
top: 24px;
right: 24px;
    width: 20px;
    height: 20px;
	background: transparent;
	svg {
		fill: none;
        width: 20px;
        height: 20px;
		stroke: var(--text-color);

		&:hover {
			fill: var(--button-color);
			stroke: var(--button-color);
		}
		&.active {
			fill: var(--button-color);
			stroke: var(--button-color);
		}
	}
`





export const LoadMoreButton = styled.button`

display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
padding: 16px 48px;

color: var(--text-color);
border-radius: 12px;
background: var(--button-color);

font-size: 18px;
font-weight: 700;
line-height: 28px;

margin: 0 auto;

&:hover{
	background-color: var(--button-color-hover);
}

&.hidden{
	display: none;
}
`

export const Margin = styled.p`
margin-bottom: 70px;
`



export const CardButton = styled.button`

display: flex;

margin-top: 32px;
padding: 16px 48px;

color: var(--text-color);
border-radius: 12px;
background: var(--button-color);

font-size: 18px;
font-weight: 700;
line-height: 28px;

&:hover{
	background-color: var(--button-color-hover);
}

&.hidden{
	display: none;
}
`