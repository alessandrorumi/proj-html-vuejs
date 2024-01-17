<script>
export default {
  name: 'About',
  data() {
    return {
      //section 4 "faqs"
      faqs: [
        {
          question: 'CAN I SPECIFY A DELIERY DATE WHEN ORDERING?',
          answer: 'Sed ut perspiciatis unde omnis i natus error voluptatem accusantium doloremque laudantium, tota aperiam, eaque ipsa',
          visibility: false
        },
        {
          question: 'HOW INVESTING IN DEPENDEND INCER',
          answer: 'Sed ut perspiciatis unde omnis i natus error voluptatem accusantium doloremque laudantium, tota aperiam, eaque ipsa',
          visibility: false
        },
        {
          question: 'ASING TO BUSINESS SECURITY',
          answer: 'Sed ut perspiciatis unde omnis i natus error voluptatem accusantium doloremque laudantium, tota aperiam, eaque ipsa',
          visibility: false
        },
        {
          question: 'ELEMENT OR PAGE BUILDER USED',
          answer: 'Sed ut perspiciatis unde omnis i natus error voluptatem accusantium doloremque laudantium, tota aperiam, eaque ipsa',
          visibility: false
        }
      ],

      //section 6 staffs"
      staffs: [
        {
          photo: "https://wordpressthemes.live/WP01/WP015/wp-content/uploads/2022/06/team_01.jpg",
          name: 'LEO MASSI',
          role: 'Musician'
        },
        {
          photo: "https://wordpressthemes.live/WP01/WP015/wp-content/uploads/2022/06/team_02.jpg",
          name: 'ANNA PERRY',
          role: 'Drums'
        },
        {
          photo: "https://wordpressthemes.live/WP01/WP015/wp-content/uploads/2022/06/team_03.jpg",
          name: 'KAL PELU',
          role: 'Cello'
        },
        {
          photo: "https://wordpressthemes.live/WP01/WP015/wp-content/uploads/2022/06/team_04.jpg",
          name: 'SADA DESU',
          role: 'Guitar'
        }
      ]
    };
  },
  methods: {
    toggleAnswer(index) {
      this.faqs.forEach((faq, i) => {
        if (i !== index) {
          faq.isOpen = false;
        }
      });
      this.faqs[index].isOpen = !this.faqs[index].isOpen;
    },
  }
}
</script>

