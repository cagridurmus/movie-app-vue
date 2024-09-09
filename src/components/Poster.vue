<template>
  <img class="poster" :src="getImagePath">
</template>

<script>
    import { ImageAPIUrlpath } from '../constants/constant'
    export default {
        props: {
            imagePath:{
                type: String,
                required: true
            }
        },
        computed:{
            getImagePath(){
                return ImageAPIUrlpath + `w500${this.imagePath}`
            }
        }
    }
</script>

<style>
    .poster{
        width: 100%;
    }
</style>