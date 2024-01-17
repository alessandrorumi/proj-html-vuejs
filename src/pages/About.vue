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
    <section class="story-container">
      <div class="story-row">
        <div class="story-col-text">
          <span>WHO WE ARE</span>
          <h2>SENSE THE JAZZ</h2>
          <p>The story of Jazz and Blues Society is the story of determination, passion, idealism, music. Founded in 1985 and incorporated in 1986, as a community based, not-for organization located in Vancouver, British Columbia, the society, from the very begi to establish Vancouver as a centre for the creation and exchange of sounds</p>
          <a href="#" class="btn">READ MORE</a>
        </div>
        <div class="story-col-image">
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
    <section class="faqs-container">
      <div class="faqs-row">
        <div class="faqs-col-image">
          <img src="https://wordpressthemes.live/WP01/WP015/wp-content/uploads/2022/06/Img-02.jpg" alt="img_2">
        </div>
        <div class="faqs-col-text">
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
      <span>WHO WE ARE</span>
      <h1>OUR STAFF</h1>
      <div class="staff-row">
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
  height: 320px;
  background-color: $main_gray;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

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

/* section 1 responsive */
@media all and (max-width: 1024px) {
  .about-entry {
    h1{
      font-size: 50px;
    }
  }
}

@media all and (max-width: 767px) {
  .about-entry {
    height: 200px;

    h1{
      font-size: 38px;
    }
  }
}

//////////////////////////////////////////////////////////////////////////////////////////////
/* section 2/4 (containers) */
.story-container,
.faqs-container,
.staff-container {
  background-color: #000;
  padding: 100px 0;
}
.story-row,
.faqs-row,
.staff-row {
  display: flex;
  width: 75%;
  margin: 0 auto;
  min-height: 500px;

  .story-col-text,
  .faqs-col-text {
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
  .story-col-image,
  .faqs-col-image {
    width: 50%;
  }
  img {
    width: 100%;
  }
}

/* section 2/4 (containers) responsive */
@media all and (max-width: 1400px) {
  .story-row,
  .faqs-row {
    width: 95%;
    margin: 0 auto;
  }
}

@media all and (max-width: 1200px) {
  .story-container,
  .faqs-container {
    padding-bottom: 25px;
  }
}


@media all and (max-width: 1024px) {

.story-container,
.faqs-container,
.staff-container {
  padding: 75px 0;
}
  .story-row,
  .faqs-row {
    min-height: 200px;
    .story-col-text {
      h2 {
        font-size: 22px;
      }
      span,
      h2,
      p {
        margin-bottom: 10px;
      }

      .btn {
        width: 100px;
        padding: 10px 0;
      }
    }
  }
}

@media all and (max-width: 880px) {
  .faqs-row {
    flex-wrap: wrap;
    .faqs-col-text {
      width: 100%;
    }
    .faqs-col-image {
      width: 100%;
    }
  }
}

@media all and (max-width: 767px) {

  .story-row {
    flex-wrap: wrap;
    .story-col-text {
      width: 100%;

      .btn {
        margin-bottom: 20px;
      }
    }
    .story-col-image {
      width: 100%;
    }
  }
}
//////////////////////////////////////////////////////////////////////////////////////////////
/*section 3 */
.about-album {
  min-height: 750px;
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
    margin: 20px 0;
  }
}

/* section 3 responsive */
@media all and (max-width: 1365px) {
  .about-album {
    background-image: url(../assets/img/cms_parallax.jpg);
    background-position: center;
    background-size: cover;
  }
}

@media all and (max-width: 1024px) {
  .about-album {
    min-height: 500px;
  }
}

@media all and (max-width: 767px) {
  .about-album {
    min-height: 350px;

    span {
      font-size: 16px;
    }

    h1 {
      font-size: 28px;
    }

    .btn {
      width: 100px;
      padding: 10px 0;
    }
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
  font-size: 20px;
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

/* section 4 responsive */
@media all and (max-width: 1400px) {
  .accordion {
    margin-left: 50px;
  }

  .panel {
    margin-left: 50px;
  }
}

@media all and (max-width: 1200px) {
  .accordion {
    width: 95%;
    margin-left: 25px;
  }

  .panel {
    width: 95%;
    margin-left: 25px;
  }
}

@media all and (max-width: 1024px) {
  .accordion {
    font-size: 18px;
  }
}

@media all and (max-width: 880px) {
  .accordion {
    width: 100%;
    margin-left: 0;
  }

  .panel {
    width: 100%;
    margin-left: 0;
  }
}

//////////////////////////////////////////////////////////////////////////////////////////////
/*section 5 prova per counter */
.prova {
  height: 500px;
}

//////////////////////////////////////////////////////////////////////////////////////////////
/// 
/*staff section 6 */ 
.staff-container {
  border-bottom: 1px solid #222222;

  .staff-row {
    justify-content: space-between;
    .col {
      width: calc((100% / 4) - 20px);
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

/* section 6 responsive */
@media all and (max-width: 1400px) {

  .staff-container {
    padding: 75px 0 20px;
    .staff-row {
      width: 90%;
    }
  }
}

@media all and (max-width: 1200px) {
  
  .staff-row {
    min-height: 400px;
  }
}

@media all and (max-width: 880px) {
  
  .staff-row {
    min-height: 350px;
  }
}

@media all and (max-width: 767px) {
  
  .staff-container {
    .staff-row {
      flex-wrap: wrap;
      width: 50%;
      margin: 0 auto;

      .col {
        width: 100%;
      }
    }

    h1 {
    font-size: 34px;
  }
  }
}

@media all and (max-width: 576px) {
  
  .staff-container {

    .staff-row {
      width: 70%;
    }
  }
}
</style>