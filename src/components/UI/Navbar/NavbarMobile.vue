<template>
    <section class="mb-3">
        <section class="mb-3">
            <MDBNavbar dark bg="dark" container class="justify-content-end sticky-top">
                <button @click="collapse9 = !collapse9" class="navbar-toggler first-button" :aria-expanded="collapse9"
                    aria-label="Toggle navigation" aria-controls="navbarToggleExternalContent9">
                    <div class="animated-icon1" :class="[collapse9 && 'open']">
                        <span></span><span></span><span></span>
                    </div>
                </button>
            </MDBNavbar>
            <MDBCollapse v-model="collapse9" id="navbarToggleExternalContent9">
                <div class="bg-dark shadow-3 p-4">
                    <ul>
                        <li>
                            <router-link to="/home" class="button">
                                <span class="text">Home</span>
                            </router-link>
                        </li>
                        <li>
                            <router-link to="/projects" class="button">
                                <span class="text">Projects</span>
                            </router-link>
                        </li>
                        <li>
                            <router-link to="/contact" class="button">
                                <span class="text">Contact</span>
                            </router-link>
                        </li>
                    </ul>
                </div>
            </MDBCollapse>
        </section>
    </section>
    <router-view></router-view>
</template>
  
<script>
import { MDBNavbar, MDBCollapse } from "mdb-vue-ui-kit";
import { ref } from "vue";

export default {
    components: {
        MDBNavbar,
        MDBCollapse
    },
    setup() {
        const collapse9 = ref(false);

        return {
            collapse9
        };
    }
};
</script>
  
<style lang="scss">
/* Icon 1 */
.animated-icon1 {
    width: 30px;
    height: 25px;
    position: relative;
    margin: 0px;
    cursor: pointer;
}

.animated-icon1 span {
    display: block;
    position: absolute;
    height: 3px;
    width: 100%;
    border-radius: 9px;
    opacity: 1;
    -webkit-transform: rotate(0deg);
    -moz-transform: rotate(0deg);
    -o-transform: rotate(0deg);
    transform: rotate(0deg);
    -webkit-transition: 0.25s ease-in-out;
    -moz-transition: 0.25s ease-in-out;
    -o-transition: 0.25s ease-in-out;
    transition: 0.25s ease-in-out;
}

.animated-icon1 span {
    background: #2d7ef7;
}

.animated-icon1 span:nth-child(1) {
    top: 0px;
}

.animated-icon1 span:nth-child(2) {
    top: 10px;
}

.animated-icon1 span:nth-child(3) {
    top: 20px;
}

.animated-icon1.open span:nth-child(1) {
    top: 11px;
    -webkit-transform: rotate(135deg);
    -moz-transform: rotate(135deg);
    -o-transform: rotate(135deg);
    transform: rotate(135deg);
}

.animated-icon1.open span:nth-child(2) {
    opacity: 0;
}

.animated-icon1.open span:nth-child(3) {
    top: 11px;
    -webkit-transform: rotate(-135deg);
    -moz-transform: rotate(-135deg);
    -o-transform: rotate(-135deg);
    transform: rotate(-135deg);
}

/* Custom Styles */
.navbar-toggler {
    position: absolute;
    right: 15px;
}

.navbar-toggler .animated-icon1 {
    right: 0;
}

.navbar-dark {
    height: 50px;
    width: 100%;
}

.sticky-top {
    width: 100%;
    top: 0;
}
</style>
  