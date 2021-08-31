import React from 'react'
import { connect, css, Global } from 'frontity'
import collectionList from '../../styles/homePage/collectionList.css'
import CollectionItem from './CollectionItem'
import { collections } from '../../mock/collections'


const CollectionsList = () => {
  return (
    <>
    <Global styles={css(collectionList)}/>
    <div className="collections">
      <div className="collections-description">
        <h1>Featured Collection</h1>
        <p>We strive to provide excellent service and top quality products.</p>
      </div>
      <div className="collections-list">
        {collections.map(collection => (
          <CollectionItem key={collection.id} collection={collection}/>
        ))}
      </div>     
    </div>
    </>
  )
}

export default connect(CollectionsList)