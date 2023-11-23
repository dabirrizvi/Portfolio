<template>
  <div class="container content row" data-aos="fade-left" >
    <div class="col-xxl-10 col-md-12" style="padding-left: 0px;">
      <div class="heading-intro">
        <h2>{{ typedHeading }}</h2>
      </div>
      <div class="intro-content" v-if="typingComplete">
        <p>{{ introContent }}</p>
      </div>
      <kinesis-container>
        <kinesis-element :strength="5" type="translate">
          <a href="https://github.com/dabirrizvi/assets_for_portfolio/raw/main/CV/CV.pdf" download="cv.pdf">
            <button type="button" class="btn">Download CV <i class="fa-solid fa-file-arrow-down"></i></button>
          </a>
        </kinesis-element>
      </kinesis-container>

    </div>
    <div class="col-xxl-1 col-md-12"></div>
    <div class="col-xxl-1 col-md-12">
      <ul>
        <li>
          <kinesis-container>
            <kinesis-element :strength="10" type="depth">
              <!-- Linkedin -->
              <a target="_blank" href="https://www.linkedin.com/in/dabir-hasan-rizvi-738a83185/"><i
                  class="fa-brands fa-linkedin fa-socials"></i></a>
            </kinesis-element>
          </kinesis-container>

        </li>

        <li>
          <kinesis-container>
            <kinesis-element :strength="10" type="depth">
              <!-- Github -->
              <a target="_blank" href="https://github.com/dabirrizvi"><i class="fa-brands fa-github fa-socials"></i></a>
            </kinesis-element>
          </kinesis-container>


        </li>
        <li>
          <kinesis-container>
            <kinesis-element :strength="10" type="depth">
          <!-- Phone -->
          <a href="tel:+44(0)7737906374"><i class="fa-solid fa-phone fa-socials"></i></a>
            </kinesis-element>
          </kinesis-container>


        </li>
        <li>
          <kinesis-container>
            <kinesis-element :strength="10" type="depth">
          <!-- Email -->
          <a href="mailto:dabir.rizvi@gmail.com?subject=General%20Inquiry&body=Hi%20Dabir,"><i
              class="fa-solid fa-envelope fa-socials"></i></a>
            </kinesis-element>
          </kinesis-container>

        </li>
        <li>
          <kinesis-container>
            <kinesis-element :strength="10" type="depth">
          <!-- Instagram -->
          <a target="_blank" href="https://www.instagram.com/dabirrizvi/"><i
              class="fa-brands fa-instagram fa-socials"></i></a>
            </kinesis-element>
          </kinesis-container>

        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      typedHeading: '',
      introContent: '',
      targetText: 'Hi! My Name is Dabir Hasan Rizvi',
      introContentText:
        " Welcome to my portfolio! I'm a result-driven Software Developer with a diverse skill set that encompasses web-based applications, as well as artificial intelligence and machine learning. With a strong academic foundation and over a year of hands-on experience in agile teams, I'm dedicated to bringing creativity and efficiency to the world of software development. My journey has led me to become proficient in object-oriented programming, with a strong emphasis on AI and ML applications. I'm technologically savvy, and my unwavering drive to excel fuels my ambition to contribute effectively to any organisation's success. Explore my portfolio to discover the projects that reflect my dedication to the ever-evolving fields of software development and AI/ML.",
      typeSpeed: {
        heading: 20, // Speed for typing heading
        intro: 10,   // Speed for typing introduction content
      },
      typingComplete: false,
    };
  },
  mounted() {
    this.initTyped()
      .then(() => {
        // Heading typing is complete
      });
  },
  methods: {
    async initTyped() {
      return new Promise((resolve) => {
        let index = 0;
        const typeInterval = setInterval(() => {
          this.typedHeading += this.targetText[index];
          index += 1;

          if (index === this.targetText.length) {
            clearInterval(typeInterval);
            this.blinkCursor();
            resolve();
          }
        }, this.typeSpeed.heading);
      });
    },
    async typeIntroContent() {
      return new Promise((resolve) => {
        let index = 0;
        const typeInterval = setInterval(() => {
          this.introContent += this.introContentText[index];
          index += 1;

          if (index === this.introContentText.length) {
            clearInterval(typeInterval);
            resolve();
          }
        }, this.typeSpeed.intro);
      });
    },
    blinkCursor() {
      this.typingComplete = true;
      this.typeIntroContent();
    },
  },
};
</script>


<style scoped>
/* styling for cursor */
.heading-intro h2::after, .intro-content p::after {
  content: '|';
  display: inline-block;
  animation: blinkCursor 1s infinite;
}

@keyframes blinkCursor {
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: 0;
  }
}


.content {
  display: flex;
  overflow: hidden;
  margin: auto;
  max-width: 1200px;
  min-height: 100vh;
  margin: auto;
  padding: 0;
  align-items: center;
}

@media(max-width: 1200px) {
  .content {
    padding-left: 10px;
  }
}

.heading-intro>h2 {
  
  font-size: 2rem;
  color: #FFE4C4;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
  font-family: 'Space Mono', monospace, Arial, Helvetica, sans-serif;
  padding: 0px 10px 50px 0px;
}

.intro-content>p {
  font-size: 1.5rem;
  color: #f8f9fa;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
  font-family: 'Roboto', sans-serif;
}

/* Button styling */
.btn {
  margin: 50px 0px;
  position: relative;
  overflow: hidden;
  background-color: rgba(255, 255, 255, 0.4);
  border: 1px solid #333;
  border-radius: 25px;
  color: #f8f9fa;
  padding: 10px 20px;
  font-size: 1.5rem;
  cursor: pointer;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
  transition: color 0.5s ease-in-out, background-color 0.5s ease-in-out;
  font-family: 'Space Mono', monospace, Arial, Helvetica, sans-serif;
}

.btn::before {
  content: '';
  position: absolute;
  top: 0;
  right: 100%;
  width: 100%;
  height: 100%;
  background-color: rgba(255, 228, 196, 0.4);
  transition: right 0.5s ease-in-out;
  z-index: -1;
}

.btn:hover::before {
  right: 0;
}

.btn:hover {
  color: rgba(255, 228, 196);
  ;

}

.fa-file-arrow-down {
  font-size: 2rem;
  margin-left: 10px;
}

/* Socials styling */

.fa-socials {
  font-size: 2rem;
  color: #f8f9fa;
}

ul {
  list-style: none;
  padding: 0;
  display: flex;
  flex-direction: column;
  /* Display list items vertically */
  justify-content: space-evenly;
  /* Space items evenly */
}

li {
  padding: 2rem 0;
}

li:hover .fa-brands,
li:hover .fa-solid {
  color: #FFE4C4;
}


@media (max-width: 1400px) {
  ul {
    flex-direction: row;
  }
}
</style>
