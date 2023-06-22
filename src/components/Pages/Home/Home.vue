<template>
  <Intro />
  <Career />
  <Skills />
  <Certificates />
  <References />
  <Footer />
</template>

<script setup>
import Intro from "./Intro.vue"
import Career from "./Career.vue"
import Skills from "./Skills.vue"
import Certificates from "./Certificates.vue"
import References from "./References.vue"
import Footer from "../../UI/PageTemplate/Footer.vue"
</script>

<style>
.swiper-button-disabled {
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

.swiper-pagination-bullet {
  background: #8d99ae;
}

.swiper-pagination-bullet-active {
  background: white;
  border: 1px solid #253237;
}

.swiper-button-next,
.swiper-button-prev {
  border-radius: 50px;
  opacity: 0.6;
  background-color: #253237;
  color: white;
  border: 2px solid white;
}

.swiper-button-next:hover,
.swiper-button-prev:hover {
  opacity: 1;
}

.swiper-button-next:after,
.swiper-button-prev:after {
  font-size: 10px;
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

  .swiper-button-next,
  .swiper-button-prev {
    display: none;
  }
}

.swiper-button-next.swiper-button-disabled,
.swiper-button-prev.swiper-button-disabled {
  opacity: 0 !important;
}

.swiper-button-next {
  right: 5px;
}

.swiper-button-prev {
  left: 5px;
}</style>