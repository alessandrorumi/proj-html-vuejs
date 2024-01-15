<script>

export default {
  name: 'AppHeader',

  data() {
    return {
      showEventsDropdown: false,
      showShopDropdown: false,
    };
  },
  methods: {
    showEventsMenu() {
      this.showEventsDropdown = true;
    },
    hideEventsMenu() {
      this.showEventsDropdown = false;
    },
    showShopMenu() {
      this.showShopDropdown = true;
    },
    hideShopMenu() {
      this.showShopDropdown = false;
    },
  },
}
</script>

<template>
  <header>
    <img src="../assets/img/Logo.png" alt="">

    <div>
      <nav>
      <ul>
      <li class="menu_li">
        <router-link :to="{ name: 'home' }">Home</router-link>
      </li>
      <li class="menu_li">
        <a href="*">Blog</a>
      </li>
      <li class="menu_li" @mouseover="showEventsMenu" @mouseleave="hideEventsMenu">
          <a href="#">Events <i class="fa-solid fa-chevron-down"></i></a>
          <div v-show="showEventsDropdown" class="events_submenu submenu">
            <ul>
              <li><a href="#">choral music</a></li>
              <li><a href="#">concert band</a></li>
              <li><a href="#">opera concerts</a></li>
              <li><a href="#">symphony orchestra</a></li>
              <li><a href="#">family concerts</a></li>
            </ul>
          </div>
        </li>
      <li class="menu_li">
        <a href="*">Gallery</a>
      </li>
      <li class="menu_li">
        <router-link :to="{ name: 'about' }">About</router-link>
      </li>
      <li class="menu_li">
        <router-link :to="{ name: 'contact' }">Contact</router-link>
      </li>
      <li class="menu_li" @mouseover="showShopMenu" @mouseleave="hideShopMenu">
          <a href="#">Shop <i class="fa-solid fa-chevron-down"></i></a>
          <div v-show="showShopDropdown" class="shop_submenu submenu">
            <ul>
              <li><a href="#">Product type</a></li>
              <li><a href="#">Shop Page</a></li>
            </ul>
          </div>
        </li>
      
    </ul>
    </nav>
    <i class="fa-solid fa-magnifying-glass"></i>
    </div>
   
    
  </header>
</template>

<style lang="scss" scoped>
 @import '../styles/partials/_partials.scss';

header{
  padding: 0 35px;
  height: 100px;
  background-color: black;
  color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0px 2px 20px rgb(255, 255, 255 , 0.3);
  div{
    display: flex;
    nav{
    ul{
      display: flex;
      justify-content: end;
      align-items: center;
      list-style-type: none;
      text-decoration: none;
      
      .menu_li{
        margin-left: 10px;
      }
      li{
       font-weight: bold;
        text-transform: uppercase;
        position: relative;
        a{
        text-decoration: none;
        text-transform: uppercase;
        color: white;
      }
     
      a:hover{
        color: $main_orange;
      }

      .submenu{
        
        background: linear-gradient(
          to bottom,
          transparent 62px,
          $main_gray 62px 100%,
        );
      
        position: absolute;
        min-width: 250px;

        top:0;
        right:0;

        padding-top: 62px;

        ul{
          flex-direction: column;
          width: 100%;
          li{
            
            width: 100%;
            padding: 7px 5px;
            border-bottom:1px solid rgb(71, 71, 71) ;
          }
          li:last-of-type{
            border-bottom:none ;
          }
        }
    
      }

      }

    
      
    }
    
  }

  i{
        margin: 0 10px;
      }

      i:hover{
        margin: 0 10px;
          color: $main_orange;
      }


  }
  
}
</style>
