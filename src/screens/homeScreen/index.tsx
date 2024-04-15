import React from 'react'
import { View,Text,Image } from 'react-native'
import HeaderMain from "../../components/HeaderMain/index"
import { ScrollView } from 'react-native';
import CategoryItems from '../../components/CategoryItems'
import BannerCarousel from '../../components/BannerCarousel';
function index() {
  return (
   <ScrollView  stickyHeaderIndices={[0]} style={{height:'100%',backgroundColor:'#f5f5f5'}}>
    <HeaderMain/>
    <BannerCarousel/>
    <CategoryItems/>
   </ScrollView>
  )
}

export default index
