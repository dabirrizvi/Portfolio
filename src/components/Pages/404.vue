<template>
  <div id="loader" class="flex-column">
    <h2 class="title">404 Error !</h2>
    <p class="subtitle">This Page Doesn't Exist</p>
    <router-link to="/" class="subtitle" style="text-decoration: none; text-align: center; margin-top: 20px;">
     <button>Return to Home </button> 

    

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
button{
border: 1px solid white;
border-radius: 25px;
padding: 10px 20px;
background-color: #2C3E50;
color: white;
}
button:hover{
  color: #2C3E50;
  background-color: white;
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


</style>
