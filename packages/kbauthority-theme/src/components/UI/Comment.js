import React from 'react'
import StarsRating from './StarsRating'
import { styled } from 'frontity'

const Comment = ({ commentData }) => {
  return (
    <StyledComment className="comment">
      <div className="comment-rating">
        <StarsRating rating={commentData.rating} half={commentData.half}/>
      </div>

      <p className="comment-info">{commentData.info}</p>
      <p className="comment-text">{commentData.text}</p>

      <div className="verified-buyer">
        <img src="https://www.shopperapproved.com/page/images3_0/verifiedbuyer.png" />
        <p>Verified Buyer</p>
      </div>
    </StyledComment>
  )
}

export default Comment

const StyledComment = styled.div`
border-bottom: 1px solid #ccc;
padding: 30px 20px;
position: relative;

.comment-rating {
  width: 100px;
}

.comment-info {
  color: #555;
  font-size: 13px;
  margin-top: 10px;
}

.comment-text {
  color: #333;
  font-size: 15px;
  margin-top: 10px;
}

.verified-buyer {
  position: absolute;
  top: 30px;
  right: 30px;
  display: flex;
  align-items: center;
  font-size: 12px;
  color: #333;
}

.verified-buyer p {
  margin-left: 5px;
}
`