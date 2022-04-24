<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  components: {},
  mounted() {
    console.log("CHECK")
  },
  methods: {}
}
</script>

<style>
::placeholder {
  color: #909EBB;
}


.video-section-container {
  position: absolute;
  top: 700px;
  left: 0;
  z-index: -100;
}


iframe {
  width: 100%;
}

textarea {
  all: unset
}

.video-description {
  text-align: left
}

.video-div {
  background-color: #EFF2F4;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  padding-right: 16px;
  padding-left: 16px;
  padding-top: 16px;
  min-height: 440px
}

.branches-img {
  width: 70%;
  height: auto
}

.contacts-item {
  width: 100%;
  display: flex;
  justify-content: flex-start;
  margin-bottom: 18px;
}

.contacts-items {
  margin-top: 24px;
  width: 100%
}

.contacts-item-img-email {
  height: 22px;
  width: 24px
}

.contacts-item-img-marker {
  height: 24px;
  width: 20.11px
}

.contacts-item-img-phone {
  height: 24px;
  width: 16px
}

.icons-div {
  width: 95% !important;
  background-image: url("./assets/c17f6d2238a704db610fdc6507af403b.png");
  background-repeat: no-repeat;
  background-size: 100% 100% !important;
  margin-left: 2.5%;
  height: 627.5px;
  padding-top: 160.5px
}

.icons-div-mobile{
  width: 95% !important;
  background-color: #0BBFB8;
  margin-left: 2.5%;
  min-height: 627.5px;
  padding-top: 160.5px;
  border-radius: 60px
}

a {
  text-decoration: none !important;
}

.price-link {
  text-decoration: none !important;
}

.text-container {
  position: relative;
  -moz-transform: translateX(-50%) translateY(-50%);
  -webkit-transform: translateX(-50%) translateY(-50%);
  transform: translateX(-50%) translateY(-50%);
}

.main-form-div {
  margin-left: 5%;
  margin-top: 54px;
}

button {
  all: unset
}

input {
  all: unset
}

.no-style-link {
  text-decoration: none;
}


.brand-logo {
  margin-left: 20px;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  overflow: hidden
}


/* This source code is exported from pxCode, you can get more document from https://www.pxcode.io */
.main-page-main {
  display: flex;
  flex-direction: column;
  background-color: white;
}

.main-page-main.layout {
  position: relative;
  overflow: hidden;
  min-height: 8674px;
  flex-shrink: 0;
}

.main-page-section1__section1 {
  display: flex;
  flex-direction: column;
}

.main-page-section1__section1.layout {
  position: relative;
  height: -webkit-min-content;
  height: -moz-min-content;
  height: min-content;
}

.main-page-section1__block61 {
  background-color: white;
  box-shadow: 0px 4px 8px 0px rgba(0, 0, 0, 0.027451);
  margin: 12px 20px;
  height: 68px;
}

.main-page-section1__flex {
  display: flex;
}

.main-page-section1__flex.layout {
  position: relative;
  height: -webkit-min-content;
  height: -moz-min-content;
  height: min-content;
  margin: 12px 20px;
}

.main-page-section1__flex-item {
  display: flex;
  flex-direction: column;
  position: relative;
  flex: 0 1 108px;
}

.main-page-section1__image43.layout {
  height: 24px;
  width: 108px;
  min-width: 108px;
  margin: 10px 0px;
}

.main-page-section1__flex-spacer {
  flex: 0 1 854px;
}

.main-page-section1__flex-item1 {
  display: flex;
  flex-direction: column;
  position: relative;
  flex: 0 1 68px;
}

.main-page-section1__block62 {
  display: flex;
  flex-direction: column;
  background-color: white;
  border-radius: 10px 10px 10px 10px;
}

.main-page-section1__block62.layout {
  position: relative;
  overflow: hidden;
  height: -webkit-min-content;
  height: -moz-min-content;
  height: min-content;
}

.main-page-section1__flex1 {
  display: flex;
}

.main-page-section1__flex1.layout {
  position: relative;
  height: -webkit-min-content;
  height: -moz-min-content;
  height: min-content;
  margin: 11px 0px;
}

.main-page-section1__flex1-item {
  display: flex;
  flex-direction: column;
  position: relative;
  flex: 0 1 20px;
}

.main-page-section1__cover-group {
  display: flex;
  flex-direction: column;
  background: var(--src) center center/contain no-repeat;
  background-color: white;
}

.main-page-section1__cover-group.layout {
  position: relative;
  height: 14px;
  margin: 4px 0px;
}

.main-page-section1__flex1-spacer {
  flex: 0 1 10px;
}

.main-page-section1__highlights6 {
  font: 600 16px/1.2 "Open Sans", Helvetica, Arial, serif;
  color: #363745;
  letter-spacing: 0px;
}

.main-page-section1__highlights6.layout {
  position: relative;
  flex: 0 0 auto;
  height: -webkit-min-content;
  height: -moz-min-content;
  height: min-content;
  margin: 0px 0px 2px;
}

.main-page-section1__flex1-spacer1 {
  flex: 0 1 28px;
}

.main-page-section1__flex1-item1 {
  display: flex;
  flex-direction: column;
  position: relative;
  flex: 0 1 268px;
}

.main-page-section1__block63 {
  display: flex;
  flex-direction: column;
  background-color: #bf0b12;
  border-radius: 21px 21px 21px 21px;
  width: 100%;
  margin: 0 0 0 0;
  border-width: 0
}

.main-page-section1__block63.layout {
  height: -webkit-min-content;
  height: -moz-min-content;
  height: min-content;
  width: 100%;
}

.main-page-section1__highlights4 {
  font: 600 16px/1.2 "Open Sans", Helvetica, Arial, serif;
  color: white;
  letter-spacing: 0px;
}

.main-page-section1__highlights4.layout {
  position: relative;
  height: -webkit-min-content;
  height: -moz-min-content;
  height: min-content;
  margin: 10px 20px 12px 24px;
}

.main-page-section2__section2 {
  display: flex;
  flex-direction: column;
}

.main-page-section2__section2.layout {
  position: relative;
  height: -webkit-min-content;
  height: -moz-min-content;
  height: min-content;
}

.main-page-section2__icon {
  background: var(--src) center center/contain no-repeat;
  width: 100%;
  height: 100%;
}

.main-page-section2__block1 {
  display: flex;
  flex-direction: column;
}

.main-page-section2__block1.layout {
  min-height: 300px;
}

.main-page-section2__decorator {
  background: var(--src) center center/contain no-repeat;
}

.main-page-section2__decorator.layout {
  position: absolute;
  top: 0px;
  height: 208px;
  left: -144px;
  width: 414px;
}

.main-page-section2__hero-title-box.layout {
  height: -webkit-min-content;
  height: -moz-min-content;
  height: min-content;
  min-width: 0px;
  width: -webkit-fit-content;
  width: -moz-fit-content;
  width: fit-content;
  text-align: left
}

.main-page-section2__hero-title {
  font: 700 36px/1.2 "Open Sans", Helvetica, Arial, serif;
  color: black;
  letter-spacing: 0px;
}

.main-page-section2__hero-title-span0 {
  font: 700 1em/1.2 "Open Sans", Helvetica, Arial, serif;
  color: #bf0b12ff;
  letter-spacing: 0px;
}

.main-page-section2__hero-title-span1 {
  font: 700 1em/1.2 "Open Sans", Helvetica, Arial, serif;
  color: #363745ff;
  letter-spacing: 0px;
}

.main-page-section2__hero-title-span2 {
  font: 700 1em/1.2 "Open Sans", Helvetica, Arial, serif;
  color: #bf0b12ff;
  letter-spacing: 0px;
}

.main-page-section2__hero-title1 {
  font: 700 36px/1.2 "Open Sans", Helvetica, Arial, serif;
  color: #363745;
  letter-spacing: 0px;
}

.main-page-section2__hero-title1.layout {
  height: -webkit-min-content;
  height: -moz-min-content;
  height: min-content;
  min-width: 0px;
  width: -webkit-fit-content;
  width: -moz-fit-content;
  width: fit-content;
}

.main-page-section2__subtitle-box.layout {
  height: -webkit-min-content;
  height: -moz-min-content;
  height: min-content;
  width: auto;
  text-align: left
}

.main-page-section2__subtitle {
  overflow: visible;
  margin-top: 0px;
  margin-bottom: 0px;
  margin: 0px;
  font: 600 20px/1.2 "Open Sans", Helvetica, Arial, serif;
  color: #61637b;
  letter-spacing: 0px;
  white-space: pre-wrap;
}

.main-page-section2__icon1 {
  height: 20px;
  left: 64px;
  width: 20px;
}

.main-page-section2__highlights {
  display: flex;
  justify-content: center;
  font: 600 16px/1.2 "Open Sans", Helvetica, Arial, serif;
  color: #0bbfb8;
  text-align: left;
  letter-spacing: 0px;
}

.main-page-section2__highlights.layout {
  position: absolute;
  top: 245px;
  height: -webkit-min-content;
  height: -moz-min-content;
  height: min-content;
  min-width: 0px;
  right: 1042px;
  width: -webkit-fit-content;
  width: -moz-fit-content;
  width: fit-content;
}

.main-page-section2__icon2 {
  height: 20px;
  width: 20px;
}

.main-page-section2__highlights.layout1 {
  position: absolute;
  top: 245px;
  height: -webkit-min-content;
  height: -moz-min-content;
  height: min-content;
  min-width: 0px;
  right: 863px;
  width: -webkit-fit-content;
  width: -moz-fit-content;
  width: fit-content;
}

.main-page-section2__icon3 {
  height: 20px;
  width: 20px;
}

.main-page-section2__highlights.layout2 {
  position: absolute;
  top: 283px;
  height: -webkit-min-content;
  height: -moz-min-content;
  height: min-content;
  min-width: 0px;
  right: 976px;
  width: -webkit-fit-content;
  width: -moz-fit-content;
  width: fit-content;
}

.main-page-section2__highlights1 {
  font: 600 16px/1.2 "Open Sans", Helvetica, Arial, serif;
  color: #61637b;
  letter-spacing: 0px;
}

.main-page-section2__highlights1.layout {
  position: absolute;
  top: 369px;
  height: -webkit-min-content;
  height: -moz-min-content;
  height: min-content;
  left: 64px;
  min-width: 0px;
  width: -webkit-fit-content;
  width: -moz-fit-content;
  width: fit-content;
}

.main-page-section2__block2 {
  flex-direction: column;
  background-color: #fff5f5;
  border-radius: 10px 10px 10px 10px;
  height: 58px;
  width: 57px;
}

.main-page-section2__image {
  background: var(--src) center center/contain no-repeat;
}

.main-page-section2__image.layout {
  position: absolute;
  top: 19px;
  height: 21px;
  left: 13px;
  width: 31px;
}

.main-page-section2__icon11 {
  background: var(--src) center center/contain no-repeat;
}

.main-page-section2__icon11.layout {
  padding: 0;

  position: absolute;
  top: 428px;
  height: 4px;
  left: 137px;
  width: 4px;
}

.main-page-section2__icon12 {
  background: var(--src) center center/contain no-repeat;
}

.main-page-section2__icon12.layout {
  padding: 0;

  position: absolute;
  top: 440px;
  height: 4px;
  left: 137px;
  width: 4px;
}

.main-page-section2__block2.layout1 {
  position: absolute;
  overflow: hidden;
  top: 407px;
  height: 58px;
  left: 157px;
  width: 57px;
}

.main-page-section2__icon13 {
  background: var(--src) center center/contain no-repeat;
}

.main-page-section2__icon13.layout {
  padding: 0;

  position: absolute;
  top: 428px;
  height: 4px;
  left: 230px;
  width: 4px;
}

.main-page-section2__icon14 {
  background: var(--src) center center/contain no-repeat;
}

.main-page-section2__icon14.layout {
  padding: 0;

  position: absolute;
  top: 440px;
  height: 4px;
  left: 230px;
  width: 4px;
}

.main-page-section2__block2.layout2 {
  position: absolute;
  overflow: hidden;
  top: 407px;
  height: 58px;
  left: 250px;
  width: 57px;
}

.main-page-section2__text-body {
  display: flex;
  justify-content: center;
  font: 14px/1.2 "Open Sans", Helvetica, Arial, serif;
  color: #85879f;
  text-align: center;
  letter-spacing: 0px;
}

.main-page-section2__text-body.layout {
  position: absolute;
  top: 465px;
  height: -webkit-min-content;
  height: -moz-min-content;
  height: min-content;
  left: 73px;
  width: 39px;
}

.main-page-section2__text-body.layout1 {
  position: absolute;
  top: 465px;
  height: -webkit-min-content;
  height: -moz-min-content;
  height: min-content;
  left: 167.5px;
  width: 36px;
}

.main-page-section2__text-body.layout2 {
  position: absolute;
  top: 465px;
  height: -webkit-min-content;
  height: -moz-min-content;
  height: min-content;
  left: 254.5px;
  width: 48px;
}

.main-page-section2__block3 {
  display: flex;
  flex-direction: column;
  background-color: white;
  border: 1px solid #e4e7f2;
  border-radius: 23px 23px 23px 23px;
  height: 46px;
  width: 100%;
  text-align: left;
  font: 16px/1.2 "Open Sans", Helvetica, Arial, serif;
  padding-left: 12px
}

.main-page-section2__highlights2 {
  font: 16px/1.2 "Open Sans", Helvetica, Arial, serif;
  color: #909ebb;
  letter-spacing: 0px;
}

.main-page-section2__highlights2.layout {
  position: absolute;
  top: 12px;
  height: -webkit-min-content;
  height: -moz-min-content;
  height: min-content;
  left: 16px;
  width: 82px;
}

.main-page-section2__block4 {
  display: flex;
  flex-direction: column;
  background-color: white;
  border: 1px solid #e4e7f2;
  border-radius: 22px 22px 22px 22px;
}

.main-page-section2__block4.layout {
  position: absolute;
  top: 508px;
  height: 44px;
  left: 307px;
  width: 219px;
}

.main-page-section2__highlights3 {
  font: 16px/1.25 "IBM Plex Sans", Helvetica, Arial, serif;
  color: #909ebb;
  letter-spacing: 0px;
}

.main-page-section2__highlights3.layout {
  position: absolute;
  top: 12px;
  height: -webkit-min-content;
  height: -moz-min-content;
  height: min-content;
  left: 16px;
  width: 131px;
}

.main-page-section2__block5 {
  display: flex;
  flex-direction: column;
  background-color: #bf0b12;
  border-radius: 21px 21px 21px 21px;
}

.main-page-section2__block5.layout {
  position: absolute;
  top: 510px;
  height: 42px;
  left: 558px;
  width: 183px;
}

.main-page-section2__highlights4 {
  font: 600 16px/1.2 "Open Sans", Helvetica, Arial, serif;
  color: white;
  letter-spacing: 0px;
}

.main-page-section2__highlights4.layout {
  position: absolute;
  top: 10px;
  height: -webkit-min-content;
  height: -moz-min-content;
  height: min-content;
  left: 24px;
  min-width: 0px;
  width: -webkit-fit-content;
  width: -moz-fit-content;
  width: fit-content;
}

.main-page-section2__text-body1 {
  font: 14px/1.2 "Open Sans", Helvetica, Arial, serif;
  color: #85879f;
  letter-spacing: 0px;
  margin-top: 8px;
}

.main-page-section2__text-body1.layout {
  position: absolute;
  top: 562px;
  height: -webkit-min-content;
  height: -moz-min-content;
  height: min-content;
  left: 64px;
  width: 245px;
}

