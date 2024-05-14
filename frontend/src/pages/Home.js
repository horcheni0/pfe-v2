import React from 'react'

import BannerProduct from '../components/BannerProduct'

import VerticalCardProduct from '../components/VerticalCardProduct'


import CategoryList from '../components/CategoryList'

import Test from '../components/test'


const Home = () => {
  return (
    <div className='bg-white'>
    <Test />
    <CategoryList/>
    <BannerProduct/>
    <VerticalCardProduct category={"kids"} heading={"kids"}/>
    <VerticalCardProduct category={"man"} heading={"man"}/>
    <VerticalCardProduct category={"women"} heading={"women"}/>
  
  </div>
  
  )
}

export default Home