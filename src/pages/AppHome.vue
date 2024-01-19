<script>
import Counter from '../components/Counter.vue'
import IgSlider from '../components/IgSlider.vue'
import MusicBlogSlider from '../components/MusicBlogSlider.vue'

export default {
  name: 'AppHome',
  components: {
    Counter,
    IgSlider,
    MusicBlogSlider
  },
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

      // Array di oggetti (Who We Are (Main))
      cards: [
        {
          id: 1,
          image: 'public/who-we-are-main/gallery1.jpg',
          title: 'A ROLL AND BANG ON THE FLOOR',
          icons: [
            'fa-brands fa-spotify',
            'fa-brands fa-youtube',
            'fa-solid fa-music',
            'fa-brands fa-soundcloud',
            'fa-solid fa-compass'
          ]
        },
        {
          id: 2,
          image: 'public/who-we-are-main/gallery2.jpg',
          title: 'YOUR MELODY TO OUR MUSIC',
          icons: [
            'fa-brands fa-spotify',
            'fa-brands fa-youtube',
            'fa-solid fa-music',
            'fa-brands fa-soundcloud',
            'fa-solid fa-compass'
          ]
        },
        {
          id: 3,
          image: 'public/who-we-are-main/gallery3.jpg',
          title: 'TOUCHING HEAVEN ON FREQUENCY',
          icons: [
            'fa-brands fa-spotify',
            'fa-brands fa-youtube',
            'fa-solid fa-music',
            'fa-brands fa-soundcloud',
            'fa-solid fa-compass'
          ]
        },
        {
          id: 4,
          image: 'public/who-we-are-main/gallery4.jpg',
          title: 'MUSIC MAKES STRONGER BEATS',
          icons: [
            'fa-brands fa-spotify',
            'fa-brands fa-youtube',
            'fa-solid fa-music',
            'fa-brands fa-soundcloud',
            'fa-solid fa-compass'
          ]
        },
        {
          id: 5,
          image: 'public/who-we-are-main/gallery5.jpg',
          title: 'SOUND IS THE SPARK OF TIME',
          icons: [
            'fa-brands fa-spotify',
            'fa-brands fa-youtube',
            'fa-solid fa-music',
            'fa-brands fa-soundcloud',
            'fa-solid fa-compass'
          ]
        },
        {
          id: 6,
          image: 'public/who-we-are-main/gallery6.jpg',
          title: 'MAKE YOUR NIGHT GROOVY',
          icons: [
            'fa-brands fa-spotify',
            'fa-brands fa-youtube',
            'fa-solid fa-music',
            'fa-brands fa-soundcloud',
            'fa-solid fa-compass'
          ]
        }
      ],
      homeIndex: 0,
      musicBlogIndex: 0
    }
  },

  // All'avvio dell'app
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
  <main>
    <!-- Carousel -->
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

    <!-- Cards -->
    <section class="cards">
      <div class="card">
        <div class="image">
          <img src="../assets/img/cards/speaker.svg" alt="" />
        </div>
        <div class="text">
          <h3>ORIGINAL IDEAS</h3>
          <p>
            Contrary popular belief, Lorem Ipsum not simply ipsum random text.
          </p>
        </div>
      </div>

      <div class="card">
        <div class="image">
          <img src="../assets/img/cards/disc.svg" alt="" />
        </div>
        <div class="text">
          <h3>MUSIC STUDIO</h3>
          <p>
            Contrary popular belief, Lorem Ipsum not simply ipsum random text.
          </p>
        </div>
      </div>

      <div class="card">
        <div class="image">
          <img src="../assets/img/cards/headphones.svg" alt="" />
        </div>
        <div class="text">
          <h3>ACOUSTIC COVERS</h3>
          <p>
            Contrary popular belief, Lorem Ipsum not simply ipsum random text.
          </p>
        </div>
      </div>
    </section>

    <!-- Who We Are (Intro)-->
    <section class="who-we-are-intro">
      <div class="text sense-jazz">
        <h3>WHO WE ARE</h3>
        <h2>SENSE THE JAZZ</h2>
        <p>
          The story of Jazz and Blues Society is the story of determination,
          passion, idealism, community, and of course, music. Founded in 1985
          and incorporated in 1986, as a community based, not-for-profit,
          charitable arts organization located in Vancouver, British Columbia,
          the society, from the very beginning, has worked diligently to
          establish Vancouver as a centre for the creation and exchange of
          sounds and ideas between the local, national and international music
          communities.
        </p>
        <a href="">READ MORE</a>
      </div>
    </section>

    <!-- Music Video -->
    <section class="music-video">
      <a href="https://www.youtube.com/watch?v=lTZLlzLJ68o&t=2s">
        <div class="text">
          <i
            class="fa-regular fa-circle-play"
            style="color: #f2870c; font-size: 5rem"
          ></i>
          <h2>NEW MUSIC VIDEO</h2>
        </div>
      </a>
    </section>

    <!-- Who We Are (Main)-->
    <section class="who-we-are-main">
      <div class="text sense-jazz">
        <h3>WHO WE ARE</h3>
        <h2>SENSE THE JAZZ</h2>
        <div class="cards-main">
          <div class="card-main" v-for="card in cards" :key="card.id">
            <div class="image">
              <img :src="card.image" alt="" />
            </div>
            <h4>{{ card.title }}</h4>
            <p>
              Stream On:
              <i v-for="icon in card.icons" :class="'' + icon"></i>
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Album Out Now -->
    <section class="album-background">
      <div class="album-out-now">
        <div class="text">
          <h3>INSTRUMENTAL ROCK</h3>
          <h2>ALBUM OUT NOW</h2>
          <a href="">READ MORE</a>
        </div>
      </div>
    </section>

    <!-- Counter (Guitar) -->
    <section class="background-scroll">
      <Counter />
    </section>

    <!-- Music Blog -->

    <section class="music-blog">
      <h4>MUSIC BLOG</h4>
      <h3>BEST MUSIC BLOG</h3>
      <MusicBlogSlider />
    </section>

    <!-- Instagram -->
    <IgSlider />
  </main>