.main-page-section2__block6 {
  display: flex;
  flex-direction: column;
  width: 48%;
  float: right;
}

.main-page-section2__block6.layout {
  position: absolute;
  overflow: hidden;
  top: 0px;
  height: 100%;
  right: 0px;
  width: auto
}

.main-page-section2__image1 {
  height: 100%;
  width: auto;
  float: right
}

.main-page-section2__image1.layout1 {
  float: right
}

.main-page-section2__decorator1 {
  width: 214px;
  height: 643px;
}

.main-page-section2__decorator1.layout {
  position: absolute;
  top: -52px;
  height: 643px;
  left: 235px;
  width: 214px;
}

.main-page-section2__image2 {
  background: var(--src) center center/contain no-repeat;
}

.main-page-section2__image2.layout {
  position: absolute;
  top: 212px;
  height: 103px;
  left: 740px;
  width: 52px;
}

.main-page-section2__block7 {
  display: flex;
  flex-direction: column;
}

.main-page-section2__block7.layout {
  position: relative;
  height: -webkit-min-content;
  height: -moz-min-content;
  height: min-content;
}

.main-page-section2__decorator3 {
  background: var(--src) center center/contain no-repeat;
}

.main-page-section2__decorator3.layout {
  position: absolute;
  height: 531px;
  bottom: -148px;
  left: -258px;
  width: 531px;
}

.main-page-section2__decorator2 {
  background-image: url("./assets/de5739ab189944ff81ae0880199d0d1d.png");
  background-repeat: no-repeat;
  background-size: 100% 100%;
  border-radius: 60px 60px 60px 60px;
  width: 95%;
  min-height: 900px;
  margin-left: 2.5%;
}

.main-page-section2__flex2 {
  width: 100%;
  height: -webkit-min-content;
  height: -moz-min-content;
  height: min-content;
  position: relative;
}

.main-page-section2__flex2.layout {

  height: -webkit-min-content;
  height: -moz-min-content;
  height: min-content;
  width: 90.63%;
  margin: 66px auto;
}

.main-page-section2__flex3 {
  display: flex;
}

.main-page-section2__flex3.layout {
  position: relative;
  height: -webkit-min-content;
  height: -moz-min-content;
  height: min-content;
}

.main-page-section2__flex3-item {
  display: flex;
  flex-direction: column;
  position: relative;
  flex: 1 1 281px;
}

.main-page-section2__big-title-box.layout {
  position: relative;
  height: -webkit-min-content;
  height: -moz-min-content;
  height: min-content;
}

.main-page-section2__big-title {
  font: 700 32px/1.2 "Open Sans", Helvetica, Arial, serif;
  color: white;
  letter-spacing: 0px;
}

.main-page-section2__flex3-spacer {
  flex: 0 1 213px;
}

.main-page-section2__flex3-item1 {
  display: flex;
  flex-direction: column;
  position: relative;
  flex: 0 1 68px;
}

.main-page-section2__icon21 {
  background: var(--src) center center/contain no-repeat;
  border-radius: 34px 34px 34px 34px;
}

.main-page-section2__icon21.layout {
  padding: 0;

  position: relative;
  height: 68px;
  width: 68px;
  min-width: 68px;
  margin: 0px 0px 9px;
}

.main-page-section2__flex3-spacer1 {
  flex: 0 1 445px;
}

.main-page-section2__flex3-item2 {
  display: flex;
  flex-direction: column;
  position: relative;
  flex: 0 1 68px;
}

.main-page-section2__block9 {
  display: flex;
  flex-direction: column;
  background-color: rgba(227, 251, 255, 0.498);
  border-radius: 34px 34px 34px 34px;
}

.main-page-section2__block9.layout {
  position: relative;
  height: -webkit-min-content;
  height: -moz-min-content;
  height: min-content;
  margin: 0px 0px 9px;
}

.main-page-section2__block10 {
  display: flex;
  flex-direction: column;
}

.main-page-section2__block10.layout {
  position: relative;
  height: -webkit-min-content;
  height: -moz-min-content;
  height: min-content;
  margin: 16px;
}

.main-page-section2__image3 {
  background: var(--src) center center/contain no-repeat;
}

.main-page-section2__image3.layout {
  position: relative;
  height: 17px;
  width: 25px;
  min-width: 25px;
  margin: 17px 1px 2px 10px;
}

.main-page-section2__flex4 {
  display: flex;
}

.main-page-section2__flex4.layout {
  position: relative;
  height: -webkit-min-content;
  height: -moz-min-content;
  height: min-content;
  width: 68.13%;
  margin: 1px 3.51% 0px 28.35%;
}

.main-page-section2__subtitle1 {
  display: flex;
  justify-content: center;
  font: 600 20px/1.2 "Open Sans", Helvetica, Arial, serif;
  color: white;
  text-align: center;
  letter-spacing: 0px;
}

.main-page-section2__subtitle1.layout {
  position: relative;
  flex: 0 0 auto;
  height: -webkit-min-content;
  height: -moz-min-content;
  height: min-content;
}

.main-page-section2__flex4-spacer {
  flex: 0 1 180.5px;
}

.main-page-section2__block8 {
  display: flex;
  flex-direction: column;
  background-color: white;
  border: 1px solid #bf0b12;
  border-radius: 21px 21px 21px 21px;
  height: min-content;
  width: 200px;
}

.main-page-section2__block8.layout {
  position: relative;
  overflow: hidden;
  height: -webkit-min-content;
  height: -moz-min-content;
  margin: 18px 83.84% 0px 0%;
}

.main-page-section2__highlights5 {
  font: 600 16px/1.2 "Open Sans", Helvetica, Arial, serif;
  color: #bf0b12;
  letter-spacing: 0px;
}

.main-page-section2__highlights5.layout {
  position: relative;
  height: -webkit-min-content;
  height: -moz-min-content;
  height: min-content;
  margin: 10px 28px 12px 33px;
}

.main-page-section2__flex5 {
  display: flex;
}

.main-page-section2__flex5.layout {
  position: relative;
  height: -webkit-min-content;
  height: -moz-min-content;
  height: min-content;
  width: 46.93%;
  margin: 23px 13.17% 0px 39.9%;
}

.main-page-section2__flex5-item {
  display: flex;
  flex-direction: column;
  position: relative;
  flex: 0 1 68px;
}

.main-page-section2__icon22 {
  background: var(--src) center center/contain no-repeat;
  border-radius: 34px 34px 34px 34px;
}

.main-page-section2__icon22.layout {
  padding: 0;

  position: relative;
  height: 68px;
  width: 68px;
  min-width: 68px;
}

.main-page-section2__flex5-spacer {
  flex: 0 1 445px;
}

.main-page-section2__icon23 {
  background: var(--src) center center/contain no-repeat;
  border-radius: 34px 34px 34px 34px;
}

.main-page-section2__icon23.layout {
  padding: 0;

  position: relative;
  height: 68px;
  width: 68px;
  min-width: 68px;
}

.main-page-section2__flex6 {
  display: flex;
}

.main-page-section2__flex6.layout {
  position: relative;
  height: -webkit-min-content;
  height: -moz-min-content;
  height: min-content;
  width: 71.24%;
  margin: 10px 1.74% 0px 27.02%;
}

.main-page-section2__flex6-spacer {
  flex: 0 1 143px;
}

.main-page-section2__flex7 {
  display: flex;
}

.main-page-section2__flex7.layout {
  position: relative;
  height: -webkit-min-content;
  height: -moz-min-content;
  height: min-content;
  width: 80.65%;
  margin: 83px 2.79% 0px 16.56%;
}

.main-page-section2__flex7-item {
  display: flex;
  flex-direction: column;
  position: relative;
  flex: 0 1 52px;
}

.main-page-section2__image2.layout1 {
  position: relative;
  height: 103px;
  width: 52px;
  min-width: 52px;
  margin: 24px 0px 0px;
}

.main-page-section2__flex7-spacer {
  flex: 0 1 119.5px;
}

.main-page-section2__flex7-item1 {
  display: flex;
  flex-direction: column;
  position: relative;
  flex: 0 1 303px;
}

.main-page-section2__flex8 {
  display: flex;
  flex-direction: column;
}

.main-page-section2__flex8.layout {
  position: relative;
  height: -webkit-min-content;
  height: -moz-min-content;
  height: min-content;
  margin: 0px 0px 25px;
}

.main-page-section2__icon24 {
  background: var(--src) center center/contain no-repeat;
  border-radius: 34px 34px 34px 34px;
}

.main-page-section2__icon24.layout {
  padding: 0;

  position: relative;
  height: 68px;
  width: 68px;
  min-width: 68px;
  margin: 0px auto;
}

.main-page-section2__subtitle1.layout1 {
  position: relative;
  height: -webkit-min-content;
  height: -moz-min-content;
  height: min-content;
  margin: 10px 0px 0px;
}

.main-page-section2__flex8-spacer {
  flex: 0 1 199px;
}

.main-page-section2__flex8-item {
  display: flex;
  flex-direction: column;
  position: relative;
  flex: 0 1 325px;
}

.main-page-section2__flex9 {
  display: flex;
  flex-direction: column;
}

.main-page-section2__flex9.layout {
  position: relative;
  height: -webkit-min-content;
  height: -moz-min-content;
  height: min-content;
  margin: 0px 0px 25px;
}

.main-page-section2__icon25 {
  background: var(--src) center center/contain no-repeat;
  border-radius: 34px 34px 34px 34px;
}

.main-page-section2__icon25.layout {
  padding: 0;

  position: relative;
  height: 68px;
  width: 68px;
  min-width: 68px;
  margin: 0px auto;
}

.main-page-section2__subtitle1.layout2 {
  position: relative;
  height: -webkit-min-content;
  height: -moz-min-content;
  height: min-content;
  margin: 10px 0px 0px;
}

.main-page-section2__cover {
  text-align: center;
  height: 133px;
  width: 100%;
}

.main-page-section3__section3 {
  display: flex;
  flex-direction: column;
}

.main-page-section3__section3.layout {
  position: relative;
  height: -webkit-min-content;
  height: -moz-min-content;
  height: min-content;
}

.main-page-section3__block11 {
  display: flex;
  flex-direction: column;
}

.main-page-section3__block11.layout {
  position: relative;
  height: -webkit-min-content;
  height: -moz-min-content;
  height: min-content;
}

.main-page-section3__flex10 {
  display: flex;
}

.main-page-section3__flex10.layout {
  position: relative;
  height: -webkit-min-content;
  height: -moz-min-content;
  height: min-content;
  width: 90.63%;
  margin: 45px auto;
}

.main-page-section3__flex10-item {
  display: flex;
  flex-direction: column;
  position: relative;
  flex: 0 1 30px;
}

.main-page-section3__image4 {
  background: var(--src) center center/contain no-repeat;
}

.main-page-section3__image4.layout {
  position: relative;
  height: 45px;
  width: 27px;
  min-width: 27px;
  margin: 132px 0px 291px 3px;
}

.main-page-section3__flex10-spacer {
  flex: 0 1 10px;
}

.main-page-section3__flex10-item1 {
  display: flex;
  flex-direction: column;
  position: relative;
  flex: 0 1 27px;
}

.main-page-section3__image4.layout1 {
  position: relative;
  height: 45px;
  width: 27px;
  min-width: 27px;
  margin: 132px 0px 291px;
}

.main-page-section3__flex10-item2 {
  display: flex;
  flex-direction: column;
  position: relative;
  flex: 0 1 1161px;
}

.main-page-section3__flex11 {
  display: flex;
  flex-direction: column;
}

.main-page-section3__flex11.layout {
  position: relative;
  height: -webkit-min-content;
  height: -moz-min-content;
  height: min-content;
  margin: 0px 0px 27px;
}


.main-page-section3__cover-group1.layout {
  position: relative;
  height: -webkit-min-content;
  height: -moz-min-content;
  height: min-content;
  width: 56.85%;
  margin: 0px 24.81% 0px 18.35%;
}

.main-page-section3__big-title1-box.layout {
  position: relative;
  height: -webkit-min-content;
  height: -moz-min-content;
  height: min-content;
  width: 70%;
}

.main-page-section3__big-title1 {
  font: 700 32px/1.2 "Open Sans", Helvetica, Arial, serif;
  color: black;
  letter-spacing: 0px;
}

.main-page-section3__big-title1-span0 {
  font: 700 1em/1.2 "Open Sans", Helvetica, Arial, serif;
  color: #363745ff;
  letter-spacing: 0px;
}

.main-page-section3__big-title1-span1 {
  font: 700 1em/1.2 "Open Sans", Helvetica, Arial, serif;
  color: #bf0b12ff;
  letter-spacing: 0px;
}

.main-page-section3__big-title1-span2 {
  font: 700 1em/1.2 "Open Sans", Helvetica, Arial, serif;
  color: #363745ff;
  letter-spacing: 0px;
}

.main-page-section3__highlights6 {
  font: 600 16px/1.2 "Open Sans", Helvetica, Arial, serif;
  color: #363745;
  text-align: center;
  letter-spacing: 0px;
}

.main-page-section3__highlights6.layout {
  position: relative;
  height: -webkit-min-content;
  height: -moz-min-content;
  height: min-content;
  width: 84.55%;
  margin: 1px auto 43px;
}

.main-page-section3__flex12 {
  display: flex;
}

.main-page-section3__flex12.layout {
  position: relative;
  height: -webkit-min-content;
  height: -moz-min-content;
  height: min-content;
  margin: 33px 0px 0px;
}

.main-page-section3__flex12-item {
  display: flex;
  flex-direction: column;
  position: relative;
  flex: 0 1 630px;
}

.main-page-section3__flex13 {
  display: flex;
  flex-direction: column;
}

.main-page-section3__flex13.layout {
  position: relative;
  height: -webkit-min-content;
  height: -moz-min-content;
  height: min-content;
}

.main-page-section3__highlights7-box.layout {
  position: relative;
  height: -webkit-min-content;
  height: -moz-min-content;
  height: min-content;
  margin: 0px 25px 0px 0px;
}

.main-page-section3__highlights7 {
  overflow: visible;
  margin-top: 0px;
  margin-bottom: 0px;
  margin: 0px;
  font: 16px/1.2 "Open Sans", Helvetica, Arial, serif;
  color: #61637b;
  letter-spacing: 0px;
  white-space: pre-wrap;
  text-align: left;
}

.main-page-section3__flex14 {
  display: flex;
}

.main-page-section3__flex14.layout {
  position: relative;
  height: -webkit-min-content;
  height: -moz-min-content;
  height: min-content;
  width: 63.33%;
  margin: 18px 0% 0px 36.67%;
}

.main-page-section3__highlights8 {
  font: 16px/1.2 "Open Sans", Helvetica, Arial, serif;
  color: #363745;
  letter-spacing: 0px;
  text-align: right;
}

.main-page-section3__highlights8.layout {
  position: relative;
  flex: 0 0 auto;
  height: -webkit-min-content;
  height: -moz-min-content;
  height: min-content;
  margin: 12px 0px 13px;
}

.main-page-section3__flex14-spacer {
  flex: 0 1 17px;
}

.main-page-section3__flex14-item {
  display: flex;
  flex-direction: column;
  position: relative;
  flex: 0 1 27px;
}

.main-page-section3__image4.layout2 {
  height: 45px;
  width: 27px;
  min-width: 27px;
}

.main-page-section3__flex14-spacer1 {
  flex: 0 1 10px;
}

.main-page-section3__image4.layout3 {
  position: relative;
  height: 45px;
  width: 27px;
  min-width: 27px;
  margin: 230px 0px 0px;
}

.main-page-section3__flex14-spacer2 {
  flex: 0 1 47px;
}

