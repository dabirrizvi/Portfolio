<template>
  <div class="content">
    <ContactForm />
  </div>
</template>

<script>
import ContactForm from './Form.vue'
import Loader from '../../UI/UX/Loader.vue'
export default {
components: {
    ContactForm,
    Loader
  }
}
</script>

<style scoped>

</style>
