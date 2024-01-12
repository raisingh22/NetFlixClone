import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { responsiveHeight } from 'react-native-responsive-dimensions'

const MovieCards = ({title , data}) => {
  return (
    <View style={styles.container}>
      <Text style={styles}>MovieCards</Text>
    </View>
  )
}

export default MovieCards

const styles = StyleSheet.create({
    container:{
        backgroundColor:"red",
        height:responsiveHeight(40),
        gap:15
    }
})