<script>
import HeaderNavbar from './HeaderNavbar.vue'

export default {
  name: 'AppHeader',

  components: {
    HeaderNavbar,
  }

 
}
</script>

<template>
  <header>
    <img src="../assets/img/Logo.png" alt="">
    
    <HeaderNavbar class="header_navbar" />
    <i class="fa-solid fa-bars" style="color: #ffffff;"></i>
    
  </header>
</template>

<style lang="scss" scoped>
 

header{
  padding: 0 35px;
  height: 100px;
  background-color: black;
  color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0px 2px 20px rgb(255, 255, 255 , 0.3);
 
  
  .fa-bars{
    display: none;
  }

  @media screen and (max-width: 1024px) {
    .fa-bars{
      display: block;
    }
    .header_navbar{
    display: none;
    }
  }
}

// ===MQ====


</style>
