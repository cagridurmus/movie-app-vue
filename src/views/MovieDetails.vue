<template>
    <section>
        <loader v-if="this.isLoading"/>
        <section v-if="this.hasMovieDetails">
            <backdrop-image :imagePath="movie.backdrop_path"/> 
            <div class="container pt-5">
                <div class="row">
                    <div class="col-sm-4">
                        <poster :imagePath="movie.poster_path" class="poster" />
                    </div>
                    <div class="col-sm-8 details">
                        <h2>{{movie.title}}</h2>
                        <p>{{movie.overview}}</p>
                        <div>Runtime: {{runtime}}</div>
                        <div>Average Rating: {{movie.vote_average.toFixed(1)}}</div>
                        <div>Production Company: {{movie.production_companies[0].name}}</div>
                        <div>Release Date: {{movie.release_date}}</div>
                        <h4 class="mt-4">Cast</h4>
                        <router-link v-for="person in movie.cast" :key="person.cast_id" :to="personDetailsPath(person.id)" >
                            <img  :src="castAvatar(person.profile_path)" alt="" class="cast-avatar" />
                        </router-link>
                        <!-- <img v-for="person in movie.cast" :src="castAvatar(person.profile_path)" alt="" class="cast-avatar" :key="person.cast_id"/> -->
                        <h4 class="mt-4">Trailers</h4>
                        <a v-for="trailer in getTrailerVideos(this.movieId)" :key="trailer.id" :href="trailer.url" target="_blank" class="trailer">  
                            <span class="play-icon"/>  
                            <img :src="trailer.thumbnail" alt="">
                        </a>
                        <a :href="ticketsPath" class="btn btn-success ticket-button">Get tickets</a>
                    </div>
                </div>
            </div>
        </section>            
    </section>
</template>


<script>
    import BackdropImage from '@/components/BackdropImage.vue';
    import Loader from  '@/components/Loader.vue'
    import Poster from '@/components/Poster.vue'
    import { ImageAPIUrlpath, IMDBPersonIcon } from '@/constants/constant'
import { mapGetters } from 'vuex';
    export default {
        data(){
            return{
                isLoading : true,
                hasMovieDetails : false
            }
        },
        components:{
            BackdropImage,
            Loader,
            Poster
        },
        methods:{
            castAvatar(path){
                if(path){
                    
                    return ImageAPIUrlpath + 'w45'+ path
                }
                else{
                    return IMDBPersonIcon
                }
            },
            personDetailsPath(personId){
                console.log(personId)
                return `person/${personId}`
            }
        },
        created(){
            this.$store.dispatch('fetchMovieDetails', this.movieId).then(() => {
                this.$store.dispatch('fetchMovieCasts', this.movieId).then(()=> {
                    this.$store.dispatch('fetchMovieVideos', this.movieId).then(()=> {
                        this.isLoading = false,
                        this.hasMovieDetails = true
                    })
                    
                })
                
            })
        },
        computed: {
            ...mapGetters([
                'getTrailerVideos'
            ]),

            movieId(){
                return this.$route.params.id;
            },
            movie(){
                return this.$store.state.movieDetails[this.movieId]
            },
            runtime(){
                const { runtime } = this.movie
                const hour = Math.floor(runtime / 60)
                const minute = runtime % 60
                return `${hour}h ${minute}m`
            },
            ticketsPath(){
                return `${this.movieId}/tickets`
            }
            
        }
    }
</script>

<style>
    .details{
        color: #fff;
    }
    .cast-avatar{
        width: 45px;
        height: 45px;
        border-radius: 45px;
        border: 2px solid #fff;
        box-sizing: border-box;
        margin-right: 10px;
    }
    .trailer{
        width: 120px;
        height: 120px;
        display: inline-block;
        margin-right: 20px;
        position: relative;
    }
    .trailer img{
        width: 100%;
        height: 100%;
    }
    .play-icon{
        background-image: url(http://f.acet.me/LXIk.png);
        background-size: 75px 75px;
        position: absolute;
        width: 60px;
        height: 60px;
        top: 18px;
        left: 20px;
        display: block;
    }
    .ticket-button{
        position: absolute;
        top: 0;
        right: 15px;
    }
</style>