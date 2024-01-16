<script>
export default {
  name: 'AppFooter'
}
</script>

<template>
  <footer>
    <section class="first_section">
      <div class="container">
      <div class="col">
        <h3>Bookings</h3>
        <i class="fa-solid fa-chevron-down"></i>
        <div class="dropdown">
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
    
      <div class="col">
        <h3>Information</h3>
        <i class="fa-solid fa-chevron-down"></i>
        <div class="dropdown">
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

      <div class="col">
       
        <h3>Support</h3>
        <i class="fa-solid fa-chevron-down"></i>
        <div class="dropdown">
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

      <div class=" col">
        <h3>Newsletter</h3>
        <i class="fa-solid fa-chevron-down"></i>
        <div class="dropdown">
          <form class="input_container" action="">
          <input  type="email" name="EMAIL" placeholder="Email" required="">
          <textarea  rows="4"  placeholder="Message"></textarea>
          <button>Send Message</button>
        </form>
        </div>
       
        
      </div>

    </div>
  </section>
  <div class="last_section">
    <span>
      © 2024 All Rights Reserved. Developed By TemplateMela
    </span>
   
  </div>
  
  </footer>
  
</template>

<style lang="scss" scoped>
@import '../styles/partials/_partials.scss';
$transition-duration: 0.3s;

footer{
  background-color: black;
section{
  border-bottom: 1px solid rgb(71, 71, 71);
  .container{
    color: white;
    max-width: 1448px;
    margin: 0 auto;
    padding: 100px 0;
    display: flex;
    justify-content: space-between;


    .dropdown{
      width: 100%;
      div{
        white-space: nowrap; 
      }
    }

    .social{
      padding-top: 25px;
      i{
        font-size: 17px;
        padding-right: 20px;
        transition: color $transition-duration ease;
      }
      i:hover{
        color: $main_orange;
      }
    }
    div{
      width: 20%;
      h3{
        font-size: 24px;
        text-transform: uppercase;
        font-weight:bold ;
        padding-bottom: 25px;
      }

      p{
                padding-bottom: 15px;
            }

            div{
              padding-bottom: 15px;
               
                a{
                  
                  color: white;
                  text-decoration: none;
                  transition: color $transition-duration ease;
                }
                a:hover{
                  color: $main_orange;
                  
                }
            }
      ul{
        width: 100%;
          li{
          width: 100%;
          list-style-type: none;
          padding-bottom: 20px;

            

          a {
            white-space: nowrap; 
            color: white;
            text-decoration: none;
            transition: color $transition-duration ease;
           
           
        }
        a:hover{
          color: $main_orange;
        }
      }
      
    }
  }
    .input_container{
      width: 30%;
      textarea, input{
        width: 100%;
        background-color: black;
        border: 1px solid  rgb(71, 71, 71) ;
        margin-bottom: 20px;
        padding: 5px;
      }

      button{
        font-size: 20px;
        background-color: black;
        padding: 10px 40px;
        color: white;
        border: 1px solid $main_orange;
        transition: background-color $transition-duration ease;
      }

      button:hover{
        background-color: $main-orange;
      }
}
  }
}

.last_section{
  color: white;
  text-align: center;
  min-height: 80px;
  
  span{ 
   line-height: 80px;
  }
  
 
}
  


  .fa-chevron-down {
    display: none; 
    font-size: 20px;
  
    margin-left: 5px;
  }

  @media (max-width: 1024px) {
    .container{
      flex-direction: column;
      h3{
          display: inline;
        }
        .col{
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 5px 40px;
         
      
    }
    .fa-chevron-down {
      text-align: end;
      display: inline; 
      
    }

    .dropdown {
      display: none; 
    }

   
  }

  
}

}


</style>
