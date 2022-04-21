<template>
  <section class="main-page-section2__section2 layout py-0">
        <div class="main-page-section2__block1 layout">
        

        <div class="main-form-div" :style="[screenWidth > 1450 ? {'width': '64%'} : {'width': '100%'}]">
            <div>
                <h1 class="main-page-section2__hero-title-box layout">
                    <span class="main-page-section2__hero-title-span0">
                        Бесплатное
                    </span>
                    <span class="main-page-section2__hero-title-span1">
                        обучение в 
                    </span>
                    <span class="main-page-section2__hero-title-span2">
                        Турции
                    </span>
                    <br/>
                    <span class="main-page-section2__hero-title-span1">
                        после Foundation
                    </span>
                </h1>
                <h3 class="main-page-section2__subtitle-box layout">
                    <pre class="main-page-section2__subtitle">&quot;Online/Offline Tomer Foundation&quot; - сэкономь один год </pre>
                </h3>
            </div>
            <b-row v-if="screenWidth > 650" class="d-flex justify-content-start align-items-start w-75" align-v="center" style="margin-top: 64px">
                <b-col cols="1" class="mx-0 px-0">
                    <img src="@/assets/2128a9054fb7bdab53713f2adddda56d.png" alt="can't load" class="main-page-section2__icon2">
                </b-col>
                <b-col cols="4" class="mx-0 px-0 d-flex justify-content-start align-items-start">
                    <h5 class="main-page-section2__highlights">
                        100% Гарантия поступления
                    </h5>
                </b-col>
                <b-col cols="1" class="mx-0 px-0">
                    <div>
                        <img src="@/assets/2128a9054fb7bdab53713f2adddda56d.png" alt="can't load" class="main-page-section2__icon2">
                    </div>
                </b-col>
                <b-col cols="4" class="mx-0 px-0 d-flex justify-content-start align-items-start">
                    <h5 class="main-page-section2__highlights">
                        Без ЕНТ/КТА/YOS
                    </h5>
                </b-col>

            </b-row>

            <b-row v-if="screenWidth > 650" class="d-flex justify-content-start align-items-start w-75" align-v="center" style="margin-top: 16px">
                <b-col cols="1" class="mx-0 px-0">
                    <div>
                        <img src="@/assets/2128a9054fb7bdab53713f2adddda56d.png" alt="can't load" class="main-page-section2__icon2">
                    </div>
                </b-col>
                <b-col cols="5" class="mx-0 px-0 d-flex justify-content-start align-items-start">
                    <h5 class="main-page-section2__highlights">
                        Без знания Английского / Турецкого
                    </h5>
                </b-col>
            </b-row>

            <b-row v-if="screenWidth <= 650" style="margin-top: 32px !important">
                <b-col cols="1" class="mx-0 px-0">
                    <div>
                        <img src="@/assets/2128a9054fb7bdab53713f2adddda56d.png" alt="can't load" class="main-page-section2__icon2">
                    </div>
                </b-col>
                <b-col cols="5" class="mx-0 px-0 d-flex justify-content-start align-items-start">
                    <h5 class="main-page-section2__highlights">
                        100% Гарантия поступления
                    </h5>
                </b-col>
            </b-row>
            <b-row v-if="screenWidth <= 650">
                <b-col cols="1" class="mx-0 px-0">
                    <div>
                        <img src="@/assets/2128a9054fb7bdab53713f2adddda56d.png" alt="can't load" class="main-page-section2__icon2">
                    </div>
                </b-col>
                <b-col cols="5" class="mx-0 px-0 d-flex justify-content-start align-items-start">
                    <h5 class="main-page-section2__highlights">
                        Без ЕНТ/КТА/YOS
                    </h5>
                </b-col>
            </b-row>
            <b-row v-if="screenWidth <= 650">
                <b-col cols="1" class="mx-0 px-0">
                    <div>
                        <img src="@/assets/2128a9054fb7bdab53713f2adddda56d.png" alt="can't load" class="main-page-section2__icon2">
                    </div>
                </b-col>
                <b-col cols="5" class="mx-0 px-0 d-flex justify-content-start align-items-start ">
                    <h5 class="main-page-section2__highlights">
                        Без знания Английского / Турецкого
                    </h5>
                </b-col>
            </b-row>

            <div class="px-0 mx-0 d-flex justify-content-start align-items-start" style="margin-top: 64px">
                <h5 class="main-page-section2__highlights1">
                    До конца набора осталось
                </h5>
            </div>
            <b-row :style="[screenWidth > 1450 ? 'width: 25%; margin-top: 16px;': 'width: 243px; margin-top: 16px;']" class="px-0 mx-0">
                <b-col class="px-0 mx-0">
                    <div class="main-page-section2__block2">
                        12
                    </div>
                    <div class="main-page-section2__text-body">Дней</div>
                </b-col>
                <b-col class="px-0 mx-0">
                    <div>
                        <img src="@/assets/3fe2e9edeaecd98036e2b5289e6a704d.png" alt="can't load" class="main-page-section2__icon13">
                    </div>
                    <div>
                        <img src="@/assets/3fe2e9edeaecd98036e2b5289e6a704d.png" alt="can't load" class="main-page-section2__icon14">
                    </div>
                </b-col>
                <b-col class="px-0 mx-0">
                    <div class="main-page-section2__block2">
                        12
                    </div>
                    <div class="main-page-section2__text-body">Часа</div>
                </b-col>
                <b-col class="px-0 mx-0">
                    <div>
                        <img src="@/assets/3fe2e9edeaecd98036e2b5289e6a704d.png" alt="can't load" class="main-page-section2__icon11">
                    </div>
                    <div>
                        <img src="@/assets/3fe2e9edeaecd98036e2b5289e6a704d.png" alt="can't load" class="main-page-section2__icon12">
                    </div>
                </b-col>
                <b-col class="px-0 mx-0">
                    <div class="main-page-section2__block2">
                        12
                    </div>
                    <div class="main-page-section2__text-body">Минут</div>
                </b-col>
            </b-row>

            <b-row v-if="screenWidth > 650" style="margin-top: 24px; width: 80%" align-v="center">
                <b-col>
                    <input type="text" placeholder="Ваше имя" class="main-page-section2__block3"/>
                </b-col>
                <b-col>
                    <input type="text" placeholder="Номер телефона" class="main-page-section2__block3"/>
                </b-col>
                <b-col>
                    <button class="main-page-section1__block63 layout">
                        <h5 class="main-page-section1__highlights4 layout">
                            Оставить заявку
                        </h5>
                    </button>
                </b-col>
            </b-row>

            <div v-if="screenWidth <= 650" style="margin-top: 32px">
                <b-row style="width: 95%">
                    <b-col>
                        <input type="text" placeholder="Ваше имя" class="main-page-section2__block3"/>
                    </b-col>
                </b-row>
                <b-row style="width: 95%; margin-top: 32px">
                    <b-col>
                        <input type="text" placeholder="Номер телефона" class="main-page-section2__block3"/>
                    </b-col>
                </b-row>
                <b-row style="width: 95%; margin-top: 32px">
                    <b-col class="d-flex justify-content-center align-items-center" style="justify-content: center !important">
                        <button class="main-page-section1__block63 layout">
                            <h5 class="main-page-section1__highlights4 layout">
                                Оставить заявку
                            </h5>
                        </button>
                    </b-col>
                </b-row>
            </div>
            <div class="main-page-section2__text-body1 d-flex justify-content-start align-items-start">
                Мы свяжемся с вами в течение дня
            </div>
        </div>

        <div v-if="screenWidth > 1450" class="main-page-section2__block6 layout my-0">
            <div>
                <img src="@/assets/9a32b0131e88487182ed4cbd79f68ac3.png" alt="can't load" class="main-page-section2__image1 layout">
            </div>

            <div>
                <img src="@/assets/43dfefe5da71848a54384f54cfd8811c.png" alt="can't load" class="main-page-section2__image1 layout1">
            </div>

            <div>
                <img src="@/assets/cae53c4cfaf252a227f442316e49ce78.png" alt="can't load" class="main-page-section2__decorator1 layout">
            </div>
        </div>
        <!-- section split -->
        <div>
            <img src="@/assets/0319aa7b73be1b01ebfe4486ab3a6544.png" alt="can't load" class="main-page-section2__image2 layout">
        </div>
        </div>
        <div class="main-page-section2__block7 layout">
        <div class="main-page-section2__decorator2" style="margin-top: 64px;">
            <div class="main-page-section2__flex2">
                <div style="position: absolute; left: -300px; top: 254.36px">
                    <img src="@/assets/8c7f029b42cb4a5c0592828733a47a54.png" alt="can't load">
                </div>
                <b-container fluid>
                    <b-row v-if="screenWidth >= 770" style="margin-top: 88px; padding-left: 32px;">
                        <b-col cols="3" >
                            <h1 class="main-page-section2__big-title" style="text-align: left">
                                <p>Почему учиться</p>в Турции?
                            </h1>
                            <button class="main-page-section2__block8" style="margin-top: 42px">
                                <h5 class="main-page-section2__highlights5 layout">
                                    Оставить заявку
                                </h5>
                            </button>
                        </b-col>
                        <b-col>
                            <b-row>
                                <b-col>
                                    <img src="@/assets/661f8217d5c41479d94c6b82d7ee3f1f.png" alt="can't load" class="main-page-section2__icon21 layout">
                                    <h3 class="main-page-section2__subtitle1 layout">
                                        Диплом международного образца
                                    </h3>
                                </b-col>
                                <b-col>
                                    <img src="@/assets/661f8217d5c41479d94c6b82d7ee3f1f.png" alt="can't load" class="main-page-section2__icon21 layout">
                                    <h3 class="main-page-section2__subtitle1 layout">
                                        Лучшие ВУЗы с рейтингом А+
                                    </h3>
                                </b-col>
                                
                            </b-row>
                            <b-row style="margin-top: 80px">
                                <b-col>
                                    <img src="@/assets/e07c1a1b192529472b0c7c29824365f6.png" alt="can't load" class="main-page-section2__icon22 layout">
                                    <h3 class="main-page-section2__subtitle1 layout">
                                        Квалифицированные преподаватели
                                    </h3>
                                </b-col>
                                <b-col>
                                    <img src="@/assets/5fda943cbd26f5453474b9edf56e7079.png" alt="can't load" class="main-page-section2__icon23 layout">
                                    <h3 class="main-page-section2__subtitle1 layout">
                                        Перспективы работы за границей
                                    </h3>
                                </b-col>
                            </b-row>
                            <b-row style="margin-top: 80px">
                                <b-col>
                                    <img src="@/assets/ba384b8c3c499b48b592a83460c2a24c.png" alt="can't load" class="main-page-section2__icon24 layout">
                                    <h3 class="main-page-section2__subtitle1 layout1">
                                        Красивейшие пляжи, круизы
                                    </h3>
                                </b-col>
                                <b-col>
                                    <img src="@/assets/24050785a7e00994eb4517b3f8b1feaf.png" alt="can't load" class="main-page-section2__icon25 layout">
                                    <h3 class="main-page-section2__subtitle1 layout2">
                                        Красочные места для дайвинга
                                    </h3>
                                </b-col>
                            </b-row>
                        </b-col>
                    </b-row>

                    <b-row v-if="screenWidth < 770">
                        <b-col>
                            <h1 class="main-page-section2__big-title" style="text-align: left">
                                <p>Почему учиться</p>в Турции?
                            </h1>
                            <button class="main-page-section2__block8" style="margin-top: 42px">
                                <h5 class="main-page-section2__highlights5 layout">
                                    Оставить заявку
                                </h5>
                            </button>
                        </b-col>
                    </b-row>
                    <b-row v-if="screenWidth < 770">
                        <b-col>
                            <b-row>
                                <b-col>
                                    <img src="@/assets/661f8217d5c41479d94c6b82d7ee3f1f.png" alt="can't load" class="main-page-section2__icon21 layout">
                                    <h3 class="main-page-section2__subtitle1 layout">
                                        Диплом международного образца
                                    </h3>
                                </b-col>
                                <b-col>
                                    <img src="@/assets/661f8217d5c41479d94c6b82d7ee3f1f.png" alt="can't load" class="main-page-section2__icon21 layout">
                                    <h3 class="main-page-section2__subtitle1 layout">
                                        Лучшие ВУЗы с рейтингом А+
                                    </h3>
                                </b-col>
                                
                            </b-row>
                            <b-row style="margin-top: 80px">
                                <b-col>
                                    <img src="@/assets/e07c1a1b192529472b0c7c29824365f6.png" alt="can't load" class="main-page-section2__icon22 layout">
                                    <h3 class="main-page-section2__subtitle1 layout">
                                        Квалифицированные преподаватели
                                    </h3>
                                </b-col>
                                <b-col>
                                    <img src="@/assets/5fda943cbd26f5453474b9edf56e7079.png" alt="can't load" class="main-page-section2__icon23 layout">
                                    <h3 class="main-page-section2__subtitle1 layout">
                                        Перспективы работы за границей
                                    </h3>
                                </b-col>
                            </b-row>
                            <b-row style="margin-top: 80px">
                                <b-col>
                                    <img src="@/assets/ba384b8c3c499b48b592a83460c2a24c.png" alt="can't load" class="main-page-section2__icon24 layout">
                                    <h3 class="main-page-section2__subtitle1 layout1">
                                        Красивейшие пляжи, круизы
                                    </h3>
                                </b-col>
                                <b-col>
                                    <img src="@/assets/24050785a7e00994eb4517b3f8b1feaf.png" alt="can't load" class="main-page-section2__icon25 layout">
                                    <h3 class="main-page-section2__subtitle1 layout2">
                                        Красочные места для дайвинга
                                    </h3>
                                </b-col>
                            </b-row>
                        </b-col>
                    </b-row>
                </b-container>
            </div>
            
        </div>
        </div>
    </section>
</template>

<script>
export default {
    name: "FirstSection",
    props:{
        screenWidth: {
            type: Number,
            required: true
        }
    },
}
</script>

<style>

</style>