<template>
    <div class="references">
        <div class="row">
            <h2 class="heading">Referees</h2>
            <span> *Available on request</span>
        </div>
        <section style="display: none;">
        <div class="row container-fluid">
            <ul class="nav nav-pills mb-3 justify-content-center" id="pills-tab" role="tablist">
                <li v-for="(referee, index) in referees" :key="index" class="nav-item">
                    <a class="nav-link" :class="{ 'active': index === activeReferee }" data-bs-toggle="pill"
                        :href="'#referee-' + (index + 1)" role="tab" @click="changeActiveReferee(index)">
                        {{ referee.name }}
                    </a>
                </li>
            </ul>

            <div class="row">
                <div class="col-6" data-aos="fade-right">
                    <hr>
                </div>
            </div>

            <div class="row">
                <div class="col-2 open-quote"><i class="fa-solid fa-quote-left"></i></div>
                <div class="col-8" data-aos="zoom-in" style="padding: 20px 0px;">
                    <div class="tab-content">
                        <div v-for="(referee, index) in referees" :key="index" class="tab-pane fade"
                            :class="{ 'show active': index === activeReferee }" :id="'referee-' + (index + 1)"
                            role="tabpanel">
                            <kinesis-container>
                                <kinesis-element :strength="5" type="depth">
                                    <blockquote>
                                        {{ referee.description }}
                                    </blockquote>
                                    <div class="row">
                                        <div class="col-6 line" style="text-align: end;">--------------</div>
                                        <div class="col-xx-6 col-lg-6 col-md-12">
                                            <p>
                                                {{ referee.name }}
                                                <br />
                                                {{ referee.position }}
                                            </p>
                                            <p style="text-align: end;">
                                                <img style="border-radius: 50%;border: 2px solid white; width: 150px;"
                                                    :src="referee.image" />
                                                <br />
                                                <a :href="referee.linkedin" target="_blank">
                                                    <!-- Linkedin -->
                                                    <i class="fa-brands fa-linkedin"
                                                        style="padding: 10px; font-size: 30px;"></i>
                                                </a>
                                                <a :href="referee.telephone">
                                                    <!-- Phone -->
                                                    <i class="fa-solid fa-phone"
                                                        style="padding: 10px; font-size: 30px;"></i>
                                                </a>
                                                <a :href="referee.email">
                                                    <!-- Email -->
                                                    <i class="fa-solid fa-envelope"
                                                        style="padding: 10px; font-size: 30px;"></i>
                                                </a>
                                            </p>
                                        </div>
                                    </div>
                                </kinesis-element>
                            </kinesis-container>
                        </div>
                    </div>
                </div>
                <div class="col-2 closed-quote"><i class="fa-solid fa-quote-right"></i></div>
            </div>

            <div class="row">
                <div class="col-6"></div>
                <div class="col-6" data-aos="fade-left">
                    <hr>
                </div>
            </div>
        </div>


    </section>
    </div>
</template>

<script>
export default {
    data() {
        return {
            referees: [
                {
                    name: 'Mr. Sergiu Orbu',
                    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit est molestiae aperiam aliquid illum in, deserunt vero quidem facilis, id, libero voluptatibus possimus. Impedit aliquam culpa qui beatae dolore dicta?',
                    position: 'Head of Web Development, Net World Sports',
                    image: 'https://t4.ftcdn.net/jpg/02/22/39/63/360_F_222396357_KlP0TQwV3X1U6rJWzlLcIpJ7ZLpxGcQR.jpg',
                    linkedin:'/',
                    telephone:'tel:123-456-7890',
                    email:'mailto:aaa@bbb.com'
                },
                {
                    name: 'Dr. Edel Sherratt',
                    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit est molestiae aperiam aliquid illum in, deserunt vero quidem facilis, id, libero voluptatibus possimus. Impedit aliquam culpa qui beatae dolore dicta?',
                    position: 'Lecturer, Department of Computer Science, Aberystwyth University ',
                    image: 'https://t4.ftcdn.net/jpg/02/22/39/63/360_F_222396357_KlP0TQwV3X1U6rJWzlLcIpJ7ZLpxGcQR.jpg'
                },
                {
                    name: 'Dr Yasir Saleem Shaikh',
                    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit est molestiae aperiam aliquid illum in, deserunt vero quidem facilis, id, libero voluptatibus possimus. Impedit aliquam culpa qui beatae dolore dicta?',
                    position: 'Lecturer, Department of Computer Science, Aberystwyth University',
                    image: 'https://t4.ftcdn.net/jpg/02/22/39/63/360_F_222396357_KlP0TQwV3X1U6rJWzlLcIpJ7ZLpxGcQR.jpg'
                },
                {
                    name: 'Dr. Syed Azeem',
                    description: 'Description for Dr. Syed Azeem',
                    position: 'Position for Dr. Syed Azeem',
                    image: 'https://t4.ftcdn.net/jpg/02/22/39/63/360_F_222396357_KlP0TQwV3X1U6rJWzlLcIpJ7ZLpxGcQR.jpg'
                }
            ],
            activeReferee: 0
        };
    },
    methods: {
        changeActiveReferee(index) {
            this.activeReferee = index;
        }
    }
};
</script>

  
<style lang="scss" scoped>
.references {
    background-color: #fefee3;
    overflow: hidden;
    padding: 50px 0px;
}

.container-fluid {
    margin: 0;
    padding: 25px 0px;
}

.heading {
    text-align: center;
}

.open-quote {
    text-align: center;
    font-size: 30px;
}

.closed-quote {
    position: relative;
    text-align: center;
    font-size: 30px;

    i {
        position: absolute;
        bottom: 0;
    }
}

hr {

    border-top: 10px dashed #8c8b8b;
}

// replacing bootstrap navbar
.nav-link {
    color: #003049;

    &:hover {
        color: #8c8b8b;
    }

    &.active {
        background-color: white !important;
        color: black !important;
    }
}

.line {
    text-align: end;
}

@media (max-width: 990px) {
    .line {
        display: none;
    }
}
a{
    color: #f8f9fa;
}
span{
    text-align: center;
    font-family: 'Roboto', sans-serif;
    color: #323d4f;
    font-size: 1rem;
}
h2{
    font-family: 'Space Mono', monospace, Arial, Helvetica, sans-serif;
    color: #323d4f;
    font-size: 3rem;

}

</style>