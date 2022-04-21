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
           
            domain: 'domain',
            auth: {
            client_id: '80e2e8c3-1639-497d-8b9f-f704e1283b1d', // ID интеграции
            client_secret: 'UwgKxZZsgcvZ21USh2aiYle50CUgqdU1cOw1Pbz5iWv3n0LqwncFJiTISFAgznYM', // Секретный ключ
            redirect_uri: 'https://aurorainc.amocrm.ru/api', // Ссылка для перенаправления
            code: 'def50200c8cc0e0818c3b7c2d374cf7a0c0cf882d0fe38b1a7b4e6670115757212d7a3f11dc7d9f9dda36ae8d931634dcda6388808b053aa1ef93df0984c3111edb666e0ee4cad0bb0fdbbe6696c4f1f4d0d40e4b5bd542494297d1236184e53815b6130392de30fc3ba09811a0590ba428fc537909b0ffe6bacedab5f47956a905b6f950f8d1cf431d3e0247febcec811ef406f638c944efb3e3c9d83671e7cc20e9887c637269a205ff93066bdd8bd089f7c2c08e5b585434b4fd3a8586e10cf0a03af4165ff34ff6d5f7d036e00f86a4760b5a06266c8af5e1a8b8451bc0f243e9184a341de0a7c7fc7499a9ca346fdcad4c6388e8ce57dd3c43ca0d0532677109d473070382710539495e0495506a09ee7d166cb5811d52c39ed0653bcb1e6dcf5a8364af50a078ef49ae46be58a7284d5c879fff15ce378e6b3de550b5196d373b13ab4f0a7a049f95b1c9f888777dbb0b6a9ca3d3520d801b19ead9ac8b38ee76f6df37257bd9918c777f0a7be6c92726ccce3d0aa04e7ede0289d00d779c3214e381552daf35840e22945dbe94b68e3b0515a72616a98c1bb24a3c42a304fc008da2355e83701115f734a2eb3359a861a0040a44865e4e6b2727faf996b9ef364a541d1492ece'
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