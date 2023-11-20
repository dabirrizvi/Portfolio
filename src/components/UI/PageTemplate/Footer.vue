<template>
  <!-- Footer -->
  <MDBFooter bg="dark" :text="['center', 'md-start', 'white']">
    <!-- Grid container -->
    <MDBContainer class="p-4">
      <!--Grid row-->
      <MDBRow>
        <!--Grid column-->
        <MDBCol lg="7" md="12" class="mb-4 mb-md-0" data-aos="fade-right" >
          <Form />
        </MDBCol>
        <MDBCol lg="1" md="12" class="mb-4 mb-md-0"></MDBCol>
        <!--Grid column-->

        <MDBCol lg="4" md="12" class="mb-4 mb-md-0 d-flex flex-column justify-content-center align-items-center"
          style="padding-top: 100px;"
          data-aos="fade-up" 
          >
          <h2>Dabir Hasan Rizvi</h2>
          <p>Software Developer</p>
          <p style="margin: 50px 0px;">
          <section class="mb-4 fa-icons-section">
            <kinesis-container>
            <kinesis-element :strength="10" type="depth">
              <!-- Linkedin -->
              <a target="_blank" href="https://www.linkedin.com/in/dabir-hasan-rizvi-738a83185/"><i
                  class="fa-brands fa-linkedin fa-socials"></i></a>
            </kinesis-element>
          </kinesis-container>   <kinesis-container>
            <kinesis-element :strength="10" type="depth">
              <!-- Github -->
              <a target="_blank" href="https://github.com/dabirrizvi"><i class="fa-brands fa-github fa-socials"></i></a>
            </kinesis-element>
          </kinesis-container>
          <kinesis-container>
            <kinesis-element :strength="10" type="depth">
          <!-- Phone -->
          <a href="tel:+44(0)7737906374"><i class="fa-solid fa-phone fa-socials"></i></a>
            </kinesis-element>
          </kinesis-container>
          <kinesis-container>
            <kinesis-element :strength="10" type="depth">
          <!-- Email -->
          <a href="mailto:dabir.rizvi@gmail.com?subject=General%20Inquiry&body=Hi%20Dabir,"><i
              class="fa-solid fa-envelope fa-socials"></i></a>
            </kinesis-element>
          </kinesis-container>
       <kinesis-container>
            <kinesis-element :strength="10" type="depth">
          <!-- Instagram -->
          <a target="_blank" href="https://www.instagram.com/dabirrizvi/"><i
              class="fa-brands fa-instagram fa-socials"></i></a>
            </kinesis-element>
          </kinesis-container>
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
  color: #f8f9fa; 

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
  color:#FFE4C4
}
</style>