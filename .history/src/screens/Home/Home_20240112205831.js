import { Dimensions, ScrollView, StatusBar, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { myColor } from '../../utils/Theme'
import { getNowplayingMovies, getUpcomingMovies } from '../../api/Network'
import { responsiveHeight } from 'react-native-responsive-dimensions'
import Home_Banner from '../../components/Home_Banner'
import MovieCards from '../../components/MovieCards'

const Home = () => {
  const [nowPlayingData, setNowPlayingData] = useState([]);
  useEffect(() => {
      const handleApi = async () => {
          const { data, status } = await getNowplayingMovies();
          if (status === 200) {
              setNowPlayingData(data.results);
          } else {
              Alert.alert(`Request error: ${data} ` + status);
          }
      };
      handleApi();
  }, []);

  return (
    <View style={styles.container}>
      <StatusBar
        translucent
        backgroundColor={'transparent'}
        barStyle={'light-content'} />
      <ScrollView style={styles.scrollView}>
        <Home_Banner />
        <View style={styles.subContainer}>
          <MovieCards title={'Now Playing'}/>
          {/* <MovieCards title={'Top Rated'}/>
          <MovieCards title={'Top Movies'}/> */}
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
    flex: 1
  },
  subContainer:{
    paddingHorizontal:15,
    gap:10,
    marginTop:20
  }
})