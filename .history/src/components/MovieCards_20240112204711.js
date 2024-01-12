import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { responsiveFontSize, responsiveHeight } from 'react-native-responsive-dimensions'

const MovieCards = ({title , data}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.textTitle}>{title}</Text>
    </View>
  )
}

export default MovieCards

const styles = StyleSheet.create({
    container:{
        backgroundColor:"red",
        height:responsiveHeight(40),
        gap:15
    },
    textTitle:{
        color:'white',
        fontSize:responsiveFontSize(2.5),
        fontWeight:'bold',
        letterSpacing:

    }
})