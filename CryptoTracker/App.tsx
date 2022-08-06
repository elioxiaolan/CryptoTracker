import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {HomeScreen, DetailScreen} from './screens';
import io from 'socket.io-client';

const Stack = createNativeStackNavigator();

export const socket = io('http://192.168.4.27:6000');

socket.on('connect', () => {
  console.log('Socket is connected');
});

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="CryptoTracker" component={HomeScreen} />
        <Stack.Screen name="Detail" component={DetailScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
