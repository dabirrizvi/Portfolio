<template>
  <div id="loader" class="flex-column">
    <h2 class="title">Website In Development</h2>
    <p class="subtitle">Please come back later.</p>
    <p class="subtitle">Sorry for the inconvenience.</p>
    <div class="svg">
      <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
        x="0px" y="0px" viewBox="0 0 32 32" enable-background="new 0 0 32 32" xml:space="preserve">
        <!-- Your SVG code here -->
      </svg>
    </div>
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

.rotate-part {
  transform-origin: center center;
  animation: rotate 4s linear infinite;
  transform-box: fill-box;
}

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

.move-left {
  animation: move-left 2s linear infinite;
}

@keyframes move-left {
  0% {
    transform: translateX(0);
  }
  50% {
    transform: translateX(-5px);
  }
  100% {
    transform: translateX(0);
  }
}

.move-right-circle {
  animation: move-right-circle 2s linear infinite;
}

@keyframes move-right-circle {
  0% {
    transform: translateX(0);
  }
  50% {
    transform: translateX(20px);
  }
  100% {
    transform: translateX(0);
  }
}

.svg {
  width: 100px;
}
</style>
