import { createStore } from 'vuex'
import service from '../services/service'

export default createStore({
  state: {
    movies: [],
    movieDetails: {},
    language : ''
  },
  getters: {
    movies(state){
      return state.movies
    },
    groupedMovies(state){
      const grouped = []

      state.movies.forEach((movie, index) => {
        if(index % 3 === 0){
          grouped.push([])
        }

        grouped[grouped.length - 1].push(movie)
      })

      return grouped;
    },
    getTrailerVideos: (state) => (id) =>{
      const trailers = []
      state.movieDetails[id].videos.forEach((video, index) => {
        if(video.type === 'Trailer'){
          trailers.push({
            thumbnail: `https://i.ytimg.com/vi/${video.key}/sddefault.jpg`,
            url: `https://www.youtube.com/watch?v=${video.key}`
          })
        }
      })
      return trailers;
    }
  },
  mutations: {
    setMovie(state, payload){
      state.movies = payload;
    },
    setMovieDetails(state, payload){
      const { id, data } = payload
      state.movieDetails[id] = data
    },
    setMovieCasts(state, payload){
      const { id , data } = payload
      if (state.movieDetails[id]) {
        state.movieDetails[id] = {
          ...state.movieDetails[id],
          cast: data
        };
      }
    },
    setMovieVideos(state, payload){
      const { id , data } = payload
      if (state.movieDetails[id]) {
        state.movieDetails[id] = {
          ...state.movieDetails[id],
          videos: data
        };
      }
    },
    changeLanguage(state, payload){
      state.language = payload
    }
  },
  actions: {
    fetchMovies(context){
      return service.fetchMovies().then((res) => {
        context.commit('setMovie', res.results)
        
      })
    },
    fetchMovieDetails(context, id){
      return service.fetchMovieDetails(id).then((res) => {
        context.commit('setMovieDetails', {
          id: id,
          data: res
        })
        
      })
    },
    fetchMovieCasts(context, id){
      return service.fetchMovieCasts(id).then((res)=>{
        context.commit('setMovieCasts', {
          id: id,
          data: res.cast
        })
      })
    },
    fetchMovieVideos(context, id){
      return service.fetchMovieVideos(id).then((res)=>{
        context.commit('setMovieVideos', {
          id: id,
          data: res.results
        })
      })
    },
    changeLanguage(context, value){
      context.commit('changeLanguage', value)
    }
  },
  modules: {
  }
})
