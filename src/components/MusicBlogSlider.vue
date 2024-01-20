<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

// import required modules
import { Pagination, Navigation } from 'swiper/modules'

export default {
  name: 'MusicBlogSlider',
  components: {
    Swiper,
    SwiperSlide
  },
  setup() {
    return {
      modules: [Pagination, Navigation]
    }
  },
  data() {
    return {
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
  <div>
    <swiper
      :navigation="{
        nextEl: '.swiper-button-next-custom',
        prevEl: '.swiper-button-prev-custom'
      }"
      :spaceBetween="30"
      :rewind="true"
      :slidesPerView="1"
      :breakpoints="{
        '767': {
          slidesPerView: 2
        },
        '980': {
          slidesPerView: 3
        }
      }"
      :modules="modules"
      class="music_blog_slider"
    >
      <swiper-slide v-for="musicBlog in blog" :key="musicBlog.title">
        <div class="card">
          <div class="image">
            <img :src="musicBlog.image" alt="" />
          </div>
          <div class="text">
            <h4>{{ musicBlog.title }}</h4>
            <h5>
              <i class="fa-solid fa-calendar-days" style="color: #f2870c"></i>
              {{ musicBlog.date }}
            </h5>
            <p>{{ musicBlog.description }}</p>
          </div>
        </div>
      </swiper-slide>
      <div class="swiper-buttons-container">
        <div class="swiper-button-next swiper-button-next-custom"></div>
        <div class="swiper-button-prev swiper-button-prev-custom"></div>
      </div>
    </swiper>
  </div>
</template>

<style lang="scss" scoped>
@import '../styles/partials/_partials.scss';

.music_blog_slider {
  padding: 0 1.85rem;

  &:hover {
    .swiper-button-next-custom,
    .swiper-button-prev-custom {
      display: block;
    }
  }

  .card {
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
        display: flex;
        align-items: center;
        color: $main_orange;
        margin: 1rem 0;

        i {
          margin-right: 10px;
        }
      }

      p {
        color: #b9b9b9;
      }
    }

    img {
      width: 100%;
    }
  }

  .swiper-button-next-custom,
  .swiper-button-prev-custom {
    display: none;
    --swiper-navigation-color: #fff;
    --swiper-navigation-font-size: 1.75rem;
    position: absolute;
    top: 45%;
    transform: translateY(-45%);

    &:after {
      color: var(--swiper-navigation-color);
      font-size: var(--swiper-navigation-font-size);
    }
  }

  .swiper-button-next-custom {
    right: 0;
  }

  .swiper-button-prev-custom {
    left: 0;
  }

  .music_blog_slider:hover .swiper-button-next-custom,
  .music_blog_slider:hover .swiper-button-prev-custom {
    display: block;
  }
}
</style>