.main-page-section3__flex14-item1 {
  display: flex;
  flex-direction: column;
  position: relative;
  flex: 0 1 447px;
}

.main-page-section3__block12 {
  display: flex;
  flex-direction: column;
  background-color: white;
  border-radius: 30px 30px 30px 30px;
}

.main-page-section3__block12.layout {
  position: relative;
  overflow: hidden;
  height: -webkit-min-content;
  height: -moz-min-content;
  height: min-content;
  margin: 0px 0px 11px;
}

.main-page-section3__image5 {
  background: var(--src) center center/contain no-repeat;
}

.main-page-section3__image5.layout {
  position: absolute;
  top: 0px;
  height: 75px;
  left: 0px;
  right: 0px;
  width: 75.62%;
  margin: 95px auto 94px;
}

.main-page-section3__group {
  display: flex;
  flex-direction: column;
  background: var(--src) center center/contain no-repeat;
}

.main-page-section3__group.layout {
  position: relative;
  height: -webkit-min-content;
  height: -moz-min-content;
  height: min-content;
}

.main-page-section3__block13 {
  display: flex;
  flex-direction: column;
  background-color: white;
  box-shadow: 0px 4px 8px 0px rgba(0, 0, 0, 0.0470588);
  border-radius: 40px 40px 40px 40px;
}

.main-page-section3__block13.layout {
  position: relative;
  height: -webkit-min-content;
  height: -moz-min-content;
  height: min-content;
  width: 17.9%;
  margin: 92px auto;
}

.main-page-section3__image7 {
  background: var(--src) center center/contain no-repeat;
}

.main-page-section3__image7.layout {
  position: relative;
  height: 30px;
  width: 27px;
  min-width: 27px;
  margin: 25px 0px 0px 26px;
}

.main-page-section4__section4 {
  display: flex;
  flex-direction: column;
}

.main-page-section4__section4.layout {
  position: relative;
  height: -webkit-min-content;
  height: -moz-min-content;
  height: min-content;
}

.main-page-section4__block14 {
  display: flex;
  flex-direction: column;
  background-color: white;
}

.main-page-section4__block14.layout {
  position: relative;
  overflow: hidden;
  height: -webkit-min-content;
  height: -moz-min-content;
  height: min-content;
}

.main-page-section4__block18 {
  display: flex;
  flex-direction: column;
  background-color: #eff2f4;
  border-radius: 10px 10px 10px 10px;
}

.main-page-section4__block18.layout {
  position: absolute;
  height: 495px;
  bottom: -690px;
  left: 64px;
  width: 812px;
}

.main-page-section4__subtitle2-box.layout {
  position: absolute;
  top: 425px;
  height: -webkit-min-content;
  height: -moz-min-content;
  height: min-content;
  left: 16px;
  width: 780px;
}

.main-page-section4__subtitle2 {
  font: 600 20px/1.2 "Open Sans", Helvetica, Arial, serif;
  color: black;
  letter-spacing: 0px;
}

.main-page-section4__subtitle2-span0 {
  font: 600 1em/1.2 "Open Sans", Helvetica, Arial, serif;
  color: #61637bff;
  letter-spacing: 0px;
}

.main-page-section4__subtitle2-span1 {
  font: 600 1em/1.2 "Open Sans", Helvetica, Arial, serif;
  color: #0bbfb8ff;
  letter-spacing: 0px;
}

.main-page-section4__subtitle2-span2 {
  font: 600 1em/1.2 "Open Sans", Helvetica, Arial, serif;
  color: #61637bff;
  letter-spacing: 0px;
}

.main-page-section4__flex15 {
  display: flex;
  flex-direction: column;
}

.main-page-section4__flex15.layout {
  position: relative;
  height: -webkit-min-content;
  height: -moz-min-content;
  height: min-content;
  width: 90.63%;
  margin: 64px auto;
}

.main-page-section4__big-title2 {
  font: 700 32px/1.2 "Open Sans", Helvetica, Arial, serif;
  color: #363745;
  text-align: center;
  letter-spacing: 0px;
}

.main-page-section4__big-title2.layout {
  position: relative;
  height: -webkit-min-content;
  height: -moz-min-content;
  height: min-content;
  width: 26.17%;
}

.main-page-section4__flex16 {
  display: flex;
}

.main-page-section4__flex16.layout {
  position: relative;
  height: -webkit-min-content;
  height: -moz-min-content;
  height: min-content;
  margin: 18px 0px 0px;
}

.main-page-section4__flex16-item {
  display: flex;
  flex-direction: column;
  position: relative;
  flex: 0 1 298px;
}

.main-page-section4__block15 {
  display: flex;
  flex-direction: column;
}

.main-page-section4__block15.layout {
  position: relative;
  overflow: hidden;
  height: 197px;
}

.main-page-section4__hero-title2 {
  font: 700 140px/1.2 "Montserrat", Helvetica, Arial, serif;
  color: #0bbfb8;
  text-align: center;
  letter-spacing: 0px;
  opacity: 0.07;
}

.main-page-section4__hero-title2.layout {
  position: absolute;
  top: 0px;
  height: -webkit-min-content;
  height: -moz-min-content;
  height: min-content;
  bottom: 29px;
  left: 0px;
  right: 0px;
  width: 45.64%;
  margin: 0px auto;
}

.main-page-section4__subtitle21-box {
  display: flex;
  justify-content: center;
  top: 65%;
}

.main-page-section4__subtitle21-box.layout {
  position: absolute;
  top: 116px;
  height: -webkit-min-content;
  height: -moz-min-content;
  height: min-content;
  bottom: 0px;
  left: 0px;
  right: 0px;
}

.main-page-section4__subtitle21 {
  font: 600 20px/1.2 "Open Sans", Helvetica, Arial, serif;
  color: black;
  text-align: center;
  letter-spacing: 0px;
}

.main-page-section4__subtitle21-span0 {
  font: 600 1em/1.2 "Open Sans", Helvetica, Arial, serif;
  color: #0bbfb8ff;
  letter-spacing: 0px;
}

.main-page-section4__subtitle21-span1 {
  font: 600 1em/1.2 "Open Sans", Helvetica, Arial, serif;
  color: #363745ff;
  letter-spacing: 0px;
}

.main-page-section4__flex16-spacer {
  flex: 0 1 75px;
}

.main-page-section4__flex16-item1 {
  display: flex;
  flex-direction: column;
  position: relative;
  flex: 0 1 12px;
}

.main-page-section4__image8 {
  background: var(--src) center center/contain no-repeat;
}

.main-page-section4__image8.layout {
  position: relative;
  height: 18px;
  width: 12px;
  min-width: 12px;
  margin: 110px 0px 69px;
}

.main-page-section4__flex16-spacer1 {
  flex: 0 1 4px;
}

.main-page-section4__flex16-item2 {
  display: flex;
  flex-direction: column;
  position: relative;
  flex: 0 1 12px;
}

.main-page-section4__flex16-spacer2 {
  flex: 0 1 64px;
}

.main-page-section4__hero-title2.layout1 {
  position: absolute;
  top: 0px;
  height: -webkit-min-content;
  height: -moz-min-content;
  height: min-content;
  bottom: 29px;
  left: 0px;
  right: 0px;
  width: 54.36%;
  margin: 0px auto;
}

.main-page-section4__subtitle22-box {
  display: flex;
  justify-content: center;
}

.main-page-section4__subtitle22-box.layout {
  position: absolute;
  top: 116px;
  height: -webkit-min-content;
  height: -moz-min-content;
  height: min-content;
  bottom: 0px;
  left: 0px;
  right: 0px;
}

.main-page-section4__subtitle22 {
  font: 600 20px/1.2 "Open Sans", Helvetica, Arial, serif;
  color: black;
  text-align: center;
  letter-spacing: 0px;
}

.main-page-section4__subtitle22-span0 {
  font: 600 1em/1.2 "Open Sans", Helvetica, Arial, serif;
  color: #0bbfb8ff;
  letter-spacing: 0px;
}

.main-page-section4__subtitle22-span1 {
  font: 600 1em/1.2 "Open Sans", Helvetica, Arial, serif;
  color: #363745ff;
  letter-spacing: 0px;
}

.main-page-section4__flex16-spacer3 {
  flex: 0 1 74px;
}

.main-page-section4__flex16-item3 {
  display: flex;
  flex-direction: column;
  position: relative;
  flex: 0 1 12px;
}

.main-page-section4__flex16-spacer4 {
  flex: 0 1 4px;
}

.main-page-section4__flex16-item4 {
  display: flex;
  flex-direction: column;
  position: relative;
  flex: 0 1 12px;
}

.main-page-section4__flex16-spacer5 {
  flex: 0 1 64px;
}

.main-page-section4__hero-title2.layout2 {
  position: absolute;
  top: 0px;
  height: -webkit-min-content;
  height: -moz-min-content;
  height: min-content;
  bottom: 29px;
  left: 0px;
  right: 0px;
  width: 55.03%;
  margin: 0px auto;
}

.main-page-section4__subtitle23-box {
  display: flex;
  justify-content: center;
}

.main-page-section4__subtitle23-box.layout {
  position: absolute;
  top: 116px;
  height: -webkit-min-content;
  height: -moz-min-content;
  height: min-content;
  bottom: 0px;
  left: 0px;
  right: 0px;
}

.main-page-section4__subtitle23 {
  font: 600 20px/1.2 "Open Sans", Helvetica, Arial, serif;
  color: black;
  text-align: center;
  letter-spacing: 0px;
}

.main-page-section4__subtitle23-span0 {
  font: 600 1em/1.2 "Open Sans", Helvetica, Arial, serif;
  color: #363745ff;
  letter-spacing: 0px;
}

.main-page-section4__subtitle23-span1 {
  font: 600 1em/1.2 "Open Sans", Helvetica, Arial, serif;
  color: #0bbfb8ff;
  letter-spacing: 0px;
}

.main-page-section4__subtitle23-span2 {
  font: 600 1em/1.2 "Open Sans", Helvetica, Arial, serif;
  color: #363745ff;
  letter-spacing: 0px;
}

.main-page-section4__flex17 {
  display: flex;
}

.main-page-section4__flex17.layout {
  position: relative;
  height: -webkit-min-content;
  height: -moz-min-content;
  height: min-content;
  margin: 35px 0px 0px;
}

.main-page-section4__flex17-item {
  display: flex;
  flex-direction: column;
  position: relative;
  flex: 0 1 298px;
}

.main-page-section4__hero-title2.layout3 {
  position: absolute;
  top: 0px;
  height: -webkit-min-content;
  height: -moz-min-content;
  height: min-content;
  bottom: 29px;
  left: 0px;
  right: 0px;
  width: 56.38%;
  margin: 0px auto;
}

.main-page-section4__subtitle24-box {
  display: flex;
  justify-content: center;
}

.main-page-section4__subtitle24-box.layout {
  position: absolute;
  top: 116px;
  height: -webkit-min-content;
  height: -moz-min-content;
  height: min-content;
  bottom: 0px;
  left: 0px;
  right: 0px;
}

.main-page-section4__subtitle24 {
  font: 600 20px/1.2 "Open Sans", Helvetica, Arial, serif;
  color: black;
  text-align: center;
  letter-spacing: 0px;
}

.main-page-section4__subtitle24-span0 {
  font: 600 1em/1.2 "Open Sans", Helvetica, Arial, serif;
  color: #363745ff;
  letter-spacing: 0px;
}

.main-page-section4__subtitle24-span1 {
  font: 600 1em/1.2 "Open Sans", Helvetica, Arial, serif;
  color: #0bbfb8ff;
  letter-spacing: 0px;
}

.main-page-section4__subtitle24-span2 {
  font: 600 1em/1.2 "Open Sans", Helvetica, Arial, serif;
  color: #363745ff;
  letter-spacing: 0px;
}

.main-page-section4__flex17-spacer {
  flex: 0 1 72px;
}

.main-page-section4__flex17-item1 {
  display: flex;
  flex-direction: column;
  position: relative;
  flex: 0 1 12px;
}

.main-page-section4__flex17-spacer1 {
  flex: 0 1 4px;
}

.main-page-section4__flex17-item2 {
  display: flex;
  flex-direction: column;
  position: relative;
  flex: 0 1 12px;
}

.main-page-section4__hero-title2.layout4 {
  position: absolute;
  top: 0px;
  height: -webkit-min-content;
  height: -moz-min-content;
  height: min-content;
  bottom: 29px;
  left: 0px;
  right: 0px;
  width: 51.68%;
  margin: 0px auto;
}

.main-page-section4__subtitle25-box {
  display: flex;
  justify-content: center;
}

.main-page-section4__subtitle25-box.layout {
  position: absolute;
  top: 116px;
  height: -webkit-min-content;
  height: -moz-min-content;
  height: min-content;
  bottom: 0px;
  left: 0px;
  right: 0px;
}

.main-page-section4__subtitle25 {
  font: 600 20px/1.2 "Open Sans", Helvetica, Arial, serif;
  color: black;
  text-align: center;
  letter-spacing: 0px;
}

.main-page-section4__subtitle25-span0 {
  font: 600 1em/1.2 "Open Sans", Helvetica, Arial, serif;
  color: #363745ff;
  letter-spacing: 0px;
}

.main-page-section4__subtitle25-span1 {
  font: 600 1em/1.2 "Open Sans", Helvetica, Arial, serif;
  color: #0bbfb8ff;
  letter-spacing: 0px;
}

.main-page-section4__subtitle25-span2 {
  font: 600 1em/1.2 "Open Sans", Helvetica, Arial, serif;
  color: #363745ff;
  letter-spacing: 0px;
}

.main-page-section4__flex17-item3 {
  display: flex;
  flex-direction: column;
  position: relative;
  flex: 0 1 12px;
}

.main-page-section4__flex17-spacer2 {
  flex: 0 1 4px;
}

.main-page-section4__flex17-item4 {
  display: flex;
  flex-direction: column;
  position: relative;
  flex: 0 1 12px;
}

.main-page-section4__block16 {
  display: flex;
  flex-direction: column;
}

.main-page-section4__block16.layout {
  position: relative;
  overflow: hidden;
  height: 170px;
  margin: 0px 0px 27px;
}

.main-page-section4__hero-title2.layout5 {
  position: absolute;
  top: 0px;
  height: -webkit-min-content;
  height: -moz-min-content;
  height: min-content;
  bottom: 2px;
  left: 0px;
  right: 0px;
  width: 54.36%;
  margin: 0px auto;
}

.main-page-section4__subtitle26-box {
  display: flex;
  justify-content: center;
}

.main-page-section4__subtitle26-box.layout {
  position: absolute;
  top: 116px;
  height: -webkit-min-content;
  height: -moz-min-content;
  height: min-content;
  bottom: 0px;
  left: 0px;
  right: 0px;
}

.main-page-section4__subtitle26 {
  font: 600 20px/1.2 "Open Sans", Helvetica, Arial, serif;
  color: black;
  text-align: center;
  letter-spacing: 0px;
}

.main-page-section4__subtitle26-span0 {
  font: 600 1em/1.2 "Open Sans", Helvetica, Arial, serif;
  color: #363745ff;
  letter-spacing: 0px;
}

.main-page-section4__subtitle26-span1 {
  font: 600 1em/1.2 "Open Sans", Helvetica, Arial, serif;
  color: #0bbfb8ff;
  letter-spacing: 0px;
}

.main-page-section4__subtitle26-span2 {
  font: 600 1em/1.2 "Open Sans", Helvetica, Arial, serif;
  color: #363745ff;
  letter-spacing: 0px;
}

