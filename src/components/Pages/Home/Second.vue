<template>
  <div class="background">
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
          name: 'Aberystwyth University ',
          date: 'September 2021 - September 2023',
          title: 'MSc. Advanced Computer Science (with Integrated Year in Industry)',
          image: 'https://pbs.twimg.com/profile_images/1273625898055499777/qbq1u1Sp_400x400.png',
          // description: 'Distinction (Expected)',
        },
        {
          name: 'CMR Institute of Technology',
          date: 'August 2016 - August 2020',
          title: 'B.E in Electronics & Communication Engineering',
          image: 'https://www.edudunia.com/eduadmin/images/uploaded/24458.CMR_Bangalore.jpg',
          // description: 'Second Class Hons.'
        }
      ],
      workExperienceEvents: [
        {
          name: 'Net World Sports Ltd.',
          date: 'July 2022 - Present',
          title: 'Junior Web Developer',
          image: 'https://pbs.twimg.com/profile_images/1592812590723391493/rrGCSCkw_400x400.jpg',
          description: 'Full-Time',
          list: ['Item 1', 'Item 2', 'Item 3'],
        },
        {
          name: 'Racks & Rollers | Storage Technologies & Automation',
          date: 'January 2020 - July 2020',
          title: 'Java Programmer - Internship',
          image: 'https://media.licdn.com/dms/image/C510BAQGERRjXk0PzgQ/company-logo_200_200/0/1561382243696?e=2147483647&v=beta&t=1PliIYf_uMC_bQ5GbPbrv_wTdkklfrhhu2HN0Duj2Nk',
          // description: 'Contributed to various projects'
        }
      ]
    };
  }
};
</script>
<style scoped>
.background{
  background-color: bisque;
}
</style>