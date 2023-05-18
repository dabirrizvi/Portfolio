<template>
<Navigation v-if="!mobileView" />
<NavigationMobile v-else />
</template>

<script>
import Navigation from './NavbarDesktop.vue';
import NavigationMobile from './NavbarMobile.vue';

export default {
  data: () => {
    return {
      mobileView: false,
      showNav: false
    };
  },
  methods: {
    handleView() {
      this.mobileView = window.innerWidth <= 990;
    }
  },
  components: {
    Navigation,
    NavigationMobile,
  },
  created() {
    this.handleView();
    window.addEventListener('resize', this.handleView);
  }
};
</script>

<style lang="scss">

</style>