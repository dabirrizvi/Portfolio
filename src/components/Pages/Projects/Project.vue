<template>
  <div>
    <two-columns
      :firstDescriptionClass="'col-6'"
      :firstDescriptionAos="'fade-right'"
      :secondDescriptionClass="'col-6'"
      :secondDescriptionAos="'fade-left'"
    >
      <template v-slot:firstDescription>
        <div>
          <h1>About Me</h1>
          <div>Find things about me. Test. Test. Test. Test.</div>
        </div>
      </template>

      <template v-slot:secondDescription>
        <h1>Plan Your Day Ahead</h1>
        <div>
          If you have one, follow the schedule provided by your school. If you just have a list of things to study, break it down into small tasks and plan to do the hardest ones when you have the most energy.
        </div>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi fuga dicta explicabo earum, nam soluta tempora quos consectetur, expedita, nemo reprehenderit eos ea nesciunt neque odio? Iste asperiores sit molestias?</p>
      </template>
    </two-columns>

    <two-columns
      :firstDescriptionClass="'col-4'"
      :firstDescriptionAos="'slide-up'"
      :secondDescriptionClass="'col-8'"
      :secondDescriptionAos="'slide-down'"
    >
      <template v-slot:firstDescription>
        <div>
          <h1>Services</h1>
          <div>Explore our wide range of services.</div>
        </div>
      </template>

      <template v-slot:secondDescription>
        <h1>Contact Us</h1>
        <div>
          Get in touch with us for any inquiries or support.
        </div>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi fuga dicta explicabo earum, nam soluta tempora quos consectetur, expedita, nemo reprehenderit eos ea nesciunt neque odio? Iste asperiores sit molestias?</p>
      </template>
    </two-columns>

    <!-- Add more instances of the template here as needed -->

  </div>
</template>