.main-page-section4__block17 {
  background-color: white;
  border: 1px solid #bf0b12;
  border-radius: 21px 21px 21px 21px;
  padding-left: 10px;
  padding-right: 10px;
  margin-top: 100px;
  padding-bottom: 5;
  padding-top: 5;
}

.main-page-section4__block17.layout {
  position: relative;
  overflow: hidden;
  height: -webkit-min-content;
  height: -moz-min-content;
  height: min-content;
  width: 28.11%;
  margin: 54px auto 0px;
}

.main-page-section4__highlights5 {

  font: 600 16px/1.2 "Open Sans", Helvetica, Arial, serif;
  color: #bf0b12;
  text-align: center;
  letter-spacing: 0px;
}

.main-page-section4__block19 {
  display: flex;
  flex-direction: column;
  background-color: white;
  border-radius: 10px 10px 10px 10px;
}

.main-page-section4__block19.layout {
  position: absolute;
  overflow: hidden;
  height: 434px;
  bottom: -604px;
  left: 80px;
  width: 780px;
}

.main-page-section4__decorator4 {
  background: var(--src) center center/contain no-repeat;
}

.main-page-section4__decorator4.layout {
  position: absolute;
  top: 0px;
  height: 468px;
  left: 0px;
  width: 780px;
}

.main-page-section4__decorator5 {
  background: var(--src) center center/contain no-repeat;
}

.main-page-section4__decorator5.layout {
  position: absolute;
  top: -6px;
  height: 474px;
  left: 0px;
  width: 780px;
}

.main-page-section4__block21 {
  display: flex;
  flex-direction: column;
  background-color: #eff2f4;
  border-radius: 10px 10px 10px 10px;
}

.main-page-section4__block21.layout {
  position: absolute;
  overflow: hidden;
  height: 176px;
  bottom: -346px;
  width: 354px;
  right: 80px;
}

.main-page-section4__decorator6 {
  background: var(--src) center center/contain no-repeat;
}

.main-page-section4__decorator6.layout {
  position: absolute;
  top: 0px;
  height: 209px;
  left: 0px;
  width: 421px;
}

.main-page-section4__decorator7 {
  background: var(--src) center center/contain no-repeat;
}

.main-page-section4__decorator7.layout {
  position: absolute;
  top: -6px;
  height: 207px;
  left: 0px;
  width: 366px;
}

.main-page-section4__decorator8 {
  background: var(--src) center center/contain no-repeat;
}

.main-page-section4__decorator8.layout {
  position: absolute;
  top: 0px;
  height: 202px;
  left: 1px;
  width: 353px;
}

.main-page-section4__decorator9 {
  background: var(--src) center center/contain no-repeat;
}

.main-page-section4__decorator9.layout {
  position: absolute;
  top: 0px;
  height: 201px;
  left: -1px;
  width: 355px;
}

.main-page-section5__section5 {
  display: flex;
  flex-direction: column;
}

.main-page-section5__section5.layout {
  position: relative;
  height: -webkit-min-content;
  height: -moz-min-content;
  height: min-content;
}

.main-page-section5__group {
  display: flex;
  flex-direction: column;
}

.main-page-section5__group.layout5 {
  position: relative;
  height: -webkit-min-content;
  height: -moz-min-content;
  height: min-content;
  margin: 64px 32px;
}

.main-page-section5__group.layout4 {
  position: relative;
  height: -webkit-min-content;
  height: -moz-min-content;
  height: min-content;
}

.main-page-section5__group.layout3 {
  position: relative;
  height: -webkit-min-content;
  height: -moz-min-content;
  height: min-content;
}

.main-page-section5__group.layout2 {
  position: relative;
  height: -webkit-min-content;
  height: -moz-min-content;
  height: min-content;
}

.main-page-section5__flex18 {
  display: flex;
  flex-direction: column;
}

.main-page-section5__flex18.layout {
  position: relative;
  height: -webkit-min-content;
  height: -moz-min-content;
  height: min-content;
}

.main-page-section5__big-title2 {
  text-align: center;
  font: 700 32px/1.2 "Open Sans", Helvetica, Arial, serif;
  color: #363745;
  letter-spacing: 0px;
}

.main-page-section5__big-title2.layout {
  position: relative;
  height: -webkit-min-content;
  height: -moz-min-content;
  height: min-content;
  width: 80%;
  margin: 0px auto;
  margin-top: 64px
}

.main-page-section5__highlights6 {
  text-align: center;
  font: 600 16px/1.2 "Open Sans", Helvetica, Arial, serif;
  color: #363745;
  letter-spacing: 0px;
}

.main-page-section5__highlights6.layout {
  position: relative;
  height: -webkit-min-content;
  height: -moz-min-content;
  height: min-content;
  width: 90%;
  margin: 13px auto 0px;
}

.main-page-section5__group.layout1 {
  position: relative;
  height: -webkit-min-content;
  height: -moz-min-content;
  height: min-content;
  margin: 259px 0px 167px;
}

.main-page-section5__group1 {
  display: flex;
  flex-direction: column;
  background: var(--src) center center/contain no-repeat;
  border-radius: 60px 60px 60px 60px;
}

.main-page-section5__group1.layout {
  position: relative;
  height: -webkit-min-content;
  height: -moz-min-content;
  height: min-content;
}

.main-page-section5__group.layout {
  position: relative;
  height: -webkit-min-content;
  height: -moz-min-content;
  height: min-content;
  width: 27.19%;
  margin: 43px 3.69% 398px 69.12%;
}

.main-page-section5__block20 {
  display: flex;
  flex-direction: column;
  background-color: #eff2f4;
  border-radius: 10px 10px 10px 10px;
}

.main-page-section5__block20.layout {
  position: absolute;
  top: -243px;
  height: 227px;
  width: 386px;
  right: -16px;
}

.main-page-section5__highlights7 {
  font: 16px/1.2 "Open Sans", Helvetica, Arial, serif;
  color: #61637b;
  letter-spacing: 0px;
  width: 100%;
  height: 100%;
}

.main-page-section5__block22 {
  display: flex;
  flex-direction: column;
  background-color: #eff2f4;
  border-radius: 10px 10px 10px 10px;
}

.main-page-section5__block22.layout {
  position: relative;
  overflow: hidden;
  height: 176px;
  width: 354px;
  min-width: 354px;
}

.main-page-section5__decorator6 {
  background: var(--src) center center/contain no-repeat;
}

.main-page-section5__decorator6.layout {
  position: absolute;
  top: 0px;
  height: 209px;
  left: 0px;
  width: 421px;
}

.main-page-section5__decorator7 {
  background: var(--src) center center/contain no-repeat;
}

.main-page-section5__decorator7.layout {
  position: absolute;
  top: -6px;
  height: 207px;
  left: 0px;
  width: 366px;
}

.main-page-section5__decorator8 {
  background: var(--src) center center/contain no-repeat;
}

.main-page-section5__decorator8.layout {
  position: absolute;
  top: 0px;
  height: 202px;
  left: 1px;
  width: 353px;
}

.main-page-section5__block20.layout1 {
  position: absolute;
  height: -webkit-min-content;
  height: -moz-min-content;
  height: min-content;
  bottom: -76px;
  width: 386px;
  right: -16px;
}

.main-page-section5__block23 {
  display: flex;
  flex-direction: column;
  background-color: white;
  border-radius: 20px 20px 20px 20px;
}

.main-page-section5__block23.layout {
  position: absolute;
  height: 331px;
  bottom: -168px;
  left: 179px;
  width: 453px;
}

.main-page-section5__block24 {
  display: flex;
  flex-direction: column;
  background-color: white;
  border-radius: 20px 20px 20px 20px;
}

.main-page-section5__block24.layout {
  position: absolute;
  overflow: hidden;
  top: 16px;
  height: 209px;
  left: 16px;
  width: 421px;
}

.main-page-section5__decorator10 {
  background: var(--src) center center/contain no-repeat;
}

.main-page-section5__decorator10.layout {
  position: absolute;
  top: 1px;
  height: 235px;
  left: 0px;
  width: 421px;
}

.main-page-section5__block25 {
  display: flex;
  flex-direction: column;
  background-color: white;
  box-shadow: 0px 4px 8px 0px rgba(0, 0, 0, 0.0470588);
  border-radius: 36px 36px 36px 36px;
}

.main-page-section5__block25.layout {
  position: absolute;
  top: 69px;
  height: 72px;
  left: 174px;
  width: 72px;
}

.main-page-section5__image9 {
  background: var(--src) center center/contain no-repeat;
}

.main-page-section5__image9.layout {
  position: absolute;
  top: 23px;
  height: 26px;
  left: 24px;
  width: 24px;
}

.main-page-section5__highlights9-box.layout {
  position: absolute;
  top: 249px;
  height: -webkit-min-content;
  height: -moz-min-content;
  height: min-content;
  left: 16px;
  width: 421px;
}

.main-page-section5__highlights9 {
  overflow: visible;
  margin-top: 0px;
  margin-bottom: 0px;
  margin: 0px;
  font: 16px/1.2 "Open Sans", Helvetica, Arial, serif;
  color: black;
  letter-spacing: 0px;
  white-space: pre-wrap;
}

.main-page-section5__highlights9-span0 {
  font: 1em/1.2 "Open Sans", Helvetica, Arial, serif;
  color: #61637bff;
  letter-spacing: 0px;
}

.main-page-section5__highlights9-span1 {
  font: 1em/1.2 "Open Sans", Helvetica, Arial, serif;
  color: #0bbfb8ff;
  letter-spacing: 0px;
}

.main-page-section5__medium-title {
  font: 700 24px/1.2 "Open Sans", Helvetica, Arial, serif;
  color: white;
  text-align: center;
  letter-spacing: 0px;
  margin-top: 16px
}

.main-page-section5__medium-title.layout {
  position: absolute;
  top: 359px;
  height: -webkit-min-content;
  height: -moz-min-content;
  height: min-content;
  bottom: 229px;
  left: 0px;
  right: 0px;
  width: 26.11%;
  margin: 0px auto;
}

.main-page-section5__highlights4 {
  font: 600 16px/1.2 "Open Sans", Helvetica, Arial, serif;
  color: white;
  text-align: center;
  letter-spacing: 0px;
}

.main-page-section5__highlights4.layout {
  position: absolute;
  top: 400px;
  height: -webkit-min-content;
  height: -moz-min-content;
  height: min-content;
  bottom: 197px;
  left: 0px;
  right: 0px;
  width: 33.03%;
  margin: 0px auto;
}

.main-page-section5__decorator15 {
  background: var(--src) center center/contain no-repeat;
}

.main-page-section5__decorator15.layout {
  position: absolute;
  height: 508px;
  bottom: -1613px;
  left: -258px;
  width: 508px;
}

.main-page-section5__decorator14 {
  background: var(--src) center center/contain no-repeat;
}

.main-page-section5__decorator14.layout {
  position: absolute;
  height: 1020px;
  bottom: -1682px;
  width: 1302px;
  right: 0px;
}

.main-page-section5__decorator12 {
  background: var(--src) center center/contain no-repeat;
}

.main-page-section5__decorator12.layout {
  position: absolute;
  height: 412px;
  bottom: -617px;
  left: -139px;
  width: 616px;
}

.main-page-section5__block26 {
  display: flex;
  flex-direction: column;
  background-color: white;
  border-radius: 20px 20px 20px 20px;
}

.main-page-section5__block26.layout {
  position: absolute;
  height: 331px;
  bottom: -1px;
  width: 451px;
  right: 179px;
}

.main-page-section5__block27 {
  display: flex;
  flex-direction: column;
  background-color: white;
  border-radius: 20px 20px 20px 20px;
}

.main-page-section5__block27.layout {
  position: absolute;
  overflow: hidden;
  top: 16px;
  height: 209px;
  left: 16px;
  width: 419px;
}

.main-page-section5__decorator11 {
  background: var(--src) center center/contain no-repeat;
}

.main-page-section5__decorator11.layout {
  position: absolute;
  top: -10px;
  height: 236px;
  left: -1px;
  width: 421px;
}

.main-page-section5__decorator6.layout1 {
  position: absolute;
  top: 0px;
  height: 209px;
  left: -1px;
  width: 421px;
}

.main-page-section5__highlights91-box.layout {
  position: absolute;
  top: 249px;
  height: -webkit-min-content;
  height: -moz-min-content;
  height: min-content;
  left: 16px;
  width: 419px;
}

.main-page-section5__highlights91-span0 {
  font: 1em/1.2 "Open Sans", Helvetica, Arial, serif;
  color: #61637bff;
  letter-spacing: 0px;
}

.main-page-section5__highlights91-span1 {
  font: 1em/1.2 "Open Sans", Helvetica, Arial, serif;
  color: #0bbfb8ff;
  letter-spacing: 0px;
}

.main-page-section6__section6 {
  display: flex;
  flex-direction: column;
}

.main-page-section6__section6.layout {
  position: relative;
  height: -webkit-min-content;
  height: -moz-min-content;
  height: min-content;
}

.main-page-section6__flex19 {
  display: flex;
}

.main-page-section6__flex19.layout {
  position: relative;
  height: -webkit-min-content;
  height: -moz-min-content;
  height: min-content;
  width: 90.63%;
  margin: 63px auto;
}

.main-page-section6__flex19-item {
  display: flex;
  flex-direction: column;
  position: relative;
  flex: 0 1 370px;
}

.main-page-section6__block28 {
  display: flex;
  flex-direction: column;
  background-color: white;
  box-shadow: 4px 4px 4px 0px rgba(219, 219, 227, 0.2);
  border-radius: 20px 20px 20px 20px;
}

.main-page-section6__block28.layout {
  position: relative;
  height: -webkit-min-content;
  height: -moz-min-content;
  height: min-content;
  margin: 78px 0px 0px;
}

.main-page-section6__block29 {
  display: flex;
  flex-direction: column;
  background-color: white;
}

.main-page-section6__block29.layout {
  position: relative;
  overflow: hidden;
  height: -webkit-min-content;
  height: -moz-min-content;
  height: min-content;
  margin: 358px 0px 0px;
}

.main-page-section6__flex20 {
  display: flex;
}

.main-page-section6__flex20.layout {
  position: relative;
  height: -webkit-min-content;
  height: -moz-min-content;
  height: min-content;
  margin: 16px 12px;
}

.main-page-section6__text-body1 {
  display: flex;
  justify-content: center;
  font: 14px/1.2 "Open Sans", Helvetica, Arial, serif;
  color: #363745;
  text-align: center;
  letter-spacing: 0px;
}

.main-page-section6__text-body1.layout {
  position: relative;
  flex: 0 0 auto;
  height: -webkit-min-content;
  height: -moz-min-content;
  height: min-content;
  margin: 2px 0px 3px 2.5px;
}

.main-page-section6__flex20-spacer {
  flex: 0 1 49.5px;
}

.main-page-section6__highlights5 {
  font: 600 16px/1.2 "Open Sans", Helvetica, Arial, serif;
  color: #bf0b12;
  text-decoration: none !important;
}

.main-page-section6__highlights5.layout {
  position: relative;
  flex: 0 0 auto;
  height: -webkit-min-content;
  height: -moz-min-content;
  height: min-content;
  margin: 0px 0px 2px;
}

.main-page-section6__flex20-spacer1 {
  flex: 0 1 18px;
}

.main-page-section6__flex20-item {
  display: flex;
  flex-direction: column;
  position: relative;
  flex: 0 1 469px;
}

.main-page-section6__flex21 {
  display: flex;
  flex-direction: column;
}

.main-page-section6__flex21.layout {
  position: relative;
  height: -webkit-min-content;
  height: -moz-min-content;
  height: min-content;
  margin: 2px 0px 0px;
}

