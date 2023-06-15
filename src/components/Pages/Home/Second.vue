<template>
    <div class="second">
        <div class="content">
            <h1>Education</h1>
        </div>
        <two-columns :firstDescriptionClass="'col-4'" :firstDescriptionAos="'fade-right'" :secondDescriptionClass="'col-8'"
            :secondDescriptionAos="'fade-left'">
            <template v-slot:firstDescription>
                <div class="title">
                    <img src="../../../assets/Aberystwyth-University.svg" />
                    <!-- <p>September 2021 - September 2023</p> -->
                </div>
            </template>

            <template v-slot:secondDescription>
                <div class="description">
                    <h1>MSc Advanced Computer Science</h1>
                    <h2>(with Integrated Year in Industry)</h2>
                </div>
            </template>
        </two-columns>
    </div>
</template>

<style scoped>
.description{
    margin-top: 50px;
}
.title p{
    margin-top: -80px;
}
.second {
    background-color: #f8f9fa;
}

.content h1,
h2,
p {
    text-align: center;
}

h1,
p,
h2 {
    color: black;
}
</style>