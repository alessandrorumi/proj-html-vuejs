<script>
import FooterLg from './FooterLg.vue'
import FooterMd from './FooterMd.vue'


export default {
  name: 'AppFooter',

  

  components: {
   FooterLg,
   FooterMd,
  },
  
  
}
</script>

<template>
  <footer>

  <!-- <FooterLg class="footer_lg"/> -->
  <FooterMd class="footer_md"/>
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

footer {
  background-color: black;
  color: white;

  .last_section {
    color: white;
    text-align: center;
    min-height: 80px;

    span {
      line-height: 80px;
    }
  }

  .fa-chevron-down {
    display: none;
    font-size: 20px;
    margin-left: 5px;
  }

  // @media (max-width: 1024px) {
  //   .container {
  //     flex-direction: column;

  //     .col {
  //       width: 100%;
  //       display: flex;
  //       align-items: center;
  //       justify-content: space-between;
  //       padding: 5px 40px;
  //     }

  //     h3 {
  //       display: inline;
  //     }

  //     .fa-chevron-down {
  //       text-align: end;
  //       display: inline;
  //     }

  //     .dropdown {
  //       display: none;
  //     }
  //   }
  // }

  // .footer_md {
  //   display: none;

    // @media (max-width: 1024px) {
    //   display: block;
    // }
  // }

  // .footer_lg {
  //   @media (max-width: 1024px) {
  //     display: none;
  //   }
  // }
}
</style>
