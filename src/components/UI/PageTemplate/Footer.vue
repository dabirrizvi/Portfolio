<template>
  <!-- Footer -->
  <MDBFooter bg="dark" :text="['center', 'md-start', 'white']">
    <!-- Grid container -->
    <MDBContainer class="p-4">
      <!--Grid row-->
      <MDBRow>
        <!--Grid column-->
        <MDBCol lg="7" md="12" class="mb-4 mb-md-0">
          <Form />
        </MDBCol>
        <MDBCol lg="1" md="12" class="mb-4 mb-md-0"></MDBCol>
        <!--Grid column-->

        <MDBCol lg="4" md="12" class="mb-4 mb-md-0 d-flex flex-column justify-content-center align-items-center"
          style="padding-top: 100px;">
          <h2>Dabir Hasan Rizvi</h2>
          <p>Software Developer</p>
          <p style="margin: 50px 0px;">
          <section class="mb-4 fa-icons-section">
            <!-- Linkedin -->
            <i class="fa-brands fa-linkedin"></i>
            <!-- Github -->
            <i class="fa-brands fa-github"></i>
            <!-- Phone -->
            <i class="fa-solid fa-phone"></i>
            <!-- Email -->
            <i class="fa-solid fa-envelope"></i>
            <!-- Instagram -->
            <i class="fa-brands fa-instagram"></i>
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
import Form from "../../UI/PageTemplate/Form.vue";
import { MDBFooter, MDBContainer, MDBRow, MDBCol } from 'mdb-vue-ui-kit';
export default {
  components: {
    MDBFooter,
    MDBContainer,
    MDBRow,
    MDBCol,
    Form
  },
};
</script>
<style scoped>
.row {
  padding: 50px 0px 100px 0px;
  line-height: 20px;
}

.fa-brands,
.fa-solid {
  font-size: 200%;
  padding: 10px 20px 20px 0px;
}
.fa-brands:hover,.fa-solid:hover{
    color: #FFE4C4; 
}

@media (max-width:768px) {

  .fa-brands,
  .fa-solid {
    padding: 10px 15px 15px 10px;
  }
}

h2 {
  font-family: 'Space Mono', monospace, Arial, Helvetica, sans-serif;
  text-align: center;
}
</style>