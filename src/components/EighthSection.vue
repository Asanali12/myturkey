<template>
    <b-container fluid class="justify-content-md-center position-relative" style="padding-bottom: 64px; padding-top: 64px">
        <img src="@/assets/Group 1.png" alt="couldn't load" style="position:absolute; left: 24px; top: 50%" v-if="screenWidth>960">
        <div class="main-page-section11__medium-title2">
            <span class="main-page-section11__medium-title2-span0">Порекомендуй </span>
            <span class="main-page-section11__medium-title2-span1">My Turkey </span>
            <span class="main-page-section11__medium-title2-span2">другу и получи скидку на услуги компании</span>
        </div>
        <h5 class="main-page-section9__highlights7 layout">
            Оставьте заявку и в течение дня наш специалист свяжется с вами и расскажет об условиях акции.
        </h5>
        <b-container fluid style="width: 64%; margin-top:32px">
            <b-row align-v="center" v-if="screenWidth>960">
                <b-col cols="4">
                    <input type="text" placeholder="Ваше имя" class="main-page-section2__block3"/>
                </b-col>
                <b-col cols="5">
                    <input type="text" placeholder="Номер телефона" class="main-page-section2__block3"/>
                </b-col>
                <b-col cols="3">
                    <button class="main-page-section1__block63 layout">
                        <h5 class="main-page-section1__highlights4 layout">
                            Оставить заявку
                        </h5>
                    </button>
                </b-col>
            </b-row>

            <b-row v-if="screenWidth<=960">
                <input type="text" placeholder="Ваше имя" class="main-page-section2__block3"/>
            </b-row>
            <b-row v-if="screenWidth<=960" style="margin-top: 16px">
                <input type="text" placeholder="Номер телефона" class="main-page-section2__block3"/>
            </b-row>
            <b-row v-if="screenWidth<=960" style="margin-top: 16px">
                <button class="main-page-section1__block63 layout">
                        <h5 class="main-page-section1__highlights4 layout">
                            Оставить заявку
                        </h5>
                    </button>
            </b-row>
        </b-container>
    </b-container>
</template>

<script>
export default {
    props: 
    {
        screenWidth:{
            type: Number,
            required: true
        }
    }
}
</script>

<style>

</style>