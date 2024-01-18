<script>
import HeaderNavbar from './HeaderNavbar.vue'
import SideNavbar from './SideNavbar.vue'

export default {
  name: 'AppHeader',

  data() {
    return {
      showEventsSideNav: false,
      showBurgerMenu: false,
      menuItems: [
        { name: 'Home', link: { name: 'home' } },
        { name: 'Blog', link: '*' },
        { name: 'Events', subItems: ['choral music', 'concert band', 'opera concerts', 'symphony orchestra', 'family concerts'] },
        { name: 'Gallery', link: '*' },
        { name: 'About', link: { name: 'about' } },
        { name: 'Contact', link: { name: 'contact' } },
        {
          name: "Shop",
  subItems: [
    { name: "Product type", "subItems": ["Simple product", "external/affiliate product", "downloadable product", "Group product", "In stock product", "Variable product"] },
    { name: "Shop Page", "subItems": ["check out", "cart", "downloads", "my account"] }
          ],
        },
      ],
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
        this.showEventsSideNav = false;
      }, 200);
    },
  },
};
</script>

<template>
  <header>
    <img src="../assets/img/Logo.png" alt="">
    <div>
      <HeaderNavbar class="header_navbar" :menuItems="menuItems" />
      <i @click="toggleSideNav" class="fa-solid fa-bars" v-show="!showBurgerMenu"></i>
      <i class="fa-solid fa-magnifying-glass"></i>
    </div>
    <SideNavbar v-show="showEventsSideNav" @close="hideSideNav" :menuItems="menuItems" />
    <button @click="hideSideNav" class="close-sidenav" v-show="showEventsSideNav"></button>
  </header>
</template>

<style lang="scss" scoped>
@import '../styles/partials/partials';
 

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
    padding-right: 5px;

    &:hover {
      color: $main-orange;
      cursor: pointer;
    }
  
  }
  .header_navbar{
    display: inline-block;
    }

  @media screen and (max-width: 1024px) {
    .fa-bars{
      display: inline-block;
    }
    .header_navbar{
    display: none;
    }
  }
}

.close-sidenav{
  width: 15%;
  height: 100vh;
  position: absolute;
  left: 0;
  top: 0;
  background-color: transparent;
  border: none;

}

.fa-magnifying-glass{
  padding-left: 10px;

  &:hover {
    cursor: pointer;
    color: $main-orange;
  }
}

img:hover {
  cursor: pointer;
}
</style>
