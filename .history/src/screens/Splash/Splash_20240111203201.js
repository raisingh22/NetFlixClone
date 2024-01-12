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
                    source={{ uri: 'https://images.app.goo.gl/m5E4VvJMh82m4XUg9' }}
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
        width: "100%",
        height: "100%",
    }
})