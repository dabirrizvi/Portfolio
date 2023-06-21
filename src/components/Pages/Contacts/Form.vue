<template>
  <h2>Contact Form</h2>

  <section class="card">
    <form @submit.prevent="submitSurvey">
      <div class="form-control">
        <label for="name">Your Name</label>
        <input type="text" id="name" name="name" v-model.trim="enteredName" />
      </div>
      <div class="form-control">
        <label for="email">Email</label>
        <input type="email" id="email" name="email" v-model.trim="enteredEmail" />
      </div>
      <div class="form-control">
        <label for="telephone">Telephone</label>
        <input type="tel" id="telephone" name="telephone" v-model.trim="enteredTelephone" />
      </div>
      <p v-if="invalidInput">One or more input fields are invalid. Please check your provided data.</p>
      <p v-if="error">{{ error }}</p>
      <div>
        <button>Submit</button>
      </div>
    </form>
  </section>

  <div v-if="showSuccessPopup" class="popup success">
    <p>Form submitted successfully!</p>
  </div>
  <div v-if="showErrorPopup" class="popup error">
    <p>Form submission failed. Please try again later.</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      enteredName: '',
      enteredEmail: '',
      enteredTelephone: '',
      invalidInput: false,
      error: null,
      showSuccessPopup: false,
      showErrorPopup: false,
    };
  },
  methods: {
    submitSurvey() {
      if (this.enteredName === '' || this.enteredEmail || this.enteredTelephone) {
        this.invalidInput = true;
        return;
      }
      this.invalidInput = false;
      this.error = null;
      fetch('https://portfolio-3da0d-default-rtdb.firebaseio.com/surveys.json', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: this.enteredName,
          email: this.enteredEmail,
          telephone: this.enteredTelephone
        }),
      })
        .then((response) => {
          if (response.ok) {
            this.showSuccessPopup = true;
            setTimeout(() => {
              this.showSuccessPopup = false;
            }, 3000);
          } else {
            throw new Error('Could not save data!');
          }
        })
        .catch((error) => {
          console.log(error);
          this.showErrorPopup = true;
          setTimeout(() => {
            this.showErrorPopup = true;
          }, 3000);
          this.error = error.message;
        });
      this.enteredName = '';
      this.enteredEmail = '';
      this.enteredTelephone = '';
      this.chosenRating = null;
    },
  },
};
</script>

<style lang="scss" scoped>
.form-control {
  margin: 1rem 0;
}

input[type="text"],
input[type="email"],
input[type="tel"] {
  display: block;
  width: 100%;
  padding: 0.5rem;
  margin-top: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 4px;
}

.card {
  background-color: #f0f0f0;
  padding: 1rem;
  border-radius: 4px;
}

h2 {
  font-size: 1.5rem;
}

h3 {
  margin-top: 1rem;
  font-size: 1.2rem;
}

button {
  padding: 0.5rem 1rem;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

button:hover {
  background-color: #0056b3;
}

p {
  color: red;
  margin-top: 0.5rem;
}

.hidden {
  display: none;
}

.popup {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 1rem;
  border-radius: 4px;
  z-index: 9999;
  background-color: rgba(0, 0, 0, 0.8);
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
}

.success {
  background-color: rgba(76, 175, 80, 0.8);
}

.error {
  background-color: rgba(244, 67, 54, 0.8);
}
</style>
