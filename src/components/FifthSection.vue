<template>
<b-container fluid style="margin-top: 128px; width: 80%" class="text-center">
    <h1 class="main-page-section6__big-title2 layout">
        Популярные университеты
    </h1>
    <b-row style="margin-top: 32px;" v-if="screenWidth >= 1350">
        <b-col cols="4">
            <b-card style="padding: 0;">

                <div style="width:100%; height: 358px; overflow: hidden">
                    <b-img :src="require('@/assets/11ba5e60a698e6eaa769d1c4aa1fb114.png')" alt="Responsive image"></b-img>
                </div>
                
                <b-card-text>
                    <b-row style="height: 54px" align-v="center">
                        <b-col>
                            Marmara Universitesi
                        </b-col>
                        <b-col>
                            <a href="#main-lead-form">
                                <h5 class="main-page-section6__highlights5">
                                    Узнать стоимость
                                </h5>
                            </a>
                        </b-col>
                    </b-row>
                </b-card-text>
            </b-card>
        </b-col>
        <b-col cols="4">
            <b-card style="padding: 0" >
                <div style="width:100%; height: 358px; overflow: hidden">
                    <b-img :src="require('@/assets/31438616e22b2303f6520d2e24c98097.png')" alt="Responsive image" style="width:100%;"></b-img>
                </div>
                
                <b-card-text>
                    <b-row style="height: 54px" align-v="center">
                        <b-col>
                            Dokuz Eylul Universitesi
                        </b-col>
                        <b-col>
                            <a href="#main-lead-form">
                                <h5 class="main-page-section6__highlights5">
                                    Узнать стоимость
                                </h5>
                            </a>
                        </b-col>
                    </b-row>
                </b-card-text>
            </b-card>
        </b-col>
        <b-col cols="4">
            <b-card style="padding: 0">
                <div style="width:100%; height: 358px; overflow: hidden">
                    <b-img :src="require('@/assets/fe2889c5205fc994323f68314c77600a.png')" alt="Responsive image" style="width:100%;"></b-img>
                </div>
                
                <b-card-text>
                    <b-row style="height: 54px" align-v="center">
                        <b-col>
                            Ege University
                        </b-col>
                        <b-col>
                            <a href="#main-lead-form" class="price-link main-page-section6__highlights5">
                                Узнать стоимость
                            </a>
                        </b-col>
                    </b-row>
                </b-card-text>
            </b-card>
        </b-col>
    </b-row>
    <b-container style="width: 60%" v-if="screenWidth < 1350 && screenWidth >= 800">
        <b-row>
        <b-card style="padding: 0;">

                <div style="width:100%; height: 358px; overflow: hidden">
                    <b-img :src="require('@/assets/11ba5e60a698e6eaa769d1c4aa1fb114.png')" alt="Responsive image"></b-img>
                </div>
                
                <b-card-text>
                    <b-row style="height: 54px" align-v="center">
                        <b-col>
                            Marmara Universitesi
                        </b-col>
                        <b-col>
                            <a href="#main-lead-form">
                                <h5 class="main-page-section6__highlights5">
                                    Узнать стоимость
                                </h5>
                            </a>
                        </b-col>
                    </b-row>
                </b-card-text>
            </b-card>
    </b-row>
    <b-row>
        <b-card style="padding: 0" >
                <div style="width:100%; height: 358px; overflow: hidden">
                    <b-img :src="require('@/assets/31438616e22b2303f6520d2e24c98097.png')" alt="Responsive image"></b-img>
                </div>
                
                <b-card-text>
                    <b-row style="height: 54px" align-v="center">
                        <b-col>
                            Dokuz Eylul Universitesi
                        </b-col>
                        <b-col>
                            <a href="#main-lead-form">
                                <h5 class="main-page-section6__highlights5">
                                    Узнать стоимость
                                </h5>
                            </a>
                        </b-col>
                    </b-row>
                </b-card-text>
            </b-card>
    </b-row>
    <b-row>
        <b-card style="padding: 0">
                <div style="width:100%; height: 358px; overflow: hidden">
                    <b-img :src="require('@/assets/fe2889c5205fc994323f68314c77600a.png')" alt="Responsive image"></b-img>
                </div>
                
                <b-card-text>
                    <b-row style="height: 54px" align-v="center">
                        <b-col>
                            Ege University
                        </b-col>
                        <b-col>
                            <a href="#main-lead-form" class="price-link main-page-section6__highlights5">
                                Узнать стоимость
                            </a>
                        </b-col>
                    </b-row>
                </b-card-text>
            </b-card>
    </b-row>
    </b-container>

    <b-container style="width: 100%" v-if="screenWidth < 800">
        <b-row>
        <b-card style="padding: 0;">

                <div style="width:100%; height: 358px; overflow: hidden">
                    <b-img :src="require('@/assets/11ba5e60a698e6eaa769d1c4aa1fb114.png')" alt="Responsive image"></b-img>
                </div>
                
                <b-card-text>
                    <b-row style="height: 54px" align-v="center">
                        <b-col>
                            Marmara Universitesi
                        </b-col>
                        <b-col>
                            <a href="#main-lead-form">
                                <h5 class="main-page-section6__highlights5">
                                    Узнать стоимость
                                </h5>
                            </a>
                        </b-col>
                    </b-row>
                </b-card-text>
            </b-card>
    </b-row>
    <b-row>
        <b-card style="padding: 0" >
                <div style="width:100%; height: 358px; overflow: hidden">
                    <b-img :src="require('@/assets/31438616e22b2303f6520d2e24c98097.png')" alt="Responsive image"></b-img>
                </div>
                
                <b-card-text>
                    <b-row style="height: 54px" align-v="center">
                        <b-col>
                            Dokuz Eylul Universitesi
                        </b-col>
                        <b-col>
                            <a href="#main-lead-form">
                                <h5 class="main-page-section6__highlights5">
                                    Узнать стоимость
                                </h5>
                            </a>
                        </b-col>
                    </b-row>
                </b-card-text>
            </b-card>
    </b-row>
    <b-row>
        <b-card style="padding: 0">
                <div style="width:100%; height: 358px; overflow: hidden">
                    <b-img :src="require('@/assets/fe2889c5205fc994323f68314c77600a.png')" alt="Responsive image"></b-img>
                </div>
                
                <b-card-text>
                    <b-row style="height: 54px" align-v="center">
                        <b-col>
                            Ege University
                        </b-col>
                        <b-col>
                            <a href="#main-lead-form" class="price-link main-page-section6__highlights5">
                                Узнать стоимость
                            </a>
                        </b-col>
                    </b-row>
                </b-card-text>
            </b-card>
    </b-row>
    </b-container>
    
</b-container>
</template>

<script>
export default {
    name: "FifthSection",
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