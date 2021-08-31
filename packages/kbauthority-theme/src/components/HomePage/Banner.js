import React, { useState, useEffect } from 'react'
import { connect, css, Global } from 'frontity'
import banner from '../../styles/homePage/banner.css'
import { carouselImages } from '../../mock/carouselImages'
import { CSSTransition, TransitionGroup } from 'react-transition-group';

const Banner = () => {
  const [currentImage, setCurrentImage] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      if (currentImage !== 6) {
        setCurrentImage(currentImage + 1)
      } else {
        setCurrentImage(0)
      }
    }, 5000)

    return () => {
      clearInterval(timer)
    }
  }, [currentImage])
  

  return (
    <>
    <Global styles={css(banner)}/>
    <div className="banner">
      
      <TransitionGroup>
        {carouselImages.map(image => (
          <CSSTransition key={image.id} timeout={500} classNames="carousel">
            <img  className="main-image" src={image.url}/> 
          </CSSTransition>
        )).filter((image, index) => index === currentImage)}
      </TransitionGroup>
            
      <img src="https://www.kbauthority.com/skin/txs_ModernLiving/images/cover_top.png" className="cover-image"/>

      <div className="pagination">
        {carouselImages.map((image, index) => (
          <button key={image.id} onClick={() => setCurrentImage(index)} className={currentImage === index ? 'active' : ''}>{index + 1}</button>
        ))}
      </div>
    </div>
    </>
  )
}

export default connect(Banner)