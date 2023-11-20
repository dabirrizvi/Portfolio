<template>
  <div id="loader" class="flex-column">
    <h2 class="title">404 Error !</h2>
    <p class="subtitle">This Page Doesn't Exist</p>
    <router-link to="/" class="subtitle" style="text-decoration: none; text-align: center; margin-top: 20px;">
      Return to Home 

      <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 576 512" fill="#FFF">
  <path d="M575.8 255.5c0 18-15 32.1-32 32.1h-32l.7 160.2c0 2.7-.2 5.4-.5 8.1V472c0 22.1-17.9 40-40 40H456c-1.1 0-2.2 0-3.3-.1c-1.4 .1-2.8 .1-4.2 .1H416 392c-22.1 0-40-17.9-40-40V448 384c0-17.7-14.3-32-32-32H256c-17.7 0-32 14.3-32 32v64 24c0 22.1-17.9 40-40 40H160 128.1c-1.5 0-3-.1-4.5-.2c-1.2 .1-2.4 .2-3.6 .2H104c-22.1 0-40-17.9-40-40V360c0-.9 0-1.9 .1-2.8V287.6H32c-18 0-32-14-32-32.1c0-9 3-17 10-24L266.4 8c7-7 15-8 22-8s15 2 21 7L564.8 231.5c8 7 12 15 11 24z" />
</svg>

    </router-link>

  </div>
</template>

<style lang="scss" scoped>
.title,
.subtitle {
  color: #fff;
  font-family: 'Space Mono', monospace, Arial, Helvetica, sans-serif;
  text-align: center;
  font-weight: bold;
}

.title {
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
  background-color: #2C3E50;
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

  100% {
    left: calc(50% - 50vw);
  }
}

// rotate svg
@keyframes rotate {
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
}

.rotate-part {
  transform-origin: center center;
  animation: rotate 4s linear infinite;
  transform-box: fill-box;
}

// move-right svg
.move-right {
  animation: move-right 2s linear infinite;
}

@keyframes move-right {
  0% {
    transform: translateX(0);
  }

  50% {
    transform: translateX(5px);
  }

  100% {
    transform: translateX(0);
  }
}
// SVG
svg {
  font-size: 1.5rem;
  text-align: center;
}

</style>
