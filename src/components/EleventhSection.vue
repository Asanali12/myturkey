<template>
    <b-container style="margin-top: 128px; padding-bottom: 64px">
        <h1 class="main-page-section12__big-title2">
            Работаем по всем городам Казахстана
        </h1>
        <h5 class="main-page-section12__highlights11-box" style="margin-top: 13px">
            <span class="main-page-section12__highlights11-span0">
                Со всего Казахстана через MyTurkey было отправлено в Турцию
            </span>
            <span class="main-page-section12__highlights11-span1">
            720 студентов
            </span>
        </h5>
        <img src="@/assets/Frame 46.png" alt="couldn't load" style="width: 80%" class="branches-img" v-if="screenWidth > 700">
        <img src="@/assets/Frame 46.png" alt="couldn't load" style="width: 100%" class="branches-img" v-if="screenWidth <= 700">
    </b-container>
</template>

<script>
export default {
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