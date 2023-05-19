<template>
    <div class="row desktop-header-row" style="margin: auto;">
        <div class="col-2 desktop-navbars">
            <span>Dabir Hasan Rizvi</span>
        </div>
        <div class="col-6 desktop-navbars">
            <!-- Routing -->
            <router-link to="/home" class="routing">
                <span class="heading">Home</span>
            </router-link>
            <router-link to="/projects" class="routing">
                <span class="heading">Projects</span>
            </router-link>
            <router-link to="/certificates" class="routing">
                <span class="heading">Certificates</span>
            </router-link>
            <router-link to="/contact" class="routing">
                <span class="heading">Contacts</span>
            </router-link>

        </div>
        <div class="col-4 desktop-navbars" style="padding-left: 100px;">
            <!-- LOGO -->
            <span><i class="fa-brands fa-linkedin" style="font-size: 2rem; margin: auto; padding-left: 12px;"></i></span>
            <span><i class="fa-solid fa-phone-volume social_links" style="font-size: 1.8rem; margin: auto"></i></span>
            <span><i class="fa-solid fa-envelope social_links"
                    style="font-size: 2rem; margin: auto; padding-right: 50px;"></i></span>
        </div>
    </div>
    <!-- router animation -->
    <router-view v-slot="slotProps">
        <transition name="route" mode="out-in">
            <component :is="slotProps.Component"> </component>
        </transition>
    </router-view>
</template>

<script>
export default {

}
</script>

<style lang="scss">
.desktop-navbars {
    display: flex;
    justify-content: space-between;
    margin: auto;
}

.desktop-header-row {
    max-width: 1200px;
}
</style>