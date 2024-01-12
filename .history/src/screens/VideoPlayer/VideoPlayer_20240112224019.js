import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const VideoPlayer = ({route}) => {
    const {title ,release_date,overview,poster_path,genre} = route.params.movieData

    console.log(release_date)
  return (
    <View>
      <Text>{overview}</Text>
    </View>
  )
}

export default VideoPlayer

const styles = StyleSheet.create({})