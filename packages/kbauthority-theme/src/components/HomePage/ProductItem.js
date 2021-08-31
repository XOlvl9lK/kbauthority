import React from 'react'
import { connect, css, Global } from 'frontity'
import productItem from '../../styles/homePage/productItem.css'

const ProductItem = ({ product }) => {
  return (
    <>
    <Global styles={css(productItem)}/>
    <div className="product-item">
      <div className="product-image">
        <img src={product.url}/>
      </div>
      <p className="product-title">{product.title}</p>
      <p className="product-count">{product.count}</p>
    </div>
    </>
  )
}

export default connect(ProductItem)