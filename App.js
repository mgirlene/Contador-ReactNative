/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

 import React, { useState } from 'react';
 import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
 
 
 export default function App(){

  const [count,setCount] = useState(0);

   return(
     <View style={styles.container}>
           <Text style={styles.letra}>Contador de Pessoas</Text>
           <Text style={styles.total}> {count}</Text>
           <TouchableOpacity style={styles.cont} onPress = {() => setCount(count + 1)}>
             <Text style={styles.letraButton}>+</Text>
           </TouchableOpacity>
           <TouchableOpacity style={styles.cont} onPress = {() => setCount(count - 1)}>
             <Text style={styles.letraButton}>-</Text>
           </TouchableOpacity>
     </View>
   );
 }

 const styles = StyleSheet.create({
   container:{
     flex: 1,
     backgroundColor: '#b19cd9',
     alignItems: 'center',
     justifyContent: 'center'
   },
   cont:{
     width: 150,
     height: 75,
     margin: 10,
     borderRadius: 10,
     backgroundColor: 'black',
     justifyContent: 'center',
     textAlign: 'center'
   },
   total:{
    width: 200,
    height: 80,
    margin: 20,
    borderRadius: 10,
    backgroundColor: '#fff',
    justifyContent: 'center',
    textAlign: 'center',
    fontSize: 40,
  },
   letra:{
     fontFamily: 'React',
     color: '#fff',
     fontSize: 40,
   },
   letraButton:{
    fontFamily: 'React',
    color: '#fff',
    fontSize: 50,
    textAlign: 'center'
  },
 })