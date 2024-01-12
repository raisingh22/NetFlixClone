import { Image, StatusBar, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { myColor } from '../../utils/Theme'

const VideoPlayer = ({ route }) => {
    const { title, release_date, overview, poster_path, genre_ids } = route.params.movieData

    console.log(overview)
    return (
        <View style={styles.container}>
            <StatusBar />
            <Image
              source={{ uri: `https://image.tmdb.org/t/p/w500/${poster_path}` }}            />
            <Text style={{ color: myColor.secondary }}>{overview}</Text>
        </View>
    )
}

export default VideoPlayer

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: myColor.primary
    }
})