<template>
  <main class="about-background">
    <!-- 1 section with navigation -->
    <section>
      <div class="about-entry">
        <h1>ABOUT US</h1>
        <span>
          <router-link class="link" :to="{ name: 'home' }">Home</router-link> / About Us
        </span>
      </div>
    </section>
    <!-- 2 story of jazz -->
    <section class="container">
      <div class="row">
        <div class="col-text">
          <span>WHO WE ARE</span>
          <h2>SENSE THE JAZZ</h2>
          <p>The story of Jazz and Blues Society is the story of determination, passion, idealism, music. Founded in 1985 and incorporated in 1986, as a community based, not-for organization located in Vancouver, British Columbia, the society, from the very begi to establish Vancouver as a centre for the creation and exchange of sounds</p>
          <a href="#" class="btn">READ MORE</a>
        </div>
        <div class="col-image">
          <img src="https://wordpressthemes.live/WP01/WP015/wp-content/uploads/2022/06/about_img.jpg" alt="img_1">
        </div>
      </div>
    </section>
    <!-- 3 album -->
    <section>
      <div class="about-album">
        <span>INSTRUMENTAL ROCK</span>
        <h1>ALBUM OUT NOW</h1>
        <a href="#" class="btn">READ MORE</a>
      </div>
    </section>
    <!-- 4 FAQ -->
    <section class="container">
      <div class="row">
        <div class="col-image">
          <img src="https://wordpressthemes.live/WP01/WP015/wp-content/uploads/2022/06/Img-02.jpg" alt="img_2">
        </div>
        <div class="col-text">
          <div class="faqs" v-for="(faq, i) in faqs" :key="i" @click="toggleAnswer(i)">
            <div class="accordion" :class="{ 'no-border': faq.isOpen }">
              <h4 :class="{ 'open': faq.isOpen }">{{ faq.question }}</h4>
              <div class="icons">
                <i v-if="!faq.isOpen" class="fa-solid fa-angles-down closed"></i>
                <i v-else="faq.isOpen" class="fa-solid fa-angles-up open"></i>
              </div>
            </div>
            <div class="panel" v-show="faq.isOpen">
              <p>{{ faq.answer }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- 5 counter -->
    <section class="prova">
      <!-- (da prendere in comune) -->
      <h1>Numeri</h1>
    </section>
    <!-- 6 staff--->
    <section class="staff-container">
      <span>INSTRUMENTAL ROCK</span>
      <h1>ALBUM OUT NOW</h1>
      <div class="row">
        <div v-for="(staff, i) in staffs" :key="i" class="col">
          <div class="staff-photo">
            <img :src="staff.photo" :alt="staff.name">
          </div>
          <h2>{{ staff.name }}</h2>
          <span class="role">{{ staff.role }}</span>
        </div>
      </div>
    </section>
  </main>
</template>

<style lang="scss" scoped>
@import '../styles/partials/_partials.scss';

/* general styles */
/*buttons */
.btn {
  text-align: center;
  width: 175px;
  padding: 15px 20px;
  border: 1px solid $main-orange;
  font-size: 16px;
  color: #fff;
  letter-spacing: 1px;
  cursor: pointer;
  text-decoration: none;
}

a:hover {
  background-color: $main-orange;
  transition: all 0.3s;
}

/*texts */
h1,
h2,
h4,
span,
p,
i {
  color: #fff;
  letter-spacing: 1px;
}
//////////////////////////////////////////////////////////////////////////////////////////////
/*section 1 */
.about-background {
  background-image: url(../assets/img/cms_parallax.jpg); //probabilmente da applicare al body, da parlarne insieme
  min-height: 100vh;
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}

.about-entry {
  margin-top: 100px;
  height: 300px;
  background-color: $main_gray;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;

  h1 {
    font-size: 60px;
  }

  span,
  .link {
    color: #fff;
    letter-spacing: 2px;
    padding-top: 10px;
    background-color: transparent;
  }

  .link:hover {
    color: $main_orange;
  }
}
//////////////////////////////////////////////////////////////////////////////////////////////
/*section 2/4 */
.container,
.staff-container {
  background-color: #000;
  padding: 100px 0;
}
.row {
  display: flex;
  width: 75%;
  margin: 0 auto;
  min-height: 500px;

  .col-text {
  width: 50%;
  display: flex;
  flex-direction: column;

    h2 {
      font-size: 50px;
    }

    span {
      color: $main_orange;
    }

    p {
      margin-right: 50px;
    }

    span,
    h2,
    p {
      margin-bottom: 25px;
    } 
  }
  .col-image {
    width: 50%;
  }
  img {
    width: 100%;
  }
}
//////////////////////////////////////////////////////////////////////////////////////////////
/*section 3 */
.about-album {
  min-height: 850px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;

  span {
    color: $main-orange;
    font-size: 25px;
  }

  h1 {
    font-size: 100px;
  }
}
//////////////////////////////////////////////////////////////////////////////////////////////
/*text FAQs section 4 */
.accordion {
  display: flex;
  justify-content: space-between;
  cursor: pointer;
  padding: 18px 0;
  width: 85%;
  border-bottom: 1px solid #222222;
  font-size: 20PX;
  font-weight: bold;
  margin-left: 100px;
}

.no-border {
  border-bottom: none;
}

.panel {
  width: 85%;
  padding: 18px 0;
  margin-left: 100px;
}

.open {
  color: $main-orange;
}

.closed {
  color: #fff;
}
//////////////////////////////////////////////////////////////////////////////////////////////
/*prova per counter */
.prova {
  height: 500px;
}

//////////////////////////////////////////////////////////////////////////////////////////////
/*staff section 6 */ 

.staff-container {
  border-bottom: 1px solid #222222;

  .row {
    justify-content: space-between;
    .col {
      width: calc((100% / 4) - 20px);

      /*da vedere per la transizione delle immagini */
      overflow: hidden;
    }

    h2,
    span {
      text-align: center;
      display: block;
    }
  }

  h1 {
    font-size: 48px;
  }

  span {
    text-align: center;
    color: $main-orange;
    display: block;
  }

  h1,
  .role {
    color: #fff;
    text-align: center;
    margin-bottom: 20px;
  }
}




/*da vedere per la transizione delle immagini */
.col .staff-photo {
  overflow: hidden;

  img {
    display: block;
    transition: 0.3s ease-in-out;
    transform-origin: center center;

    &:hover {
      transform: scale(1.05);
      transition-duration: 0.3s;
    }
  }
}
</style>