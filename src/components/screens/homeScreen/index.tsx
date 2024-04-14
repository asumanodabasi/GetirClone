import React from 'react'
import { View,Text,Image } from 'react-native'
import HeaderMain from "../../HeaderMain/index"
import { ScrollView } from 'react-native';
import BannerCarousel from '../../BannerCarousel';
function index() {
  return (
   <ScrollView  stickyHeaderIndices={[0]} style={{height:'100%',backgroundColor:'#f5f5f5'}}>
    <HeaderMain/>
    <BannerCarousel/>
   </ScrollView>
  )
}

export default index
