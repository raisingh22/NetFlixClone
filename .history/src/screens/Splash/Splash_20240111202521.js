import { SafeAreaView, StatusBar, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { myColor } from '../../utils/Theme'

const Splash = () => {
  return (
   <SafeAreaView>
     <View style={styles.container}>
        <StatusBar backgroundColor={'transparent'} hidden/>
    </View>
   </SafeAreaView>
  )
}

export default Splash

const styles = StyleSheet.create({
    container:{
        backgroundColor :  myColor.primary,
        flex:1,
        justifyContent:'center'
    }
})