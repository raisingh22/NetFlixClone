import { Alert, FlatList, ImageBackground, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { myColor } from '../utils/Theme'
import { getUpcomingMovies } from '../api/Network'
import { responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions'

const Home_Banner = () => {
    const [upComingApiData, setUpComingApiData] = useState([]);
    useEffect(() => {
        const handleUpComingApi = async () => {
            const { data, status } = await getUpcomingMovies();
            if (status === 200) {
                setUpComingApiData(data.results);
            }
            else {
                Alert.alert(`Request error: ${data} ` + status)
            }
        };
        handleUpComingApi();
    }, []);
    const renderMovieBanner = ({ item, index }) => {
        return (
            <ImageBackground
                style={styles.banner}
                resizeMethod=''
                source={{ uri: `https://image.tmdb.org/t/p/w500/${item.poster_path}` }} >

            </ImageBackground>
        )
    }
    return (
        <View style={styles.container}>
            <FlatList
                pagingEnabled
                data={upComingApiData}
                horizontal
                renderItem={renderMovieBanner}
                showsHorizontalScrollIndicator={false}
            />
        </View>
    )
}

export default Home_Banner

const styles = StyleSheet.create({
    container: {
        height: responsiveHeight(70),
        width: "100%",
        backgroundColor: 'red'
    },
    banner: {
        width: responsiveWidth(100),
        height: "100%"
    }
})