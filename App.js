//import React, { Component } from 'react';
import React from 'react'
import {View,Text, 
StyleSheet, 
Image,
Button, 
Alert} 
from 'react-native';
import Estilos from './Estilos/Estilos'
import Cx from './Componentes/Caixas'
import Lp from './Componentes/ListaPlana'

/*

const soma=(n1,n2)=>{
  return n1*n2
}

function sum(n1,n2){
  return n1*n2
}

function fexibir(v1){
  if(v1){
    return(<Text style={{fontSize:25, color:"#6A951A", backgroundColor:'#f7fff7'}}>Deu certo!</Text>)
  }else{
    return(<Text style={{fontSize:25, color:"#942C19", backgroundColor:'#f7fff7'}}> * * *</Text>)
  }
}
function button(){
  Alert.alert('Msg', 'Errouuu')
}


export default function APP3() {
 
    let vexibir = true;
    return(
      <View style={Estilos.conteiner}>
        <Text style={Estilos.texto}>{soma(2,5)}</Text>
        <Text style={Estilos.texto}>{sum(2,6)}</Text>
        <Image
        source={require('./assets/img2.png')}
        style={estilos.logo}
        />
        <Cx exibir={vexibir}/>
        <Text style={Estilos.titulo}> Ola mundo de novo</Text>
      {fexibir(false)}
      {vexibir?<Text>Fomos a marte</Text>:<Text  style={{backgroundColor:'#b1a7a6'}}> 9 9 9</Text>}

      <Button
      title='Mostrar Msg'
      onPress={button}
      color="#f15bb5"
      />
      </View>
      
    );
    
  }
  const estilos = StyleSheet.create({

    logo:{
      width:50,
      height:50,
      marginBottom:20,
      resizeMode:'center',
      backgroundColor:'#f15bb5'
      
  
    }
  })*/

  
  export default function APP3(){

    return(
      <View style={Estilos.conteiner}>
        <Text style={Estilos.texto}>Ola hoje é sexta feira</Text>
        <Text style={Estilos.texto}>Ola hoje é sexta feira</Text>
        <Text style={Estilos.texto}>Ola hoje é sexta feira</Text>
        <Text style={Estilos.texto}>Ola hoje é sexta feira</Text>
        <Text style={Estilos.texto}>Ola hoje é sexta feira</Text>

       

      </View>

    )
  }

