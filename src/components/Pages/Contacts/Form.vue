<template>
    <h2>Contact Form</h2>

        <section class="card">
            <form @submit.prevent="submitSurvey">
                <div class="form-control">
                    <label for="name">Your Name</label>
                    <input type="text" id="name" name="name" v-model.trim="enteredName" />
                </div>
                <h3>I would rate this website</h3>
                <div class="form-control">
                    <input type="radio" id="rating-poor" value="poor" name="rating" v-model="chosenRating" />
                    <label for="rating-poor">Poor</label>
                </div>
                <div class="form-control">
                    <input type="radio" id="rating-average" value="average" name="rating" v-model="chosenRating" />
                    <label for="rating-average">Average</label>
                </div>
                <div class="form-control">
                    <input type="radio" id="rating-great" value="great" name="rating" v-model="chosenRating" />
                    <label for="rating-great">Great</label>
                </div>
                <p v-if="invalidInput">One or more input fields are invalid. Please check your provided data.</p>
                <p v-if="error">{{ error }}</p>
                <div>
                    <button>Button</button>
                </div>
            </form>
        </section>

</template>

<script>
export default {
    data() {
        return {
            enteredName: '',
            chosenRating: null,
            invalidInput: false,
            error: null,
        };
    },
    methods: {
        submitSurvey() {
            if (this.enteredName === '' || !this.chosenRating) {
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
                    rating: this.chosenRating,
                }),
            })
                .then((response) => {
                    if (response.ok) {
                        throw ('Data sent');
                    } else {
                        throw new Error('Could not save data!');
                    }
                })
                .catch((error) => {
                    console.log(error);
                    this.error = error.message;
                });
            this.enteredName = '';
            this.chosenRating = null;
        },
    },
}
</script>

<style lang="scss" scoped>
.form-control {
    margin: 0.5rem 0;
}

input[type='text'] {
    display: block;
    width: 20rem;
    margin-top: 0.5rem;
}
</style>