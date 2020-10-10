import React, { Component } from 'react';
import { StatusBar } from 'expo-status-bar';
import {
  StyleSheet,
  Text,
  View,
  Button,
  Alert,
  TextInput,
  Image,
} from 'react-native';

const FavoriteQuotesScreen = ({ route, navigation }) => {


  return (
    <View style={styles.container}>
     
   </View>   
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  fontBig: {
    fontSize: 30,
  },
  fontSmall: {
    fontSize: 20,
  },
  container2: {
    flex: 1,
    backgroundColor: '#fff',
    height: 200,
    width: 500,
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});

export default FavoriteQuotesScreen;
