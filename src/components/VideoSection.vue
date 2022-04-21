<template>
    <b-container class="position-relative">
        <h1 class="main-page-section5__big-title2 layout">
            Видеообзоры от наших студентов
        </h1>
        <h5 class="main-page-section5__highlights6 layout">
            Лучшие таланты поступают через нашу компанию!
        </h5>
        <img src="@/assets/Rectangle 295.png" alt="couldn't load" class="video-section-container" >
        <b-row style="margin-top: 16px">
            <b-col>
                <div class="video-div">
                    <youtube :video-id="firstVideoId" :fitParent="true"></youtube>
                    <div class="video-description">
                        <span class="main-page-section4__subtitle2-span0">
                            Собираемся вместе с
                        </span>
                        <span class="main-page-section4__subtitle2-span1">
                            @shakentii</span>
                        <span class="main-page-section4__subtitle2-span2">
                            на обучение в Турцию. Все глазами студента Шако!
                        </span>
                    </div>
                </div>
            </b-col>
            <b-col>
                <div class="video-div">
                    <youtube :video-id="secondVideoId" :fitParent="true"></youtube>
                    <div class="video-description">
                        <span class="main-page-section4__subtitle2-span0">
                            Хотите учиться в Измире (Турция)? Это дешевле прежнего!
                        </span>
                    </div>
                </div>
            </b-col>
        </b-row>
        <b-row style="margin-top: 16px">
            <b-col>
                <div class="video-div">
                    <youtube :video-id="thirdVideoId" :fitParent="true"></youtube>
                    <div class="video-description">
                        <span class="main-page-section4__subtitle2-span0">
                            EGE University 2019 поступи и ты в престижный ВУЗ Турции!
                        </span>
                    </div>
                </div>
            </b-col>
            <b-col>
                <div class="video-div">
                    <youtube :video-id="sixthVideoId" :fitParent="true"></youtube>
                    <div class="video-description">
                        <span class="main-page-section4__subtitle2-span0">
                            Хотите учиться в Измире (Турция)? Это дешевле прежнего!
                        </span>
                    </div>
                </div>
            </b-col>
        </b-row>
        <div>
            <h2 class="main-page-section5__medium-title">
                Отзывы наших студентов
            </h2>
            <h5 class="main-page-section5__highlights4">
                Лучшие таланты поступают через нашу компанию!
            </h5>
        </div>
        <b-row>
            <b-col>
                <div class="video-div">
                    <youtube :video-id="fourthVideoId" :fitParent="true"></youtube>
                    <div class="video-description">
                        <span class="main-page-section4__subtitle2-span0">
                           Отзыв студентки Дуйсенгазы Бота и почему она выбрала обучение в Турции!
                        </span>
                        <span class="main-page-section4__subtitle2-span1">
                            @My_Turkey.kz #myturkey #izmir #egeuniversity
                        </span>
                    </div>
                </div>
            </b-col>
            <b-col>
                <div class="video-div">
                    <youtube :video-id="fifthVideoId" :fitParent="true"></youtube>
                    <div class="video-description">
                        <span class="main-page-section4__subtitle2-span0">
                            Отзыв Динары и почему она выбрала обучение в Турции! 
                        </span>
                        <span class="main-page-section4__subtitle2-span1">
                            @My_Turkey.kz #myturkey #izmir #egeuniversity
                        </span>
                    </div>
                </div>
            </b-col>
        </b-row>
    </b-container>
</template>

<script>
export default {
    data () {
        return {
            firstVideoId: null,
            secondVideoId: null,
            thirdVideoId: null,
            fourthVideoId: null,
            fifthVideoId: null,
        }
    },
    mounted () {
        this.firstVideoId = this.$youtube.getIdFromURL("https://www.youtube.com/watch?v=PYyIdQ8CHtg")
        this.secondVideoId = this.$youtube.getIdFromURL("https://www.youtube.com/watch?v=fGQjLCt8q0w")
        this.thirdVideoId = this.$youtube.getIdFromURL("https://www.youtube.com/watch?v=AXuhjbR1-Y8")
        this.fourthVideoId = this.$youtube.getIdFromURL("https://www.youtube.com/watch?v=irwT7MDOoO8")
        this.fifthVideoId = this.$youtube.getIdFromURL("https://www.youtube.com/watch?v=DDp9hjHzTCI")
        this.sixthVideoId = this.$youtube.getIdFromURL("https://www.youtube.com/watch?v=T8emktqkaew")
    }
}
</script>

<style>

</style>