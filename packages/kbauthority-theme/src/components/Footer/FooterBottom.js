import React from 'react'
import { connect, css, Global } from 'frontity'
import footerBottom from '../../styles/footer/footerBottom.css'
import { footerMenu } from '../../mock/footerMenu'
import Logo from '../UI/Logo'

const FooterBottom = () => {
  return (
    <>
      <Global styles={css(footerBottom)} />
      <div className="footer-bottom">
        <img src="https://www.kbauthority.com/skin/txs_ModernLiving/images/cover_bottom.png" />

        <div className="bottom">
          <div className="bottom-left">
            <div className="logo">
              <Logo />
            </div>

            <div className="social-media">
              <a href="https://www.facebook.com/kitchenandbathauth/" target="_blank">
                <svg className="svg facebook" version="1.1" x="0px" y="0px" width="9.4px" height="18.1px" viewBox="0 0 9.4 18.1">
                  <g>
                    <path fill="#333" d="M9.4,3H7.7C6.4,3,6.1,3.6,6.1,4.6v2.1h3.2L8.9,9.8H6.1v8.3H2.8V9.8H0V6.6h2.8V4.3C2.8,1.5,4.5,0,6.9,0
				              c1.2,0,2.2,0.1,2.5,0.1V3z">
                    </path>
                  </g>
                </svg>
              </a>
              <a href="https://twitter.com/" target="_blank">
                <svg className="svg twitter" version="1.1" x="0px" y="0px" width="17.2px" height="13.9px" viewBox="0 0 17.2 13.9">
                  <g>
                    <path fill="#333" d="M15.4,3.5c0,0.2,0,0.3,0,0.5c0,4.6-3.5,10-10,10c-2,0-3.8-0.6-5.4-1.6c0.3,0,0.6,0,0.8,0
                      c1.6,0,3.2-0.6,4.4-1.5c-1.5,0-2.8-1-3.3-2.4c0.2,0,0.4,0.1,0.7,0.1c0.3,0,0.6,0,0.9-0.1C1.9,8.1,0.7,6.6,0.7,4.9v0
                      c0.5,0.3,1,0.4,1.6,0.4C1.3,4.7,0.7,3.6,0.7,2.4c0-0.7,0.2-1.3,0.5-1.8c1.7,2.1,4.3,3.5,7.2,3.7C8.4,4.1,8.4,3.8,8.4,3.5
                      C8.4,1.6,9.9,0,11.9,0c1,0,1.9,0.4,2.6,1.1C15.2,1,16,0.7,16.7,0.3c-0.3,0.8-0.8,1.5-1.5,1.9c0.7-0.1,1.4-0.3,2-0.5
                      C16.7,2.4,16.1,3,15.4,3.5">
                    </path>
                  </g>
                </svg>
              </a>
              <a href="https://pinterest.com/source/kbauthority.com/" target="_blank">
                <svg className="svg pinterest" version="1.1" x="0px" y="0px" width="13.9px" height="18.1px" viewBox="0 0 13.9 18.1">
                  <g>
                    <path fill="#333" d="M7.4,0c3.4,0,6.5,2.4,6.5,6c0,3.4-1.7,7.1-5.6,7.1c-0.9,0-2.1-0.5-2.5-1.3c-0.8,3.3-0.8,3.8-2.6,6.3
                      l-0.2,0.1L3,18c-0.1-0.7-0.2-1.4-0.2-2c0-2.2,1-5.4,1.5-7.6C4.1,7.8,4,7.1,4,6.5C4,5.4,4.8,4,6,4c0.9,0,1.4,0.7,1.4,1.6
                      c0,1.4-1,2.7-1,4.1c0,0.9,0.8,1.6,1.7,1.6c2.5,0,3.3-3.6,3.3-5.5c0-2.6-1.8-4-4.3-4C4.2,1.8,2,3.8,2,6.8c0,1.4,0.9,2.1,0.9,2.5
                      c0,0.3-0.2,1.3-0.6,1.3c-0.1,0-0.1,0-0.2,0C0.6,10,0,7.9,0,6.5C0,2.5,3.7,0,7.4,0">
                      </path>
                  </g>
                </svg>
              </a>
            </div>

            <p className="copyright">Copyright 2021 KBAuthority.com | All Rights Reserved</p>
          </div>

          <div className="bottom-right">
            {footerMenu.map(menu => (
              <a key={menu.id} href={menu.to}>{menu.text}</a>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default connect(FooterBottom)


