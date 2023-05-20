<template>
  <div class="container-section">
    <section class="description-first-section content template-section ">
      <div
        class="guide-description"
        :data-aos="guideDescriptionAos"
        data-aos-ease="ease"
        data-aos-duration="1500"
        data-aos-delay="500"
      >
        <slot name="description"></slot>
      </div>
      <img
        class="guide-image"
        :src="guideImage"
        :alt="guideImageAlt"
        :data-aos="guideImageAos"
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
    guideDescriptionAos: {
      type: String,
      required: true,
    },
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
  },
};
</script>

<style lang="scss">
.template-section {
  display: flex;
  justify-content: space-evenly;
  height: 100vh;
  overflow: hidden;
}

@media screen and (max-width: 990px) {
  .template-section {
    display: block;
    padding-top: 10px;
    height: auto;
  }
  .guide-image {
    width: 100%;
  }
}
</style>