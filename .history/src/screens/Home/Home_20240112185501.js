import { Dimensions, ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import { myColor } from '../../utils/Theme'
import { getUpcomingMovies } from '../../api/Network'

const Home = () => {
  useEffect(() => {
   getUpcomingMovies()
  }, [])
  
  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <View style={{
          backgroundColor:'red',
          // width:"300%",
          // flex:1,
          height:300
        }}>
        <Text style={{color: myColor.primary}}>Home</Text>
        </View>
        <View style={{
          backgroundColor:'blue',
          // width:"300%",
          // flex:1,
          height:300
        }}>
        <Text style={{color: myColor.primary}}>Home</Text>
        </View>
        <View style={{
          backgroundColor:'green',
          // width:"300%",
          // flex:1,
          height:300
        }}>
        <Text style={{color: myColor.primary}}>Home</Text>
        </View>

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