import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { myColor } from '../utils/Theme'
import { getUpcomingMovies } from '../api/Network'

const Home_Banner = () => {
    const [upComingApiData , setUpComingApiData] = useState([]);
    useEffect(() => {
       const handleUpComingApi = async()=>{
        const {data , status} = await getUpcomingMovies();
        if (status === 
       }
       }, [])
  return (
    <View>
      <Text style={{color:myColor.secondary}}>Home_Banner</Text>
    </View>
  )
}

export default Home_Banner

const styles = StyleSheet.create({})