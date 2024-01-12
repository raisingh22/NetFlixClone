import { Image, ScrollView, StatusBar, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { myColor } from '../../utils/Theme'
import { responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions'
import Fontisto from 'react-native-vector-icons/MaterialCommunityIcons';
const VideoPlayer = ({ route }) => {
    const { title, release_date, overview, poster_path, genre_ids, backdrop_path } = route.params.movieData
    const [isVideoVisible, setIsVideoVisible] = useState(false);
    console.log(overview)
    return (
        <View style={styles.container}>
            <StatusBar backgroundColor={'#080508'} />
            <ScrollView style={styles.scrollContainer}>
                {
                    isVideoVisible ? null :
                        (
                            <Image
                                style={styles.img}
                                source={{ uri: `https://image.tmdb.org/t/p/w500/${backdrop_path}` }} />
                        )
                }
                <View style={styles.secondContainer}>
                    {/* <Text style={{ color: myColor.secondary, }}>{title}</Text> */}
                    <View style={{
                        flexDirection: 'row',
                        alignItems: 'center',

                    }}>
                        <Fontisto name="netflix" color='red' size={34} />
                        <Text>
                            
                        </Text>
                    </View>




                </View>
                {/* <Text style={{ color: myColor.secondary }}>{overview}</Text> */}
            </ScrollView>
        </View>
    )
}

export default VideoPlayer

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: myColor.primary
    },
    scrollContainer: {
        flex: 1,
    },
    img: {
        width: responsiveWidth(100),
        height: responsiveHeight(40)
    },
    secondContainer: {
        // padding:10
    }
})