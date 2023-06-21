<template>
    <div class="references">
        <div class="row">
            <h2 class="heading">Referees</h2>
        </div>
        <div class="row container-fluid">
            <ul class="nav nav-pills mb-3 justify-content-center" id="pills-tab" role="tablist">
                <li class="nav-item">
                    <a class="nav-link active" data-bs-toggle="pill" href="#ex3-1" role="tab">
                        Mr. Sergiu Orbu
                    </a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" data-bs-toggle="pill" href="#ex3-2" role="tab">
                        Dr. Edel Sheratt
                    </a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" data-bs-toggle="pill" href="#ex3-3" role="tab" aria-controls="ex3-3">Dr. Syed
                        Azeem</a>
                </li>
            </ul>

            <div class="row">
                <div class="col-6" data-aos="fade-right">
                    <hr>
                </div>
            </div>

            <div class="row">
                <div class="col-2 open-quote"><i class="fa-solid fa-quote-left"></i></div>
                <div class="col-8" data-aos="zoom-in">
                    <div class="tab-content">
                        <div class="tab-pane fade show active" id="ex3-1" role="tabpanel">
                            <kinesis-container>
                                <kinesis-element :strength="5" type="depth">
                                    a 
                                </kinesis-element>
                            </kinesis-container>
                        </div>
                        <div class="tab-pane fade" id="ex3-2" role="tabpanel">
                            b 
                        </div>
                        <div class="tab-pane fade" id="ex3-3" role="tabpanel">
                            c 
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
    </div>
</template>
  
<script>
export default {
}
</script>
  
<style lang="scss" scoped>
.references {
    background-color: #ffcdb2;
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
    &:hover{
        color: #8c8b8b;
    }
  &.active {
    background-color: white !important;
    color: black !important;
  }
}
</style>