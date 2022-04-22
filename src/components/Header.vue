<template>
  
    <b-row class="main-page-section1__block61" align-v="center">
        <b-col cols="9" class="d-flex justify-content-start">
            <div class="brand-logo">
                <a class="no-style-link" href="#">
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
            <button class="main-page-section1__block63 layout">
                <h5 class="main-page-section1__highlights4 layout">
                    Заказать обратный звонок
                </h5>
            </button>
        </b-col>
    </b-row>
</template>

<script>
const AmoCRM = require('amocrm-js')
export default {
    name: "Header",
    props:{
        screenWidth: {
            type: Number,
            required: true
        }
    },
    mounted(){
        console.log(this.screenWidth)
        const crm = new AmoCRM({
           
            domain: 'aurorainc',
            auth: {
            client_id: 'db2be8d8-2325-48c5-8210-73a8b3844d3f', // ID интеграции
            client_secret: 'xh1m4Cd4wpBhJ9n9vJvHeWx0vF0ZfuoUrnfqXPfxmOngyqecPEUiiIdRt6QozyVE', // Секретный ключ
            redirect_uri: 'https://6261d0d2c0f2d7000876ead2--visionary-pika-1ccdc1.netlify.app/', // Ссылка для перенаправления
            code: 'def50200043f39b7bd64ddd0eafecd9323b513a1f12740ef66874e520029711eb3325f6ee644d52a13f0930df467263f04f38444c7a8b60c192d9edb7df84fd6ca8007d52cba2b601c964ac1b585b9fd61af2fd914866dcf1c3736f9a8e70b66fd876296f2637d4acea7e77821c2382bec6d9e80350d69b6cc8aea20c0e7a8c935f1440814c306d3e5bcf01886c88eac2dcf1737622ca432271513d8dbc498814d12fd6d01c7677132016a3d433d394b4729a114d06b747e1bbe542e3e15e20f6ef175305ab534112b154575fc2cd333b49a41ec86f665a021261c207e882744be1186a8a6d815b62df8ce130c35655430ef08b20affc208ab53d758906bbaeacf8ec0e677e28bcd4430dab480ce6a42f0d6cc6b22b55ddf936de8d4bc9a0a20d38e7686f4e293fd9f53b44ad39714ba32aea029513710145ff48feaec706f7630cc728f59ba93d450716d167a7869783fd22eef2bc42cbe376fda85c9a8888a23d54e8cc6352362c2fc8880a0d38b24060585a45e3c8e75ed5c259493088ec6abb3324e903ed374bda20513a3014886877951b08a2516523039353d2cf83a2642ad315bd349153fdc69f37af64c93e35c7458d7fbcb66813b0e33a6a5683a4cf2c11ff2644405177ce578e4bdc691a3ffcfa8b5bd5db4acc2f3ae06e7f8669c0140b51ea80dab4661ec5c1908'
        },
        });

        (async () => {
            const data = await crm.request.get("/api/v4/leads")
            console.log(data)
        }) ();
    }
}
</script>

<style>

</style>