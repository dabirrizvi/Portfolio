<template>
  <div id="loader" class="flex-column">
    <h2 class="title">Dabir Hasan Rizvi</h2>
    <p class="subtitle">Software Developer</p>
    <div class="svg">
      <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
        x="0px" y="0px" viewBox="0 0 32 32" enable-background="new 0 0 32 32" xml:space="preserve">
        <g>
          <path fill="#fff" d="M30.791,2.375H1.209c-0.553,0-1,0.447-1,1v4.803v20.447c0,0.553,0.447,1,1,1h29.582c0.553,0,1-0.447,1-1
				V8.178V3.375C31.791,2.822,31.344,2.375,30.791,2.375z M2.209,4.375h27.582v2.803H2.209V4.375z M29.791,27.625H2.209V9.178h27.582
				V27.625z" />
          <circle class="move-right-circle" fill="#fff" cx="4" cy="5.776" r="0.779" />
          <circle class="move-right-circle" fill="#fff" cx="6" cy="5.776" r="0.779" />
          <circle class="move-right-circle" fill="#fff" cx="8" cy="5.776" r="0.779" />
          <path fill="#fff" class="move-left" d="M11.188,21.163c0.147,0.186,0.365,0.281,0.585,0.281c0.165,0,0.331-0.054,0.469-0.165
				c0.323-0.259,0.376-0.73,0.116-1.054l-1.572-1.962l1.572-1.963c0.26-0.323,0.207-0.795-0.116-1.054
				c-0.321-0.259-0.795-0.209-1.054,0.116L9.24,17.795c-0.22,0.274-0.22,0.664,0,0.938L11.188,21.163z" />

          <path fill="#fff" class="move-right" d="M19.758,21.279c0.138,0.111,0.304,0.165,0.469,0.165c0.22,0,0.438-0.096,0.585-0.281l1.948-2.431
				c0.22-0.273,0.22-0.663,0-0.938l-1.948-2.432c-0.258-0.325-0.731-0.375-1.054-0.116c-0.323,0.259-0.376,0.73-0.116,1.054
				l1.572,1.963l-1.572,1.962C19.382,20.549,19.435,21.021,19.758,21.279z" />

          <path fill="#fff" class="rotate-part" d="M13.633,23.104c0.107,0.055,0.223,0.08,0.336,0.08c0.274,0,0.539-0.151,0.671-0.413l4.061-8.065
				c0.187-0.369,0.037-0.82-0.333-1.007c-0.367-0.187-0.82-0.037-1.007,0.333L13.3,22.097C13.113,22.467,13.263,22.917,13.633,23.104z
				" />
        </g>
      </svg>
    </div>
  </div>
</template>

<script>
export default {
  mounted() {
    setTimeout(() => {
      this.$router.push('/home');
    }, 4000);
  },
};
</script>

<style lang="scss" scoped>
.title,
.subtitle {
  color: #f8f9fa;
  font-family: 'Space Mono', monospace, Arial, Helvetica, sans-serif;
  text-align: center;
  font-weight: bold;
}
.title{
  font-size: 4rem;
}
.subtitle{
  font-size: 2rem;
}
@media (max-width: 767px){
  .title{
  font-size: 2rem;
}
.subtitle{
  font-size: 1.5rem;
}
}
#loader {
  background-color: #2C3E50;
  /* Bright background color */
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

  50%{
    opacity: 1;
  }

  75% {
    left: calc(50% - 50vw);
    opacity: 0.25;
  }

  80% {
    left: 100%;
    opacity:0
  }
90%{
  opacity:0
}
  100% {
    left: 100%;
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
.move-right{
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
// move-left
.move-left{
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
// move-right-circle
.move-right-circle{
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
.svg{
width: 100px;
}
</style>
