<template>
  <div style="overflow: hidden;" data-aos="zoom-in">
    <div class="card-container row">
      <div v-for="(card, index) in cards" :key="card.id" :class="[cardColClass(index)]" >
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
          imageSrc: "https://raw.githubusercontent.com/dabirrizvi/assets_for_portfolio/main/Project/prediction_of_parking_areas/prediction_parking.jpg",
          title: "Prediction of parking areas availability from parking dataset using AI/ML models",
          description: "Integrated Technologies and Methods: Python, Streamlit, LSTM, Random Forest, Exploratory Data Analysis, Data Cleaning and Pre-processing, Data Imputation, Feature Selection and Engineering.",
          hoverText: "Implemented an AI/ML-driven solution to predict parking availability using a dataset from 400 on-street parking sensors in Santader, Spain. Employed LSTM and Random Forest models, conducting a comparative analysis of performance metrics and hyperparameters for optimal model selection. The comprehensive data preparation involved Exploratory Data Analysis (EDA), data visualization, cleaning, and pre-processing, including noise identification, handling outliers, and imputation. Employed techniques such as dimensionality reduction, feature selection, and engineering to enhance model accuracy. The project aims to assist drivers in Santader by forecasting parking availability for the upcoming hour, enhancing urban mobility through data-driven insights."
        },
        {
          id: 2,
          imageSrc: "https://raw.githubusercontent.com/dabirrizvi/assets_for_portfolio/main/Project/robot_movement_automation/robot_movement.jpg",
          title: "Robot Movememnt Automation with Computer Vision",
          description: "Integrated Technologies and Methods: Ardruino, Unity 3D, C#, Vuforia and SIFT Algorithm",
          hoverText: "Designed a Robot Movement Automation System utilising Computer Vision and Digital Image Processing, with a focus on the SIFT algorithm through OpenCV. This project seamlessly integrates Unity 3D with Vuforia SDK for AR-like feature detection and Arduino IDE for motor control. The system allows a robot to proficiently track and follow user-selected objects within a Wi-Fi network range, showcasing adaptability to changes in orientation and scale. Hardware components include a robot chassis, L298N Motor Driver, ESP8266 Node MCU, DC Motors, and a 12V rechargeable battery.<br /> <i class='fa-brands fa-github fa-hover-icons'></i> <i class='fa-solid fa-file fa-hover-icons'></i> <i class='fa-solid fa-video fa-hover-icons'></i>"
        },
        {
          id: 3,
          imageSrc: "https://raw.githubusercontent.com/dabirrizvi/assets_for_portfolio/main/Project/blood_barrier_challenge/blood_compound.jpg",
          title: "Blood Barrier Kaggle Challenge",
          description: "Integrated Technologies and Methods: SVM, Python, AUC Metric, Feature Extraction.",
          hoverText: "Secured 1st rank in the Kaggle challenge as part of the 'Machine Learning for Intelligent Systems' module at Aberystwyth University. Led the competition by developing robust machine learning models, specifically employing Support Vector Machines (SVM) with strategic parameter tuning achieving an accuracy of 90.603%. Focused on predicting Blood-Brain Barrier (BBB) penetration for chemical compounds, the project showcased expertise in feature extraction, model training, and precision measurement using the AUC metric. The Python code exemplified proficiency in data manipulation and submission file generation. This accomplishment reflects a mastery of machine learning principles within the academic setting, contributing to a comprehensive understanding of intelligent systems."
        },
        {
          id: 4,
          imageSrc: "https://raw.githubusercontent.com/dabirrizvi/assets_for_portfolio/main/Project/ecg_signal_challenge/ecg.jpg", 
          title: "Compound Classification using Chemical Structural Information (PhysioNet Computing in Cardiology Challenge 2017)",
          description: "Integrated Technologies and Methods: Python, Random Forest Classifier, CNN, Seaborn.heatmap, Data Exploration and Pre-procesing",
          hoverText: "Achieved 5th place in a Kaggle challenge with an accuracy of 82.947%, this project centered on the classification of cardiac arrhythmia using short single-lead ECG recordings from the <a class='anchor-links' href='https://physionet.org/content/challenge-2017/1.0.0/' target='_blank'> PhysioNet Computing in Cardiology Challenge 2017 dataset </a>. The primary objective involved categorizing ECG segments into normal rhythm, atrial fibrillation (AF), other rhythms, or noisy recordings. Conducting thorough data exploration, which included the use of matplotlib, laid the groundwork for a robust feature-based approach leveraging random forest and an end-to-end strategy incorporating a CNN architecture. The dataset encompassed extracted ECG waveform features and values representing 6000 time points in 20-second segments, providing invaluable insights for effective cardiac arrhythmia pattern detection."
        },
        {
          id: 5,
          imageSrc: "https://raw.githubusercontent.com/dabirrizvi/assets_for_portfolio/main/Project/ar_solar_system/target_image_front.jpg", 
          title: "AR Solar System",
          description: "Integrated Technologies and Methods: Android Studio, Unity 3D, Vuforia SDK, Image Recognition.",
          hoverText: "Developed an Android application by seamlessly integrating Android Studio and Unity 3D, enriched with Augmented Reality (AR) capabilities using Vuforia. The project empowers users to scan a predefined image, granting camera permissions to unveil an AR solar system overlaid on the detected image. This immersive experience combines Android app development, Unity 3D features, and Vuforia's AR framework, allowing users to visualise a captivating solar system through their device's camera. The project showcases effective utilisation of technology for an interactive and educational AR encounter on Android devices."
        },
        {
          id: 6,
          imageSrc: "https://raw.githubusercontent.com/dabirrizvi/assets_for_portfolio/main/Project/game_development/games.jpeg", 
          title: "Game Development Projects",
          description: "Integrated Technologies and Methods: Unity 3D, C#, Game Design, Level Design, Strategic Decision-Making, WebGL Development",
          hoverText: "<p>Designed diverse WebGL games with Unity 3D, showcasing game design and development proficiency.</p><ul><li>Sphereone: A level-based game with dynamic ball control, akin to Temple Run. Players navigate the ball, overcome obstacles, and reach the finish line, demonstrating expertise in level design and interactive gameplay.</li><li>Box Shooter: Created a captivating shooting game with a scoring system based on box colours, adding strategic depth to the gaming experience.</li><li>Roller Madness: Designed an engaging game around a rolling ball. Players collect coins while evading enemies, highlighting strategic decision-making.</li></ul><p>These WebGL games showcase my ability to conceptualise, design, and implement interactive and enjoyable gaming experiences.</p>"
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
    cardColClass(index) {
      return "col-xxl-4 col-lg-6 col-md-12 card-item";
    }
  }
};
</script>
  
<style scoped>
.card-item {
  margin-bottom: 50px;
  width: 400px;
}
.card-img-top{
  height: 600px;
}

.card-container{
  max-width: 1200px;
  margin: auto;
}
.card-body{
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
