<template>
  <div style="overflow: hidden;">
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
          imageSrc: "https://mdbootstrap.com/img/new/standard/city/041.webp",
          title: "Card 1",
          description: "TEST",
          hoverText: "Custom Hover Text 1"
        }
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
  
<style>
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
