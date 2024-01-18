<!-- NotFound.vue -->
<script>
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import { Autoplay, Pagination, Navigation } from 'swiper/modules'

export default {
  name: 'MusicBlogSlider',
  components: {
    Swiper,
    SwiperSlide
  },
  setup() {
    const onSwiper = swiper => {}
    const onSlideChange = () => {}
    return {
      onSwiper,
      onSlideChange,

      modules: [Autoplay, Pagination, Navigation]
    }
  },
  data() {
    return {
      isHovered: false,
      // Array di oggetti (Blog)
      blog: [
        {
          title: 'HIP HOP WIRED TO DANCE MAKE',
          date: '06 November  2021',
          description:
            'Driving short distances music is a music genre that includes traditional folk music and the contemporary genre that evolved from the former',
          image: 'public/music-blog/1.jpg'
        },
        {
          title: 'MUSIC BUSINESS WORLDWIDE',
          date: '27 May  2022',
          description:
            'Accelerate work and drive productivity The Beatles experimentation and creative freedom led other bands to experiment in various ways as well.',
          image: 'public/music-blog/2.jpg'
        },
        {
          title: 'GIVEAWAYS ROCK TO ALL',
          date: '07 May  2022',
          description:
            'Signs Your Car Battery Has To Be Replaced When the dashboard lights start flashing, this is a sign the battery is dying. Several issues arise and.',
          image: 'public/music-blog/3.jpg'
        },
        {
          title: 'DROWNED IN SOUND FEEL JOY',
          date: '10 April  2022',
          description:
            'Different Types of Music Content For most music creators, they take their work very seriously because of the emotional attachment they may harbor.',
          image: 'public/music-blog/4.jpg'
        },
        {
          title: 'DANCING ASTRONAUT BOUNCE IPSUM',
          date: '01 March  2022',
          description:
            'Signs Your Car Battery Has To Be Replaced When the dashboard lights start flashing, this is a sign the battery is dying. Several issues arise and.',
          image: 'public/music-blog/5.jpg'
        },
        {
          title: 'CONSEQUENCE OF SOUNDMAKE US',
          date: '14 February  2022',
          description:
            'Electronic Dance Music Rhythm and Blues Before this, R & B was known as ‘race music,’ a term that originated in the African American',
          image: 'public/music-blog/6.jpg'
        },
        {
          title: 'ARTIST DEVELOPMENT AND PRODUCTION',
          date: '07 December  2021',
          description:
            'Characterised by its own beat patterns, the lyrics feature what is often extreme violence snd talk of criminal acts. As a result, there’s been',
          image: 'public/music-blog/7.jpg'
        }
      ]
    }
  }
}
</script>

<template>
  <swiper
    @mouseover="isHovered = true"
    @mouseleave="isHovered = false"
    :navigation="isHovered ? true : false"
    :lazy="true"
    :style="{
      '--swiper-navigation-color': '#fff'
    }"
    :rewind="true"
    :modules="modules"
    :spaceBetween="0"
    @swiper="onSwiper"
    @slideChange="onSlideChange"
    :breakpoints="{
      '480': {
        slidesPerView: 1
        // spaceBetween: 40,
      },
      '870': {
        slidesPerView: 2
        // spaceBetween: 40,
      },
      '1024': {
        slidesPerView: 3
        // spaceBetween: 40,
      }
    }"
    class="music_blog_slider"
  >
    <swiper-slide v-for="musicBlog in blog" class="card">
      <div class="image">
        <img :src="musicBlog.image" alt="" />
      </div>
      <div class="text">
        <h4>{{ musicBlog.title }}</h4>
        <h5>{{ musicBlog.date }}</h5>
        <p>{{ musicBlog.description }}</p>
      </div>
    </swiper-slide>
  </swiper>
</template>

<style lang="scss" scoped>
@import '../styles/partials/partials';

.music_blog_slider {
  max-width: 1400px;
  margin: 0 auto;

  padding: 50px 25px;
  .card {
    padding: 0 25px;
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

    .text {
      text-align: start;

      h4 {
        color: #fff;
        padding: 0;
        font-size: 1.5rem;

        &:hover {
          color: $main_orange;
          cursor: pointer;
        }
      }

      h5 {
        color: $main_orange;
        margin: 1rem 0;
      }

      p {
        color: #b9b9b9;
      }
    }

    img {
      width: 100%;
    }
  }
}
</style>
