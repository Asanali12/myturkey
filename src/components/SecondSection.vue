<template>
<div>
    <div class="main-page-section2__cover">
        <div class="text-container px-0">
            <h1 class="main-page-section3__big-title1-box ">
                <div class="main-page-section3__big-title1">
                    <span class="main-page-section3__big-title1-span0">
                        Что такое
                    </span>
                    <span class="main-page-section3__big-title1-span1">
                        Foundation
                    </span>
                    <span class="main-page-section3__big-title1-span2">
                        ?
                    </span>
                </div>
            </h1>
            <h5 class="main-page-section3__highlights6" style="margin-top: 8px">
                И почему его надо пройти для зачисления на бесплатное обучение
            </h5>
        </div>
        
    </div>
    <div style="width: 89%; margin-left: 5.5%; margin-top: 74px">
        <b-container fluid>
            <b-row>
                <b-col cols="7">
                    <b-row>
                        <b-col cols="1">
                            <b-row>
                                <b-col cols="6">
                                    <img src="@/assets/20632564b0554d2ab2d6ccae26143d9f.png" alt="can't load" class="main-page-section3__image4 layout2">
                                </b-col>
                                <b-col cols="6">
                                    <img src="@/assets/20632564b0554d2ab2d6ccae26143d9f.png" alt="can't load" class="main-page-section3__image4 layout2">
                                </b-col>
                            </b-row>
                        </b-col>
                        <b-col>
                            <h5 class="main-page-section3__highlights7">
                                Для того чтобы поступить в Университеты Турции, нужно знать турецкий язык и иметь сертификат TOMER уровня С1. Для этого наша компания предлагает вам два варианта получения этого сертификата.
                                Это онлайн программа Tomer + Обучение в Турции, после которого вы будете гарантированно зачислены в университеты с которыми мы сотрудничаем, без каких либо экзаменов (по аттестату). 
                                И так же у нас есть оффлайн программа изучения турецкого языка при EGE University в городе Измир.  
                                Работая с нами, вы можете быть уверены, что мы найдем лучшее и наиболее оригинальное решение именно для вас. Мы стремимся не терять времени даром, но при этом не торопимся в ущерб результату. Вы успеете ко всем дедлайнам.
                            </h5>
                            <h5 class="main-page-section3__highlights8">
                                Заместитель директора компании My Turkey
                            </h5>
                        </b-col>
                        <b-col cols="1">
                            
                        </b-col>
                    </b-row>
                </b-col>
                <b-col cols="4">
                    <youtube :video-id="videoId"></youtube>
                </b-col>
            </b-row>
        </b-container>
    </div>
</div>
</template>

<script>
export default {
    data () {
        return {
            videoId: null
        }
    },
    mounted () {
        this.videoId = this.$youtube.getIdFromURL("https://www.youtube.com/watch?v=Khe5wgCfqzY")
    }
}
</script>

<style>

</style>