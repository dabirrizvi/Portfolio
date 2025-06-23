<template>
    <div class=" row content-about">
        <div class="col-xxl-5 col-lg-5 col-md-0 extra-spacing" style="margin: 0;"></div>
        <div class="col-xxl-7 col-lg-7 col-md-12 content-intro">
            <h3>About Me</h3>
<section class="about-content">
    <p data-aos="fade-left" data-aos-easing="ease-in-sine">
        I thrive at the intersection of creativity, technology, and data-driven problem-solving. With an MSc in Advanced Computer Science and a BE in Electronics and Communication, I bring a strong academic foundation and a versatile technical skill set to the table. My hands-on experience in agile, cross-functional teams has shaped me into a collaborative and adaptable software developer capable of delivering real-world solutions.    </p>
    <p data-aos="fade-right" data-aos-easing="ease-in-sine">
        I have a strong interest in artificial intelligence and machine learning and enjoy exploring their practical applications. I’ve worked with concepts like computer vision, natural language processing, and predictive modeling through personal projects and coursework. I continue to stay updated on emerging technologies and look for opportunities to apply them when relevant.</p>
    <p data-aos="fade-left" data-aos-easing="ease-in-sine">
        Every project I take on is an opportunity to learn, innovate, and contribute. Whether I’m building scalable web applications, designing intelligent systems, or fine-tuning performance, I approach challenges with curiosity, creativity, and a commitment to excellence.    </p>
    <p data-aos="fade-right" data-aos-easing="ease-in-sine">
        Feel free to explore my portfolio to learn more about my work. If you're looking for a passionate developer, eager collaborator, or someone to brainstorm your next big idea with—let’s connect.    </p>
</section>

            <p class="img-content">
      <img class="img-logo" :src="images[0].src" @click="redirectToPage(images[0].link)" alt="Aber Image" />
      <img class="img-logo" :src="images[1].src" @click="redirectToPage(images[1].link)" alt="CMR Image" />
      <img class="img-logo" :src="images[2].src" @click="redirectToPage(images[2].link)" alt="RNR Image" />
      <img class="img-logo" :src="images[3].src" @click="redirectToPage(images[3].link)" alt="NWS Image" />
      <img class="img-logo" :src="images[4].src" @click="redirectToPage(images[4].link)" alt="Reach Image" />
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
        { src: 'https://raw.githubusercontent.com/dabirrizvi/assets_for_portfolio/main/Timeline/no_bg/reach.png', link: 'https://reachstudios.co.uk/about-us/' }
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
