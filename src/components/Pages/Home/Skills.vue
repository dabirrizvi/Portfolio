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
              { src: 'https://raw.githubusercontent.com/dabirrizvi/Portfolio/main/src/assets/Skills/Lang/JS.svg', color: '#ffd100' },
              { src: 'https://raw.githubusercontent.com/dabirrizvi/Portfolio/main/src/assets/Skills/Lang/JAVA.svg', color: '#fff' },
              { src: 'https://raw.githubusercontent.com/dabirrizvi/Portfolio/main/src/assets/Skills/Lang/Python.svg', color: '#bbdefb' },
              { src: 'https://raw.githubusercontent.com/dabirrizvi/Portfolio/main/src/assets/Skills/Lang/C.svg', color: '#0fa3b1' },
              { src: 'https://raw.githubusercontent.com/dabirrizvi/Portfolio/main/src/assets/Skills/Lang/C++.svg', color: '#fff3b0' },
              { src: 'https://raw.githubusercontent.com/dabirrizvi/Portfolio/main/src/assets/Skills/Lang/R.svg', color: '#c9ada7' },
            ],
          },
          {
            images: [
              { src: 'https://raw.githubusercontent.com/dabirrizvi/Portfolio/main/src/assets/Skills/Soft/', color: '#fff3b0' },
              { src: 'https://raw.githubusercontent.com/dabirrizvi/Portfolio/main/src/assets/Skills/Soft/', color: '#9ef01a' },
              { src: 'https://raw.githubusercontent.com/dabirrizvi/Portfolio/main/src/assets/Skills/Soft/', color: '#bbdefb' },
              { src: 'https://raw.githubusercontent.com/dabirrizvi/Portfolio/main/src/assets/Skills/Soft/', color: '#0fa3b1' },
              { src: 'https://raw.githubusercontent.com/dabirrizvi/Portfolio/main/src/assets/Skills/Soft/', color: '#fff3b0' },
              { src: 'https://raw.githubusercontent.com/dabirrizvi/Portfolio/main/src/assets/Skills/Soft/', color: '#c9ada7' },
            ],
          },
          {
            images: [
              { src: 'https://raw.githubusercontent.com/dabirrizvi/Portfolio/main/src/assets/Skills/Misc/', color: '#ddc49e' },
              { src: 'https://raw.githubusercontent.com/dabirrizvi/Portfolio/main/src/assets/Skills/Misc/', color: '#fff3b0' },
              { src: 'https://raw.githubusercontent.com/dabirrizvi/Portfolio/main/src/assets/Skills/Misc/', color: '#9ef01a' },
              { src: 'https://raw.githubusercontent.com/dabirrizvi/Portfolio/main/src/assets/Skills/Misc/', color: '#bbdefb' },
              { src: 'https://raw.githubusercontent.com/dabirrizvi/Portfolio/main/src/assets/Skills/Misc/', color: '#fff' },
              
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
  