</template>

<style lang="scss" scoped>
@import '../styles/partials/partials';
@import '../styles/partials/mixins';

// CSS Main(generali)

main {
  background-color: #000;
  text-align: center;
  padding-top: 100px;

  button {
    width: 40px;
    height: 40px;
    border: none;
    background-color: $main_gray;
    @include translate-horiz-middle;
    display: none;
  }

  h2 {
    font-size: 4rem;
  }

  a {
    @include btn-standard;
  }

  .sense-jazz {
    h3 {
      color: $main_orange;
      margin: 2rem 0 1rem;
    }

    p {
      color: #b9b9b9;
      line-height: 1.75rem;
      margin: 2rem 0 4rem;
    }
  }
}

// Sezione Carousel (Home)

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

// Sezione Cards

.cards {
  margin-top: -7rem;
  position: relative;
  z-index: 100;
  padding: 0 3rem;
  display: flex;
  flex-wrap: wrap;

  @media only screen and (min-width: 880px) and (max-width: 1024px) {
    margin-top: -5rem;
  }

  @media only screen and (min-width: 768px) and (max-width: 880px) {
    margin-top: -4rem;
  }

  @media only screen and (max-width: 767px) {
    margin-top: -3rem;
  }

  .card {
    background-color: $main_gray;
    width: calc((100% / 3) - 2rem);
    margin: 0 1rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    padding: 3rem;

    @media only screen and (max-width: 880px) {
      padding: 0.5rem;
    }

    @media only screen and (max-width: 767px) {
      width: calc(100% - 2rem);
      margin: 0 1rem 2rem;
    }

    &:hover .image::before {
      animation: sonar-effect 1s ease-in-out 0.1s infinite;
    }

    .image {
      display: flex;
      justify-content: center;
      margin-bottom: 1rem;
      position: relative;

      &::before {
        content: '';
        position: absolute;
        width: 100%;
        height: 100%;
        border-radius: 50%;
        top: 0;
        left: 0;
      }

      img {
        width: 85px;
        height: 85px;
        filter: invert(1);

        &:hover {
          filter: invert(57%) sepia(67%) saturate(1247%) hue-rotate(352deg)
            brightness(95%) contrast(101%);
        }
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

@keyframes sonar-effect {
  0% {
    opacity: 0.3;
  }
  40% {
    opacity: 0.5;
    box-shadow: 0 0 0 5px #fff, 0 0 10px 10px #fff, 0 0 0 10px #fff;
  }
  100% {
    box-shadow: 0 0 0 5px #fff, 0 0 10px 10px #fff, 0 0 0 10px #fff;
    transform: scale(1.5);
    opacity: 0;
  }
}

// Sezione Who We Are (Intro)

.who-we-are-intro {
  width: 75%;
  margin: 0 auto;
  padding-bottom: 4rem;
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
    border: none;

    &:hover {
      background-color: transparent;
    }

    .text {
      @include translate-middle;
    }
  }
}

// Sezione Who We Are (Main)

.who-we-are-main {
  padding: 3rem 0 5rem;

  h2 {
    margin-bottom: 2rem;
  }

  .cards-main {
    padding: 0 3rem;
    display: flex;
    flex-wrap: wrap;

    .card-main {
      width: 100%;
      margin: 0 0 2rem;

      @media only screen and (min-width: 871px) {
        width: calc((100% / 3) - 2rem);
        margin: 0 1rem;
      }

      .image {
        overflow: hidden;

        img {
          display: block;
          transition: 0.3s ease-in-out;
          transform-origin: center center;

          &:hover {
            transform: scale(1.05);
            transition-duration: 0.3s;
            cursor: pointer;
          }
        }
      }

      h4 {
        font-size: 1.5rem;
        margin-top: 1rem;
      }

      p {
        margin: 0 0 2rem;
      }

      i {
        margin: 0 0.5rem;

        &:hover {
          color: $main_orange;
        }
      }

      @media only screen and (max-width: 870px) {
        .image {
          display: flex;
          justify-content: center;
        }
      }
    }
  }
}

// Sezione Album Out Now

.album-background {
  background-image: url(../assets/img/cms_parallax.jpg);
  min-height: 850px;
  @include default-bg-image;
}
.album-out-now {
  position: relative;
  padding: 0 3rem;
  text-align: start;

  .text {
    @include translate-horiz-middle;
    h3 {
      color: $main_orange;
    }

    h2 {
      font-size: 7rem;
      margin-bottom: 2rem;
    }
  }

  @media only screen and (max-width: 478px) {
    min-height: 600px;
    padding: 0 1rem;

    .text {
      h2 {
        font-size: 2rem;
        margin-bottom: 2rem;
      }
    }
  }

  @media only screen and (min-width: 478px) and (max-width: 767px) {
    min-height: 700px;

    .text {
      h2 {
        font-size: 3rem;
        margin-bottom: 1.5rem;
      }
    }
  }

  @media only screen and (min-width: 768px) {
    min-height: 850px;

    .text {
      h2 {
        font-size: 4rem;
        margin-bottom: 2rem;
      }
    }
  }
}

// Background fisso su 1365px
@media all and (max-width: 1365px) {
  .album-out-now {
    background-image: url(../assets/img/cms_parallax.jpg);
    @include static-bg-image;
  }
}

// Sezione Counter

.background-scroll {
  background-image: url(../assets/img/counter_parallax.jpg);
  @include default-bg-image;
}

// Sezione Music Blog

.music-blog {
  padding: 0 3rem 6rem;
  position: relative;

  &:hover {
    button {
      display: block;
    }
  }

  h4 {
    color: $main_orange;
    padding-top: 5rem;
  }

  h3 {
    font-size: 2rem;
    padding-bottom: 2rem;
  }

  button {
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
