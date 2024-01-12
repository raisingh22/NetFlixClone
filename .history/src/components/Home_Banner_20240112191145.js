import { Alert, StyleSheet, Text, View } from 'react-native'
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
                setUpComingApiData(data);
            }
            else {
                Alert.alert(`Request error: ${data} `+ status)
            }
        };
        handleUpComingApi();
    }, []);

    return (
        <View style={styles.container}>
            <Text style={{ color: myColor.secondary }}>Home_Banner</Text>
        </View>
    )
}

export default Home_Banner

const styles = StyleSheet.create({
    container:{
        height:responsiveHeight(70);
        ba
    }
})