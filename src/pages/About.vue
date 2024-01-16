<script>
export default {
  name: 'About'
}
</script>

<template>
  <main>
    <section>
      <div class="about-entry">
        <h1>ABOUT US</h1>
        <span>
          <router-link class="link" :to="{ name: 'home' }">Home</router-link> / About Us
        </span>
      </div>
    </section>
  </main>
</template>

<style lang="scss" scoped>
@import '../styles/partials/_partials.scss';

.about-entry {
  height: 300px;
  background-color: $main_gray;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;

  h1 {
    font-size: 60px;
    color: #fff;
  }

  span,
  .link {
    color: #fff;
    letter-spacing: 2px;
    padding-top: 10px;
  }

  .link:hover {
    color: $main_orange;
  }
}
</style>
