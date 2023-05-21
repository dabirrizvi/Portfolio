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
      <router-link to="/certificates" class="routing" active-class="active">
        <span class="heading">Certificates</span>
      </router-link>
      <router-link to="/contact" class="routing" active-class="active">
        <span class="heading">Contacts</span>
      </router-link>
    </div>
    <div class="desktop-navbars">
      <!-- LOGO -->
      <span><i class="fab fa-linkedin social-links"></i></span>
      <span><i class="fas fa-phone-volume social-links"></i></span>
      <span><i class="fas fa-envelope social-links"></i></span>
    </div>
  </div>
  <!-- router animation -->
  <router-view v-slot="slotProps">
    <transition name="route" mode="out-in" @before-enter="beforeEnter" @enter="enter" @leave="leave">
      <component :is="slotProps.Component"></component>
    </transition>
  </router-view>
</template>

<script setup>
const beforeEnter = (el) => {
  el.style.opacity = 0;
};

const enter = (el, done) => {
  setTimeout(() => {
    el.style.transition = 'opacity 0.3s ease-in';
    el.style.opacity = 1;
    el.addEventListener('transitionend', done);
  }, 0);
};

const leave = (el, done) => {
  el.style.transition = 'opacity 0.3s ease-in';
  el.style.opacity = 0;
  el.addEventListener('transitionend', done);
};
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
  font-size: 1.2rem;
  color: #334155;
}

.routing {
  text-decoration: none;
  padding: 0.5rem;
  margin: 0 1rem;
  color: #334155;
  transition: color 0.3s;
  position: relative;
}

.routing:hover {
  color: #ff7f50;
}

.routing.active {
  color: #ff7f50;
}

.routing.active::after {
  content: '';
  position: absolute;
  bottom: -2px;
  left: 0;
  width: 100%;
  height: 2px;
  background-color: #ff7f50;
}

.social-links {
  font-size: 1.5rem;
  margin-left: 1rem;
  color: #334155;
  transition: color 0.3s;
}

.social-links:hover {
  color: rgba(227,185,64,255);
}
</style>