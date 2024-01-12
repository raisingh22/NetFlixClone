import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { myColor } from '../../utils/Theme'

const VideoPlayer = ({route}) => {
    const {title ,release_date,overview,poster_path,genre_ids} = route.params.movieData

    console.log(overview)
  return (
    <View style={styles.container}>
      <Text>{overview}</Text>
    </View>
  )
}

export default VideoPlayer

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor:myColor.primary
    }
})