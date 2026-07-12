<template>
  <div class="background">
    <div class="container-content">
      <div class="row content-container intro-content-container">
        <h2>{{ dynamicTitle }}</h2>

        <ul class="research-list">
          <li
            v-for="(paper, index) in dynamicPapers"
            :key="index"
            class="research-item"
            :data-aos="paper.aosEffect"
          >
            <a
              :href="paper.url"
              :download="paper.download || null"
              class="research-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              {{ paper.title }}
            </a>

            <p class="research-authors">
              {{ paper.authors.join(', ') }}
            </p>

            <p class="research-abstract" v-html="paper.abstract"></p>

            <a
              :href="paper.url"
              :download="paper.download || null"
              class="research-link"
              target="_blank"
              rel="noopener noreferrer"
              :aria-label="paper.linkLabel"
              :title="paper.linkLabel"
            >
              <i
                style="font-size: 1.5rem; padding: 20px 0;"
                :class="paper.icon || 'fa-solid fa-file-arrow-down'"
              ></i>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      dynamicTitle: "Academic Research",
      dynamicPapers: [
        {
          title: '"Object Tracking Robot Using SIFT Based Computer Vision"',
          authors: [
            "Dabir Hasan Rizvi",
            "Deepak Kamath",
            "Adarsh Umesh",
            "Karthik Battaram",
            "Elumalai R"
          ],
          abstract:
            "Published at the IEEE 2024 International Conference on Electronics, Computing, Communication and Control Technology (ICECCC). This research demonstrates how the Scale-Invariant Feature Transform (SIFT) algorithm can be applied to object detection and tracking in an autonomous robotic system. The approach enables the robot to identify and follow selected objects while remaining robust to changes in scale and orientation. The paper also explores the potential applications of classical computer vision techniques in robotics and autonomous vehicle technologies.<br><br><strong>DOI:</strong> 10.1109/ICECCC61767.2024.10594000",
          url: "https://ieeexplore.ieee.org/document/10594000",
          aosEffect: "fade-right",
          icon: "fa-solid fa-book-open",
          linkLabel: "View publication on IEEE Xplore"
        },
        {
          title:
            '"Deep Learning Advances in Computer Vision: A Survey of Techniques for Autonomous Vehicles"',
          authors: ["Dabir Hasan Rizvi"],
          abstract:
            "This survey explores the role of deep learning and computer vision in autonomous vehicle systems. It reviews modern approaches to perception, object detection and object tracking, alongside their applications in intelligent transportation systems, road safety and self-driving technology. The paper also considers the challenges and future potential of applying deep learning techniques in real-world autonomous driving environments.",
          url: "https://github.com/dabirrizvi/assets_for_portfolio/raw/main/Project/research/dl_computer_vision.pdf",
          aosEffect: "fade-left",
          download: "dl_computer_vision.pdf",
          icon: "fa-solid fa-file-arrow-down",
          linkLabel: "Download deep learning survey"
        },
        {
          title:
            '"Prediction of Parking Area Availability Using AI and Machine Learning Models"',
          authors: ["Dabir Hasan Rizvi"],
          abstract:
            "This research investigates the prediction of parking availability using data collected from approximately 400 on-street parking sensors in Santander, Spain. The work includes exploratory data analysis, cleaning, preprocessing, imputation and feature engineering before comparing Long Short-Term Memory and Random Forest models. The aim is to forecast parking availability and help drivers make more informed decisions about where to park.",
          url: "https://github.com/dabirrizvi/assets_for_portfolio/raw/main/Project/research/parking_prediction.pdf",
          aosEffect: "fade-right",
          download: "parking_prediction.pdf",
          icon: "fa-solid fa-file-arrow-down",
          linkLabel: "Download parking availability research"
        },
        {
          title: '"Case Study: The MyFitnessPal Data Breach"',
          authors: ["Dabir Hasan Rizvi"],
          abstract:
            "This case study examines the 2018 MyFitnessPal data breach, which affected approximately 150 million user accounts. It considers the information exposed, the response from Under Armour, the financial and reputational impact of the incident, and the wider security lessons that organisations can take from the breach.",
          url: "https://github.com/dabirrizvi/assets_for_portfolio/raw/main/Project/research/myfitnesspal_breach.pdf",
          aosEffect: "fade-left",
          download: "myfitnesspal_breach.pdf",
          icon: "fa-solid fa-file-arrow-down",
          linkLabel: "Download MyFitnessPal breach case study"
        },
        {
          title:
            '"Artificial Intelligence Methods for Routing in Wireless Sensor Networks"',
          authors: ["Dabir Hasan Rizvi"],
          abstract:
            "This paper explores routing challenges in Wireless Sensor Networks, including limited energy, changing network topologies, node failures and unreliable deployment conditions. It reviews how artificial intelligence techniques can improve routing efficiency, reduce energy consumption and extend the overall lifetime of sensor networks.",
          url: "https://github.com/dabirrizvi/assets_for_portfolio/raw/main/Project/research/wsn_routing.pdf",
          aosEffect: "fade-right",
          download: "wsn_routing.pdf",
          icon: "fa-solid fa-file-arrow-down",
          linkLabel: "Download wireless sensor network research"
        },
        {
          title: '"MuZero: Planning with a Learned Model"',
          authors: ["Dabir Hasan Rizvi"],
          abstract:
            "This paper reviews MuZero, a reinforcement learning system that combines tree search with a learned representation of its environment. It explains how MuZero builds upon AlphaGo, AlphaGo Zero and AlphaZero, and how it achieves strong performance across Atari, Go, chess and shogi without being provided with the complete rules or dynamics of each environment.",
          url: "https://github.com/dabirrizvi/assets_for_portfolio/raw/main/Project/research/muzero.pdf",
          aosEffect: "fade-left",
          download: "muzero.pdf",
          icon: "fa-solid fa-file-arrow-down",
          linkLabel: "Download MuZero research paper"
        },
        {
          title:
            '"ECG Arrhythmia Classification Using Random Forest and Convolutional Neural Networks"',
          authors: ["Dabir Hasan Rizvi"],
          abstract:
            "This report investigates the classification of single-lead ECG recordings from the PhysioNet Computing in Cardiology Challenge 2017 dataset. It compares a feature-based Random Forest approach with an end-to-end Convolutional Neural Network to classify recordings as normal rhythm, atrial fibrillation, other rhythm or noise.",
          url: "https://github.com/dabirrizvi/assets_for_portfolio/raw/main/Project/research/physionet_computing.pdf",
          aosEffect: "fade-right",
          download: "physionet_computing.pdf",
          icon: "fa-solid fa-file-arrow-down",
          linkLabel: "Download ECG classification report"
        },
        {
          title: '"Artificial Intelligence in Games [Poster]"',
          authors: ["Dabir Hasan Rizvi"],
          abstract:
            "This poster explores the role of artificial intelligence in modern games, including adaptive behaviour, intelligent non-player characters, procedural content generation, automated level design, difficulty balancing and image enhancement. It highlights how AI can make game environments more responsive, interactive and engaging.",
          url: "https://github.com/dabirrizvi/assets_for_portfolio/raw/main/Project/research/aigames_poster.pdf",
          aosEffect: "fade-left",
          download: "aigames_poster.pdf",
          icon: "fa-solid fa-file-arrow-down",
          linkLabel: "Download artificial intelligence in games poster"
        },
        {
          title:
            '"Continuously Running Genetic Algorithm for Real-Time Network Device Optimisation [Poster]"',
          authors: ["Dabir Hasan Rizvi"],
          abstract:
            "This poster examines Zero Touch Tuning, a continuously running genetic algorithm designed to optimise network device parameters in real time. The method adapts to changing traffic patterns and network topologies, reducing the need for manual configuration and improving performance compared with static tuning approaches.",
          url: "https://github.com/dabirrizvi/assets_for_portfolio/raw/main/Project/research/ga_poster.pdf",
          aosEffect: "fade-right",
          download: "ga_poster.pdf",
          icon: "fa-solid fa-file-arrow-down",
          linkLabel: "Download genetic algorithm poster"
        }
      ]
    };
  }
};
</script>

<style scoped>
.background {
  background-color: #050b36;
  padding: 20px;
}

.container-content {
  max-width: 1200px;
  margin: auto;
  padding: 100px 0;
}

.content-container {
  text-align: center;
}

.research-list {
  list-style-type: none;
  padding: 0;
}

.research-item {
  border: 1px solid rgba(255, 228, 196);
  margin: 50px 0;
  padding: 10px;
  border-radius: 5px;
  background-color: #fefee3;
}

.research-link {
  font-size: 1.2em;
  color: #333;
  text-decoration: none;
  font-weight: bold;
  font-style: italic;
}

.research-authors {
  color: #777;
  margin: 5px 0;
}

.research-abstract {
  margin: 5px 0;
  color: #333;
}

h2 {
  text-align: center;
  color: rgba(255, 228, 196);
  font-family: 'Space Mono', monospace, Arial, Helvetica, sans-serif;
}
</style>
