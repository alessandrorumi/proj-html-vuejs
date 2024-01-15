<script>
export default {
  name: 'AppHeader'
}
</script>

<template>
  <header>
    <h1>Header</h1>
    <nav>
      <ul>
      <li>
        <router-link :to="{ name: 'home' }">Home</router-link>
      </li>
      <li>
        <a href="*">Blog</a>
      </li>
      <li>
        <a href="*">Events</a>
      </li>
      <li>
        <a href="*">Gallery</a>
      </li>
      <li>
        <router-link :to="{ name: 'about' }">About</router-link>
      </li>
      <li>
        <router-link :to="{ name: 'contact' }">Contact</router-link>
      </li>
      <li>
        <a href="*">Shop</a>
      </li>
      <li>
        <i class="fa-solid fa-magnifying-glass"></i>
      </li>
    </ul>
    </nav>
    
  </header>
</template>

<style lang="scss" scoped>

header{
  background-color: black;
  color: white;
  nav{
    ul{
      display: flex;
      justify-content: end;
      list-style-type: none;
      text-decoration: none;
      
      
      li{
        margin-left: 10px;
        text-transform: uppercase;
        a{
        text-decoration: none;
        text-transform: uppercase;
        color: white;
      }
      }
      
    }
    
  }
}
</style>