.main-page-section6__big-title2 {
  font: 700 32px/1.2 "Open Sans", Helvetica, Arial, serif;
  color: #363745;
  letter-spacing: 0px;
}

.main-page-section6__big-title2.layout {
  position: relative;
  height: -webkit-min-content;
  height: -moz-min-content;
  height: min-content;
}

.main-page-section6__block30 {
  display: flex;
  flex-direction: column;
  background-color: white;
  box-shadow: 4px 4px 4px 0px rgba(219, 219, 227, 0.2);
  border-radius: 20px 20px 20px 20px;
}

.main-page-section6__block30.layout {
  position: relative;
  height: 412px;
  width: 78.89%;
  margin: 37px 11.3% 0px 9.81%;
}

.main-page-section6__decorator12 {
  background: var(--src) center center/contain no-repeat;
}

.main-page-section6__decorator12.layout {
  position: absolute;
  top: 0px;
  height: 412px;
  left: -171px;
  width: 616px;
}

.main-page-section6__decorator13 {
  background: var(--src) center center/contain no-repeat;
}

.main-page-section6__decorator13.layout {
  position: absolute;
  top: 0px;
  height: 412px;
  left: -1px;
  width: 371px;
}

.main-page-section6__block31 {
  display: flex;
  flex-direction: column;
  background-color: white;
}

.main-page-section6__block31.layout {
  position: absolute;
  overflow: hidden;
  height: 54px;
  bottom: 0px;
  left: -1px;
  width: 371px;
}

.main-page-section6__flex22 {
  display: flex;
}

.main-page-section6__flex22.layout {
  position: relative;
  height: -webkit-min-content;
  height: -moz-min-content;
  height: min-content;
  margin: 16px 12px;
}

.main-page-section6__flex22-spacer {
  flex: 0 1 35.5px;
}

.main-page-section6__flex22-spacer1 {
  flex: 0 1 11px;
}

.main-page-section6__flex22-item {
  display: flex;
  flex-direction: column;
  position: relative;
  flex: 0 1 370px;
}

.main-page-section6__block32 {
  display: flex;
  flex-direction: column;
  background-color: white;
  box-shadow: 4px 4px 4px 0px rgba(219, 219, 227, 0.2);
  border-radius: 20px 20px 20px 20px;
}

.main-page-section6__block32.layout {
  position: relative;
  height: -webkit-min-content;
  height: -moz-min-content;
  height: min-content;
  margin: 78px 0px 0px;
}

.main-page-section6__image10 {
  background: var(--src) center center/contain no-repeat;
}

.main-page-section6__image10.layout {
  position: absolute;
  top: 0px;
  height: 412px;
  left: 0px;
  right: 0px;
}

.main-page-section6__flex20-spacer2 {
  flex: 0 1 97.5px;
}

.main-page-section7__section7 {
  display: flex;
  flex-direction: column;
}

.main-page-section7__section7.layout {
  position: relative;
  height: -webkit-min-content;
  height: -moz-min-content;
  height: min-content;
}

.main-page-section7__block33 {
  display: flex;
  flex-direction: column;
}

.main-page-section7__block33.layout {
  position: relative;
  height: -webkit-min-content;
  height: -moz-min-content;
  height: min-content;
  margin: 1px 0px 0px;
}

.main-page-section7__flex24 {
  display: flex;
  flex-direction: column;
}

.main-page-section7__flex24.layout {
  position: relative;
  height: -webkit-min-content;
  height: -moz-min-content;
  height: min-content;
  width: 90.63%;
  margin: 72px auto;
}

.main-page-section7__flex25 {
  display: flex;
}

.main-page-section7__flex25.layout {
  position: relative;
  height: -webkit-min-content;
  height: -moz-min-content;
  height: min-content;
  margin: 24px 0px 0px;
}

.main-page-section7__big-title {
  font: 700 32px/1.2 "Open Sans", Helvetica, Arial, serif;
  color: white;
  letter-spacing: 0px;
  margin-left: 0;
}

.main-page-section7__big-title.layout {
  flex: 0 0 auto;
  height: -webkit-min-content;
  height: -moz-min-content;
  height: min-content;
}

.main-page-section7__flex25-spacer {
  flex: 0 1 72px;
}

.main-page-section7__flex25-item {
  display: flex;
  flex-direction: column;
  position: relative;
  flex: 0 1 24px;
}

.main-page-section7__image9 {
  background-color: #FF5C62;
  border-radius: 60px;
  min-height: 1020px;
  width: 100%;
  position: relative
}

.main-page-section7__flex25-spacer1 {
  flex: 0 1 16px;
}

.main-page-section7__flex25-item1 {
  display: flex;
  flex-direction: column;
  position: relative;
  flex: 0 1 298px;
}

.main-page-section7__flex26 {
  text-align: left;
  margin-top: 16px;
}

.main-page-section7__flex26.layout {
  position: relative;
  height: -webkit-min-content;
  height: -moz-min-content;
  height: min-content;
}

.main-page-section7__subtitle1 {
  font: 600 20px/1.2 "Open Sans", Helvetica, Arial, serif;
  color: white;
  letter-spacing: 0px;
}

.main-page-section7__subtitle1.layout {
  position: relative;
  height: -webkit-min-content;
  height: -moz-min-content;
  height: min-content;
}

.main-page-section7__highlights10 {
  font: 16px/1.2 "Open Sans", Helvetica, Arial, serif;
  color: white;
  letter-spacing: 0px;
}

.main-page-section7__highlights10.layout {
  position: relative;
  height: -webkit-min-content;
  height: -moz-min-content;
  height: min-content;
  margin: 7px 0px 0px;
}

.main-page-section7__flex26-spacer {
  flex: 0 1 121px;
}

.main-page-section7__flex26-item {
  display: flex;
  flex-direction: column;
  position: relative;
  flex: 0 1 24px;
}

.main-page-section7__flex26-spacer1 {
  flex: 0 1 16px;
}

.main-page-section7__flex26-item1 {
  display: flex;
  flex-direction: column;
  position: relative;
  flex: 0 1 168px;
}

.main-page-section7__flex27 {
  display: flex;
  flex-direction: column;
}

.main-page-section7__flex27.layout {
  position: relative;
  height: -webkit-min-content;
  height: -moz-min-content;
  height: min-content;
}

.main-page-section7__flex28 {
  display: flex;
}

.main-page-section7__flex28.layout {
  position: relative;
  height: -webkit-min-content;
  height: -moz-min-content;
  height: min-content;
  width: 53.8%;
  margin: 18px 17.77% 0px 28.43%;
}

.main-page-section7__flex28-item {
  display: flex;
  flex-direction: column;
  position: relative;
  flex: 0 1 24px;
}

.main-page-section7__image9.layout1 {
  position: relative;
  height: 26px;
  width: 24px;
  min-width: 24px;
}

.main-page-section7__flex28-spacer {
  flex: 0 1 16px;
}

.main-page-section7__subtitle1.layout1 {
  position: relative;
  flex: 0 0 auto;
  height: -webkit-min-content;
  height: -moz-min-content;
  height: min-content;
  margin: 0px 0px 2px;
}

.main-page-section7__flex28-spacer1 {
  flex: 0 1 92px;
}

.main-page-section7__image9.layout2 {
  position: relative;
  height: 26px;
  width: 24px;
  min-width: 24px;
}

.main-page-section7__subtitle1.layout2 {
  position: relative;
  flex: 0 0 auto;
  height: -webkit-min-content;
  height: -moz-min-content;
  height: min-content;
  margin: 0px 0px 2px;
}

.main-page-section7__flex29 {
  display: flex;
}

.main-page-section7__flex29.layout {
  position: relative;
  height: -webkit-min-content;
  height: -moz-min-content;
  height: min-content;
  width: 42%;
  margin: 5px 26.33% 0px 31.66%;
}

.main-page-section7__highlights10.layout1 {
  position: relative;
  flex: 0 0 auto;
  height: -webkit-min-content;
  height: -moz-min-content;
  height: min-content;
}

.main-page-section7__flex29-spacer {
  flex: 0 1 407px;
}

.main-page-section7__highlights10.layout2 {
  position: relative;
  flex: 0 0 auto;
  height: -webkit-min-content;
  height: -moz-min-content;
  height: min-content;
}

.main-page-section7__flex30 {
  display: flex;
}

.main-page-section7__flex30.layout {
  position: relative;
  height: -webkit-min-content;
  height: -moz-min-content;
  height: min-content;
  width: 55.65%;
  margin: 18px 15.91% 0px 28.43%;
}

.main-page-section7__flex30-item {
  display: flex;
  flex-direction: column;
  position: relative;
  flex: 0 1 24px;
}

.main-page-section7__image9.layout3 {
  position: relative;
  height: 26px;
  width: 24px;
  min-width: 24px;
}

.main-page-section7__flex30-spacer {
  flex: 0 1 16px;
}

.main-page-section7__subtitle1.layout3 {
  position: relative;
  flex: 0 0 auto;
  height: -webkit-min-content;
  height: -moz-min-content;
  height: min-content;
  margin: 0px 0px 2px;
}

.main-page-section7__flex30-spacer1 {
  flex: 0 1 112px;
}

.main-page-section7__image9.layout4 {
  position: relative;
  height: 26px;
  width: 24px;
  min-width: 24px;
}

.main-page-section7__subtitle1.layout4 {
  position: relative;
  flex: 0 0 auto;
  height: -webkit-min-content;
  height: -moz-min-content;
  height: min-content;
  margin: 0px 0px 2px;
}

.main-page-section7__flex31 {
  display: flex;
}

.main-page-section7__flex31.layout {
  position: relative;
  height: -webkit-min-content;
  height: -moz-min-content;
  height: min-content;
  width: 43.86%;
  margin: 5px 24.47% 0px 31.66%;
}

.main-page-section7__highlights101-box.layout {
  position: relative;
  flex: 0 0 auto;
  height: -webkit-min-content;
  height: -moz-min-content;
  height: min-content;
}

.main-page-section7__highlights101 {
  overflow: visible;
  margin-top: 0px;
  margin-bottom: 0px;
  margin: 0px;
  font: 16px/1.2 "Open Sans", Helvetica, Arial, serif;
  color: white;
  letter-spacing: 0px;
  white-space: pre-wrap;
}

.main-page-section7__flex31-spacer {
  flex: 0 1 352px;
}

.main-page-section7__highlights10.layout3 {
  position: relative;
  flex: 0 0 auto;
  height: -webkit-min-content;
  height: -moz-min-content;
  height: min-content;
}

.main-page-section7__flex32 {
  display: flex;
}

.main-page-section7__flex32.layout {
  position: relative;
  height: -webkit-min-content;
  height: -moz-min-content;
  height: min-content;
  width: 54.44%;
  margin: 18px 17.12% 0px 28.43%;
}

.main-page-section7__flex32-item {
  display: flex;
  flex-direction: column;
  position: relative;
  flex: 0 1 24px;
}

.main-page-section7__image9.layout5 {
  position: relative;
  height: 26px;
  width: 24px;
  min-width: 24px;
}

.main-page-section7__flex32-spacer {
  flex: 0 1 16px;
}

.main-page-section7__subtitle1.layout5 {
  position: relative;
  flex: 0 0 auto;
  height: -webkit-min-content;
  height: -moz-min-content;
  height: min-content;
  margin: 0px 0px 2px;
}

.main-page-section7__flex32-spacer1 {
  flex: 0 1 98px;
}

.main-page-section7__image9.layout6 {
  position: relative;
  height: 26px;
  width: 24px;
  min-width: 24px;
}

.main-page-section7__subtitle1.layout6 {
  position: relative;
  flex: 0 0 auto;
  height: -webkit-min-content;
  height: -moz-min-content;
  height: min-content;
  margin: 0px 0px 2px;
}

.main-page-section7__flex33 {
  display: flex;
}

.main-page-section7__flex33.layout {
  position: relative;
  height: -webkit-min-content;
  height: -moz-min-content;
  height: min-content;
  width: 43.3%;
  margin: 5px 25.04% 0px 31.66%;
}

.main-page-section7__highlights10.layout4 {
  position: relative;
  flex: 0 0 auto;
  height: -webkit-min-content;
  height: -moz-min-content;
  height: min-content;
}

.main-page-section7__flex33-spacer {
  flex: 0 1 377px;
}

.main-page-section7__highlights10.layout5 {
  position: relative;
  flex: 0 0 auto;
  height: -webkit-min-content;
  height: -moz-min-content;
  height: min-content;
}

.main-page-section7__flex34 {
  display: flex;
}

.main-page-section7__flex34.layout {
  position: relative;
  height: -webkit-min-content;
  height: -moz-min-content;
  height: min-content;
  width: 66.16%;
  margin: 18px 5.41% 0px 28.43%;
}

.main-page-section7__flex34-item {
  display: flex;
  flex-direction: column;
  position: relative;
  flex: 0 1 24px;
}

.main-page-section7__image9.layout7 {
  position: relative;
  height: 26px;
  width: 24px;
  min-width: 24px;
}

.main-page-section7__flex34-spacer {
  flex: 0 1 16px;
}

.main-page-section7__subtitle1.layout7 {
  position: relative;
  flex: 0 0 auto;
  height: -webkit-min-content;
  height: -moz-min-content;
  height: min-content;
  margin: 0px 0px 2px;
}

.main-page-section7__flex34-spacer1 {
  flex: 0 1 66px;
}

.main-page-section7__image9.layout8 {
  position: relative;
  height: 26px;
  width: 24px;
  min-width: 24px;
}

.main-page-section7__subtitle1.layout8 {
  position: relative;
  flex: 0 0 auto;
  height: -webkit-min-content;
  height: -moz-min-content;
  height: min-content;
  margin: 0px 0px 2px;
}

.main-page-section7__flex35 {
  display: flex;
}

.main-page-section7__flex35.layout {
  position: relative;
  height: -webkit-min-content;
  height: -moz-min-content;
  height: min-content;
  width: 41.84%;
  margin: 5px 26.49% 0px 31.66%;
}

.main-page-section7__highlights10.layout6 {
  position: relative;
  flex: 0 0 auto;
  height: -webkit-min-content;
  height: -moz-min-content;
  height: min-content;
}

.main-page-section7__flex35-spacer {
  flex: 0 1 362px;
}

.main-page-section7__highlights10.layout7 {
  position: relative;
  flex: 0 0 auto;
  height: -webkit-min-content;
  height: -moz-min-content;
  height: min-content;
}

.main-page-section7__flex36 {
  display: flex;
}

.main-page-section7__flex36.layout {
  position: relative;
  height: -webkit-min-content;
  height: -moz-min-content;
  height: min-content;
  width: 56.62%;
  margin: 18px 14.94% 0px 28.43%;
}

.main-page-section7__flex36-item {
  display: flex;
  flex-direction: column;
  position: relative;
  flex: 0 1 24px;
}

.main-page-section7__image9.layout9 {
  position: relative;
  height: 26px;
  width: 24px;
  min-width: 24px;
}

.main-page-section7__flex36-spacer {
  flex: 0 1 16px;
}

.main-page-section7__subtitle1.layout9 {
  position: relative;
  flex: 0 0 auto;
  height: -webkit-min-content;
  height: -moz-min-content;
  height: min-content;
  margin: 0px 0px 2px;
}

.main-page-section7__flex36-spacer1 {
  flex: 0 1 247px;
}

.main-page-section7__image9.layout10 {
  position: relative;
  height: 26px;
  width: 24px;
  min-width: 24px;
}

