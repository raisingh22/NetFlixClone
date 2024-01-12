import {
    Alert,
    FlatList,
    ImageBackground,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';
import React, { useEffect, useState } from 'react';
import { myColor } from '../utils/Theme';
import { getUpcomingMovies } from '../api/Network';
import {
    responsiveFontSize,
    responsiveHeight,
    responsiveWidth,
} from 'react-native-responsive-dimensions';
import Icon from 'react-native-vector-icons/Ionicons'
import LinearGradient from 'react-native-linear-gradient';
const Home_Banner = () => {
    const [upComingApiData, setUpComingApiData] = useState([]);
    useEffect(() => {
        const handleUpComingApi = async () => {
            const { data, status } = await getUpcomingMovies();
            if (status === 200) {
                setUpComingApiData(data.results);
            } else {
                Alert.alert(`Request error: ${data} ` + status);
            }
        };
        handleUpComingApi();
    }, []);
    const renderMovieBanner = ({ item, index }) => {
        return (
            <ImageBackground
                style={styles.banner}
                resizeMode="contain"
                source={{ uri: `https://image.tmdb.org/t/p/w500/${item.poster_path}` }}>
                <LinearGradient
                    colors={['rgba(0,0,0,0.1)', 'rgba(0,0,0,7)']}
                    style={styles.linearGradient}>
                    <Text style={styles.title}>My List</Text>
                    <TouchableOpacity style={{
                        flexDirection:'row',
                        backgroundColor:'white',
                        borderRadius:5,
                        
                    }}>
                        <Icon  name='play' color={'black'} size={30}/>
                        <Text style={[styles.title,{color:'black'}]}>Play</Text>
                    </TouchableOpacity>
                    <Text style={styles.title}>My List</Text>
                </LinearGradient>
            </ImageBackground>
        );
    };
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
    );
};

export default Home_Banner;

const styles = StyleSheet.create({
    container: {
        height: responsiveHeight(70),
        width: '100%',
        flexDirection: 'row',
        // backgroundColor: 'red'
    },
    banner: {
        width: responsiveWidth(100),
        height: '100%',
        justifyContent: 'flex-end',
    },
    linearGradient: {
        flex: 0.2,
        opacity: 0.9,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
    },
    title: {
        fontSize: responsiveFontSize(2.5),
        fontWeight: '500',
        color: 'white',
    },
});
