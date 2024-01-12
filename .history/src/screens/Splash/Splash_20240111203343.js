import { Image, SafeAreaView, StatusBar, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { myColor } from '../../utils/Theme'

const Splash = () => {
    return (
        // <SafeAreaView>
            <View style={styles.container}>
                <StatusBar backgroundColor={'transparent'}  />
                <Image
                    style={styles.logo}
                    resizeMode='center'
                    source={{ uri: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.indiatoday.in%2Ftechnology%2Fnews%2Fstory%2Fnetflix-explains-how-it-will-stop-users-from-sharing-account-passwords-with-others-2328939-2023-02-01&psig=AOvVaw3jH7Dq0vsdfSPjT9a2LzWo&ust=1705071747194000&source=images&cd=vfe&opi=89978449&ved=0CBMQjRxqFwoTCOiv1bLN1YMDFQAAAAAdAAAAABAD' }}
                />
            </View>
       
    )
}

export default Splash

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#000',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal:10
    },
    logo: {
        width: "50%",
        height: "50%",
    }
})