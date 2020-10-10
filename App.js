import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import FavoriteQuotesScreen from './src/screens/FavoriteQuotesScreen';
import HomeScreen from './src/screens/HomeScreen';
import QuoteOfTheDay from './src/screens/QuoteOfTheDayScreen';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home App">
        <Stack.Screen name="Practical Exam 2 App" component={HomeScreen} />
        <Stack.Screen name="QuoteOfTheDay" component={QuoteOfTheDay} />
        <Stack.Screen name="FavoriteQuotesScreen" component={FavoriteQuotesScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
