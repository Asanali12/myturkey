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
                    <input type="text" placeholder="Ваше имя" class="main-page-section2__block3" v-model="name"/>
                </b-col>
                <b-col cols="5">
                    <input type="text" placeholder="Номер телефона" class="main-page-section2__block3" v-model="phone"/>
                </b-col>
                <b-col cols="3">
                    <button class="main-page-section1__block63 layout" @click="sendRequest">
                        <h5 class="main-page-section1__highlights4 layout">
                            Оставить заявку
                        </h5>
                    </button>
                </b-col>
            </b-row>

            <b-row v-if="screenWidth<=960">
                <input type="text" placeholder="Ваше имя" class="main-page-section2__block3" v-model="name"/>
            </b-row>
            <b-row v-if="screenWidth<=960" style="margin-top: 16px">
                <input type="text" placeholder="Номер телефона" class="main-page-section2__block3" v-model="phone"/>
            </b-row>
            <b-row v-if="screenWidth<=960" style="margin-top: 16px">
                <button class="main-page-section1__block63 layout" @click="sendRequest">
                        <h5 class="main-page-section1__highlights4 layout">
                            Оставить заявку
                        </h5>
                    </button>
            </b-row>
        </b-container>
    </b-container>
</template>

<script>
import axios from 'axios';

export default {
    data () {
        return {
            name: "",
            phone: ""
        }
    },
    props: 
    {
        screenWidth:{
            type: Number,
            required: true
        }
    },
    methods:{
        async sendRequest () {
            const body = {
                name: this.name,
                phone: this.phone
            }
            const res = axios.post("https://heartfelt-crumble-fdad9d.netlify.app/.netlify/functions/app/request", body,
            {
                headers:{
                    'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Origin',
                    'Access-Control-Allow-Methods': 'POST, OPTIONS',
                    'Access-Control-Max-Age': '8640',
                    'Access-Control-Allow-Origin' : "*",
                    'Vary' : 'Origin'
                }
            })
            if (res != null) {
                this.$router.push("/thanks")
            }else{
                console.log("error")
            }
        }
    }
}
</script>

<style>

</style>