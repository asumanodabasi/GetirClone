import React from 'react'
import { TouchableOpacity,Image,Text,Dimensions } from 'react-native'
import { Category } from '../../models'
//rfce

const {width,height}=Dimensions.get('window')
type categoryProps={
  item:Category
}
function index({item}:categoryProps) {


  return (
    <TouchableOpacity style={{width:width*0.25,height:width*0.24,flexDirection:'column',alignItems:'center',justifyContent:'center',marginTop:10}}>
        <Image style={{width:width*0.18,height:width*0.18,borderRadius:8}} source={{uri:item.src}}    />
        <Text style={{fontSize:12,color:'#616161',fontWeight:'500'}}>{item.name}</Text>
    </TouchableOpacity>
  )
}

export default index