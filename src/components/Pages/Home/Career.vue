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
          title: 'Mid-Level Full-Stack E-commerce Developer',
          image: 'https://raw.githubusercontent.com/dabirrizvi/assets_for_portfolio/main/Timeline/reach.jpg',
          description: 'Full-time',
          button_text: 'View Details',
          list: [
            'Promoted to Mid-Level Developer, collaborating with stakeholders to translate business requirements into technical solutions, mentoring junior developers, and recognised as Team Member of the Month (August 2025) for project delivery and cross-team collaboration.',
            'Built and scaled a Magento 2 B2B platform replacing a legacy SAP system, implementing customer group pricing, tailored catalog management, custom workflows, and PunchOut integration to streamline enterprise procurement.',
            'Developed custom Magento modules, backend services, and checkout functionality, integrating third-party systems through RESTful APIs while following Magento best practices and clean architecture principles.',
            'Built high-performance storefronts using the Hyvä frontend, reusable CMS components, and custom widgets, while enhancing search with Elasticsearch and applying critical security patches.',
            'Managed Magento infrastructure on Hypernode, maintaining deployment pipelines, environment configurations, and CI/CD workflows to support reliable releases.',
            'Successfully delivered 10+ Magento projects from development through to production, taking technical ownership of several client implementations and leading development across multiple client projects.'
          ],
        },
        {
          id: '4',
          name: '<a style="text-decoration:none; color:inherit;" target=_blank href="https://www.networldsports.co.uk/about">Net World Sports Ltd.</a>',
          date: 'July 2022 - June 2023',
          title: 'Junior Web Developer',
          image: 'https://raw.githubusercontent.com/dabirrizvi/assets_for_portfolio/main/Timeline/nws.jpg',
          description: 'Full-Time (Industrial Placement)',
          button_text: 'View Details',
          list: [
            'Designed and implemented responsive, reusable Vue.js and React.js components within a microservice architecture, integrating with Node.js and Express.js backend services to deliver high-performance, scalable web applications.',
            'Led the migration of 40+ e-commerce stores from Magento 1 to Magento 2, reducing page load times by 30% and improving Lighthouse scores by approximately 15 points. <a style="text-decoration:none; color:inherit;" target=_blank href="https://www.networldsports.co.uk/"><i class="fa-solid fa-right-from-bracket"></i></a>',
            'Revamped the company blog in collaboration with content and SEO teams, delivering a mobile-first experience that increased user engagement by 40%. <a style="text-decoration:none; color:inherit;" target=_blank href="https://blog.networldsports.co.uk/"><i class="fa-solid fa-right-from-bracket"></i></a>',
            'Developed an API-driven Chrome Extension that streamlined internal workflows and improved departmental productivity by 60%.',
            'Contributed to agile development by performing code reviews, maintaining documentation, and supporting CI/CD pipelines for faster and more reliable deployments.',
            'Worked closely with cross-functional teams to deliver new features and continuously improve existing products.'
          ],
        },
        {
          id: '5',
          name: '<a style="text-decoration:none; color:inherit;" target=_blank href="https://racksandrollers.com/">Racks & Rollers | Storage Technologies & Automation</a>',
          date: 'January 2020 - July 2020',
          title: 'Java Programmer Intern',
          image: 'https://raw.githubusercontent.com/dabirrizvi/assets_for_portfolio/main/Timeline/rnr.jpg',
          description: 'Internship',
          button_text: 'View Details',
          list: [
            'Designed and developed a Java-based Pick-to-Light system GUI, improving warehouse efficiency and enhancing the operator experience.',
            'Worked across the full software development lifecycle, from requirements gathering and system design through development, testing, and deployment.',
            'Applied Scrum methodology and Test-Driven Development (TDD) practices, contributing to a 30% reduction in software defects.',
            'Collaborated with clients and internal teams to gather requirements and present technical solutions for warehouse automation systems.',
            'Produced technical documentation and user guides to support long-term maintainability and knowledge transfer.',
            'Developed robust Java applications for industrial automation using object-oriented programming principles and software engineering best practices.'
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
