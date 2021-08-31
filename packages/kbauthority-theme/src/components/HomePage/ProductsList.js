import React from 'react'
import { connect, css, Global } from 'frontity'
import productsList from '../../styles/homePage/productsList.css'
import { products } from '../../mock/products'
import ProductItem from './ProductItem'

const ProductsList = () => {
  return (
    <>
    <Global styles={css(productsList)}/>
    <div className="product-list">
      {products.map(product => (
        <ProductItem key={product.id} product={product}/>
      ))}
    </div>
    </>
  )
}

export default connect(ProductsList)