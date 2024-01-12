import { Dimensions, ScrollView, StatusBar, StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import { myColor } from '../../utils/Theme'
import { getUpcomingMovies } from '../../api/Network'
import { responsiveHeight } from 'react-native-responsive-dimensions'
import Home_Banner from '../../components/Home_Banner'

const Home = () => {


  return (
    <View style={styles.container}>
      <StatusBar translucent backgroundColor={'transparent'} barStyle={''}/>
      <ScrollView style={styles.scrollView}>
      <Home_Banner />
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
    flex: 1
  }
})