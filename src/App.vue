<script>
import AppHeader from './components/AppHeader.vue'
import AppFooter from './components/AppFooter.vue'
import Arrow from './components/Arrow.vue';

export default {
  components: {
    AppHeader,
    AppFooter,
    Arrow
}
  }
</script>

<template>
  <AppHeader />
<router-view></router-view>
<AppFooter />
<Arrow />
</template>

<style lang="scss">
</style>
