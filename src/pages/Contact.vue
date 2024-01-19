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
  <main>
    <!-- 1 section with navigation -->
    <section>
      <div class="contact-entry">
        <h1>CONTACT US</h1>
        <span>
          <router-link class="link" :to="{ name: 'home' }">Home</router-link> / Contact Us
        </span>
      </div>
    </section>
    <!-- 2 info contact -->
    <section class="info-container">
      <div class="info-row">
        <div class="info-col">
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
        <div class="info-col updates">
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
              <h3>Working Hours </h3>
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

.contact-entry {
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
  .contact-entry {
    h1{
      font-size: 50px;
    }
  }
}

@media all and (max-width: 767px) {
  .contact-entry {
    height: 200px;

    h1{
      font-size: 38px;
    }
  }
}

//////////////////////////////////////////////////////////////////////////////////////////////
/* section 2 */
.info-container {
  background-color: #000;
  padding: 100px 0;
}

.info-row {
  display: flex;
  width: 85%;
  margin: 0 auto;
  min-height: 500px;

  .info-col {
  width: 50%;
  display: flex;
  flex-direction: column;

    h2 {
      font-size: 50px;
    }

    span {
      color: $main_orange;
    }

    span,
    h2 {
      margin-bottom: 25px;
    }
  }
}

/* section 2 responsive */
@media all and (max-width: 1400px) {
  .info-row {
    width: 95%;
    margin: 0 auto;
  }

}

@media all and (max-width: 1200px) {
  .info-container {
    padding-bottom: 25px;
  }
}


@media all and (max-width: 1024px) {

.info-container {
  padding: 75px 0;
}
  .info-row {
    min-height: 200px;
  }
}

@media all and (max-width: 767px) {

  .info-row {
    flex-wrap: wrap;
    .info-col {
      width: 100%;

      .btn {
        margin-bottom: 20px;
      }
    }
  }
}

// ===ContaCt US====


.updates{
  padding-left: 50px;
}
.info-row{
 
  .info-col{
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