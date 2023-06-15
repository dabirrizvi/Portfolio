<template>
    <div class="content">
    <swiper :effect="'coverflow'" :grabCursor="true" :centeredSlides="true" :slidesPerView="'auto'" :coverflowEffect="{
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
    }" :pagination="true" :modules="modules" class="mySwiper">
        <swiper-slide><a href=""><img src="../../../assets/Certificates/AI For Everyone.jpg" /></a></swiper-slide>
        <swiper-slide><a href=""><img src="../../../assets/Certificates/c.jpg" /></a></swiper-slide>
        <swiper-slide><a href=""><img src="../../../assets/Certificates/Deeplearning.jpg" /></a></swiper-slide>
        <swiper-slide><a href=""><img src="../../../assets/Certificates/devops.jpg" /></a></swiper-slide>
        <swiper-slide><a href=""><img src="../../../assets/Certificates/GameDev.jpg" /></a></swiper-slide>
        <swiper-slide><a href=""><img src="../../../assets/Certificates/ML.jpg" /></a></swiper-slide>
        <swiper-slide><a href=""><img src="../../../assets/Certificates/vue.jpg" /></a></swiper-slide>
    </swiper>
</div>
</template>
<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";

// Import Swiper styles
import "swiper/css";

import "swiper/css/effect-coverflow";
import "swiper/css/pagination";


// import required modules
import { EffectCoverflow, Pagination } from "swiper";

export default {
    components: {
        Swiper,
        SwiperSlide,
    },
    setup() {
        return {
            modules: [EffectCoverflow, Pagination],
        };
    },
};
</script>
<style scoped>
.swiper {
    width: 100%;
    padding-top: 50px;
    padding-bottom: 50px;
}

.swiper-slide {
    background-position: center;
    background-size: cover;
    width: 600px;

}
.swiper-pagination-bullet-active{
    background: wheat ;
}

.swiper-slide img {
    display: block;
    width: 600px;
}
  /* Responsive Styles */
  @media (max-width: 990px) {
    .swiper-slide {
      width: auto;
      max-width: 90vw;
    }

    .swiper-slide img {
      width: 100%;
      height: auto;
    }
  }
</style>