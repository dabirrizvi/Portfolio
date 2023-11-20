<template>
  <div style="overflow: hidden;">
    <First data-aos="fade-left"/>
    <Second />
    <div class="background-game">
      <Third />
    </div>
    <Footer />
  </div>
</template>
<script setup>
import First from "./First.vue"
import Second from "./Second.vue"
import Third from "./Third.vue"
import Footer from "../../UI/PageTemplate/Footer.vue"
</script>
<style>
.background-game{
  background-color: #ffe4c4;
  padding: 100px 0px;
}
</style>