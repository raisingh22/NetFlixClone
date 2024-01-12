import { FlatList, Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { responsiveFontSize, responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions'

const MovieCards = ({ title, data }) => {
    const renderMovieCards = ({ item, index }) => {
        return (
            <Image
                resizeMode='cover'
                style={{
                    width: responsiveWidth(50),
                    height: responsiveHeight(100),
                    borderRadius:10

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
                ItemSeparatorComponent={()=>{
                    <View>
                }}
            />
        </View>
    )
}

export default MovieCards

const styles = StyleSheet.create({
    container: {
        // backgroundColor: "red",
        height: responsiveHeight(40),
        gap: 15
    },
    textTitle: {
        color: 'white',
        fontSize: responsiveFontSize(2.5),
        fontWeight: 'bold',
        letterSpacing: 1

    }
})