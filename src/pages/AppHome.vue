<script>
import home1 from '../assets/img/carousel/home-1.png';
import home2 from '../assets/img/carousel/home-2.png';

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
    <!-- Carousel -->
    <section class="carousel">
      <div class="item">
        <img :src="currentImage" alt="">
        <div class="titles">
          <h3>INSTRUMENTAL ROCK</h3>
          <h1>MUSIC</h1>
          <a href="read-more">READ MORE</a>
        </div>
        <button class="prev" @click="prevImage"><i class="fa-solid fa-chevron-left" style="color: #ffffff;"></i></button>
        <button class="next" @click="nextImage"><i class="fa-solid fa-chevron-right" style="color: #ffffff;"></i></button>
      </div>
    </section>

    <!-- Cards -->
    <section class="cards">

      <div class="card">
        <div class="image">
          <img src="../assets/img/cards/speaker.svg" alt="">
        </div>
        <div class="text">
          <h3>ORIGINAL IDEAS</h3>
          <p>Contrary popular belief, Lorem Ipsum not simply ipsum random text.</p>
        </div>
      </div>

      <div class="card">
        <div class="image">
          <img src="../assets/img/cards/disc.svg" alt="">          
        </div>
        <div class="text">
          <h3>MUSIC STUDIO</h3>
          <p>Contrary popular belief, Lorem Ipsum not simply ipsum random text.</p>
        </div>
      </div>

      <div class="card">
        <div class="image">
          <img src="../assets/img/cards/headphones.svg" alt="">          
        </div>
        <div class="text">
          <h3>ACOUSTIC COVERS</h3>
          <p>Contrary popular belief, Lorem Ipsum not simply ipsum random text.</p>
        </div>
      </div>
    </section>

    <!-- Who We Are -->
    <section class="who-we-are">
      <div class="text">
        <h3>WHO WE ARE</h3>
        <h2>SENSE THE JAZZ</h2>
        <p>The story of Jazz and Blues Society is the story of determination, passion, idealism, community, and of course, music. Founded in 1985 and incorporated in 1986, as a community based, not-for-profit, charitable arts organization located in Vancouver, British Columbia, the society, from the very beginning, has worked diligently to establish Vancouver as a centre for the creation and exchange of sounds and ideas between the local, national and international music communities. </p>
        <a href="read-more">READ MORE</a>
      </div>
    </section>

    <!-- Music Video -->
    <section class="music-video">
      <a href="https://www.youtube.com/watch?v=lTZLlzLJ68o&t=2s">
        <div class="text">
          <i class="fa-regular fa-circle-play" style="color: #F2870C; font-size: 10rem;"></i>
          <h2>NEW MUSIC VIDEO</h2>
        </div>
      </a>
    </section>
  </main>
</template>

<style lang="scss" scoped>
@import '../styles/partials/_partials.scss';
@import '../styles/partials/mixins';

main {
  background-color: #000;

  h2 {
    color: #fff;
    font-size: 4rem;
  }
}
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

  a {
    @include btn-standard;
  }
}

.cards {
  margin-top: -10rem;
  position: relative;
  z-index: 100;
  padding: 0 3rem;
  display: flex;
  flex-wrap: wrap;
  text-align: center;
  color: #fff;
  .card {
    background-color: $main_gray;
    width: calc((100% / 3) - 2rem);
    margin: 0 1em;
    height: 350px;
    padding: 4rem;

    .image {
      display: flex;
      justify-content: center;
      margin-bottom: 2.5rem;

      img {
        height: 125px;
      }
    }

    .text {
      h3 {
        font-size: 1.25rem;
      }

      p {
        color: #b9b9b9;
      }
    }
  }
}

.who-we-are {
  height: 500px;
  text-align: center;
  width: 50%;
  margin: 0 auto;

  h3 {
    color: $main_orange;
    margin: 6rem 0 1.5rem;
  }

  p {
    color: #b9b9b9;
    line-height: 1.75rem;
    margin: 2rem 0 4rem;
  }

  a {
    @include btn-standard;
  }
}
.music-video {
  background-image: url(../assets/img/Video-2.jpg);
  background-position: center;
  height: 540px;
  position: relative;

  a {
    display: block;
    width: 100%;
    height: 100%;

    .text {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      text-align: center;
    }
  }
}
</style>
