<template>
  <language-selector/>
  <router-view/>
</template>

<script>
  import LanguageSelector from './components/LanguageSelector.vue'
  export default {
    components: {
      LanguageSelector
    },
    created(){
      if(!localStorage.getItem('apiKey')){
        localStorage.setItem('apiKey', '?api_key=9351e600f206895685446eaf2d115b94')
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
