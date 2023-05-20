<template>
  <div>
    <!-- Template with image first and description second -->
    <image-description
      :guideImageAos="'slide-up'"
      guideImage="https://res.cloudinary.com/dsderm9xw/image/upload/v1622028057/3D%20Illustrations/3d-illustration1_j06j0a.png"
      guideImageAlt="3d illustration of boy with laptop sitting"
    >
      <template v-slot:description>
        <div style="padding: 50px;">
        <h1>About Me</h1>
        <div>Find things about me. Test. Test. Test. Test.</div>
      </div>
      </template>
    </image-description>

    <!-- Template with description first and image second -->
    <description-image
      :guideDescriptionAos="'slide-down'"
      :guideImageAos="'slide-up'"
      guideImage="https://res.cloudinary.com/dsderm9xw/image/upload/v1622028057/3D%20Illustrations/3d-illustration1_j06j0a.png"
      guideImageAlt="3d illustration of boy with laptop sitting"
    >
      <template v-slot:description>
        <h1>Plan Your Day Ahead</h1>
        <div>
          If you have one, follow the schedule provided by your school. If you just have a list of things to study, break it down into small tasks and plan to do the hardest ones when you have the most energy.
        </div>
      </template>
    </description-image>
  </div>
</template>

<script>

</script>
