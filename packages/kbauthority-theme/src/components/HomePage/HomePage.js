import React from 'react'
import Banner from './Banner'
import ProductsList from './ProductsList'
import CollectionsList from './CollectionsList'
import { styled, connect } from 'frontity'
import PopularBrands from './PopularBrands'

const HomePage = () => {
  return (
    <>
      <Banner />
      <Container>
        <ProductsList />
        <CollectionsList />
        <PopularBrands />
      </Container>
    </>
  )
}

export default connect(HomePage)

const Container = styled.div`
  max-width: 1440px;
  margin: 0 auto;
  padding: 0 10px;
`