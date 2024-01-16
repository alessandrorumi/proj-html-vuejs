<script>

export default {
    name: 'SideNavbar',

    data() {
    return {
      showEventsDropdown: false,
      showShopDropdown: false,
      showPTypeDropleft: false,
      showSPageDropleft: false,
    };
  },

    methods: {
    closeSideNav() {
      this.$emit('close');
    },
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
    showPTypeMenu() {
      this.showPTypeDropleft = true;
    },
    hidePTypeMenu() {
      this.showPTypeDropleft = false;
    },
    showSPageMenu() {
      this.showSPageDropleft = true;
    },
    hideSPageMenu() {
      this.showSPageDropleft = false;
    },
  }
  }
</script>

<template>
    <div>
        <i @click="closeSideNav" class="fa-solid fa-x"></i>

        <nav>
      <ul>
      <li class="menu_li">
        <router-link :to="{ name: 'home' }">Home</router-link>
      </li>
      <li class="menu_li">
        <a href="*">Blog</a>
      </li>
      <li class="menu_li" >
          <a href="#">Events <i @mouseover="showEventsMenu" @mouseleave="hideEventsMenu" class="fa-solid fa-chevron-down"></i></a>
          
            <ul v-show="showEventsDropdown" class="events_submenu submenu">
              <li><a href="#">choral music</a></li>
              <li><a href="#">concert band</a></li>
              <li><a href="#">opera concerts</a></li>
              <li><a href="#">symphony orchestra</a></li>
              <li><a href="#">family concerts</a></li>
            </ul>
          
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
      <li class="menu_li" >
          <a  href="#">Shop <i @mouseover="showShopMenu" @mouseleave="hideShopMenu" class="fa-solid fa-chevron-down"></i></a>
          
            <ul v-show="showShopDropdown" class="shop_submenu submenu">
              <li @mouseover="showPTypeMenu" @mouseleave="hidePTypeMenu"><a href="#"><i class="fa-solid fa-angle-left"></i> Product type</a>
              
                <ul v-show="showPTypeDropleft" class="ptype_submenu submenu">
                <li>
                  <a href="">Simple product</a>
                </li>
                <li>
                  <a href="">external/affiliate product</a>
                </li>
                <li>
                  <a href="">downloadable product</a>
                </li>
                <li>
                  <a href="">Group product</a>
                </li>
                <li>
                  <a href="">In stock product</a>
                </li>
                <li>
                  <a href="">Variavle product</a>
                </li>
            </ul></li>
              <li @mouseover="showSPageMenu" @mouseleave="hideSPageMenu"><a href="#"><i class="fa-solid fa-angle-left"></i> Shop Page</a>
             

            <ul v-show="showSPageDropleft" class="spage_submenu submenu">
                <li>
                  <a href="">ceck out</a>
                </li>
                <li>
                  <a href="">cart</a>
                </li>
                <li>
                  <a href="">downloads</a>
                </li>
                <li>
                  <a href="">my account</a>
                </li>
                
            </ul>
              </li>
            </ul>
          
        </li>
      
    </ul>
    </nav>
       
    </div>
 
</template>

<style scoped lang="scss">
@import '../styles/partials/_partials.scss';

div {
  position: fixed;
  top: 0;
  right: 0; 
  height: 100vh;
  width: 75%;
  background-color:#090c10;
    text-align: end;

    i{
        padding: 10px 20px;
    }

    ul{
        text-align: start;
        list-style-type: none;
        text-decoration: none;
        padding: 40px 10px;
        
        li{
            padding: 9px 10px;
            position: relative;
            border-bottom:1px solid rgb(71, 71, 71) ; 
            a{
            text-decoration: none;
            color: white;
            display: flex;
            justify-content: space-between;
            i{
                border-left:1px solid rgb(71, 71, 71) ; ;
            }

            a:hover{
             color: $main_orange;
            }

        }
    }
}
 
}



</style>
