<!-- Da Sistemare: click invece che hover su side submenu / hover orange su sidemebu / bordi di sidesmenu / subsubmenu -->

<script>

export default {
    name: 'SideNavbar',

    data() {
    return {
      showEventsDropdown: false,
      showShopDropdown: false,
      showPTypeDropdown: false,
      showSPageDropdown: false,
    };
  },

    methods: {
    closeSideNav() {
      this.$emit('close');
    },
    toggleEventsMenu() {
      this.showEventsDropdown = !this.showEventsDropdown;
    },
    toggleShopMenu() {
      this.showShopDropdown = !this.showShopDropdown;
    },
    togglePTypeMenu() {
      this.showPTypeDropdown = !this.showPTypeDropdown;
    },
    toggleSPageMenu() {
      this.showSPageDropdown = !this.showSPageDropdown;
    },
  }
  }
</script>

<template>
    <div class="side-navbar">
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
          <a @click="toggleEventsMenu" href="#">Events <i  class="fa-solid fa-chevron-down"></i></a>
          
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
          <a @click="toggleShopMenu" href="#">Shop <i  class="fa-solid fa-chevron-down"></i></a>
          
            <ul v-show="showShopDropdown" class="shop_submenu submenu">
              <li @click="togglePTypeMenu"><a href="#"> Product type <i  class="fa-solid fa-chevron-down"></i></a>
              
                <ul v-show="showPTypeDropdown" class="ptype_submenu submenu">
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
              <li @click="toggleSPageMenu"><a href="#"> Shop Page <i  class="fa-solid fa-chevron-down"></i></a>
             

            <ul v-show="showSPageDropdown" class="spage_submenu submenu">
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
  overflow-y: auto;
  position: fixed;
  top: 0;
  right: -85%; 
  height: 100vh;
  width: 85%;
  background-color:#090c10;
  text-align: end;
  transition:all 0.3s ease ;
  filter: opacity(0);
  .open{
    right: 0;
    filter: opacity(100%);
  }

    .fa-x{
        padding-top: 40px;
        padding-right: 40px;
    }

    ul{
      
        text-align: start;
        list-style-type: none;
        text-decoration: none;
        border-bottom:1px solid rgb(71, 71, 71) ; 
        li{
          line-height: 50px;
            position: relative;
            border-bottom:1px solid rgb(71, 71, 71) ; 
            a{
              padding-left: 20px;
              text-transform: capitalize;
            text-decoration: none;
            color: white;
            display: flex;
            justify-content: space-between;
            .fa-chevron-down{
                border-left:1px solid rgb(71, 71, 71) ; 
                line-height: 50px;
                padding: 0 15px;

            }


          
        }
        a:hover{
             color: $main_orange;
            }


            ul{
              border-top: 1px solid rgb(71, 71, 71) ;
              
            }
    }
    li:last-of-type{
      border-bottom:none ; 
    }
}
 
}



</style>
