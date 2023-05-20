<template>
  <main>
    <section class="intro content">
      <div
        class="introDescription"
        data-aos="zoom-in"
        data-aos-ease="ease"
        data-aos-duration="1500"
        data-aos-delay="500"
      >
        Hello There !
        <br />
        <p>I am Dabir Hasan Rizvi</p>
      </div>
      <img
        class="introImage"
        src="https://res.cloudinary.com/dsderm9xw/image/upload/v1622028117/3D%20Illustrations/3d-illustration4_usckww.png"
        alt="3d illustration of boy with a flag"
      />
    </section>
    <div style="background: #ffd4a9;
">
    <section class="guide1 content">
      <img
        class="guide1Image"
        src="https://res.cloudinary.com/dsderm9xw/image/upload/v1622028085/3D%20Illustrations/3d-illustration2_ykuua3.png"
        alt="3d illustration of boy sitting with legs crossed"
        data-aos="slide-down"
        data-aos-ease="ease"
        data-aos-duration="1500"
        data-aos-delay="500"
      />
      <div
        class="guide1Description"
        data-aos="slide-up"
        data-aos-ease="ease"
        data-aos-duration="1500"
        data-aos-delay="500"
      >
        <h1>
         This section is <br />
          About me
        </h1>
        <div>
         Find things about me
          <br />
          Test
          <br />
          Test
          <br />
          Test
          <br />
          Test
        </div>
      </div>
    </section>
  </div>
  <div>
    <section class="guide2 content">
      <div
        class="guide2Description"
        data-aos="slide-down"
        data-aos-ease="ease"
        data-aos-duration="1500"
        data-aos-delay="500"
      >
        <h1>
          Plan your <br />
          day ahead.
        </h1>
        <div>
          If you have one,
          <br />
          follow the schedule provided by your school.
          <br />
          If you just have a list of things to study,
          <br />
          break it down into small tasks and
          <br />
          plan to do the hardest ones
          <br />
          when you have the most energy.
        </div>
      </div>
      <img
        class="guide2Image"
        src="https://res.cloudinary.com/dsderm9xw/image/upload/v1622028057/3D%20Illustrations/3d-illustration1_j06j0a.png"
        alt="3d illustration of boy with laptop sitting"
        data-aos="slide-up"
        data-aos-duration="1001"
        data-aos-ease="ease"
        data-aos-delay="500"
      />
    </section>
  </div>
    <footer>Developed by Dabir Hasan Rizvi</footer>
  </main>
</template>
<style lang="scss" >

.intro {
  display: flex;
  justify-content: space-evenly;
  padding-top: 80px;
  height: 100vh;
}

.introDescription {
  font-size: 30px;
  color: #632b2b;
  padding-top: 120px;

  p {
    font-size: 60px;
    color: #632b2b;
    font-weight: 900;
  }
}

.guide1 {
  display: flex;
  justify-content: space-evenly;
  padding-top: 80px;
  height: 100vh;
  overflow: hidden;
}

.guide1Description {
  h1 {
    font-size: 48px;
    color: #632b2b;
    padding: 120px 0px 20px 0px;
  }

  div {
    background: #fff3e2;
    color: #632b2b;
    font-size: 20px;
    padding: 10px;
    border-radius: 10px;
  }
}

.guide2 {
  display: flex;
  background: #fff3e2;
  justify-content: space-evenly;
  padding-top: 80px;
  height: 100vh;
  overflow: hidden;
}

.guide2Description {
  h1 {
    font-size: 48px;
    color: #632b2b;
    padding: 120px 0px 20px 0px;
  }

  div {
    background: #ffd4a9;
    color: #632b2b;
    font-size: 20px;
    padding: 10px;
    border-radius: 10px;
  }
}

footer {
  background: #ffd4a9;
  color: #632b2b;
  padding: 10px;
  text-align: right;
  font-weight: 900;
}

// Responsiveness
@media screen and (max-width: 990px) {
  .intro {
    display: block;
    padding-top: 10px;
    height: auto;
  }

  .introImage {
    width: 100%;
  }

  .introDescription {
    padding: 30px 0px 0px 20px;
  }

  .guide1 {
    display: block;
    padding-top: 10px;
    height: auto;
  }

  .guide1Image {
    width: 100%;
  }

  .guide1Description {
    padding: 20px;

    h1 {
      padding: 30px 0px;
    }
  }

  .guide2 {
    display: block;
    padding-top: 10px;
    height: auto;
  }

  .guide2Image {
    width: 100%;
  }

  .guide2Description {
    padding: 20px;

    h1 {
      padding: 30px 0px;
    }
  }
}

</style>