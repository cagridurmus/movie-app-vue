import { ThemeMovieAPI } from '../constants/constant'

export default{
    fetchMovies(){
        return fetch(ThemeMovieAPI + 'popular' + localStorage.getItem('apiKey') + localStorage.getItem('language') ?? '')
            .then((res)=> res.json())
    },

    fetchMovieDetails(id){
        return fetch(ThemeMovieAPI + id + localStorage.getItem('apiKey') + localStorage.getItem('language') ?? '')
            .then((res)=> res.json())
    },

    fetchMovieCasts(id){
        return fetch(ThemeMovieAPI + id + '/credits' + localStorage.getItem('apiKey') + localStorage.getItem('language') ?? '')
            .then((res)=> res.json())
    },
    fetchMovieVideos(id){
        return fetch(ThemeMovieAPI + id + '/videos' + localStorage.getItem('apiKey') + localStorage.getItem('language') ?? '')
            .then((res)=> res.json())
    }
}