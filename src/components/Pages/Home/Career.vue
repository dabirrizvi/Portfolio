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
          name: '<a style="text-decoration:none; color:inherit;" target=_blank href="https://www.aber.ac.uk/en/">Aberystwyth University</a>',
          date: 'September 2021 - December 2023',
          title: '<a style="text-decoration:none; color:inherit;" target=_blank href="https://courses.aber.ac.uk/postgraduate/software-engineering-integrated-industrial-year/">MSc. Advanced Computer Science (with Integrated Year in Industry)</a>',
          image: 'https://raw.githubusercontent.com/dabirrizvi/assets_for_portfolio/main/Timeline/aber.jpg',
          description: '',
          button_text: 'Relevant modules',
          list: ['Fundamentals of Intelligent Systems', 'Machine Learning for Intelligent Systems', 'Modelling, Managing and Securing Data', 'Agile Software Development Project', 'Statistics Concepts, Methods and Tools', 'Research Topics in Computing', 'MSc Project - Prediction of parking areas availability from parking dataset using AI/ML models'],
        },
        {
          id: '2',
          name: '<a style="text-decoration:none; color:inherit;" target=_blank href="https://www.cmrit.ac.in/">CMR Institute of Technology</a>',
          date: 'August 2016 - August 2020',
          title: '<a style="text-decoration:none; color:inherit;" target=_blank href="https://www.cmrit.ac.in/courses/be-electronics-communication-engineering/">B.E in Electronics & Communication Engineering</a>',
          image: 'https://raw.githubusercontent.com/dabirrizvi/assets_for_portfolio/main/Timeline/cmr.jpg',
          description: '',
          button_text: 'Relevant Modules',
          list: ['Programming in C & Data Structure', 'Microprocessors', 'Digital Signal Processing', 'Operating Systems', 'Programming in JAVA', 'ARM Microcontrollers & Embedded Systems', 'Python Application Programming', 'Network & Cyber Security', 'IOT & Wireless Sensor Networks', 'Project Work - Robot Movement Automation with Computer Vision'],
        }
      ],
      workExperienceEvents: [
        {
          id: '3',
          name: '<a style="text-decoration:none; color:inherit;" target=_blank href="https://reachstudios.co.uk/">Reach Studios Ltd.</a>',
          date: 'July 2024 - Present',
          title: 'Magento Developer',
          image: 'https://raw.githubusercontent.com/dabirrizvi/assets_for_portfolio/main/Timeline/reach.jpg',
          description: 'Full-time',
          button_text: 'View Details',
          list: [
            'Collaborated with stakeholders to gather requirements, present concepts, and deploy custom CMS blocks for Corney & Barrow, improving site performance, usability, and back-end management. <a style="text-decoration:none; color:inherit;" target=_blank href="https://www.corneyandbarrow.com/"><i class="fa-solid fa-right-from-bracket"></i></a>',
            'Building a scalable B2B Magento platform to replace a legacy SAP system, incorporating customer group–based pricing, custom catalogs, and approval workflows.',
            'Integrated PunchOut functionality to support seamless procurement for B2B clients.',
            'Developed a vape store using the Hyvä frontend and integrated Amasty one-step checkout, adhering to Magento best practices for performance and maintainability. <a style="text-decoration:none; color:inherit;" target=_blank href="https://mirage.co.uk/"><i class="fa-solid fa-right-from-bracket"></i></a>',
            'Created custom Magento widgets to extend both frontend and backend capabilities.',
            'Implemented GraphQL endpoints to enable dynamic and efficient data retrieval.',
            'Applied critical Magento security patches to ensure platform security and compliance.'
          ],
        },
        {
          id: '4',
          name: '<a style="text-decoration:none; color:inherit;" target=_blank href="https://www.networldsports.co.uk/about">Net World Sports Ltd.</a>',
          date: 'July 2022 - June 2023',
          title: 'Junior Web Developer',
          image: 'https://raw.githubusercontent.com/dabirrizvi/assets_for_portfolio/main/Timeline/nws.jpg',
          description: 'Full-Time (Industrial Year)',
          button_text: 'View Details',
          list: [
            'Built responsible and reusable Vue.JS front-end components, optimising performance within a microservice architecture.',
            'Enhanced user experience for the company’s blog website, leading to a 40% increase in user engagement by collaborating with content and SEO teams to implement responsive design <a style="text-decoration:none; color:inherit;" target=_blank href="https://blog.networldsports.co.uk/"><i class="fa-solid fa-right-from-bracket"></i></a>.',
            'Streamlined workflows across departments by developing a Chrome Extension, integrating APIs and boosting productivity by 60%.',
            'Employed agile methodology to migrate 40+ e-commerce stores from Magento 1 to Magento 2, resulting in a 30% reduction in page load times, an improved lighthouse score by 15%, and an enhanced customer experience <a style="text-decoration:none; color:inherit;" target=_blank href="https://www.networldsports.co.uk/"><i class="fa-solid fa-right-from-bracket"></i></a>.',
            'Conducted code reviews, ensured documentation, and maintained high code quality.',
            'Collaborated with cross-functional teams to deliver new features and improve existing functionalities.',
            'Tools and Technologies used: JavaScript, Gulp, PHP, jQuery, Laravel, PostgreSQL, Vue.JS, Magento 2, WordPress, Rest API, HTML, CSS, Sass, Bootstrap.'
          ],
        },
        {
          id: '5',
          name: '<a style="text-decoration:none; color:inherit;" target=_blank href="https://racksandrollers.com/">Racks & Rollers | Storage Technologies & Automation</a>',
          date: 'January 2020 - July 2020',
          title: 'Java Programmer - Internship',
          image: 'https://raw.githubusercontent.com/dabirrizvi/assets_for_portfolio/main/Timeline/rnr.jpg',
          description: 'Internship',
          button_text: 'View Details',
          list: [
            'Developed a scalable Pick-to-light system GUI, adhering to technical standards and enhancing operational efficiency.',
            'Engaged in the complete software development life cycle, including performance analysis, design, development, and testing, to deliver optimal user experience and ideal functionality.',
            'Leveraged Scrum and Test-Driven Development (TDD) to streamline the development process and ensure high quality software delivery, reducing bug occurrence by 30%.',
            'Participated in client meetings to gather requirements and present progress, enhancing client satisfaction and increasing efficiency by 20%.',
            'Contributed to documentation and user manuals, facilitating easier maintenance and upgrades.',
            'Utilised Java and related technologies to ensure high performance and scalability of applications.'
          ],
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