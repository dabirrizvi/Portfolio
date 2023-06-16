<template>
  <div id="loader" class="flex-column">
      <h2 class="title">Dabir Hasan Rizvi</h2>
      <p class="subtitle">Software Developer</p>
    <FingerprintSpinner :animation-duration="2000" :size="150" color="#f4934f" />
  </div>
</template>

<script>
import { FingerprintSpinner } from 'epic-spinners'
export default {
  name: 'Loader',
  components: {
    FingerprintSpinner,
  },
  mounted() {
    setTimeout(() => {
      this.$router.push('/home');
    }, 3000);
  },
};
</script>

<style lang="scss" scoped>
.title , .subtitle {
  color: #f6704a;
  padding: 10px;
  font-family: "Poppins";
  letter-spacing: 1ch;
  text-align: center;
}

#loader {
  background-color: #334155; /* Bright background color */
  left: -100%;
  bottom: 0;
  right: 0;
  top: 0;
  position: fixed;
  z-index: 1100;
  display: flex;
  align-items: center;
  justify-content: center;
  animation-duration: 3.8s;
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
    left: 100%;
  }
   100% {
    left: 100%;
  }
}
</style>
