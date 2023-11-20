<template>
    <div class=" row content-about">
        <div class="col-xxl-5 col-lg-5 col-md-0 extra-spacing" style="margin: 0;"></div>
        <div class="col-xxl-7 col-lg-7 col-md-12 content-intro">
                <h3>About Me</h3>
                <section class="about-content">
                <p>
                    I thrive at the intersection of creativity and data-driven problem-solving, where technology becomes a
                    powerful tool for innovation. My academic journey has provided me with a robust foundation in computer
                    science, enabling me to excel in various domains of software development. My practical experience in
                    agile teams has honed my ability to collaborate, adapt, and deliver real-world solutions.
                </p>
                <p>
                    One of my true passions is the realm of artificial intelligence and machine learning. I'm captivated by
                    the potential of AI and ML to transform industries and improve our lives. My foray into this field has
                    been marked by a commitment to staying at the forefront of these technologies and applying them to
                    real-world challenges. Whether it's computer vision, natural language processing, or predictive
                    modelling, I'm always eager to explore the boundaries of AI/ML and harness their power for practical
                    applications.
                </p>
                <p>
                    As a technologically-savvy individual, I embrace each project as an opportunity to learn, innovate, and
                    contribute to the success of organisations and teams. Collaboration, problem-solving, and creative
                    thinking are the driving forces behind my work. Whether it's developing a web application or creating a
                    machine learning model, I approach each task with enthusiasm and a commitment to excellence.
                </p>
                <p>
                    I invite you to explore my portfolio to gain insight into the projects and experiences that have shaped
                    my journey. Whether you're interested in collaboration, have an exciting project idea, or simply want to
                    connect with a passionate software developer and AI/ML enthusiast, don't hesitate to reach out.
                </p>
            </section>
                <p class="img-content">
                    <img class="img-logo" src="https://raw.githubusercontent.com/dabirrizvi/assets_for_portfolio/main/Timeline/no_bg/aber.png"/>
                    <img class="img-logo" src="https://raw.githubusercontent.com/dabirrizvi/assets_for_portfolio/main/Timeline/no_bg/cmr.png"/>
                    <img class="img-logo" src="https://raw.githubusercontent.com/dabirrizvi/assets_for_portfolio/main/Timeline/no_bg/rnr.png"/>
                    <img class="img-logo" src="https://raw.githubusercontent.com/dabirrizvi/assets_for_portfolio/main/Timeline/no_bg/nws.png"/>
                </p>
            </div>
    </div>
</template>

<style lang="scss" scoped>
.content-about {
    background-image:
        linear-gradient(to top,
            rgba(51, 65, 85, 0.9),
            rgba(51, 65, 85, 0.9)),
        url('https://raw.githubusercontent.com/dabirrizvi/assets_for_portfolio/main/Background/dabir_background.jpg');

    background-attachment: fixed;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    z-index: -999;
    min-height: 100vh;
}
@media (max-width:1400px){
    .content-about {
        background-image:
        linear-gradient(to top,
            rgba(51, 65, 85, 0.9),
            rgba(51, 65, 85, 0.9)),
            url('https://raw.githubusercontent.com/dabirrizvi/assets_for_portfolio/main/Background/dabir_mobile.jpg');

    }
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
