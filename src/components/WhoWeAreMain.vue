<script>
export default {
  name: 'WhoWeAreMain',
  data() {
    return {
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
      ]
    }
  }
}
</script>

<template>
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
</template>

<style lang="scss" scoped>
@import '../styles/partials/partials';

// Sezione Who We Are (Main)
.who-we-are-main {
  padding: 3rem 0 5rem;

  .sense-jazz {
    h3 {
      color: $main_orange;
      margin: 2rem 0 1rem;
    }

    h2 {
      font-size: 4rem;
    }

    p {
      color: #b9b9b9;
      line-height: 1.75rem;
      margin: 2rem 0 4rem;
    }
  }

  h2 {
    margin-bottom: 2rem;
  }

  .cards-main {
    padding: 0 6rem;
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
          width: 100%;

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
</style>
