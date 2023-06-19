<template>
    <div class="background container-fluid ">
            <h1>Technical Skills</h1>
      <div class="row container-fluid">
        <div class="col-xxl-4 col-lg-4 col-sm-12 card" v-for="(column, columnIndex) in columns" :key="columnIndex" 
        data-aos="zoom-in">
          <h2>{{ headings[columnIndex] }}</h2>
          <swiper :effect="'cards'" :grabCursor="true" :modules="modules" class="mySwiper" :pagination="true" :navigation="true" :observer="true">
            <swiper-slide v-for="(image, imageIndex) in column.images" :key="imageIndex">
              <div class="image-wrapper" :style="{ backgroundColor: image.color }">
                <img :src="image.src" :alt="'Image ' + (imageIndex + 1)" />
              </div>
            </swiper-slide>
          </swiper>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import { Swiper, SwiperSlide } from 'swiper/vue';
  import 'swiper/css';
  import 'swiper/css/effect-cards';
  import "swiper/css/pagination";
  import "swiper/css/navigation";
  import { EffectCards, Pagination, Navigation  } from 'swiper';
  
  export default {
    components: {
      Swiper,
      SwiperSlide,
    },
    data() {
      return {
        modules: [EffectCards, Pagination, Navigation],
        headings: ['Programming Languages', 'Web Technologies', 'Miscellaneous Skills'],
        columns: [

          {
            images: [
              { src: 'https://cdn4.iconfinder.com/data/icons/scripting-and-programming-languages/512/js-512.png', color: '#ffd100' },
              { src: 'https://cdn.freebiesupply.com/logos/thumbs/2x/java-logo.png', color: '#fff' },
              { src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Python.svg/480px-Python.svg.png', color: '#ccc' },
              { src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/PHP-logo.svg/2560px-PHP-logo.svg.png', color: '#bbdefb' },
              { src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/ISO_C%2B%2B_Logo.svg/1200px-ISO_C%2B%2B_Logo.svg.png', color: '#0fa3b1' },
              { src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/C_Programming_Language.svg/926px-C_Programming_Language.svg.png', color: '#fff3b0' },
              { src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/R_logo.svg/991px-R_logo.svg.png', color: '#c9ada7' },
            ],
          },
          {
            images: [
              { src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Vue.js_Logo_2.svg/1184px-Vue.js_Logo_2.svg.png', color: '#fff3b0' },
              { src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/2048px-HTML5_logo_and_wordmark.svg.png', color: '#9ef01a' },
              { src: 'https://www.svgrepo.com/download/21671/css.svg', color: '#bbdefb' },
              { src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Sass_Logo_Color.svg/2560px-Sass_Logo_Color.svg.png', color: '#0fa3b1' },
              { src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/Wordpress-Logo.svg/2048px-Wordpress-Logo.svg.png', color: '#fff3b0' },
              { src: 'https://www.svgrepo.com/show/303592/magento-2-logo.svg', color: '#c9ada7' },
            ],
          },
          {
            images: [
              { src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Git_icon.svg/2048px-Git_icon.svg.png', color: '#ddc49e' },
              { src: 'https://icons-for-free.com/iconfiles/png/512/postgresql+plain+wordmark-1324760555518154961.png', color: '#fff3b0' },
              { src: 'https://robotwealth.com/wp-content/uploads/2017/07/google-cloud-platform.png', color: '#9ef01a' },
              { src: 'https://img.uxwing.com/wp-content/themes/uxwing/download/internet-network-technology/artificial-intelligence-ai-icon.png', color: '#bbdefb' },
              { src: 'https://us.123rf.com/450wm/nexusby/nexusby2201/nexusby220100009/181526358-agile-development-method-vector-illustration.jpg', color: '#fff' },
              
            ],
          },
        ],
      };
    },
  };
  </script>
  
  <style lang="scss" scoped>
  .container-fluid{
    margin: 0;
    padding: 50px 0px;
  }
  .card {
    padding: 30px;
    border: none;
    background-color: #f1f1f1;

  }
  .background {
    background-color: #f1f1f1;
    overflow: hidden;
  }
  h2,h1 {
    text-align: center;
    color: #333;    
  }
  h1{
    padding-top: 20px;
  }
  .swiper {
    width: 220px;
    height: 320px;
  }
  .swiper-slide {
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 80px;
    border: 2px solid black;
  }
  .image-wrapper {
    width: 220px;
    height: 320px;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
  }
  .image-wrapper img {
    max-width: 100%;
    max-height: 100%;
    transform: scale(0.7);
    object-fit: contain;
  }
  </style>
  