<template>
  <div class="card-container">
    <h2>Game Development Projects</h2>

    <div
      v-for="(project, index) in projects"
      :key="index"
      :class="{ 'row-reverse': index % 2 !== 0 }"
      class=" mb-4"
      :data-aos="project.class"
    >
      <div class="row g-0">
        <div v-if="index % 2 === 0" class="col-md-5 img-container col-sm-12">
          <!-- Image first for even-indexed rows -->
          <img :src="project.image" class="img-fluid rounded-start" :alt="'Project ' + (index + 1) + ' Image'" />
        </div>
        <div class="col-md-7 col-sm-12 content-container">
          <!-- Content first for all rows -->
          <div class="card-body">
            <h5 class="card-title">{{ project.heading }}</h5>
            <p class="card-text" v-html="project.description"></p>
            <p class="card-button">
            <kinesis-container>
                <kinesis-element :strength="5" type="translate">
                    <a :href="project.downloadLink" :download="project.downloadFileName">
                        <button type="button" class="btn-download">Download Game <i class="fa-solid fa-file-arrow-down"></i>
                        </button>
                    </a>
                </kinesis-element>
            </kinesis-container>
        </p>
          </div>
        </div>
        <div v-if="index % 2 !== 0" class="col-md-5 img-container col-sm-12">
          <img :src="project.image" class="img-fluid rounded-start" :alt="'Project ' + (index + 1) + ' Image'" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      projects: [
        {
          image: 'https://raw.githubusercontent.com/dabirrizvi/assets_for_portfolio/main/Project/game_development/images/smarty_bros.jpg',
          heading: 'Super Sparty Bros.',
          description: 'Super Sparty Bros invites you into an engaging 2D platform game experience. Navigate Sparty, our fearless hero, through a level teeming with platforming hurdles, cunning enemies, and coveted coins. Your objective: seize the victory item to triumphantly complete each level.',
          class: 'fade-right', 
          downloadLink:'https://github.com/dabirrizvi/assets_for_portfolio/raw/main/Project/game_development/SuperSpartyBros.zip',
          downloadFileName:'SuperSpartyBros.zip'
        },
        {
          image: 'https://raw.githubusercontent.com/dabirrizvi/assets_for_portfolio/main/Project/game_development/images/RollerMadness.jpg',
          heading: 'Roller Madness',
          description: 'Roller Madness dives into a hyper-casual gaming experience where your objective is to skillfully guide the ball through each level, collecting all the coins while deftly avoiding the pitfalls of doom and overcoming an array of challenging enemies. Put your precision and reflexes to the test in this thrilling pursuit.',
          class: 'fade-left', 
          downloadLink:'https://github.com/dabirrizvi/assets_for_portfolio/raw/main/Project/game_development/rollermadness.zip',
          downloadFileName:'rollermadness.zip'
        },
        {
          image: 'https://raw.githubusercontent.com/dabirrizvi/assets_for_portfolio/main/Project/game_development/images/argon_assault.jpg',
          heading: 'Argon  Assault',
          description: "Immerse yourself in an arcade gaming experience reminiscent of the iconic Space Invaders from the 80s. Embark on a journey to an alien planet, where unfriendly hosts await. Your mission: escape the extraterrestrial threat and obliterate anything that crosses your path",
          button: '<a href="https://github.com/dabirrizvi/assets_for_portfolio/raw/main/Project/game_development/ArgonAssault.zip" download="ArgonAssault.zip"><button type="button" class="btn-download">Download Game <i class="fa-solid fa-file-arrow-down"></i></button></a>',
          class: 'fade-right', 
          downloadLink:'https://github.com/dabirrizvi/assets_for_portfolio/raw/main/Project/game_development/ArgonAssault.zip',
          downloadFileName:'ArgonAssault.zip'
        },
        {
          image: 'https://raw.githubusercontent.com/dabirrizvi/assets_for_portfolio/main/Project/game_development/images/box.jpg',
          heading: 'Boxshooter',
          description: 'Step into the adrenaline-pumping world of this first-person shooter game. Your objective? Score a set number of points within a time limit by taking precise shots. But beware of the randomly spawning detrimental boxes – shooting one could cost you points and precious time, intensifying the challenge for an exhilarating gaming experience.',
          class: 'fade-left', 
          downloadLink:'https://github.com/dabirrizvi/assets_for_portfolio/raw/main/Project/game_development/Boxshooter.zip',
          downloadFileName:'Boxshooter.zip'
        },
        {
          image: 'https://raw.githubusercontent.com/dabirrizvi/assets_for_portfolio/main/Project/game_development/images/sphereone.jpg',
          heading: 'Sphereone',
          description: 'Experience the intensity of this fast-paced game where a ball hurtles through space at the speed of light along an imaginary path. Your mission is to skillfully navigate, dodging obstacles along the way and reaching the destination unscathed. Brace yourself for a thrilling journey where precision and speed are the keys to success.',
          class: 'fade-right', 
          downloadLink:'https://github.com/dabirrizvi/assets_for_portfolio/raw/main/Project/game_development/sphereone.zip',
          downloadFileName:'sphereone.zip'
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.card-container {
  max-width: 1000px;
  margin: auto;
  flex-wrap: wrap;
  justify-content: center;
}
.card-title,.card-text,.card-button{
    text-align: center;
}
.mb-4{
padding: 50px 0px;
}
@media (min-width: 768px) {
    .content-container {
        padding: 0;
    }

    .content-container:nth-child(odd) {
        padding-right: 100px;
    }

    .content-container:nth-child(even) {
        padding-left: 100px;
    }
}


h2 {
  text-align: center;
  color: #323d4f;
  padding: 20px 0px;
  font-size: 2rem;
  font-family: 'Space Mono', monospace, Arial, Helvetica, sans-serif;
}
.card-text, .card-title{
    color: #323d4f;
  margin-top: 15px; 
}
.card-title{
    font-family: 'Space Mono', monospace, Arial, Helvetica, sans-serif;

}
.card-text{
    font-family: 'Roboto', sans-serif;

}

.img-container {
  margin-bottom: 15px;
  flex-wrap: wrap;
  justify-content: center;
  display: flex;
  margin: 20px 0px;
}

.img-fluid {
  max-width: 100%;
  height: auto;
}
.btn-download{
    color: aqua;
}
/* Button styling */
.btn-download {
  margin: 20px 0px;
  position: relative;
  overflow: hidden;
  color: #f8f9fa;
    background-color: #323d4f;

  border: 1px solid #333;
  border-radius: 25px;
  padding: 5px 10px;
  font-size: 1rem;
  cursor: pointer;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
  transition: color 0.5s ease-in-out, background-color 0.5s ease-in-out;
}

.btn-download:hover {
    background-color: rgba(255, 255, 255, 0.4);
    color: #323d4f;
}

.fa-file-arrow-down {
  font-size: 1.2rem;
  margin-left: 10px;
}

</style>
