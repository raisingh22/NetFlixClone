import { Dimensions, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { myColor } from '../../utils/Theme'

const Home = () => {
  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <View style={{
          backgroundColor:myColor.secondary,
          width:"100%",
          flex:1,
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

  }
})