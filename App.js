
import React from 'react';

import Home from './components/screens/Home';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import NewCart from './components/screens/NewCart';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
        headerShown: false
      }}>
        <Stack.Screen name="Home" key="Home" component={Home} />
        <Stack.Screen name="New Cart" key="New cart" component={NewCart} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
