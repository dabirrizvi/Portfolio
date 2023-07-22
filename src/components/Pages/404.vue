<template>
  <div id="loader" class="flex-column">
    <h2 class="title">Website In Development</h2>
    <p class="subtitle">Please come back later.</p>
    <p class="subtitle">Sorry for the inconvenience.</p>
  </div>
</template>

<style lang="scss" scoped>
.title,
.subtitle {
  color: #fff;
  font-family: 'Space Mono', monospace, Arial, Helvetica, sans-serif;
  text-align: center;
  font-weight: bold;
  font-size: 4rem;
}

.subtitle {
  font-size: 2rem;
}

@media (max-width: 767px) {
  .title {
    font-size: 2rem;
  }
  .subtitle {
    font-size: 1.5rem;
  }
}

#loader {
  background-color: #006d77; /* Bright background color */
  left: -100%;
  bottom: 0;
  right: 0;
  top: 0;
  position: fixed;
  z-index: 1100;
  display: flex;
  align-items: center;
  justify-content: center;
  animation-duration: 5.2s;
  animation-name: loader;
  animation-fill-mode: forwards;
}

@keyframes loader {
  20% {
    left: calc(50% - 50vw);
  }

  25% {
    left: calc(50% - 50vw);
  }

  75% {
    left: calc(50% - 50vw);
  }

  80% {
    left: calc(50% - 50vw);  }

  100% {
    left: calc(50% - 50vw);  }
}


</style>
