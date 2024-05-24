<template>
  <div>
    <div class="cd-vertical-timeline">
      <div class="cd-line"></div>
      <h2 class="title" v-html="title"></h2>

      <div v-for="(event, index) in events" :key="index" class="cd-timeline-block">
        <div class="cd-timeline-img">
          <img :src="event.image" alt="Event Image" />
        </div>
        <div class="cd-timeline-content" data-aos="fade-up">
          <h2 class="sub-heading" v-html="event.name"></h2>
          <p v-html="event.date"></p>
          <h2 class="sub-heading" v-html="event.title"></h2>
          <p v-html="event.description"></p>
          <!-- Bootstrap accordion -->
          <div v-if="event.list && event.list.length" :id="'accordionFlushExample' + event.id"
            class="accordion accordion-flush">
            <div class="accordion-item">
              <h2 class="accordion-header" :id="'flush-headingOne' + event.id">
                <button class="accordion-button collapsed" type="button" :data-bs-toggle="'collapse'"
                  :data-bs-target="'#flush-collapseOne' + event.id" :aria-expanded="false"
                  :aria-controls="'flush-collapseOne' + event.id" v-html="event.button_text">
                </button>
              </h2>
              <div :id="'flush-collapseOne' + event.id" class="accordion-collapse collapse"
                :aria-labelledby="'flush-headingOne' + event.id" :data-bs-parent="'#accordionFlushExample' + event.id">
                <div class="accordion-body">
                  <ul>
                    <li v-for="(item, itemIndex) in event.list" :key="itemIndex" v-html="item"></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <!-- Accordion end -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'VerticalTimeline',
  props: {
    title: {
      type: String,
      default: 'Education'
    },
    events: {
      type: Array,
      default: () => []
    }
  }
};
</script>

  
<style lang="scss" scoped>
// content styling
.content {
  padding-top: 0px;
}

.cd-vertical-timeline {
  position: relative;
  margin: 0 auto;
  padding: 2rem 0;
  max-width: 800px;
}

.cd-line {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 1.5rem;
  width: 4px;
  background-color: #323d4f;
}

.cd-timeline-block {
  position: relative;
  margin: 2rem 0;
}

.cd-timeline-block::after {
  content: '';
  display: table;
  clear: both;
}

.cd-timeline-img {
  position: absolute;
  top: 0;
  left: 0;
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
  background: #f8f9fa;
  box-shadow: 0 0 0 4px rgba(0, 0, 0, 0.1);
  z-index: 1;
}

.cd-timeline-img img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 50%;
  transform: scale(0.8);
}

.cd-timeline-content {
  position: relative;
  margin-left: 5rem;
  padding: 1rem;
}

.title {
  margin-left: 5rem;
  color: rgba(10, 12, 41);
  font-family: 'Space Mono', monospace, Arial, Helvetica, sans-serif;
  font-size: 2rem;
}

@media (max-width: 990px) {

  .cd-timeline-content {
    margin-left: 3.5rem;
  }
}

.cd-timeline-content h2,
h1 {
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 0.5rem;
  color: rgba(10, 12, 41);
  font-family: 'Space Mono', monospace, Arial, Helvetica, sans-serif;
}


.cd-timeline-content p,
li {
  font-size: 1rem;
  line-height: 30px;
  color: rgba(10, 12, 41);
  font-family: 'Roboto', sans-serif;
}


/* Custom styles for Bootstrap accordion */
.accordion {
  border-top-right-radius: 25px;
  border-top-left-radius: 25px;
  overflow: hidden;
}

.accordion-item {
  background-color: rgba(10, 12, 41, 0.15);
  border-radius: 8px;
  margin-bottom: 10px;
}


/* Remove default Bootstrap button icon */
.accordion {
  --bs-accordion-btn-icon: none;
  --bs-accordion-btn-active-icon: none
}

.accordion-button {
  background-color: rgba(10, 12, 41,0.8);
  color: #f8f9fa;
  position: relative;
}

.accordion-button::after {
  content: '\f107';
  font-family: 'Font Awesome 5 Free';
  font-weight: 900;
  display: inline-block;
  position: relative;
  transition: transform 0.2s ease-in-out;
  transform-origin: center; 
}



.accordion-button:focus {
  box-shadow: none;
}

.accordion-button:hover {
  background-color: rgba(10, 12, 41,1);
}

.accordion-body {
  padding: 15px;
}
</style>