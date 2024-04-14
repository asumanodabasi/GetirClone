import { Dimensions, StyleSheet } from "react-native";

const {height} =Dimensions.get('window') //ekran boyutuna göre ayarladim
const styles = StyleSheet.create({

    headerMain:{
        height:height*0.064,
        backgroundColor:'#F7D102',
        justifyContent:'space-between',
        alignItems:'center',
        flexDirection:'row' 
    },
    headerOne:{
        height:height*0.064,
        width:'80%',
        backgroundColor:'white',
        flexDirection:'row',
      alignItems:"center",
      paddingHorizontal:'3%',
      borderTopRightRadius:25,
      borderBottomRightRadius:30
    },
    headerOneView:{
        flexDirection:'row',
        alignItems:"center",
        marginLeft:8,
        paddingLeft:8,
        borderLeftColor:'#F3F2FD',
        borderLeftWidth:2,
        height:height*0.035,
    },
    image:{
        width:30,
        height:30
    },

    headerTwo:{
        width:'20%',
        height:height*0.064,
        flexDirection:'column',
        justifyContent:'center',
        paddingRight:10
    },


});

export default styles;