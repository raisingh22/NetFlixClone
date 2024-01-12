import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const VideoPlayer = ({route}) => {
    const movieData = route.params.movieData
    console.log(movieData.title)
  return (
    <View>
      <Text>{movieData.title}</Text>
    </View>
  )
}

export default VideoPlayer

const styles = StyleSheet.create({})