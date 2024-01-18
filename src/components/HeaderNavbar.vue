<script>
export default {
  props: ['menuItems'],
  data() {
    return {
      currentSubMenu: null,
      currentSubSubMenu: null,
    };
  },
  methods: {
    showSubMenu(index) {
      this.currentSubMenu = index;
    },
    hideSubMenu() {
      setTimeout(() => {
        this.currentSubMenu = null;
      }, 30);
    },
    showSubSubMenu(index) {
      this.currentSubSubMenu = index;
    },
    hideSubSubMenu() {
      setTimeout(() => {
      this.currentSubSubMenu = null;
    }, 30);
    },
  
  },
};
</script>

<template>
  <div>
    <nav>
      <ul>
        <li v-for="(menuItem, index) in menuItems" :key="index" class="menu_li">
          <router-link v-if="menuItem.link" :to="menuItem.link">{{ menuItem.name }}</router-link>
          <div
            v-else
            class="menu-container"
            @mouseover="showSubMenu(index)"
            @mouseleave="hideSubMenu"
          >
            {{ menuItem.name }} <i v-if="menuItem.subItems || menuItem.subItems[0].subItems" class="fa-solid fa-chevron-down"></i>
            <div v-if="menuItem.subItems && currentSubMenu === index" class="submenu">
              <ul>
                <li v-for="(subItem, subIndex) in menuItem.subItems" @mouseover="showSubSubMenu(subIndex)"
                    @mouseleave="hideSubSubMenu" :key="subIndex">
                  <a
                    href="#"
                    
                  >
                    {{ subItem.name || subItem }}
                  </a>
                  <!-- Aggiunta sub_submenu solo per Product Type e Shop Page -->
                  <div
                    v-if="subItem.subItems && currentSubSubMenu === subIndex"
                    class="sub_submenu"
                  >
                    <ul>
                      <li
                        v-for="(subSubMenu, subSubMenuIndex) in subItem.subItems"
                        :key="subSubMenuIndex"
                      >
                        <a href="#">{{ subSubMenu.name || subSubMenu }}</a>
                      </li>
                    </ul>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </li>
      </ul>
    </nav>
  </div>
</template>

<style lang="scss" scoped>
@import '../styles/partials/_partials.scss';

div {
  display: flex;
  nav {
    ul {
      display: flex;
      justify-content: end;
      align-items: center;
      list-style-type: none;
      text-decoration: none;

      .menu_li {
        margin-left: 10px;
      }

      li {
        font-weight: bold;
        text-transform: uppercase;
        position: relative;

        div {
          i {
            padding-top: 3px;
          }
        }

        .menu-container:hover {
          color: $main_orange;
        }

        a {
          text-decoration: none;
          text-transform: uppercase;
          color: white;

          &:hover {
            color: $main_orange;
          }
        }

        .submenu {
          z-index: 500;
          position: absolute;
          min-width: 250px;
          right: 0;
          padding-top: 62px;
          top: 20px;
          right: 0;
          background: linear-gradient(
            to bottom,
            transparent 42px,
            $main_gray 42px 100%,
          );

          ul {
            flex-direction: column;
            width: 100%;

            li {
              width: 100%;
              padding: 7px 5px;
              border-bottom: 1px solid rgb(71, 71, 71);
              padding-left: 10px;

              &:last-of-type {
                border-bottom: none;
              }
            }
          }
        }

        .sub_submenu {
          background-color: $main_gray;
          display: none;
          z-index: 600;
          position: absolute;
          min-width: 250px;
          top: 0;
          right: 100%;
          padding-top: 0;

          ul {
            flex-direction: column;
            width: 100%;

            li {
              width: 100%;
              padding: 7px 5px;
              border-bottom: 1px solid rgb(71, 71, 71);
              padding-left: 10px;

              &:last-of-type {
                border-bottom: none;
              }
            }
          }
        }
      }
    }
  }

  i {
    margin-left: 10px;

    &:hover {
      color: $main_orange;
    }
  }
}

.submenu:hover .sub_submenu,
.menu-container:hover .submenu {
  display: block;
}

li:hover {
  cursor: pointer;
}
</style>
