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
          <div class="accordion">
            <h4>CAN I SPECIFY A DELIERY DATE WHEN ORDERING? </h4><i class="fa-solid fa-angles-down" style="color: #ffffff;"></i>
          </div>
          <div class="panel">
            <p>Sed ut perspiciatis unde omnis i natus error voluptatem accusantium doloremque laudantium, tota aperiam, eaque ipsa</p>
          </div>

          <div class="accordion">
            <h4>HOW INVESTING IN DEPENDEND INCER </h4><i class="fa-solid fa-angles-down" style="color: #ffffff;"></i>
          </div>
          <div class="panel">
            <p>Sed ut perspiciatis unde omnis i natus error voluptatem accusantium doloremque laudantium, tota aperiam, eaque ipsa</p>
          </div>

          <div class="accordion">
            <h4>ASING TO BUSINESS SECURITY </h4><i class="fa-solid fa-angles-down" style="color: #ffffff;"></i>
          </div>
          <div class="panel">
            <p>Sed ut perspiciatis unde omnis i natus error voluptatem accusantium doloremque laudantium, tota aperiam, eaque ipsa</p>
          </div>

          <div class="accordion">
            <h4>ELEMENT OR PAGE BUILDER USED </h4><i class="fa-solid fa-angles-down" style="color: #ffffff;"></i>
          </div>
          <div class="panel">
            <p>Sed ut perspiciatis unde omnis i natus error voluptatem accusantium doloremque laudantium, tota aperiam, eaque ipsa</p>
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
        <div class="col">
          
          <img src="https://wordpressthemes.live/WP01/WP015/wp-content/uploads/2022/06/team_01.jpg" alt="">
          <h2>andrea</h2>
          <span class="role">musician</span>
          
        </div>
        <div class="col">
          
          <img src="https://wordpressthemes.live/WP01/WP015/wp-content/uploads/2022/06/team_01.jpg" alt="">
          <h2>andrea</h2>
          <span class="role">musician</span>
  
        </div>
        <div class="col">
          
          <img src="https://wordpressthemes.live/WP01/WP015/wp-content/uploads/2022/06/team_01.jpg" alt="">
          <h2>andrea</h2>
          <span class="role">musician</span>
          
        </div>
        <div class="col">
          
          <img src="https://wordpressthemes.live/WP01/WP015/wp-content/uploads/2022/06/team_01.jpg" alt="">
          <h2>andrea</h2>
          <span class="role">musician</span>
          
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
p {
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

.panel {
  width: 85%;
  padding: 18px 0;
  /*display: none; */
  margin-left: 100px;
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
</style>