<script>
export default {
  name: 'HomeCarousel',
  data() {
    return {
      // Array di oggetti (Home)
      homeCarousel: [
        {
          title: 'MUSIC OF THE SPIRIT',
          image: 'public/carousel/home-1.png'
        },
        {
          title: 'MUSIC IN THIS VIDEO',
          image: 'public/carousel/home-2.png'
        }
      ],
      homeIndex: 0
    }
  },
  created() {
    // Gestione cambio img Home Carousel ogni 5 sec
    setInterval(this.nextHomeImage, 5000)
  },
  methods: {
    // Img precendente Home Carousel
    prevHomeImage() {
      if (this.homeIndex > 0) {
        this.homeIndex--
      } else {
        this.homeIndex = this.homeCarousel.length - 1
      }
    },
    // Img successiva (Home Carousel)
    nextHomeImage() {
      if (this.homeIndex < this.homeCarousel.length - 1) {
        this.homeIndex++
      } else {
        this.homeIndex = 0
      }
    }
  }
}
</script>

<template>
  <section class="carousel">
    <div
      v-for="(carouselItem, index) in homeCarousel"
      :key="index"
      class="item"
      :class="{ active: index === homeIndex }"
    >
      <img :src="carouselItem.image" alt="" />
      <div class="titles" :class="{ 'fade-in': index === homeIndex }">
        <h3>INSTRUMENTAL ROCK</h3>
        <h1>{{ carouselItem.title }}</h1>
        <a href="">READ MORE</a>
      </div>
      <button class="prev" @click="prevHomeImage">
        <i class="fa-solid fa-chevron-left" style="color: #ffffff"></i>
      </button>
      <button class="next" @click="nextHomeImage">
        <i class="fa-solid fa-chevron-right" style="color: #ffffff"></i>
      </button>
    </div>
  </section>
</template>

<style lang="scss" scoped>
@import '../styles/partials/partials';
@import '../styles/partials/mixins';

a {
  @include btn-standard;
}

.carousel {
  position: relative;
  aspect-ratio: 16 / 7;
  width: 100%;

  &:hover {
    button {
      display: block;
    }
  }

  .item {
    opacity: 0;
    transition: opacity 1s ease-in-out;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }

  .active {
    opacity: 1;
  }

  img {
    width: 100%;
    height: 100%;
  }
  .titles {
    width: 100%;
    position: absolute;
    top: 35%;
    left: 50%;
    transform: translate(-50%, -50%);

    h3 {
      color: $main_orange;
      opacity: 0;
      transition: opacity 0.75s ease-in-out 0.5s;
    }

    h1 {
      font-size: 4rem;
      margin-bottom: 1rem;
      opacity: 0;
      transition: opacity 0.75s ease-in-out 1s;
    }

    &.fade-in {
      h1 {
        opacity: 1;
      }

      h3 {
        opacity: 1;
      }
    }

    @media only screen and (max-width: 767px) {
      h1 {
        font-size: 2rem;
      }
    }

    @media only screen and (min-width: 768px) and (max-width: 880px) {
      h1 {
        font-size: 3rem;
      }
    }
  }

  button {
    width: 40px;
    height: 40px;
    border: none;
    display: none;
    background-color: $main_gray;
    @include translate-horiz-middle;
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
