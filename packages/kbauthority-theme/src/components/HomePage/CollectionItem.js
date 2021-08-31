import React from 'react'
import { connect, css, Global } from 'frontity'
import collectionItem from '../../styles/homePage/collectionItem.css'

const CollectionItem = ({ collection }) => {
  return (
    <>
    <Global styles={css(collectionItem)}/>
    <div className="collection-item">
      <div className="collection-image">
        <img src={collection.url}/>
      </div>
      <div className="collection-title">
        <p>{collection.title}</p>
        <a>All brands</a>
      </div>
    </div>
    </>
  )
}

export default connect(CollectionItem)