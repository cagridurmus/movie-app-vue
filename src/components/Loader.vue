<template>
    <i class="loader"></i>
</template>

<style>
    .loader{
        border: 5px solid #f3f3f3;
        border-top: 5px solid #292B2C;
        border-radius: 50%;
        width: 40px;
        height: 40px;
        animation: spin 1s linear infinite;
        display: inline-block;
        position: relative;
        left: 50%;
        margin: 30px 0 30px -20px;
    }

    @keyframes spin{
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
    }

</style>