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
          title: 'Junior Magento Developer',
          image: 'https://raw.githubusercontent.com/dabirrizvi/assets_for_portfolio/main/Timeline/reach.jpg',
          description: 'Full-time',
          button_text: 'View Details',
          list: [
            'Collaborated closely with stakeholders to gather detailed requirements, present technical concepts, and deploy custom CMS blocks for clients like Corney & Barrow, significantly enhancing site performance, usability, and backend management. <a style="text-decoration:none; color:inherit;" target=_blank href="https://www.corneyandbarrow.com/"><i class="fa-solid fa-right-from-bracket"></i></a>',
            'Played a key role in building a scalable B2B Magento platform to replace a legacy SAP system, implementing customer group–based pricing, tailored catalog management, and API-driven approval workflows to streamline business processes.',
            'Engineered backend services within a microservice architecture, developing custom Magento modules and optimising checkout workflows while leveraging Kafka for event-driven asynchronous communication and RESTful APIs to enable scalable and loosely coupled components.',
            'Enhanced search functionality using Elasticsearch, developed reusable Magento widgets, implemented GraphQL endpoints for efficient data querying, and applied critical security patches to maintain a secure, reliable, and compliant platform.',
            'Developed a vape store frontend using Hyvä and integrated Amasty one-step checkout, ensuring adherence to Magento best practices for optimal performance and maintainability. <a style="text-decoration:none; color:inherit;" target=_blank href="https://mirage.co.uk/"><i class="fa-solid fa-right-from-bracket"></i></a>'
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
            'Designed and implemented responsive, reusable Vue.js components within a microservice architecture, integrating seamlessly with Node.js and Express.js backend services to deliver high-performance, scalable web applications.',
            'Revamped the company’s blog website in collaboration with content and SEO teams, resulting in a 40% increase in user engagement through mobile-first design and content optimisation. <a style="text-decoration:none; color:inherit;" target=_blank href="https://blog.networldsports.co.uk/"><i class="fa-solid fa-right-from-bracket"></i></a>',
            'Developed a Chrome Extension integrating multiple APIs, streamlining workflows and boosting departmental productivity by 60%.',
            'Led the agile migration of 40+ e-commerce stores from Magento 1 to Magento 2, achieving a 30% reduction in page load times, a 15% improvement in Lighthouse scores, and significantly enhanced customer experience. <a style="text-decoration:none; color:inherit;" target=_blank href="https://www.networldsports.co.uk/"><i class="fa-solid fa-right-from-bracket"></i></a>',
            'Conducted thorough code reviews, maintained comprehensive documentation, adhered to development best practices, and utilised CI/CD pipelines to automate testing and deployment—ensuring faster, more reliable releases.',
            'Collaborated effectively with cross-functional teams to deliver new features and improve existing functionalities.',
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
            'Designed and developed a scalable Pick-to-Light system GUI, significantly improving operational efficiency and enhancing user experience.',
            'Engaged in the full software development lifecycle—from performance analysis and system design to development, testing, and deployment—ensuring optimal functionality and reliability.',
            'Adopted Scrum methodology and Test-Driven Development (TDD) practices to streamline development and improve software quality, reducing bug incidence by 30%.',
            'Collaborated directly with clients to gather requirements and present solutions, contributing to a 20% improvement in implementation efficiency.',
            'Created detailed technical documentation and user manuals to support long-term maintainability.',
            'Utilised Java and supporting technologies to build robust and high-performance applications tailored to industrial automation needs.'
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