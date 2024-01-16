<script>
import home1 from '../assets/img/home-1.png';
import home2 from '../assets/img/home-2.png';

export default {
  name: 'AppHome',
  data() {
    return {
      images: [home1, home2],
      index: 0
    }
  },
  computed: {
    currentImage() {
      return this.images[this.index];
    }
  },
  methods: {

    // carousel previous image
    prevImage() {
      if (this.index === 0)
      this.index = 1
      else {
        this.index--
      }
    },

    // carousel next image
    nextImage() {
      if (this.index === 1)
      this.index = 0
      else {
        this.index++
      }
    }
  }
}
</script>

<template>
  <main>
    <!-- carousel -->
    <section class="carousel">
      <div class="item">
        <img :src="currentImage" alt="">
        <div class="titles">
          <h3>INSTRUMENTAL ROCK</h3>
          <h1>MUSIC</h1>
        </div>
        <button class="prev" @click="prevImage"><i class="fa-solid fa-chevron-left" style="color: #ffffff;"></i></button>
        <button class="next" @click="nextImage"><i class="fa-solid fa-chevron-right" style="color: #ffffff;"></i></button>
      </div>
    </section>
  </main>
</template>

<style lang="scss" scoped>
@import '../styles/partials/_partials.scss';
.carousel {
  position: relative;
  img {
    width: 100%;
  }
.titles {
  position: absolute;
  top: 35%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  h3 {
    color: $main_orange;
  }

  h1 {
    font-size: 6rem;
    color: #fff;
  }
}

  button {
    width: 40px;
    height: 40px;
    border: none;
    background-color: $main_gray;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);

    &.prev {
      left: 1rem;
    }

    &.next {
      right: 1rem;
    }

    &:hover {
      background-color: #000;
      cursor: pointer;
    }
  }
}

</style>
