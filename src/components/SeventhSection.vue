<template>
<b-container fluid style="background-color: #F8F9FC; padding-bottom: 64px">
    <div style="width: 95%; margin-left: 2.5%">
        <b-row>
            <b-col class="text-left">
                <h2 class="main-page-section8__medium-title1">
                    Лучшие города для обучения в Турции
                </h2>
                <div class="main-page-section8__block35 layout" style="margin-top: 32px;">
                    <div class="d-flex justify-content-center">
                        <img src="@/assets/Frame 151.png" alt="couldn't load">
                    </div>
                </div>
            </b-col>
            <b-col class="text-left pl-0">
                <h2 class="main-page-section8__medium-title1">
                    Подробнее про города и университеты
                </h2>
                <div style="margin-top: 32px; width: 640px">
                    <youtube :video-id="videoId"></youtube>
                </div>
            </b-col>
        </b-row>
    </div>
</b-container>  
</template>

<script>
export default {
    data () {
        return {
            videoId: null
        }
    },
    mounted () {
        this.videoId = this.$youtube.getIdFromURL("https://www.youtube.com/watch?v=LR1eFhe1thM")
    }
}
</script>

<style>

</style>