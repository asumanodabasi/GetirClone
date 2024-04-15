import React, { useState } from 'react'
import { View ,StyleSheet } from 'react-native'
import CategoryItem from '../CategoryItems'
import categoriesGetir from '../../../assets/categoriesGetir'
function index() {
    const [categories,setCategories]=useState(categoriesGetir)
  return (
    <View>
        <View>
            <CategoryItem/>
        </View>

    </View>
  )
}

const styles = StyleSheet.create({
  listcontainer:{
  flex:1
  }
})


export default index
