<template>
  <two-columns
      :firstDescriptionClass="''"
      :firstDescriptionAos="'fade-right'"
      :secondDescriptionClass="''"
      :secondDescriptionAos="'fade-left'"
    >
      <template v-slot:firstDescription>
        <h2>Hello World, </h2>
        <h1>I'm Dabir Hasan Rizvi </h1>
        <h2>A passionate Software Developer, I am seeking an opportunity to work in a dynamic and innovation team where I can contribute
my expertise to build robust and scalable software applications. With a passion for learning and commitment to excellence, I am
eager to take on challenging projects and collaborate with others to drive business success.</h2>
      </template>
    </two-columns>
</template>

<script>
</script>

<style scoped>
.first {
  height: 100vh;
}
</style>