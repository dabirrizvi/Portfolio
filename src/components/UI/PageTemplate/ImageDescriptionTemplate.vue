<template>
  <div class="container-section">
    <section class="image-first-section content template-section">
      <img
        class="guide-image"
        :src="guideImage"
        :alt="guideImageAlt"
        :data-aos="guideImageAos"
        data-aos-ease="ease"
        data-aos-duration="1500"
        data-aos-delay="500"
      />
      <div
        class="guide-description"
        :data-aos="guideDescriptionAos"
        data-aos-ease="ease"
        data-aos-duration="1500"
        data-aos-delay="500"
      >
        <slot name="description"></slot>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  props: {
    guideImageAos: {
      type: String,
      required: true,
    },
    guideImage: {
      type: String,
      required: true,
    },
    guideImageAlt: {
      type: String,
      required: true,
    },
    guideDescriptionAos: {
      type: String,
      required: true,
    },
  },
};
</script>
<style lang="scss" scoped>

</style>
