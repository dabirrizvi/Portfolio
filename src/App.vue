<template>
      <!-- Importing Navbar -->
      <NavBar />
</template>

<script setup>
import NavBar from "./components/UI/Navbar/NavbarSelector.vue"
</script>

<style lang="scss">

* {
  margin: 0;
  padding: 0rem;
  box-sizing: border-box;
  font-family: "Fira sans", sans-serif;
}

// Routing Animation
.route-enter-active,
.route-leave-active {
  transition: opacity 0.35s ease-in;
}

.route-enter-from,
.route-leave-to {
  opacity: 0;
  transform: scale(0.5) ease-out;
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