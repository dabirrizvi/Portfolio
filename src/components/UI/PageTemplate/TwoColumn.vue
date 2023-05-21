<template>
  <div class="container-section">
    <section class="content template-section">
      <div
        :class="firstDescriptionClass"
        :data-aos="firstDescriptionAos"
        data-aos-ease="ease"
        data-aos-duration="1500"
        data-aos-delay="500"
      >
        <slot name="firstDescription"></slot>
      </div>
      <div
        :class="secondDescriptionClass"
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
    firstDescriptionClass: {
      type: String,
      default: '',
    },
    secondDescriptionAos: {
      type: String,
      required: true,
    },
    secondDescriptionClass: {
      type: String,
      default: '',
    },
  },
};
</script>
<style scoped>
.template-section {
  display: flex;
  justify-content: space-evenly;
  min-height: 100vh;
  overflow: hidden;
}

@media screen and (max-width: 990px) {
  .template-section {
    display: block;
    padding-top: 10px;
    height: auto;
  }
}
</style>