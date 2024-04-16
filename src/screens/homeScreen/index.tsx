import React from 'react'
import { View,Text,Image } from 'react-native'
import HeaderMain from "../../components/HeaderMain/index"
import { ScrollView } from 'react-native';
import MainCategories from '../../components/MainCategories'
import BannerCarousel from '../../components/BannerCarousel';
function index() {
  return (
   <ScrollView  stickyHeaderIndices={[0]} style={{height:'100%',backgroundColor:'#f5f5f5'}}>
    <HeaderMain/>
    <BannerCarousel/>
    <MainCategories/>
   </ScrollView>
  )
}

export default index
