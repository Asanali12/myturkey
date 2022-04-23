<template>
<div style="width: 100%">
    <b-container style="margin-top: 96px">
        <h1 class="main-page-section4__big-title2">
            Как мы работаем?
        </h1>
        <b-row v-if="screenWidth >= 770">
            <b-col cols="3" class="position-relative">
                <h1 class="main-page-section4__hero-title2">1</h1>
                <h3 class="main-page-section4__subtitle21-box position-absolute">
                    <div class="main-page-section4__subtitle21">
                        <span class="main-page-section4__subtitle21-span0"
                        >Подбираем</span
                        ><span class="main-page-section4__subtitle21-span1">
                        ВУЗ индивидуально под ваши предпочтения</span
                        >
                    </div>
                </h3>
            </b-col>
            <b-col >
                <b-row align-v="center" class="h-100">
                    <b-col align-v="center" class="d-flex justify-content-end">
                        <img src="@/assets/coolicon.png" alt="can't load">
                    </b-col>
                    <b-col align-v="center" class="d-flex justify-content-start">
                        <img src="@/assets/coolicon.png" alt="can't load">
                    </b-col>
                </b-row>
            </b-col>
            <b-col cols="3" class="position-relative" style="margin-top: 16px">
                <h1 class="main-page-section4__hero-title2">2</h1>
                <h3 class="main-page-section4__subtitle21-box position-absolute">
                    <div class="main-page-section4__subtitle21">
                        <span class="main-page-section4__subtitle21-span0"
                        >Отправляем документы</span
                        ><span class="main-page-section4__subtitle21-span1">
                        в выбранный Вами университет Турции</span
                        >
                    </div>
                </h3>
            </b-col>
            <b-col >
                <b-row align-v="center" class="h-100">
                    <b-col align-v="center" class="d-flex justify-content-end">
                        <img src="@/assets/coolicon.png" alt="can't load">
                    </b-col>
                    <b-col align-v="center" class="d-flex justify-content-start">
                        <img src="@/assets/coolicon.png" alt="can't load">
                    </b-col>
                </b-row>
            </b-col>
            <b-col cols="3" class="position-relative" style="margin-top: 16px">
                <h1 class="main-page-section4__hero-title2">3</h1>
                <h3 class="main-page-section4__subtitle21-box position-absolute">
                    <div class="main-page-section4__subtitle21">
                        <span class="main-page-section4__subtitle21-span1">
                        Предоставляем Вам</span
                        >
                        <span class="main-page-section4__subtitle21-span0"
                        > приглашение</span
                        ><span class="main-page-section4__subtitle21-span1">
                        от ВУЗа на имя студента</span
                        >
                    </div>
                </h3>
            </b-col>
        </b-row>
        <b-row v-if="screenWidth >= 770">
            <b-col cols="3" class="position-relative">
                <h1 class="main-page-section4__hero-title2">4</h1>
                <h3 class="main-page-section4__subtitle21-box position-absolute">
                    <div class="main-page-section4__subtitle21">
                        <span class="main-page-section4__subtitle21-span1">
                        Сопровождаем и проводим </span
                        >
                        <span class="main-page-section4__subtitle21-span0"
                        >инструктаж</span
                        ><span class="main-page-section4__subtitle21-span1">
                        студентов в ВУЗе</span
                        >
                    </div>
                </h3>
            </b-col>
            <b-col>
                <b-row align-v="center" class="h-100">
                    <b-col align-v="center" class="d-flex justify-content-end">
                        <img src="@/assets/coolicon.png" alt="can't load">
                    </b-col>
                    <b-col align-v="center" class="d-flex justify-content-start">
                        <img src="@/assets/coolicon.png" alt="can't load">
                    </b-col>
                </b-row>
            </b-col>
            <b-col cols="3" class="position-relative">
                <h1 class="main-page-section4__hero-title2">5</h1>
                <h3 class="main-page-section4__subtitle21-box position-absolute">
                    <div class="main-page-section4__subtitle21">
                        <span class="main-page-section4__subtitle21-span1">
                        Предоставляем отчет об </span
                        >
                        <span class="main-page-section4__subtitle21-span0"
                        >успеваемости</span
                        ><span class="main-page-section4__subtitle21-span1">
                        каждого студента</span
                        >
                    </div>
                </h3>
            </b-col>
            <b-col>
                <b-row align-v="center" class="h-100">
                    <b-col align-v="center" class="d-flex justify-content-end">
                        <img src="@/assets/coolicon.png" alt="can't load">
                    </b-col>
                    <b-col align-v="center" class="d-flex justify-content-start">
                        <img src="@/assets/coolicon.png" alt="can't load">
                    </b-col>
                </b-row>
            </b-col>
            <b-col cols="3" class="position-relative">
                <h1 class="main-page-section4__hero-title2">6</h1>
                <h3 class="main-page-section4__subtitle21-box position-absolute">
                    <div class="main-page-section4__subtitle21">
                        <span class="main-page-section4__subtitle21-span1">
                        Оказываем</span
                        >
                        <span class="main-page-section4__subtitle21-span0"
                        > поддержку</span
                        ><span class="main-page-section4__subtitle21-span1">
                        на весь период обучения</span
                        >
                    </div>
                </h3>
            </b-col>
        </b-row>

        <b-row v-if="screenWidth < 770" class="position-relative">
            <h1 class="main-page-section4__hero-title2">1</h1>
            <h3 class="main-page-section4__subtitle21-box position-absolute">
                <div class="main-page-section4__subtitle21">
                    <span class="main-page-section4__subtitle21-span0"
                    >Подбираем</span
                    ><span class="main-page-section4__subtitle21-span1">
                    ВУЗ индивидуально под ваши предпочтения</span
                    >
                </div>
            </h3>
        </b-row>
        <b-row v-if="screenWidth < 770" class="position-relative">
            <h1 class="main-page-section4__hero-title2">2</h1>
            <h3 class="main-page-section4__subtitle21-box position-absolute">
                <div class="main-page-section4__subtitle21">
                    <span class="main-page-section4__subtitle21-span0"
                    >Отправляем документы</span
                    ><span class="main-page-section4__subtitle21-span1">
                    в выбранный Вами университет Турции</span
                    >
                </div>
            </h3>
        </b-row>
        <b-row v-if="screenWidth < 770" class="position-relative">
            <h1 class="main-page-section4__hero-title2">3</h1>
                <h3 class="main-page-section4__subtitle21-box position-absolute">
                <div class="main-page-section4__subtitle21">
                    <span class="main-page-section4__subtitle21-span1">
                    Предоставляем Вам</span
                    >
                    <span class="main-page-section4__subtitle21-span0"
                    > приглашение</span
                    ><span class="main-page-section4__subtitle21-span1">
                    от ВУЗа на имя студента</span
                    >
                </div>
            </h3>
        </b-row>
        <b-row v-if="screenWidth < 770" class="position-relative">
            <h1 class="main-page-section4__hero-title2">4</h1>
            <h3 class="main-page-section4__subtitle21-box position-absolute">
                <div class="main-page-section4__subtitle21">
                    <span class="main-page-section4__subtitle21-span1">
                    Сопровождаем и проводим </span
                    >
                    <span class="main-page-section4__subtitle21-span0"
                    >инструктаж</span
                    ><span class="main-page-section4__subtitle21-span1">
                    студентов в ВУЗе</span
                    >
                </div>
            </h3>
        </b-row>
        <b-row v-if="screenWidth < 770" class="position-relative">
            <h1 class="main-page-section4__hero-title2">5</h1>
                <h3 class="main-page-section4__subtitle21-box position-absolute">
                    <div class="main-page-section4__subtitle21">
                        <span class="main-page-section4__subtitle21-span1">
                        Предоставляем отчет об </span
                        >
                        <span class="main-page-section4__subtitle21-span0"
                        >успеваемости</span
                        ><span class="main-page-section4__subtitle21-span1">
                        каждого студента</span
                        >
                    </div>
                </h3>
        </b-row>
        <b-row v-if="screenWidth < 770" class="position-relative">
            <h1 class="main-page-section4__hero-title2">6</h1>
                <h3 class="main-page-section4__subtitle21-box position-absolute">
                    <div class="main-page-section4__subtitle21">
                        <span class="main-page-section4__subtitle21-span1">
                        Оказываем</span
                        >
                        <span class="main-page-section4__subtitle21-span0"
                        > поддержку</span
                        ><span class="main-page-section4__subtitle21-span1">
                        на весь период обучения</span
                        >
                    </div>
                </h3>
        </b-row>
        <button class="main-page-section4__block17">
            <h5 class="main-page-section4__highlights5">
                Подобрать лучший университет
            </h5>
        </button>
</b-container>
</div>
</template>

<script>
export default {
    name: "ThirdSection",
    data () {
        return {}
    },
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