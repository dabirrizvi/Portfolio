<template>
  <div class="container content row" data-aos="fade-left">
    <div class="col-xxl-4 col-lg-4 col-md-0 extra-spacing" style="margin: 0;"></div>
    <div class="col-xxl-8 col-lg-8 col-md-12 content-intro">
      <h1 class="intro-mobile">Hi There !</h1>
      <h2>My Name is Dabir Hasan Rizvi</h2>
      <p>I am a passionate software developer, driven by the desire to create innovative solutions and simplify complex
        problems. With a solid foundation in programming languages and a strong problem-solving mindset, I strive to craft
        efficient and scalable software solutions that empower businesses and make a positive impact.</p>
      <button type="button" class="btn btn-outline-secondary">Download CV <i
          class="fa-solid fa-file-arrow-down"></i></button>
    </div>
  </div>
</template>
<style scoped>
.content {
  min-height: 100vh;
  display: flex;
  overflow: hidden;
  margin: auto;
  padding: 20px ;
}

@media (min-width: 990px) {
  .intro-mobile {
    display: none;
  }

  .content {
    align-items: center;
  }
}

@media (max-width: 990px) {
  .extra-spacing {
    display: none;
  }
}

h1,
h2 {
  font-size: 2.5rem;
  color: #FFE4C4;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
  font-family: 'Space Mono', monospace, Arial, Helvetica, sans-serif;

}

p {
  font-size: 1.5rem;
  color: #FFE4C4;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
  font-family: 'Space Mono', monospace, Arial, Helvetica, sans-serif;

}

.btn {
  margin-top: 1.5rem;
  font-size: 1.2rem;
  color: #FFE4C4;
  background-color: rgba(255, 255, 255, 0.2);
  border-color: #FFE4C4;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
}

.btn:hover {
  background-color: rgba(255, 255, 255, 0.3);
  border-color: #FFE4C4;
}</style>
<script></script>