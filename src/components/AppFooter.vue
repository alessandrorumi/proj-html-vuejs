<script>
export default {
  name: 'AppFooter'
}
</script>

<template>
  <footer>
    <div class="container">
      <div>
        <h3>Bookings</h3>
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
        <div></div>
      </div>
    
      <div>
        <h3>Information</h3>
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

      <div>
        <div>
        <h3>Support</h3>
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

      <div class="input_container">
        <h3>Newsletter</h3>
        <form action="">
          <input  type="email" name="EMAIL" placeholder="Email" required="">
          <textarea  rows="4"  placeholder="Message"></textarea>
          <button>Send Message</button>
        </form>
        
      </div>

    </div>
  </footer>
  
</template>

<style lang="scss" scoped>
@import '../styles/partials/_partials.scss';
$transition-duration: 0.3s;

footer{
  background-color: black;

  .container{
    color: white;
    max-width: 1448px;
    margin: 0 auto;
    padding: 100px 0;
    display: flex;
    justify-content: space-between;


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
              white-space: nowrap; 
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

</style>
