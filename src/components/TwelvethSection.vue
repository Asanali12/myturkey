<template>
    <b-container fluid class="position-relative" style="padding-bottom: 64px; padding-top: 64px; background-color: #FBFBFB">
        <b-container>
            <b-row v-if="screenWidth > 1500">
                <b-col cols="5">
                    <div class="main-page-section13__block56 position-relative">
                        <h1 class="main-page-section13__hero-title3 layout">
                        Контактная информация
                        </h1>
                        <div class="contacts-items">
                            <div class="contacts-item">
                                <img src="@/assets/email.png" alt="couldn't load" class="contacts-item-img-email">
                                <h5 class="main-page-section13__highlights4">
                                    myturkey.kz@gmail.com
                                </h5>
                            </div>
                            <div class="contacts-item">
                                <img src="@/assets/marker.png" alt="couldn't load" class="contacts-item-img-marker">
                                <h5 class="main-page-section13__highlights4">
                                    г. Нур-Султан , ул.Кенесары 40(БЦ 7 Континент), Этаж 15, офис 1505,1520
                                </h5>
                            </div>
                            <div class="contacts-item">
                                <img src="@/assets/phone.png" alt="couldn't load" class="contacts-item-img-phone">
                                <h5 class="main-page-section13__highlights4">
                                    <p>+7 700 433 80 01</p>
                                    <p>+7 700 433 80 02</p>
                                    <p>+7 700 433 80 03</p>
                                </h5>
                            </div>
                        </div>
                        <b-row style="width: 74%">
                            <b-col>
                                <a href="#">
                                    <img src="@/assets/socials.png" alt="couldn't load">
                                </a>
                            </b-col>
                            <b-col>
                                <a href="#">
                                    <img src="@/assets/facebook.png" alt="couldn't load">
                                </a>
                            </b-col>
                            <b-col>
                                <a href="#">
                                    <img src="@/assets/vk.png" alt="couldn't load">
                                </a>
                            </b-col>
                            <b-col>
                                <a href="#">
                                    <img src="@/assets/youtube.png" alt="couldn't load">
                                </a>
                            </b-col>
                        </b-row>
                        <img src="@/assets/28ad9b5b0f983da0ca241a10a67c3749.png" alt="couldn't load" class="main-page-section13__decorator21 layout"/>
                    </div>
                </b-col>
                <b-col cols="7">
                    <h1 class="main-page-section13__hero-title1">
                    Оставьте заявку
                    </h1>
                    <h5 class="main-page-section13__highlights1">
                    на бесплатную консультацию и получите скидку на услуги
                    компании
                    </h5>
                    <b-row style="margin-top: 24px">
                        <b-col>
                            <input type="text" placeholder="Ваше имя" class="main-page-section2__block3"/>
                        </b-col>
                        <b-col>
                            <input type="text" placeholder="Номер телефона" class="main-page-section2__block3"/>
                        </b-col>
                    </b-row>
                    <textarea placeholder="Ваш вопрос (если имеется)" rows="3" class="main-page-section2__block3" style="resize: none; outline: none; padding-top: 12px; margin-top: 16px">

                    </textarea>
                    <button class="main-page-section1__block63 layout" style="margin-top: 52px">
                        <h5 class="main-page-section1__highlights4 layout">
                            Оставить заявку
                        </h5>
                    </button>
                </b-col>
            </b-row>


            <div v-if="screenWidth <= 1500">
                <b-row>
                    <h1 class="main-page-section13__hero-title1">
                    Оставьте заявку
                    </h1>
                    <h5 class="main-page-section13__highlights1">
                    на бесплатную консультацию и получите скидку на услуги
                    компании
                    </h5>
                    <b-row style="margin-top: 24px">
                        <input type="text" placeholder="Ваше имя" class="main-page-section2__block3"/>
                    </b-row>
                    <b-row style="margin-top: 24px">
                        <input type="text" placeholder="Номер телефона" class="main-page-section2__block3"/>
                    </b-row>
                    <b-row>
                        <textarea placeholder="Ваш вопрос (если имеется)" rows="3" class="main-page-section2__block3" style="resize: none; outline: none; padding-top: 12px; margin-top: 16px">

                    </textarea>
                    </b-row>
                    <button class="main-page-section1__block63 layout" style="margin-top: 52px">
                        <h5 class="main-page-section1__highlights4 layout">
                            Оставить заявку
                        </h5>
                    </button>
                </b-row>
                <b-row style="margin-top: 32px">
                    <div class="main-page-section13__block56 position-relative">
                        <h1 class="main-page-section13__hero-title3 layout">
                        Контактная информация
                        </h1>
                        <div class="contacts-items">
                            <div class="contacts-item">
                                <img src="@/assets/email.png" alt="couldn't load" class="contacts-item-img-email">
                                <h5 class="main-page-section13__highlights4">
                                    myturkey.kz@gmail.com
                                </h5>
                            </div>
                            <div class="contacts-item">
                                <img src="@/assets/marker.png" alt="couldn't load" class="contacts-item-img-marker">
                                <h5 class="main-page-section13__highlights4">
                                    г. Нур-Султан , ул.Кенесары 40(БЦ 7 Континент), Этаж 15, офис 1505,1520
                                </h5>
                            </div>
                            <div class="contacts-item">
                                <img src="@/assets/phone.png" alt="couldn't load" class="contacts-item-img-phone">
                                <h5 class="main-page-section13__highlights4">
                                    <p>+7 700 433 80 01</p>
                                    <p>+7 700 433 80 02</p>
                                    <p>+7 700 433 80 03</p>
                                </h5>
                            </div>
                        </div>
                         <b-row >
                            <b-col cols="3">
                                <a href="#">
                                    <img src="@/assets/socials.png" alt="couldn't load">
                                </a>
                            </b-col>
                            <b-col cols="3">
                                <a href="#">
                                    <img src="@/assets/facebook.png"  alt="couldn't load">
                                </a>
                            </b-col>
                            <b-col cols="3">
                                <a href="#">
                                    <img src="@/assets/vk.png" alt="couldn't load">
                                </a>
                            </b-col>
                            <b-col cols="3">
                                <a href="#">
                                    <img src="@/assets/youtube.png" alt="couldn't load">
                                </a>
                            </b-col>
                        </b-row>
                    </div>
                </b-row>
            </div>
        </b-container>
    </b-container>
</template>

<script>
export default {
    props: {
        screenWidth: {
            type: Number,
            required: true
        }
    }
}
</script>

<style>

</style>