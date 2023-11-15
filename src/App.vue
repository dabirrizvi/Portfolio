<template>
      <!-- Importing Navbar -->
      <NavBar />
</template>

<script setup>
import NavBar from "./components/UI/Navbar/NavbarSelector.vue"
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Space+Mono:wght@700&display=swap');
// To create parallax effect
#app{
  background-image:
        linear-gradient(to top,
            rgba(51, 65, 85, 0.9),
            rgba(51, 65, 85, 0.9)),
        url('https://raw.githubusercontent.com/dabirrizvi/assets_for_portfolio/main/Background/dabir_mobile.jpg');

    background-attachment: fixed;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    z-index: -9999;
    min-height: 100vh;
    max-height:max-content;
  color: #fefae0;
  overflow-x:hidden;
}


// Headers
* {
  margin: 0;
  padding: 0rem;
  box-sizing: border-box;
  font-family: "Fira sans", sans-serif;
}

</style>