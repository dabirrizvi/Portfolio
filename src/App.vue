<template>
      <!-- Importing Navbar -->
      <NavBar />
</template>

<script setup>
import NavBar from "./components/UI/Navbar/NavbarSelector.vue"
</script>

<style lang="scss">
// To create parallax effect
#app{
  color: #fefae0;
  background-image: linear-gradient(
    to top,
    rgba(51, 65, 85, 0.9),
    rgba(51, 65, 85, 0.9)
  ), url('./assets/background_2.jpg');
  //  /* Full height */
    min-height: 100vh;
    max-height:max-content;
   /* Create the parallax scrolling effect */
     background-attachment: fixed;
     background-position: center;
     background-repeat: no-repeat;
     background-size: cover;
     z-index: -999;
}



// Headers
* {
  margin: 0;
  padding: 0rem;
  box-sizing: border-box;
  font-family: "Fira sans", sans-serif;
}

// content
//  Content after navbar
@media (max-width: 990px) {
  .content {
    padding-top: 1rem;
    padding-left: 4rem;

  }
}
@media (min-width: 990px) {
  .content {
    padding-top: 1rem;
    margin: auto;
    max-width: 1200px;
  }
}
</style>