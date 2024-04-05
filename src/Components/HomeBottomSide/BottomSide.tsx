import React from 'react'
import { BottomSideContainer } from './BottomSide.styled'

type Props = {}

const BottomSide = (props: Props) => {
  return (
      <BottomSideContainer>
          <ul>
              <li>
                <p>32,000+</p>
                <p>Experienced tutors</p>
              </li>
              <li>
                <p>300,000+</p>
                <p>5-star tutor reviews</p>
              </li>
              <li>
                <p>120+</p>
                <p>Subjects <br/> taught</p>
              </li>
              <li>
                <p>200+</p>
                <p>Tutor nationalities</p>
              </li>
          </ul>
    </BottomSideContainer>
  )
}

export default BottomSide