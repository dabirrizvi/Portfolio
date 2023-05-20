<template>
    <div class="container-section">
      <section class="two-images-section content template-section">
        <img
          class="first-image guide-image"
          :src="firstImage"
          :alt="firstImageAlt"
          :data-aos="firstImageAos"
          data-aos-ease="ease"
          data-aos-duration="1500"
          data-aos-delay="500"
        />
        <img
          class="second-image guide-image"
          :src="secondImage"
          :alt="secondImageAlt"
          :data-aos="secondImageAos"
          data-aos-duration="1500"
          data-aos-ease="ease"
          data-aos-delay="500"
        />
      </section>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      firstImageAos: {
        type: String,
        required: true,
      },
      firstImage: {
        type: String,
        required: true,
      },
      firstImageAlt: {
        type: String,
        required: true,
      },
      secondImageAos: {
        type: String,
        required: true,
      },
      secondImage: {
        type: String,
        required: true,
      },
      secondImageAlt: {
        type: String,
        required: true,
      },
    },
  };
  </script>
  