import axios from 'axios'

const Config = {
    baseUrl : 'https://api.themoviedb.org/3/movie',
    token: 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwMWU0OTBiMzQ0MDc4MGVjYjI4NzQzZDE3ODhlZTBjOSIsInN1YiI6IjY1YTAwNGEyZjA2NDdjMDEyYmE0NTU0ZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.1FiGou-RN2Du3i3n8MnU06GCu8xo0mW88ghzctDcnng'
};
now_playing
export const getUpcomingMovies = async (data) =>{
    try {
        const response  = await axios.get(`${Config.baseUrl}/upcoming`,{
            headers : {
                Authorization : `Bearer ${Config.token}`
            }
        });
        const data = response.data
        const status = response.status
        return{success : true, data: data ,status: status};
    } catch (error) {
        return{success : false, data: error}
    }
}
export const getNowplayingMovies = async (data) =>{
    try {
        const response  = await axios.get(`${Config.baseUrl}/now_playing`,{
            headers : {
                Authorization : `Bearer ${Config.token}`
            }
        });
        const data = response.data
        const status = response.status
        return{success : true, data: data ,status: status};
    } catch (error) {
        return{success : false, data: error}
    }
}
export const getPopularMovies = async (data) =>{
    try {
        const response  = await axios.get(`${Config.baseUrl}/popular`,{
            headers : {
                Authorization : `Bearer ${Config.token}`
            }
        });
        const data = response.data
        const status = response.status
        return{success : true, data: data ,status: status};
    } catch (error) {
        return{success : false, data: error}
    }
}
export const getTopRatedMovies = async (data) =>{
    try {
        const response  = await axios.get(`${Config.baseUrl}/top_rated`,{
            headers : {
                Authorization : `Bearer ${Config.token}`
            }
        });
        const data = response.data
        const status = response.status
        return{success : true, data: data ,status: status};
    } catch (error) {
        return{success : false, data: error}
    }
}