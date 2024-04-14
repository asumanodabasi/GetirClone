import React from 'react'
import { View,Text,Image } from 'react-native'
import styles from './styles'
import { AntDesign } from '@expo/vector-icons';


function index() {
  return (
    <View style={styles.headerMain}>

    <View style={styles.headerOne}>
        <Image style={styles.image} source={{uri:"https://cdn.getir.com/misc/emoji/house.png"}}/>
        <View style={styles.headerOneView}>
            <Text style={{fontWeight:'600',fontSize:16}}>Ev</Text>
            <Text style={{fontWeight:'500',fontSize:11.5,marginLeft:6,marginRight:3,color:'#6E7480'}}>YeniBağlar mah. Eski Sok.</Text>
            <AntDesign name="right" size={22} color="black" />
        
        </View>
    </View>

    
    <View style={styles.headerTwo}>

    <Text style={{fontSize:10,color:'#5D3EBD',fontWeight:'bold',textAlign:'center'}}>TVS</Text>
            <Text style={{fontSize:20,color:'#5D3EBD',fontWeight:'bold',textAlign:'center'}}>
                13<Text style={{fontSize:16,color:'#5D3EBD',fontWeight:'bold',textAlign:'center'}}>dk</Text>
            </Text>
        </View>


   </View>
  )
}

export default index
