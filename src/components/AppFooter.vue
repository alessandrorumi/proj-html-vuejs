<script>



export default {
  name: 'AppFooter',

  

    data() {
    return {
      dropdowns: {
        bookings: false,
        information: false,
        support: false,
        newsletter: false,
      },
      isWideScreen: window.innerWidth > 1024,
    };
  },
  methods: {
    toggleDropdown(column) {
      if (this.isWideScreen) {
        // Se lo schermo è largo, apri automaticamente il dropdown
        this.dropdowns[column] = !this.dropdowns[column];
      } else {
        // Chiudi gli altri dropdown e apri solo quello cliccato
        for (const key in this.dropdowns) {
          if (key !== column) {
            this.dropdowns[key] = false;
          }
        }
        this.dropdowns[column] = !this.dropdowns[column];
      }
    },
    handleResize() {
    // Aggiorna lo stato isWideScreen quando la finestra viene ridimensionata
    this.isWideScreen = window.innerWidth > 1024;

    // Aggiorna lo stato dei dropdown in base alla larghezza della finestra
    for (const key in this.dropdowns) {
      if (this.isWideScreen) {
        // Se lo schermo è largo, apri automaticamente tutti i dropdown
        this.dropdowns[key] = true;
      } else {
        // Se lo schermo è stretto, chiudi tutti i dropdown
        this.dropdowns[key] = false;
      }
    }
  },
  },
  mounted() {
  // Aggiungi un listener per gestire il ridimensionamento della finestra
  window.addEventListener('resize', this.handleResize);

  // Inizializza lo stato dei dropdown in base alla larghezza iniziale della finestra
  this.isWideScreen = window.innerWidth > 1024;
  for (const key in this.dropdowns) {
    this.dropdowns[key] = this.isWideScreen;
  }
},
};
  
</script>

<template>
  <footer>
    <section class="first_section">
      <div class="container">
      <div class="col" >
        <h3 @click="toggleDropdown('bookings')">Bookings <i class="fa-solid fa-chevron-down"></i></h3>
        
        <div class="dropdown" v-show="dropdowns['bookings']">
          <p>
          502 New Design Str, Melbourne, San Francisco, CA 94110, United States of America​ Australia
          
          <div>T: 1 123-456-789</div>
          
          <div>Email: <a href="">demo@example.com</a>

            <div class="social">
              <i class="fa-brands fa-instagram"></i>
              <i class="fa-brands fa-facebook-f" ></i>
              <i class="fa-brands fa-twitter" ></i>
              <i class="fa-brands fa-youtube" ></i>
            </div>
          </div>
          
        </p>
        
        </div>
       
      </div>
    
      <div class="col" >
        <h3 @click="toggleDropdown('information')">Information  <i class="fa-solid fa-chevron-down"></i></h3>
       
        <div class="dropdown" v-show="dropdowns['information']">
          <ul>
        <li>
          <a href="">Product Support</a>
        </li>
        <li>
          <a href="">Checkout</a>
        </li>
        <li>
          <a href="">Report Abuse</a>
        </li>
        <li>
          <a href="">Redeem Voucher</a>
        </li>
        <li>
          <a href="">Order Status</a>
        </li>
      </ul>
        </div>
      
      </div>

      <div class="col" >
       
        <h3 @click="toggleDropdown('support')">Support <i class="fa-solid fa-chevron-down"></i></h3>
        
        <div class="dropdown" v-show="dropdowns['support']">
          <ul>
        <li>
          <a href="">Policies & Rules</a>
        </li>
        <li>
          <a href="">Privacy Policy</a>
        </li>
        <li>
          <a href="">License Policy</a>
        </li>
        <li>
          <a href="">My Account</a>
        </li>
        <li>
          <a href="">Locality</a>
        </li>
      </ul>
        </div>
     
      
      </div>

      <div class=" col" >
        <h3 @click="toggleDropdown('newsletter')" >Newsletter <i class="fa-solid fa-chevron-down"></i></h3>
        
        <div class="dropdown" v-show="dropdowns['newsletter']">
          <form class="input_container" action="">
          <input  type="email" name="EMAIL" placeholder="Email" required="">
          <textarea  rows="4"  placeholder="Message"></textarea>
          <button>Send Message</button>
        </form>
        </div>
       
        
      </div>

    </div>
  </section>
  <section class="rights">
    <span>© 2024 All Rights Reserved. Developed By TemplateMela</span>
  </section>
  </footer>
  
</template>

<style lang="scss" scoped>
@import '../styles/partials/_partials.scss';
$transition-duration: 0.3s;

