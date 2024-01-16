<script>

export default {
    name: 'SideNavbar',
    methods: {
    closeSideNav() {
      this.$emit('close');
    }
  }
  }
</script>

<template>
    <div>
        <i @click="closeSideNav" class="fa-solid fa-x"></i>
        ciao
    </div>
 
</template>

<style lang="scss">
</style>
