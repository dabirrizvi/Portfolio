<template>
    <div class="row desktop-header-row">
        <div class="col-6 desktop-navbars">
            <span>Dabir Hasan Rizvi</span>
        </div>
        <div class="col-6 desktop-navbars">
            <!-- Routing -->
            <router-link to="/home">
                <span>Home</span>
            </router-link>
            <router-link to="/projects">
                <span>Projects</span>
            </router-link>
            <router-link to="/certificates">
                <span>Certificates</span>
            </router-link>
            <router-link to="/contact">
                <span>Contacts</span>
            </router-link>

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
.desktop-navbars{
    display: flex;
    justify-content: space-between;
    margin: auto;
}
.desktop-header-row{
    max-width: 1200px;
    margin-left: auto;
    margin-right: auto;
}
</style>