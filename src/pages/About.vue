<script>
export default {
  name: 'About'
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
          <button>READ MORE</button>
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
        <button>READ MORE</button>
      </div>
    </section>
    <!-- 4 FAQ -->
    <section class="container">
      <div class="row">
        <div class="col-image">
          <img src="https://wordpressthemes.live/WP01/WP015/wp-content/uploads/2022/06/Img-02.jpg" alt="img_2">
        </div>
        <div class="col-text">
          <div class="accordion">CAN I SPECIFY A DELIERY DATE WHEN ORDERING? <i class="fa-solid fa-angles-down" style="color: #ffffff;"></i></div>
          <div class="panel">
            <p>Sed ut perspiciatis unde omnis i natus error voluptatem accusantium doloremque laudantium, tota aperiam, eaque ipsa</p>
          </div>

          <div class="accordion">HOW INVESTING IN DEPENDEND INCER <i class="fa-solid fa-angles-down" style="color: #ffffff;"></i></div>
          <div class="panel">
            <p>Sed ut perspiciatis unde omnis i natus error voluptatem accusantium doloremque laudantium, tota aperiam, eaque ipsa</p>
          </div>

          <div class="accordion">ASING TO BUSINESS SECURITY <i class="fa-solid fa-angles-down" style="color: #ffffff;"></i></div>
          <div class="panel">
            <p>Sed ut perspiciatis unde omnis i natus error voluptatem accusantium doloremque laudantium, tota aperiam, eaque ipsa</p>
          </div>

          <div class="accordion">ELEMENT OR PAGE BUILDER USED <i class="fa-solid fa-angles-down" style="color: #ffffff;"></i></div>
          <div class="panel">
            <p>Sed ut perspiciatis unde omnis i natus error voluptatem accusantium doloremque laudantium, tota aperiam, eaque ipsa</p>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<style lang="scss" scoped>
@import '../styles/partials/_partials.scss';

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
  height: 300px;
  background-color: $main_gray;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;

  h1 {
    font-size: 60px;
    color: #fff;
  }

  span,
  .link {
    color: #fff;
    letter-spacing: 2px;
    padding-top: 10px;
  }

  .link:hover {
    color: $main_orange;
  }
}

/*section 2/4 */
.container {
  background-color: #000;
  padding: 100px 0;
}
.row {
  display: flex;
  width: 75%;
  margin: 0 auto;
  min-height: 485px;

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

    h2,
    p,
    button {
      color: #fff;
      letter-spacing: 1px;
    }

    button {
      width: 175px;
      padding: 15px 20px;
      background-color: transparent;
      border-color: $main-orange;
      font-size: 16px;
    }

    span,
    h2,
    p,
    button {
      margin-bottom: 25px;
    } 
  }
  .col-image {
    width: 50%;
  }
}

/*section 3 */
.about-album {
  min-height: 465px;
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
    color: #fff;
  }

  button {
    color: #fff;
    letter-spacing: 1px;
  }

  button {
    width: 175px;
    padding: 15px 20px;
    background-color: transparent;
    border-color: $main-orange;
    font-size: 16px;
  }
}

/*text FAQs section 4 */
.accordion {
  display: flex;
  justify-content: space-between;
  color: #fff;
  cursor: pointer;
  padding: 18px 0;
  width: 85%;
  border-bottom: 1px solid #222222;
  font-size: 20PX;
  font-weight: bold;
}

.panel {
  width: 85%;
  padding: 18px 0;
  /*display: none;*/
}
</style>