.main-page-section7__subtitle1.layout10 {
  position: relative;
  flex: 0 0 auto;
  height: -webkit-min-content;
  height: -moz-min-content;
  height: min-content;
  margin: 0px 0px 2px;
}

.main-page-section7__flex37 {
  display: flex;
}

.main-page-section7__flex37.layout {
  position: relative;
  height: -webkit-min-content;
  height: -moz-min-content;
  height: min-content;
  width: 43.05%;
  margin: 5px 25.28% 0px 31.66%;
}

.main-page-section7__highlights10.layout8 {
  position: relative;
  flex: 0 0 auto;
  height: -webkit-min-content;
  height: -moz-min-content;
  height: min-content;
}

.main-page-section7__flex37-spacer {
  flex: 0 1 384px;
}

.main-page-section7__highlights10.layout9 {
  position: relative;
  flex: 0 0 auto;
  height: -webkit-min-content;
  height: -moz-min-content;
  height: min-content;
}

.main-page-section7__flex38 {
  display: flex;
}

.main-page-section7__flex38.layout {
  position: relative;
  height: -webkit-min-content;
  height: -moz-min-content;
  height: min-content;
  width: 62.52%;
  margin: 18px 9.05% 0px 28.43%;
}

.main-page-section7__flex38-item {
  display: flex;
  flex-direction: column;
  position: relative;
  flex: 0 1 24px;
}

.main-page-section7__image9.layout11 {
  position: relative;
  height: 26px;
  width: 24px;
  min-width: 24px;
}

.main-page-section7__flex38-spacer {
  flex: 0 1 16px;
}

.main-page-section7__subtitle1.layout11 {
  position: relative;
  flex: 0 0 auto;
  height: -webkit-min-content;
  height: -moz-min-content;
  height: min-content;
  margin: 0px 0px 2px;
}

.main-page-section7__flex38-spacer1 {
  flex: 0 1 271px;
}

.main-page-section7__image9.layout12 {
  position: relative;
  height: 26px;
  width: 24px;
  min-width: 24px;
}

.main-page-section7__subtitle1.layout12 {
  position: relative;
  flex: 0 0 auto;
  height: -webkit-min-content;
  height: -moz-min-content;
  height: min-content;
  margin: 0px 0px 2px;
}

.main-page-section7__flex39 {
  display: flex;
}

.main-page-section7__flex39.layout {
  position: relative;
  height: -webkit-min-content;
  height: -moz-min-content;
  height: min-content;
  width: 42.57%;
  margin: 5px 25.77% 0px 31.66%;
}

.main-page-section7__highlights10.layout10 {
  position: relative;
  flex: 0 0 auto;
  height: -webkit-min-content;
  height: -moz-min-content;
  height: min-content;
}

.main-page-section7__flex39-spacer {
  flex: 0 1 393px;
}

.main-page-section7__highlights10.layout11 {
  position: relative;
  flex: 0 0 auto;
  height: -webkit-min-content;
  height: -moz-min-content;
  height: min-content;
}

.main-page-section7__flex40 {
  display: flex;
}

.main-page-section7__flex40.layout {
  position: relative;
  height: -webkit-min-content;
  height: -moz-min-content;
  height: min-content;
  width: 62.2%;
  margin: 18px 9.37% 0px 28.43%;
}

.main-page-section7__flex40-item {
  display: flex;
  flex-direction: column;
  position: relative;
  flex: 0 1 24px;
}

.main-page-section7__image9.layout13 {
  position: relative;
  height: 26px;
  width: 24px;
  min-width: 24px;
}

.main-page-section7__flex40-spacer {
  flex: 0 1 16px;
}

.main-page-section7__subtitle1.layout13 {
  position: relative;
  flex: 0 0 auto;
  height: -webkit-min-content;
  height: -moz-min-content;
  height: min-content;
  margin: 0px 0px 2px;
}

.main-page-section7__flex40-spacer1 {
  flex: 0 1 192px;
}

.main-page-section7__image9.layout14 {
  position: relative;
  height: 26px;
  width: 24px;
  min-width: 24px;
}

.main-page-section7__subtitle1.layout14 {
  position: relative;
  flex: 0 0 auto;
  height: -webkit-min-content;
  height: -moz-min-content;
  height: min-content;
  margin: 0px 0px 2px;
}

.main-page-section7__flex41 {
  display: flex;
}

.main-page-section7__flex41.layout {
  position: relative;
  height: -webkit-min-content;
  height: -moz-min-content;
  height: min-content;
  width: 43.62%;
  margin: 5px 24.72% 0px 31.66%;
}

.main-page-section7__highlights10.layout12 {
  position: relative;
  flex: 0 0 auto;
  height: -webkit-min-content;
  height: -moz-min-content;
  height: min-content;
}

.main-page-section7__flex41-spacer {
  flex: 0 1 356px;
}

.main-page-section7__highlights10.layout13 {
  position: relative;
  flex: 0 0 auto;
  height: -webkit-min-content;
  height: -moz-min-content;
  height: min-content;
}

.main-page-section7__flex42 {
  display: flex;
}

.main-page-section7__flex42.layout {
  position: relative;
  height: -webkit-min-content;
  height: -moz-min-content;
  height: min-content;
  width: 64.05%;
  margin: 18px 7.51% 0px 28.43%;
}

.main-page-section7__flex42-item {
  display: flex;
  flex-direction: column;
  position: relative;
  flex: 0 1 24px;
}

.main-page-section7__image9.layout15 {
  position: relative;
  height: 26px;
  width: 24px;
  min-width: 24px;
}

.main-page-section7__flex42-spacer {
  flex: 0 1 16px;
}

.main-page-section7__subtitle1.layout15 {
  position: relative;
  flex: 0 0 auto;
  height: -webkit-min-content;
  height: -moz-min-content;
  height: min-content;
  margin: 0px 0px 2px;
}

.main-page-section7__flex42-spacer1 {
  flex: 0 1 237px;
}

.main-page-section7__image9.layout16 {
  position: relative;
  height: 26px;
  width: 24px;
  min-width: 24px;
}

.main-page-section7__subtitle1.layout16 {
  position: relative;
  flex: 0 0 auto;
  height: -webkit-min-content;
  height: -moz-min-content;
  height: min-content;
  margin: 0px 0px 2px;
}

.main-page-section7__flex43 {
  display: flex;
}

.main-page-section7__flex43.layout {
  position: relative;
  height: -webkit-min-content;
  height: -moz-min-content;
  height: min-content;
  width: 42.49%;
  margin: 5px 25.85% 0px 31.66%;
}

.main-page-section7__highlights10.layout14 {
  position: relative;
  flex: 0 0 auto;
  height: -webkit-min-content;
  height: -moz-min-content;
  height: min-content;
}

.main-page-section7__flex43-spacer {
  flex: 0 1 378px;
}

.main-page-section7__highlights10.layout15 {
  position: relative;
  flex: 0 0 auto;
  height: -webkit-min-content;
  height: -moz-min-content;
  height: min-content;
}

.main-page-section7__flex44 {
  display: flex;
}

.main-page-section7__flex44.layout {
  position: relative;
  height: -webkit-min-content;
  height: -moz-min-content;
  height: min-content;
  width: 58.16%;
  margin: 18px 13.41% 0px 28.43%;
}

.main-page-section7__flex44-item {
  display: flex;
  flex-direction: column;
  position: relative;
  flex: 0 1 24px;
}

.main-page-section7__image9.layout17 {
  position: relative;
  height: 26px;
  width: 24px;
  min-width: 24px;
}

.main-page-section7__flex44-spacer {
  flex: 0 1 16px;
}

.main-page-section7__subtitle1.layout17 {
  position: relative;
  flex: 0 0 auto;
  height: -webkit-min-content;
  height: -moz-min-content;
  height: min-content;
  margin: 0px 0px 2px;
}

.main-page-section7__flex44-spacer1 {
  flex: 0 1 46px;
}

.main-page-section7__image9.layout18 {
  position: relative;
  height: 26px;
  width: 24px;
  min-width: 24px;
}

.main-page-section7__subtitle1.layout18 {
  position: relative;
  flex: 0 0 auto;
  height: -webkit-min-content;
  height: -moz-min-content;
  height: min-content;
  margin: 0px 0px 2px;
}

.main-page-section7__flex45 {
  display: flex;
}

.main-page-section7__flex45.layout {
  position: relative;
  height: -webkit-min-content;
  height: -moz-min-content;
  height: min-content;
  width: 43.94%;
  margin: 5px 24.39% 0px 31.66%;
}

.main-page-section7__highlights10.layout16 {
  position: relative;
  flex: 0 0 auto;
  height: -webkit-min-content;
  height: -moz-min-content;
  height: min-content;
}

.main-page-section7__flex45-spacer {
  flex: 0 1 379px;
}

.main-page-section7__highlights102-box.layout {
  position: relative;
  flex: 0 0 auto;
  height: -webkit-min-content;
  height: -moz-min-content;
  height: min-content;
}

.main-page-section7__highlights102 {
  overflow: visible;
  margin-top: 0px;
  margin-bottom: 0px;
  margin: 0px;
  font: 16px/1.2 "Open Sans", Helvetica, Arial, serif;
  color: white;
  letter-spacing: 0px;
  white-space: pre-wrap;
}

.main-page-section7__flex46 {
  display: flex;
}

.main-page-section7__flex46.layout {
  position: relative;
  height: -webkit-min-content;
  height: -moz-min-content;
  height: min-content;
  width: 59.45%;
  margin: 18px 12.12% 0px 28.43%;
}

.main-page-section7__flex46-item {
  display: flex;
  flex-direction: column;
  position: relative;
  flex: 0 1 24px;
}

.main-page-section7__image9.layout19 {
  position: relative;
  height: 26px;
  width: 24px;
  min-width: 24px;
}

.main-page-section7__flex46-spacer {
  flex: 0 1 16px;
}

.main-page-section7__subtitle11-box.layout {
  position: relative;
  flex: 0 0 auto;
  height: -webkit-min-content;
  height: -moz-min-content;
  height: min-content;
  margin: 0px 0px 2px;
}

.main-page-section7__subtitle11 {
  overflow: visible;
  margin-top: 0px;
  margin-bottom: 0px;
  margin: 0px;
  font: 600 20px/1.2 "Open Sans", Helvetica, Arial, serif;
  color: white;
  letter-spacing: 0px;
  white-space: pre-wrap;
}

.main-page-section7__flex46-spacer1 {
  flex: 0 1 226px;
}

.main-page-section7__image9.layout20 {
  position: relative;
  height: 26px;
  width: 24px;
  min-width: 24px;
}

.main-page-section7__subtitle1.layout19 {
  position: relative;
  flex: 0 0 auto;
  height: -webkit-min-content;
  height: -moz-min-content;
  height: min-content;
  margin: 0px 0px 2px;
}

.main-page-section7__highlights10.layout17 {
  position: relative;
  flex: 0 0 auto;
  height: -webkit-min-content;
  height: -moz-min-content;
  height: min-content;
}

.main-page-section7__flex41-spacer1 {
  flex: 0 1 378px;
}

.main-page-section7__highlights10.layout18 {
  position: relative;
  flex: 0 0 auto;
  height: -webkit-min-content;
  height: -moz-min-content;
  height: min-content;
}

.main-page-section7__medium-title-box.layout {
  position: relative;
  height: -webkit-min-content;
  height: -moz-min-content;
  height: min-content;
}

.main-page-section7__medium-title {
  overflow: visible;
  margin-top: 0px;
  margin-bottom: 0px;
  margin: 0px;
  font: 700 24px/1.2 "Open Sans", Helvetica, Arial, serif;
  color: white;
  letter-spacing: 0px;
  white-space: pre-wrap;
  text-align: left;
}

.main-page-section8__section8 {
  display: flex;
  flex-direction: column;
}

.main-page-section8__section8.layout {
  position: relative;
  height: -webkit-min-content;
  height: -moz-min-content;
  height: min-content;
}

.main-page-section8__block34 {
  display: flex;
  flex-direction: column;
  background-color: #f8f9fc;
}

.main-page-section8__block34.layout {
  position: relative;
  height: -webkit-min-content;
  height: -moz-min-content;
  height: min-content;
}

.main-page-section8__group {
  display: flex;
  flex-direction: column;
}

.main-page-section8__group.layout {
  position: relative;
  height: -webkit-min-content;
  height: -moz-min-content;
  height: min-content;
  width: 90.63%;
  margin: 64px auto;
}

.main-page-section8__decorator16 {
  background: var(--src) center center/contain no-repeat;
}

.main-page-section8__decorator16.layout {
  position: absolute;
  top: 0px;
  height: 228px;
  left: 0px;
  right: 0px;
  width: 18.34%;
  margin: 51px 60.34% 102px 21.32%;
}

.main-page-section8__flex48 {
  display: flex;
  flex-direction: column;
}

.main-page-section8__flex48.layout {
  position: relative;
  height: -webkit-min-content;
  height: -moz-min-content;
  height: min-content;
  width: 100%;
  margin: 0px 0px;
}

.main-page-section8__flex49 {
  display: flex;
}

.main-page-section8__flex49.layout {
  position: relative;
  height: -webkit-min-content;
  height: -moz-min-content;
  height: min-content;
}

.main-page-section8__medium-title1 {
  font: 700 24px/1.2 "Open Sans", Helvetica, Arial, serif;
  color: #363745;
  letter-spacing: 0px;
  text-align: left;
}

.main-page-section8__medium-title1.layout {
  position: relative;
  flex: 0 0 auto;
  height: -webkit-min-content;
  height: -moz-min-content;
  height: min-content;
}

.main-page-section8__flex49-spacer {
  flex: 0 1 100px;
}

.main-page-section8__flex50 {
  display: flex;
}

.main-page-section8__flex50.layout {
  position: relative;
  height: -webkit-min-content;
  height: -moz-min-content;
  height: min-content;
  margin: 36px 0px 0px;
}

.main-page-section8__flex50-item {
  display: flex;
  flex-direction: column;
  position: relative;
  flex: 0 1 483px;
}

.main-page-section8__block35 {
  display: flex;
  flex-direction: column;
}

.main-page-section8__block35.layout {
  position: relative;
  height: -webkit-min-content;
  height: -moz-min-content;
  height: min-content;
}

.main-page-section8__image11 {
  background: var(--src) center center/contain no-repeat;
}

.main-page-section8__image11.layout {
  position: relative;
  height: 53px;
  width: 102px;
  min-width: 102px;
  margin: 13px auto 250px;
}

.main-page-section8__flex50-spacer {
  flex: 0 1 119px;
}

.main-page-section8__flex50-item1 {
  display: flex;
  flex-direction: column;
  position: relative;
  flex: 0 1 636px;
}

.main-page-section8__block36 {
  display: flex;
  flex-direction: column;
  border-radius: 30px 30px 30px 30px;
}

.main-page-section8__block36.layout {
  position: relative;
  overflow: hidden;
  height: -webkit-min-content;
  height: -moz-min-content;
  height: min-content;
}

.main-page-section8__group1 {
  display: flex;
  flex-direction: column;
  background: var(--src) center center/contain no-repeat;
}

.main-page-section8__group1.layout {
  position: relative;
  height: -webkit-min-content;
  height: -moz-min-content;
  height: min-content;
}

.main-page-section8__block37 {
  display: flex;
  flex-direction: column;
  background-color: white;
  box-shadow: 0px 4px 8px 0px rgba(0, 0, 0, 0.0470588);
  border-radius: 50px 50px 50px 50px;
}

.main-page-section8__block37.layout {
  position: relative;
  height: -webkit-min-content;
  height: -moz-min-content;
  height: min-content;
  width: 100px;
  min-width: 100px;
  margin: 108px auto;
}

