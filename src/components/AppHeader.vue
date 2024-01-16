<script>
import HeaderNavbar from './HeaderNavbar.vue'
import SideNavbar from './SideNavbar.vue'

export default {
  name: 'AppHeader',

  data() {
    return {
      showEventsSideNav: false,
      showBurgerMenu:false
    };
  },

  components: {
    HeaderNavbar,
    SideNavbar,
  },

  
  
  methods: {
    toggleSideNav() {
      this.showEventsSideNav = !this.showEventsSideNav;
      setTimeout(() => {
        this.showBurgerMenu = !this.showBurgerMenu;
    document.querySelector('.side-navbar').classList.toggle('open');
  }, 200);
    },
    hideSideNav() {
      document.querySelector('.side-navbar').classList.remove('open');
      this.showBurgerMenu = !this.showBurgerMenu;
      setTimeout(() => {
        this.showEventsSideNav = false;;
  }, 200);
    },
  },
 
}
</script>

<template>
  <header>
    <img src="../assets/img/Logo.png" alt="">
    
    <HeaderNavbar class="header_navbar" />
    <i @click="toggleSideNav" class="fa-solid fa-bars"  style="color: #ffffff;" v-show="!showBurgerMenu"></i>
    <SideNavbar v-show="showEventsSideNav" @close="hideSideNav"  />
    
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