footer {
  background-color: black;
  color: white;

  section {
    border-bottom: 1px solid rgb(71, 71, 71);
    .container {
      color: white;
      max-width: 1448px;
      margin: 0 auto;
      padding-top: 100px;
      padding-bottom: 15px;
      display: flex;
      justify-content: space-between;

      .dropdown {
        width: 100%;
        div {
          white-space: nowrap;
        }
      }

      .social {
        padding-top: 25px;
        i {
          font-size: 17px;
          padding-right: 20px;
          transition: color $transition-duration ease;
          &:hover {
            color: $main_orange;
          }
        }
      }

      div {
        width: 20%;

        h3 {
          font-size: 24px;
          text-transform: uppercase;
          font-weight: bold;
          padding-bottom: 25px;
        }

        p,
        div {
          padding-bottom: 15px;
          a {
            color: white;
            text-decoration: none;
            transition: color $transition-duration ease;
            &:hover {
              color: $main_orange;
            }
          }
        }

        ul {
          width: 100%;
          li {
            width: 100%;
            list-style-type: none;
            padding-bottom: 20px;

            a {
              white-space: nowrap;
              color: white;
              text-decoration: none;
              transition: color $transition-duration ease;
              &:hover {
                color: $main_orange;
              }
            }
          }
        }
      }

      .input_container {
        textarea,
        input {
          width: 100%;
          background-color: black;
          border: 1px solid rgb(71, 71, 71);
          margin-bottom: 20px;
          padding: 5px;
          color: white;
        }

        button {
          font-size: 20px;
          background-color: black;
          padding: 10px 40px;
          color: white;
          border: 1px solid $main_orange;
          transition: background-color $transition-duration ease;
          &:hover {
            background-color: $main-orange;
          }
        }
      }
    }
  }

  .rights{
      text-align: center;
      padding: 15px 0 35px 0;
      margin-top: 25px;
    }
  

  .fa-chevron-down {
    display: none;
    font-size: 20px;
    margin-left: 5px;
  }
}

@media (max-width: 1024px) {

footer {
  background-color: black;
  color: white;

  section {
    border-bottom: 1px solid rgb(71, 71, 71);
    .container {
      flex-direction: column;
      color: white;
      max-width: 1448px;
      max-height: 580px;
      margin: 0 auto;
      padding: 50px 0;
      display: flex;
      justify-content: space-between;

      .col {
        width: 100%;
        padding: 5px 40px;

        h3 {
          display: flex;
          align-items: center;
          justify-content: space-between;
          font-size: 24px;
          text-transform: uppercase;
          font-weight: bold;
          padding-bottom: 25px;
          margin: 0;
          white-space: nowrap;

          i {
            font-size: 20px;
            margin-left: 5px;
          }
        }
      }

      .dropdown {
        width: 100%;
        div {
          white-space: nowrap;
        }
      }

      .social {
        padding-top: 25px;
        i {
          font-size: 17px;
          padding-right: 20px;
          transition: color $transition-duration ease;
          &:hover {
            color: $main_orange;
          }
        }
      }

      div {
        width: 20%;

        h3 {
          display: inline;
          font-size: 24px;
          text-transform: uppercase;
          font-weight: bold;
          padding-bottom: 25px;
        }

        p,
        div {
          padding-bottom: 15px;
          a {
            color: white;
            text-decoration: none;
            transition: color $transition-duration ease;
            &:hover {
              color: $main_orange;
            }
          }
        }

        ul {
          width: 100%;
          li {
            width: 100%;
            list-style-type: none;
            padding-bottom: 20px;

            a {
              white-space: nowrap;
              color: white;
              text-decoration: none;
              transition: color $transition-duration ease;
              &:hover {
                color: $main_orange;
              }
            }
          }
        }
      }

      .input_container {
        textarea,
        input {
            color: white;
          width: 100%;
          background-color: black;
          border: 1px solid rgb(71, 71, 71);
          margin-bottom: 20px;
          padding: 5px;
        }

        button {
          font-size: 20px;
          background-color: black;
          padding: 10px 40px;
          color: white;
          border: 1px solid $main_orange;
          transition: background-color $transition-duration ease;
          &:hover {
            background-color: $main-orange;
          }
        }
      }
    }

  
  }

  
  .last_section {
    color: white;
    text-align: center;
    min-height: 80px;
    span {
      line-height: 80px;
    }
  }

  .fa-chevron-down {
    font-size: 20px;
    text-align: end;
    display: inline;
    margin-left: 5px;
  }
}
}
</style>
