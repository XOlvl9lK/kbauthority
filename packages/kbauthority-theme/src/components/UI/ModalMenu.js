import React from 'react'
import { styled } from 'frontity'
import { menuList } from '../../mock/menuList'

const ModalMenu = ({ toggleMenu }) => {
  return (
    <StyledModalMenu onClick={toggleMenu}>
      <div className="modal-menu" onClick={e => e.stopPropagation()}>

        {menuList.map(item => (
          <div key={item.url} className="menu-item">
            <div className="menu-image">
              <img src={item.url} alt={item.text}/>
            </div>
            <p>{item.text}</p>
          </div>
        ))}
      </div>
    </StyledModalMenu>
  )
}

export default ModalMenu

const StyledModalMenu = styled.div`
position: fixed;
top: 0;
right: 0;
bottom: 0;
left: 0;
background: rgba(0, 0, 0, .5);
z-index: 10000;

.modal-menu {
  position: absolute;
  top: 124px;
  width: 100%;
  height: 105px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  background-color: #1B3B56;
  color: white;
}

.menu-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
}

.menu-item:hover p {
  color: #ED8B00;
}

.menu-image {
  width: 60px;
  height: 60px;
  border: 3px solid white;
  border-radius: 50%;
  padding: 10px;
}

.menu-image img {
  width: 100%;
  height: 100%;
  object-fit: contain;
}

.menu-item p {
  margin-top: 5px;
  font-size: 18px;
  transition: .3s;
}
`

