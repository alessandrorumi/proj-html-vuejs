<script>
import Counter from '../components/Counter.vue'
import HomeCarousel from '../components/HomeCarousel.vue'
import IgSlider from '../components/IgSlider.vue'
import MusicBlogSlider from '../components/MusicBlogSlider.vue'
import WhoWeAreMain from '../components/WhoWeAreMain.vue'

export default {
  name: 'AppHome',
  components: {
    Counter,
    IgSlider,
    MusicBlogSlider,
    WhoWeAreMain,
    HomeCarousel
  }
}
</script>

<template>
  <main>
    <!-- Carousel -->
    <HomeCarousel />

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
          <i class="fa-regular fa-circle-play" style="color: #f2870c"></i>
          <h2>NEW MUSIC VIDEO</h2>
        </div>
      </a>
    </section>

    <!-- Who We Are (Main)-->
    <WhoWeAreMain />

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
          filter: invert(57%) sepia(67%) saturate(1247%) hue-rotate(352deg) brightness(95%) contrast(101%);
          cursor: pointer;
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
    box-shadow: 0 0 0 5px #f2870c, 0 0 10px 10px #f2870c, 0 0 0 10px #f2870c;
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

// Sezione Music Video

.music-video {
  background-image: url(../assets/img/Video-2.jpg);
  background-position: center;
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

@media only screen and (max-width: 767px) {
  .music-video {
    height: 270px;

    .text {

      h2,
      i {
        font-size: 2rem;
      }
    }
  }
}

@media only screen and (min-width: 767px) and (max-width: 880px) {
  .music-video {
    height: 405px;

    .text {

      h2,
      i {
        font-size: 3rem;
      }
    }
  }
}

@media only screen and (min-width: 880px) {
  .music-video {
    height: 540px;

    .text {

      h2,
      i {
        font-size: 4rem;
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
  .album-background {
    background-image: none;
    min-height: 700px;
  }

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
  margin-bottom: 6rem;
  padding: 0 1.5rem;
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
}</style>
