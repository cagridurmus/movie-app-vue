<template>
    <img :src="getImagePath" alt="" class="backdrop-image">
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
                return ImageAPIUrlpath + `w1280${this.imagePath}`
            }
        }
    }
</script>

<style>
    .backdrop-image{
        width: 100%;
        height: 100vh;
        position: absolute;
        top: 0;
        left: 0;
        filter: blur(30px);
        transform: scale(1.1);
    }
</style>