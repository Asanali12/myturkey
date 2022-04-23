<template>
<div>
    <b-container fluid class="icons-div" v-if="screenWidth > 740">
        <div>
            <h2 class="main-page-section10__medium-title">
                Что получают студенты от учебы за рубежом?
            </h2>
            <b-row style="margin-top: 56px">
                <b-col>
                    <img src="@/assets/Frame 99.png" alt="couldn't load">
                    <h3 class="main-page-section10__subtitle1">
                        Бесценный опыт
                    </h3>
                </b-col>
                <b-col>
                    <img src="@/assets/Frame 102.png" alt="couldn't load">
                    <h3 class="main-page-section10__subtitle1">
                        Критическое мышление
                    </h3>
                </b-col>
                <b-col>
                    <img src="@/assets/Frame 103.png" alt="couldn't load">
                    <h3 class="main-page-section10__subtitle1">
                        Страсть к обучению
                    </h3>
                </b-col>
                <b-col>
                    <img src="@/assets/Frame 104.png" alt="couldn't load">
                    <h3 class="main-page-section10__subtitle1">
                        Студенческий досуг
                    </h3>
                </b-col>
            </b-row>
            <b-row style="margin-top: 80px">
                <b-col>
                    <img src="@/assets/Frame 98.png" alt="couldn't load">
                    <h3 class="main-page-section10__subtitle1">
                        Независимость
                    </h3>
                </b-col>
                <b-col>
                    <img src="@/assets/Frame 100.png" alt="couldn't load">
                    <h3 class="main-page-section10__subtitle1">
                        Уверенность
                    </h3>
                </b-col>
                <b-col>
                    <img src="@/assets/Frame 101.png" alt="couldn't load">
                    <h3 class="main-page-section10__subtitle1">
                        Образовательный туризм
                    </h3>
                </b-col>
            </b-row>
        </div>
    </b-container>


    <b-container fluid class="icons-div-mobile" v-if="screenWidth <= 740">
        <div>
            <h2 class="main-page-section10__medium-title">
                Что получают студенты от учебы за рубежом?
            </h2>
            <b-row style="margin-top: 56px">
                <b-col style="margin-top: 16px">
                    <img src="@/assets/Frame 99.png" alt="couldn't load">
                    <h3 class="main-page-section10__subtitle1">
                        Бесценный опыт
                    </h3>
                </b-col>
                <b-col style="margin-top: 16px">
                    <img src="@/assets/Frame 102.png" alt="couldn't load">
                    <h3 class="main-page-section10__subtitle1">
                        Критическое мышление
                    </h3>
                </b-col>
                <b-col style="margin-top: 16px">
                    <img src="@/assets/Frame 103.png" alt="couldn't load">
                    <h3 class="main-page-section10__subtitle1">
                        Страсть к обучению
                    </h3>
                </b-col>
                <b-col style="margin-top: 16px">
                    <img src="@/assets/Frame 104.png" alt="couldn't load">
                    <h3 class="main-page-section10__subtitle1">
                        Студенческий досуг
                    </h3>
                </b-col>
            </b-row>
            <b-row>
                <b-col style="margin-top: 16px">
                    <img src="@/assets/Frame 98.png" alt="couldn't load">
                    <h3 class="main-page-section10__subtitle1">
                        Независимость
                    </h3>
                </b-col>
                <b-col style="margin-top: 16px">
                    <img src="@/assets/Frame 100.png" alt="couldn't load">
                    <h3 class="main-page-section10__subtitle1">
                        Уверенность
                    </h3>
                </b-col>
                <b-col style="margin-top: 16px; margin-bottom: 64px">
                    <img src="@/assets/Frame 101.png" alt="couldn't load">
                    <h3 class="main-page-section10__subtitle1">
                        Образовательный туризм
                    </h3>
                </b-col>
            </b-row>
        </div>
    </b-container>

</div>
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