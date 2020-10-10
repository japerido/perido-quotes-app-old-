import { StatusBar } from 'expo-status-bar';
import React, { useDebugValue, useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
  TouchableOpacity,
  Image,
} from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { Value, not } from 'react-native-reanimated';

const HomeScreen = ({ navigation }) => {
  const [FName, setFName] = useState('');
  const [LName, setLName] = useState('');
  const [Email, setEmail] = useState('');
  const [valid, setValid] = useState('');


  console.log(navigation);
  return (
    <View style={styles.container}>
    
     <Button title="Inspire Me!"
      onPress={() => navigation.navigate('QuoteOfTheDayScreen')}
      />
     
      <Text> </Text>

      {/* Submit Button */}
      <Button title="Favorite Quotes"
      onPress={() => navigation.navigate('FavoriteQuotesScreen')}
      />
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
  input: {
    borderWidth: 1,
    borderColor: '#777',
    padding: 8,
    margin: 10,
    width: 200,
    fontSize: 20,
  },
  container2: {
    flex: 1,
    backgroundColor: '#fff',
    height: 10,
    width: 500,
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});

export default HomeScreen;
