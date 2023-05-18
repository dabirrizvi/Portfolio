<template>
    <aside :class="`${is_expanded ? 'is-expanded' : ''}`">
        <!-- LOGO -->
        <div class="logo">
            <span style="display: flex;">
                <i class="fa-brands fa-linkedin" style="font-size: 2rem; margin: auto; padding-left: 12px;"></i>
                <i class="fa-solid fa-phone-volume social_links" style="font-size: 1.8rem; margin: auto"></i>
                <i class="fa-solid fa-envelope social_links"
                    style="font-size: 2rem; margin: auto; padding-right: 50px;"></i>
            </span>
        </div>
        <!-- Toggle Sidebar -->
        <div class="menu-toggle-wrap">
            <button class="menu-toggle" @click="ToggleMenu">
                <i class="fa-solid fa-forward"></i>
            </button>
        </div>
        <!-- Sidebar Content -->
        <div class="menu">
            <div class="text">
                <h3 style="text-align: center">MENU</h3>
            </div>
            <!-- Router Link to different pages-->

            <router-link to="/home" class="button">
                <span class="material-icons">home</span>
                <span class="text">Home</span>
            </router-link>

            <router-link to="/projects" class="button">
                <span class="material-icons">construction</span>
                <span class="text">Projects</span>
            </router-link>

            <router-link to="/certificates" class="button">
                <span class="material-icons">workspace_premium</span>
                <span class="text">Cerificates</span>
            </router-link>

            <router-link to="/contact" class="button">
                <span class="material-icons">contact_page</span>
                <span class="text">Contact</span>
            </router-link>
        </div>
    </aside>
    <!-- router animation -->
    <router-view v-slot="slotProps">
        <transition name="route" mode="out-in">
            <component :is="slotProps.Component"> </component>
        </transition>
    </router-view>
</template>

<script setup>
import { ref } from "vue";
// Toggle Sidebar
const is_expanded = ref(localStorage.getItem("is_expanded") === "true");
const ToggleMenu = () => {
    is_expanded.value = !is_expanded.value;
    localStorage.setItem("is_expanded", is_expanded.value);
};
</script>

<style lang="scss">
// Sidebar Colours
:root {
    --primary: #ffb703;
    --dark: #1e293b;
    --dark-alt: #334155;
    --light: #334155;
    --sidebar-width: 320px;
}

button {
    cursor: pointer;
    appearance: none;
    border: none;
    outline: none;
    background: none;
}

//  Arrow
.fa-forward {
    color: var(--light);
    display: flex;
    font-size: 1.5rem;
}

aside {
    display: flex;
    flex-direction: column;
    color: var(--light);
    width: calc(2rem + 30px);
    overflow: hidden;
    min-height: 145vh;
    padding: 1rem;
    transition: 0.6s ease-in-out;

    //To display a menu below
    .flex {
        flex: 1 1 0%;
    }

    .logo {
        margin-bottom: 1rem;
        margin-left: -0.7rem;
    }

    .menu-toggle-wrap {
        display: flex;
        justify-content: flex-end;
        margin-bottom: 1rem;
        position: relative;
        top: 0;
        transition: 0.8s ease-in-out;

        .menu-toggle {
            transition: 0.8s ease-in-out;

            .material-icons {
                font-size: 2rem;
                color: var(--light);
                transition: 0.8s ease-out;
            }

            &:hover {
                .material-icons {
                    color: var(--primary);
                    transform: translateX(0.5rem);
                }
            }
        }
    }

    h3,
    .button .text {
        opacity: 0;
        transition: opacity 0.8s ease-in-out;
        padding: 1rem;
    }

    .social_links,
    .switch {
        transition: opacity 0.5s ease-in-out;
    }

    .social_links {
        opacity: 0;
    }

    h3 {
        font-size: 1.5rem;
        margin-bottom: 0.5rem;
        text-transform: uppercase;
    }

    .menu {
        margin: 0 -1rem;

        .button {
            display: flex;
            align-items: center;
            text-decoration: none;
            transition: 0.8s ease-in-out;
            padding: 0.5rem 1rem;

            .material-icons {
                font-size: 2rem;
                color: var(--light);
                transition: 0.8s ease-in-out;
                padding: 0rem;
            }

            .text {
                color: var(--light);
                transition: 0.8s ease-in-out;
                padding-left: 1.5rem;
            }

            &:hover {
                background-color: var(--dark-alt);

                .material-icons,
                .text,
                .social_links {
                    color: var(--primary);
                }
            }

            &.router-link-exact-active {
                background-color: var(--dark-alt);
                border-right: 5px solid var(--primary);

                .material-icons,
                .text {
                    color: var(--primary);
                }
            }
        }
    }

    &.is-expanded {
        width: var(--sidebar-width);

        .menu-toggle-wrap {
            top: -2.7rem;

            .menu-toggle {
                transform: rotate(-180deg);
            }
        }

        h3,
        .button .text {
            opacity: 1;
        }

        .social_links {
            opacity: 1;
        }

        .switch {
            opacity: 0;
        }

        .button {
            .material-icons {
                margin-right: 1rem;
            }
        }
    }

    // Sidebar position
    position: fixed;
    z-index: 99;

}

// Theme
aside {
    background: linear-gradient(to top, #ffe8d6, #ffe8d6);
}
</style>