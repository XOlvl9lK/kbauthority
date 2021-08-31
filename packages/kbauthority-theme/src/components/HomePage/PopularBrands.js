import React from 'react'
import { connect, css, Global } from 'frontity'
import popularBrands from '../../styles/homePage/popularBrands.css'
import { brandsList } from '../../mock/brandsList'

const PopularBrands = () => {
  return (
    <>
    <Global styles={css(popularBrands)}/>
    <div className="popular-brands">
      <h1>Popular Brands</h1>

      <ul className="brands-list">
        {brandsList.map(brand => (
          <li className="brand-item" key={brand.id}>
            <img src={brand.url}/>
          </li>
        ))}
      </ul>

      <button className="all-brands">ALL BRANDS</button>
    </div>
    </>
  )
}

export default connect(PopularBrands)