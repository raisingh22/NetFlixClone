import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../screens/Home/Home';
import Splash from '../screens/Splash/Splash';
import VideoPlayer from '../screens/VideoPlayer/VideoPlayer';

const Stack = createNativeStackNavigator();
const AppNavigator = () => {
  return (
    <Stack.Navigator initialRouteName='Splash' screenOptions={{
      headerShown: false
    }}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name='Splash' component={Splash} />
      <Stack.Screen name='VideoPlayer' component={VideoPlayer} />
    </Stack.Navigator>
  )
}

export default AppNavigator