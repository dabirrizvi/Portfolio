<template>
    <div class="content">
    <swiper :effect="'coverflow'" :grabCursor="true" :centeredSlides="true" :slidesPerView="'auto'" :coverflowEffect="{
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
    }" :pagination="true" :navigation="true" :modules="modules" class="mySwiper" :observer="true">
            <swiper-slide><img src="../../../assets/Certificates/devops.jpg" /></swiper-slide>
            <swiper-slide><img src="../../../assets/Certificates/vue.jpg" /></swiper-slide>
            <swiper-slide><img src="../../../assets/Certificates/ML.jpg" /></swiper-slide>
            <swiper-slide><img src="../../../assets/Certificates/Deeplearning.jpg" /></swiper-slide>
        <swiper-slide><img src="../../../assets/Certificates/AI.jpg" /></swiper-slide>
        <swiper-slide><img src="../../../assets/Certificates/GameDev.jpg" /></swiper-slide>
        <swiper-slide><img src="../../../assets/Certificates/c.jpg" /></swiper-slide>
    </swiper>
</div>
</template>
<script>
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { EffectCoverflow, Pagination, Navigation } from "swiper";

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    const modules = [EffectCoverflow, Pagination, Navigation]; 
    return {
      modules,
    };
  },
};
</script>
<style >
.swiper-button-disabled{
    display: none;
}
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
    background: antiquewhite ;
}
.swiper-button-next, .swiper-button-prev{
    color: antiquewhite;
    border: 3px solid;
    border-radius: 50px;
}
.swiper-button-next:hover, .swiper-button-prev:hover{
background-color: antiquewhite;
color: white;
}

.swiper-button-next:after, .swiper-button-prev:after{
  font-size: 10px ;
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
  .mySwiper .swiper-button-next.swiper-button-disabled, .swiper-button-prev.swiper-button-disabled {
    opacity: 0 !important;
  }
</style>