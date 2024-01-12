import { FlatList, Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { responsiveFontSize, responsiveHeight } from 'react-native-responsive-dimensions'

const MovieCards = ({ title, data }) => {
    const renderMovieCards = ({ item, index }) => {
        return (
            <Image
                resizeMode='contain'
                style={{
                    width: responsiveHeight(25)
                }}
                source={{ uri: `https://image.tmdb.org/t/p/w500/${item.poster_path}` }}
            />
        )
    }
    return (
        <View style={styles.container}>
            <Text style={styles.textTitle}>{title}</Text>
            <FlatList
                data={data}
                pagingEnabled
                renderItem={renderMovieCards}
                horizontal
                showsHorizontalScrollIndicator={false}
            />
        </View>
    )
}

export default MovieCards

const styles = StyleSheet.create({
    container: {
        // backgroundColor: "red",
        height: responsiveHeight(50),
        // gap: 15
    },
    textTitle: {
        color: 'white',
        fontSize: responsiveFontSize(2.5),
        fontWeight: 'bold',
        letterSpacing: 1

    }
})