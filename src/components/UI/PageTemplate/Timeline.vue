<template>
  <div>
    <div class="cd-vertical-timeline">
      <div class="cd-line"></div>
      <h2 class="title">{{ title }}</h2>
      <div v-for="(event, index) in events" :key="index" class="cd-timeline-block">
        <div class="cd-timeline-img">
          <img :src="event.image" alt="Event Image" />
        </div>
        <div class="cd-timeline-content" data-aos="fade-up">
          <h1>{{ event.name }}</h1>
          <p>{{ event.date }}</p>
          <h2>{{ event.title }}</h2>
          <p>{{ event.description }}</p>
          <!-- Bootstrap accordion -->
          <div v-if="event.list && event.list.length" :id="'accordionFlushExample' + event.id" class="accordion accordion-flush">
            <div class="accordion-item">
              <h2 class="accordion-header" :id="'flush-headingOne' + event.id">
                <button class="accordion-button collapsed" type="button" :data-bs-toggle="'collapse'" :data-bs-target="'#flush-collapseOne' + event.id"
                  :aria-expanded="false" :aria-controls="'flush-collapseOne' + event.id">
                  {{ event.button_text }}
                </button>
              </h2>
              <div :id="'flush-collapseOne' + event.id" class="accordion-collapse collapse" :aria-labelledby="'flush-headingOne' + event.id"
                :data-bs-parent="'#accordionFlushExample' + event.id">
                <div class="accordion-body">
                  <ul>
                    <li v-for="(item, itemIndex) in event.list" :key="itemIndex">{{ item }}</li>
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
  /* Adjust this value based on your design */
  width: 4px;
  background-color: #000;
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
  background: #fff;
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
  border-radius: 0.25rem;
  background-color: #f1f1f1;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.title {
  margin-left: 5rem;
  color: #f7e1d7;
}

@media (max-width: 990px) {

  .cd-timeline-content {
    margin-left: 3.5rem;
  }
}

.cd-timeline-content h2,
h1 {
  font-size: 1.25rem;
  margin-bottom: 0.5rem;
  color: #333;
}

.cd-timeline-content p,
li {
  font-size: 1rem;
  line-height: 30px;
  color: #333;
}
</style>
  