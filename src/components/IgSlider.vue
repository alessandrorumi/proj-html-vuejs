<!-- NotFound.vue -->
<script>
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import { Autoplay, Pagination, Navigation } from 'swiper/modules'

export default {
  name: 'IgSlider',
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
      intagram: [
        {
          image: 'public/ig-images/instagram_img1.jpg'
        },
        {
          image: 'public/ig-images/instagram_img2.jpg'
        },
        {
          image: 'public/ig-images/instagram_img3.jpg'
        },
        {
          image: 'public/ig-images/instagram_img4.jpg'
        },
        {
          image: 'public/ig-images/instagram_img5.jpg'
        },
        {
          image: 'public/ig-images/instagram_img6.jpg'
        },
        {
          image: 'public/ig-images/instagram_img7.jpg'
        },
        {
          image: 'public/ig-images/instagram_img8.jpg'
        },
        {
          image: 'public/ig-images/instagram_img9.jpg'
        },
        {
          image: 'public/ig-images/instagram_img10.jpg'
        }
      ]
    }
  }
}
</script>

<template>
  <swiper
    :loop="true"
    :modules="modules"
    :autoplay="{
      delay: 2500,
      disableOnInteraction: false
    }"
    @swiper="onSwiper"
    @slideChange="onSlideChange"
    :breakpoints="{
      '300': {
        slidesPerView: 2,
        spaceBetween: 10
      },
      '870': {
        slidesPerView: 6,
        spaceBetween: 0
      },
      '1024': {
        slidesPerView: 8,
        spaceBetween: 0
      }
    }"
    class="ig_slider"
  >
    <swiper-slide class="image" v-for="igImages in intagram">
      <img :src="igImages.image" alt="" />
    </swiper-slide>
  </swiper>
</template>

<style lang="scss" scoped>
.image {
  overflow: hidden;

  img {
    display: block;
    width: 100%;
    height: auto;
    transition: 0.3s ease-in-out;
    transform-origin: center center;

    &:hover {
      transform: scale(1.05);
      transition-duration: 0.3s;
      cursor: pointer;
    }
  }

  @media (max-width: 870px) {
    img {
      padding: 40px;
    }
  }
}

div {
  color: white;
}
</style>
