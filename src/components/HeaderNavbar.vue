<script>
export default {
  name: 'HeaderNavbar',
  data() {
    return {
      showEventsDropdown: false,
      showShopDropdown: false,
      showPTypeDropleft: false,
      showSPageDropleft: false,
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
  },
}
</script>

<template>
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
          </div>
        </li>
      
    </ul>
    </nav>
   
    </div>
</template>

<style lang="scss" scoped>
@import '../styles/partials/_partials.scss';
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
        z-index: 500;
      
      
        position: absolute;
        min-width: 250px;

       

        

        ul{
          flex-direction: column;
          width: 100%;
          li{
            
            width: 100%;
            padding: 7px 5px;
            border-bottom:1px solid rgb(71, 71, 71) ;
            padding-left: 10px;
          }
          li:last-of-type{
            border-bottom:none ;
          }
        }
    
      }


      .shop_submenu, .events_submenu{
        background: linear-gradient(
          to bottom,
          transparent 42px,
          $main_gray 42px 100%,
        );
        padding-top: 62px;
        top:20px;
        right:0;
      }

      .ptype_submenu, .spage_submenu{
        background-color: $main_gray;
        top: 0px;
        right: 250px;
        padding: 7px 5px;
      }

     
      }

    
      
    }
    
  }

  i{
        margin-left:10px
      }

      i:hover{
        margin: 0 10px;
          color: $main_orange;
      }


  }
</style>
