<template>
    <div class=" row content-about">
        <div class="col-xxl-5 col-lg-5 col-md-0 extra-spacing" style="margin: 0;"></div>
        <div class="col-xxl-7 col-lg-7 col-md-12 content-intro">
            <h3>About Me</h3>
<section class="about-content">
    <p data-aos="fade-left" data-aos-easing="ease-in-sine">
        I thrive at the intersection of creativity and data-driven problem-solving, where technology becomes a powerful tool for innovation. My academic journey, including an MSc in Advanced Computer Science and a Bachelor of Engineering in Electronics and Communication, has provided me with a robust foundation in computer science, enabling me to excel in various domains of software development. My practical experience in agile teams has honed my ability to collaborate, adapt, and deliver real-world solutions.
    </p>
    <p data-aos="fade-right" data-aos-easing="ease-in-sine">
        One of my true passions is the realm of artificial intelligence and machine learning. I'm captivated by the potential of AI and ML to transform industries and improve our lives. My foray into this field has been marked by a commitment to staying at the forefront of these technologies and applying them to real-world challenges. Whether it's computer vision, natural language processing, or predictive modelling, I'm always eager to explore the boundaries of AI/ML and harness their power for practical applications.
    </p>
    <p data-aos="fade-left" data-aos-easing="ease-in-sine">
        As a technologically-savvy individual, I embrace each project as an opportunity to learn, innovate, and contribute to the success of organisations and teams. Collaboration, problem-solving, and creative thinking are the driving forces behind my work. Whether it's developing a web application, creating a machine learning model, or optimizing a system for better performance, I approach each task with enthusiasm and a commitment to excellence.
    </p>
    <p data-aos="fade-right" data-aos-easing="ease-in-sine">
        I invite you to explore my portfolio to gain insight into the projects and experiences that have shaped my journey. Whether you're interested in collaboration, have an exciting project idea, or simply want to connect with a passionate software developer and AI/ML enthusiast, don't hesitate to reach out. Let's create something amazing together.
    </p>
</section>

            <p class="img-content">
      <img class="img-logo" :src="images[0].src" @click="redirectToPage(images[0].link)" alt="Aber Image" />
      <img class="img-logo" :src="images[1].src" @click="redirectToPage(images[1].link)" alt="CMR Image" />
      <img class="img-logo" :src="images[2].src" @click="redirectToPage(images[2].link)" alt="RNR Image" />
      <img class="img-logo" :src="images[3].src" @click="redirectToPage(images[3].link)" alt="NWS Image" />
    </p>
            </div>
    </div>
</template>
<script>
export default {
  data() {
    return {
      images: [
        { src: 'https://raw.githubusercontent.com/dabirrizvi/assets_for_portfolio/main/Timeline/no_bg/aber.png', link: 'https://www.aber.ac.uk/en/' },
        { src: 'https://raw.githubusercontent.com/dabirrizvi/assets_for_portfolio/main/Timeline/no_bg/cmr.png', link: 'https://www.cmrit.ac.in/' },
        { src: 'https://raw.githubusercontent.com/dabirrizvi/assets_for_portfolio/main/Timeline/no_bg/rnr.png', link: 'https://racksandrollers.com/' },
        { src: 'https://raw.githubusercontent.com/dabirrizvi/assets_for_portfolio/main/Timeline/no_bg/nws.png', link: 'https://www.networldsports.co.uk/about' },
      ],
    };
  },
  methods: {
    redirectToPage(link) {
        window.open(link, '_blank');
        },
  },
};
</script>
<style lang="scss" scoped>
.content-about {
    background-image:
        linear-gradient(to top,
        rgba(10, 12, 41, 0.9),
        rgba(10, 12, 41, 0.9)),
        url('https://raw.githubusercontent.com/dabirrizvi/assets_for_portfolio/main/Background/dabir_background.jpg');

    background-attachment: fixed;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    z-index: -999;
    min-height: 100vh;
}

.content-intro{
    margin: auto;
    padding: 100px 20px;
}
p,
h3 {
    color: #f8f9fa;
    text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
    padding: 10px;
}
.about-content{
    padding: 100px 0px;
}
p {
    font-size: 1.2rem;
    font-family: 'Roboto', sans-serif;
}

h3 {
    text-align: center;
    font-family: 'Space Mono', monospace, Arial, Helvetica, sans-serif;
    font-size: 3rem;
    color: #ffe4c4;
}
.img-content{
    display: flex;
  justify-content: space-evenly; 
}
.img-logo{
    width: 20%;
}
</style>
