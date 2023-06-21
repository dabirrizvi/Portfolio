<template>
  <!-- Footer -->
  <MDBFooter bg="dark" :text="['center', 'md-start', 'white']">
    <!-- Grid container -->
    <MDBContainer class="p-4">
      <!--Grid row-->
      <MDBRow>
        <!--Grid column-->
        <MDBCol lg="6" md="12" class="mb-4 mb-md-0">
          <h5>About Me</h5>
          <p>
            I am a passionate software developer, driven by the desire to create innovative solutions and simplify complex problems. With a solid foundation in programming languages and a strong problem-solving mindset.
          </p>
        </MDBCol>
        <MDBCol lg="2" md="12" class="mb-4 mb-md-0"></MDBCol>
        <!--Grid column-->
        <MDBCol lg="4" md="12" class="mb-4 mb-md-0">
          <h5>Get in touch</h5>
          <p>+44 (0) 7737906374</p>
          <p>dabir.rizvi@gmail.com </p>
          <p>
          <section class="mb-4 fa-icons-section">
            <!-- Facebook -->
            <i class="fa-brands fa-facebook"></i>
            <!-- Instagram -->
            <i class="fa-brands fa-instagram"></i>
            <!-- Linkedin -->
            <i class="fa-brands fa-linkedin"></i>
            <!-- Github -->
            <i class="fa-brands fa-github"></i>
            <!-- Phone -->
            <i class="fa-solid fa-phone"></i>
            <!-- Email -->
            <i class="fa-solid fa-envelope"></i>
          </section>
          </p>
        </MDBCol>
      </MDBRow>
      <!--Grid row-->
    </MDBContainer>
    <!-- Grid container -->
    <!-- Copyright -->
    <div class="text-center p-3" style="background-color: rgba(0, 0, 0, 0.2)">
      All rights reserved 2023 ©
      <a href="/" class="text-white" style="text-decoration: none;">Dabir Hasan Rizvi</a>
    </div>
    <!-- Copyright -->
  </MDBFooter>
  <!-- Footer -->
</template>
<script>
import { MDBFooter, MDBContainer, MDBRow, MDBCol } from 'mdb-vue-ui-kit';
export default {
  components: {
    MDBFooter,
    MDBContainer,
    MDBRow,
    MDBCol
  },
};
</script>
<style scoped>
.row{
  padding: 100px 0px;
  line-height: 35px;
}
.fa-brands, .fa-solid {
  font-size: 25px;
  padding: 10px 20px 20px 0px;
}

@media screen and (max-width:768px) {
  .fa-brands,.fa-solid {
    padding: 10px 15px 15px 10px;
  }
}
h5{
  padding: 20px 0px;
}

</style>