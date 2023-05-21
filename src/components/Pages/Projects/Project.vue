<template>
  <div>
    <two-columns
      :firstDescriptionClass="''"
      :firstDescriptionAos="'fade-right'"
      :secondDescriptionClass="''"
      :secondDescriptionAos="'fade-left'"
    >
      <template v-slot:firstDescription>
          <h1>About Me</h1>
        <div>
Lorem ipsum dolor sit amet consectetur, adipisicing elit. Suscipit voluptatibus amet tempora nisi veniam explicabo quasi officia, aliquam quam hic aperiam tempore dignissimos voluptatem, maxime sint at commodi similique dolor.        </div>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi fuga dicta explicabo earum, nam soluta tempora quos consectetur, expedita, nemo reprehenderit eos ea nesciunt neque odio? Iste asperiores sit molestias?</p>
  
      </template>

      <template v-slot:secondDescription>
        <h1>Test Heading</h1>
        <div>
Lorem ipsum dolor sit amet consectetur, adipisicing elit. Suscipit voluptatibus amet tempora nisi veniam explicabo quasi officia, aliquam quam hic aperiam tempore dignissimos voluptatem, maxime sint at commodi similique dolor.        </div>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi fuga dicta explicabo earum, nam soluta tempora quos consectetur, expedita, nemo reprehenderit eos ea nesciunt neque odio? Iste asperiores sit molestias?</p>
      </template>
    </two-columns>

    <two-columns
      :firstDescriptionClass="''"
      :firstDescriptionAos="'slide-up'"
      :secondDescriptionClass="''"
      :secondDescriptionAos="'slide-down'"
    >
      <template v-slot:firstDescription>
        <div>
          <h1>Services</h1>
          <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci ratione eius nisi est, nam nobis quibusdam dignissimos vitae, laudantium aut, harum quam natus porro alias obcaecati sunt. Velit, ad recusandae?</div>
        </div>
      </template>

      <template v-slot:secondDescription>
        <h1>Contact Us</h1>
        <div>
          Get in touch for any inquiries or support.
        </div>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi fuga dicta explicabo earum, nam soluta tempora quos consectetur, expedita, nemo reprehenderit eos ea nesciunt neque odio? Iste asperiores sit molestias?</p>
      </template>
  </two-columns>
  </div>
</template>