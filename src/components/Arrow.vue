<script>
export default {
  data() {
    return {
      showArrow: false
    };
  },
  methods: {
    handleScroll() {
      this.showArrow = window.scrollY > 0;
    },
    scrollToTop() {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll);
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.handleScroll);
  }
};
</script>

<template>
  <div v-if="showArrow" @click="scrollToTop" class="arrow-button">
    <i class="fa-solid fa-chevron-up" style="color: #F2870C;"></i>
  </div>
</template>

<style scoped>
.arrow-button {
  position: fixed;
  bottom: 2rem;
  right: 2rem;
  cursor: pointer;
  color: #fff;
  border: 2px solid #F2870C;
  padding: .3rem .5rem;
  z-index: 200;
}

@media all and (max-width: 720px) {
  .arrow-button {
    display: none;
  }
}
</style>
