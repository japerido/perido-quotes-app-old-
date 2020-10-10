import { DefaultTheme } from '@react-navigation/native';
import React, { useState } from 'react';
import {
  Stylesheet,
  View,
  Text,
  Image,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import { globalStyles } from '../../styles/global';

const QuoteOfTheDayScreen = () => {
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


export default QuoteOfTheDayScreen;


