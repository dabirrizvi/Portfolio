<template>
  <div class="desktop-header">
    <div class="desktop-navbars">
      <router-link to="/" active-class="active" style="text-decoration: none;">
        <span class="logo">Dabir Hasan Rizvi</span>
      </router-link>

    </div>
    <div class="desktop-navbars">
      <!-- Routing -->
      <router-link to="/home" class="routing" active-class="active">
        <span class="heading">Home</span>
      </router-link>
      <router-link to="/projects" class="routing" active-class="active">
        <span class="heading">Projects</span>
      </router-link>
      <router-link to="/contact" class="routing" active-class="active">
        <span class="heading">Contacts</span>
      </router-link>
    </div>
  </div>
  <!-- router animation -->
  <router-view></router-view>
</template>

<script setup>
import { ref, computed } from 'vue';
// for email
const email = ref('dabir.rizvi@gmail.com');
const subject = ref('Get in touch');
const mailLink = computed(() => {
  const encodedSubject = encodeURIComponent(subject.value);
  return `mailto:${email.value}?subject=${encodedSubject}`;
});
</script>

<style lang="scss">
.desktop-header {
  max-width: 1200px;
  margin: auto;
  padding: 20px 0px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.logo {
  font-weight: bold;
  font-size: 2rem;
  color: #fff;
}

.routing {
  text-decoration: none;
  padding: 0.5rem;
  margin: 0 1rem;
  color: #fff;
  transition: color 0.3s;
  position: relative;
}

.routing:hover {
  color: #fdfcdc;
}

.routing.active {
  color: #fdfcdc;
}

.routing.active::after {
  content: '';
  position: absolute;
  bottom: -2px;
  left: 0;
  width: 100%;
  height: 2px;
  background-color: #fdfcdc;
}
.logo, .heading{
  font-family: 'Space Mono', monospace, Arial, Helvetica, sans-serif;
}
</style>