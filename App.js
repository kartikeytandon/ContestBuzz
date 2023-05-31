import { NavigationContainer } from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import Fetch from 'react-native-fetch-api';
import Codeforces from './Pages/Codeforces';
import Codechef from './Pages/Codechef';
import Leetcode from './Pages/Leetcode';
import Home from './Pages/Home';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
          name="Home"
          component={Home}
        />
        <Stack.Screen 
          name="Codeforces"
          component={Codeforces}
        />
        <Stack.Screen 
          name="Codechef"
          component={Codechef}
        />
        <Stack.Screen 
          name="Leetcode"
          component={Leetcode}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
