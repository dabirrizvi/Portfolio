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
          name: 'Aberystwyth University ',
          date: 'September 2021 - September 2023',
          title: 'MSc. Advanced Computer Science (with Integrated Year in Industry)',
          image: 'https://raw.githubusercontent.com/dabirrizvi/Portfolio/main/src/assets/Timeline/aber.jpg',
          // description: 'Distinction (Expected)',
        },
        {
          name: 'CMR Institute of Technology',
          date: 'August 2016 - August 2020',
          title: 'B.E in Electronics & Communication Engineering',
          image: 'https://raw.githubusercontent.com/dabirrizvi/Portfolio/main/src/assets/Timeline/cmr.jpg',
          // description: 'Second Class Hons.'
        }
      ],
      workExperienceEvents: [
        {
          name: 'Net World Sports Ltd.',
          date: 'July 2022 - Present',
          title: 'Junior Web Developer',
          image: 'https://raw.githubusercontent.com/dabirrizvi/Portfolio/main/src/assets/Timeline/nws.jpg',
          description: 'Full-Time',
          list: ['Item 1', 'Item 2', 'Item 3'],
        },
        {
          name: 'Racks & Rollers | Storage Technologies & Automation',
          date: 'January 2020 - July 2020',
          title: 'Java Programmer - Internship',
          image: 'https://raw.githubusercontent.com/dabirrizvi/Portfolio/main/src/assets/Timeline/rnr.jpg',
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