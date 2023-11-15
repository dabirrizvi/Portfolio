<template>
  <div class="container content row" data-aos="fade-left">
    <div class="col-xxl-10 col-md-12" style="padding-left: 0px;">
      <div class="heading-intro">
        <h2 >Hi! My Name is Dabir Hasan Rizvi.</h2>
      </div>
      <div class="intro-content">
        <p>
          Welcome to my portfolio! I'm a result-driven Software Developer with a diverse skill set that encompasses
          web-based applications, as well as artificial intelligence and machine learning. With a strong academic
          foundation
          and over a year of hands-on experience in agile teams, I'm dedicated to bringing creativity and efficiency to
          the
          world of software development. My journey has led me to become proficient in object-oriented programming, with a
          strong emphasis on AI and ML applications. I'm technologically savvy, and my unwavering drive to excel fuels my
          ambition to contribute effectively to any organisation's success. Explore my portfolio to discover the projects
          that reflect my dedication to the ever-evolving fields of software development and AI/ML.
        </p>
      </div>

      <button type="button" class="btn btn-outline-secondary">Download CV <i
          class="fa-solid fa-file-arrow-down"></i></button>
    </div>
    <div class="col-xxl-1 col-md-12"></div>

    <div class="col-xxl-1 col-md-12">
      <ul>
        <li>
          <!-- Linkedin -->
          <i class="fa-brands fa-linkedin"></i>
        </li>
        <li>
          <!-- Github -->
          <i class="fa-brands fa-github"></i>
        </li>
        <li>
          <!-- Phone -->
          <i class="fa-solid fa-phone"></i>
        </li>
        <li>
          <!-- Email -->
          <i class="fa-solid fa-envelope"></i>
        </li>
        <li>
          <!-- Instagram -->
          <i class="fa-brands fa-instagram"></i>
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped>
.content {
  display: flex;
  overflow: hidden;
  margin: auto;
  max-width: 1200px;
  min-height: 100vh;
  margin: auto;
  padding: 0;
  align-items: center;
}
.heading-intro > h2{
  font-size: 2rem;
  color: #fff;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
  font-family: 'Space Mono', monospace, Arial, Helvetica, sans-serif;

}

.intro-content >p {
  font-size: 1.2rem;
  color: #fff;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
  font-family: 'Space Mono', monospace, Arial, Helvetica, sans-serif;

}

.btn {
  font-size: 1.5rem;
  color: #FFE4C4;
  background-color: rgba(255, 255, 255, 0.2);
  border-color: #FFE4C4;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
}

.btn:hover {
  background-color: rgba(255, 255, 255, 0.3);
  border-color: #FFE4C4;
}

.fa-brands,
.fa-solid {
  font-size: 2rem;
  color: #FFE4C4;
}
ul {
  list-style: none;
  padding: 0;
  display: flex;
  flex-direction: column; /* Display list items vertically */
  justify-content: space-evenly; /* Space items evenly */
}
li{
  padding: 2rem 0;
}

@media (max-width: 1400px) {
  ul{
    flex-direction: row;
  }
}

</style>
<script></script>
