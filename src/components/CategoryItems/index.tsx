import React from 'react'
import { TouchableOpacity,Image,Text,Dimensions } from 'react-native'
//rfce

const {height,width}=Dimensions.get('window')
function index() {


  return (
    <TouchableOpacity style={{width:width*0.25,height:height*0.24,flexDirection:'column',alignItems:'center',justifyContent:'space-between',marginTop:10}}>
        <Image style={{width:width*0.18,height:height*0.18,borderRadius:10}} source={{uri:"https://cdn.getir.com/cat/5fd8c58f3bdc2389a56e0fb0_2b1a70ca-4a4a-4477-adf1-7414a476aff8.jpeg"}}    />
        <Text style={{fontSize:12,color:'#616161',fontWeight:'500'}}>İndirimler</Text>
    </TouchableOpacity>
  )
}

export default index