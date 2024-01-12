import { Dimensions, ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import { myColor } from '../../utils/Theme'
import { getUpcomingMovies } from '../../api/Network'

const Home = () => {
  useEffect(() => {
   getUpcomingMovies(data);
  }, [])
  
  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <View style={{
          backgroundColor:'red',
          
        }}>
        <Text style={{color: myColor.primary}}>Home</Text>
        </View>
        <View style={{
          backgroundColor:'blue',
          
        }}>
        <Text style={{color: myColor.primary}}>Home</Text>
        </View>
        <View style={{
          backgroundColor:'green',
          
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