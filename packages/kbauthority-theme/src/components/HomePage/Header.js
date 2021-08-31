import React from 'react'
import Link from '@frontity/components/link'
import { connect, css, Global } from "frontity"
import header from '../../styles/homePage/header.css'
import Logo from '../UI/Logo'

const Header = ({ toggleMenu }) => {
  return (
    <>
    <Global styles={css(header)}/>
    <header>
      <Link link="/" className="logo">
        <Logo />
      </Link>

      <div onClick={toggleMenu} className="menu">
        <button>
          <div className="burger">
            <span />
            <span />
            <span />
          </div>
          <h1>
            Shop
          </h1>
        </button>
      </div>

      <input type="text"/>

      <div className="links">
        <a>Call 800-634-0410</a>
        <div className="auth">
          <a>Sign in</a>
          <a>Sign Up</a>
        </div>
      </div>

      <div className="cart">
        <svg version="1.1" x="0px" y="0px" width="60px" height="60px" viewBox="0 0 512 512">
          <g>
          	<g>
          		<polygon points="447.984,336 181.547,336 69.547,80 0.016,80 0.016,48 90.484,48 202.484,304 447.984,304   " fill="#ED8B00"></polygon>
          	</g>
          	<polygon points="511.984,112 447.984,272 224,272 160.016,112  " fill="#ED8B00"></polygon>
          	<path d="M287.984,416c0,26.5-21.484,48-47.984,48s-47.984-21.5-47.984-48S213.5,368,240,368S287.984,389.5,287.984,416z" fill="#ED8B00"></path>
          	<path d="M447.984,416c0,26.5-21.5,48-48,48s-48-21.5-48-48s21.5-48,48-48S447.984,389.5,447.984,416z" fill="#ED8B00"></path>
          </g>
        </svg>
        <span>0</span>
      </div>
    </header>
    </>
  )
}

export default connect(Header)