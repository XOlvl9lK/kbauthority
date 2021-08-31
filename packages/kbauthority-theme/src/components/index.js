import React, { useState } from 'react'
import { connect, css, Global, Head } from 'frontity'
import Header from './HomePage/Header'
import style from '../styles/style.css'
import HomePage from './HomePage/HomePage'
import Footer from './Footer/Footer'
import ModalMenu from './UI/ModalMenu'
import { CSSTransition } from 'react-transition-group'

const Root = ({ state }) => {
  const [isModalVisible, setIsModalVisible] = useState(false)

  function toggleMenu() {
    setIsModalVisible(!isModalVisible)
  }

  return (
    <>
      <Head>
        <title>Bath Vaniities, Shower Doors/Panels, Kitchen Faucets & Sinks, Toilets </title>
      </Head>
      <Global styles={css(style)} />
      <CSSTransition in={isModalVisible} timeout={300} classNames="menu" unmountOnExit>
        <ModalMenu toggleMenu={toggleMenu}/>
      </CSSTransition>
      <Header toggleMenu={toggleMenu}/>
      <HomePage />
      <Footer />
    </>
  );
};

export default connect(Root)

