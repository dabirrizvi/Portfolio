<template>
    <div class=" row content-about">
        <div class="col-12 content-intro">
            <h3>About Me</h3>
            <section class="about-content">
                <p data-aos="fade-left" data-aos-easing="ease-in-sine">
                    I've always been curious about how things work and enjoy finding better ways to build them. That curiosity led me into software engineering and continues to motivate me every day. With an MSc in Advanced Computer Science and a BE in Electronics and Communication, I enjoy solving challenging problems, learning new technologies, and turning ideas into reliable, user-focused software.
                </p>
                
                <p data-aos="fade-right" data-aos-easing="ease-in-sine">
                    Outside of my day-to-day work, I have a strong interest in artificial intelligence, machine learning, and computer vision. I enjoy experimenting with new ideas through personal projects and research, and I'm always looking to expand my knowledge and stay up to date with emerging technologies.
                </p>
                
                <p data-aos="fade-left" data-aos-easing="ease-in-sine">
                    I'm someone who enjoys collaborating with others, sharing knowledge, and continuously improving both technically and personally. I believe great software isn't just about writing clean code, but also about understanding people, communicating effectively, and creating solutions that make a real difference.
                </p>
                
                <p data-aos="fade-right" data-aos-easing="ease-in-sine">
                    When I'm not coding, you'll usually find me exploring new technologies, contributing to personal projects, or keeping up with the latest developments in software engineering. Feel free to explore my portfolio to learn more about my work, and if you'd like to connect or collaborate, I'd love to hear from you.
                </p>
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
        url('https://raw.githubusercontent.com/dabirrizvi/assets_for_portfolio/main/Background/dabir_new_bg.jpg');

    background-attachment: fixed;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    z-index: -999;
    min-height: 100vh;
}

.content-intro {
    margin: auto;
    padding: 100px 100px;
}

@media (max-width: 1200px) {
    .content-intro {
        padding: 100px 20px;
    }
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
