<template>
  <language-selector/>
  <router-view/>
</template>

<script>
  import LanguageSelector from './components/LanguageSelector.vue'
  İM
  export default {
    components: {
      LanguageSelector
    },
    created(){
      if(!localStorage.getItem('apiKey')){
        localStorage.setItem('apiKey', `?api_key=${process.VUE_MOVIE_APP_API_KEY}`)
      } 
    }
  }
</script>>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

</style>
