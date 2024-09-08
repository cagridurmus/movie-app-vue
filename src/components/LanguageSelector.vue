<template>
    <div class="flags-container">
        <img @click="changeLanguage" id="&language=tr-TR" src="https://icons.iconarchive.com/icons/iconscity/flags/256/turkey-icon.png" class="circle-image"/>
        <img @click="changeLanguage" src="https://icons.iconarchive.com/icons/icons-land/vista-flags/256/English-Language-Flag-1-icon.png" class="circle-image" />
    </div>
</template>

<script>
export default {
    methods:{
        changeLanguage(event){
            localStorage.setItem('language', event.target.id)
            window.location.reload()
        }
    }
}
</script>

<style>
    .circle-image{
        width: 45px;
        height: 45px;
        border-radius: 45px;
        border: 2px solid #fff;
        box-sizing: border-box;
        margin-right: 10px;
        cursor: pointer;
    }

    .flags-container {
        position: absolute;
        z-index: 10; 
        margin-top: 5px; 
        right: 0;
        /* display: flex;  */
    }
</style>