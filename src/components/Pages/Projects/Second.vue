<template>
  <div>
    <!-- Arrow container with a click event -->
    <div class="arrow-container" @click="scrollDown">
      <i class="fas fa-arrow-down"></i>
    </div>
    <div class="background-2">

      <div class="row content-container" >
        <h3 class="heading-projects" ref="headingProjects">Personal and Collaborative Projects</h3>
        <div v-for="(card, index) in cards" :key="card.id" :class="[cardColClass(index)]" :data-aos="card.aos">
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
  </div>
</template>
  
<script>
export default {
  data() {
    return {
      cards: [
        {
          id: 1,
          imageSrc: "https://raw.githubusercontent.com/dabirrizvi/assets_for_portfolio/main/Project/prediction_of_parking_areas/prediction_parking.jpg",
          title: "Prediction of Parking Availability Using AI/ML Models",
          description: "Tech Stack: Python, Streamlit, LSTM, Random Forest, Feature Engineering, Data Visualisation",
          hoverText: "Developed an AI-powered parking availability prediction system using data from 400 on-street parking sensors in Santander, Spain. Performed exploratory data analysis, data cleaning, feature engineering, and preprocessing before comparing LSTM and Random Forest models to identify the most effective approach for forecasting parking availability one hour ahead. The project demonstrates how machine learning can improve urban mobility through data-driven insights.<p style='margin:20px'><a style='text-decoration:none; color:inherit' href='https://github.com/dabirrizvi/Prediction-of-parking-areas-availability-from-parking-dataset-using-AI-ML-models/tree/main' target='_blank'><i style='font-size:30px' class='fa-brands fa-github'></i></a></p>",
          aos: 'flip-left'
        },
        {
          id: 2,
          imageSrc: "https://raw.githubusercontent.com/dabirrizvi/assets_for_portfolio/main/Project/robot_movement_automation/robot_movement.jpg",
          title: "Robot Movement Automation with Computer Vision",
          description: "IEEE Published Research • OpenCV • Arduino • Unity 3D • Vuforia • SIFT Algorithm",
          hoverText: "Designed and developed an autonomous object tracking robot using classical computer vision techniques with the SIFT algorithm through OpenCV. The system integrates Unity 3D, Vuforia, and Arduino to detect, track, and follow user-selected objects while remaining robust to changes in scale and orientation. This work was published at the IEEE International Conference on Electronics, Computing, Communication and Control Technology (ICECCC 2024), demonstrating how traditional computer vision techniques remain highly effective for autonomous robotic systems.<br /><p style='margin:20px'><a style='text-decoration:none; color:inherit; padding:20px' href='https://github.com/dabirrizvi/Robot-Movememnt-Automation-with-Computer-Vision/tree/main' target='_blank'><i style='font-size:30px' class='fa-brands fa-github'></i></a><a style='text-decoration:none; color:inherit; padding:20px' href='https://drive.google.com/file/d/1VoO8CBGGZiQxKCV2JoIiK1XQWRNdJu1Z/view?usp=sharing' target='_blank'><i style='font-size:30px' class='fa-solid fa-video'></i></a><a style='text-decoration:none; color:inherit; padding:20px' href='https://ieeexplore.ieee.org/document/10594000' target='_blank'><i style='font-size:30px' class='fa-solid fa-file-lines'></i></a></p>",
          aos: 'flip-right'
        },
        {
          id: 3,
          imageSrc: "https://raw.githubusercontent.com/dabirrizvi/assets_for_portfolio/main/Project/blood_barrier_challenge/blood_compound.jpg",
          title: "Blood-Brain Barrier Prediction Challenge",
          description: "1st Place Kaggle • Python • SVM • Feature Engineering • AUC",
          hoverText: "Secured 1st place in a Kaggle competition by developing a Support Vector Machine (SVM) model achieving 90.6% accuracy for predicting Blood-Brain Barrier penetration of chemical compounds. The project involved feature extraction, hyperparameter tuning, data preprocessing, and model evaluation using the AUC metric, demonstrating the application of machine learning in drug discovery research.<p style='margin:20px'><a style='text-decoration:none; color:inherit; padding:20px' href='https://www.kaggle.com/competitions/csm6420-2022-prac?rvi=1' target='_blank'><i style='font-size:30px' class='fa-brands fa-kaggle'></i></a><a style='text-decoration:none; color:inherit; padding:20px' href='https://www.kaggle.com/competitions/csm6420-2022-prac/leaderboard' target='_blank'><i style='font-size:30px' class='fa-solid fa-ranking-star'></i></a><a style='text-decoration:none; color:inherit; padding:20px' href='https://www.kaggle.com/code/dabirrizvi/notebookc125302ad3/notebook' target='_blank'><i style='font-size:30px' class='fa-solid fa-code'></i></a></p>",
          aos: 'flip-left'
        },
        {
          id: 4,
          imageSrc: "https://raw.githubusercontent.com/dabirrizvi/assets_for_portfolio/main/Project/ecg_signal_challenge/ecg.jpg",
          title: "ECG Arrhythmia Classification",
          description: "Top 5 Kaggle • Python • CNN • Random Forest • Signal Processing",
          hoverText: "Achieved 5th place in a Kaggle competition by developing machine learning models to classify cardiac arrhythmias from single-lead ECG recordings using the PhysioNet Computing in Cardiology Challenge 2017 dataset. The project compared Random Forest and CNN approaches, combining signal processing, feature extraction, and exploratory data analysis to improve classification performance.<p style='margin:20px'><a style='text-decoration:none; color:inherit; padding:20px' href='https://www.kaggle.com/competitions/ml22-assignment2/overview' target='_blank'><i style='font-size:30px' class='fa-brands fa-kaggle'></i></a><a style='text-decoration:none; color:inherit; padding:20px' href='https://www.kaggle.com/competitions/ml22-assignment2/leaderboard' target='_blank'><i style='font-size:30px' class='fa-solid fa-ranking-star'></i></a><a style='text-decoration:none; color:inherit; padding:20px' href='https://github.com/dabirrizvi/Compound-Classification-using-Chemical-Structural-Information-/tree/main' target='_blank'><i style='font-size:30px' class='fa-solid fa-code'></i></a></p>",
          aos: 'flip-right'
        },
        {
          id: 5,
          imageSrc: "https://raw.githubusercontent.com/dabirrizvi/assets_for_portfolio/main/Project/speech_recognition/speech_img.jpg",
          title: "Speech Recognition",
          description: "Tech Stack: MATLAB, FFT, Signal Processing, Pattern Recognition",
          hoverText: "Built a speaker recognition system in MATLAB capable of identifying registered users based on unique speech characteristics. The application extracts voice features using Fast Fourier Transform (FFT), stores speaker profiles, and classifies new recordings by comparing feature vectors against trained data. The project demonstrates the practical application of digital signal processing and pattern recognition techniques.<p style='margin:20px'><a style='text-decoration:none; color:inherit' href='https://github.com/dabirrizvi/Speech-Recognition/tree/main' target='_blank'><i style='font-size:30px' class='fa-brands fa-github'></i></a></p>",
          aos: 'flip-left'
        },
        {
          id: 6,
          imageSrc: "https://raw.githubusercontent.com/dabirrizvi/assets_for_portfolio/main/Project/ar_solar_system/target_image_front.jpg",
          title: "AR Solar System",
          description: "Tech Stack: Android Studio, Unity 3D, Vuforia SDK, Augmented Reality",
          hoverText: "Developed an augmented reality Android application that overlays an interactive 3D solar system onto a recognised target image using Unity 3D and Vuforia. The application combines image recognition with immersive AR visualisation to create an engaging educational experience, demonstrating practical use of mobile augmented reality technologies.<p style='margin:20px'><a style='text-decoration:none; color:inherit' href='https://github.com/dabirrizvi/AR-Solar-System' target='_blank'><i style='font-size:30px' class='fa-brands fa-github'></i></a></p>",
          aos: 'flip-right'
        }
      ]
    };
  },
  methods: {
    cardColClass(index) {
      return "col-xxl-4 col-lg-6 col-md-12 card-item";
    },
    scrollDown() {
      // Get the target element
      const targetElement = document.querySelector('.heading-projects');
      // Scroll to the target element
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  }
};
</script>
  
<style scoped>
.background-2 {
  background-color: #36454F;
  padding: 100px 0px;
}

.intro-content-container {
  padding: 50px 10px;
}

.intro-content {
  color: #f8f9fa;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
}
.card-title{
  font-family: 'Space Mono', monospace, Arial, Helvetica, sans-serif;
  font-size: 1.2rem;
}
.card-text{
  font-family: 'Roboto', sans-serif;
}


.card-item {
  margin-bottom: 50px;
  width: 400px;
}

.card-img-top {
  height: 600px;
}

.content-container {
  max-width: 1200px;
  margin: auto;
}

.card-body {
  min-height: 250px;
}

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

.heading-projects {
  font-size: 2rem;
  padding: 50px 0px;
  color: #FFE4C4;
  font-family: 'Space Mono', monospace, Arial, Helvetica, sans-serif;
  text-align: center;
}

.overlay-text {
  text-align: center;
  padding: 20px;
}

.content-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

/* scroll arrow */
.arrow-container {
  z-index: 2;
  position: relative;
  left: 50%;
  bottom: -25px;
  cursor: pointer;
  transform: translateX(-50%);
  width: 50px;
  height: 50px;
  background-color: #FFE4C4;
  border-radius: 25px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.arrow-container i {
  font-size: 24px;
  color: #000;
}
html {
  scroll-behavior: smooth;
}
</style>
