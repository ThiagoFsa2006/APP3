import React from 'react';
import {View} from 'react-native';

export default function (props){
    return(
      <View style={{width:200, height:400, flexDirection:'column', justifyContent:'center', alignItems:'stretch'}}>
         
         {
         props.exibir ?
         <View style={{flex:1}}>
         <View style={{flexGrow:1,backgroundColor:"#1d3557"}}></View>
         <View style={{flexGrow:1,backgroundColor:"#457b9d"}}></View>
         <View style={{flexGrow:1,backgroundColor:"#a8dadc"}}></View>
         </View>
         :
         <View style={{flex:1}}>
         <View style={{flexGrow:1,backgroundColor:"#ffa69e"}}></View>
         <View style={{flexGrow:1,backgroundColor:"#ff0054"}}></View>
         <View style={{flexGrow:1,backgroundColor:"#d90429"}}></View>
         </View>
        }
    </View>
            /*<View style={{width:"100%", height:400, flexDirection:'row', flexWrap:'wrap'}}>
            <View style={{width:70, height:50,backgroundColor:"#05365A"}}></View>
            <View style={{width:70, height:50,backgroundColor:"#095F9D"}}></View>
            <View style={{width:70, height:50,backgroundColor:"#0D88E0"}}></View>
            <View style={{width:70, height:50,backgroundColor:"#40A9F4"}}></View>
            <View style={{width:70, height:50,backgroundColor:"#87C9F8"}}></View>
            <View style={{width:70, height:50,backgroundColor:"#B7DEFB"}}></View>
            <View style={{width:70, height:50,backgroundColor:"#05365A"}}></View>
            <View style={{width:70, height:50,backgroundColor:"#095F9D"}}></View>
        </View>*/
    )

}