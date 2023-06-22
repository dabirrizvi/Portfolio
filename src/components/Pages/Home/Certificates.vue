<template>
    <div class="background-certificate">
        <div class="certificate-template" data-aos="fade-left">
            <swiper :effect="'coverflow'" :grabCursor="true" :centeredSlides="true" :slidesPerView="'auto'"
                :coverflowEffect="{
                    rotate: 50,
                    stretch: 0,
                    depth: 100,
                    modifier: 1,
                    slideShadows: true,
                }" :pagination="true" :navigation="true" :modules="modules" class="mySwiper" :observer="true">
                <swiper-slide><img src="https://raw.githubusercontent.com/dabirrizvi/assets_for_portfolio/main/Certificates/devops.jpg" /></swiper-slide>
                <swiper-slide><img src="https://raw.githubusercontent.com/dabirrizvi/assets_for_portfolio/main/Certificates/vue.jpg" /></swiper-slide>
                <swiper-slide><img src="https://raw.githubusercontent.com/dabirrizvi/assets_for_portfolio/main/Certificates/ML.jpg" /></swiper-slide>
                <swiper-slide><img src="https://raw.githubusercontent.com/dabirrizvi/assets_for_portfolio/main/Certificates/Deeplearning.jpg" /></swiper-slide>
                <swiper-slide><img src="https://raw.githubusercontent.com/dabirrizvi/assets_for_portfolio/main/Certificates/AI.jpg" /></swiper-slide>
                <swiper-slide><img src="https://raw.githubusercontent.com/dabirrizvi/assets_for_portfolio/main/Certificates/GameDev.jpg" /></swiper-slide>
                <swiper-slide><img src="https://raw.githubusercontent.com/dabirrizvi/assets_for_portfolio/main/Certificates/c.jpg" /></swiper-slide>
            </swiper>
        </div>
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
<style scoped>
.background-certificate {
    background-color: #28282B;
    overflow: hidden;
}
.certificate-template{
    align-items: center;
    padding: 150px 0px;
}
</style>