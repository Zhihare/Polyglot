import React from 'react'
import { RightSideContainer } from './RightSide.styled'
import SVGcomponent from './SVGcomponent'

type Props = {}

const RightSide = (props: Props) => {
  return (
      <RightSideContainer>
          <img src={require('../Img/head.png')} alt="happy user" />
         <SVGcomponent/>
    </RightSideContainer>
  )
}

export default RightSide