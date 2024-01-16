<script>
import HeaderNavbar from './HeaderNavbar.vue'
import SideNavbar from './SideNavbar.vue'

export default {
  name: 'AppHeader',

  data() {
    return {
      showEventsSideNav: false,
    };
  },

  components: {
    HeaderNavbar,
    SideNavbar,
  },

  
  
  methods: {
    toggleSideNav() {
      this.showEventsSideNav = !this.showEventsSideNav;
    },
    hideSideNav() {
      this.showEventsSideNav = false;
    },
  },
 
}
</script>

<template>
  <header>
    <img src="../assets/img/Logo.png" alt="">
    
    <HeaderNavbar class="header_navbar" />
    <i @click="toggleSideNav" class="fa-solid fa-bars"  style="color: #ffffff;" v-show="!showEventsSideNav"></i>
    <SideNavbar v-show="showEventsSideNav" @close="hideSideNav" />
    
  </header>
</template>

<style lang="scss" scoped>
 

header{
  position: fixed;
  top:0;
  width: 100%;
  z-index: 5001;
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