.main-page-section8__image13 {
  background: var(--src) center center/contain no-repeat;
}

.main-page-section8__image13.layout {
  position: relative;
  height: 38px;
  width: 33px;
  min-width: 33px;
  margin: 31px 0px 0px 34px;
}

.main-page-section9__section9 {
  display: flex;
  flex-direction: column;
}

.main-page-section9__section9.layout {
  position: relative;
  height: -webkit-min-content;
  height: -moz-min-content;
  height: min-content;
}

.main-page-section9__flex51 {
  display: flex;
}

.main-page-section9__flex51.layout {
  position: relative;
  height: -webkit-min-content;
  height: -moz-min-content;
  height: min-content;
  width: 93.7%;
  margin: 38px auto;
}

.main-page-section9__flex51-item {
  display: flex;
  flex-direction: column;
  position: relative;
  flex: 0 1 89px;
}

.main-page-section9__icon3 {
  background: var(--src) center center/contain no-repeat;
}

.main-page-section9__icon3.layout {
  padding: 0;

  position: relative;
  height: 93px;
  width: 89px;
  min-width: 89px;
  margin: 94px 0px 5px;
}

.main-page-section9__flex51-spacer {
  flex: 0 1 2px;
}

.main-page-section9__flex51-item1 {
  display: flex;
  flex-direction: column;
  position: relative;
  flex: 0 1 28px;
}

.main-page-section9__icon4 {
  background: var(--src) center center/contain no-repeat;
}

.main-page-section9__icon4.layout {
  padding: 0;

  position: relative;
  height: 27px;
  width: 28px;
  min-width: 28px;
  margin: 165px 0px 0px;
}

.main-page-section9__flex51-spacer1 {
  flex: 0 1 82px;
}

.main-page-section9__flex51-item2 {
  display: flex;
  flex-direction: column;
  position: relative;
  flex: 0 1 1079px;
}

.main-page-section9__flex52 {
  display: flex;
  flex-direction: column;
}

.main-page-section9__flex52.layout {
  position: relative;
  height: -webkit-min-content;
  height: -moz-min-content;
  height: min-content;
  margin: 57px 200px 25px 0px;
}

.main-page-section9__image14 {
  background: var(--src) center center/contain no-repeat;
}

.main-page-section9__image14.layout {
  position: relative;
  height: 6px;
  width: 16.38%;
  margin: 0px 26.62% 0px 57%;
}

.main-page-section9__highlights7 {
  font: 16px/1.2 "Open Sans", Helvetica, Arial, serif;
  color: #61637b;
  letter-spacing: 0px;
}

.main-page-section9__highlights7.layout {
  position: relative;
  height: -webkit-min-content;
  height: -moz-min-content;
  height: min-content;
  width: 88.17%;
  margin: 4px auto 0px;
}

.main-page-section9__flex53 {
  display: flex;
}

.main-page-section9__flex53.layout {
  position: relative;
  height: -webkit-min-content;
  height: -moz-min-content;
  height: min-content;
  margin: 34px 0px 0px;
}

.main-page-section9__flex53-item {
  display: flex;
  flex-direction: column;
  position: relative;
  flex: 0 1 320px;
}

.main-page-section9__block38 {
  display: flex;
  flex-direction: column;
  background-color: white;
  border: 1px solid #e4e7f2;
  border-radius: 23px 23px 23px 23px;
}

.main-page-section9__block38.layout {
  position: relative;
  height: -webkit-min-content;
  height: -moz-min-content;
  height: min-content;
}

.main-page-section9__highlights2 {
  font: 16px/1.2 "Open Sans", Helvetica, Arial, serif;
  color: #909ebb;
  letter-spacing: 0px;
}

.main-page-section9__highlights2.layout {
  position: relative;
  height: -webkit-min-content;
  height: -moz-min-content;
  height: min-content;
  margin: 12px 16px 14px;
}

.main-page-section9__flex53-spacer {
  flex: 0 1 24px;
}

.main-page-section9__block39 {
  display: flex;
  flex-direction: column;
  background-color: white;
  border: 1px solid #e4e7f2;
  border-radius: 22px 22px 22px 22px;
}

.main-page-section9__block39.layout {
  position: relative;
  height: -webkit-min-content;
  height: -moz-min-content;
  height: min-content;
  margin: 0px 0px 2px;
}

.main-page-section9__highlights3 {
  font: 16px/1.25 "IBM Plex Sans", Helvetica, Arial, serif;
  color: #909ebb;
  letter-spacing: 0px;
}

.main-page-section9__highlights3.layout {
  position: relative;
  height: -webkit-min-content;
  height: -moz-min-content;
  height: min-content;
  margin: 12px 16px;
}

.main-page-section9__flex53-spacer1 {
  flex: 0 1 32px;
}

.main-page-section9__flex53-item1 {
  display: flex;
  flex-direction: column;
  position: relative;
  flex: 0 1 183px;
}

.main-page-section9__block40 {
  display: flex;
  flex-direction: column;
  background-color: white;
  border: 1px solid #bf0b12;
  border-radius: 21px 21px 21px 21px;
}

.main-page-section9__block40.layout {
  position: relative;
  overflow: hidden;
  height: -webkit-min-content;
  height: -moz-min-content;
  height: min-content;
  margin: 2px 0px;
}

.main-page-section9__highlights5 {
  font: 600 16px/1.2 "Open Sans", Helvetica, Arial, serif;
  color: #bf0b12;
  letter-spacing: 0px;
}

.main-page-section9__highlights5.layout {
  position: relative;
  height: -webkit-min-content;
  height: -moz-min-content;
  height: min-content;
  margin: 10px 20px 12px 24px;
}

.main-page-section10__section10 {
  display: flex;
  flex-direction: column;
}

.main-page-section10__section10.layout {
  position: relative;
  height: -webkit-min-content;
  height: -moz-min-content;
  height: min-content;
}

.main-page-section10__block41 {
  display: flex;
  flex-direction: column;
  background-color: white;
}

.main-page-section10__block41.layout {
  position: relative;
  height: -webkit-min-content;
  height: -moz-min-content;
  height: min-content;
  margin: 1px 0px 0px;
}

.main-page-section10__decorator19 {
  background: var(--src) center center/contain no-repeat;
  border-radius: 60px 60px 60px 60px;
}

.main-page-section10__decorator19.layout {
  position: absolute;
  top: -1px;
  height: 627px;
  width: 1302px;
  right: 32px;
}

.main-page-section10__decorator16 {
  background: var(--src) center center/contain no-repeat;
}

.main-page-section10__decorator16.layout {
  position: absolute;
  top: -663px;
  height: 228px;
  left: 52px;
  width: 227px;
}

.main-page-section10__decorator17 {
  background: var(--src) center center/contain no-repeat;
}

.main-page-section10__decorator17.layout {
  position: absolute;
  top: -547px;
  height: 227px;
  left: 190px;
  width: 227px;
}

.main-page-section10__flex54 {
  display: flex;
  flex-direction: column;
}

.main-page-section10__flex54.layout {
  position: relative;
  height: -webkit-min-content;
  height: -moz-min-content;
  height: min-content;
  width: 84.99%;
  margin: 91px auto;
}

.main-page-section10__group {
  display: flex;
  flex-direction: column;
}

.main-page-section10__group.layout1 {
  position: relative;
  height: 81px;
  width: 56.76%;
  margin: 23px auto 0px;
}

.main-page-section10__medium-title {
  font: 700 24px/1.2 "Open Sans", Helvetica, Arial, serif;
  color: white;
  letter-spacing: 0px;
}

.main-page-section10__medium-title.layout {
  position: absolute;
  top: 45px;
  height: -webkit-min-content;
  height: -moz-min-content;
  height: min-content;
  bottom: 7px;
  left: 35px;
  right: 31px;
}

.main-page-section10__cover2 {
  background: var(--src) center center/contain no-repeat;
}

.main-page-section10__cover2.layout {
  position: absolute;
  top: 0px;
  height: 81px;
  left: 0px;
  right: 0px;
}

.main-page-section10__flex55 {
  display: flex;
}

.main-page-section10__flex55.layout {
  position: relative;
  height: -webkit-min-content;
  height: -moz-min-content;
  height: min-content;
  width: 87.86%;
  margin: 53px auto 0px;
}

.main-page-section10__flex55-spacer {
  flex: 0 1 249px;
}

.main-page-section10__flex55-spacer1 {
  flex: 0 1 250px;
}

.main-page-section10__flex56 {
  display: flex;
}

.main-page-section10__flex56.layout {
  position: relative;
  height: -webkit-min-content;
  height: -moz-min-content;
  height: min-content;
  margin: 10px 0px 0px 16px;
}

.main-page-section10__subtitle1 {
  margin-top: 10px;
  display: flex;
  justify-content: center;
  font: 600 20px/1.2 "Open Sans", Helvetica, Arial, serif;
  color: white;
  text-align: center;
  letter-spacing: 0px;
}

.main-page-section10__subtitle1.layout {
  position: relative;
  flex: 0 0 auto;
  height: -webkit-min-content;
  height: -moz-min-content;
  height: min-content;
}

.main-page-section10__flex56-spacer {
  flex: 0 1 102px;
}

.main-page-section10__flex56-spacer1 {
  flex: 0 1 85px;
}

.main-page-section10__flex56-spacer2 {
  flex: 0 1 110px;
}

.main-page-section10__group.layout {
  position: relative;
  height: 68px;
  width: 60.55%;
  margin: 83px auto 0px;
}

.main-page-section10__flex57 {
  display: flex;
}

.main-page-section10__flex57.layout {
  position: relative;
  height: -webkit-min-content;
  height: -moz-min-content;
  height: min-content;
  width: 73.39%;
  margin: 10px 11.02% 0px 15.59%;
}

.main-page-section10__flex57-spacer {
  flex: 0 1 168px;
}

.main-page-section10__flex57-spacer1 {
  flex: 0 1 114px;
}

.main-page-section11__section11 {
  display: flex;
  flex-direction: column;
}

.main-page-section11__section11.layout {
  position: relative;
  height: -webkit-min-content;
  height: -moz-min-content;
  height: min-content;
}

.main-page-section11__block48 {
  display: flex;
  flex-direction: column;
  border-radius: 0px 0px 30px 30px;
}

.main-page-section11__block48.layout {
  position: absolute;
  overflow: hidden;
  top: 140px;
  height: 320px;
  width: 286px;
  right: -256px;
}

.main-page-section11__decorator20 {
  background: var(--src) center center/contain no-repeat;
}

.main-page-section11__decorator20.layout {
  position: absolute;
  top: 0px;
  height: 320px;
  left: 0px;
  width: 294px;
}

.main-page-section11__group {
  display: flex;
  flex-direction: column;
}

.main-page-section11__group.layout1 {
  position: relative;
  height: -webkit-min-content;
  height: -moz-min-content;
  height: min-content;
  margin: 64px 0px;
}

.main-page-section11__decorator18 {
  background: var(--src) center center/contain no-repeat;
}

.main-page-section11__decorator18.layout {
  position: absolute;
  top: -1355px;
  height: 357px;
  width: 636px;
  right: 64px;
}

.main-page-section11__group.layout {
  position: relative;
  height: -webkit-min-content;
  height: -moz-min-content;
  height: min-content;
}

.main-page-section11__medium-title2-box {
  display: flex;
  justify-content: center;
}

.main-page-section11__medium-title2-box.layout {
  position: absolute;
  top: -895px;
  height: 33px;
  width: 879px;
  right: 243px;
}

.main-page-section11__medium-title2 {
  font: 700 24px/1.2 "Open Sans", Helvetica, Arial, serif;
  color: black;
  text-align: center;
  letter-spacing: 0px;
}

.main-page-section11__medium-title2-span0 {
  font: 700 1em/1.2 "Open Sans", Helvetica, Arial, serif;
  color: #363745ff;
  letter-spacing: 0px;
}

.main-page-section11__medium-title2-span1 {
  font: 700 1em/1.2 "Open Sans", Helvetica, Arial, serif;
  color: #bf0b12ff;
  letter-spacing: 0px;
}

.main-page-section11__medium-title2-span2 {
  font: 700 1em/1.2 "Open Sans", Helvetica, Arial, serif;
  color: #363745ff;
  letter-spacing: 0px;
}

.main-page-section11__flex58 {
  display: flex;
  flex-direction: column;
}

.main-page-section11__flex58.layout {
  position: relative;
  height: -webkit-min-content;
  height: -moz-min-content;
  height: min-content;
}

.main-page-section11__big-title2 {
  font: 700 32px/1.2 "Open Sans", Helvetica, Arial, serif;
  color: #363745;
  text-align: center;
  letter-spacing: 0px;
  margin-top: 64px;
  margin-bottom: 32px;
}

.main-page-section11__big-title2.layout {
  position: relative;
  height: -webkit-min-content;
  height: -moz-min-content;
  height: min-content;
  width: 36.6%;
  margin: 0px auto;
}

.main-page-section11__block47 {
  display: flex;
}

.main-page-section11__block47.layout {
  position: relative;
  height: -webkit-min-content;
  height: -moz-min-content;
  height: min-content;
  width: 95.31%;
  margin: 37px 0% 0px 4.69%;
}

.main-page-section11__block47-item {
  display: flex;
  flex-direction: column;
  position: relative;
  flex: 0 1 286px;
}

.main-page-section11__block48.layout1 {
  position: relative;
  overflow: hidden;
  height: 320px;
}

.main-page-section11__decorator20.layout1 {
  position: absolute;
  top: 0px;
  height: 320px;
  width: 294px;
  right: -8px;
}

.main-page-section11__block47-spacer {
  flex: 0 1 32px;
}

.main-page-section11__block48.layout2 {
  position: relative;
  overflow: hidden;
  height: 320px;
}

.main-page-section11__decorator20.layout2 {
  position: absolute;
  top: 0px;
  height: 320px;
  width: 294px;
  right: -8px;
}

.main-page-section11__block48.layout3 {
  position: relative;
  overflow: hidden;
  height: 320px;
}

.main-page-section11__decorator20.layout3 {
  position: absolute;
  top: 0px;
  height: 320px;
  width: 294px;
  right: -8px;
}

.main-page-section11__block47-item1 {
  display: flex;
  flex-direction: column;
  position: relative;
  flex: 0 1 348px;
}

.main-page-section11__block48.layout4 {
  position: relative;
  overflow: hidden;
  height: 320px;
  margin: 0px 62px 0px 0px;
}

.main-page-section11__decorator20.layout4 {
  position: absolute;
  top: 0px;
  height: 320px;
  width: 294px;
  right: -8px;
}

.main-page-section11__image19 {
  background: var(--src) center center/contain no-repeat;
}

.main-page-section11__image19.layout {
  position: relative;
  height: 4px;
  width: 26.65%;
  margin: 32px 34.33% 0px 39.02%;
}

.main-page-section12__section12 {
  display: flex;
  flex-direction: column;
}

.main-page-section12__section12.layout {
  position: relative;
  height: -webkit-min-content;
  height: -moz-min-content;
  height: min-content;
}

.main-page-section12__flex59 {
  display: flex;
  flex-direction: column;
}

.main-page-section12__flex59.layout {
  position: relative;
  height: -webkit-min-content;
  height: -moz-min-content;
  height: min-content;
  width: 57.98%;
  margin: 64px auto;
}

.main-page-section12__big-title2 {
  font: 700 32px/1.2 "Open Sans", Helvetica, Arial, serif;
  color: #363745;
  letter-spacing: 0px;
}

