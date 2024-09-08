<template>
  <div class="card">
    <router-link :to="movieDetailsPath" >
        <!-- <img class="card-img-top" :src="posterPath" :alt="movie.original_title"/> -->
        <poster :imagePath="this.movie.poster_path" :alt="movie.original_title" />
    </router-link>
    <div class="card-block">
        <h4 class="card-title">{{ movie.original_title }}</h4>
        <p class="card-text">{{ movie.overview }}</p>
    </div>
    <div class="card-footer">
        <small class="text-muted">Averate Rating: {{ movie.vote_average.toFixed(2) }}</small>
    </div>    
  </div>
</template>

<script>
    import Poster from "../components/Poster.vue";
    export default {
        name: 'Movie',
        components: {
            Poster
        },
        props:{
            movie:{
                type: Object,
                required: true
            }
        },
        computed:{
            movieDetailsPath(){
                return `/movie/${this.movie.id}`
            }
        }
    }
</script>

<style>
    .card{
        margin-bottom: 30px;
        min-width: 250px;
    }
</style>