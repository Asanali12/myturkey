<template>
  <div id="app">
    <Header :screenWidth="$vssWidth"/>
    <FirstSection :screenWidth="$vssWidth"/>
    <SecondSection :screenWidth="$vssWidth"/>
    <ThirdSection :screenWidth="$vssWidth"/>
    <VideoSection/>
    <FifthSection :screenWidth="$vssWidth"/>
    <SixthSection :screenWidth="$vssWidth"/>
    <SeventhSection :screenWidth="$vssWidth"/>
    <EighthSection :screenWidth="$vssWidth"/>
    <NinethSection :screenWidth="$vssWidth"/>
    <TenthSection/>
    <EleventhSection :screenWidth="$vssWidth"/>
    <TwelvethSection :screenWidth="$vssWidth"/>
  </div>
</template>

<script>
import Header from './Header.vue'
import FirstSection from './FirstSection.vue'
import SecondSection from './SecondSection.vue'
import ThirdSection from './ThirdSection.vue'
import FifthSection from './FifthSection.vue'
import SixthSection from './SixthSection.vue'
import SeventhSection from './SeventhSection.vue'
import EighthSection from './EighthSection.vue'
import NinethSection from './NinethSection.vue'
import TenthSection from './TenthSection.vue'
import EleventhSection from './EleventhSection.vue'
import TwelvethSection from './TwelvethSection.vue'
import VideoSection from './VideoSection.vue'

export default {
  name: 'App',
  components: {
    Header,
    FirstSection,
    SecondSection,
    ThirdSection,
    FifthSection,
    SixthSection,
    SeventhSection,
    EighthSection,
    NinethSection,
    TenthSection,
    EleventhSection,
    TwelvethSection,
    VideoSection
  },
  mounted(){
    console.log("CHECK")
    console.log(this.$vssWidth)
  },
  methods:{
    onLanguageChange(){
      this.$emit()//add parameters
    },
    
    onCallOrder(){
      this.$emit()//add parameters
    }
  }
}
</script>

<style>
</style>
