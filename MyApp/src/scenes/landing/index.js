import React from 'react';
import {SafeAreaView, StyleSheet, Text, TouchableHighlight} from 'react-native';

const LandingScreen = ({navigation}) => (
  <SafeAreaView style={styles.container}>
    <Text style={styles.title} >Landing Screen</Text>
    <TouchableHighlight style={styles.homeBtn} onPress={() => navigation.navigate('Home')}>
      <Text style={styles.btnTitle}>Go Home</Text>
    </TouchableHighlight>
  </SafeAreaView>
);

export default LandingScreen;

const styles = StyleSheet.create({
  container: {
  	flex:1,
  	padding:50,
  	alignItems:"center",
  },
  title: {
  	marginTop:100,
    fontSize: 25,
    fontWeight: 'bold',
  },
  btnTitle: {
    fontSize: 16,
    color:"#fff",
    fontWeight: 'bold',
  },
  
  homeBtn: {
  	marginTop:100,
  	padding:10,
  	borderRadius:5,
  	backgroundColor:"#3498db"
  },
});

