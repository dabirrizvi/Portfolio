<template>
    <section>
        <h2>Contact Me</h2>
        <form @submit.prevent="submitSurvey">
            <div class="form-row">
                <div class="form-control">
                    <label for="name">Your Name</label>
                    <input type="text" id="name" name="name" v-model.trim="enteredName" placeholder="Enter your name"
                        required />
                </div>
            </div>
            <div class="form-row">
                <div class="form-control">
                    <label for="email">Email</label>
                    <input type="email" id="email" name="email" v-model.trim="enteredEmail" placeholder="Enter your email"
                        required />
                </div>
                <div class="form-control">
                    <label for="telephone">Telephone</label>
                    <input type="tel" id="telephone" name="telephone" v-model.trim="enteredTelephone"
                        placeholder="Enter your telephone" />
                </div>
            </div>
            <div class="form-row">
                <div class="form-control">
                    <label for="subject">Subject</label>
                    <input type="text" id="subject" name="subject" v-model.trim="enteredSubject"
                        placeholder="Enter the subject" />
                </div>
            </div>
            <div class="form-row">
                <div class="form-control">
                    <label for="message">Message</label>
                    <textarea id="message" name="message" v-model.trim="enteredMessage" placeholder="Enter your message"
                        required></textarea>
                </div>
            </div>
            <p v-if="invalidInput">One or more input fields are invalid. Please check your provided data.</p>
            <p v-if="error">{{ error }}</p>
            <div style="display: flex; justify-content: center;">
                <button class="btn">Submit</button>
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
            enteredSubject: '',
            enteredMessage: '',
            invalidInput: false,
            error: null,
            showSuccessPopup: false,
            showErrorPopup: false,
        };
    },
    methods: {
        submitSurvey() {
            if (this.enteredName === '' || this.enteredEmail === '' || this.enteredMessage === '') {
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
                    telephone: this.enteredTelephone,
                    subject: this.enteredSubject,
                    message: this.enteredMessage,
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
                        this.showErrorPopup = false;
                    }, 3000);
                    this.error = error.message;
                });
            this.enteredName = '';
            this.enteredEmail = '';
            this.enteredTelephone = '';
            this.enteredSubject = '';
            this.enteredMessage = '';
        },
    },
};
</script>
<style lang="scss" scoped>
h2 {
    font-family: 'Space Mono', monospace, Arial, Helvetica, sans-serif;
    text-align: center;
    padding: 0px 0px 50px 0px;
}

.form-row {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
}

.form-control {
    flex: 1;
    /* Equal flex distribution */
    margin: 1rem 0;
    background-color: transparent;
    border: none;
    color: white;
}

input[type="text"],
input[type="email"],
input[type="tel"],
textarea {
    display: block;
    width: 100%;
    padding: 0.5rem;
    margin-top: 0.5rem;
    border: 1px solid #ddd;
    border-radius: 4px;
    box-sizing: border-box;
}
input[type="text"]:hover,
input[type="email"]:hover,
input[type="tel"]:hover,
textarea:hover {
    border: 1px solid black;
}

label {
    font-family: 'Space Mono', monospace, Arial, Helvetica, sans-serif;
}

textarea {
    resize: vertical;
    height: 100px;
}

.btn {
    margin: 10px 0px;
    background-color: rgba(255, 255, 255, 0.4);
    border: 1px solid #333;
    border-radius: 25px;
    color: #f8f9fa;
    padding: 10px 50px;
    font-size: 1.5rem;
    cursor: pointer;
    text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
    transition: color 0.5s ease-in-out, background-color 0.5s ease-in-out;
    font-family: 'Space Mono', monospace, Arial, Helvetica, sans-serif;
}

.btn:hover {
    color: rgba(255, 228, 196);
    background-color: rgba(255, 228, 196, 0.2);
}

p.error-message {
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
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    line-height: 20px;
}


.success {
    background-color: #4caf50;
    border-radius: 25px;
}

.success p {
    margin: 0;
}

.error {
    background-color: #f44336;
}

.error p {
    margin: 0;
}</style>
