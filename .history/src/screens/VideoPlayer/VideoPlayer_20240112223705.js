import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const VideoPlayer = ({route}) => {
    const {title} = route.params.movieData
    console.log(title)
  return (
    <View>
      <Text>{title}</Text>
    </View>
  )
}

export default VideoPlayer

const styles = StyleSheet.create({})