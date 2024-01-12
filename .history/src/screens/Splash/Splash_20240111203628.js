import { Image, SafeAreaView, StatusBar, StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import { myColor } from '../../utils/Theme'

const Splash = () => {
    // const navigation =useNavigation();
    useEffect(() => {
     setTimeout(() => {

     },3000)
    }, [])
    
    return (
        // <SafeAreaView>
            <View style={styles.container}>
                <StatusBar backgroundColor={'transparent'}  />
                <Image
                    style={styles.logo}
                    resizeMode='center'
                    source={{ uri: 'https://media.zenfs.com/en/hypebeast_936/55dd2178cbbd27b2cdba3f8985a08d48' }}
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
    },
    logo: {
        width: "70%",
        height: "100%",
    }
})