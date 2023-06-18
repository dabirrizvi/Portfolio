<template>
<First />
<Second />
<Third />
<Fourth />
</template>

<script setup>
import First from "./First.vue"
import Second from "./Second.vue"
import Third from "./Third.vue"
import Fourth from "./Forth.vue"
</script>

<style>
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
.swiper-pagination-bullet{
    background: #8d99ae ;
}
.swiper-pagination-bullet-active{
    background: white ;
    border: 1px solid black;
}
.swiper-button-next, .swiper-button-prev{
    color: bisque;
    border: 3px solid;
    border-radius: 50px;
}
.swiper-button-next:hover, .swiper-button-prev:hover{
background-color: bisque;
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
    .swiper-button-next, .swiper-button-prev{
      display: none;
    }
  }
 .swiper-button-next.swiper-button-disabled, .swiper-button-prev.swiper-button-disabled {
    opacity: 0 !important;
  }
</style>