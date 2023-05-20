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
  background-image: url('./assets/background.jpg');
   /* Full height */
   height: fit-content; 
    /* Create the parallax scrolling effect */
    background-attachment: fixed;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
}
// section - background colours
.container-section:nth-child(even) {
  background: #ffd4a9;
}

// Headers
.routing{
  text-decoration: none;
  color: black;
}
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