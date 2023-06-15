<template>
  <div class="background">

    <div class="content">
      <div class="cd-vertical-timeline ">
        <div class="cd-line"></div>
        <div class="text"><h2 style="color: black; padding-left: 5rem;">Education</h2></div>
        <div v-for="(event, index) in events" :key="index" class="cd-timeline-block">
          
          <div class="cd-timeline-img">
            <img :src="event.image" alt="Event Image" />
          </div>
          <div class="cd-timeline-content" data-aos="fade-up">
           
            <h2>{{ event.date }}</h2>
            <h2>{{ event.title }}</h2>
            <p>{{ event.description }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
  
<script>
export default {
  name: 'VerticalTimeline',
  data() {
    return {
      events: [
        {
          date: 'September 2021 - September 2023',
          title: 'MSc. Advanced Computer Science (with Integrated Year in Industry) ',
          image: 'https://pbs.twimg.com/profile_images/1273625898055499777/qbq1u1Sp_400x400.png',
          description:'Distinction (Expected)'
        },
        {
          date: 'August 2016 - August 2020',
          title: 'B.E in Electronics & Communication Engineering',
          image: 'https://www.edudunia.com/eduadmin/images/uploaded/24458.CMR_Bangalore.jpg',
          description:'Second Class Hons.'
        }
      ],
    };
  },
};
</script>
  
<style lang="scss" scoped>
.background {
  background-color: #f1f1f1;
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

.cd-timeline-content h2 {
  font-size: 1.25rem;
  margin-bottom: 0.5rem;
  color: #333;
}

.cd-timeline-content p {
  font-size: 1rem;
  line-height: 1.4;
  color: #333;
}
</style>
  