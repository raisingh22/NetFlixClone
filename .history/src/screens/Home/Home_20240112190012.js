import { Dimensions, ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import { myColor } from '../../utils/Theme'
import { getUpcomingMovies } from '../../api/Network'
import { responsiveHeight } from 'react-native-responsive-dimensions'

const Home = () => {
  useEffect(() => {
   getUpcomingMovies();
  }, [])
  
  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollView}>
        {/* <View style={{
          backgroundColor:'red',
          height:responsiveHeight(60)
        }}>
        <Text style={{color: myColor.primary}}>Home</Text>
        </View> */}
        <Home
        {/* <View style={{
          backgroundColor:'blue',
          height:responsiveHeight(60)
        }}>
        <Text style={{color: myColor.primary}}>Home</Text>
        </View>
        <View style={{
          backgroundColor:'green',
          height:responsiveHeight(60)
        }}>
        <Text style={{color: myColor.primary}}>Home</Text>
        </View> */}

      </ScrollView>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: myColor.primary

  },
  scrollView: {
flex:1
  }
})