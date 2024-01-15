<script>
export default {
  name: 'AppHeader'
}
</script>

<template>
  <header>
    <h1>Header</h1>
    <ul>
      <li>
        <router-link :to="{ name: 'contact' }">Vai a Contact</router-link>
      </li>
    </ul>
  </header>
</template>

<style lang="scss" scoped>
</style>
