import { Alert, FlatList, ImageBackground, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { myColor } from '../utils/Theme'
import { getUpcomingMovies } from '../api/Network'
import { responsiveHeight } from 'react-native-responsive-dimensions'

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
            <ImageBackground source={{ uri : `https://image.tmdb`}} >
                <Text style={{ color: 'white' }}>
                    {item.original_title}
                </Text>
            </ImageBackground>
        )
    }
    return (
        <View style={styles.container}>
            <FlatList
                data={upComingApiData}
                horizontal
                renderItem={renderMovieBanner}
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
    }
})