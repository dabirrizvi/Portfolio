<template>
  <div class="container-section">
    <section class="two-descriptions-section content template-section">
      <div
        class="first-description guide-description"
        :data-aos="firstDescriptionAos"
        data-aos-ease="ease"
        data-aos-duration="1500"
        data-aos-delay="500"
      >
        <slot name="firstDescription "></slot>
      </div>
      <div
        class="second-description guide-description"
        :data-aos="secondDescriptionAos"
        data-aos-ease="ease"
        data-aos-duration="1500"
        data-aos-delay="500"
      >
        <slot name="secondDescription"></slot>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  props: {
    firstDescriptionAos: {
      type: String,
      required: true,
    },
    secondDescriptionAos: {
      type: String,
      required: true,
    },
  },
};
</script>
