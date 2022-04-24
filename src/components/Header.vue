<template>
  
    <b-row class="main-page-section1__block61" align-v="center">
        <b-col cols="9" class="d-flex justify-content-start">
            <div class="brand-logo">
                <a class="no-style-link" href="https://www.myturkey.kz/">
                    <img src="@/assets/7dda7bf1a15901ed4e4201b183666df5.png" alt="can't load" class="main-page-section1__image43 layout">
                </a>
            </div>
        </b-col>
        <b-col class="d-flex justify-content-start">
            <b-row v-if="screenWidth > 430">
                <b-col class="d-flex justify-content-end">
                    <a class="no-style-link" href="#">
                        <img src="@/assets/7ecf06b1973c75131d7fea11a69deb48.png" alt="can't load" class="main-page-section1__cover-group layout">
                    </a>
                </b-col>
                <b-col class="d-flex justify-content-start">
                    <a class="no-style-link" href="#">
                        <h5 class="main-page-section1__highlights6 layout">Қаз.</h5>
                    </a>
                </b-col>
            </b-row>
            <div v-if="screenWidth < 430">
                <b-row>
                    <b-col>
                        <a class="no-style-link" href="#">
                            <img src="@/assets/7ecf06b1973c75131d7fea11a69deb48.png" alt="can't load" class="main-page-section1__cover-group layout">
                        </a>
                    </b-col>
                </b-row>
                <b-row>
                    <a class="no-style-link" href="#">
                        <h5 class="main-page-section1__highlights6 layout">Қаз.</h5>
                    </a>
                </b-row>
            </div>
        </b-col>
        <b-col v-if="screenWidth > 1400" cols="2" class="d-flex justify-content-end">
            <a href="#main-lead-form">
                <button class="main-page-section1__block63 layout">
                <h5 class="main-page-section1__highlights4 layout">
                    Заказать обратный звонок
                </h5>
            </button>
            </a>
        </b-col>
    </b-row>
</template>

<script>
export default {
    name: "Header",
    props:{
        screenWidth: {
            type: Number,
            required: true
        }
    },
    mounted(){
    }
}
</script>

<style>

</style>