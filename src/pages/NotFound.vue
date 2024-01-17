<!-- NotFound.vue -->
<template>
    <div>
        <h1>Oops! That page can’t be found. </h1>
    <p>It looks like nothing was found at this location. </p>
    <router-link to="/">Back to the main page</router-link>
    </div>
  </template>
  
  <script>

  export default {
    name: 'notfound',
  };
  </script>
  
  <style lang="scss" scoped>
  @import '../styles/partials/_partials.scss';

 div{
   
    background-color: black;
    border-bottom: 1px solid rgb(71, 71,71 );
    color: white;
    padding-top: 200px;
    padding-bottom: 100px;
    padding-left: 50px;
    
    h1{
        text-transform: uppercase;
        font-size: 40px;
    }
    p{
        margin: 10px auto;
    }
    a{

        font-size: 20px;
        color: $main_orange;
    }

 }
  </style>
  