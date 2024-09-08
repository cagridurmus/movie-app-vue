<template>
    <div>
        <app-header/>
        <loader v-if="isLoading"/>
        <section class="movies container py-5">
            <div v-for="group in groupedMovies" :key="group[0]" class="card-deck">
                <movie v-for="movie in group" :key="movie.id" :movie="movie">{{movie}}</movie>
            </div>
        </section>
    </div>
</template>


<script>
    import AppHeader from '../components/AppHeader.vue'
    import Loader from '../components/Loader.vue'
    import Movie from '../components/Movie.vue'
    import { mapGetters} from 'vuex';
    export default {
        name: 'Home',
        components:{
            AppHeader,
            Loader,
            Movie
        },
        data(){
            return{
                isLoading: true
            }
        },
        computed:{
            ...mapGetters([
                'movies',
                'groupedMovies',
            ])
        },
        created(){
            this.$store.dispatch('fetchMovies').then(()=>{
                this.isLoading = false
            });
        }
    }
</script>

<style>

</style>