import React from 'react'
import LeftSide from '../../Components/HomeLeftSide/LeftSide'
import RightSide from '../../Components/HomeRightSide/RightSide'
import { HomePageContainer } from './HomePage.styled'
import BottomSide from '../../Components/HomeBottomSide/BottomSide'

type Props = {}

const HomePage = (props: Props) => {
  return (
    <HomePageContainer>
      <LeftSide />
      <RightSide />
      <BottomSide/>
    </HomePageContainer>
  )
}

export default HomePage