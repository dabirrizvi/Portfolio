<template>
    <!-- Footer -->
    <MDBFooter bg="dark" :text="['center', 'md-start', 'white']">
      <!-- Grid container -->
      <MDBContainer class="p-4">
        <!--Grid row-->
        <MDBRow>
          <!--Grid column-->
          <MDBCol lg="4" md="12" class="mb-4 mb-md-0">
            <h5 >About Me</h5>
            <p>
               I'm a passionate Software Developer <br/> 
            </p>
          </MDBCol>
          <!--Grid column-->
          <MDBCol lg="4" md="12" class="mb-4 mb-md-0">
            <h5 >Address</h5>
            <p>
             
                22 Talbot Road <br /> Wrexham LL13 7DY <br /> United Kingdom
            </p>
          </MDBCol>
                    <!--Grid column-->
                    <MDBCol lg="4" md="12" class="mb-4 mb-md-0">
            <h5 >Get in touch</h5>
            <p>
                <section class="mb-4">
        <!-- Facebook -->
        <MDBBtn
          tag="a"
          outline="light"
          href="#!"
          floating
          class="m-1"
        >
          <MDBIcon iconStyle="fab" icon="facebook-f"></MDBIcon>
        </MDBBtn>
        <!-- Twitter -->
        <MDBBtn
          tag="a"
          outline="light"
          href="#!"
          floating
          class="m-1"
        >
          <MDBIcon iconStyle="fab" icon="twitter"></MDBIcon>
        </MDBBtn>
        <!-- Google -->
        <MDBBtn
          tag="a"
          outline="light"
          href="#!"
          floating
          class="m-1"
        >
          <MDBIcon iconStyle="fab" icon="google"></MDBIcon>
        </MDBBtn>
        <!-- Instagram -->
        <MDBBtn
          tag="a"
          outline="light"
          href="#!"
          floating
          class="m-1"
        >
          <MDBIcon iconStyle="fab" icon="instagram"></MDBIcon>
        </MDBBtn>
        <!-- Linkedin -->
        <MDBBtn
          tag="a"
          outline="light"
          href="#!"
          floating
          class="m-1"
        >
          <MDBIcon iconStyle="fab" icon="linkedin-in"></MDBIcon>
        </MDBBtn>
        <!-- Github -->
        <MDBBtn
          tag="a"
          outline="light"
          href="#!"
          floating
          class="m-1"
        >
          <MDBIcon iconStyle="fab" icon="github"></MDBIcon>
        </MDBBtn>
      </section>
            </p>
          </MDBCol>
        </MDBRow>
        <!--Grid row-->
      </MDBContainer>
      <!-- Grid container -->
      <!-- Copyright -->
      <div
        class="text-center p-3"
        style="background-color: rgba(0, 0, 0, 0.2)"
      >
      All rights reserved 2023 © 
        <a href="/" class="text-white" style="text-decoration: none;"
          >Dabir Hasan Rizvi</a
        >
      </div>
      <!-- Copyright -->
    </MDBFooter>
    <!-- Footer -->
  </template>
  <script>
  import { MDBFooter, MDBContainer, MDBRow, MDBCol,MDBBtn, MDBIcon } from 'mdb-vue-ui-kit';
  export default {
    components: {
      MDBFooter,
      MDBContainer,
      MDBRow,
      MDBCol,
      MDBBtn,
      MDBIcon
    },
  };
</script>