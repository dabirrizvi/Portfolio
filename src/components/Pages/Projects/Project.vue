<template><div class="container-fluid">
  <two-columns
      :firstDescriptionClass="''"
      :firstDescriptionAos="'fade-up'"
      :secondDescriptionClass="''"
      :secondDescriptionAos="''"
    >
      <template v-slot:firstDescription>
        <h2>Project </h2>
      </template>
    </two-columns>
  </div></template>
<script setup>
import First from "./First.vue"
</script>