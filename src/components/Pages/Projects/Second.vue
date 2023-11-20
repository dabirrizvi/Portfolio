<template>
  <div>
    <!-- Arrow container with a click event -->
    <div class="arrow-container" @click="scrollDown">
      <i class="fas fa-arrow-down"></i>
    </div>
    <div class="background-2">

      <div class="row content-container" data-aos="fade-right" data-aos-offset="300" data-aos-easing="ease-in-sine">
        <h3 class="heading-projects" ref="headingProjects">Personal and Collaborative Projects</h3>
        <div v-for="(card, index) in cards" :key="card.id" :class="[cardColClass(index)]">
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
          title: "Prediction of parking areas availability from parking dataset using AI/ML models",
          description: "Integrated Technologies and Methods: Python, Streamlit, LSTM, Random Forest, Exploratory Data Analysis, Data Cleaning and Pre-processing, Data Imputation, Feature Selection and Engineering.",
          hoverText: "Implemented an AI/ML-driven solution to predict parking availability using a dataset from 400 on-street parking sensors in Santader, Spain. Employed LSTM and Random Forest models, conducting a comparative analysis of performance metrics and hyperparameters for optimal model selection. The comprehensive data preparation involved Exploratory Data Analysis (EDA), data visualization, cleaning, and pre-processing, including noise identification, handling outliers, and imputation. Employed techniques such as dimensionality reduction, feature selection, and engineering to enhance model accuracy. The project aims to assist drivers in Santader by forecasting parking availability for the upcoming hour, enhancing urban mobility through data-driven insights."
        },
        {
          id: 2,
          imageSrc: "https://raw.githubusercontent.com/dabirrizvi/assets_for_portfolio/main/Project/robot_movement_automation/robot_movement.jpg",
          title: "Robot Movememnt Automation with Computer Vision",
          description: "Integrated Technologies and Methods: Ardruino, Unity 3D, C#, Vuforia and SIFT Algorithm",
          hoverText: "Designed a Robot Movement Automation System utilising Computer Vision and Digital Image Processing, with a focus on the SIFT algorithm through OpenCV. This project seamlessly integrates Unity 3D with Vuforia SDK for AR-like feature detection and Arduino IDE for motor control. The system allows a robot to proficiently track and follow user-selected objects within a Wi-Fi network range, showcasing adaptability to changes in orientation and scale. Hardware components include a robot chassis, L298N Motor Driver, ESP8266 Node MCU, DC Motors, and a 12V rechargeable battery.<br />"
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
          hoverText: "Achieved 5th place in a Kaggle challenge with an accuracy of 82.947%, this project centered on the classification of cardiac arrhythmia using short single-lead ECG recordings from the <a style='text-decoration: none; color: #28282B; font-weight:bold;' class='anchor-links' href='https://physionet.org/content/challenge-2017/1.0.0/' target='_blank'> PhysioNet Computing in Cardiology Challenge 2017 dataset </a>. The primary objective involved categorizing ECG segments into normal rhythm, atrial fibrillation (AF), other rhythms, or noisy recordings. Conducting thorough data exploration, which included the use of matplotlib, laid the groundwork for a robust feature-based approach leveraging random forest and an end-to-end strategy incorporating a CNN architecture. The dataset encompassed extracted ECG waveform features and values representing 6000 time points in 20-second segments, providing invaluable insights for effective cardiac arrhythmia pattern detection."
        },
        {
          id: 5,
          imageSrc: "https://raw.githubusercontent.com/dabirrizvi/assets_for_portfolio/main/Project/speech_recognition/speech_img.jpg",
          title: "Speech Recognition ",
          description: "Integrated Technologies and Methods: Matlab Programming, FFT (Fast Fourier Transform), Audio Sampling, Feature Vector Extraction, Pattern Recognition",
          hoverText: "<p>The project focuses on the implementation of a speaker recognition system using Matlab, aiming to automatically identify speakers based on unique information within speech waves, such as pitch. The system comprises voice training and testing phases. During voice training, users record a 5-second audio clip, and the system extracts voice features using a Fast Fourier Transform (FFT). These features are then stored in a database along with user-assigned labels. In the voice testing phase, users again record a 5-second clip, and the system extracts features for classification. The classifier computes the distance between the test features and those stored in the database, employing a smallest distance approach to identify the speaker with the closest match. The detected class corresponds to the registered user, providing a simple yet effective speaker recognition mechanism.</p><p>This project leverages Matlab's audio processing capabilities, integrating recording, feature extraction, and classification. The implementation showcases a practical application of signal processing and pattern recognition for speaker identification, offering a foundation for further refinement and expansion of the speaker recognition system.</p>"
        },
        {
          id: 6,
          imageSrc: "https://raw.githubusercontent.com/dabirrizvi/assets_for_portfolio/main/Project/ar_solar_system/target_image_front.jpg",
          title: "AR Solar System",
          description: "Integrated Technologies and Methods: Android Studio, Unity 3D, Vuforia SDK, Image Recognition.",
          hoverText: "Developed an Android application by seamlessly integrating Android Studio and Unity 3D, enriched with Augmented Reality (AR) capabilities using Vuforia. The project empowers users to scan a predefined image, granting camera permissions to unveil an AR solar system overlaid on the detected image. This immersive experience combines Android app development, Unity 3D features, and Vuforia's AR framework, allowing users to visualise a captivating solar system through their device's camera. The project showcases effective utilisation of technology for an interactive and educational AR encounter on Android devices."
        },

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
  background-color: #28282B;
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
