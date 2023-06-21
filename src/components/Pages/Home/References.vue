<template>
    <div class="references">
        <div class="row">
            <h2 class="heading">Referees</h2>
        </div>
        <div class="row container-fluid">
            <MDBTabs v-model="activeTabId3">
                <!-- Tabs navs -->
                <MDBTabNav pills justify tabsClasses="mb-3">
                    <MDBTabItem tabId="ex3-1" href="ex3-1">Mr. Sergiu Orbu</MDBTabItem>
                    <MDBTabItem tabId="ex3-2" href="ex3-2">Dr. Edel Sheratt</MDBTabItem>
                    <MDBTabItem tabId="ex3-3" href="ex3-3">Dr. Syed Azeem</MDBTabItem>
                </MDBTabNav>
                <!-- Tabs navs -->
                <!-- Tabs content -->
                <div class="row">
                    <div class="col-6" data-aos="fade-right">
                        <hr>
                    </div>
                </div>

                <div class="row">
                    <div class="col-2 open-quote"><i class="fa-solid fa-quote-left"></i></div>
                    <div class="col-8" data-aos="zoom-in">
                        <MDBTabContent>
                            <MDBTabPane tabId="ex3-1">
                                <kinesis-container>
                                    <kinesis-element :strength="5" type="depth">
                                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deserunt laudantium
                                        mollitia, eos
                                        cupiditate iusto ex nihil perspiciatis placeat! Cum labore earum libero dolores sunt
                                        tempore
                                        doloribus. Quidem sit fuga rem.
                                    </kinesis-element>
                                </kinesis-container>

                            </MDBTabPane>
                            <MDBTabPane tabId="ex3-2"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium
                                temporibus quae quasi suscipit quia? Fugit omnis cupiditate soluta perspiciatis, deleniti
                                sint ipsa ipsum quae, iste sunt suscipit atque esse magni!</MDBTabPane>
                            <MDBTabPane tabId="ex3-3"> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Non
                                voluptatum atque in reprehenderit odit neque beatae numquam debitis id, assumenda reiciendis
                                quo similique aliquid consequuntur fuga quos. Expedita, ullam doloribus.</MDBTabPane>
                        </MDBTabContent>
                    </div>
                    <div class="col-2 closed-quote"><i class="fa-solid fa-quote-right"></i></div>
                </div>

                <!-- Tabs content -->
            </MDBTabs>
            <div class="row">
                <div class="col-6"></div>
                <div class="col-6" data-aos="fade-left">
                    <hr>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import {
    MDBTabs,
    MDBTabNav,
    MDBTabContent,
    MDBTabItem,
    MDBTabPane,
} from 'mdb-vue-ui-kit';
import { ref } from 'vue';
export default {
    components: {
        MDBTabs,
        MDBTabNav,
        MDBTabContent,
        MDBTabItem,
        MDBTabPane,
    },
    setup() {
        const activeTabId3 = ref('ex3-1');

        return {
            activeTabId3,
        };
    },
};
</script>
<style lang="scss" scoped>
.references {
    background-color: black;
    overflow: hidden;
}

.container-fluid {
    margin: 0;
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
}</style>