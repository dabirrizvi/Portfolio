<template>
  <div style="overflow: hidden;" data-aos="zoom-in">
    <div class="card-container row">
      <div v-for="(card, index) in shuffledCards" :key="card.id" :class="[cardColClass(index)]" style="padding: 25px;">
        <div class="card hover-card">
          <img :src="card.imageSrc" class="card-img-top" alt="..." />
          <div class="card-overlay">
            <div class="overlay-text">
              <h5 class="card-title">{{ card.title }}</h5>
              <p class="card-text" v-html="card.hoverText"></p>
            </div>
          </div>
          <div class="card-body">
            <h5 class="card-title">{{ card.title }}</h5>
            <p class="card-text" v-html="card.description"></p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
  
<script>
export default {
  data() { 
    return {
      cards: [
        {
          id: 1,
          imageSrc: "",
          title: "Robot Movememnt Automation with Computer Vision",
          description: "Technologies used: Ardruino, Unity 3d, Vuforia",
          hoverText: "Custom Hover Text 1"
        },
        {
          id: 2,
          imageSrc: "",
          title: "Vue Portfolio Website",
          description: "TEST",
          hoverText: "Custom Hover Text 1"
        },
        {
          id: 3,
          imageSrc: "",
          title: "Blood Barrier Kaggle Challenge",
          description: "Technologies2 used: SVM",
          hoverText: "Custom Hover Text 1"
        },
        {
          id: 4,
          imageSrc: "",
          title: "Net World Sports - Blog Website",
          description: "TEST",
          hoverText: "Custom Hover Text 1"
        },
        {
          id: 5,
          imageSrc: "",
          title: "Net World Sports - Chrome Extension",
          description: "TEST",
          hoverText: "Custom Hover Text 1"
        },
        {
          id: 5,
          imageSrc: "",
          title: "Net World Sports - Vue DataCenter",
          description: "TEST",
          hoverText: "Custom Hover Text 1"
        },
        {
          id: 6,
          imageSrc: "",
          title: "Speech Recognition system",
          description: "Matlab",
          hoverText: "Custom Hover Text 1"
        },
        {
          id: 7,
          imageSrc: "",
          title: "Signal Kaggle Challenge",
          description: "TEST",
          hoverText: "Custom Hover Text 1"
        },
        {
          id: 8,
          imageSrc: "",
          title: "Game Development Projects",
          description: "TEST",
          hoverText: "Custom Hover Text 1"
        },
        {
          id: 9,
          imageSrc: "",
          title: "Prediction of parking areas availability from parking dataset using AI/ML models",
          description: "TEST",
          hoverText: "This project is about the prediction of parking areas from parking dataset using AI/ML models. The Dataset is comprised of around 400 on-street parking sensors that is collected over a 9-month period in Santader, Spain. This project intends to use AI/ML models to predict the expected availability of parking areas for the next hour to help the driver's searching for parking in Santader"
        },
      ]
    };
  },
  computed: {
    shuffledCards() {
      return this.shuffleArray(this.cards);
    }
  },
  methods: {
    shuffleArray(array) {
      // Shuffles the array using the Fisher-Yates algorithm
      let currentIndex = array.length,
        randomIndex;

      while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        [array[currentIndex], array[randomIndex]] = [
          array[randomIndex],
          array[currentIndex]
        ];
      }

      return array;
    },
    cardColClass(index) {
      return "col-xxl-4 col-lg-6 col-md-12";
    }
  }
};
</script>
  
<style scoped>
.hover-card {
  position: relative;
  overflow: hidden;
  transition: transform 0.3s ease-in-out;
}

.hover-card:hover {
  transform: scale(1.05);
}

.card-overlay {
  position: absolute;
  top: 100%;
  /* Start the overlay at the bottom */
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(255, 255, 255, 0.9);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.3s ease-in-out, top 0.3s ease-in-out;
}

.hover-card:hover .card-overlay {
  /* Slide the overlay from bottom to top */
  top: 0;
  opacity: 1;
}

.overlay-text {
  text-align: center;
  padding: 20px;
}

.card-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
</style>
