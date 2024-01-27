import { View, Text } from 'react-native'
import React from 'react'

import { NavigationContainer } from '@react-navigation/native';
import AppNavigator from './src/navigator/AppNavigator';
import Test from './src/screens/Test';
const App = () => {
  return (
    <Test/>
  //  <NavigationContainer>
  //   <AppNavigator/>
  //  </NavigationContainer>
  )
}

export default App