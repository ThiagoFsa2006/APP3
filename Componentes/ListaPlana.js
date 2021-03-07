import React from 'react'
import {View, Text, FlatList,StyleSheet} from 'react-native'

    const produtos = [
    {
        id:'001',
        desc:['Mouse', '25.00']  
    },
        {
        id:'002',
        desc:['Teclado', '50.00']  
    },
        {
        id:'003',
        desc:['Monitor', '460.00']  
    },
        {
        id:'004',
        desc:['Monitor', '460.00']  
    },
        {
        id:'005',
        desc:['Monitor', '460.00']  
    },
    {
        id:'006',
        desc:['Monitor', '460.00']  
    },
    {
        id:'007',
        desc:['Monitor', '460.00']  
    },
    {
        id:'008',
        desc:['Monitor', '460.00']  
    },
    {
        id:'009',
        desc:['Monitor', '460.00']  
    },
    {
        id:'010',
        desc:['Monitor', '460.00']  
    },
    {
        id:'011',
        desc:['Monitor', '460.00']  
    },
    {
        id:'012',
        desc:['Monitor', '460.00']  
    },
    ]

    export default function(){

        return(
        
            <View>
                <FlatList
                data={produtos}
                keyExtractor={item=>item.id}
                renderItem={({item})=><View style={Estilos.item}><Text style={Estilos.prod}>Descrição:{item.desc[0]} - Valor:{item.desc[1]}</Text></View>}
                />
            </View>

        )
    
}

const Estilos = StyleSheet.create({

    item:{
        backgroundColor:'#A5AFC0',
        padding:6,
        marginVertical:18,
        marginHorizontal:20,
    },
    prod:{
        fontSize:20,
        color:'#bc6c25',
        
    }
})