import React from 'react'
import { styled } from 'frontity'

const StarsRating = ({ rating, half }) => {
  const filledStar = 'https://www.shopperapproved.com/page/images3_0/stars/star-full-sm.png'
  const halfFilledStar = 'https://www.shopperapproved.com/page/images3_0/stars/star-half-md.png'
  const blankStar = 'https://www.shopperapproved.com/page/images3_0/stars/star-empty-sm.png'

  let stars = []

  for (let i = 0; i < rating; i++) {
    stars.push(
        <img key={i} src={filledStar} />
    )
  }

  if (half) {
    stars.push(
      <img key={halfFilledStar} src={halfFilledStar} />
    )

    for (let i = rating + 1; i < 5; i++) {
      stars.push(
          <img key={i} src={blankStar} />
      )
    }
  } else {
    for (let i = rating; i < 5; i++) {
      stars.push(
          <img key={i} src={blankStar} />
      )
    }
  }

  

  return (
    <StyledStarsRating>
      {stars}
    </StyledStarsRating>
  )
}

export default StarsRating

const StyledStarsRating = styled.div`
display: flex;
align-items: center;
width: 100%;

img {
  width: 100%;
}
`