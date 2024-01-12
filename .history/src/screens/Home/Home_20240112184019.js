import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { myColor } from '../../utils/Theme'

const Home = () => {
  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <Text style={{color}}>Home</Text>
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