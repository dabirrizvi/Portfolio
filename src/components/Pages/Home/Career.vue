<template>
  <div class="background container-fluid">
    <timeline :title="'Education'" :events="educationEvents" />
    <timeline :title="'Work Experience'" :events="workExperienceEvents" />
  </div>
</template>

<script>

export default {
  data() {
    return {
      educationEvents: [
        {
          id: '1',
          name: 'Aberystwyth University ',
          date: 'September 2021 - September 2023',
          title: 'MSc. Advanced Computer Science (with Integrated Year in Industry)',
          image: 'https://raw.githubusercontent.com/dabirrizvi/assets_for_portfolio/main/Timeline/aber.jpg',
           description: 'Distinction (Expected)',
          button_text: 'Relevant modules',
          list: ['Fundamentals of Intelligent Systems', 'Machine Learning for Intelligent Systems', 'Modelling, Managing and Securing Data', 'Agile Software Development Project', 'Statistics Concepts, Methods and Tools', 'Research Topics in Computing', 'MSc Project - Prediction of parking areas availability from parking dataset using AI/ML models'],
        },
        {
          id: '2',
          name: 'CMR Institute of Technology',
          date: 'August 2016 - August 2020',
          title: 'B.E in Electronics & Communication Engineering',
          image: 'https://raw.githubusercontent.com/dabirrizvi/assets_for_portfolio/main/Timeline/cmr.jpg',
           description: 'Second Class Hons.',
          button_text: 'Relevant Modules',
          list: ['Programming in C & Data Structure', 'Microprocessors', 'Digital Signal Processing', 'Operating Systems', 'Programming in JAVA', 'ARM Microcontrollers & Embedded Systems', 'Python Application Programming', 'Network & Cyber Security', 'IOT & Wireless Sensor Networks', 'Project Work - Robot Movement Automation with Computer Vision'],
        }
      ],
      workExperienceEvents: [
        {
          id: '3',
          name: 'Net World Sports Ltd.',
          date: 'July 2022 - Present',
          title: 'Junior Web Developer',
          image: 'https://raw.githubusercontent.com/dabirrizvi/assets_for_portfolio/main/Timeline/nws.jpg',
          description: 'Full-Time (Industrial Year)',
          button_text: 'View Details',
           list: ['Built responsive and reusable front-end components using a micro-service architecture with Vue.js.', 
           'Implemented responsive design experience and ensured optimal user experience for the company’s blog website working in collaboration with the content and SEO teams.',
            'Identified workflow pain points across all departments and developed a Chrome Extension, working with APIs to address those needs.',
           'Employing Agile Methodology to migrate 40+ e-commerce stores from Magento 1 to Magento 2, improving website performance and customer experience.',
           'Tools and languages used: JavaScript, Php, jQuery, Manifest JS, Vue.js, Magento 2, WordPress, HTML, CSS, Sass.'
           ],
        },
        {
          id: '4',
          name: 'Racks & Rollers | Storage Technologies & Automation',
          date: 'January 2020 - July 2020',
          title: 'Java Programmer - Internship',
          image: 'https://raw.githubusercontent.com/dabirrizvi/assets_for_portfolio/main/Timeline/rnr.jpg',
          description: 'Internship',
          button_text: 'View Details',
          list: ['Analysed requirements and adhered to industrial technical standards working as a Java developer to develop a Software Application for Pick-to-Light system.',
            'Participated in the complete Software Development Life Cycle, including performance analysis, design, development and testing, ensuring ideal functionality and user experience.',
            'Utilised Scrum and Test-Driven Development (TDD) to optimise the development process and ensure high-quality software delivery.'],
        }
      ]
    };
  }
};
</script>
<style scoped>
.background {
  background-color: #ffe4c4;
}
</style>