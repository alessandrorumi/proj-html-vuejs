<script>
export default {
  name: 'Contact',

  data() {
    return {
      mapURL: `
        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d317893.9737282887!2d-0.11951900000000001!3d51.503186!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487604b900d26973%3A0x4291f3172409ea92!2slastminute.com%20London%20Eye!5e0!3m2!1sen!2sus!4v1705486068726!5m2!1sen!2sus" width="100%" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      `,
    };
  },
 
}
</script>

<template>
  <main class="about-background">
    <!-- 1 section with navigation -->
    <section>
      <div class="about-entry">
        <h1>CONTACT US</h1>
        <span>
          <router-link class="link" :to="{ name: 'home' }">Home</router-link> / Contact Us
        </span>
      </div>
    </section>
    <!-- 2 story of jazz -->
    <section class="story-container">
      <div class="story-row">
        <div class="story-col-text">
           <form @submit.prevent="submitForm">

            <div class="row">
              <div>
                <label for="name">Your name</label>
                <input type="text" id="name"  required />
              </div>

              <div>
                <label for="email">Your email</label>
                <input type="email" id="email"  required />
              </div>
            </div>
      

            <div>
              <label for="subject">Subject</label>
              <input type="text" id="subject"  required />
            </div>

            <div>
              <label for="message">Your message (optional)</label>
              <textarea rows="5"  id="message" ></textarea>
            </div>

      <a class="btn" type="submit">Submit</a>
    </form> 
         
        </div>
        <div class="story-col-text updates">
          <span>GET IN TOUCH</span>
          <h2>GET LATEST UPDATE</h2>

          <div>
            <div class="info_box">
              <i class="fa-solid fa-location-dot" style="color:white;"></i>

              <div>
              <h3> Address info</h3>
           <ul>
            <li>
              502 New Design Str, Melbourne, 
            </li>
            <li>
              San Francisco, CA 94110,  
            </li>
            <li>
              United States of America​ Australia 
            </li>
           </ul>
            </div>
            </div>
           
           
           
          </div>

          <div>
            <div class="info_box">
              <i class="fa-solid fa-clock" style="color:white;"></i>

              <div>
              <h3> Contact Info </h3>
            <ul>
            <li>
              068 26589 996
            </li>
            <li>
              demo@example.com 
            </li>
            
           </ul>
            </div>

            </div>
            
            
          </div>

          <div>
            <div class="info_box">
              <i class="fa-solid fa-phone" style="color:white;"></i> 

              <div>
              <h3>Address info</h3>
            <ul>
            <li>
              Open: 8:00AM – Close: 18:00PM
            </li>
            <li>
              Saturday – Sunday: Close 
            </li>
            
           </ul>
            </div>
            </div>
           
           
          </div>
          
        </div>
      </div>
    </section>
    <!-- 3 album -->
    <section>
      <div class="map" v-html="mapURL"></div>
    </section>
   
  </main>
</template>

<style lang="scss" scoped>
main{
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
  width: 85%;
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

}


// ===ContaCt US====


.updates{
  padding-left: 50px;
}
.story-row{
 
  .story-col-text{
  color: white;
  
    label{
    color: white;
    margin-bottom: 10px;
  }


  .info_box{
    display: flex;
    flex-direction: row;
    width: 100%;

    i{
      font-size: 23px;
      padding-top: 5px;
      padding-right: 15px;
    }
  }
div{
  padding-bottom: 10px;
 
  h3{
      text-transform: uppercase;
      font-size: 24px;
    }
    ul{
      list-style-type: none;
     

      li{
        padding: 5px;
        font-weight: 100;
      }
    }
}
  .btn{
    margin-top: 20px;
    max-height: 60px;
    line-height:30px ;
    width: 100%;
  }

        
  }
  

  form{
    display: flex;
    border: 1px solid rgb(71, 71, 71);
    padding: 25px; 
    margin-right: 30px;
    height: 100%;
    flex-wrap: wrap;


  div{
    width: 100%;
    padding-bottom: 0px;
   
  }
  .row{
    display: flex;
    justify-content: space-between;
    width: 100%;
    gap: 20px;
  }



        textarea,
          input {
            width: 100%;
            background-color: black;
            border: 1px solid rgb(71, 71, 71);
            margin-top: 10px;
            padding: 5px;
            color: white;
            min-height:calc(100% - 50px);
          }

       
}
}


.map{
  height:450px;
  width: 100vW;
 background-color: #000;
}

       

</style>