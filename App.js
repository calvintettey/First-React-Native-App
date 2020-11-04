import React from 'react'
import { Text, View, Button, StyleSheet, Image } from "react-native";


function App(){
  return <View style={styles.container}>
    <Image source={require('./assets/profile.png')} style={styles.image}/>

    <View style={styles.profileDetails}>
      <Text style={styles.label}>Name</Text>
      <Text style={[styles.label, styles.info]}>Tony Stark</Text>
    </View>

    <View style={styles.profileDetails}>
      <Text style={styles.label}>Email</Text>
      <Text style={[styles.label, styles.info]}>tony@stark.com</Text>
    </View>

    <View style={styles.profileDetails}>
      <Text style={styles.label}>Gender</Text>
      <Text style={[styles.label, styles.info]}>Male</Text>
    </View>
    
  </View>
}


const styles = StyleSheet.create( {
  container:{
    flex:1,
    marginHorizontal:5
  },

  image:{
    marginTop:100,
    width:150,
    height: 150,
    marginBottom:30,
    alignSelf:"center",
    borderRadius:75
  },

  profileDetails:{
    flexDirection: "row",
    marginVertical:3
  },

  label:{
    borderColor:"black",
    borderWidth:1,
    borderRadius:4,
    color:"gray",
    fontSize:20,
    flex:2.5,
    paddingHorizontal:7
  },

  info:{
    flex:7.5,
    color:"black"
  }
})

export default App;