<template>
    <div class="background container-fluid ">
            <h1>Technical Skills</h1>
      <div class="row container-fluid">
        <div class="col-xxl-4 col-lg-4 col-sm-12 card" v-for="(column, columnIndex) in columns" :key="columnIndex" >
          <h2>{{ headings[columnIndex] }}</h2>
          <swiper :effect="'cards'" :grabCursor="true" :modules="modules" class="mySwiper" :pagination="true" :observer="true" :navigation="true">
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
              { src: 'https://raw.githubusercontent.com/dabirrizvi/assets_for_portfolio/main/Skills/Lang/JS.svg', color: '#ffd100' },
              { src: 'https://raw.githubusercontent.com/dabirrizvi/assets_for_portfolio/main/Skills/Lang/JAVA.svg', color: '#fff' },
              { src: 'https://raw.githubusercontent.com/dabirrizvi/assets_for_portfolio/main/Skills/Lang/Python.svg', color: '#c7f9cc' },
              { src: 'https://raw.githubusercontent.com/dabirrizvi/assets_for_portfolio/main/Skills/Lang/C.svg', color: '#f1faee' },
              { src: 'https://raw.githubusercontent.com/dabirrizvi/assets_for_portfolio/main/Skills/Lang/C++.png', color: '#fff3b0' },
              { src: 'https://raw.githubusercontent.com/dabirrizvi/assets_for_portfolio/main/Skills/Lang/R.svg', color: '#e0e1dd' },
            ],
          },
          {
            images: [
              { src: 'https://raw.githubusercontent.com/dabirrizvi/assets_for_portfolio/main/Skills/Soft/Vue.svg', color: '#f7ede2' },
              { src: 'https://raw.githubusercontent.com/dabirrizvi/assets_for_portfolio/main/Skills/Soft/HTML.svg', color: '#f3722c' },
              { src: 'https://raw.githubusercontent.com/dabirrizvi/assets_for_portfolio/main/Skills/Soft/CSS.svg', color: '#4ea8de' },
              { src: 'https://raw.githubusercontent.com/dabirrizvi/assets_for_portfolio/main/Skills/Soft/Bootstrap.svg', color: '#7678ed' },
              { src: 'https://raw.githubusercontent.com/dabirrizvi/assets_for_portfolio/main/Skills/Soft/Sass.svg', color: '#e9ecef' },
              { src: 'https://raw.githubusercontent.com/dabirrizvi/assets_for_portfolio/main/Skills/Soft/Talwind.svg', color: '#fff3b0' },
              { src: 'https://raw.githubusercontent.com/dabirrizvi/assets_for_portfolio/main/Skills/Soft/Wordpress.svg', color: '#e0c3fc' },
              { src: 'https://raw.githubusercontent.com/dabirrizvi/assets_for_portfolio/main/Skills/Soft/Magento.svg', color: '#f1dca7' },
            ],
          },
          {
            images: [
            { src: 'https://raw.githubusercontent.com/dabirrizvi/assets_for_portfolio/main/Skills/Misc/agile.jpg', color: '#fff' },
              { src: 'https://raw.githubusercontent.com/dabirrizvi/assets_for_portfolio/main/Skills/Misc/Git.svg', color: '#c9ada7' },
              { src: 'https://raw.githubusercontent.com/dabirrizvi/assets_for_portfolio/main/Skills/Misc/AI.png', color: '#e0fbfc' },
              { src: 'https://raw.githubusercontent.com/dabirrizvi/assets_for_portfolio/main/Skills/Misc/POSTGRESQL.svg', color: '#9db4c0' },
              { src: 'https://raw.githubusercontent.com/dabirrizvi/assets_for_portfolio/main/Skills/Misc/GCP.png', color: '#ffddd2' },
              { src: 'https://raw.githubusercontent.com/dabirrizvi/assets_for_portfolio/main/Skills/Misc/mongodb.svg', color: '#f8ffe5' },              
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
  