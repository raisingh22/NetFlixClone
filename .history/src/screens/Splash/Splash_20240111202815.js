import { Image, SafeAreaView, StatusBar, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { myColor } from '../../utils/Theme'

const Splash = () => {
  return (
   <SafeAreaView>
     <View style={styles.container}>
        <StatusBar backgroundColor={'transparent'} hidden/>
        <Image  
        style={styles.logo}
        source={{uri : 'https://www.google.com/imgres?imgurl=https%3A%2F%2Fi.pcmag.com%2Fimagery%2Freviews%2F05cItXL96l4LE9n02WfDR0h-5.fit_scale.size_760x427.v1582751026.png&tbnid=oHrHTUH31fryOM&vet=12ahUKEwi0i4OPzNWDAxXAxqACHQnHCg0QMygAegQIARBu..i&imgrefurl=https%3A%2F%2Fwww.pcmag.com%2Freviews%2Fnetflix&docid=UJ7BHHPqAOXjjM&w=759&h=427&q=netflix&hl=en&ved=2ahUKEwi0i4OPzNWDAxXAxqACHQnHCg0QMygAegQIARBu'}}
        />
    </View>
   </SafeAreaView>
  )
}

export default Splash

const styles = StyleSheet.create({
    container:{
        backgroundColor :  myColor.primary,
        flex:1,
        justifyContent:'center',
        alignItems: 'center',
    },
    logo:{
        width:100,
        height:100,
    }
})