.main-page-section12__big-title2.layout {
  position: relative;
  height: -webkit-min-content;
  height: -moz-min-content;
  height: min-content;
  width: 84.6%;
  margin: 0px auto;
}

.main-page-section12__image20 {
  background: var(--src) center center/contain no-repeat;
  width: 100%;
  height: 100%;
}

.main-page-section12__highlights11-box {
  justify-content: center;
}

.main-page-section12__highlights11-box.layout {
  position: relative;
  height: -webkit-min-content;
  height: -moz-min-content;
  height: min-content;
  width: 88.89%;
  margin: 7px auto 0px;
}

.main-page-section12__highlights11 {
  font: 600 16px/1.2 "Open Sans", Helvetica, Arial, serif;
  color: black;
  text-align: right;
  letter-spacing: 0px;
}

.main-page-section12__highlights11-span0 {
  font: 600 1em/1.2 "Open Sans", Helvetica, Arial, serif;
  color: #363745ff;
  letter-spacing: 0px;
}

.main-page-section12__highlights11-span1 {
  font: 600 1em/1.2 "Open Sans", Helvetica, Arial, serif;
  color: #bf0b12ff;
  letter-spacing: 0px;
}

.main-page-section13__section13 {
  display: flex;
  flex-direction: column;
}

.main-page-section13__section13.layout {
  position: relative;
  height: -webkit-min-content;
  height: -moz-min-content;
  height: min-content;
}

.main-page-section13__block54 {
  display: flex;
  flex-direction: column;
  background-color: #fbfbfb;
}

.main-page-section13__block54.layout {
  position: relative;
  overflow: hidden;
  height: -webkit-min-content;
  height: -moz-min-content;
  height: min-content;
  margin: 1px 0px 0px;
}

.main-page-section13__flex60 {
  display: flex;
}

.main-page-section13__flex60.layout {
  position: relative;
  height: -webkit-min-content;
  height: -moz-min-content;
  height: min-content;
  width: 90.63%;
  margin: 64px auto;
}

.main-page-section13__flex60-item {
  display: flex;
  flex-direction: column;
  position: relative;
  flex: 0 1 543px;
}

.main-page-section13__block55 {
  display: flex;
  flex-direction: column;
  border-radius: 20px 20px 20px 20px;
}

.main-page-section13__block55.layout {
  position: relative;
  overflow: hidden;
  height: 383px;
}

.main-page-section13__block56 {
  display: flex;
  flex-direction: column;
  min-height: 400px;
  
  background-color: #ff5c62;
  box-shadow: 4px 0px 4px 0px rgba(0, 0, 0, 0.0470588);
  border-radius: 20px 20px 20px 20px;
  padding-left: 32px;
  padding-right: 32px;
}

.main-page-section13__block56.layout {
  position: absolute;
  overflow: hidden;
  top: 0px;
  height: -webkit-min-content;
  height: -moz-min-content;
  height: min-content;
  bottom: 0px;
  left: 0px;
  right: 0px;
}

.main-page-section13__flex61 {
  display: flex;
  flex-direction: column;
}

.main-page-section13__flex61.layout {
  position: relative;
  height: -webkit-min-content;
  height: -moz-min-content;
  height: min-content;
  margin: 32px 23px;
}

.main-page-section13__hero-title3 {
  font: 700 36px/1.2 "Open Sans", Helvetica, Arial, serif;
  color: white;
  letter-spacing: 0px;
}

.main-page-section13__hero-title3.layout {
  position: relative;
  height: -webkit-min-content;
  height: -moz-min-content;
  height: min-content;
  margin-top: 32px;
}

.main-page-section13__flex62 {
  display: flex;
}

.main-page-section13__flex62.layout {
  position: relative;
  height: -webkit-min-content;
  height: -moz-min-content;
  height: min-content;
  margin: 29px 9px 0px;
}

.main-page-section13__flex62-item {
  display: flex;
  flex-direction: column;
  position: relative;
  flex: 0 1 24px;
}

.main-page-section13__icon9 {
  background: var(--src) center center/contain no-repeat;
}

.main-page-section13__icon9.layout {
  padding: 0;

  position: relative;
  height: 24px;
  width: 24px;
  min-width: 24px;
}

.main-page-section13__flex62-spacer {
  flex: 0 1 16px;
}

.main-page-section13__highlights4 {
  font: 600 16px/1.2 "Open Sans", Helvetica, Arial, serif;
  color: white;
  letter-spacing: 0px;
  margin-left: 16px;
  text-align: left
}

.main-page-section13__highlights4.layout {
  position: relative;
  flex: 0 0 auto;
  height: -webkit-min-content;
  height: -moz-min-content;
  height: min-content;
  margin: 0px 0px 4px;
}

.main-page-section13__flex63 {
  display: flex;
}

.main-page-section13__flex63.layout {
  position: relative;
  height: -webkit-min-content;
  height: -moz-min-content;
  height: min-content;
  margin: 16px 9px 0px 11px;
}

.main-page-section13__flex63-item {
  display: flex;
  flex-direction: column;
  position: relative;
  flex: 0 1 20px;
}

.main-page-section13__cover-group2 {
  display: flex;
  flex-direction: column;
}

.main-page-section13__cover-group2.layout {
  position: relative;
  height: -webkit-min-content;
  height: -moz-min-content;
  height: min-content;
  margin: 0px 0px 15px;
}

.main-page-section13__icon10 {
  background: var(--src) center center/contain no-repeat;
}

.main-page-section13__icon10.layout {
  position: absolute;
  top: 0px;
  height: 8px;
  left: 0px;
  width: 8px;
  min-width: 8px;
  margin: 6px 6px 10px;
}

.main-page-section13__image38 {
  background: var(--src) center center/contain no-repeat;
}

.main-page-section13__image38.layout {
  position: relative;
  height: 24px;
  width: 20px;
  min-width: 20px;
}

.main-page-section13__flex63-spacer {
  flex: 0 1 18px;
}

.main-page-section13__flex63-item1 {
  display: flex;
  flex-direction: column;
  position: relative;
  flex: 1 1 439px;
}

.main-page-section13__highlights4.layout1 {
  position: relative;
  height: -webkit-min-content;
  height: -moz-min-content;
  height: min-content;
}

.main-page-section13__flex64 {
  display: flex;
}

.main-page-section13__flex64.layout {
  position: relative;
  height: -webkit-min-content;
  height: -moz-min-content;
  height: min-content;
  margin: 21px 13px 0px;
}

.main-page-section13__flex64-item {
  display: flex;
  flex-direction: column;
  position: relative;
  flex: 0 1 16px;
}

.main-page-section13__cover-block4 {
  display: flex;
  flex-direction: column;
  background: var(--src) center center/contain no-repeat;
}

.main-page-section13__cover-block4.layout {
  position: relative;
  height: -webkit-min-content;
  height: -moz-min-content;
  height: min-content;
}

.main-page-section13__icon11 {
  background: var(--src) center center/contain no-repeat;
}

.main-page-section13__icon11.layout {
  padding: 0;

  position: relative;
  height: 2px;
  width: 2px;
  min-width: 2px;
  margin: 19px 7px 3px;
}

.main-page-section13__flex64-spacer {
  flex: 0 1 20px;
}

.main-page-section13__highlights4.layout2 {
  position: relative;
  height: -webkit-min-content;
  height: -moz-min-content;
  height: min-content;
  width: 80.28%;
  margin: 6px auto 0px;
}

.main-page-section13__highlights4.layout3 {
  position: relative;
  height: -webkit-min-content;
  height: -moz-min-content;
  height: min-content;
  width: 80.28%;
  margin: 10px auto 0px;
}

.main-page-section13__flex65 {
  display: flex;
}

.main-page-section13__flex65.layout {
  position: relative;
  height: -webkit-min-content;
  height: -moz-min-content;
  height: min-content;
  margin: 26px 9px 0px;
}

.main-page-section13__flex65-item {
  display: flex;
  flex-direction: column;
  position: relative;
  flex: 0 1 40px;
}

.main-page-section13__cover-block3 {
  display: flex;
  flex-direction: column;
  background-color: #bf0b12;
  border-radius: 20px 20px 20px 20px;
}

.main-page-section13__cover-block3.layout {
  position: relative;
  height: -webkit-min-content;
  height: -moz-min-content;
  height: min-content;
}

.main-page-section13__icon {
  background: var(--src) center center/contain no-repeat;
}

.main-page-section13__icon.layout {
  position: relative;
  height: 20px;
  width: 20px;
  min-width: 20px;
  margin: 10px;
}

.main-page-section13__flex65-spacer {
  flex: 0 1 41px;
}

.main-page-section13__cover-block2 {
  display: flex;
  flex-direction: column;
  background-color: #bf0b12;
  border-radius: 20px 20px 20px 20px;
}

.main-page-section13__cover-block2.layout {
  position: relative;
  height: -webkit-min-content;
  height: -moz-min-content;
  height: min-content;
}

.main-page-section13__image40 {
  background: var(--src) center center/contain no-repeat;
}

.main-page-section13__image40.layout {
  position: relative;
  height: 23px;
  width: 12px;
  min-width: 12px;
  margin: 8px 14px 9px;
}

.main-page-section13__flex65-spacer1 {
  flex: 0 1 40px;
}

.main-page-section13__cover-block1 {
  display: flex;
  flex-direction: column;
  background-color: #bf0b12;
  border-radius: 20px 20px 20px 20px;
}

.main-page-section13__cover-block1.layout {
  position: relative;
  height: -webkit-min-content;
  height: -moz-min-content;
  height: min-content;
}

.main-page-section13__image41 {
  background: var(--src) center center/contain no-repeat;
}

.main-page-section13__image41.layout {
  position: relative;
  height: 14px;
  width: 22px;
  min-width: 22px;
  margin: 13px 9px;
}

.main-page-section13__cover-block {
  display: flex;
  flex-direction: column;
  background-color: #bf0b12;
  border-radius: 20px 20px 20px 20px;
}

.main-page-section13__cover-block.layout {
  position: relative;
  height: -webkit-min-content;
  height: -moz-min-content;
  height: min-content;
}

.main-page-section13__image42 {
  background: var(--src) center center/contain no-repeat;
}

.main-page-section13__image42.layout {
  position: relative;
  height: 15px;
  width: 22px;
  min-width: 22px;
  margin: 13px 9px 12px;
}

.main-page-section13__decorator21 {
  background: var(--src) center center/contain no-repeat;
}

.main-page-section13__decorator21.layout {
  position: absolute;
  height: 248px;
  bottom: -32px;
  width: 253px;
  right: -70px;
}

.main-page-section13__flex65-spacer2 {
  flex: 0 1 72px;
}

.main-page-section13__flex65-item1 {
  display: flex;
  flex-direction: column;
  position: relative;
  flex: 0 1 623px;
}

.main-page-section13__flex66 {
  display: flex;
  flex-direction: column;
}

.main-page-section13__flex66.layout {
  position: relative;
  height: -webkit-min-content;
  height: -moz-min-content;
  height: min-content;
  margin: 32px 32px 32px 0px;
}

.main-page-section13__hero-title1 {
  font: 700 36px/1.2 "Open Sans", Helvetica, Arial, serif;
  color: #363745;
  letter-spacing: 0px;
  text-align: left;
}

.main-page-section13__hero-title1.layout {
  position: relative;
  height: -webkit-min-content;
  height: -moz-min-content;
  height: min-content;
}

.main-page-section13__highlights1 {
  font: 600 16px/1.2 "Open Sans", Helvetica, Arial, serif;
  color: #61637b;
  letter-spacing: 0px;
  text-align: left;
}

.main-page-section13__highlights1.layout {
  position: relative;
  height: -webkit-min-content;
  height: -moz-min-content;
  height: min-content;
  margin: 9px 21px 0px 0px;
}

.main-page-section13__flex67 {
  display: flex;
}

.main-page-section13__flex67.layout {
  position: relative;
  height: -webkit-min-content;
  height: -moz-min-content;
  height: min-content;
  margin: 26px 0px 0px;
}

.main-page-section13__flex67-item {
  display: flex;
  flex-direction: column;
  position: relative;
  flex: 0 1 284px;
}

.main-page-section13__block57 {
  display: flex;
  flex-direction: column;
  background-color: white;
  border: 1px solid #e4e7f2;
  border-radius: 23px 23px 23px 23px;
}

.main-page-section13__block57.layout {
  position: relative;
  height: -webkit-min-content;
  height: -moz-min-content;
  height: min-content;
}

.main-page-section13__highlights2 {
  font: 16px/1.2 "Open Sans", Helvetica, Arial, serif;
  color: #909ebb;
  letter-spacing: 0px;
}

.main-page-section13__highlights2.layout {
  position: relative;
  height: -webkit-min-content;
  height: -moz-min-content;
  height: min-content;
  margin: 12px 16px 14px;
}

.main-page-section13__flex67-spacer {
  flex: 0 1 24px;
}

.main-page-section13__flex67-item1 {
  display: flex;
  flex-direction: column;
  position: relative;
  flex: 0 1 283px;
}

.main-page-section13__block58 {
  display: flex;
  flex-direction: column;
  background-color: white;
  border: 1px solid #e4e7f2;
  border-radius: 23px 23px 23px 23px;
}

.main-page-section13__block58.layout {
  position: relative;
  height: -webkit-min-content;
  height: -moz-min-content;
  height: min-content;
}

.main-page-section13__block59 {
  display: flex;
  flex-direction: column;
  background-color: white;
  border: 1px solid #e4e7f2;
  border-radius: 30px 30px 30px 30px;
}

.main-page-section13__block59.layout {
  position: relative;
  height: -webkit-min-content;
  height: -moz-min-content;
  height: min-content;
  margin: 16px 0px 0px;
}

.main-page-section13__highlights2.layout1 {
  position: relative;
  height: -webkit-min-content;
  height: -moz-min-content;
  height: min-content;
  margin: 12px 16px 32px;
}

.main-page-section13__block60 {
  display: flex;
  flex-direction: column;
  background-color: white;
  border: 1px solid #bf0b12;
  border-radius: 21px 21px 21px 21px;
}

.main-page-section13__block60.layout {
  position: relative;
  overflow: hidden;
  height: -webkit-min-content;
  height: -moz-min-content;
  height: min-content;
  margin: 52px 0px 0px;
}

.main-page-section13__highlights5-box {
  display: flex;
  justify-content: flex-end;
}

.main-page-section13__highlights5-box.layout {
  position: relative;
  height: -webkit-min-content;
  height: -moz-min-content;
  height: min-content;
  width: 36.72%;
  margin: 10px auto 12px;
}

.main-page-section13__highlights5 {
  overflow: visible;
  margin-top: 0px;
  margin-bottom: 0px;
  margin: 0px;
  font: 600 16px/1.2 "Open Sans", Helvetica, Arial, serif;
  color: #bf0b12;
  text-align: right;
  letter-spacing: 0px;
  white-space: pre-wrap;
}

.row {
  justify-content: center;
}

.video-row-wrapper {
  display: flex;
  flex-direction: row;
  margin-top: 20px;
}

.video-div{
  width: 50%;
}

@media only screen and (max-width: 770px) {
  .main-page-section2__decorator2 {
    min-height: 1200px;
  }
  .video-row-wrapper {
    margin-top: 0;
    flex-direction: column;
  }
  .video-div{
    width: 100%;
    margin-top: 20px;
  }

  .main-page-section5__medium-title, .main-page-section5__highlights4 {
    color: black;
  }

  .col {
    flex: none !important;
  }

  .main-page-section1__block61 .col,.main-form-div .col {
    flex: 1 0 0 !important;
  }

  .why-turkey {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 24px;
  }
}

</style>
