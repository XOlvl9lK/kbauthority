import React, { useState } from 'react'
import { connect, css, Global } from 'frontity'
import reviews from '../../styles/footer/reviews.css'
import StarsRating from '../UI/StarsRating'
import { comments } from '../../mock/comments'
import Comment from '../UI/Comment'
import { CSSTransition, TransitionGroup } from 'react-transition-group';



const Reviews = () => {
  const [page, setPage] = useState(0)

  let displayComments = []
  let paginationButtons = []

  for (let i = page * 2; i <= (page * 2) + 1; i++) {
    displayComments.push(
      <Comment key={comments[i].id} commentData={comments[i]} />
    )
  }

  for (let i = 0; i < Math.ceil(comments.length / 2); i++) {
    paginationButtons.push(
      <button key={i} onClick={() => scrollComments('', i)} className={page === i ? 'active' : ''}>{i + 1}</button>
    )
  }

  function scrollComments(direction, number) {

    if (direction === 'right') {
      if (page === Math.ceil(comments.length / 2) - 1) {
        setPage(0)
      } else {
        setPage(page + 1)
      }
    } else if (direction === 'left') {
      if (page === 0) {
        setPage(Math.ceil(comments.length / 2) - 1)
      } else {
        setPage(page - 1)
      }
    } else {
      setPage(number)
    }
  }

  return (
    <>
      <Global styles={css(reviews)} />
      <div className="reviews">
        <div className="reviews-title">
          <a>Kitchen & Bath Authority Reviews</a>
          <p>We consistently strive to offer our customers the best possible online experience -
            But don't take our word for it, here are some real, verified reviews that our past
            customers have left about KBAuthority.com !
          </p>
        </div>

        <div className="appraisals">
          <div className="score">
            <span>4.6</span>
            <span>Out of 5.0</span>
          </div>

          <div className="stats">
            <img src="https://www.shopperapproved.com/custom/values-153.134.560.1631.7535/gold-bars.png" />
          </div>

          <div className="overall-rating">
            <p>Overall Rating</p>
            <StarsRating rating={4} half={true} />
          </div>

          <div className="percentage">
            <p>92%</p>
            <p>
              of customers that buy
              from this merchant give
              them a 4 or 5-Star rating.
            </p>
          </div>
        </div>

        <div className="comments">
          {displayComments}
        </div>

        <div className="comments-pagination">
          <div className="page-select">
            <button onClick={() => scrollComments('left')}>&#9668;</button>
            {paginationButtons}
            <button onClick={() => scrollComments('right')}>&#9658;</button>
          </div>

          <p>Display Options</p>
          <select name="" id="">
            <option value="Highest to Lowes">Highest to Lowes</option>
            <option value="Newest to Oldest">Newest to Oldest</option>
            <option value="Oldest to Newest">Oldest to Newest</option>
            <option value="Lowest to Highest">Lowest to Highest</option>
            <option value="Featured Reviews">Featured Reviews</option>
          </select>
          <a href="http://www.shopperapproved.com/reviews/kbauthority.com/" target="_blank">
            <img src="https://www.shopperapproved.com/widgets/images/widgetfooter-darklogo-eng.png" alt="" />
          </a>
        </div>

        <div className="awards">
          <a href="http://www.shopperapproved.com/reviews/kbauthority.com/" target="_blank">
            <img src="//www.shopperapproved.com/seals/24264-r.gif" alt="" />
          </a>
          <a href="http://www.shopperapproved.com/reviews/kbauthority.com/" target="_blank">
            <img src="https://c813008.ssl.cf2.rackcdn.com/24264-small.png" alt="" />
          </a>
        </div>
      </div>
    </>
  )
}

export default connect(Reviews)