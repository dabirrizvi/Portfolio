<template>
  <div class="background">
    <div class="container-content">
      <div class="row content-container intro-content-container">
        <h2>{{ dynamicTitle }}</h2>
        <ul class="research-list">
          <li v-for="(paper, index) in dynamicPapers" :key="index" class="research-item" :data-aos="paper.aosEffect">
            <a :href="paper.url" :download="paper.download" class="research-link" target="_blank">{{ paper.title }}</a>
            <p class="research-authors">{{ paper.authors.join(', ') }}</p>
            <p class="research-abstract" v-html="paper.abstract"></p>
            <a :href="paper.url" :download="paper.download" class="research-link" target="_blank"><i style="font-size: 1.5rem; padding: 20px 0px;" class="fa-solid fa-file-arrow-down"></i></a>
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
          title: '"Deep Learning Advances in Computer Vision: A Survey on use of Deep Learning Techniques for Autonomous Vehicles"',
          authors: ["Dabir Hasan Rizvi"],
          abstract: "Recent advancements in Deep Learning and Intelligent Transportation System have opened the path for the widespread use of autonomous vehicles. Deep learning has proven to be useful in the design and operation of self-driving cars. Giving rise to new possibilities for intelligent traffic safety, smart roadways, and traveller convenience due to their considerable ability to reduce traffic accidents and human casualties, autonomous vehicles has become a popular area of research. This survey looks at the concept behind autonomous vehicles from a deep learning perspective, as well as contemporary implementations and critical assessments. Through a detailed survey, I hope to bridge the gap between Deep Learning and autonomous vehicles. The overview of autonomous vehicles, overview of modern deep learning technologies, and computer vision are covered in this paper, followed by techniques for object detection and object tracking.",
          url: "https://github.com/dabirrizvi/assets_for_portfolio/raw/main/Project/research/dl_computer_vision.pdf",
          aosEffect: "fade-right" ,
          download:'dl_computer_vision.pdf'

        },
        
        {
          title: '"Prediction of parking areas availability from parking dataset using AI/ML models"',
          authors: ["Dabir Hasan Rizvi"],
          abstract: "Traffic congestion has caused frustration among drivers. Finding a free space to park has become challenging. This paper uses AL/ML methods to predict the space availability for a time series model. It includes the context, background, scope and its limitations. Data collection, pre-processing and data transformation. The literature review section contains the previous work done in this field to make predictions for parking area avail- ability and their benefits, gaps and the outcomes of their research. This model utilises a parking dataset in Santander, Spain, which contains data from nearly 400 on-street parking sensors collected over nine months to make predictions. The project aims to use AI/ML techniques to predict the parking spots by clustering them into areas based on the coordinates provided, thus helping the users to make informative decisions regarding which area and parking spots to use. The dataset includes information on spots available whether they are occupied or not and each parking spot’s time frame of historical parking details. The methodology section covers which AI/ML models should be selected, and how they can be developed and trained. The experimental results section displays the outcomes for machine learning models like Long Short-Term Memory and Random Forest using graphs and statistics. Finally, a summary of the future scope of the project and its shortcomings is mentioned in the conclusion section.",
          url: "https://github.com/dabirrizvi/assets_for_portfolio/raw/main/Project/research/parking_prediction.pdf",
          aosEffect: "fade-left" ,
          download:'parking_prediction.pdf'

        },
        
        {
          title: '"Case Study: MyFitnessPal Breach"',
          authors: ["Dabir Hasan Rizvi"],
          abstract: "MyFitnessPal is an application about fitness and nutrition that enables the user to track the calories and nutrition in their diet and this app is owned by Under Armour. In 2018, the company suffered a data breach in late February where the hackers were able to gather data from approximately 150 million users including their usernames, email addresses and passwords. In 2019, it was discovered that these accounts were up for sale on the dark web for bitcoin equivalent of $1040-$20,000. Under Armour was able to discover the intrusion on March 25 2018 and made a public statement on the incident within a week as shown in figure 1, which was commendable as other companies such as Uber took over a year to publicly disclose their data theft woes. This caused the shares of Under Armour to drop by 4.6%. However, despite having revealed usernames, email addresses and passwords, the company was able to protect a few key information such as bank/credit card details, location and other personal information of the user. The application does not collect confidential information of the user such as driving licence number, passport details, national insurance number or social security number, hence that information was not revealed.",
          url: "https://github.com/dabirrizvi/assets_for_portfolio/raw/main/Project/research/myfitnesspal_breach.pdf",
          aosEffect: "fade-right" ,
          download:'myfitnesspal_breach.pdf'

        },
        {
          title: '"AI Methods for Routing in Wireless Sensor Networks"',
          authors: ["Dabir Hasan Rizvi"],
          abstract: "Wireless Sensor Networks (WSNs) is an infrastructure-less and self-configured wireless network to monitor environmental or physical conditions like sound, temperature, pressure, vibration and motion. The base station acts as an interface between the network and the user. Generally, a Wireless Sensor Network consists of hundreds of thousands of nodes. In WSN, Routing is required to send data between the base station and sensor nodes. During the routing of Wireless Sensor Networks, there can be multiple challenges that occur due to network topology, undesirable deployment conditions, network failure etc and it mainly causes lower network lifetime with more energy consumption.",
          url: "https://github.com/dabirrizvi/assets_for_portfolio/raw/main/Project/research/wsn_routing.pdf",
          aosEffect: "fade-left" ,
          download:'wsn_routing.pdf'

        },
        {
          title: '"MuZero: Mastering Atari, Go, chess and shogi by planning with a learned model"',
          authors: ["Dabir Hasan Rizvi"],
          abstract: "AlphaGo, developed by Deepmind, was the first AI (Artificial Intelligence) programme to use neural networks and tree search to defeat humans in the game of Go. Estimating a policy (mapping from state to action) and a value estimate (probability of winning from a given state) was used to accomplish this. AlphaGo utilized a lot of human knowledge, had many Go heuristics built into the agent and was well-versed with the game's rules. AlphaGo Zero was another model that learned to play the game without any prior knowledge of the game or human data, relying solely on self-play reinforcement learning. AlphaZero was the third model, which was a conceptual upgrade from AlphaGo Zero and could play Go, Chess, and Shogi. There was a need for a method that could learn a model that described their surroundings and then apply the model to choose the optimal course of action. MuZero recognises this problem by focusing on the most important components of the environment when planning. MuZero was able to set a reasonably high Atari benchmark while also matching AlphaZero's performance in classical planning challenges such as Go, chess, and shogi. It was used in situations where the game rules were unknown.",
          url: "https://github.com/dabirrizvi/assets_for_portfolio/raw/main/Project/research/muzero.pdf",
          aosEffect: "fade-right" ,
          download:'muzero.pdf'

        },


        {
          title: '"Compound Classification using Chemical Structural Information (PhysioNet Computing in Cardiology Challenge 2017) Report"',
          authors: ["Dabir Hasan Rizvi"],
          abstract: "The electrocardiogram is a vital tool for detecting and monitoring cardiovascular disease (ECG). Cardiovascular disease (CVD) is the biggest cause of death in the globe. In some cases, the patient's ECG is continually monitored to detect various arrhythmic abnormalities. Atrial fibrillation (AF), in instance, is the most common cardiac arrhythmia, with a prevalence of 1-2 percent in the general population, and it can be fatal if left untreated. Essentially, I want to use two machine learning approaches to classify each recording in the challenge database into one of four categories: normal, AF, other, and noise. The first is a feature-based approach (Random Forest Classifier), and the second is an end-to-end approach (Convolution Neural Network).",
          url: "https://github.com/dabirrizvi/assets_for_portfolio/raw/main/Project/research/physionet_computing.pdf",
          aosEffect: "fade-left" ,
          download:'physionet_computing.pdf'

        },

        {
          title: '"Ai in games [Poster]"',
          authors: ["Dabir Hasan Rizvi"],
          abstract: "Due to their vast space and high complexity, games are great benchmarks for evaluating different techniques in artificial intelligence. AI in games refers to going beyond scripted interactions into interactive, responsive, adaptive, and intelligent.  In these systems, players can learn more about the game while they are playing, adapt their own behaviour beyond what is programmed by the developers, and are more interactive. Games use AI in a variety of ways. It can be used for image enhancement, automated level generation, scenarios, and stories, balancing in-game complexity, and adding intelligence to non-playing characters (NPCs).",
          url: "https://github.com/dabirrizvi/assets_for_portfolio/raw/main/Project/research/aigames_poster.pdf",
          aosEffect: "fade-right",
          download:'aigames_poster.pdf'

        },
        {
          title: '"Continuously Running Genetic Algorithm for Real-Time Networking Device Optimization [Poster]"',
          authors: ["Dabir Hasan Rizvi"],
          abstract: "In ultra-scale data centers, network devices demand real-time, optimal configurations based on varying topologies and traffic patterns. Manual tuning is impractical for diverse scenarios. Zero Touch Tuning (ZTT), a continuous Genetic Algorithm, autonomously optimizes device parameters. Tested in real-world traffic, ZTT consistently outperforms static configurations, providing a significant performance boost.",
          url: "https://github.com/dabirrizvi/assets_for_portfolio/raw/main/Project/research/ga_poster.pdf",
          aosEffect: "fade-left",
          download:'ga_poster.pdf'
        },
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

.container-content{
  max-width: 1200px;
  margin: auto;
  padding: 100px 0px;
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
h2{
  text-align: center;
  color: rgba(255, 228, 196);
  font-family: 'Space Mono', monospace, Arial, Helvetica, sans-serif;
}
</style>