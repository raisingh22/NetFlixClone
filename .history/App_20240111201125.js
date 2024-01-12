import { View, Text } from 'react-native'
import React from 'react'

import { NavigationContainer } from '@react-navigation/native';
import AppNavigator from './src/navigator/AppNavigator';
const App = () => {
  return (
   <NavigationContainer>
    <AppNavigator/>
   </NavigationContainer>
  )
}

export default App