<template>
  <div
    id="launch"
    class="flex-column"
  >
  <h2>
  <p class="title" style="text-align: center;">Dabir Hasan Rizvi</p>
  <p class="subtitle" style="text-align: center;">Software Developer</p>
</h2>
    <orbit-spinner
      :animation-duration="1000"
      :size="150"
      color="#ffb703"
    />
  </div>
</template>

<script>
import { OrbitSpinner } from 'epic-spinners'
export default {
  name: "Loader",
  components: {
    OrbitSpinner
  },
  mounted() {
    setTimeout(() => {
      this.$router.push('/home')
    }, 2000)
  }
};
</script>

<style lang="scss" scoped>
h2 {
  color: #ffb703;
  padding: 10px;
  font-size: 30px;
  font-family: "Poppins";
  letter-spacing: 1ch;
  text-align: center;
}
#launch {
  background-color: #334155;
  left: -100%;
  bottom: 0;
  right: 0;
  top: 0;
  position: fixed;
  z-index: 100;
  display: flex;
  align-items: center;
  justify-content: center;
  animation-duration: 0.8s;
  animation-name: loader;
  animation-fill-mode: forwards;
}
@keyframes loader {
  100% {
    left: 0;
    bottom: 0;
    right: 0;
    top: 0;
  }
}


</style>