import React from 'react'
import { LeftSideContainer } from './LeftSide.styled'
import { Link } from 'react-router-dom'

type Props = {}

const LeftSide = (props: Props) => {
  return (
      <LeftSideContainer>
          <h1>Unlock your potential with the best <span>language</span> tutors</h1>
          <p>Embark on an Exciting Language Journey with
              Expert Language Tutors:
              Elevate your language proficiency
              to new heights by connecting with highly
              qualified and experienced tutors.</p>
          <Link to="/teachers">Get started</Link>
    </LeftSideContainer>
  )
}

export default LeftSide