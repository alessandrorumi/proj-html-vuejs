

<script>
export default {
  props: ['menuItems'],
  data() {
    return {
      openSubMenus: [],
    };
  },
  methods: {
    closeSideNav() {
      this.$emit('close');
      this.openSubMenus = []; // Reset the array when closing the sidebar
    },
    toggleSubMenu(index) {
      if (this.openSubMenus.includes(index)) {
        this.openSubMenus = this.openSubMenus.filter(i => i !== index); // Close the submenu if it's open
      } else {
        this.openSubMenus.push(index); // Open the submenu if it's closed
      }
    },
    toggleSubSubMenu(subIndex) {
      if (this.openSubMenus.includes(subIndex)) {
        this.openSubMenus = this.openSubMenus.filter(i => i !== subIndex); // Close the sub_submenu if it's open
      } else {
        this.openSubMenus.push(subIndex); // Open the sub_submenu if it's closed
      }
    },
  },
};
</script>

<template>
  <div class="side-navbar">
    <i @click="closeSideNav" class="fa-solid fa-x"></i>
    <nav>
      <ul>
        <li v-for="(menuItem, index) in menuItems" :key="index" class="menu_li">
          <router-link v-if="menuItem.link" :to="menuItem.link">{{ menuItem.name }}</router-link>
          <a v-else href="#" @click="toggleSubMenu(index)">
            {{ menuItem.name }}
            <i v-if="menuItem.subItems" :class="{'fa-solid fa-chevron-down': !openSubMenus.includes(index), 'fa-solid fa-chevron-up': openSubMenus.includes(index)}"></i>
          </a>
          <ul v-if="menuItem.subItems && openSubMenus.includes(index)" class="submenu">
            <li v-for="(subItem, subIndex) in menuItem.subItems" :key="subIndex">
              <a href="#" @click="toggleSubSubMenu(subIndex)">
                {{ subItem.name || subItem }}
                <i v-if="subItem.subItems" :class="{'fa-solid fa-chevron-down': !openSubMenus.includes(subIndex), 'fa-solid fa-chevron-up': openSubMenus.includes(subIndex)}"></i>
              </a>
              <ul v-if="subItem.subItems && openSubMenus.includes(subIndex)" class="sub_submenu">
                <li v-for="(subSubMenu, subSubMenuIndex) in subItem.subItems" :key="subSubMenuIndex">
                  <a href="#">{{ subSubMenu.name || subSubMenu }}</a>
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
            .fa-chevron-up ,.fa-chevron-down{
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
